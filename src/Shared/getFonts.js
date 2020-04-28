import { apiKey } from "../apiKey";
export const getFonts = async () => {
  const response = await fetch(
    `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
  ).then((r) => r.json());
  return response.items;
};
