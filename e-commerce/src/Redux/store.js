import {configureStore} from "@reduxjs/toolkit";
import {UserReducer} from "./Reducer/user"


const store = configureStore({
    reducer:{
        user :UserReducer
    },

})

export default store