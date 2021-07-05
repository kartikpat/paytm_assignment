import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: ${(props) => props.width};

    img {
        max-width: 100%;
    }
`;

const ImageContainer = ({ width = '', src, alt }) => (
    <Container width={width}>
        <img alt={alt} src={src} loading="lazy" />
    </Container>
);

export default ImageContainer;
