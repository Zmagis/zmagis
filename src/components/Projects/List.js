import heart from "../Nav/zmagis.JPG";
import Lust from "../../Images/Lust.png";
import Chat from "../../Images/chatnew.png";
import QuoteMachine from "../../Images/QouteMachine.png";

const list = [
  {
    id: 3,
    name: "Lust",
    description: "Hungry? Search for the best place to eat!",
    img: Lust,
    link: "https://epic-benz-b2d8fe.netlify.com/",
    github: "https://github.com/Zmagis/Lust"
  },
  {
    id: 2,
    name: "Chat App",
    description:
      "Chating app created with ReactJS, Redux and WebSocket. Unfortunately netlify does not support full functionality.",
    img: Chat,
    link: "https://quirky-raman-c8d89f.netlify.com/",
    github: "https://github.com/Zmagis/chat"
  },
  {
    id: 1,
    name: "Quote Machine",
    description: "Feed your soul with random quotes.",
    img: QuoteMachine,
    link: "https://nervous-kirch-642b5a.netlify.com",
    github: "https://github.com/Zmagis/Qoute-Machine-"
  },
  {
    id: 0,
    name: "New project",
    description: "Currently building...",
    img: heart
  }
];

export default list;
