import { Reducer } from '@reduxjs/toolkit';
import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = Partial<Record<StateSchemaKey, Reducer>>;

interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export type ReducersListEntry = [StateSchemaKey, Reducer];

export const DynamicModuleLoader = ({
    children,
    reducers,
    removeAfterUnmount = false,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([key, reducer]: ReducersListEntry) => {
                store.reducerManager.add(key, reducer);
                dispatch({ type: `@INIT ${key} reducer` });
            },
        );

        return () => {
            Object.entries(reducers).forEach(
                ([key, reducer]: ReducersListEntry) => {
                    if (removeAfterUnmount) {
                        store.reducerManager.remove(key);
                        dispatch({ type: `@DESTROY ${key} reducer` });
                    }
                },
            );
        };
        // eslint-disable-next-line
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
