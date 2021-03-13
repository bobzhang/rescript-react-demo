@@config({no_export})
type state = {count: int}

let {useReducer} = module (React.Uncurried)
let {string} = module (React)
let {render,querySelector} = module (ReactDOM )
let initialState = {count: 0}
let reducer = (state, action) =>
  switch action {
  | #Increment => {count: state.count + 1}
  | #Decrement => {count: state.count - 1}
  }
module App = {
  @react.component
  let make = () => {
    let (state, dispatch) = useReducer(reducer, initialState)
    <main>
      {string("Simple counter with reducer")}
      <div>
        <button onClick={_ => dispatch(.#Decrement)}> {string("Decrement")} </button>
        <span className="counter"> {state.count->string_of_int->string} </span>
        <button onClick={_ => dispatch(.#Increment)}> {string("Increment")} </button>
      </div>
    </main>
  }
}

switch querySelector("#root"){
  | None => ()
  | Some(e) => 
    render(<App/>,e)
}
