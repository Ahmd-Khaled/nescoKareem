import baseUrl from "./baseUrl";

export const useGetData = async (url) => {
  // let lang = JSON.parse(localStorage.getItem("lang"))
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Origin': '*, http://localhost:3000',
      'api_password': '123456',
      'language': 'ar',
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbmVzdHJldHRvY29mZmVlLmNvbVwvZGFzaGJvYXJkXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjk0MzQ3MzQ1LCJuYmYiOjE2OTQzNDczNDUsImp0aSI6IlQzTVNPUWxMYzJSQjJnNVYiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.v7Gq54GCYnHtRxdz0hIGcGHQK7zFr7WyC3__jsljBe0'
    }
  }

  console.log("--3---------");
  const res = await baseUrl.get(url, config);
  console.log("--4---------");
  return res.data;
}

// export const useGetData = async (url, params) => {

//   const res = await baseUrl.get(url, params);
//   return res.data;
// }


// export const useGetDataToken = async (url, params) => {
//   const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//   };

//   const res = await baseUrl.get(url, config);
//   return res.data;
// }

