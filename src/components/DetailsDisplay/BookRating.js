import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { rateTheBook } from "../../store/details/actions";

import { Button, OverlayTrigger, Popover } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/fontawesome-free-solid";

export default function BookRating(props) {
  const { id } = useParams();
  const [stars, setStars] = useState(0);
  const dispatch = useDispatch();
  console.log(`stars`, stars);

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

      Avarage stars: {props.rating ? renderRating(props) : null}{" "}
      <OverlayTrigger
        trigger="click"
        overlay={
          <Popover>
            <Popover.Title
              as="h3"
              bg="secondary"
            >{`Give the book a rating!`}</Popover.Title>
            <Popover.Content>
              <select
                value={stars}
                onChange={(event) => setStars(event.target.value)}
              >
                <option>Choose your rating</option>
                <option value="1">1 star</option>
                <option>2 stars</option>
                <option>3 stars</option>
                <option>4 stars</option>
                <option>5 stars</option>
              </select>
              <Button
                size="sm"
                variant="danger"
                onClick={() => dispatch(rateTheBook(stars, id))}
              >
                Give Stars
              </Button>
            </Popover.Content>
          </Popover>
        }
      >
        <Button size="sm" variant="danger">
          Give Stars
        </Button>
      </OverlayTrigger>

      {/* <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} />
      <FontAwesomeIcon className="mr-3" icon={faStar} /> */}
    </div>
  );
}
