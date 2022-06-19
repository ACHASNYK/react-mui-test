import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import New_Window from "./New_Window";


function RenderInWindow (props) {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);
  const curWindow = newWindow.current;
  useEffect(() => {
    const div = document.createElement("div");
      
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "",
        "",
        "width=700,height=450,left=300,top=300"
      );
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      const parentHead = window.document.querySelector("head").childNodes;
      parentHead.forEach( item => {
        curWindow.document.head.appendChild(item.cloneNode(true));
      })
    return ()=>curWindow.close();
    }
    
  }, [container]);

  const handleClose = () => {
    setContainer(null)
    
    console.log('set null' + container)
  }

  return (
    
    container && createPortal(<New_Window handleClose={handleClose} />
      , container)
      
    
    
    
     
  
  )


};

export default RenderInWindow;