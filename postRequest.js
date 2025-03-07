// The API endpoint allows users to register or signup to create their accounts.

const postRequest = async () => {
  const url = "https://api.freeapi.app/api/v1/users/register";
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: '{"email":"kevin-dev@gmail.com","password":"password","role":"developer","username":"kevin"}',
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

postRequest()
