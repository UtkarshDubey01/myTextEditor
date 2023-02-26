import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light') // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500)
}

  const toggleMode = () => {
    if( mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success")

    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>   
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </>
  );
}
export default App;
