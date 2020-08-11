import React from "react";
import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

const InputField = ({ type, placeholder, name, required, onChange, id }) => (
    <Input type={type} placeholder={placeholder} name={name} required={required} onChange={onChange} id={id}/>
)

export default InputField;