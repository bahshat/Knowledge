// dataService.js

const fetchLocally = async () => {
  try {
    const response = await fetch("./data/question.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const fetchFromServer = async () => {
  try {
    const response = await fetch("https://knowledge-backend.onrender.com/api/questions");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const fetchData = async () => {
  const data = await fetchFromServer();
  return data;
};
