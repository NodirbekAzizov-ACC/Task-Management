import { Book, Category2, Icon, UserOctagon, Message, Setting2 } from "iconsax-react";
import { NavButton } from "./navbutton.model";

const SidebarTabs: NavButton[] = [
    {navbutton: {name: "Dashboard", icon: Category2, path: 'dashboard'}},
    {navbutton: {name: "Tasks", icon: Book, path: 'tasks'}},
    {navbutton: {name: "Mentors", icon: UserOctagon, path: 'mentors'}},
    {navbutton: {name: "Messages", icon: Message, path: 'messages'}},
    {navbutton: {name: "Settings", icon: Setting2, path: 'settings'}},
];

export { SidebarTabs}