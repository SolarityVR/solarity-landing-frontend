import User1 from "../assets/images/user11.png";
import User2 from "../assets/images/user22.png";
import User3 from "../assets/images/user33.png";

export interface User {
    title: string;
    address: string;
    image: any;
    description: string;
}

export const Users: User[] = [
    {
        title: "MoneyBoy0x •$•",
        address: "@MoneyBoy0x",
        image: User1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        title: "Kuleen ◎",
        address: "@knimkar",
        image: User2,
        description: "These guys work hard, tinker a lot and never cease to amaze me on how much they work. Can't wait for the future."
    },
    {
        title: "Dirkk0",
        address: "@Dirkk0",
        image: User3,
        description: "WebXR is the essence of an open and composable metaverse. And Solarity is building the infrastructure for it."
    },
]
  