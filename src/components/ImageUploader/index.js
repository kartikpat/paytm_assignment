import React from "react";
import { connect } from "react-redux";
import { onClickUploadImages } from "./action";
import InputField from "../UIComponents/Input";
import styled from 'styled-components';
import { imageBaseUrl } from "./constants";

const Container = styled.div`
    width: 50%;
    padding: 50px;
    margin: 0 auto;
`;

const ImageUploader = ({ onInputChange, alertMsg, showImages }) => (
    <Container>
        <form id="uploadImageForm" encType="multipart/form-data"></form>
        <InputField name="imagefile[]" type="file" id="uploadImageField" accept="image/*" onChange={onInputChange} />
        {alertMsg && alert(alertMsg) }
        {showImages && <div>
            <img src={`${imageBaseUrl}/gallery.png?hash=${new Date().getTime()}`}></img>
            <img src={`${imageBaseUrl}/horizontal-small.png?hash=${new Date().getTime()}`}></img>
            <img src={`${imageBaseUrl}/horizontal.png?hash=${new Date().getTime()}`}></img>
            <img src={`${imageBaseUrl}/vertical.png?hash=${new Date().getTime()}`}></img>
        </div>}
    </Container>
)

const mapStateToProps = state => ({
    alertMsg: state.imageUploader.alertMsg,
    showImages: state.imageUploader.showImages
});

const mapDispatchToProps = dispatch => ({
    onInputChange: () => dispatch(onClickUploadImages('#{imageUploadUrl}')),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploader);