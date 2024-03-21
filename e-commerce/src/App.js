
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage} from "./Routes.js"
import {SignupPage} from "./Routes.js"
import {HomePage} from "./Routes.js"
import { ActivationPage } from './Routes.js'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import server from './server.js';
import { useEffect, useReducer } from 'react';
import { UserData } from './context.js/contextApi.js';
import { UserReducer } from './Redux/Reducer/user.js';


function App() {
  
  const [state, dispatch] = useReducer(UserReducer, {auth:false,user:null});
  console.log(state,"state")
   
  return (
    <UserData.Provider value={{
       state,
       dispatch
    }}>
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/Login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/sign-up' element={<SignupPage></SignupPage>}></Route>
        <Route path = "/activation/:url" element = {<ActivationPage></ActivationPage>}></Route>
  
        <Route></Route>
       </Routes>

     
      </BrowserRouter>
      <ToastContainer position='bottom-center' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover>

</ToastContainer>
    </div>
    </UserData.Provider>
  );
}

export default App;

/*

   
*/