const colors = {
    white: '#fff',
    lightGray: '#E4E4E4',
    black: '#2b2b2b',
    lightBlack: '#4D4D4D',
};

const lightConcepts = {
    primaryBgColor: colors.white,
    secondaryBgColor: colors.lightGray,
    primaryTextColor: colors.black,
};

const darkConcepts = {
    primaryBgColor: colors.black,
    secondaryBgColor: colors.lightBlack,
    primaryTextColor: colors.white,
};

const defaultTheme = {
    primaryFontSize: '16px',
    secondaryFontSize: '14px',
};

export const LightTheme = {
    ...defaultTheme,
    headerBg: lightConcepts.primaryBgColor,
    bodyBg: lightConcepts.secondaryBgColor,
    bodyTextColor: lightConcepts.primaryTextColor,
};

export const DarkTheme = {
    ...defaultTheme,
    headerBg: darkConcepts.primaryBgColor,
    bodyBg: darkConcepts.secondaryBgColor,
    bodyTextColor: darkConcepts.primaryTextColor,
};
