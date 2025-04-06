import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
        //when user sign in then we will have this method
        addUser: (state,action)=>{
            return action.payload
        },
        //when user sign out then we will have this method
        removeUser : (state,action)=>{
            return null
        }
    }
})
export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer