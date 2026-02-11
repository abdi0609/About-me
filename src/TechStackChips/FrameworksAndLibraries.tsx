import { Chip, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";
import TechStackModal from "TechStackModal";



 const frameworksAndLibraries = [
  {
    tech: "React",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Angular",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "MUI" ,
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: "Spring Boot",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
  {
    tech: ".NET",
    useCase: ["Product Configurator", "CXP Insights", "CXP Core"],
  },
];

export default function FrameworksAndLibraries(): ReactElement {
  const [selectedTool, setSelectedTool] = useState<{tech:string, useCase: string[]} | null>(null);
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {frameworksAndLibraries.map((entry) => (
        <Chip key={entry.tech} label={entry.tech} onClick = {()=> setSelectedTool(entry)} />
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
