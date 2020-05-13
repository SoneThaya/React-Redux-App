import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { fetchDog } from '../store/actions/index';

const Dog = props => {
 
  useEffect(() => {
    props.fetchDog()
  }, [])

  console.log(props)
  return (
    <div>
     
      {props.isFetching && <Loader type="Circles" color="#00BFFF" height={80} width={80}/>}

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
    isFetching: state.isFetching,
    dog: state.dog,
    // error: state.dog.error
  }
}

export default connect(mapStateToProps, {fetchDog})(Dog)