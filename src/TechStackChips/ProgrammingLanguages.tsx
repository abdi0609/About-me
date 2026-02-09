import { Chip, Stack } from "@mui/material";
import { ReactElement } from "react";
import * as React from "react";

const programmingLanguages = [
  "java",
  "kotlin",
  "C",
  "C#",
  "javascript",
  "typescript",
  "scheme",
  "python",
];

export default function ProgrammingLanguages(): ReactElement {
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {programmingLanguages.map((entry) => (
        <Chip key={entry} label={entry} />
      ))}
    </Stack>
  );
}
