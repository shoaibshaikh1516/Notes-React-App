import {
  GET_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  GET_NOTE,
  UPDATE_NOTE,
} from '../actions/types';
//same as Context file used previously
const initialState = {
  notes: [],

  note: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case GET_NOTE: //for EDIT
      return {
        ...state,
        note: action.payload,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload),
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(
          note =>
            note.id === action.payload.id ? (note = action.payload) : note //equals
        ),
      };
    default:
      return state;
  }
}
