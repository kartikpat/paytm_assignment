import React from 'react';
import styled from 'styled-components';
import DisplayModeToggle from '../ThemeModeToggle';

const Bar = styled.div`
    padding: 16px 32px;
    background: ${({ theme }) => theme.headerBg};
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;

const Title = styled.h1``;

const Header = () => (
    <Bar>
        <Container>
            <Title>Where in the world?</Title>
            <DisplayModeToggle />
        </Container>
    </Bar>
);

export default Header;
