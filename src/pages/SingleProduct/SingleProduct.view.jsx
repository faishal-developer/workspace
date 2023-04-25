import React, { useEffect, useState } from 'react';
import fakeData from '../../Components/MainBox/fakeData.json'
import { NumberByLang, cal_discounted_price, capitalize, pagetitle, scrollToTop } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../Components/Button/Button.view';
import './SingleProducts.scss';
import BP from '../../scss/CommonClass';
import ReactImageZooM from '../../Components/react-image-zoom/React_image_zoom.view';
import SizeSelectBtn from '../../Components/sizeSelectBtn/sizeSelectBtn.view';
import CardsCarousel from '../../Components/cardCarousel/CardsCarousel.view';

//todo:dynamically color change by product color selection (grayscale)
const responsive = {sl:6,ld:6,l:6,lt:5,t:3,lm:3,m:2};

const SingleProduct = (props) => {
    let { name, discount, price, sizes, desc, images } = fakeData[1];
    const { t } = useTranslation();
    scrollToTop();
    const [cart,setCart] = useState(1);
    const [image,setImage] = useState(images[0]);

    useEffect(()=>{
        pagetitle(props.pageTitle)
    },[])

    const products = t('products');
    return (
        <div className={`singleProducts ${BP.container_sm}`}>
            <div className='main'>
                <div className='images'>
                    <figure  className='Show'>
                        {/* <img src={image} alt={name}/> */}
                        <ReactImageZooM img={image} />
                    </figure>
                    <div className='images_sm'>
                        {
                            images.map((img)=>(
                                <figure onClick={()=>setImage(img)} key={img} className='figure'>
                                    <img className='img-h-w-60' src={img} alt={name}/>
                                    <div className={img===image ?'p-show-image-blend':''}></div>
                                </figure>
                            ))
                        }
                    </div>
                </div>
                <div className='data'>
                    <h5>{capitalize(name)}</h5>
                    <p >{t('singleProduct.category')} <span className='pal-green'>{capitalize('Laser Cut & Engraving')}</span></p>
                    <div className='price'>
                        {
                            Number(discount) > 0 ? (
                                <del>{`${t("money")} ${NumberByLang(price,t)}`}</del>
                            ) : null
                        }
                        <p>{`${t("money")} ${NumberByLang(Math.floor(cal_discounted_price(price, discount)),t)}`}</p>
                        <p>
                            {
                                Number(discount) > 0 ? (
                                    <p className='save'>{t('singleProduct.save')}{price - Math.floor(cal_discounted_price(price, discount))}</p>
                                ) : null
                            }
                        </p>
                    </div>
                    {
                        sizes.length >= 1 ? (
                            <div className='sizes'>
                                <h5>{t('singleProduct.size')}</h5>
                                <SizeSelectBtn sData='m' clickHandler={()=>{}} data={sizes} />
                            </div>
                        ) : null
                    }
                    {/* {
                        color.length >= 1 ? (
                            <div className='colors'>
                                <h5>Select Color</h5>
                                <SizeSelectBtn sData='red' clickHandler={() => { }} data={color} />
                            </div>
                        ) : null
                    } */}
                    <div className='add-to-cart'>
                        <SizeSelectBtn clickHandler={()=>{}} data={['-',NumberByLang(cart,t),'+']}/>
                        {/* <Commonbutton
                            onClick={() => { }}
                            className="button"
                            btnText={'-'}
                        />
                        <Commonbutton
                            onClick={() => { }}
                            className="button"
                            btnText={cart}
                        />
                        <Commonbutton
                            onClick={() => { }}
                            className="button"
                            btnText={"+"}
                        /> */}
                        <Commonbutton
                            onClick={() => { }}
                            className="button ml_10"
                            btnText={t('singleProduct.addToCart')}
                        />
                    </div>
                    <div className='desc'>
                        <h6>{t('singleProduct.desc')}</h6>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            <CardsCarousel responsive={responsive} heading={`${t('similar')} ${products}`} data={fakeData} className='popular' />
            <CardsCarousel responsive={responsive} heading={`${t('Discounted')} ${products}`}  data={fakeData} className='popular' />
            <CardsCarousel responsive={responsive} heading={`${t('Popular')} ${products}`}  data={fakeData} className='popular' />
            <CardsCarousel responsive={responsive} heading={`${t('latest')} ${products}`}  data={fakeData} className='Latest' />
            <CardsCarousel responsive={responsive} heading={`${t('lasercut')} ${products}`} data={fakeData} className='Latest' />
            <CardsCarousel responsive={responsive} heading={`${t('3dModel')} ${products}`}  data={fakeData} className='Latest' />
            <CardsCarousel responsive={responsive} heading={`${t('dtf')} ${products}`}  data={fakeData} className='Latest' />
            
        </div>
    );
};

export default SingleProduct;