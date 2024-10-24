export const LSID = "TODOS";

export enum PALLETTE {
  DARK_PURPLE = "#433878",
  PURPLE = "#7E60BF",
  LIGHT_PURPLE = "#E4B1F0",
  PINK = "#FFE1FF",
  ERROR = "red",
}

export enum FONT_SIZES {
  HEADER = 55,
  LABEL = 30,
  TITLE = 38,
  BUTTON_LABEL = 32,
  TEXT_INPUT = 25,
}

export enum IDS {
  ADD_TODO_INPUT = "add-todo-input",
}

export const getTodos = () => {
  let data = [];
  if (localStorage.getItem("TODOS")) {
    data = parseString(localStorage.getItem("TODOS"));
  }
  return data;
};

export const clearTodos = () => {
  localStorage.removeItem(LSID);
};

export const parseString = (str) => {
  const items = str?.split(",");
  const result = [];
  if (items) {
    for (let i = 0; i < items?.length; i += 3) {
      result.push({
        label: items[i],
        isCompleted: items[i + 1] === "true",
        id: items[i + 2],
      });
    }
  }

  return result;
};

export const encodeString = (arr) =>
  arr
    .map(({ label, isCompleted, id }) => `${label},${isCompleted},${id}`)
    .join(",");

export const saveTodo = (addTodo, data, setData) => {
  const todoId = `${addTodo}_${new Date().toISOString()}_${data?.length ?? 0}`;
  const result = data?.length
    ? [
        ...data,
        {
          label: addTodo,
          id: todoId,
          isCompleted: false,
        },
      ]
    : [
        {
          label: addTodo,
          id: todoId,
          isCompleted: false,
        },
      ];
  setTodo(result, setData);
};

export const handleCheck = (data, setData, id) => {
  const todos = data;
  if (Array.isArray(todos)) {
    const updatedData = toggleCompletionById(data, id);
    setTodo(updatedData, setData);
  }
};

export const toggleCompletionById = (data, id) => {
  const entry = data.find((entry) => entry.id === id);
  if (entry) {
    entry.isCompleted = !entry.isCompleted;
  }
  return data;
};

export const setTodo = (result, setData) => {
  setData(result);
  const encodedString = encodeString(result);
  localStorage.setItem(LSID, encodedString);
};
