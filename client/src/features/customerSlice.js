import { createSlice } from "@reduxjs/toolkit";

import appApi from "../services/appApi";

const initialState = [];

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addMatcher(appApi.endpoints.signup.matchFulfilled, (_, {payload}) => payload);
        builder.addMatcher(appApi.endpoints.login.matchFulfilled, (_, {payload}) => payload);
    }
});

export default customerSlice.reducer;