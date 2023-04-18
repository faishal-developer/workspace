import React, { useEffect, useState } from 'react';
import fakeData from '../../Components/MainBox/fakeData.json'
import { cal_discounted_price, capitalize, pagetitle } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../Components/Button/Button.view';
import './SingleProducts.scss';
import BP from '../../scss/CommonClass';
import ReactImageZooM from '../../Components/react-image-zoom/React_image_zoom.view';
import SizeSelectBtn from '../../Components/sizeSelectBtn/sizeSelectBtn.view';

//todo:dynamically color change by product color selection (grayscale)
const SingleProduct = (props) => {
    let { name, discount, price, sizes, color, desc, images } = fakeData[1];
    const { t } = useTranslation();
    const [cart,setCart] = useState(1);
    const [image,setImage] = useState(images[0]);

    useEffect(()=>{
        pagetitle(props.pageTitle)
    },[])
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
                    <p > Category: <span className='pal-green'>{capitalize('Laser Cut & Engraving')}</span></p>
                    <div className='price'>
                        {
                            Number(discount) > 0 ? (
                                <del>{`${t("money")} ${price}`}</del>
                            ) : null
                        }
                        <p>{`${t("money")} ${Math.floor(cal_discounted_price(price, discount))}`}</p>
                        <p>
                            {
                                Number(discount) > 0 ? (
                                    <p className='save'>Save Tk.{price - Math.floor(cal_discounted_price(price, discount))}</p>
                                ) : null
                            }
                        </p>
                    </div>
                    {
                        sizes.length >= 1 ? (
                            <div className='sizes'>
                                <h5>Select Sizes</h5>
                                <SizeSelectBtn sData='m' clickHandler={()=>{}} data={sizes} />
                            </div>
                        ) : null
                    }
                    {
                        color.length >= 1 ? (
                            <div className='colors'>
                                <h5>Select Color</h5>
                                <SizeSelectBtn sData='red' clickHandler={() => { }} data={color} />
                            </div>
                        ) : null
                    }
                    <div className='add-to-cart'>
                        <SizeSelectBtn clickHandler={()=>{}} data={['-',cart,'+']}/>
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
                            btnText={"+Add To Cart"}
                        />
                    </div>
                </div>
            </div>
            <div className='desc'>
                <h6>Description:</h6>
                <p>{desc}</p>
            </div>
            
        </div>
    );
};

export default SingleProduct;