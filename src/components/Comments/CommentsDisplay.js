import React, { useState } from "react";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { Button, Card, Container } from "react-bootstrap";

export default function CommentsDisplay(props) {
  const [react, setReact] = useState(false);
  const [reaction, setReaction] = useState("");
  console.log("whats emoji?", reaction);
  return (
    <div>
      <Container>
        <Card bg="secondary" text="light">
          <Card.Subtitle style={{ color: "black" }}>
            {props.userName}
          </Card.Subtitle>
          <Card.Body>{props.comment} </Card.Body>
          <Button onClick={() => setReact(!react)}>React!</Button>
        </Card>
      </Container>
      {react ? (
        <Picker onSelect={(emoji) => setReaction(emoji.native)} />
      ) : null}
      <br />
    </div>
  );
}
