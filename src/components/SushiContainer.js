import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

// SushiContainer serves as the "belt' in our sushi conveyor"

function SushiContainer({sushis}) {
  const sushisToDisplay = sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)


  return (
    <div className="belt">
      {sushisToDisplay}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
