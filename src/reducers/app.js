import request from "../services/request";

// TYPES
const SHOW_LOADING = "APP/SHOW_LOADING";
const HIDE_LOADING = "APP/HIDE_LOADING";

// actions
const actShowLoading = () => ({
  type: SHOW_LOADING,
  payload: {
    status: true
  }
});

const actHideLoading = () => ({
  type: HIDE_LOADING,
  payload: {
    status: false
  }
});

// axios interceptor
export const axiosInstance = () => async dispatch => {
  console.log("axios interceptor");

  request.interceptors.request.use(
    config => {
      console.log("axios interceptor");

      dispatch(actShowLoading);
      return config;
    },
    error => {
      dispatch(actHideLoading);
      return Promise.reject(error);
    }
  );
  request.interceptors.response.use(
    config => {
      dispatch(actShowLoading);
      return config;
    },
    error => {
      dispatch(actHideLoading);
      return Promise.reject(error);
    }
  );
};

// reducers
const initialState = {
  loading: false
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: payload.status
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: payload.status
      };
    default:
      return state;
  }
};
