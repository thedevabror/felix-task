import React from "react";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookService from "../service/service";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    m: 0,
    borderRadius: 1
};

const lableStyle = {
    position: 'realitive',
    top: ".5rem"
}

const EditModal = ({edit, setEdit, bookId}) => {

  const handleClose = () => setEdit(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      year: "",
      author: "",
      summary: "",
      publisher: "",
      pageCount: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("name is required")
        .min(3, "Min length is 3")
        .max(20, "Max length is 20"),
      year: Yup.string().required("year is required"),
      summary: Yup.string()
        .required("summary is required")
        .min(4, "Min length is 4"),
      author: Yup.string()
        .required("author is required")
        .min(2, "Min length is 8")
        .max(20, "Max lenght is 20"),
      publisher: Yup.string()
        .required("publisher required")
        .min(2, "Min length is 8")
        .max(5, "Max lenght is 20"),
      pageCount: Yup.string()
        .required("pageCount required")
        .min(2, "Min length is 8")
        .max(5, "Max lenght is 20"),
    }),
    onSubmit: async (values) => {
        console.log(values, bookId)
        try {
            const response =  await BookService.bookEdit(bookId, values)
            setEdit(false)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    },
  });
  return (
    <>
      <Modal
        open={edit}
        onClose={handleClose}
        aria-labelledby="modal-modal-year"
        aria-describedby="modal-modal-description"
        sx={{ maxWidth: 345, position: "realitive", margin: "auto" }}
        disableScrollLock
        enableScroll
      >
        <Box sx={style}>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              pt={2}
              sx={lableStyle}
            >
              <Typography>Edit a book</Typography>
              <Button onClick={handleClose} p={0}>
                close
              </Button>
            </Stack>
            <Grid>
              <Grid item xs={12} pt={0}>
                <InputLabel shrink htmlFor="name" sx={lableStyle}>
                  name
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your name"
                  id="name"
                  helperText={formik.touched.name && formik.errors.name}
                  error={formik.touched.name && formik.errors.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} pt={0}>
                <InputLabel shrink htmlFor="year" sx={lableStyle}>
                  year
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your year"
                  id="year"
                  helperText={formik.touched.year && formik.errors.year}
                  error={formik.touched.year && formik.errors.year}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} pt={0}>
                <InputLabel shrink htmlFor="author" sx={lableStyle}>
                  author
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your author"
                  id="author"
                  helperText={formik.touched.author && formik.errors.author}
                  error={formik.touched.author && formik.errors.author}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} pt={0}>
                <InputLabel shrink htmlFor="summary" sx={lableStyle}>
                  summary
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your summary"
                  id="summary"
                  helperText={formik.touched.summary && formik.errors.summary}
                  error={formik.touched.summary && formik.errors.summary}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} pt={0}>
                <InputLabel shrink htmlFor="publisher" sx={lableStyle}>
                  publisher
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your publisher"
                  id="publisher"
                  type="number"
                  helperText={
                    formik.touched.publisher && formik.errors.publisher
                  }
                  error={formik.touched.publisher && formik.errors.publisher}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} pt={0}>
                <InputLabel shrink htmlFor="pageCount" sx={lableStyle}>
                  pageCount
                </InputLabel>
                <TextField
                  fullWidth
                  placeholder="Enter your pageCount"
                  id="pageCount"
                  type="number"
                  helperText={
                    formik.touched.pageCount && formik.errors.pageCount
                  }
                  error={formik.touched.pageCount && formik.errors.pageCount}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={0.5} columns={16}>
              <Grid item xs={8} pt={0}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: "#6200EE",
                    border: "1px solid #6200EE",
                  }}
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Grid>
              <Grid item xs={8}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "#6200EE" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default EditModal;