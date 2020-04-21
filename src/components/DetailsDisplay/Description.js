import React, { useState } from "react";

import { Button, Fade } from "react-bootstrap";

export default function Description(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(!open)}>
        Description
      </Button>
      {open ? (
        <Fade in={open}>
          <div>{props.description}</div>
        </Fade>
      ) : null}
    </>
  );
}
