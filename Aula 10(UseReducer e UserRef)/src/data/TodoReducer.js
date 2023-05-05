export const TodoReducer = (state, action) => {
    console.log(state);
    console.log(action);

    switch(action.type){
        case 'ADD_TODO':
            return [...state, {texto : action.payload.text}];
        default:
            alert("Não sei o que fazer")
            return state;
    }
};