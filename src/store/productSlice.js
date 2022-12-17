import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const productSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProduct.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchProduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = STATUSES.idle
        })
        .addCase(fetchProduct.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
    },
})

export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer

// Thunks


//  Basic thunk (redux)'


// export function fetchProduct() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             const data = await res.json()
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }


// ................................................................

// Thunk (Redux-toolkit)

export const fetchProduct = createAsyncThunk('product/fetch', async ()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})