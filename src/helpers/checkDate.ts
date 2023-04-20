export const checkIsToday = (lastDate: string) => {
  const now = new Date().toLocaleDateString();
  const before = lastDate;
  return now === before;
};
