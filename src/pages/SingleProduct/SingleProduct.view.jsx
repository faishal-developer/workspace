import React, { useState } from 'react';
import fakeData from '../../Components/MainBox/fakeData.json'
import { cal_discounted_price } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../Components/Button/Button.view';
import './SingleProducts.scss';
import BP from '../../scss/CommonClass';
import ModalBootstrap from '../../Components/Modal/Modal.view';
import ReactImageZooM from '../../Components/react-image-zoom/React_image_zoom.view';

//todo:dynamically color change by product color selection (grayscale)
const SingleProduct = () => {
    let { name, discount, price, sizes, color, desc, images } = fakeData[1];
    const { t } = useTranslation();
    const [cart,setCart] = useState(1);
    const [image,setImage] = useState(images[0]);
    const [mouseOver,setMouseOver] = useState(false);

    
    return (
        <div className={`singleProducts ${BP.container_sm}`}>
            <div className='main'>
                <div className='images'>
                    <figure onMouseOut={()=>setMouseOver(false)} onMouseOver={()=>setMouseOver(true)} className='Show'>
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
                    <h5>{name}</h5>
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
                                    <p>Save Tk.{price - Math.floor(cal_discounted_price(price, discount))}</p>
                                ) : null
                            }
                        </p>
                    </div>
                    {
                        sizes.length >= 1 ? (
                            <div className='sizes'>
                                <h6>Select Size</h6>
                                <div className='buttons'>
                                    {sizes.map((size) => <Commonbutton
                                        onClick={() => { }}
                                        className="button"
                                        btnText={size}
                                        isLoading={false}
                                        disabled={false}
                                    />)}
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        color.length >= 1 ? (
                            <div className='colors'>
                                <h6>Select Size</h6>
                                <div className='buttons'>
                                    {color.map((c) => <Commonbutton
                                        onClick={() => { }}
                                        className="button"
                                        btnText={c}
                                        isLoading={false}
                                        disabled={false}
                                    />)}
                                </div>
                            </div>
                        ) : null
                    }
                    <div className='add-to-cart'>
                        <Commonbutton
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
                        />
                        <Commonbutton
                            onClick={() => { }}
                            className="button"
                            btnText={"+Add To Cart"}
                        />
                    </div>
                </div>
            </div>
            <div className='desc'>
                <h6>Description</h6>
                <p>{desc}</p>
            </div>
            {/* {
                true ? <ModalBootstrap show={true}>
                    <ReactImageZooM img={image}/>
                </ModalBootstrap>:null
            } */}
        </div>
    );
};

export default SingleProduct;