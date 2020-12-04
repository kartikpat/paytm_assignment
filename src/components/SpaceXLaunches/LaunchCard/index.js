import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    background-color: #fff;
    flex-direction: column;
    padding: 10px;
    width: calc(100% - 20px);
    margin-bottom: 20px;
    margin-right: 20px;

    @media(min-width: 700px) {
        width: calc(50% - 20px);
    }

    @media(min-width: 1024px) {
        width: calc(25% - 20px);
    }
`;

const CardImage = styled.div`
    display: flex;
    justify-content: center;
    background-color: #e8e8e8;
    height: 150px;
    margin-bottom: 20px;
    img {
        object-fit: cover;
    }
`;

const CardDetails = styled.div`
    .pri-text {
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
    }
    .sec-text {
        font-size: 14px;
        color: #4BB7FE;
    }
    .title {
        font-size: 16px;
        color: #4BB7FE;
        margin-bottom: 5px;
    }
    .mission-id-block {
        margin-top: 15px;
    }
    ul {
        margin: 10px 0; 
    }
`;

const DetailRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 5px 0;

    span {
        display: inline-block;
        vertical-align: top;
    }
`;

const LaunchCard = ({ launch }) => (
  <Card>
    <CardImage>
      <img loading="lazy" height="150px" src={launch?.links?.mission_patch_small} alt={`space shuttle with mission name ${launch.mission_name}`} />
    </CardImage>
    <CardDetails>
      <div className="title">{`${launch.mission_name} #${launch.flight_number}`}</div>
      {launch?.mission_id?.length
        ? (
          <>
            <div className="pri-text mission-id-block">Mission Ids:</div>
            {launch?.mission_id.map((id) => (
              <div key={id}>
                <ul>
                  <li>{id}</li>
                </ul>
              </div>
            ))}
          </>
        ) : null}
      <DetailRow>
        <span className="pri-text margin-r-5">Launch Year:</span>
        <span className="sec-text">{launch?.launch_year}</span>
      </DetailRow>
      <DetailRow>
        <span className="pri-text margin-r-5">Successful Launch:</span>
        <span className="sec-text">{launch?.launch_success ? 'true' : 'false'}</span>
      </DetailRow>
      <DetailRow>
        <span className="pri-text margin-r-5">Successful Landing:</span>
        <span className="sec-text">{launch?.launch_landing ? 'true' : 'false'}</span>
      </DetailRow>
    </CardDetails>
  </Card>
);

export default LaunchCard;
