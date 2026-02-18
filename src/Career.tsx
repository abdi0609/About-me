import {
  createTheme,
  Divider,
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
import labradorLogo from "./images/labrador-cms.webp";
import CustomCard from "CustomCard";

const cardInfo = [
  {
    logo: vgsLogo,
    subtext: "upper secondary school\n2018-2021",
    name: "Lambertseter vgs",
  },
  {
    logo: uioLogo,
    subtext: "bachelor`s degree\n2021-2024",
    name: "University of Oslo",
  },
  {
    logo: experisLogo,
    subtext: "graduate program \n2025-2026",
    name: "Experis Academy",
  },
  {
    logo: technipFMCLogo,
    subtext: "consultant \n2025-2026",
    name: "TechnipFMC",
  },
  {
    logo: labradorLogo,
    subtext: "Consultant \n2026",
    name: "LabradorCMS",
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
        <Divider sx={{ width: "100%", my: 3 }}>
          <Typography variant="h4"> Education</Typography>
        </Divider>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          {EducationEntries.map((entries) => (
            <CustomCard
              image={entries.logo}
              name={entries.name}
              subtext={entries.subtext}
            />
          ))}
        </Stack>
        <Divider sx={{ width: "100%", my: 3 }}>
          <Typography variant="h4"> Work experience</Typography>
        </Divider>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 300,
          }}
        >
          {ExperienceEntries.map((entries) => (
            <CustomCard
              image={entries.logo}
              name={entries.name}
              subtext={entries.subtext}
            />
          ))}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
