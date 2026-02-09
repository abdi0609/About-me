import { Box, Modal, Typography } from "@mui/material";
import { ReactElement } from "react";
import * as React from "react";

type ReadMoreModalPros = {
  open: boolean;
  name: string;
  handleClose: () => void;
};
const modalInfo = [
  {
    name: "Lambertseter vgs",
    infoText:
      "Completed the General Studies program at Lambertseter Upper Secondary School (2018–2021) and graduated with a GPA of 4.8.",
  },
  {
    name: "University of Oslo",
    infoText:
      "Completed a Bachelor's degree in Informatics with a focus on programming and systems architecture at the University of Oslo (2021–2024), graduating with a GPA of 4.0.",
  },
  {
    name: "Experis Academy",
    infoText:
      "Joined the graduate program, including a 2-month full-stack development course, cloud certification, and a 12-month consulting assignment with one of their clients.",
  },
  {
    name: "TechnipFMC",
    infoText:
      "Worked as a consultant at TechnipFMC, contributing to the development and maintenance of internal applications in a professional, agile environment.",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ReadMoreModal({
  open,
  name,
  handleClose,
}: ReadMoreModalPros): ReactElement {
  const mappedInfo = modalInfo.find((it) => it.name === name);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {mappedInfo?.infoText}
        </Typography>
      </Box>
    </Modal>
  );
}
