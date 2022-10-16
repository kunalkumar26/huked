import { Box, Flex, Spacer } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import SideDrawer from '../components/Miscellaneous/SideDrawer';
import ChatBox from '../components/ChatBox'
import MyChats from '../components/MyChats'
import { ChatState } from '../Context/ChatProvider'

const ChatPage = () => {
  const { user, setUser } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userInfo')));
  }, [])

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer></SideDrawer>}
      <Flex
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}></MyChats>}
        <Spacer></Spacer>
        {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}></ChatBox>}
      </Flex>
    </div>
  )
}

export default ChatPage