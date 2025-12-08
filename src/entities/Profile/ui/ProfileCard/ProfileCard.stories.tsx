import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
    args: {
        data: {
            first: 'Nikita',
            lastname: 'Some',
            age: 123,
            currency: Currency.EUR,
            country: Country.Armenia,
            city: 'London',
            username: 'adminaaa',
            avatar: 'https://placehold.co/300x300',
        },
    },
    decorators: [
        StoreDecorator({
            profile: {},
        }),
    ],
};

export const Dark: Story = {
    args: {
        data: {
            first: 'Nikita',
            lastname: 'Some',
            age: 123,
            currency: Currency.EUR,
            country: Country.Armenia,
            city: 'London',
            username: 'adminaaa',
            avatar: 'https://placehold.co/300x300',
        },
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {},
        }),
    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        StoreDecorator({
            profile: {},
        }),
    ],
};

export const Readonly: Story = {
    args: {
        data: {
            first: 'Nikita',
            lastname: 'Some',
            age: 123,
            currency: Currency.EUR,
            country: Country.Armenia,
            city: 'London',
            username: 'adminaaa',
            avatar: 'https://placehold.co/300x300',
        },
        readonly: true,
    },
    decorators: [
        StoreDecorator({
            profile: {},
        }),
    ],
};
export const WithError: Story = {
    args: {
        error: 'error',
    },
    decorators: [
        StoreDecorator({
            profile: {},
        }),
    ],
};
