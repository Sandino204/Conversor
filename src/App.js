import React from 'react';
import './App.css';
import Converter from './components/Converter'
import Routes from  './routes'

function App() {
  return (
    // <div className="App">
    //   <div className="container-fluid">
    //     <div className="row page">
    //       <div className="col-4 offset-4 justify-content-center">
    //         <Converter moedaA="USD" moedaB="BRL">

    //         </Converter>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Routes></Routes>
  );
}

export default App;
