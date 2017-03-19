export const UPDATE_STATE = 'UPDATE_STATE';

export function buttonClicked(term = null) {
  let newList = term.slice();
  newList.push(Math.max(...newList)+1);

  return {
    type: UPDATE_STATE,
    payload: { todoList: newList }
  }
}