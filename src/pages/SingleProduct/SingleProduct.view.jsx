import React, { useEffect, useState } from 'react';
import { NumberByLang, cal_discounted_price, capitalize, pagetitle, scrollToTop } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../Components/Button/Button.view';
import './SingleProducts.scss';
import BP from '../../scss/CommonClass';
import ReactImageZooM from '../../Components/react-image-zoom/React_image_zoom.view';
import SizeSelectBtn from '../../Components/sizeSelectBtn/sizeSelectBtn.view';
import CardsCarousel from '../../Components/cardCarousel/CardsCarousel.view';
import useSingleProduct from './SingleProduct.presenter';
import { Endpoints } from '../../ApiServices/apiEndPoints';
import { useParams } from 'react-router-dom';
import useMainBox from '../../Components/MainBox/MainBox.presenter';
import CardSkeleton from '../../Components/skeleton/CardSkeleton.view';
import SProductImageSkeleton, { SProductDataSkeleton } from '../../Components/skeleton/SProductImageSkeleton.view';
import Skeleton from 'react-loading-skeleton';

//todo:dynamically color change by product color selection (grayscale)
const responsive = {sl:6,ld:6,l:6,lt:5,t:3,lm:3,m:2};

const SingleProduct = (props) => {
    scrollToTop();
    pagetitle(props.pageTitle)
    const { getProduct, handleCart, sizeEr, sProduct, sLoader, handleAddtoCartBtn, cart, sizeHandler,size } = useSingleProduct();
    const { t } = useTranslation();
    let { name, discount, price, sizes, desc, images } = sProduct;
    const [image,setImage] = useState('');
    const { popular, initialCall2, popularLoader, latest, latestLoader, discounted, discountedLoader} = useMainBox();
    const { productId } = useParams();

    useEffect(()=>{
        getProduct(Endpoints.single_products+`/${productId}`)
    },[productId])

    useEffect(()=>{
        if(sProduct.images){
            setImage(sProduct.images[0]);
        }
    },[sProduct])
    useEffect(()=>{initialCall2()},[]);

    const products = t('products');
    return (
        <div className={`singleProducts ${BP.container_sm}`}>
            <div className='main'>
                {
                    sLoader?(
                        <SProductImageSkeleton/>
                    ):(
                        <div className='images animate'>
                            <figure  className='Show'>
                                {/* <img src={image} alt={name}/> */}
                                <ReactImageZooM img={image} />
                            </figure>
                            <div className='images_sm'>
                                {
                                    images?.map((img)=>(
                                        <figure onClick={()=>setImage(img)} key={img} className='figure'>
                                            <img className='img-h-w-60' src={img} alt={name}/>
                                            <div className={img===image ?'p-show-image-blend':''}></div>
                                        </figure>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
                {
                    sLoader?(
                        <SProductDataSkeleton/>
                    ):(
                        <div className = 'data animate'>
                            <h5>{ capitalize(name) }</h5>
                            <p >{t('singleProduct.category')} <span className='pal-green'>{capitalize('Laser Cut & Engraving')}</span></p>
                            <div className='price'>
                                {
                                    Number(discount) > 0 ? (
                                        <del>{`${t("money")} ${NumberByLang(price, t)}`}</del>
                                    ) : null
                                }
                                <p>{`${t("money")} ${NumberByLang(Math.floor(cal_discounted_price(price, discount)), t)}`}</p>
                                <div>
                                    {
                                        Number(discount) > 0 ? (
                                            <p className='save'>{t('singleProduct.save')}{price - Math.floor(cal_discounted_price(price, discount))}</p>
                                        ) : null
                                    }
                                </div>
                            </div>
                            {
                                sizes.length >= 1 ? (
                                    <div className='sizes'>
                                        <h5>{t('singleProduct.size')}</h5>
                                        <SizeSelectBtn sData={size} clickHandler={sizeHandler} data={sizes} />
                                        {sizeEr && <p className='text-danger mb-0'>Please Select Size</p>}
                                    </div>
                                ) : null
                            }
                            <div className='add-to-cart'>
                                <SizeSelectBtn clickHandler={(v)=>handleAddtoCartBtn(v)} data={['-', NumberByLang(cart, t), '+']} />
                                <Commonbutton
                                    onclickCallback={handleCart}
                                    className="button ml_10"
                                    btnText={t('singleProduct.addToCart')}
                                />
                            </div>
                            <div className='desc'>
                                <h6>{t('singleProduct.desc')}</h6>
                                <p>{desc}</p>
                            </div>
                        </div>
                )}
            </div>
            <div className='card_carousel my-5'>
                {
                    popularLoader ? (
                        <CardSkeleton num={4} container="d-flex my-2 justify-content-center" card="mx-2" />
                    ) : (
                        popular?.length ? (
                            <CardsCarousel
                                heading={`${t('Popular')} ${products}`}
                                data={popular} className='popular'
                                query='?ispopular=true'
                            />
                        ) : <p className='text-danger text-center'></p>
                    )
                }
                {
                    discountedLoader ? (
                        <CardSkeleton num={4} container="d-flex my-2 justify-content-center" card="mx-2" />
                    ) : (
                        discounted?.length ? (
                            <CardsCarousel
                                heading={`${t('Discounted')} ${products}`}
                                data={discounted} className='popular'
                                query='?discounted=true'
                            />
                        ) : <p className='text-danger text-center'></p>
                    )
                }
                {
                    latestLoader ? (
                        <CardSkeleton num={4} container="d-flex my-2 justify-content-center" card="mx-2" />
                    ) : (
                        latest?.length ? (
                            <CardsCarousel
                                heading={`${t('Latest')} ${products}`}
                                data={latest} className='popular'
                                query='?islatest=true'
                            />
                        ) : <p className='text-danger text-center'></p>
                    )
                }
            </div>
            {/* <CardsCarousel responsive={responsive} heading={`${t('dtf')} ${products}`}  data={fakeData} className='Latest' /> */}
            
        </div>
    );
};

export default SingleProduct;