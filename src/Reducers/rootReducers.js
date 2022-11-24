import changeTheNumber from "./Reducer";
import { combineReducers } from "redux";

// ab isfile me hum saray reducers rkhtay hai jitnay bhi ho wo saray atay hai yahan 


const rootReducers = combineReducers({
    // ab yahan pe atay hai saray reducers jese hamara ek tha change the number wakla reducer ese comma dekar baki kay bhi reducers rkh sktay hai 

    changeTheNumber: changeTheNumber
})


export default rootReducers;