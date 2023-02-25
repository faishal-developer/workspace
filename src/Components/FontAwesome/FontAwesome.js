import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBolt,faCar,faAngleDown,faCircleQuestion,faRightToBracket,faCartArrowDown,faHeart,faCircleUser,faBars,faX,faMagnifyingGlass, faTShirt, faShirt, faFaceAngry, faBowlFood } from '@fortawesome/free-solid-svg-icons'


const FontAwesome = (props) => {
    return <FontAwesomeIcon className='icon' icon={props.icon}/>
};
export const iconList={
    search: faMagnifyingGlass,
    t_shirt: faTShirt,
    shirt: faShirt,
    face: faFaceAngry,
    Envelope:faEnvelope,
    Bolt:faBolt,
    Car:faCar,
    AngleDown:faAngleDown,
    cir_question:faCircleQuestion,
    login:faRightToBracket,
    cart:faCartArrowDown,
    heart:faHeart,
    user:faCircleUser,
    bar:faBars,
    cros:faX,
    wood:faBowlFood,
}

export default FontAwesome;