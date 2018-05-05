export const startup = error => {
  if (!error) {
    console.log(`👋  Running on port ${process.env.PORT}`); // eslint-disable-line
  }
};
