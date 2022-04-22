import { ChatContext } from "context/ChatProvider";
import { useContext } from "react";

const chatState = () => useContext(ChatContext);

export default chatState;
