import { ActionType } from "./ActionTypes";
import Axios from "axios";
import { Dispatch } from "redux";
import { Action } from "./Actions.model";
import { Youtube_api_key } from "../../utlis/constants";

// interface GetResults {
//     type: ActionType.GET_RESULT,
//     payload: string
// }

const Api_Key = process.env.React_app_youtube_data_Api_key;

export const setResult = (result: any) => ({
  type: ActionType.SET_RESULT,
  payload: result,
});

export const GetResults = (search_text: string): any => {
  return (dispatch: Dispatch<Action>) => {
    Axios.get(
      `${Youtube_api_key}/search?q=${search_text}&key=${Api_Key}&part=snippet&type=video`
    )
      .then((dta) => dispatch(setResult(dta.data.items)))
      .catch((err) => {
        // dispatch(fetchIngredientsFailed())
        console.log(err);
      });
  };
};
