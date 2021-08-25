import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        {label ? (
            (<label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                } form-input-lab`}
                >
                {label}
            </label>)
        ) : null}
        <input className='form-input' onChange={handleChange} {...otherProps} />
    </div>
);


export default FormInput;