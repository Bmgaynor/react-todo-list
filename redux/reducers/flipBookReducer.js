export default function flipBookReducer (flipBook = {}, action){
  switch (action.type) {
    case 'todo':
        return {
            username: fli.username,
            id : action.id
          };
    default:
      return flipBook;

  }
}
