// dataService.js

export const fetchData = async () => {
    try {
      const response = await fetch("./data/question.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  