// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";

// import {
//   BrowserRouter as Router,
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



// import About from "./components/About"

function App() {
  const themechange = ()=>
{
  if(mode==='light')
  {
    console.log("chal rha h from if")
    setmode('dark');
    console.log(mode);
    document.body.style.backgroundColor='rgb(6 53 88)';
    showalert('success ',`dark mode is enabled`);
    setTimeout(()=>{
      setalert(null);
    },1500);
  }

  else{
    console.log("chal rha h from else")

    setmode('light')
    console.log(mode);
    document.body.style.backgroundColor='white';
    showalert('success ',`light mode is enabled`)
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
}
  const [mode, setmode]  =useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (type, message)=>
  {
    setalert({
      type:type,
      message:message
    })
  }
 
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="MyApp" mode={mode} themefunc={themechange} alert={showalert}/>
     
     <Alert alert={alert}/>
     <TextForm heading="Enter the text" mode={mode}/>
     {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
           
              
          <Route exact path="/" element={<TextForm heading="Enter the text" mode={mode}/>}/>
        {/* <TextForm mode={mode} heading="Enter Your Text"/> */}
            
          
        {/* </Routes> */}
      
  {/* </BrowserRouter> */} */
  </>
  );
      
}

export default App;
