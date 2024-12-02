import {useState} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/home"
import Loader from "./components/Loader";


function App() {
  
  const [showLoading,hideLoading]=useState(false);

  return (
    <>
      <BrowserRouter>
      {showLoading?<Loader/>:null}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
