import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
    articles: [{ title: "React Redux Tutorial for Beginners", id: 1 },
              { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }]
};
// const rootReducer = (state = initialState, action) => state;
// export default rootReducer;
const rootReducer = (state = initialState, action) => {
  console.log(action,state);
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      console.log(state);
      return state;
  }
};
export default rootReducer;



// { ...state, articles: state.articles.push(action.payload) };
