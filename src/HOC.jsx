import React from 'react';
import {useField} from 'formik';

function HOC(InputComponent){
  function OutputComponent({ name, ...rest }) {
        const [field, meta] = useField(name);
        const { value, onBlur, onChange } = field;
        const { error, touched } = meta;

        return (
            <InputComponent
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
  return OutputComponent;
}
export default HOC;