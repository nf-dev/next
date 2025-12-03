import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counter = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counter}</h1>
            <Button data-testid="increment-button" onClick={increment}>
                +
            </Button>
            <Button data-testid="decrement-button" onClick={decrement}>
                -
            </Button>
        </div>
    );
};
