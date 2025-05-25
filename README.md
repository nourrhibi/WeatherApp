# 🌤️ Weather Forecast App

A modern, responsive weather forecast web application built with **Angular** and **Tailwind CSS**. Search for any city to view the current weather, 7-day forecast, and related conditions in a clean and interactive UI.

---

## 🚀 Features

- 🔍 Real-time weather search with suggestions
- 🌡️ Current temperature, condition, humidity, pressure, wind speed, and UV index
- 📆 7-day forecast with dynamic images and temperatures

- 🌐 Powered by [WeatherAPI](https://www.weatherapi.com/)

---

## 🖼️ Preview

![App Preview](./screenshot.png) <!-- You can add a screenshot later -->

---

## 📦 Tech Stack

- [Angular](https://angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [WeatherAPI](https://www.weatherapi.com/)

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
---

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment variables

Create a new file named environment.ts inside src/environments/:
```bash
cp src/environments/environment.sample.ts src/environments/environment.ts
```
Edit environment.ts and add your WeatherAPI key:
```bash
export const environment = {
  production: false,
  weatherApiKey: 'YOUR_API_KEY_HERE'
};

```
⚠️ Do not commit environment.ts. It is ignored by Git.

### 4. Run the app
```bash
ng serve
```
Navigate to: http://localhost:4200

---

## 📁 Project Structure

```bash
src/
├── app/
│   ├── components/
│   │   ├── search/
│   │   ├── today-forecast/
│   │   └── week-forecast/
│   ├── services/
│   │   └── weather.service.ts
├── environments/
│   ├── environment.ts          # 🔐 API key (ignored by Git)
│   └── environment.sample.ts   # ✅ Safe sample to share

```

---

## 🧪 Sample API for Testing

You can use WeatherAPI.com and sign up for a free key.

Sample endpoint for city suggestions:

```bash
https://api.weatherapi.com/v1/search.json?key=YOUR_API_KEY&q=Tunis
```

Sample endpoint for weather data:

```bash
https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=Tunis&days=7
```