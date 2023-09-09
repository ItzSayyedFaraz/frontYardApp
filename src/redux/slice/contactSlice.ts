import { createSlice,PayloadAction,createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface Contact{
    firstName?:string,
    lastName?:string,
    email?:string|number|symbol,
    phoneNumber?:number|null,
    index?:number
}





export const contactSlice = createSlice({
    name: "Contacts",
    initialState: [] as Contact[],
    reducers: {
      addContact: (state, action: PayloadAction<Contact>) => {
        
        console.log([...state,action.payload])
        return [...state,action.payload]
      },
      deleteContact:(state,action:PayloadAction<number>)=>{
        state.splice(action.payload, 1);
      },

      editContact:(state,action:PayloadAction<{index:number;contact:Contact}>)=>{
        const {index,contact}=action.payload
        if (index >= 0 && index < state.length) {
          state[index] = contact; // Replace the contact at the specified index
        }

      }
      
    }
  });

export const selectContacts = (state:RootState) => state.contacts;

export const getItemsSelector = createSelector(
    (state:RootState) => state.contacts,
    (state) => state
  );

export const {addContact,deleteContact,editContact}=contactSlice.actions

export default contactSlice.reducer;

