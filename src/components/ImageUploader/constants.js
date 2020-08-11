export const actionType = {
    UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
    UPLOAD_IMAGE_FAIL: 'UPLOAD_IMAGE_FAIL',
    UPLOAD_IMAGE_REQUESTING: 'UPLOAD_IMAGE_REQUESTING'
}

export const ACCEPTED_IMAGE_WIDTH = 1024;
export const ACCEPTED_IMAGE_HEIGHT = 1024;

export const RESIZED_IMAGES_DIMENSION = [{
    h: '450',
    w: '755',
    type: 'horizontal'
},{
    h: '450',
    w: '365',
    type: 'vertical'
},{
    h: '212',
    w: '365',
    type: 'horizontal-small'
},{
    h: '380',
    w: '380',
    type: 'gallery'
}]

export const imageBaseUrl = 'http://localhost:8080';