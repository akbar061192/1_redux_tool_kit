import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice';

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector(state => state.counter.count);

  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const resetCount = () => {
    dispatch(reset());
    setAmount(0);
  };

  const incrementCountByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <section>
      <p>{countValue}</p>
      <div>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
      </div>

      <input type='number' value={amount} onChange={e => setAmount(+e.target.value)} />

      <div>
        <button onClick={incrementCountByAmount}>Add Amount</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </section>
  );
};
export default Counter;
