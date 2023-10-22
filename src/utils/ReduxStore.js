import {configureStore} from "@reduxjs/toolkit"
import reduxSlice from "./ReduxSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const store = configureStore({

    reducer: {
        reduxS: reduxSlice,
        search: SearchSlice,
        chat: ChatSlice
    },

});

export default store;