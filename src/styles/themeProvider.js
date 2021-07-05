import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './theme';
import GlobalStyle from './globalStyles';

export const ThemeContext = createContext();

const themeMode = {
    LIGHT_MODE: 'light',
    DARK_MODE: 'dark',
};

const getTheme = (selectedThemeMode) =>
    selectedThemeMode === themeMode.LIGHT_MODE ? LightTheme : DarkTheme;

const ThemeProvider = ({ children }) => {
    const [selectedThemeMode, setThemeMode] = useState(themeMode.LIGHT_MODE);
    const selectedTheme = getTheme(selectedThemeMode);

    const onToggleThemeMode = () => {
        setThemeMode((prevState) =>
            prevState === themeMode.LIGHT_MODE
                ? themeMode.DARK_MODE
                : themeMode.LIGHT_MODE
        );
    };

    const value = { selectedThemeMode, onToggleThemeMode };

    return (
        <ThemeContext.Provider value={value}>
            <StyledThemeProvider theme={selectedTheme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
