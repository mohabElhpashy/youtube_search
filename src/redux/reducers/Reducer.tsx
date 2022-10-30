import { ActionType } from "../actions/ActionTypes";
import { Action } from "../actions/Actions.model";

const initialState: {}[] = [{}];

const reducer = (state = initialState, action: Action): {}[] => {
  switch (action.type) {
    case ActionType.SET_RESULT:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
