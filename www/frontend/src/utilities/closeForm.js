//Function close form
export const closeForm = (
  setOpenEdit,
  setOpenInsert,
  setFormValue,
  defaultValue
) => {
  setOpenEdit(false);
  setOpenInsert(false);
  setFormValue(defaultValue);
};
