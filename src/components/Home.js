import React, { useEffect, useState } from "react";
import IconTabs from "./Tabs";
import FloatingActionButtonsRight from "./Fab";
import FloatingActionButtonsLeft from "./colors";
import CustomizedSwitches from "./switch";
import Hero from "./hero";

function Home() {

  const [showComponents, setShowComponents] = useState(true);
  useEffect(() => {
    if (showComponents) {
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(el => el.classList.add('visible'));
        }, 100);  

        return () => clearTimeout(timer);
    }
  }, [showComponents]);

  return (
    <>
      <Hero onCompletion={() => setShowComponents(true)} />
      { showComponents && (
          <>
              <div className="fade-in icontabs"><IconTabs /></div>
              <div className="fade-in switches"><CustomizedSwitches /></div>
              <div className="fade-in leftDiv"><FloatingActionButtonsLeft /></div>
              <div className="fade-in RigthDiv"><FloatingActionButtonsRight /></div>
          </>
      )}
    </>
  );
}

export default Home;
