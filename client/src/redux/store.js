import{configureStore}from'@reduxjs/toolkit' ;

import reducer from './Reducers' ;
import { userSliceempdossier } from './slices/Usermpdossier';
import { userSlice } from './slices/Users' ;

export const store =configureStore({
    reducer,
   
    
   
});

export default store ;