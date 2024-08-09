import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import MessagesContainer from "../../components/messages/MessagesContainer";
import "../../index.css"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessagesContainer/>
      
    </div>
  );
};

export default Home;
