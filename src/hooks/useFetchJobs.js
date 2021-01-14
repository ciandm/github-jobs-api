import { useEffect, useReducer } from 'react'
import axios from 'axios';

const ACTIONS = {
  NEW_REQUEST: 'new-request',
  HAS_LOAD_MORE: 'has-load-more',
  GET_DATA: 'get-data',
  ERROR: 'error',
  LOAD_MORE: 'load-more'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEW_REQUEST:
      return {
        loading: true,
        jobs: []
      }
    case ACTIONS.HAS_LOAD_MORE:
      return {
        ...state,
        hasLoadMore: action.payload.hasLoadMore
      }
    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs
      }
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: []
      }
    default:
      return state;
  }
}

const API_URL = 'https://jobs.github.com/positions.json';

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true, hasLoadMore: false });


  // fetch jobs
  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.NEW_REQUEST });
    axios.get(API_URL, {
      cancelToken: cancelToken1.token,
      params: {
        ...params,
        page
      }
    })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch(error => {
        if (axios.isCancel) return;
        dispatch({ type: ACTIONS.ERROR, payload: error })
      })

    const cancelToken2 = axios.CancelToken.source();
    axios.get(API_URL, {
      cancelToken: cancelToken2.token,
      params: {
        ...params,
        page: page + 1
      }
    })
      .then((res) => {
        dispatch({ type: ACTIONS.HAS_LOAD_MORE, payload: { hasLoadMore: res.data.length !== 0 } });
      })
      .catch(error => {
        if (axios.isCancel) return;
        dispatch({ type: ACTIONS.ERROR, payload: error })
      })

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    }
  }, [params, page])

  return state;
}

export default useFetchJobs;