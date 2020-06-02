import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllMembers } from "../../store/members/actions";
import { selectAllMembers } from "../../store/members/selectors";
import MembersDisplay from "../../components/MembersDisplay";

import { Jumbotron } from "react-bootstrap";

export default function MembersPage() {
  const dispatch = useDispatch();
  const allMembers = useSelector(selectAllMembers);
  console.log(allMembers);
  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h4>Check out our Scifi members!</h4>
        <p>We're a diverse bunch who share the love for great books.</p>
      </Jumbotron>

      {allMembers.map((member) => {
        return (
          <MembersDisplay
            key={member.id}
            name={member.name}
            image={member.image}
            motto={member.motto}
            allBooks={member.books}
          />
        );
      })}
    </div>
  );
}
