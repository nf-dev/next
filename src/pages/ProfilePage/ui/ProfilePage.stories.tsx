import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    first: 'Nikita',
                    lastname: 'Some',
                    age: 123,
                    currency: Currency.EUR,
                    country: Country.Armenia,
                    username: 'admin',
                    avatar: 'https://placehold.co/300x300',
                },
                readonly: true,
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    first: 'Nikita',
                    lastname: 'Some',
                    age: 123,
                    currency: Currency.EUR,
                    country: Country.Armenia,
                    username: 'admin',
                    avatar: 'https://placehold.co/300x300',
                },
                readonly: true,
            },
        }),
    ],
};
