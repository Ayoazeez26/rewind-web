export const required = (val) => {
  return !!val || "This field is required";
};

export const email = (val) => {
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (emailRegex.test(val) === true) {
    return true;
  }
  return "Invalid e-mail address";
};

export const password = (val) => {
  if (val.length >= 10) {
    return true;
  } else {
    return "";
  }

  if (/[a-z]/.test(val)) {
    return true;
  } else {
    return "";
  }

  if (/[A-Z]/.test(val)) {
    return true;
  } else {
    return "";
  }

  if (/[0-9]/.test(val)) {
    return true;
  } else {
    return "";
  }
};

export const number = (val) => {
  if (val.length === 11 && !isNaN(parseFloat(val))) {
    return true;
  } else {
    return "Input a valid Phone Number";
  }
};

export const NIN = (val) => {
  if (val.length === 10 && !isNaN(parseFloat(val))) {
    return true;
  } else {
    return "Input a valid NIN Number";
  }
};
