import React, {memo} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LaunchCard from './LaunchCard';
import Filter from './Filter';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;

    @media(min-width: 700px) {
        flex-direction: row;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin-left: 20px;

    @media(min-width: 700px) {
        margin-left: 0;
    }
`;

const Heading = memo(styled.h1`
    margin: 20px auto;
    padding-left: 20px;
    max-width: 1440px;
`);

const SpaceXLaunches = ({
  launches, alertMsg,
}) => (
  <>
    <Heading>SpaceX Launch Programs</Heading>
    <Container>
      <Filter />
      <CardContainer>
        {launches?.length ? launches.map((launch) => <LaunchCard launch={launch} key={launch.flight_number} />) : 'No Data'}
        {alertMsg && alert(alertMsg) }
      </CardContainer>
    </Container>
  </>
);

const mapStateToProps = (state) => ({
  alertMsg: state.spaceXLaunches.alertMsg,
  launches: state.spaceXLaunches.launches,
});

export default connect(mapStateToProps, null)(SpaceXLaunches);
