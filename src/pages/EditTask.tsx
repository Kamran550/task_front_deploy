import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import { useNavigate, useParams } from "react-router-dom";
import type { Task } from "../types/task";
import { getTaskById, updateTask } from "../api/tasksApi";

export default function EditTask() {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    fetchTask();
  }, [id]);

  const fetchTask = async () => {
    if (!id) return;
    try {
      const taskData = await getTaskById(id as string);
      console.log({ taskData });

      setTask(taskData);
    } catch (error) {
      console.error("Task tapılmadı:", error);
    }
  };

  const handleSubmit = async (data: {
    title: string;
    description?: string;
  }) => {
    try {
      if (!id) return;

      await updateTask(id as string, data);
      navigate("/tasks");
    } catch (error) {
      console.error("Task yenilənə bilmədi:", error);
    }
  };

  if (!task) return <div>Task tapılmadı</div>;

  return (
    <div>
      <h2>Task Redaktə Et</h2>
      <TaskForm initialData={task} onSubmit={handleSubmit} />
    </div>
  );
}
