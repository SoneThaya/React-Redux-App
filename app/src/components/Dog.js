import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchDog } from '../store/actions/index';

const Dog = props => {
 
  useEffect(() => {
    props.fetchDog()
  }, [])

  console.log(props)
  return (
    <div>
     
      {props.isFetching && <h3>Fetching...</h3>}

      {props.dog && (
        <div>
          <img src={props.dog} alt="pic" />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)

  return {
    isFetching: state.dog.isFetching,
    dog: state.dog,
    // error: state.dog.error
  }
}

export default connect(mapStateToProps, {fetchDog})(Dog)