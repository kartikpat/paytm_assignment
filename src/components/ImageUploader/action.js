import { actionType, ACCEPTED_IMAGE_HEIGHT, ACCEPTED_IMAGE_WIDTH } from "./constants"
import { checkIfAcceptedImage, getResizedImages } from "./helper"
import axios from "axios";

export const onClickUploadImages = (url) => dispatch => {
    const file = event.target.files[0];

    if(!file.type.match(/image.*/)) return dispatch({ type: actionType.UPLOAD_IMAGE_FAIL, payload: "File not an image" })

    const reader = new FileReader();

    reader.onload = (readerEvent) => {
        const image = new Image();

        image.onload = () => {
            if(!checkIfAcceptedImage(image)) return dispatch({ type: actionType.UPLOAD_IMAGE_FAIL, payload: `File not ${ACCEPTED_IMAGE_WIDTH}*${ACCEPTED_IMAGE_HEIGHT}` })
            
            const resizedImages = getResizedImages(image);

            dispatch({ type: actionType.UPLOAD_IMAGE_REQUESTING })
            Promise.all(resizedImages.map(imageData => uploadImage(imageData))).then(_ =>
                dispatch({ type: actionType.UPLOAD_IMAGE_SUCCESS, payload: `Images Uploaded Successfully` })
			);
        }
        image.src = readerEvent.target.result;
    }
    reader.readAsDataURL(file);    
}

const uploadImage = (imageData) => {
    const data = new FormData(document.getElementById('uploadImageForm')[0]);
    data.append('image_data', imageData.blob);
    data.append('type', imageData.type);
    
    return axios
		.post('/api/upload', data)
		.then(res => {
			console.log(res)
		}).catch(err => {
            console.log(err)
        })
}