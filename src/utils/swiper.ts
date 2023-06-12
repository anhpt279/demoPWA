export const mathFloor = (newOffsetX: number, containerWidth: number) => {
  return Math.floor(newOffsetX / containerWidth) * containerWidth;
};

export const mathCeil = (newOffsetX: number, containerWidth: number) => {
  return Math.ceil(newOffsetX / containerWidth) * containerWidth;
};
export const mathRound = (newOffsetX: number, containerWidth: number) => {
  return Math.round(newOffsetX / containerWidth) * containerWidth;
};
