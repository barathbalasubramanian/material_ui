import React from "react";
import IconTabs from "./Tabs";
import FloatingActionButtonsRight from "./Fab";
import FloatingActionButtonsLeft from "./colors";
import CustomizedSwitches from "./switch";
import Bg from "./bg";

function Home() {
  return (
    <>
      <IconTabs />
      <CustomizedSwitches />
      <FloatingActionButtonsLeft />
      <FloatingActionButtonsRight />
    </>
  );
}

export default Home;
