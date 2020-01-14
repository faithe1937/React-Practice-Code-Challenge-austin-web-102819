  
import React from "react";

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => props.eatSushi(props.sushi)}>
        {
          props.eaten.includes(props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} alt="sushi" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name/* Give me a name! */} - ${props.sushi.price/* Give me a price! */}
      </h4>
    </div>
  )
}

export default Sushi