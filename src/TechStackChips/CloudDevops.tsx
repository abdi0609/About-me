import { Chip, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";
import TechStackModal from "TechStackModal";

const cloudDevopsTools = [
  {
    tech: "AWS",
    useCase: ["Product Configurator", "CXP insights", "CXP Core"],
  },
  {
    tech: "Azure",
    useCase: ["Product Configurator", "CXP insights", "CXP Core"],
  },
  {
    tech: "Docker",
    useCase: ["Product Configurator", "CXP insights", "CXP Core"],
  },
  {
    tech: "git",
    useCase: ["Product Configurator", "CXP insights", "CXP Core"],
  },
  {
    tech: "CI/CD",
    useCase: ["Product Configurator", "CXP insights", "CXP Core"],
  },
  {
    tech: "Github Actions",
    useCase: ["Product Configurator", "CXP insights", "CXP Core"],
  },
];

export default function CloudDevops(): ReactElement {
  const [selectedTool, setSelectedTool] = useState<{
    tech: string;
    useCase: string[];
  } | null>(null);
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {cloudDevopsTools.map((entry) => (
        <Chip
          key={entry.tech}
          label={entry.tech}
          onClick={() => setSelectedTool(entry)}
        />
      ))}
      {selectedTool && (
        <TechStackModal
          open={true}
          name={selectedTool.tech}
          usecases={selectedTool.useCase}
          handleClose={() => setSelectedTool(null)}
        />
      )}
    </Stack>
  );
}
//tenker å gjøre alle chips klikkbare, og ved klikk åpnes en modal med info om hvor mye jeg har brukt det og i hvilke prosjekter, med en link til prosjekt modalen
//i hver chip funskjon så må vi legge til en usestate for åpne modalen, som blir satt til true ved klikk. ved true rendrer vi en techmodal, hvor vi må sende inn navn på teknologien, en liten tekst om hvordan jeg har brukt den

//mo
