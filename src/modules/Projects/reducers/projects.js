import * as projectApi from "../services/api";

// initState
const initialState = {
  shops: []
};

const FETCH_SHOP_SUCCESS = "PROJECT/FETCH_SHOP_SUCCESS";
const FETCH_SHOP_FAILURE = "PROJECT/FETCH_SHOP_FAILURE";

export const fetchShops = () => async dispatch => {
  try {
    const { data } = await projectApi.fetchShops();
    dispatch({ type: FETCH_SHOP_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_SHOP_FAILURE, payload: err.response || [] });
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SHOP_SUCCESS: {
      return {
        ...state,
        shops: payload
      };
    }
    case FETCH_SHOP_FAILURE: {
      return {
        ...state,
        shops: []
      };
    }
    default:
      return state;
  }
}
