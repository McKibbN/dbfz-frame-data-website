const initialState = {
  bluprint: false,
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "blueprintSwitch":
      return {
        ...state,
        bluprint: 'true',
      };
    default:
      return state;
  }
}
