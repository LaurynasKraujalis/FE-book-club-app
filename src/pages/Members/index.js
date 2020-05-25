import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllMembers } from "../../store/members/actions";
import { selectAllMembers } from "../../store/members/selectors";

import MembersDisplay from "../../components/MembersDisplay";

export default function MembersPage() {
  const dispatch = useDispatch();
  const allMembers = useSelector(selectAllMembers);
  console.log(allMembers);
  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);

  return (
    <div>
      {allMembers.map((member) => {
        return (
          <MembersDisplay
            key={member.id}
            name={member.name}
            image={member.image}
            motto={member.motto}
          />
        );
      })}
    </div>
  );
}
