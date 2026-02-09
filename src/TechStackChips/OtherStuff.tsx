import { Chip, Stack } from "@mui/material";
import { ReactElement } from "react";
import * as React from "react";

const otherStuff = ["jira", "confluence", "postman", "swagger", "intellij"];

export default function OtherStuff(): ReactElement {
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {otherStuff.map((entry) => (
        <Chip key={entry} label={entry} />
      ))}
    </Stack>
  );
}
