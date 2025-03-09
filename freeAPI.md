# Useful APIs for Testing and Development

Here are some useful APIs for testing various functionalities such as retrieving IP addresses, location data, user details, and more.

## 1. **IP Address APIs**
### Get Public IP Address
- **API:** `https://api64.ipify.org?format=json`
- **Example Response:**
  ```json
  { "ip": "192.168.1.1" }
  ```

### Get IP Geolocation
- **API:** `https://ipinfo.io/json`
- **Example Response:**
  ```json
  {
    "ip": "192.168.1.1",
    "city": "New York",
    "region": "New York",
    "country": "US",
    "loc": "40.7128,-74.0060",
    "org": "ISP Provider"
  }
  ```

## 2. **User Data APIs**
### Get Random User Data
- **API:** `https://randomuser.me/api/`
- **Example Response:**
  ```json
  {
    "results": [
      {
        "gender": "male",
        "name": { "title": "Mr", "first": "John", "last": "Doe" },
        "email": "john.doe@example.com"
      }
    ]
  }
  ```

### GitHub User Data
- **API:** `https://api.github.com/users/{username}`
- **Example Response:**
  ```json
  {
    "login": "octocat",
    "id": 1,
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "bio": "I'm the Octocat!",
    "public_repos": 8
  }
  ```

## 3. **Fake Data APIs**
### JSON Placeholder (Fake API for Testing)
- **API:** `https://jsonplaceholder.typicode.com/posts/1`
- **Example Response:**
  ```json
  {
    "userId": 1,
    "id": 1,
    "title": "Sample Post Title",
    "body": "This is a test post."
  }
  ```

## 4. **Weather APIs**
### OpenWeatherMap (Requires API Key)
- **API:** `https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_KEY}`
- **Example Response:**
  ```json
  {
    "weather": [{ "main": "Clear", "description": "clear sky" }],
    "main": { "temp": 288.55, "humidity": 81 },
    "name": "London"
  }
  ```

## 5. **Time and Date APIs**
### Get Current Time for a Location
- **API:** `http://worldtimeapi.org/api/timezone/Europe/London`
- **Example Response:**
  ```json
  {
    "datetime": "2025-03-09T12:45:30.123456+00:00",
    "timezone": "Europe/London"
  }
  ```

These APIs are great for testing, debugging, and prototyping projects. 🚀

