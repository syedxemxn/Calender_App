# 📅 Calendar App README

Welcome to the **Calendar App**! 🎉 This is a simple, interactive calendar that displays the current month and year, allows you to navigate between months, and highlights today's date. It’s designed with an elegant and user-friendly interface and utilizes modern web technologies. 🚀

---

## 📜 Table of Contents

1. [Introduction](#-introduction)
2. [Features](#-features)
3. [Installation](#-installation)
4. [Live Demo](#-live-demo)
5. [License](#-license)
6. [Detailed Explanation](#-detailed-explanation)

---

## 📌 Introduction

Welcome to the **Calendar App**! This is a simple, interactive web app designed to display a fully functional calendar where you can:

- See the current month and year.
- Navigate to previous or next months with ease.
- View the days of the month in a grid format.
- Highlight today's date with a distinct visual cue. ✨

It’s built with clean code, modern web technologies, and a smooth, responsive design to ensure the best experience on both desktop 💻 and mobile 📱.

---

## ✨ Features

Here are the key features of this app:

- **Interactive Calendar**: View the current month and navigate to previous or next months with intuitive buttons. ⬅️ ➡️
- **Highlight Today's Date**: The current date is highlighted with a special style to make it easy to spot! 🗓️
- **Responsive Design**: The calendar automatically adapts to your screen size. Whether on desktop or mobile, it looks great! 🌍📱
- **Month and Year Display**: The month and year are displayed in a bold and elegant font at the top. 💫
- **Smooth Animations**: The calendar fades in when loaded, adding a nice touch to the experience. 💨
- **Easy Navigation**: You can easily navigate between months using the "Previous" and "Next" buttons. 🔄

---

## 🛠️ Tech Stack

This project is built using the following technologies:

- **HTML5**: The structure and markup of the calendar.
- **CSS3**: The styling and layout, including animations and responsive design. 🎨
- **JavaScript (ES6)**: The logic for dynamically generating the calendar, handling month navigation, and updating the calendar. ⚙️

---

## 💻 Installation

To run the Calendar App on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/calendar-app.git
```

### 2. Open the Project Folder

Navigate to the project directory:

```bash
cd calendar-app
```

### 3. Open the HTML File

Open the `index.html` file in your preferred browser to view the calendar. 🖥️

---

## ⚙️ Usage

- **Navigate Between Months**: Use the **left arrow** button to go to the previous month ⬅️, and the **right arrow** button to move to the next month ➡️.
- **View the Current Date**: Today's date is highlighted with a distinct color, making it easy to locate. 🔍
- **Responsive Design**: The calendar adjusts based on the screen size. Whether you're on a mobile device or a desktop, it will look perfect! 📱💻

---

## 🌐 Live Demo

You can view a live demo of this calendar app by visiting this link:

[Live Demo - Calendar App]( https://rm550.github.io/Calender_App/) 🌟

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details. 📜

---


## 🔧 Detailed Explanation

### Structure:

- **HTML Structure**:
  - The app consists of a **calendar container** that holds the header (month-year and navigation buttons) and the calendar body, which contains the days of the month. 🏗️
  - Each calendar day is represented by a **day div** that contains the number and is dynamically generated based on the current month. 📅

- **CSS Styling**:
  - The calendar container is styled with a clean, white background, rounded corners, and a subtle shadow to make it pop out. 🌟
  - A background image is applied to the body for a polished look. 🌄
  - Hover effects, button animations, and a fade-in animation add a smooth feel to the user experience. 💫

- **JavaScript Logic**:
  - The calendar dynamically calculates the number of days in the month and the first day of the month to display the correct days in a grid layout. 🔢
  - The **prevMonthButton** and **nextMonthButton** handle the navigation between months. The current month and year are updated dynamically. 🗓️
  - The `today` class is applied to today's date to highlight it, making it easy to spot. ✨
  - Empty days are created at the start or end of the month if they don’t start or end on a Sunday. 🗓️

- **Responsive Design**:
  - The app is fully responsive! It adjusts automatically when you change the screen size to ensure it's optimized for any device. 📱💻

- **Animation**:
  - The **fadeIn** animation ensures the calendar appears smoothly when it’s loaded or when you navigate between months. ✨

---

