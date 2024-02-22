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
import EditModal from "./EditModal";

const Section = () => {
  // const []
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [bookId, setBookId] = useState(null)
  const handleOpen = () => setOpen(true);
  const handleEdit = (id) => {
    setEdit(true)
    setBookId(id)
  }

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await BookService.bookGet();
        setBooks(response);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, [open, edit]);

  console.log(books.data);

  const deleteBook = async (id) => {
    try {
      await BookService.bookDelete(id);
      if (books && books.data && books.data.books) {
        const updatedBooks = books.data.books.filter(book => book.id !== id);
        setBooks({ ...books, data: { ...books.data, books: updatedBooks } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SectionMain>
        <SectionBox>
          <SectionTypography>
            You've got{" "}
            <SectionSpan>
              {books.data == null ? "0" : books.data.books.length} book
            </SectionSpan>
          </SectionTypography>
          <Button variant="contained" onClick={handleOpen}>
            Create Book
          </Button>
        </SectionBox>
        <SectionBooks>
          {books.data == null ? (
            <Typography>You haven't got book</Typography>
          ) : (
            <>
              {books.data.books.map((data) => {
                return (
                  <>
                    <SectionCard key={data.id}>
                      <Card>
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {data.name}
                          </Typography>
                          <Typography variant="body2">
                            {data.publisher}
                          </Typography>
                        </CardContent>
                      </Card>
                      <SectionCardButtonBox className="sectionCardButton">
                        <SectionCardButton sx={{ bgcolor: "#FF4D4F" }}>
                          <IconButton onClick={() => deleteBook(data.id)}>
                            <DeleteIcon sx={{ color: "#fff" }} />
                          </IconButton>
                        </SectionCardButton>
                        <SectionCardButton sx={{ bgcolor: "#6200EE" }}>
                          <IconButton onClick={() => handleEdit(data.id)} >
                            <EditIcon sx={{ color: "#fff" }} />
                          </IconButton>
                        </SectionCardButton>
                      </SectionCardButtonBox>
                    </SectionCard>
                  </>
                );
              })}
            </>
          )}
        </SectionBooks>
      </SectionMain>
      <ModalComponent open={open} setOpen={setOpen} />
      <EditModal edit={edit} setEdit={setEdit} bookId={bookId} />
    </>
  );
};

export default Section;
