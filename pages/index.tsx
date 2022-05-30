import type { NextPage } from 'next';
import { useSelector,useDispatch } from 'react-redux';
import { RootCounter } from '../app/store';
import { increment,decrement,incrementBy } from '../slice/counterSlice';

const Home: NextPage = () => {
  const counter = useSelector((state:RootCounter) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementBy(5))}>+5</button>
    </div>
  )
}

export default Home;
