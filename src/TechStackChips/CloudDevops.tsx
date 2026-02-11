import { Chip, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";
import TechStackModal from "TechStackModal";

const cloudDevopsTools = [
  {
    tech: "AWS",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Azure",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Docker",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "git",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "CI/CD",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Github Actions",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
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
