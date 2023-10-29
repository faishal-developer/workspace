import React from 'react';
import ModalBootstrap from '../Modal/Modal.view';
import Commonbutton from '../Button/Button.view';
import {toast} from 'react-toastify';

const DeleteModal = (props) => {
    const {show,setShow,handleDelete}=props;
    return (
        <ModalBootstrap
            show={show}
            handleClose={()=>setShow(false)}
            size='sm'
            title='Are you sure to delete?'
            className=''
        >
            <div>
                <Commonbutton 
                    type="button"
                    onclickCallback={()=>{
                        handleDelete();
                        setShow(false)
                        toast.success("Removed Item successfully")
                    }}
                    className="button remove-button"
                    btnText={`Delete`}
                    isLoading={false}
                    disabled={false}
                />
                <Commonbutton
                    type="button"
                    onclickCallback={()=>setShow(false)}
                    className="button ms-2"
                    btnText={`Cancel`}
                    isLoading={false}
                    disabled={false}
                /> 
            </div>
        </ModalBootstrap>
    );
};

export default DeleteModal;