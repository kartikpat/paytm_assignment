import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ImageContainer from '../../components/UI/ImageContainer';

const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;

const CountriesList = () => {
    const countries = useSelector((state) => state.countries.list);
    const isPageLoading = useSelector((state) => state.countries.isPageLoading);

    return !isPageLoading ? (
        <Container>
            {countries.map((country) => (
                <ImageContainer
                    key={country.numericCode}
                    alt={`flag of ${country.name}`}
                    src={country.flag}
                />
            ))}
        </Container>
    ) : (
        <div>Loading...</div>
    );
};

export default CountriesList;
