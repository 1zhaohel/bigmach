// const apiUrl = import.meta.env.VITE_API_URL;
// import dotenv from dotenv

// dotenv.config();
const apiUrl = import.meta.env.VITE_API_URL;

export const apiService = {
    async post(body) {
        try {
            console.log(apiUrl);
            const res = await fetch(`${apiUrl}/chat`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Types": "application/json",
                }
            });

            if (!res.ok) {
                throw new Error("HTTP error! status: ${res.status}");
            }

            const result = await res.json();
            return result;
        } catch (error) {
            console.error("Error during fetch:", error);
            throw error;
        }
    },
};
