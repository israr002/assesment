import { act } from "react-test-renderer";
import styles from "../../screens/homescreen/styles";
import { types } from "../actions/action";

let initialState = {
  listData: [],
  fullData: [],
  selectedCards: [],
  currentUid: 0 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST_DATA:
      return {
        ...state,
        listData: action.payload,
        fullData: action.payload,
      };
    case types.SET_CURRENT_UID:
      return {
        ...state,
        currentUid: action.payload,
      }
    case types.SET_LIST_DATA:
      return{
        ...state,
        listData:action.payload,
      }
    default:
      return state;
  }
};

export default reducer;