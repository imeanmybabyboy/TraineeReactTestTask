import Toast from "../../components/Toast/Toast";
import type { StoryObj } from "@storybook/react-vite";

export default {
    title: "Toast",
    component: Toast,
};

type Story = StoryObj<typeof Toast>;

export const FiveSecAutoCloseFade: Story = {
    args: {
        timeout: 5,
        transitionType: "fade",
    },
};

export const ManualCloseSlide: Story = {
    args: {
        timeout: 0,
        transitionType: "slide",
    },
};
