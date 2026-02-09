import * as React from "react";
import { ReactElement } from "react";
import { Stack } from "@mui/material";
import CustomCard from "CustomCard";

const myProjects = [
  {
    name: "Product Configurator",
    subtext:
      "A complex tool for configuring oil and gas products such as pipelines and related components, with dynamic rules and real-time updates.",
  },
  {
    name: "CXP Insights",
    subtext:
      "An analytics dashboard for visualizing user data, statistics, and insights across applications.",
  },
  {
    name: "user-tracking",
    subtext:
      "A service for tracking user behavior and application events to support analytics and UX improvements.",
  },
  {
    name: "CXP Core",
    subtext:
      "The host application for the microservices architecture, providing shared functionality and acting as the entry point for the other applications.",
  },
];

export default function projects(): ReactElement {
  return (
    <Stack direction="row" spacing={2}>
      {myProjects.map((entry) => (
        <CustomCard name={entry.name} subtext={entry.subtext} />
      ))}
    </Stack>
  );
}
