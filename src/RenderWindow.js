import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import New_Window from "./New_Window";


function RenderInWindow({ handleOpen}) {
  const [container, setContainer] = useState(null);
  const newWindow = useRef(window);
  console.log(newWindow)
  useEffect(() => {
    const div = document.getElementById('portal');
    
      console.log(div)
    setContainer(div);
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open(
        "",
        "",
        "width=810,height=520,left=300,top=300"
      );
      newWindow.current.document.body.appendChild(container);
      const curWindow = newWindow.current;
      const parentHead = window.document.querySelector("head").childNodes;
      parentHead.forEach( item => {
        curWindow.document.head.appendChild(item.cloneNode(true));
      })
      return () => { curWindow.close(); handleOpen(); }
    }
    
  }, [container]);

  const handleClose = () => {
    setContainer(null)       
  }

  return (
    
    container && createPortal(<New_Window handleClose={handleClose} />
      , container) 
  )
};

export default RenderInWindow;