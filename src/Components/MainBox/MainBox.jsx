import React, { useEffect, useState } from 'react';
import CardView from '../Card/Card.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import SearchBar from './SearchBar/SearchBar';
import './Static/MainBox.scss'
import CardsCarousel from '../cardCarousel/CardsCarousel.view';
import { useTranslation } from 'react-i18next';
import useMainBox from './MainBox.presenter';
import CardSkeleton from '../skeleton/CardSkeleton.view';
import Pagination from '../Pagination/CustomPagination.view';
import { useLocation } from 'react-router-dom';
import { stickyPosition } from '../../helper/CommonFunction';

const icons={...iconList};
const MainBox = (props) => {
    const location = useLocation();
    // const Category = useSelector((state) => state.catSlice.cat);
    const {className} = props;
    const { t } = useTranslation();
    const {
        data, page, setPage, mLimit, mTotal, fLoader, popular, popularLoader, latest, latestLoader, discounted, discountedLoader, initialCall, initialCall2
    } = useMainBox();

    useEffect(()=>{
        stickyPosition("icons", "p_sticky40")
        initialCall2();
    },[])

    useEffect(()=>{
        initialCall(1);
        setPage(1);
    },[location.search])

    useEffect(()=>{
        initialCall();
    },[page])
   
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
                        <CardSkeleton container="cards" num={10}/>
                    ) :(
                        <Pagination
                            onPageChange={(p)=>{}}
                            currentPage={page}
                            setCurrentPage={setPage}
                            totalPage={Math.ceil(mTotal / mLimit)||0}
                        >
                                <div className='cards mb-3'>
                                    {
                                        data?.length >= 1 ? (data.map((el, i) => (
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
                    {
                        popularLoader?(
                            <CardSkeleton num={5} container="cards"/>
                        ):(
                            popular?.length ?(
                                <CardsCarousel 
                                    heading={`${t('Popular')} ${products}`} 
                                    data={popular} className='popular'
                                    query='?ispopular=true' 
                                />
                            ):<p className='text-danger text-center'></p>
                        )
                    }
                    {
                        discountedLoader ?(
                            <CardSkeleton num={5} container="cards"/>
                        ):(
                            discounted?.length ?(
                                <CardsCarousel 
                                    heading={`${t('Discounted')} ${products}`} 
                                    data={discounted} className='popular'
                                    query='?discounted=true' 
                                />
                            ):<p className='text-danger text-center'></p>
                        )
                    }
                    {
                        latestLoader ?(
                            <CardSkeleton num={5} container="cards"/>
                        ):(
                            latest?.length ?(
                                <CardsCarousel 
                                    heading={`${t('Latest')} ${products}`} 
                                    data={latest} className='popular'
                                    query='?islatest=true' 
                                />
                            ):<p className='text-danger text-center'></p>
                        )
                    }
                </div>
            </div>
            
        </div>
    );
};

export default MainBox;