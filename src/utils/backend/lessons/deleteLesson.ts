const deleteLesson = async (id: string) => {
  const API_URL = import.meta.env.VITE_API_URL || "";
  try {
    const res = await fetch(`${API_URL}/lesson/${id}`, {
      method: "DELETE",
    });
    return res;
  } catch (e) {
    throw new Error(`${e}`);
  }
};
export default deleteLesson;
