import User1 from "../assets/images/user1.png";
import User2 from "../assets/images/user2.png";
import User3 from "../assets/images/user3.png";

export interface User {
    title: string;
    address: string;
    image: any;
    description: string;
}

export const Users: User[] = [
    {
        title: "Utpal Mikolsky",
        address: "@itydjhhh32",
        image: User1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        title: "Tom Harvey",
        address: "@itydjhhh32",
        image: User2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
    {
        title: "Utpal Mikolsky",
        address: "@itydjhhh32",
        image: User3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    },
]
  