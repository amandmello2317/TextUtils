import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase", "success")
  };
  const handleLoClick = () => {
    // console.log(text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    // console.log(text);
    
    setText("");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    
  }

  const handleOnChange = (event) => {
    // console.log("onChnage");
    setText(event.target.value);
    
  };

  const [text, setText] = useState("");

  // setText("new");
  return (
    <>
      <div className="container" style={{color: props.mode ==='dark' ? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode ==='light' ? 'white': 'grey', color: props.mode ==='dark' ? 'white': 'black'}}
          />
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Covert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Covert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          copy
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode ==='dark' ? 'white': 'black'}}>
        <h1>Your text summary</h1>
        {/* <p>{text.split(" ").length - 1} words and {text.length} characters</p> */}
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } words per minut</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter the text"}</p>
      </div>
    </>
  );
}

