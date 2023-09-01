import React from "react";
import IconTabs from "./Tabs";
import FloatingActionButtonsRight from "./Fab";
import FloatingActionButtonsLeft from "./colors";
import CustomizedSwitches from "./switch";
import Hero from "./hero";

function Home() {
  return (
    <>
        <Hero />
        <IconTabs />
        <CustomizedSwitches />
        <FloatingActionButtonsLeft />
        <FloatingActionButtonsRight />
    </>
  );
}

export default Home;
