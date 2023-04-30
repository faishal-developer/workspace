import React, { useEffect, useState } from 'react';
import CardView from '../Card/Card.view';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome';
import SearchBar from './SearchBar/SearchBar';
import './Static/MainBox.scss'
import { scrollToTop, stickyPosition } from '../../helper/CommonFunction';
import CardsCarousel from '../cardCarousel/CardsCarousel.view';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useMainBox from './MainBox.presenter';
import CardSkeleton from '../skeleton/CardSkeleton.view';
import Pagination from '../Pagination/CustomPagination.view';
import { useSelector } from 'react-redux';

const icons={...iconList};
const MainBox = (props) => {
    // const Category = useSelector((state) => state.catSlice.cat);
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
    const isdiscounted = queryParams.get('discounted');
    const { getProducts, queryMaker } = useMainBox();
    const [popular,setPopular] = useState([]);
    const [popularLoader,setPopularLoader] = useState(true)
    const [latest,setLatest] = useState([]);
    const [latestLoader,setLatestLoader] = useState(true)
    const [discounted,setDiscounted] = useState([]);
    const [discountedLoader,setDiscountedLoader] = useState(true)

    useEffect(()=>{
        //todo:view all click korle popular latest manage
        let body = queryMaker({cat_ids:[cat_ids],subcat_ids:[subcat_ids],keyword})
        let query = `limit=${mLimit}&page=${page}`
        if(ispopular)query+=`&ispopular=true`;
        if(islatest)query+=`&isLatest=true`;
        if (isdiscounted) query +=`&discounted=true`;
        getProducts({ query, body }, { setData:(data)=>setData(data.products), setLoader:setFLoader,setMTotal });
        scrollToTop()
    },[location.search,page])

   useEffect(()=>{
       stickyPosition("icons", "p_sticky40")
       const pQuery = `limit=${10}&page=${1}&ispopular=true`
       getProducts({ query: pQuery, body: {} }, { setData: setPopular, setLoader: setPopularLoader });
       const dQuery = `limit=${10}&page=${1}&discounted=true`
       getProducts({ query: dQuery, body: {} }, { setData: setDiscounted, setLoader: setDiscountedLoader });
       const lQuery = `limit=${10}&page=${1}&islatest=true`
       getProducts({ query: lQuery, body: {} }, { setData: setLatest, setLoader: setLatestLoader });
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
                        <CardSkeleton container="cards" num={10}/>
                    ) :(
                        <Pagination
                            onPageChange={(p)=>{}}
                            currentPage={page}
                            setCurrentPage={setPage}
                            totalPage={Math.ceil(mTotal / mLimit)}
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
                    {/* todo: <CardsCarousel heading={`${t('3dModel')} ${products}`} data={data} className='Latest' />
                    <CardsCarousel heading={`${t('dtf')} ${products}`} data={data} className='Latest' /> */}
                </div>
            </div>
            
        </div>
    );
};

export default MainBox;