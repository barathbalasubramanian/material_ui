import React, { useEffect, useState } from "react";
import IconTabs from "./Tabs";
import FloatingActionButtonsRight from "./Fab";
import FloatingActionButtonsLeft from "./colors";
import CustomizedSwitches from "./switch";
import Hero from "./hero";

function Home() {

  const [showComponents, setShowComponents] = useState(false);
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
              <div className="fade-in"><IconTabs /></div>
              <div className="fade-in"><CustomizedSwitches /></div>
              <div className="fade-in"><FloatingActionButtonsLeft /></div>
              <div className="fade-in"><FloatingActionButtonsRight /></div>
          </>
      )}
    </>
  );
}

export default Home;
