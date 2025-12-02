import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { loginSchema } from 'features/AuthByUsername/index';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm: loginSchema;
}
