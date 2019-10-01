import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { normalizeTime, validate, submit } from '../constants/methods';
import { addInputs, showModal, storeValues } from '../redux/actions';
import renderField from './fields/InputField';
import renderSelectField from './fields/SelectField';
import ModalBox from './ModalBox';
import '../scss/form.scss';

const mapDispatchToProps = dispatch => ({
  addInputs: dishtype => {
    dispatch(addInputs(dishtype));
  },
  showModal: () => {
    dispatch(showModal());
  },
  storeValues: values => {
    dispatch(storeValues(values));
  }
 });

const mapStateToProps = (state) => {
  return {
    elements: state.elements,
    show: state.show,
    formValues: state.formValues
  }
}

const Form = (props) => {
    const { handleSubmit, dirty, submitting } = props;
  
    return (
      <div className="form-wrapper">
        <ModalBox showModal={props.show}/>
        <form onSubmit={handleSubmit(submit)}>
          <fieldset>
          <div className="input-wrapper">

            <Field  name="name" 
                    type="text"
                    component={renderField}
                    label="Dish name"
                    />
          </div>
          <div className="input-wrapper">
            <Field name="preparation_time" 
                    type="text"
                    component={renderField}
                    label="Preparation time"
                    normalize={normalizeTime}
                    />
          </div>
          <div className="input-wrapper">
            <p className="select-label">Dish type:</p>
              <Field name="type" component={renderSelectField} onChange={(event) => props.addInputs(event.target.value)}>
                <option hidden>Choose dish type</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="sandwich">Sandwich</option>
              </Field>
          </div>
          {props.elements.map(element => {
            return (
              <div key={element.name} className="input-wrapper">
                <Field name={element.name} 
                    type={element.type}
                    component={renderField}
                    label={element.label}
                    normalize={element.normalize}
                    pattern={element.pattern}
                    />
              </div>
            )
          })}
          <div className="btn-wrapper">
            <div className="btn">
              <button type="submit" disabled={!dirty || submitting}>Submit</button>
            </div>
          </div>
          </fieldset>
        </form>
      </div>
    )
  }

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ 
                                form: 'dish', 
                                enableReinitialize: true,
                                validate
                              })(Form));
