import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  // const [btnText,SetbtnText] = useState('light')

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode is enabled", "success");

      // SetbtnText('light')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");

      // SetbtnText('dark')
    }
  };
  
  return (
    <>
      <Router>
      <Navbar
        title="TextUtils2"
        aboutText="Home"
        mode={mode}
        toggleMode={toggleMode}
        // btnText={btnText}
      />

      <Alert alert={alert} />

      <div className="container my-3">

        <Switch>

          <Route exact path="/about">
            <About
              mode={mode} 
            />
          </Route>
  
          <Route exact path="/">
            <TextForm
              mode={mode}
              heading="Enter The text below"
              showAlert={showAlert}
            />
          </Route>
        </Switch>
      </div>
      </Router>


    </>
  );
}

export default App;
