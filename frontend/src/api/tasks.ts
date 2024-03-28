import initNewHttp from "./http";

const http = initNewHttp();

export const tasks = async () => {
  const { data } = await http.get(`tasks/`);
  return data;
};

export const createTask = async (task: any) => {
  const { data } = await http.post(`tasks/`, task);
  return data;
};

export const deleteTask = async (id: string) => {
  await http.delete(`tasks/${id}`);
};

export const updateTask = async (id: string, task: any) => {
  const { data } = await http.patch(`tasks/${id}`, task);
  return data;
};
