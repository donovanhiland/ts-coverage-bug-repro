export const asyncFunc = async () => {
  const test = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 500);
  });

  return test;
};
