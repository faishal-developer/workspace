import React, { useEffect, useState } from 'react';
import CardView from '../Card/Card.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import SearchBar from './SearchBar/SearchBar';
import './Static/MainBox.scss'
import jsonData from './fakeData.json'
import { stickyPosition } from '../../helper/CommonFunction';
import CardsCarousel from '../cardCarousel/CardsCarousel.view';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import useMainBox from './MainBox.presenter';
import CardSkeleton from '../skeleton/CardSkeleton.view';
import Pagination from '../Pagination/CustomPagination.view';
import { addQueryParams } from '../../helper/CommonFunction';

const icons={...iconList};
const MainBox = (props) => {
    const navigate = useNavigate();
    const {className} = props;
    const [data,setData] = useState([]);
    const { t } = useTranslation();
    const [page,setPage] = useState(1);
    const [mLimit,setMLimit] = useState(20);
    const [mTotal,setMTotal] = useState(0)
    const [fLoader,setFLoader] = useState(true);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cat_ids = queryParams.get('cat');
    const subcat_ids = queryParams.get('s_cat');
    const keyword = queryParams.get('key');
    const ispopular = queryParams.get('popular');
    const islatest = queryParams.get('latest');
    const { getProducts, queryMaker } = useMainBox();

    useEffect(()=>{
        let body = queryMaker({cat_ids:[cat_ids],subcat_ids:[subcat_ids],keyword,islatest,ispopular})
        const query = `limit=${mLimit}&page=${page}`
        getProducts({ query, body }, { setData, setLoader:setFLoader,setMTotal });
    },[location.search,page])

   useEffect(()=>{
       stickyPosition("icons", "p_sticky40")

    },[])
    useEffect(()=>{console.log(page)},[page])
    const products = t('products');
    return (
        <div className={`${className} main_box`}>
            {/* <div className='banner'>banner</div> */}
            <SearchBar />
            <div >
                <div id="icons" className='icons'>
                  {
                    Object.values(icons).map((v, i) => (
                        <span key={i}><FontAwesome icon={v} /></span>
                    ))
                  }               
                </div>
            </div>
            <div id='cards'>
                {
                    fLoader? (
                        <CardSkeleton container="cards" num={20}/>
                    ) :(
                        <Pagination
                            onPageChange={(p)=>{}}
                            currentPage={page}
                            setCurrentPage={setPage}
                            totalPage={Math.ceil(mTotal / mLimit)}
                        >
                                <div className='cards mb-3'>
                                    {
                                        data.length >= 1 ? (data.map((el, i) => (
                                            <CardView
                                                key={i}
                                                product={el}
                                                border='border_green'
                                            />
                                        ))) : <p className='text-danger text-center my-5'>No Data Found</p>
                                    }
                                </div>
                        </Pagination>
                        
                    )
                }
                <div className='card_carousel'>
                    <CardsCarousel heading={`${t('Discounted')} ${products}`} data={data} className='popular' />
                    <CardsCarousel heading={`${t('Popular')} ${products}`} data={data} className='popular' />
                    <CardsCarousel heading={`${t('latest')} ${products}`} data={data} className='Latest' />
                    <CardsCarousel heading={`${t('lasercut')} ${products}`} data={data} className='Latest' />
                    <CardsCarousel heading={`${t('3dModel')} ${products}`} data={data} className='Latest' />
                    <CardsCarousel heading={`${t('dtf')} ${products}`} data={data} className='Latest' />
                </div>
            </div>
            
        </div>
    );
};

export default MainBox;