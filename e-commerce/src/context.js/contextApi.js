import { createContext } from "react";

const user = {
     isAuthenticated : false,
     user: null
     
}

export const  UserData = createContext(user);


