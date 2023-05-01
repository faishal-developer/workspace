import React from 'react';
import CustomCarousel from '../../Carousel/Carousel';
import CardView from '../Card/Card.view';
import './cardCarousel.scss';
import Commonbutton from '../Button/Button.view';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { path } from '../../routes/path';

const CardsCarousel = (props) => {
    const location = useLocation();
    const {heading,data} = props;
    const { t } = useTranslation();
    const responsive = props.responsive ?? {
        sl:5,
        ld:5,
        l:5,
        lt:4,
        t:3,
        lm:3,
        m:2
    }
    return (
        <div className={`${props.className} cardsCarousel`}>
            <div className='head_btn'>
                <h4>{heading}</h4>
                <Link to={`${path.home+props.query}`}>
                    <Commonbutton
                        type="button"
                        onClick={props.onClick}
                        className="button"
                        btnText={t('ViewAll')}
                        isLoading={false}
                        disabled={false}
                    />
                </Link>
            </div>
            <CustomCarousel responsive={responsive}>
                {
                    data? data.map((product)=>(
                        <CardView key={product._id} product={product} border='border_green m_r_10px' />
                    )):null
                }
            </CustomCarousel>
        </div>
    );
};

export default CardsCarousel;