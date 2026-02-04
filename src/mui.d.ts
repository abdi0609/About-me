import * as React from "react";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    customTypo: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    customTypo: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    customTypo?: React.CSSProperties;
  }
}
