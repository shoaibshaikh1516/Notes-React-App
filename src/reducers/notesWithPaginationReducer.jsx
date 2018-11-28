import {
  GET_NOTES_USING_PAGINATION,
  GET_NOTES_USING_SORTING
  // UPDATE_NOTES_USING_PAGINATION
} from "../actions/types";
//same as Context file used previously
const initialState = {
  notespg: {}

  // contact: {},
};

export default function(state = initialState, action) {
  console.log(" reducer GET_NOTES_USING_PAGINATIONsss", action.payload);

  switch (action.type) {
    case GET_NOTES_USING_PAGINATION:
      console.log("state", state);
      console.log("action.payload", action.payload);

      return {
        ...state,
        notespg: action.payload
      };

    // case UPDATE_NOTES_USING_PAGINATION:
    
    //   return {
    //     ...state,
    //     notespg: {},
    //     notespg: action.payload
      
    //   };


    case GET_NOTES_USING_SORTING:
    console.log("state", state);
    console.log("action.payload", action.payload);

    return {
      ...state,
      notespg: action.payload
    };

    default:
      return state;
  }
}
