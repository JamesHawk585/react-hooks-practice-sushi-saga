import React, { useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

// SushiContainer serves as the "belt' in our sushi conveyor"

function SushiContainer({sushis}) {
  const [currentSushiIndex, setCurrentSushiIndex] = useState(0)
  const sushisToDisplay = sushis
  .slice(currentSushiIndex, currentSushiIndex + 4)
  .map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)

  function handleMoreSushi() {
    setCurrentSushiIndex(currentSushiIndex => currentSushiIndex + 4)
  }


  return (
    <div className="belt">
      {sushisToDisplay}
      <MoreButton onMoreSushiClick={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
