import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";

import { postReaction } from "../../store/details/actions";

import { Button, Col, Row, InputGroup, FormControl } from "react-bootstrap";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function EmojiReactions(props) {
  const [react, setReact] = useState(false);
  const [reaction, setReaction] = useState("");
  const dispatch = useDispatch();
  // const { id } = useParams();

  const sendReactionHandler = (reaction, commentId) => {
    console.log(`what am I dispatching`, reaction, commentId);
    dispatch(postReaction(reaction, commentId));
    setReact(!react);
  };

  return (
    <div>
      <Row>
        <Col>
          <Button size="sm" onClick={() => setReact(!react)}>
            React!
          </Button>
        </Col>
        <Col>
          {react ? (
            <Button
              size="sm"
              onClick={() => sendReactionHandler(reaction, props.commentId)}
            >
              Send reaction
            </Button>
          ) : null}
        </Col>
      </Row>
      <Row>
        {react ? (
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">
                Your reaction
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              value={reaction}
            />
          </InputGroup>
        ) : null}
      </Row>
      {react ? (
        <Picker onSelect={(emoji) => setReaction(reaction + emoji.native)} />
      ) : null}
    </div>
  );
}