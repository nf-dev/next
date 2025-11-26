import { Button } from 'shared/ui/Button';
import { useAppSelector, useAppDispatch } from 'app/providers/StoreProvider';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors';

export const Counter = () => {
    const counter = useAppSelector(getCounterValue);
    const dispatch = useAppDispatch();
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
                increment
            </Button>
            <Button data-testid="decrement-button" onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
