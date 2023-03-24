import './static/card.scss'
import { stringSlicer } from '../../helper/CommonFunction';
import { useTranslation } from 'react-i18next';
import LazyLoader from '../LazyLoader/LazyLoader.view';

function CardView(props) {
    const { name, image,price, } = props.product;
    const { t } = useTranslation();

    return (
        <div className={`custom_card ${props.border}`}>
            <div className='card_body'>
                <figure>
                    <LazyLoader>
                        <img src={image} alt={name} />
                    </LazyLoader>
                </figure>
                <div className='data'>
                    <div>
                        <p className='title'>{stringSlicer(name, 40)}</p>
                        <p className='price'>
                            {t("money")}
                            {price}
                            <del className='del'>{t("money")}{price + 20}</del>
                        </p>
                        <button className="button">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardView;