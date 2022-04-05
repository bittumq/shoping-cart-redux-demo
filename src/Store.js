import { createStore } from "redux";
import rootReducer from "./redux/reducer/index";

const Store = createStore(rootReducer);

export default Store;