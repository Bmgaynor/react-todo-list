function getId(todos){
  return todos.reduce((maxId, todo)=> {
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

export default function todoReducer (todos = [], action){
  switch (action.type) {
    case 'ADD_TODO':
      return[
          {
              text: action.text,
              id: getId(todos)
          }, ...todos
        ];

      // add Delete Todo
      case 'COMPLETE_TODO':
        return todos.map((todo)=> {
            return todo.id === action.id ? Object.assign({}, todo,
              {
                completed: !todo.completed
              }):todo;
          });

      case 'DELETE_TODO':
        return todos.filter((todo)=> {
            return todo.id !== action.id;
            });

      case 'EDIT_TODO':
        return todos.map((todo)=> {
            return todo.id === action.id ? Object.assign({}, todo,
              {
                edit: !todo.edit
              }):todo;
          });
      case 'HANDLE_EDIT_SUBMITION':
        return todos.map((todo)=> {
            return todo.id === action.id ? Object.assign({}, todo,
              {
                text: action.text,
                edit: !todo.edit
              }):todo;
          });
    default:
      return todos;

  }
}
