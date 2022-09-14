import{createSlice}from "@reduxjs/toolkit";

//import { taskCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";

var constid=3;
export const userSliceempdossier=createSlice({
    
 name:"userempdossier",
 initialState:[{id:1,login:"tasnim"},
 {id:2,login:"islem"},],

 reducers:{
      addempdossier:(state,action)=>{
        const newutil={
            id:constid++,
            login:action.payload[0],
           
        }
        state.push(newutil);
      },
      suppempdossier:(state,action)=>{
        state=state.filtrer(t => t.id!==action.payload);
      },

      modifempdossier:(state,action)=>{
        const util=state.find(t => t.id===action.payload);
       
      },


      /*  login:(state,action)=>{
        state.value=action.payload;  },*/

        },
    });
    
export const {addempdossier,suppempdossier,modifempdossier} =userSliceempdossier.actions;
export default userSliceempdossier.reducer ;