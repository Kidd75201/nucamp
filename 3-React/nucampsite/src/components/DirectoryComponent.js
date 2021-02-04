import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

// Functional Component with props -- render each card with different campsite details
function RenderDirectoryItem({ campsite, onClick }) {
  return (
    <Card onClick={() => onClick(campsite.id)}>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// Changed to Fuctional component -- does not use 'this' keyword

function Directory(props) {
  // pull data from each campsite using map() from array
  const directory = props.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
      </div>
    );
  });

  // return for entire directory component
  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
