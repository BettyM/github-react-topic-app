import { handleActions } from 'redux-actions'

const defaultState = {
  topics: []
}

const reducerMap = {
  'SET_TOPIC_SERVICE': (state, {payload}) => {
    return {
      ...state,
      topics: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
