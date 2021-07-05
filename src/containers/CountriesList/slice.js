/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import makeHTTPRequestForCountries from './service';

const initialState = {
    list: null,
    error: null,
    isPageLoading: true,
    currentRequestId: null,
};

export const fetchCountries = createAsyncThunk(
    'countries/fetchList',
    async (_, { rejectWithValue }) => {
        try {
            const response = await makeHTTPRequestForCountries();
            const { data: list } = response;
            return list;
        } catch (err) {
            return rejectWithValue([], err);
        }
    }
);

const { reducer } = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCountries.fulfilled]: (state, { meta, payload }) => {
            if (meta.requestId === state.currentRequestId.requestId) {
                state.list = payload;
                state.isPageLoading = false;
                state.currentRequestId = '';
            }
        },
        [fetchCountries.pending]: (state, { meta }) => {
            state.currentRequestId = meta;
            state.isPageLoading = true;
        },
        [fetchCountries.rejected]: (state, { meta, error }) => {
            if (meta.requestId === state.currentRequestId.requestId) {
                state.currentRequestId = meta;
                state.isPageLoading = false;
                state.error = error;
            }
        },
    },
});

export default reducer;
