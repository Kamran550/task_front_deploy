import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import TaskList from "./pages/TaskList";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Task Manager
          </Typography>
          <Button color="inherit" component={RouterLink} to="/tasks">
            Tasklar
          </Button>
          <Button color="inherit" component={RouterLink} to="/tasks/create">
            Yeni Task
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/edit/:id" element={<EditTask />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
