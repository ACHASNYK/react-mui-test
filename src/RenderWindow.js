import { style } from "@mui/system";
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import New_Window from "./New_Window";


function RenderInWindow({ handleOpen }) {
   const [container, setContainer] = useState(null);
   const newWindow = useRef(window);
  
    
  
   useEffect(() => {
     let div = document.getElementById('new_window');
    //  if (div === null) { div = document.getElementById('www') }
     setContainer(div);
     
     console.log(div);
    
   }, []);
  
   console.log(container)
   useEffect(() => {
     if (container) {
       newWindow.current = window.open(
         "",
         "",
         "width=810,height=520,left=300,top=300"
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

  // const newWindow = useMemo(() => window.open(
  //       "",
  //       "",
  //       "width=810,height=520,left=300,top=300"
  // ));
  // const parentHead = window.document.querySelector("head").childNodes;
  // parentHead.forEach(item => {
  //   curWindow.document.head.appendChild(item.cloneNode(true));
  // });
  // newWindow.onbeforeunload = () => {
  //   close();
  // };
  // useEffect(() => () => newWindow.close());
   const handleClose = () => {
     setContainer(null)
   }
  
  return (
    
    container && createPortal(<New_Window handleClose={handleClose} />
      , container) 
    
  )
};
// import React, { useEffect, useCallback, useMemo, useState } from "react";
// import { render, createPortal } from "react-dom";

// const App = () => {
//   const [isOpen, setOpenState] = useState(false);
//   const open = useCallback(() => setOpenState(true));
//   const close = useCallback(() => setOpenState(false));

//   return (
//     <div>
//       <h1>Portals in React</h1>
//       <button onClick={open}>Open</button>
//       <button onClick={close}>Close</button>
//       {isOpen && (
//         <NewWindow close={close}>
//           Example <button onClick={close}>Close</button>
//         </NewWindow>
//       )}
//     </div>
//   );
// };

// const NewWindow = ({ children, close }) => {
//   const newWindow = useMemo(() =>
//     window.open(
//       "about:blank",
//       "newWin",
//       `width=400,height=300,left=${window.screen.availWidth / 2 -
//         200},top=${window.screen.availHeight / 2 - 150}`
//     )
//   );
//   newWindow.onbeforeunload = () => {
//     close();
//   };
//   useEffect(() => () => newWindow.close());
//   return createPortal(children, newWindow.document.body);
// };

// render(<App />, document.getElementById("root"));
export default RenderInWindow;