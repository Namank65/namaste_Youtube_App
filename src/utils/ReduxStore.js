import {configureStore} from "@reduxjs/toolkit"
import reduxSlice from "./ReduxSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({

    reducer: {
        reduxS: reduxSlice,
        search: SearchSlice
    },

});

export default store;