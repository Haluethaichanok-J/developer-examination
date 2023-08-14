//Function validation

export const validate = (values) => {
  let er = "";
  //the regular expression /^[0-9]*$/ to match only digits (0-9)
  const pattern = /^[0-9]*$/;
  if (
    !values.name ||
    !values.price ||
    !values.quantity ||
    !values.description
  ) {
    er = "Please fill out this form.";
  } else if (values.price < 0) {
    er = "Please enter a valid positive number for price.";
  } else if (values.quantity < 0 || !pattern.test(values.quantity)) {
    er = "Please enter a valid positive number for quantity.";
  }
  return er;
};
