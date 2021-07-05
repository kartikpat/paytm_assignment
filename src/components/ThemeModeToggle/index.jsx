import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../styles/themeProvider';

const Title = styled.h3`
    text-transform: capitalize;
    text-align: right;
    cursor: pointer;
`;

const DisplayModeToggle = () => {
    const { selectedThemeMode, onToggleThemeMode } = useContext(ThemeContext);
    return <Title onClick={onToggleThemeMode}>{selectedThemeMode} Mode</Title>;
};

export default DisplayModeToggle;
