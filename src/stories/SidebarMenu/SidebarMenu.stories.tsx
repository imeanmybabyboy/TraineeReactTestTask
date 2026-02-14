import type { StoryObj } from "@storybook/react-vite";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";

export default {
    title: "SidebarMenu",
    component: SidebarMenu,
};

type Story = StoryObj<typeof SidebarMenu>;

export const Open: Story = {
    args: {
        isOpen: true,
    },
};

export const Close: Story = {
    args: {
        isOpen: false,
    },
};
