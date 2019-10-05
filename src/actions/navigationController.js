export function handleNavigation(data) {
  return {
    type: "handleNavigation",
    payload: data
  };
}
export function resetNavigation(data) {
  return {
    type: "resetNavigation",
    payload: data
  };
}
