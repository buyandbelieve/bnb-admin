import type { Meta, StoryObj } from '@storybook/react';

import Chart from './chart'

const meta: Meta<typeof Chart> = {
    title: 'Example2/Chart',
    component: Chart,
}

export default meta;

type Story = StoryObj<typeof Chart>;

export const Primary: Story = {
    args: {

    },
}