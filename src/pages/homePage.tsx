import { GlobalProps } from "../models/models"
import { TaskManager } from "../components/taskManager/taskManager";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export function HomePage(props: GlobalProps) {
  return (
    <div className="centerContainer">
      <ThemeProvider theme={theme}>
        <TaskManager {...props}/>
        <Link to="about">
          <Button variant="contained">Go to about page</Button>
        </Link>
      </ThemeProvider>
    </div>
  )
}