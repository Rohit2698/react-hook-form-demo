import {object, string} from 'yup';

export const UserFormInitalValue = {
  firstName: '', //Textfield
  lastName: '', //Textfield
  gender: '', //Select
  dob: '', //DatePicker
};

export const UserFormValidation = object().shape({
  firstName: string().required('Please enter firstName'),
  lastName: string(),
  gender: string().required('Please select gender'),
  dob: string().required('Please seelct dob'),
});
