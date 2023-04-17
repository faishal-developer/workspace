import React, { useState } from 'react';
import fakeData from '../../Components/MainBox/fakeData.json'
import { cal_discounted_price } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../Components/Button/Button.view';

//todo:dynamically color change by product color selection
const SingleProduct = () => {
    let { name, discount, price, sizes, color, desc, images } = fakeData[1];
    const { t } = useTranslation();
    const [cart,setCart] = useState(1);
    const [image,setImage] = useState(images[0]);

    
    return (
        <div className='singleProducts'>
            <div className='main'>
                <div className='images'>
                    <figure className='Show'>
                        <img src={image} alt={name}/>
                    </figure>
                    <div>
                        {
                            images.map((img)=>(
                                <span className='img-span' onClick={()=>setImage(img)}>
                                    <img src={img} alt={name} />
                                </span>
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
                            btnText={1}
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
        </div>
    );
};

export default SingleProduct;