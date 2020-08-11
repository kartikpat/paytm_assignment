import { actionType } from "./constants";

const initialState = {
    alertMsg: null,
    userProfile: {},
    showImages: false
}

const imageUploader = (state = initialState, action) => {
    switch(action.type) {
        case actionType.UPLOAD_IMAGE_SUCCESS:
            return { ...state, alertMsg: action.payload, showImages: true } 
        case actionType.UPLOAD_IMAGE_FAIL:
            return { ...state, alertMsg: action.payload }
        case actionType.UPLOAD_IMAGE_REQUESTING: 
            return { ...state, showImages: false, alertMsg: null } 
        default: 
           return state;
     }
}

export default imageUploader;