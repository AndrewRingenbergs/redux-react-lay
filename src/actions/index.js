export const UPDATE_STATE = 'UPDATE_STATE';

export function buttonClicked(term = null) {
  console.log('term');
  return {
    type: UPDATE_STATE,
    term
  }
}