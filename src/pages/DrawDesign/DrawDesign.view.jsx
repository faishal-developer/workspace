import React, { useEffect, useMemo, useRef, useState } from 'react';
import FontAwesome from '../../Components/FontAwesome/FontAwesome';
import './static/DrawDesign.scss'
import useDrawDesign from './useDrawDesign.logic';
import ProductModal from '../../Components/DrawDesign/ProductModal.view';
import TextModal from '../../Components/DrawDesign/TextModal/TextModal.view';
import DesignModal from '../../Components/DrawDesign/DesignModal/DesignModal.view';
import { fabric } from "fabric";

//on-reload dont change active box,set Background image of canvas by bg,file uploaded from local drive;
const DrawDesign = () => {
    const [canvas_w_h,setCanvas_w_h]=useState({x:600,y:500})
    const {
        productModalState,setProductModalState,sideBarUtils,textModalState,setTextModalState,designModalState,setDesignModalState,handleFileChange,handleFileUpload,canvasAxes,canvasRef,fabricRef,addtext,deleteSelectedObject,addImage,downloadCanvasImage,centerSelectedObject,alignSelectedObject,loadBackgroundImage
    } = useDrawDesign();
    const inputRef = useRef(null);
    
    useEffect(() => {
      const initFabric = () => {
        fabricRef.current = new fabric.Canvas(canvasRef.current);
        const backgroundRect = new fabric.Rect({
        left: 0,
        top: 0,
        width: canvasRef.current.width,
        height: canvasRef.current.height,
        fill: '#1E1E1E', // Set your desired background color here
        selectable: false,
        evented: false, // Make it non-interactive
      });

      // Add the background rectangle to the canvas
      fabricRef.current.add(backgroundRect);
      };

      const disposeFabric = () => {
        fabricRef.current.dispose();
      };

      initFabric();

      return () => {
        disposeFabric();
      };
    }, []);

    // useEffect(()=>{
    //     setCanvas_w_h(canvasAxes()); 
    //     window.addEventListener("resize", ()=>setCanvas_w_h(canvasAxes()));
    // },[])
    return (
        <div className='draw-design-container container'>
            <div>
                <div className='sidebar'>
                    {
                        sideBarUtils.map((item)=>(
                            <div 
                                className='item_container' 
                                onClick={item.type==='fileUPload'? 
                                    ()=>handleFileUpload(inputRef) :
                                    item.handleClick
                                }>
                                {item.type==='fileUPload' &&(
                                    <input type="file" id="fileInput" className='d-none' ref={inputRef} onChange={handleFileChange}/>
                                )}
                                <span className='icon' id="fileInput">
                                    <FontAwesome icon={item.icon}/>
                                </span>
                                <span className='title'>
                                    {item.title}
                                </span>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <ProductModal state={productModalState} setState={setProductModalState} loadBackgroundImage={loadBackgroundImage}/>
                    <TextModal state={textModalState} setState={setTextModalState} addtext={addtext}/>
                    <DesignModal state={designModalState} setState={setDesignModalState} addImage={addImage}/>
                </div>
            </div>
            <div className='canvas'>
                <canvas ref={canvasRef} width={canvas_w_h.x} height={canvas_w_h.y}/>
            </div>
            
        </div>
    );
};

export default DrawDesign;