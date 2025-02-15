const tryCatch = async () => {
  try {
    const response = await fetch('https://api.github.com/users/snowdenxedward');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
tryCatch();
