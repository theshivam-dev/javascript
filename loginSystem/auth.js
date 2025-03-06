const authState = { isLoggedIn: false }; 

export const login = (username, password) => {
  if (username && password) {
    authState.isLoggedIn = true;
    console.log(`User ${username} logged in successfully.`);
    return `User ${username} logged in successfully.`
  } else {
    console.log("Invalid username or password.");
    return "Invalid username or password."
  }
};

export const logout = () => {
  if (authState.isLoggedIn) {
    authState.isLoggedIn = false;
    return "User logged out successfully.";
  } else {
    return "Please log in first.";
  }
};
export const isAuthenticated = () => authState.isLoggedIn;
