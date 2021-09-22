import {FETCH_PERSON_LOADING, FETCH_PERSON_SUCCESS, FETCH_PERSON_FAIL} from "../actions";

const initialState = {
  person: {
    name: {
      title: "",
      first: "",
      last: ""
    },
    picture: {
      large: "",
      medium: "",
      thumbnail: ""
    }
  },
  isFetching: false,
  error: ''
};

export const getPerson = () => {
//   1. Start Loading
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_PERSON_LOADING) :
      return ({
        // Remember first thing to do is to spread the state
        ...state,
        isFetching: true
      })
    case(FETCH_PERSON_SUCCESS):
      return ({
        // Gotta spread that state!
        ...state,
        isFetching: false,
        person: action.payload
      })
    case(FETCH_PERSON_FAIL):
      return ({
        ...state,
        isFetching: false,
        error: action.payload
      })
    default:
      return state;
  }
};