import { Chip, Stack } from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";

const databasesAndStorageTools = [
  "postgreSQL",
  "DynamoDB",
  "Hibernate",
  "Entity Framework",
  "AWS RDS",
  "Neon",
  "AWS S3",
];

export default function DatabasesAndStorage(): ReactElement {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  return (
    <Stack direction="row" maxWidth={200} flexWrap="wrap">
      {databasesAndStorageTools.map((entry) => (
        <Chip key={entry} label={entry} />
      ))}
    </Stack>
  );
}
