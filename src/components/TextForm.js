import React, {useState} from 'react';

export default function TextForm(props) {

  const removetext= ()=>
  {
    const regex = / /;
    let newText = text;
   
    const checkText =(e)=>{
      if(!regex.test(e))
      {
        return e;
      }
    }

    let newTextArr = newText.split(" ").filter(checkText);
    newText = newTextArr.join(" ");
    setText(newText);

  }
    const change_uppercase = ()=>
    {
         // console.log("uppercase chal rha h");
        let newText = text;
        setText(newText.toUpperCase());
    }
    const change_lowercase = ()=>
    {
         // console.log("uppercase chal rha h");
        let newText = text;
        setText(newText.toLowerCase());
    }
    const cleartext = ()=>
    {
         // console.log("uppercase chal rha h");
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>
    {
        // console.log("handleonchange chal rha h");
        setText(event.target.value);
    }

    const copytext= ()=>
    {
      let text = document.getElementById("MyBox");
      text.select();
       text.setSelectionRange(0,99999);
       document.execCommand('copy');
       navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState("");
    // setText("enter text");
  return (
    <>
     <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
   <h2>{props.heading}</h2> 
<div className="mb-3">
  <textarea className="form-control" placeholder="write your text" id="MyBox" style={{backgroundColor:props.mode==='light'?'white':'#306597',color:props.mode==='light'?'black':'white'}} rows="8" value={text} onChange={handleOnChange}></textarea>
</div> 
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={change_uppercase}>Change Uppercase</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={change_lowercase}>Change Lowercase</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={cleartext}>Clear</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={copytext}>Copy Text</button>
<button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={removetext}>Remove Text</button>
</div>
<div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}>
<h2>Your Text Summary </h2>
<p>conatins {text.split(" ").filter((element)=>{return element.length!==0}).length} Words  and {text.length} Characters</p> 

<p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes will take to read on average.</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to Preview"}</p>
</div>

</>

  );
}


