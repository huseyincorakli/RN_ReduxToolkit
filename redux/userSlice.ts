import { createSlice } from "@reduxjs/toolkit";

const initialState ={
     isAuth:false,
     email:null,
     password:null,
     isLoading:true,
     user:{
          email:'123@mail.com',
          password:'123'
     }
}

const userSlice = createSlice({
     name:'user',
     initialState,
     reducers:{
          setEmail:(state,action)=>{
               state.email=action.payload
          },
          setPassword:(state,action)=>{
               state.password=action.payload
          },
          setIsLoading:(state,action)=>{
               state.isLoading=action.payload
          },
          setLogin:(state)=>{
               if((state.email==state.user.email)&& (state.password==state.user.password)){
                    state.isAuth=true
               }

               
          },
          setLogOut:(state)=>{
               if (state.isAuth) {
                    state.isAuth=!state.isAuth
                    state.email=""
                    state.password=""
               }
          }
     }
})

export const {setEmail,setIsLoading,setPassword,setLogin,setLogOut} = userSlice.actions

export default userSlice.reducer