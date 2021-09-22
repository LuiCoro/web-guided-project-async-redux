export const FETCH_PERSON_LOADING = 'FETCH_PERSON_LOADING'
export const FETCH_PERSON_SUCCESS = 'FETCH_PERSON_SUCCESS'
export const FETCH_PERSON_FAIL = 'FETCH_PERSON_FAIL'


export const fetchPersonLoading = () => {
  // our actions always gotta have a type no matter what
  return ({type: FETCH_PERSON_LOADING })
}

// reason as to why we are passing person as prop is because its part of our state to check if
// we managed to get a new person after clicking the button
export const fetchPersonSuccess = (person) => {
  return ({type: FETCH_PERSON_SUCCESS , payload: person})
}

//this is based on our reducers cases we created
export const fetchPersonFail = (error) => {
  return ({ type: FETCH_PERSON_FAIL , payload: error})
}