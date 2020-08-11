import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const ButtonComponent = ({ label, onClick }) => (
    <Button onClick={onClick}>{label}</Button>
)

export default ButtonComponent;