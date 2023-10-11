import {configureStore} from "@reduxjs/toolkit"
import reduxSlice from "./ReduxSlice";

const store = configureStore({

    reducer: {
        reduxS: reduxSlice
    },

})

export default store;