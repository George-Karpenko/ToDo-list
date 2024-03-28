import initNewHttp from "./http";

const http = initNewHttp();
const namespace = "tasks/";

export const tasks = async () => {
  const { data } = await http.get(namespace);
  return data;
};

export const createTask = async (task: any) => {
  const { data } = await http.post(namespace, task);
  return data;
};

export const deleteTask = async (id: string) => {
  await http.delete(`${namespace}${id}`);
};

export const updateTask = async (id: string, task: any) => {
  const { data } = await http.patch(`${namespace}${id}`, task);
  return data;
};
