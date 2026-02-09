import { Chip, Stack } from "@mui/material";
import { ReactElement } from "react";
import * as React from "react";

const frameworksAndLibraries = [
  "React",
  "Angular",
  "MUI",
  "Spring Boot",
  ".NET",
];

export default function FrameworksAndLibraries(): ReactElement {
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {frameworksAndLibraries.map((entry) => (
        <Chip key={entry} label={entry} />
      ))}
    </Stack>
  );
}
