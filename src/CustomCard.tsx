import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";
import ReadMoreModal from "ReadMoreModal";

export type CustomCardType = {
  image?: string;
  name: string;
  subtext?: string;
};

export default function CustomCard({
  image,
  name,
  subtext,
}: CustomCardType): ReactElement {
  const [isReadMoreModalOpen, setIsReadMoreModalOpen] = useState(false);
  return (
    <Card variant="outlined" sx={{ width: 300, backgroundColor: "#f0f3f5" }}>
      {image && (
        <CardMedia component="img" height="140" image={image} alt={name} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          variant="body2"
          fontStyle="italic"
          sx={{ whiteSpace: "pre-line" }}
        >
          {subtext}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setIsReadMoreModalOpen(true)}>
          Read More
        </Button>
      </CardActions>
      <ReadMoreModal
        open={isReadMoreModalOpen}
        name={name}
        handleClose={() => setIsReadMoreModalOpen(false)}
      />
    </Card>
  );
}
