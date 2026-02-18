import { Box, Divider, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import * as React from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Hobbies(): ReactElement {
  return (
    <Stack>
      <Divider textAlign="left" sx={{ width: "100%", my: 3 }}>
        <Typography variant="h5">Sports</Typography>
      </Divider>
      <Stack direction="row" spacing={16}>
        <ImageList
          sx={{ width: 500 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}>
          <Typography width={250}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lacinia neque vel nisi ultrices, sit amet fermentum purus gravida.
            Duis orci nunc, vestibulum ut lacus et, ultrices interdum mi.
            Vestibulum arcu est, molestie in augue sed, dictum aliquet felis.
            Mauris tempus nec libero non ultricies. Donec volutpat felis sit
            amet est ullamcorper auctor. Integer consequat neque eget cursus
            suscipit. Nulla ultrices porttitor est, vel vestibulum nisl gravida
            ut. Sed ultrices ipsum in neque congue sagittis. Nullam id mauris
          </Typography>
        </Box>
      </Stack>
      <Divider textAlign="right" sx={{ width: "100%", my: 3 }}>
        <Typography variant="h5">Travel</Typography>
      </Divider>
      <Stack
        direction="row"
        sx={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          marginLeft={40}
          sx={{ p: 2, border: "1px solid #ccc", borderRadius: 2 }}
        >
          <Typography width={250}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            lacinia neque vel nisi ultrices, sit amet fermentum purus gravida.
            Duis orci nunc, vestibulum ut lacus et, ultrices interdum mi.
            Vestibulum arcu est, molestie in augue sed, dictum aliquet felis.
            Mauris tempus nec libero non ultricies. Donec volutpat felis sit
            amet est ullamcorper auctor. Integer consequat neque eget cursus
            suscipit. Nulla ultrices porttitor est, vel vestibulum nisl gravida
            ut. Sed ultrices ipsum in neque congue sagittis. Nullam id mauris
          </Typography>
        </Box>
        <ImageList
          sx={{ width: 500, alignSelf: "flex-end" }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Stack>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
];
