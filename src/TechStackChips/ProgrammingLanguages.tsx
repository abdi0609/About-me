import { Chip, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";
import TechStackModal from "TechStackModal";

const programmingLanguages = [
  {
    tech: "java",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "kotlin",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "C",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "C#",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "javascript",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "typescript",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "scheme",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "python",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
];

export default function ProgrammingLanguages(): ReactElement {
  const [selectedTool, setSelectedTool] = useState<{
    tech: string;
    useCase: string[];
  } | null>(null);
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {programmingLanguages.map((entry) => (
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
