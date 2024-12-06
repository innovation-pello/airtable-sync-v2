const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

export const fetchHelloMessage = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/hello`);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    throw error;
  }
};