import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faBolt,faCar,faRightFromBracket,faAngleDown,faCircleQuestion,faRightToBracket,faCartArrowDown,faHeart,faCircleUser,faBars,faX,faMagnifyingGlass, faTShirt, faShirt, faFaceAngry, faBowlFood,faBuildingLock,faFaceSmile ,faTruck, faTrash, faTextWidth, faCloudArrowUp, faArrowsToDot, faTrashCan, faPhotoFilm, faArrowUp, faArrowDown, faArrowLeft, faArrowRight, faEye, faLock} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook,faLinkedin, faGoogle, faProductHunt } from '@fortawesome/free-brands-svg-icons'



const FontAwesome = (props) => {
    return <FontAwesomeIcon className='icon' icon={props.icon}/>
};
export const iconList={
    search: faMagnifyingGlass,
    t_shirt: faTShirt,
    shirt: faShirt,
    face: faFaceAngry,
    lock:faLock,
    Envelope:faEnvelope,
    Bolt:faBolt,
    Car:faCar,
    AngleDown:faAngleDown,
    cir_question:faCircleQuestion,
    login:faRightToBracket,
    logout:faRightFromBracket,
    cart:faCartArrowDown,
    heart:faHeart,
    user:faCircleUser,
    bar:faBars,
    cros:faX,
    wood:faBowlFood,
    Lock:faBuildingLock,
    smily:faFaceSmile,
    truck:faTruck,
    facebook:faFacebook,
    twitter:faTwitter,
    google:faGoogle,
    linkedin:faLinkedin,
    trash:faTrash,
    text:faTextWidth,
    product:faProductHunt,
    upload:faCloudArrowUp,
    top:faArrowUp,
    bottom:faArrowDown,
    left:faArrowLeft,
    right:faArrowRight,
    center:faArrowsToDot,
    delete:faTrashCan,
    design:faPhotoFilm,
    eye:faEye,
}

export default FontAwesome;