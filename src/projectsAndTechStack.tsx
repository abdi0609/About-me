import { Box, Divider, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import * as React from "react";
import ProgrammingLanguages from "TechStackChips/ProgrammingLanguages";
import CloudDevops from "TechStackChips/CloudDevops";
import FrameworksAndLibraries from "TechStackChips/FrameworksAndLibraries";
import DatabasesAndStorage from "TechStackChips/DatabasesAndStorage";
import OtherStuff from "TechStackChips/OtherStuff";
import Projects from "Projects";

export default function ProjectsAndTechStack(): ReactElement {
  return (
    <Stack
      sx={{
        marginTop: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 400,
      }}
    >
      <Divider sx={{ width: "100%", my: 3 }}>
        <Typography variant="h5">Projects</Typography>
      </Divider>
      <Projects />
      <Divider sx={{ width: "100%", my: 3 }}>
        <Typography variant="h5">Tech Stack</Typography>
      </Divider>
      <Stack direction="row" spacing={4} marginBottom={2}>
        <Stack maxWidth={200}>
          <Typography>Programming languages</Typography>
          <ProgrammingLanguages />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack maxWidth={200}>
          <Typography>Cloud & DevOps</Typography>
          <CloudDevops />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack maxWidth={200}>
          <Typography>Frameworks & Libraries</Typography>
          <FrameworksAndLibraries />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack maxWidth={200}>
          <Typography>Databases / Storage</Typography>
          <DatabasesAndStorage />
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack maxWidth={200}>
          <Typography>Other stuff</Typography>
          <OtherStuff />
        </Stack>
      </Stack>
    </Stack>
  );
}
