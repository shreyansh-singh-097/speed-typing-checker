Deployed Link: ubiquitous-platypus-e76b2d.netlify.app


# speed-typing-checker
Developed a typing speed test application using JavaScript with dynamic text generation and performance metrics like WPM and accuracy.
<br>
Created By Shreyansh Singh


# ⌨️ Typing Speed Test App

An interactive and user-friendly Typing Speed Test application built using *HTML, CSS, and JavaScript*.  
This project allows users to test their typing speed and accuracy in real-time with a dynamic paragraph system and countdown timer.

## 📌 Project Overview

The Typing Speed Test App is designed to help users improve their typing skills by providing real-time feedback on:

- Speed (Words Per Minute - WPM)
- Accuracy (%)
- Time-based performance (60-second test)

It simulates real typing test environments commonly used in assessments and interviews.

---

## 🚀 Features

### 📝 Dynamic Text Generation
•⁠  ⁠Random paragraph displayed for each test
•⁠  ⁠Ensures a unique typing experience every time

### ⏱️ Countdown Timer
•⁠  ⁠60-second timer starts when test begins
•⁠  ⁠Automatically stops input when time ends

### ⚡ Real-Time Performance Metrics
•⁠  ⁠*WPM (Words Per Minute)* calculation
•⁠  ⁠*Accuracy tracking* based on correct characters

### 🎯 Error Handling
•⁠  ⁠Handles empty input cases
•⁠  ⁠Prevents invalid calculations

### 💻 Responsive UI
•⁠  ⁠Clean and minimal design
•⁠  ⁠Works smoothly across devices

---

## 🛠️ Tech Stack

| Technology | Usage |
|----------|------|
| HTML     | Structure |
| CSS      | Styling |
| JavaScript | Logic & Functionality |

---

## 🧠 How It Works

1.⁠ ⁠User clicks on *Start Test*
2.⁠ ⁠A random paragraph is displayed
3.⁠ ⁠Timer starts (60 seconds)
4.⁠ ⁠User types in the input box
5.⁠ ⁠App calculates:
   - Number of words typed
   - Correct characters
   - Accuracy %
6.⁠ ⁠When timer ends:
   - Input is disabled
   - Final WPM and accuracy are shown

---

## 📊 Formula Used

### 🟢 Words Per Minute (WPM)


## 💡 Why I Built This
I created this project to solve a simple problem — improving typing speed in a fun and interactive way. 
Instead of boring typing tools, I wanted something lightweight and visually engaging.

## ⚙️ Core Logic
- Timer starts on first keystroke
- WPM = (characters / 5) / time
- Accuracy = (correct chars / total chars) * 100
