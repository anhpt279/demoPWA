export const formatPhone = (username: any) => {
  return username.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
};

export const formatDate = () => {
  return new Date().toString().split(" ").splice(1, 3).join(" ");
};
