import React, { useState, useEffect } from "react";
import type { Task } from "../../types/task";
import { TextField, Button, Box } from "@mui/material";

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: { title: string; description?: string }) => void;
}

export default function TaskForm({ initialData, onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, description });
  };

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description || "");
    }
  }, [initialData]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500 }}
    >
      <TextField
        label="Başlıq"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Təsvir"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={4}
      />
      <Button variant="contained" type="submit">
        Yadda saxla
      </Button>
    </Box>
  );
}
