let actions = {
  addTodo: function(text){
    return {
      type: 'ADD_TODO',
      text: text
    };
  },
  completeTodo: function(id){
    return {
      type: 'COMPLETE_TODO',
      id: id
    };
  },
  deleteTodo: function(id){
    return {
      type: 'DELETE_TODO',
      id: id
    };
  },
  editTodo:function(id){
    return {
      type:'EDIT_TODO',
      id: id
    };
  },
  handleEditSubmition:function(id, text){
    return{
        type:'HANDLE_EDIT_SUBMITION',
        id: id,
        text:text

    };
  },

  createNewUserId: function(){
    return {
      type: 'CREATE_USER_ID',
      id: Math.floor(Math.random() * 100) + 1
    };
  },
  createNewUserIdIfOdd:function(){
    return (dispatch, getState)=>{
      const { user } = getState();
      if (user.id % 2 === 0 ){
        return;
      }
      dispatch(actions.createNewUserId());
    };
  },
  createNewUserIdAsync:function(){
    return (dispatch)=>{
      setTimeout(()=>{
        dispatch(actions.createNewUserId());
      },2500);
    };
  }
};
export default actions;
///sdf
