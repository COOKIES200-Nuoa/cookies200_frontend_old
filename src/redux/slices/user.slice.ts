import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";
import { getLocalStorage } from "../../helpers";

const userLocal = getLocalStorage<User| null>("LOGIN_USER")

interface StateType {
    currentUser: typeof userLocal;
}

const initialState: StateType = {
    currentUser: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUser: (state, {payload}) => {
            state.currentUser = payload;
        },
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice;