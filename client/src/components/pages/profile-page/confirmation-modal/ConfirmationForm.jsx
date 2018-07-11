import React from 'react';
import { reduxForm } from 'redux-form';
import Button from 'components/common/button/Button.jsx';
import InputWithLabel from 'components/common/input/InputWithLabel.jsx';

import { getBEMClasses } from 'components/helpers/BEMHelper';

const modalForm = 'modal-form';
const bemClasses = getBEMClasses([modalForm]);

const ConfirmationForm = props => {
  const { valid, handleSubmit } = props;

  return (
    <form className={bemClasses()} onSubmit={handleSubmit}>
      <InputWithLabel type="password" name="password" placeholder="Enter password" />
      <div className={bemClasses('action-button')}>
        <Button
          type="submit"
          buttonColor="primary"
          label="Change"
          disabled={!valid}
        /> 
      </div>  
    </form>  
  );
};

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required'
  } 

  return errors;
};

export default reduxForm({ form: 'userPasswordConfirm', validate })(ConfirmationForm);