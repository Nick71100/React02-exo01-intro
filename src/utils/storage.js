export const saveUserToStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromStorage = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : [];
};
