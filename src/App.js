import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import { Loader } from './Components/Loaders/Loader';
// import Home from './Components/Home/Home';
// import { LoaderName } from "react-awesome-loaders"
// import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const fakeFetch = () =>{
      setTimeout(()=>{
        setIsLoading(false);
      },3000);
    };
    fakeFetch();
  },[]);


  return isLoading ?(<Loader/>):(
    <div 
   
      className="App">
      <>
      <BrowserRouter basename='/portfolio'>
          <Routes>
            {/* <LoaderName/> */}
            {/* <Header/> */}
            {/* <main className='main'>
              {/* <Home/>   */}
            {/* </main> */} 
              <Route path='/' element={<Header/>}></Route>    
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
