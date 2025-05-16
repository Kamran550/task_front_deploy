import React from "react";
import TaskForm from "../components/TaskForm";
import { useNavigate } from "react-router-dom";
import { createTask } from "../api/tasksApi";

export default function CreateTask() {
  const navigate = useNavigate();

  const handleSubmit = async (data: {
    title: string;
    description?: string;
  }) => {
    try {
      console.log("try");

      await createTask(data); // Backend-ə POST sorğusu
      navigate("/tasks"); // Yönləndirmə
    } catch (error) {
      console.error("Task yaradılarkən xəta:", error);
    }
  };
  return (
    <div>
      <h2>Yeni Task Yarat</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}
