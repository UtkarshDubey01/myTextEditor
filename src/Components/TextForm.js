import React, {useState} from 'react'


function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase !","success");
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase !","success");
    }
    const handleClearClick=()=>{
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared !","success");
    }

    const handleOnChange = (event) =>{
      //  console.log("On Change")
        setText(event.target.value)
    }

    const handleCopy = () => {
      // console.log("I am Copy")
      let text = document.getElementById("myBox")
      text.select();
      text.setSelectionRange(0, 99999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard !","success");

    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed","success");

    }

    const [text, setText] = useState("")
   // text="New Text"// Wrong
   // setText("New Text")// Correct 
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#023':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}

export default TextForm
