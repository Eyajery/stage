import { combineReducers } from "redux";

import user from "./slices/Users";
import Usermpdossier from "./slices/Usermpdossier";

const reducers = combineReducers({ 
  user,
  Usermpdossier,

});
export default reducers;