
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage} from "./Routes.js"
import {SignupPage} from "./Routes.js"
import {HomePage,Products} from "./Routes.js"
import { ActivationPage } from './Routes.js'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Faq}from './Routes.js';
import axios from 'axios';
import server from './server.js';
import { useEffect, useReducer } from 'react';
import { UserData } from './context.js/contextApi.js';
import { UserReducer } from './Redux/Reducer/user.js';
import {BestSellingPage} from './Routes.js';
import Event from './Pages/Event.jsx';
import OrderSuccessPage from "./Pages/OrderSuccess.jsx"
import PaymentPage from "./Pages/PaymentPage.jsx"
import CheckOutPage from "./Pages/CheckOut.jsx"
import ProductDetailsPage from "./Pages/ProductDeatailsPage.jsx"


function App() {
  
  const [state, dispatch] = useReducer(UserReducer, {Authenticated:false,user:null});
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
        <Route path="/products" element={<Products></Products>}></Route>
  
        <Route path='/best-selling' element={<BestSellingPage></BestSellingPage>}> </Route>
         <Route path='/events' element={<Event></Event>}></Route>
         <Route path='/faq' element={<Faq></Faq>}></Route>
         <Route path='/product/:name' element={<ProductDetailsPage></ProductDetailsPage>}></Route>
         <Route path="/checkout" element={<CheckOutPage></CheckOutPage>}></Route>
         <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
         <Route path='/order/success/:id' element={<OrderSuccessPage></OrderSuccessPage>}></Route>
       </Routes>

     
      </BrowserRouter>
     
      <ToastContainer position='bottom-center' autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover></ToastContainer>
    </div>
    </UserData.Provider>
  );
}

export default App;

/*

   
*/