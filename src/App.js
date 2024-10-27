import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './components/classBasedComponent';
import FunctionalComponentEx from './components/FunctionalComponentEx';
import ProductList from './components/products';
import UseEffectEx from './components/hooks/UseEffectEx';
import UseContextEx from './components/hooks/UseContextEx';
import ThemeContext from './components/hooks/UseContextEx'
import UseRefEx from './components/hooks/UseRefEx';
import USeReducerEx from './components/hooks/USeReducerEx';
import UseMemoEx from './components/hooks/UseMemoEx';
import UseCallbackEx from './components/hooks/UseCallbackEx';
import fetchData from './components/FetchDataEx';
import FetchDataEx from './components/FetchDataEx';
import DisplayDataIntable from './components/interviewAsked/DisplayDataIntable';
import Login from './components/LoginEx/Login';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './components/LoginEx/Register';
import Dashboard from './components/LoginEx/Dashboard';
import ComponentA from './material-ui/ComponentA';
import { useDispatch,useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from './reduxexample/actions';
import Main from './components/UseContextExample/Main';
import UseReducer from './components/hooks/UseReducer';
import USeMemoExample1 from './components/hooks/USeMemoExample1';
import UseMemoExample2 from './components/hooks/UseMemoExample2';
import UseCallbakExample1 from './components/hooks/UseCallbakExample1';
// import Main from './components/PropsDrillingEx/Main';
const dummyProductData=['product 1','product 2','product 3'];

function App() {
  // const counter=useSelector(state =>state.counter);
  // const dispatch=useDispatch();
  return (
    <div className="App">
       {/* <ClassBasedComponent/> */}
      {/*<FunctionalComponentEx/> */}
      {/* <ProductList dummyProductData={dummyProductData}name="lavanya" city='TPT'/> */}
      {/* <UseEffectEx/> */}
      {/* <ThemeContext.Provider value="dark">
<UseContextEx/>
      </ThemeContext.Provider> */}
      {/* <UseRefEx/> */}
      {/* <USeReducerEx/> */}
      {/* <UseMemoEx/> */}
      {/* <UseCallbackEx/> */}
      {/* <FetchDataEx/> */}
      {/* <DisplayDataIntable/> */}
      {/* <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Navigate to="/register"/>}/>
          
        </Routes>
      </Router> */}
      {/* <ComponentA/> */}
      {/* redux */}
      {/* <h1>Counter:{counter}</h1>
      <button onClick={()=>dispatch(incrementCounter())}>Increment</button>

      <button onClick={()=>dispatch(decrementCounter())}>Decrement</button> */}
      {/* <Main/> */}

{/* <Main/> */}
{/* <UseReducer/> */}
{/* <UseMemoExample2/>
<UseRefEx/> */}
<UseCallbakExample1/>
    </div>
  );
}

export default App;
