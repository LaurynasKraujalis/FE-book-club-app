import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/fontawesome-free-solid";

export default function BookRating(props) {
  const renderRating = (props) => {
    const extractedRatings = Object.values(props.rating).map((keys, values) => {
      return parseInt(props.rating[values].rating);
    });
    function add(accumulator, a) {
      return accumulator + a;
    }

    const avarageRating = Math.round(
      extractedRatings.reduce(add, 0) / extractedRatings.length
    );

    console.log(`whats the rating?`, avarageRating);

    return <p>{avarageRating}</p>;
  };
  return (
    <div>
      <p>The rating is: {props.rating ? renderRating(props) : null} </p>
      {/* <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} /> */}
    </div>
  );
}
