import axios from "axios"

export const FETCH_PERSON_LOADING = "FETCH_PERSON_LOADING"
export const FETCH_PERSON_SUCCESS = "FETCH_PERSON_SUCCESS"
export const FETCH_PERSON_FAIL = "FETCH_PERSON_FAIL"

export const getPerson = () => {
  // 1. start loading
  // 2. do our api call
  // 3. success on success api call
  // 4. fail on fail api call
  return dispatch => {
    dispatch({ type: FETCH_PERSON_LOADING })
    axios.get('https://randomuser.me/api/')
      .then(res => {
        dispatch({ type: FETCH_PERSON_SUCCESS, payload: res.data.results[0]})
      })
      .catch(err => {
        dispatch({ type: FETCH_PERSON_FAIL, payload: error })
      }) 
  }
}


export const fetchPersonLoading = () => {
  return ({ type: FETCH_PERSON_LOADING })
}

export const fetchPersonSuccess = (person) => {
  return ({ type: FETCH_PERSON_SUCCESS, payload: person})
}

export const fetchPersonFail = (error) => {
  return ({ type: FETCH_PERSON_FAIL, payload: error })
}