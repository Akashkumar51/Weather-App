const baseURL =
  "https://https://api.weatherapi.com/v1/current.json?key=dd6d62f3f93142fc9c574224231608";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=no`)
    return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=no`)
  return await response.json();
};