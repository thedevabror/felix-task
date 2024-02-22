import { InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const SectionMain = styled("div")(({ theme }) => ({
  padding: "36px 0px 36px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start"
}))

export const SectionBox = styled("div")(({ theme }) => ({
  padding: "0px 100px 0px 100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.up(655)]: {
    flexDirection: "row",
    // padding: "0px 100px 0px 100px",
  },
  width: "100%",
  alignItems: "center",
  margin: "36px 0px"
}))

export const SectionTypography = styled("h3")(({ theme }) => ({
  fontSize: "36px",
  fontWeight: "700",
  color: theme.palette.success.contrastText,
}))

export const SectionSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export const SectionBooks = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "0px 20px 0px 20px",
  [theme.breakpoints.up("lg")]: {
    padding: "0px 100px 0px 100px",
  },
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))",
  gap: "2rem",
  position: "relative",
  transition: "all 3s",
}))

export const SectionCard = styled("div")(({ theme }) => ({
  position: "relative",
  "&:hover .sectionCardButton": {
    display: "block",
  },
}))

export const SectionCardButtonBox = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "0",
  left: "100%",
  display: "none",
  transition: "all 3s"
}))

export const SectionCardButton = styled("div")(({ theme }) => ({
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
  borderRadius: "6px 6px 6px 0px",
  boxShadow: "0px 6px 32px 0px rgba(21, 21, 21, 0.48)",
}))
