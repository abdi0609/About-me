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
  image: string;
  name: string;
};

export default function CustomCard({
  image,
  name,
}: CustomCardType): ReactElement {
const [isReadMoreModalOpen, setIsReadMoreModalOpen] = useState(false)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> setIsReadMoreModalOpen(true)}>Read More</Button>
      </CardActions>
       <ReadMoreModal open={isReadMoreModalOpen} handleClose= {()=>setIsReadMoreModalOpen(false)}/>
    </Card>
  );
}
