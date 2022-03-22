export const getRequestOptions = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 500) {
      const responseResult = "status 500, Server Error";
      throw responseResult;
    }
    throw new Error("Fetching data failed.");
  }

  const data = await response.json();
  return data;
};
