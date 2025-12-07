import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://placehold.co/300x300',
    size: 150,
    alt: 'avatar',
};

export const Small = Template.bind({});
Small.args = {
    src: 'https://placehold.co/300x300',
    alt: 'avatar',
    size: 50,
};
