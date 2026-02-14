import Input from "../../components/Input/Input";
import type { StoryObj } from "@storybook/react";

export default {
    title: "Input",
    component: Input,
};

type Story = StoryObj<typeof Input>;

export const PasswordClearableLg: Story = {
    args: {
        type: "password",
        clearable: true,
        size: "lg",
    },
};

export const TextClearableMd: Story = {
    args: {
        type: "text",
        clearable: true,
        size: "md",
    },
};

export const NumberUnclearableSm: Story = {
    args: {
        type: "number",
        clearable: false,
        size: "sm",
    },
};
