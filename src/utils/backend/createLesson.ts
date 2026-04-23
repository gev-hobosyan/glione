import type { Lesson } from "../types";

const createLesson = async (lesson: Lesson) => {
  const API_URL = import.meta.env.VITE_API_URL || "";

  try {
    const res = await fetch(`${API_URL}/lesson`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lesson),
    });

    return res;
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export default createLesson;
