import React from 'react'
import IconTabs from './Tabs'
import FloatingActionButtonsRight from './Fab'
import FloatingActionButtonsLeft from './colors'
import CustomizedSwitches from './switch';
import Sign from './sign';

function Home() {
  return (
    <>
        <IconTabs />
        <CustomizedSwitches />
        <FloatingActionButtonsLeft />
        <FloatingActionButtonsRight />
        <Sign />
    </>
  )
}

export default Home