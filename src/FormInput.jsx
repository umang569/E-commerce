import React from 'react';
import { useField } from 'formik';
import Input from './Input'

function FormInput({ name, ...rest }) {
  const [field, meta] = useField(name);
  const { value, onBlur, onChange } = field;
  const { error, touched } = meta;

  return (
      <Input
        value ={value}
        name={name}
        error={error}
        touched={touched}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
  );
}

export default FormInput;