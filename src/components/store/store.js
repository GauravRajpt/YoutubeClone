import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import SearchSlice from "./SearchSlice";
import searchlistslice from "./searchlistslice";
import ChatSlice from "./ChatSlice";

const store= configureStore({
    reducer:{
        menu: MenuSlice,
        search: SearchSlice,
        searchlist:searchlistslice,
        chat:ChatSlice,
    }
})
export default store;