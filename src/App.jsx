import { useReducer } from "react";

const intialState = {
  count: 0
};

const reducer = (state, action) => {
  // if (action.type === 'PLUS') {
  //   return {
  //       count: state.count + 1
  //   }
  // }else if (action.type==='MINUS') {
  //   return {
  //       count: state.count - 1
  //   }
  // }else if (action.type === "RESET"){
  //   return{
  //     count:0
  //   }
  // }
  // return state;

  switch(action.type){
    case'PLUS':
    return{
      count:state.count+1
    }
    case'MINUS':
    return{
      count: state.count - 1
    }
    case'RESET':
    return{
      count:0
    }
    default:
      return state;
  }
}



const App = () => {
  const [state, dispatch] = useReducer(reducer,  intialState);
  
  return (
      <div>
          
          <h1>Count: {state.count}</h1>
          <button onClick={() => dispatch({ type: "PLUS" })}>Increase</button>
          <button onClick={()=>dispatch({type:"MINUS"})}>Decrease</button>
          <button onClick={()=>dispatch({type: "RESET"})}>Reset</button>
      </div>
  )
}

export default App;