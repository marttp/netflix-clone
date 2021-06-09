/**
 * Github: https://github.com/hieptl/netflix-clone.
 * Dev.to: https://dev.to/hieptl/learn-react-by-building-netflix-1127
 */
// import loading actiont types.
import * as loadingActionTypes from "../actions/LoadingActionTypes";

const initialState = {
  isLoadingShown: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case loadingActionTypes.SHOW_LOADING:
      return {
        ...state,
        isLoadingShown: true
      };
    case loadingActionTypes.HIDE_LOADING:
      return {
        ...state,
        isLoadingShown: false
      };
    default:
      return state;
  }
}

export default reducer;
