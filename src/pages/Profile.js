import React from "react";
import { useRouteMatch } from "react-router-dom";

import { Standard } from "../templates/Standard";

export function Profile() {
  const match = useRouteMatch("/profile/:name");

  return (
    <Standard>
      {match ? <p>{match.params.name}'s Profile</p> : <p>My own profile</p>}
    </Standard>
  );
}
