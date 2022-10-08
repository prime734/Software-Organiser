import React from "react";

import AdderDocument from "../AdderDocument/AdderDocument";
import AdderMember from "../AdderMember/AdderMember";

function Member(props) {
  return (
    <div>
      {props.project.ProjectMembers.map((member) => (
        <h3 className="member"> {member}</h3>
      ))}
      <AdderMember project={props.project} />
      {/* <AdderDocument project={props.project} /> */}
    </div>
  );
}

export default Member;
