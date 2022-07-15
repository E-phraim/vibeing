import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./sidebarChat.css";

function SidebarChat() {
  return <div className="sidebarChat">
     <Avatar />
     <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p><i>Waiting for this message...</i></p>
     </div>
  </div>;
}

export default SidebarChat;
