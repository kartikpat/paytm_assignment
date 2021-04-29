import React from 'react';
import SpaceXLaunches from '../../components/SpaceXLaunches';
import styled from 'styled-components';

const Heading = styled.h1`
    margin: 20px auto;
    padding-left: 20px;
    max-width: 1440px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;

    @media (min-width: 700px) {
        flex-direction: row;
    }
`;

const Home = () => (
    <>
        <Heading>SpaceX Launch Programsssss</Heading>
        <Container>
            {/* <Filter /> */}
            <SpaceXLaunches />
        </Container>
    </>
);

export default Home;
