import { FETCH_PERSON_FAIL, FETCH_PERSON_SUCCESS, FETCH_PERSON_LOADING } from "../actions";

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



export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_PERSON_LOADING):
      return ({
        ...state,
        isFetching: true,
      })
    case(FETCH_PERSON_SUCCESS): 
      return ({
        ...state,
        isFetching: false,
        person: action.payload,
      })
    case(FETCH_PERSON_FAIL): 
      return ({
        ...state,
        isFetching: false,
        error: action.payload,
      })
    default:
      return state;
  }
};