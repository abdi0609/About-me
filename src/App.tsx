import { ReactElement } from "react";
import * as React from "react";
import { Avatar, Card, Stack, Typography } from "@mui/material";
import profileImage from "./images/Mahamoud_Abdi.jpg";
import { Route, Routes, useNavigate } from "react-router";
import Career from "Career";
import ProjectsAndTechStack from "ProjectsAndTechStack";
import Hobbies from "Hobbies";

export function Home(): ReactElement {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={2}
      marginTop={2}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Stack spacing={2} direction="row">
        <Card
          sx={{
            p: 2,
            width: 250,
            cursor: "pointer",
            "&:hover": { boxShadow: 6 },
          }}
          onClick={() => navigate("career")}
        >
          <Typography variant="h6">Career</Typography>
          <Typography variant="body2" color="text.secondary">
            Experience and education
          </Typography>
        </Card>
        <Card
          sx={{
            p: 2,
            width: 250,
            cursor: "pointer",
            "&:hover": { boxShadow: 6 },
          }}
          onClick={() => navigate("projects")}
        >
          <Typography variant="h6">Projects</Typography>
          <Typography variant="body2" color="text.secondary">
            & tech stack
          </Typography>
        </Card>
        <Card
          onClick={() => navigate("hobbies")}
          sx={{
            p: 2,
            width: 250,
            cursor: "pointer",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <Typography variant="h6">Hobbies</Typography>
          <Typography variant="body2" color="text.secondary">
            & other stuff
          </Typography>
        </Card>
      </Stack>
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
  );
}

export default function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="career" element={<Career />} />
      <Route path="projects" element={<ProjectsAndTechStack />} />
      <Route path="hobbies" element={<Hobbies />} />
    </Routes>
  );
}
