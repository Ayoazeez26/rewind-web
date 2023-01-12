export const getErrorMessage = (err) => {
  const { response } = err;
  let errorText = "Something went wrong, please try again";
  if (response) {
    const {
      data: { message },
    } = response;
    if (message) {
      errorText = message;
    }
  }
  return errorText;
};
