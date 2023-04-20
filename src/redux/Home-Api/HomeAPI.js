import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
} from './HomeSlice';

const api = 'https://coronavirus.m.pipedream.net/';
const getData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await fetch(api);
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataError(error));
  }
};

export default getData;
