# 🔐 Pass Strength Checker

[![License: GPL-3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)
[![Made with: HTML/CSS/JS](https://img.shields.io/badge/Made%20With-HTML%2C%20CSS%2C%20JS-orange.svg)]()
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)]()

A **lightweight and efficient password strength checker** built using HTML, CSS, and JavaScript.  
This project helps users create **strong, secure passwords** by analyzing their input in real-time and providing instant feedback on password strength.

---

## 📖 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Installation & Usage](#installation--usage)
- [Password Rules](#password-rules)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🚀 Features  

- **Real-Time Analysis** → Updates password strength as the user types.  
- **Multiple Criteria Check** → Length, uppercase, lowercase, digits, and special characters.  
- **Visual Feedback** → Clear UI indicators for weak, medium, and strong passwords.  
- **Lightweight & Portable** → Works with just HTML, CSS, and JavaScript (no external dependencies).  
- **Extension Ready** → Comes with a `manifest.json` file, so it can be integrated into Chrome/Edge as an extension.  

---

## 📂 Project Structure  

pass-strength/

├── LICENSE # Project License (GPL-3.0)

├── README.md # Documentation

├── manifest.json # Extension manifest file

├── pop_up.html # Main HTML (password input UI)

├── pop_up.css # CSS styles for UI

├── pop_up.js # Core password strength logic

└── Data/ # (Optional) for extra resources / wordlists



---

## 🛠️ Tech Stack  

| Component   | Technology |
|-------------|------------|
| Frontend    | HTML, CSS  |
| Logic       | Vanilla JavaScript |
| Packaging   | Chrome Extension (Manifest v3 ready) |
| License     | GPL-3.0 |

---

## ⚙️ How It Works 

1. User enters a password inside the **popup interface**.  
2. The JavaScript logic (`pop_up.js`) runs multiple checks:  
   - Length  
   - Uppercase letters  
   - Lowercase letters  
   - Numbers  
   - Special characters  
3. A **strength meter** (Weak / Medium / Strong) is displayed instantly.  
4. Optional: Can be expanded with dictionary-based checks inside `Data/` folder.  

---

## 📋 Installation & Usage  

### Option 1 → Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/Atul11190/pass-strength.git
   cd pass-strength
