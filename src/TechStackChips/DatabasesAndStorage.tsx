import { Chip, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";
import TechStackModal from "TechStackModal";

const databasesAndStorageTools = [
  {
    tech: "postgreSQL",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "DynamoDB",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Hibernate",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Entity Framework",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "AWS RDS",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Neon",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "AWS S3",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
];

export default function DatabasesAndStorage(): ReactElement {
  const [selectedTool, setSelectedTool] = useState<{tech:string, useCase: string[]} | null>(null);
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {databasesAndStorageTools.map((entry) => (
        <Chip key={entry.tech} label={entry.tech} onClick= {() => setSelectedTool(entry)} />
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
