//Function open form
export const openForm = async (id, setOpenInsert, fetchDataId, setOpenEdit) => {
  if (!id) {
    setOpenInsert(true);
    await fetchDataId(id);
  } else if (id) {
    await fetchDataId(id);
    setOpenEdit(true);
  }
};
