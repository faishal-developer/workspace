import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next"
import '../static/asideBar.scss'
// import { Category } from '../UtilsAsideBar';
import useasideDropDown from './asideDropDown.presenter';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';
import BP from '../../../scss/CommonClass';
import { widthDetector } from '../../../helper/CommonFunction';
import useHome from '../../../pages/Home/Home.Presenter';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import CategorySkeleton from '../../skeleton/CategorySkeleton.view';
import SubCatSkeleton from '../../skeleton/subCatSkeleton.view';

const AsideDropDown = () => {
    const Category = useSelector((state) => state.catSlice.cat);
    const SubCategories = useSelector((state) => state.SubcatSlice.SubCategories);
    const { t } = useTranslation();
    const [activeId,setActiveId] = useState('');
    const { filterCategory, Cat_click_handler } = useasideDropDown();
    const [subCats,setSubcats] = useState([])
    const [subCat,setSubcat] = useState('')
    const [showSubCat,setShowSubCat] = useState(false);
    // const { get_categories, get_Subcategories } = useHome();
    const [catLoader, setCatLoader] = useState(true);
    const [subCatLoader, setSubCatLoader] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(Category.length)setCatLoader(false);
    }, [Category])
    useEffect(() => {
        if(SubCategories.length)setSubCatLoader(false);
    }, [SubCategories])
    
    useEffect(()=>{
        filterCategory(activeId, { SubCategories, setSubcats, setSubcat });
    },[activeId,SubCategories])
    return (
        <div className='aside_main'>
            {
                catLoader?(
                    <CategorySkeleton/>
                ) :(
                    Category.length?
                    <div className='circles'>
                        <div
                            onClick={() =>
                                Cat_click_handler(
                                    { id: "", setId: setActiveId },
                                    { query: "", navigate },
                                    ''
                                )}
                            className={`circle ${activeId === "" ? "active" : ''}`}
                        >
                            all
                        </div>
                        {
                            Category.length >= 1 ? Category.map((el, i) => (
                                <div
                                    onClick={() =>
                                        Cat_click_handler(
                                            { id: el._id, setId: setActiveId },
                                            { query: "cat=" + el._id, navigate },
                                            ''
                                        )}
                                    key={i}
                                    className={`circle ${activeId === el._id ? "active" : ''}`}
                                >
                                    {el.name}
                                </div>
                            )) : null
                        }
                            </div> : <h6 className='text-danger ms-4'>No Data Found</h6>
                )
            }
            <div className='sub_cat'>
                <p onClick={() => setShowSubCat(!showSubCat)}>
                    {t('aside.subcat')}
                    <span className={widthDetector(767, 0) ? 'arrow_down' : BP.dnone}>
                        {
                            showSubCat ? (
                                <FontAwesome icon={iconList.AngleDown} />
                            ) : (
                                <FontAwesome icon={iconList.AngleDown} />
                            )
                        }
                    </span>
                </p>
                {
                    subCatLoader?(
                        <SubCatSkeleton/>
                    ) :(
                        <ul className={!showSubCat && widthDetector(767, 0) ? BP.dnone : 'sub-cat-items'}>
                            {
                                subCats.length ? subCats.map((el, i) => (
                                    <li
                                        onClick={() =>
                                            Cat_click_handler(
                                                { id: el._id, setId: setSubcat },
                                                { query: "s_cat=" + el._id, navigate },
                                                ''
                                            )}
                                        key={i} className={subCat === el._id ? "item active" : 'item'}
                                    >
                                        {el.name}
                                    </li>
                                )) : <h6 className='text-danger'>No Data Found</h6>
                            }
                        </ul>
                    )
                }
                
            </div>
        </div>
    );
};

export default AsideDropDown;