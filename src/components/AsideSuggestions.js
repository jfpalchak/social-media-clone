import React from "react";
import AsideHeader from "./AsideHeader";
import Suggestion from "./Suggestion";
import photo5 from "./../img/avatar5.svg";
import photo6 from "./../img/avatar6.svg";
import photo7 from "./../img/avatar7.svg";

const suggestionList = [
  {
    photo: photo5,
    name: "User Five"
  },
  {
    photo: photo6,
    name: "User Six"
  },
  {
    photo: photo7,
    name: "User Seven"
  }

];

function AsideSuggestions() {
  return (
    <aside className="suggestions">

      <AsideHeader />
      
      {suggestionList.map((suggestion, index) =>
        <Suggestion 
          photo={suggestion.photo}
          name={suggestion.name}
          key={index}
        />
      )}
    </aside>
  );
}

export default AsideSuggestions;