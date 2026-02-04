import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import * as React from "react";
import vgsLogo from "./images/lambertseter.png";
import uioLogo from "./images/uio.png";
import experisLogo from "./images/experis.jpg";
import technipFMCLogo from "./images/technipFMC.webp";
import CustomCard from "CustomCard";

const cardInfo = [
  {
    logo: vgsLogo,
    name: "Lambertseter vgs",
  },
  {
    logo: uioLogo,
    name: "University of Oslo",
  },
  {
    logo: experisLogo,
    name: "Experis Academy",
  },
  {
    logo: technipFMCLogo,
    name: "TechnipFMC",
  },
];
const EducationEntries = cardInfo.slice(0, 2);
const ExperienceEntries = cardInfo.slice(2, cardInfo.length);

export default function Career(): ReactElement {
  const theme = createTheme({
    typography: {
      customTypo: {
        color: "#607d8b",
        fontSize: "3rem",
        fontWeight: 500,
        fontFamily: "sans-serif",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          marginTop: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
        }}
      >
        <Typography variant="customTypo">Education</Typography>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 400,
          }}
        >
          {EducationEntries.map((entries) => (
            <CustomCard image={entries.logo} name={entries.name} />
          ))}
        </Stack>
        <Typography variant="customTypo">Work Experience</Typography>
        <Stack
          direction="row"
          sx={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 400,
          }}
        >
          {ExperienceEntries.map((entries) => (
            <CustomCard image={entries.logo} name={entries.name} />
          ))}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
