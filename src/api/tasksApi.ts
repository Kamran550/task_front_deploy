import axios from "axios";
import type { Task } from "../types/task";

const API_URL = "http://localhost:3000";

export const getAllTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (taskData: unknown) => {
  const response = await axios.post(`${API_URL}/tasks`, taskData);
  return response.data;
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};

export const getTaskById = async (id: string): Promise<Task> => {
  console.log({ id });

  const response = await axios.get(`${API_URL}/tasks/${id}`);
  return response.data;
};

export const updateTask = async (id: string, data: Partial<Task>) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, data);
  return response.data;
};
