import{createSlice}from "@reduxjs/toolkit";

//import { taskCancelled } from "@reduxjs/toolkit/dist/listenerMiddleware/exceptions";
 const domaine='student' ;
var constid=3;
  
export const userSlice=createSlice({
    
 name:"user",
 initialState:[{id:1,login:"tasnim@gmail.com",password:"123456" ,domaine:"domaine1"},
 {id:2,login:"islem@gmail.com",password:"123456" ,domaine:"domaine2"},],

 reducers:{
      addutil:(state,action)=>{
        const newutil={
            id:constid++,
            login:action.payload[0],
            password:action.payload[1],
            domaine:'avocat'
        }
        state.push(newutil);
      },
      supputil:(state,action)=>{
        state=state.filtrer(t => t.id!==action.payload);
      },

      modifutil:(state,action)=>{
        const util=state.find(t => t.id===action.payload);
        util.domaine=domaine ;
      },


      /*  login:(state,action)=>{
        state.value=action.payload;  },*/

        },
    });
    
export const {addutil,supputil,modifutil} =userSlice.actions;
export default userSlice.reducer ;