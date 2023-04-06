import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";
import searchlistslice from "./searchlistslice";

const store= configureStore({
    reducer:{
        menu: MenuSlice,
        search: SearchSlice,
        searchlist:searchlistslice
    }
})
export default store;