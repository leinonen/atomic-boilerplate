import React from "react";

import { Standard } from "../templates/Standard";
import { H1, Button } from "../atoms";

import { useStateValue } from "../state";

export function Settings() {
  const [{ theme }, dispatch] = useStateValue();
  return (
    <Standard>
      <H1>Settings</H1>
      <p>{theme.primary}</p>
      <Button
        onClick={() =>
          dispatch({ type: "changeTheme", newTheme: { primary: "blue" } })
        }
      >
        Blue
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: "changeTheme", newTheme: { primary: "red" } })
        }
      >
        Red
      </Button>
    </Standard>
  );
}
