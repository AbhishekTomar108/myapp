import React, {useState} from 'react';

export default function TextForm(props) {
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

    const [text, setText] = useState("");
    // setText("enter text");
  return (
    <>
     <div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}>
   <h2>{props.heading}</h2> 
<div className="mb-3">
  <textarea className="form-control" placeholder="write your text" id="MyBox" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-1 my-0" onClick={change_uppercase}>Change Uppercase</button>
<button className="btn btn-primary mx-1 my-0" onClick={change_lowercase}>Change Lowercase</button>
<button className="btn btn-primary mx-1 my-0" onClick={cleartext}>Clear</button>
</div>
<div className="container my-1" style={{color:props.mode==='light'?'black':'white'}}>
<h2>Your Text Summary </h2>
<p>conatins {(text.split(" ").length)-1} Words  and {text.length} Letters</p> 

<p>{0.008 * ((text.split(" ").length)-1)} minutes will take to read on average.</p>
<h2>Preview</h2>
<p>{text}</p>
</div>

</>

  );
}


