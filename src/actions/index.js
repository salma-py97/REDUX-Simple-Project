export const increment = (nr) => {
  return {
    type: 'INCREMENT',
    payload: nr,
  };
}
export const decrement = (nr) => {
  return {
    type: 'DECREMENT',
    payload: nr
  };
}
export const logIn = () => {
  return {
    type: 'LOG_IN'
  };
}
export const logOut = () => {
  return {
    type: 'LOG_OUT'
  };
}