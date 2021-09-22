import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import axios from 'axios'

// we are now importing our actions!
import {fetchPersonLoading, fetchPersonSuccess , fetchPersonFail} from "../actions";

const johnDow = {
  name: {
    title: "Dr.",
    first: "John",
    last: "Doe Smith III"
  },
  picture: {
    large: "https://randomuser.me/api/portraits/men/70.jpg",
    medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
  }
}

const Person = (props) => {
  
  const {person, isFetching, error} = props
  
  useEffect(() => {
  });
  
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }
  
  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }
  
  const handleClick = () => {
    props.fetchPersonLoading()
    axios.get('https://randomuser.me/api/')
      .then(res => {
        props.fetchPersonSuccess(res.data.results[0])
      })
      .catch(err => {
        props.fetchPersonFail(err.error)
      })
  }
  
  return (
    <>
      <div>
        <h2>Say Hi to: {person.name.first} {person.name.last}</h2>
        <img src={person.picture.large}/>
      </div>
      <button onClick={handleClick}>Get new person</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {fetchPersonLoading, fetchPersonSuccess , fetchPersonFail})(Person);