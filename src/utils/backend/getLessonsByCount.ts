const getLessonsByCount = async (count : number) => {
    const API_URL = import.meta.env.VITE_API_URL || "";

    try {
            const res = await fetch(`${API_URL}/lessons/count/${count}`);
            const json = await res.json();
            return json
        } catch (e) {
            throw new Error(`ERROR!! ${e}`);
        }
}

export default getLessonsByCount;