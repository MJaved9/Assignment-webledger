import * as types from "./actionTypes";

const initialState = {
  resto:[],
  isLoading: false,
  isError: false,
};

const AppReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.POST_REQ:
      return { ...state, isLoading: true };

    case types.POST_SUC:
      return { ...state, isLoading: false, resto: payload };

    case types.POST_FAIL:
      return { ...state, isLoading: false, isError: true };

    case types.GET_POST_REQ:
      return { ...state };

    case types.GET_POST_SUC:
      return { ...state, resto:payload };

    case types.GET_POST_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export { AppReducer};