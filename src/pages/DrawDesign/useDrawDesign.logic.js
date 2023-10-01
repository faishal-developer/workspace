import React, { useRef, useState } from 'react';
import { iconList } from "../../Components/FontAwesome/FontAwesome";
import { screenWidth } from '../../helper/CommonFunction';
import { fabric } from 'fabric';

const useDrawDesign = () => {
    const canvasRef = useRef(null);
    const fabricRef = useRef(null);
    const [productModalState,setProductModalState]=useState({modal:true,data:{}})
    const [textModalState,setTextModalState]=useState({modal:false,data:{}})
    const [designModalState,setDesignModalState]=useState({modal:false,data:{}})

    const handleFileUpload=(ref)=>{
        ref.current.click();
    }

    const canvasAxes=()=>{
        let width=screenWidth();
        if(width>900)return {x:550,y:450}
        else if(width>500)return {x:450,y:450}
        else if(width>400)return {x:360,y:400}
        else return {x:270,y:350}
    }
    const handleFileChange=(e)=>{
        const selectedFile = e.target.files[0];
        console.log(selectedFile);
        readUploadedFile(selectedFile);
    }
    const showModal=(state,setState)=>{setState({...state,modal:true})};

    const addtext = ({fontFamily,fontSize,fontWeight,fontStyle,color}) => {
          var textbox = new fabric.IText('Your text here', {
            left: 100, // X-coordinate
            top: 100,  // Y-coordinate
            fill: color, // Text color
            fontSize: 20, // Font size
            fontFamily:fontFamily,
            fontWeight:fontWeight,
            fontStyle:fontStyle
        });

        // Add the text object to the canvas
        fabricRef.current.add(textbox);

        // Make the text object selectable and editable
        fabricRef.current.setActiveObject(textbox);
        textbox.enterEditing();
        textbox.selectAll();
        fabricRef.current.renderAll();
    };

    const deleteSelectedObject = () => {
        const activeObject = fabricRef.current.getActiveObject();
        if (activeObject) {
          fabricRef.current.remove(activeObject);
          fabricRef.current.discardActiveObject();
          fabricRef.current.renderAll();
        }
      };

    const addImage = (yourImage) => {
        fabric.Image.fromURL(yourImage, (img) => {
            // Adjust the image properties as needed
            img.set({
              top: 200,
              left: 200,
              scaleX: 0.5,
              scaleY: 0.5,
            }); 
            fabricRef.current.add(img);
            fabricRef.current.setActiveObject(img);
            fabricRef.current.renderAll();
        });
    };

    const downloadCanvasImage = () => {
        // Convert the Fabric.js canvas to an image URL
        const canvasDataURL = fabricRef.current.toDataURL({
          format: 'png', // You can change the format to 'jpeg' or 'webp' if needed
          quality: 1, // Image quality (0 to 1)
        });

        // Create a temporary <a> element to trigger the download
        const link = document.createElement('a');
        link.href = canvasDataURL;
        link.download = 'canvas_image.png'; // File name for the downloaded image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const centerSelectedObject = () => {
        const activeObject = fabricRef.current.getActiveObject();
        if (activeObject) {
          activeObject.center(); // Center the selected object
          fabricRef.current.renderAll();
        }
    };

    const alignSelectedObject = (position) => {
      const activeObject = fabricRef.current.getActiveObject();
      console.log(activeObject);
      if (activeObject) {
        switch (position) {
          case 'top':
            activeObject.set({ top: 0 });
            break;
          case 'bottom':
            activeObject.set({ top:fabricRef.current.height -150 });
            break;
          case 'left':
            activeObject.set({ left: 0 });
            break;
          case 'right':
            activeObject.set({ left: fabricRef.current.width -150});
            break;
          default:
            break;
        }
        fabricRef.current.renderAll();
      }
    };

    const readUploadedFile = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
        const imageUrl = event.target.result;

        fabric.Image.fromURL(imageUrl, (img) => {
            // Adjust the image properties as needed
            img.set({
                top: 200,
                left: 200,
                scaleX: 0.5,
                scaleY: 0.5,
            });

            fabricRef.current.add(img);
            fabricRef.current.setActiveObject(img);
            fabricRef.current.renderAll();
        });
    };

    if (file) {
        reader.readAsDataURL(file);
    }
};

    const loadBackgroundImage = (myImage) => {
  const canvas = canvasRef.current;
  const fabricCanvas = fabricRef.current;

  // Check if there is an existing background image
  const existingBackground = fabricCanvas.getObjects('image').find((obj) => obj.name === 'background');
  if (existingBackground) {
    fabricCanvas.remove(existingBackground);
  }

  fabric.Image.fromURL(myImage, (img) => {
    // Calculate the scaling factors for width and height to fit the entire image within the canvas
    const widthScale = canvas.width / img.width;
    const heightScale = canvas.height / img.height;

    // Choose the smaller scaling factor to ensure the entire image fits inside the canvas
    const scale = Math.min(widthScale, heightScale);

    // Calculate the centered position for the image
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Set the image's width, height, and position based on the scaling factor
    img.set({
      scaleX: scale,
      scaleY: scale,
      left: centerX,
      top: centerY,
      originX: 'center',
      originY: 'center',
      selectable: false, // Make the background image non-selectable
    });

    // Add the image to the canvas with a special name 'background'
    img.set({ name: 'background' });
    fabricCanvas.add(img);
    fabricCanvas.renderAll();
  });
};




    const sideBarUtils= [
        {icon:iconList.product,title:'Product',handleClick:()=>showModal(productModalState,setProductModalState)},
        {icon:iconList.text,title:'Text',handleClick:()=>showModal(textModalState,setTextModalState)},
        {icon:iconList.design,title:'Design',handleClick:()=>showModal(designModalState,setDesignModalState)},
        {icon:iconList.upload,title:'Upload',type:'fileUPload'},
        {icon:iconList.center,title:'Center',handleClick:centerSelectedObject},
        {icon:iconList.top,title:'Top',handleClick:()=>alignSelectedObject('top')},
        {icon:iconList.bottom,title:'Bottom',handleClick:()=>alignSelectedObject('bottom')},
        {icon:iconList.left,title:'Left',handleClick:()=>alignSelectedObject('left')},
        {icon:iconList.right,title:'Right',handleClick:()=>alignSelectedObject('right')},
        {icon:iconList.delete,title:'Delete',handleClick:deleteSelectedObject},
        {icon:iconList.eye,title:'Preview',handleClick:downloadCanvasImage},
    ]
    return {
        productModalState,setProductModalState,sideBarUtils,textModalState,setTextModalState,designModalState,setDesignModalState,handleFileChange,handleFileUpload,canvasAxes,canvasRef,fabricRef,addtext,deleteSelectedObject,addImage,downloadCanvasImage,centerSelectedObject,alignSelectedObject,loadBackgroundImage
    }
};

export default useDrawDesign;