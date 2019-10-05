const initialState = {
  toHome: false,
  toMoveList: false,
  toFrameData: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "handleNavigation":
      return {
        ...state,
        toHome: action.payload === 'CharList',
        toMoveList: action.payload === 'MoveList',
        toFramdeData: action.payload === 'FrameData'
      };
    case "resetNavigation":
      return {
        ...state,
        toHome: false,
        toMoveList: false,
        toFramdeData: false,
      };
    default:
      return state;
  }
}
