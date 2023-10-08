import baseUrl from "./baseUrl";

export const useInsertData = async (url, params) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'api_password': process.env.API_PASSWORD,
      'language': 'ar',
      'Authorization': process.env.API_TOKEN,
    }
  }

  const res = await baseUrl.post(url, params, config);
  return res;
}