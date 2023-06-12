export const rdNumber = () => {
  return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
};

export const randomId = () => {
  return Math.random().toString(36).slice(2);
};
