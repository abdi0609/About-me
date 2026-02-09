import { Box, Chip, Modal, Typography } from "@mui/material";
import { ReactElement, useState } from "react";
import * as React from "react";
import ReadMoreModal from "ReadMoreModal";

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
type TechStackModalPros = {
  open: boolean;
  name: string;
  handleClose: () => void;
  usecases: string[];
};

export default function TechStackModal({
  open,
  name,
  usecases,
  handleClose,
}: TechStackModalPros): ReactElement {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

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
          blah
        </Typography>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mt: 2 }}
        >
          Usage
        </Typography>
        {usecases.map((usecase) => (
          <Chip
            key={usecase}
            label={usecase}
            onClick={() => setSelectedProject(usecase)}
          ></Chip>
        ))}
        {selectedProject && (
          <ReadMoreModal
            open={true}
            name={selectedProject}
            handleClose={() => setSelectedProject(null)}
          />
        )}
      </Box>
    </Modal>
  );
}
