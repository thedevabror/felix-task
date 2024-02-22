import React from "react";
import {
  SectionBooks,
  SectionBox,
  SectionCard,
  SectionCardButton,
  SectionCardButtonBox,
  SectionMain,
  SectionSpan,
  SectionTypography,
} from "../styled-components";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Section = () => {
  return (
    <SectionMain>
      <SectionBox>
        <SectionTypography>
          You've got <SectionSpan>7 book</SectionSpan>
        </SectionTypography>
        <Button variant="contained">Create Book</Button>
      </SectionBox>
      <SectionBooks>
        <SectionCard>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, porro?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
          <SectionCardButtonBox className="sectionCardButton">
            <SectionCardButton sx={{ bgcolor: "#FF4D4F" }}>
              <IconButton>
                <DeleteIcon sx={{ color: "#fff" }} />
              </IconButton>
            </SectionCardButton>
            <SectionCardButton sx={{ bgcolor: "#6200EE" }}>
              <IconButton>
                <EditIcon sx={{ color: "#fff" }} />
              </IconButton>
            </SectionCardButton>
          </SectionCardButtonBox>
        </SectionCard>
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, porro?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, porro?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae, porro?
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        </Box>
      </SectionBooks>
    </SectionMain>
  );
};

export default Section;
