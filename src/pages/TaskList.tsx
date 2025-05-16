import React, { useEffect, useState } from "react";
import type { Task } from "../types/task";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link as RouterLink } from "react-router-dom";
import { deleteTask, getAllTasks } from "../api/tasksApi";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await getAllTasks();
    setTasks(data);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id); // API-yə silmək üçün sorğu göndər
    fetchTasks(); // Sonra siyahını yenilə
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tasklar
      </Typography>
      {loading ? (
        <Typography>Yüklənir...</Typography>
      ) : tasks.length === 0 ? (
        <Typography color="text.secondary">Heç bir task tapılmadı.</Typography>
      ) : (
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              secondaryAction={
                <>
                  <IconButton
                    component={RouterLink}
                    to={`/tasks/edit/${task.id}`}
                    edge="end"
                    aria-label="edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText
                primary={task.title}
                secondary={task.description}
                sx={{
                  textDecoration:
                    task.status === "done" ? "line-through" : "none",
                }}
              />
            </ListItem>
          ))}
        </List>
      )}

      <Button component={RouterLink} to="/tasks/create" variant="contained">
        Yeni Task əlavə et
      </Button>
    </Box>
  );
}
