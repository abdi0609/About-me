import { ReactElement, useState, useEffect } from "react";
import * as React from "react";
import { Avatar, Box, Fab, Stack, Typography } from "@mui/material";
import profileImage from "./images/Mahamoud_Abdi.jpg";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import Career from "Career";
import ProjectsAndTechStack from "projectsAndTechStack";

export function Home(): ReactElement {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack direction="row" justifyContent="flex-start" spacing={20}>
        <Stack spacing={2}>
          <Fab
            variant="extended"
            onClick={() => {
              navigate("career");
            }}
          >
            Career
          </Fab>
          <Fab
            variant="extended"
            onClick={() => {
              navigate("projectsAndTechStack");
            }}
          >
            Projects and tech stack
          </Fab>
          <Fab variant="extended">My Hobbies and other stuff</Fab>
        </Stack>

        <Stack
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Avatar
            alt="abdi"
            src={profileImage}
            sx={{ width: 400, height: 400 }}
          ></Avatar>
          <Typography>Abdi Ali Mahamoud</Typography>
          <Typography fontStyle="italic">Fullstack Developer </Typography>
          <Typography fontStyle="italic" maxWidth={400} align="center">
            Hey! I’m Abdi 👋 Full-stack developer, curious by nature, and always
            learning something new. I build stuff, ship stuff, and occasionally
            stress over Manchester United.{" "}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="career" element={<Career />} />
      <Route path="projectsAndTechStack" element={<ProjectsAndTechStack />} />
    </Routes>
  );
}
