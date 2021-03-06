import React from "react";
import { useSelector } from "react-redux";

import { selectComments } from "../../store/details/selectors";

import { Container } from "react-bootstrap";

export default function ReactionDisplay(props) {
  const allComments = useSelector(selectComments);
  const specificComment = allComments.filter(function (specific) {
    return specific.id === props.commentId;
  });
  const emojiReaction = specificComment[0].reactions;

  const allReactions = emojiReaction.map((emoji) => {
    return <p key={emoji.id}>{emoji.reaction}</p>;
  });
  return <Container>{allReactions}</Container>;
}
