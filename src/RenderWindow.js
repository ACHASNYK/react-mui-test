
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import New_Window from "./New_Window";


function RenderInWindow({ handleOpen, handleInput }) {
   const [container, setContainer] = useState(null);
   const newWindow = useRef(window);
  
    
  
   useEffect(() => {
     let div = document.getElementById('new_window');
    //  if (div === null) { div = document.getElementById('www') }
     setContainer(div);
     
     
    
   }, []);
  
   
   useEffect(() => {
     if (container) {
       newWindow.current = window.open(
         "",
         "",
         "width=1000,height=520,left=300,top=300"
       );
       newWindow.current.document.body.appendChild(container);
       const curWindow = newWindow.current;
      window.document.querySelectorAll('link, style').forEach
       (item => {
         curWindow.document.head.appendChild(item.cloneNode(true));
       })
       return () => { curWindow.close(); handleOpen(); window.location.reload()}
     }
    
   }, [container]);

  const handleClose = () => {
     setContainer(null)
   }
  
  return (
    
    container && createPortal(<New_Window handleClose={handleClose} handleInput={handleInput} />
      , container) 
    
  )
};

export default RenderInWindow;