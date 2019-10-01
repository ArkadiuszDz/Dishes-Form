import React from 'react';
import "../scss/modal.scss";
import { hideModal } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const ModalBox = (props) => {
  const dispatch = useDispatch();
  let values = useSelector(state => state.formValues) || {};

  return (
    <div className={props.showModal === true? "modal": "modal hidden"}>
      <h2>Thank you for submitting the form.</h2>
      <h3>Your form summary:</h3>
      {Object.keys(values).map((key, index) => {
        return <p key={index}>
                  <span className="field-name">{key.replace(/_/gi, ' ')}: </span>
                  <span>{values[key]}</span>
                </p>
      })}
      <div className="btn-wrapper">
        <div className="btn">
          <button onClick={() => {
            dispatch(hideModal());
          }}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default ModalBox;