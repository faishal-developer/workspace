import React from 'react';
import ModalBootstrap from '../../Modal/Modal.view';
import Commonbutton from '../../Button/Button.view';
import { dummyDesign } from '../../../utils/dummyDesign.utils';
import useProductModal from '../useProductModal.logic';
import '../productModal.scss'

//translation,
const DesignModal = (props) => {
    const {state,setState,addImage}= props;
    const {setData} = useProductModal();

    return (
        <ModalBootstrap
            show={state.modal}
            handleClose={()=>setState({...state,modal:false})}
            size='lg'
            class=''
            title={<h6>Select a design</h6>}
            footer={(
                <div>
                    <Commonbutton
                        type="button"
                        onclickCallback={()=>setState({...state,modal:false})}
                        className="button remove-button"
                        btnText={`Cancel`}
                        isLoading={false}
                        disabled={false}
                    />
                    <Commonbutton
                        type="button"
                        onclickCallback={()=>setState({...state,modal:false})}
                        className="button"
                        btnText={`Save`}
                        isLoading={false}
                        disabled={false}
                    />
                </div>
            )}
        >
           <div>
                <div className='product_container'>
                        <h6 className='title'>Designs</h6>
                        <div className='products'>
                            {dummyDesign.map((item)=>(
                                <figure
                                    onClick={()=>{
                                        setData({state,setState,property:'designImg',value:item});
                                        addImage(item);
                                    }}
                                    className={state.data.designImg===item?"active":''}
                                >
                                    <img src={item} alt={'design'}/>
                                </figure>
                            ))}
                        </div>
                    </div>
           </div>
        </ModalBootstrap>
    );
};

export default DesignModal;