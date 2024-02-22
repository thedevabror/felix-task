import React, { useEffect, useState } from "react";
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
import ModalComponent from "./Modal";
import BookService from "../service/service";

const Section = () => {
  
  const [books, setBooks] = useState([])
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await BookService.bookGet()
        setBooks(response)
      } catch (error) {
        console.log(error)
      }
    }
    getBooks()
  }, [])
  
  console.log(books)

  return (
    <>
      <SectionMain>
        <SectionBox>
          <SectionTypography>
            You've got <SectionSpan>{books.data == null ? "0" : books.data.books.length} book</SectionSpan>
          </SectionTypography>
          <Button variant="contained" onClick={handleOpen}>
            Create Book
          </Button>
        </SectionBox>
        <SectionBooks>
          {}
          {/* <SectionCard>
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
          </SectionCard> */}
        </SectionBooks>
      </SectionMain>
      <ModalComponent  open={open} setOpen={setOpen} />
    </>
  );
};

export default Section;