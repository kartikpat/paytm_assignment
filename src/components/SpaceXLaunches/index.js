import React, { useReducer } from 'react';
import styled from 'styled-components';
import LaunchCard from './LaunchCard';
import { spaceXLaunchesReducer, initialState } from './reducer';

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-left: 20px;

    @media (min-width: 700px) {
        margin-left: 0;
    }
`;

const SpaceXLaunches = () => {
    const [state] = useReducer(spaceXLaunchesReducer, initialState);
    const { launches, alertMsg } = state;

    return (
        <CardContainer>
            {launches?.length
                ? launches.map((launch) => (
                      <LaunchCard launch={launch} key={launch.flight_number} />
                  ))
                : 'No Data'}
            {alertMsg && alert(alertMsg)}
        </CardContainer>
    );
};

export default SpaceXLaunches;
