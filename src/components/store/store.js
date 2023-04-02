import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";

const store= configureStore({
    reducer:{
        menu: MenuSlice,
        search: SearchSlice,
    }
})
export default store;