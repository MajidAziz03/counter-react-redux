import './App.css';
import changeTheNumber from './Reducers/Reducer';
import { incNumber,decNumber } from './Actions/Action';
import {useSelector,useDispatch} from 'react-redux'


function App() {
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <>
      <div className='App'>
      <h1> Incremement and Decrement counter </h1>
      <div className='quantity'>
          <a className='quantity__minus' title='DECREMENT' onClick={() => dispatch(decNumber())}> <span> - </span>  </a>
        <input type="text" value={myState} className = 'quantity__input' name='quantity' />
          <a className='quantity__plus' title='INCREMENT' onClick={ () => dispatch(incNumber())} > <span> + </span> </a>
        </div>
      </div>
    </>
  );
}

export default App;
