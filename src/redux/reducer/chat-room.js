//import { createAction } from "redux-actions";

export const SEND_TEXT = "SEND_TEXT";
export const sendText = (text) => {
  return {
    type: SEND_TEXT,
    payload: text
  };
};

const initialState = [{
  iconUrl: "",
  message: "Hi Honey"
}, {
  iconUrl: "",
  message: "How are you doing!!!"
}];

const chatRoomReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEND_TEXT: {
    return [...state, {
      iconUrl: "https://avatars1.githubusercontent.com/u/11702423?s=460&v=4",
      contents: action.payload
    }];
  }
  default:
    return state;
  }
};


export default chatRoomReducer; 