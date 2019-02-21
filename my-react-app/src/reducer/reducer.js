const initState = {
    books: [
        { title: 'Angular', author: 'Mike', price: 22 }
    ], 
    mobiles: []
}

const appReducer = (state=initState, action)=>{
    console.log(action);
    if(action.type==='ADD_BOOK'){
        console.log(state.books);
        console.log(action.book);
        return {
            ...state,
            books: [...state.books, action.book]
        }
    }
    return state;
}

export default appReducer;