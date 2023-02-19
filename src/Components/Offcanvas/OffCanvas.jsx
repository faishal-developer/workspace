import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../scss/global.scss';

function CustomOffcanvas(props) {
    const {show, handleClose} = props;


    return (
        <>
            <Offcanvas  show={show} onHide={handleClose}>
                {/* <Offcanvas.Header closeButton> */}
                    {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
                {/* </Offcanvas.Header> */}
                <Offcanvas.Body >
                    {props.children}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default CustomOffcanvas;