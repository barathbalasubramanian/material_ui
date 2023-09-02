import React, { useState } from "react";
import IconTabs from "./Tabs";
import FloatingActionButtonsRight from "./Fab";
import FloatingActionButtonsLeft from "./colors";
import CustomizedSwitches from "./switch";
import Hero from "./hero";

function Home() {

  const [showComponents, setShowComponents] = useState(false);
  return (
    <>
        <Hero onCompletion={() => setShowComponents(true)} />
        { showComponents && (
          <>
            <IconTabs />
            <CustomizedSwitches />
            <FloatingActionButtonsLeft />
            <FloatingActionButtonsRight />
          </>
        ) }
    </>
  );
}

export default Home;
