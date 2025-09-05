# 💰 Expense Tracker  

A simple **Expense Tracker** web app built using **HTML, CSS, JavaScript, and Firebase**.  
It allows users to add, view, and manage their daily expenses easily.  

---

## 🚀 Features  
- 🔑 Add expenses with **amount, category, description, and date**  
- 📊 View all saved expenses in real-time  
- ☁️ Firebase Firestore integration for storage  
- 🎨 Clean and responsive UI  

---

## 🛠️ Tech Stack  
- **Frontend:** HTML, CSS, JavaScript  
- **Backend/Database:** Firebase Firestore  

---

## ⚙️ Setup Instructions  

1. **Clone the repository**  
   👉 **Live Demo:** [Expense Tracker](https://rachel21-hub.github.io/expense-tracker/)


2. **Open the project**  
   - Open `index.html` in your browser  
   - Or use Live Server in VS Code for better experience  

3. **Firebase Setup**  
   - The Firebase configuration is already included in `app.js`.  
   - If you want to use your own Firebase project, replace the config in `app.js`.  

---

## 📂 Folder Structure  

```
expense-tracker/
│── index.html     # Main UI
│── style.css      # Styling
│── app.js         # Firebase + App logic
│── README.md      # Documentation
```

---

## 💻 Code Overview  

### index.html  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Expense Tracker</title>
  <link rel="stylesheet" href="style.css">

  <!-- Firebase SDKs -->
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
</head>
<body>
  <div class="container">
    <h1>💰 Expense Tracker</h1>
    <form id="expense-form">
      <input type="number" id="amount" placeholder="Amount (₹)" required>
      <input type="text" id="category" placeholder="Category" required>
      <input type="text" id="description" placeholder="Description">
      <input type="date" id="date" required>
      <button type="submit">Add Expense</button>
    </form>

    <h2>Expenses</h2>
    <ul id="expense-list"></ul>
  </div>

  <!-- Your App -->
  <script src="app.js"></script>
</body>
</html>

```

### style.css  
```css
body {
  font-family: Arial, sans-serif;
  background: #f0f8ff;
  margin: 0;
  padding: 0;
}

.container {
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h1, h2 {
  text-align: center;
  color: #0077b6;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, button {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

button {
  background: #0077b6;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #005f86;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #e3f2fd;
  margin: 8px 0;
  padding: 10px;
  border-radius: 8px;
}

```

### app.js  
```javascript
// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCUSgco2D8DJTXKCEF-h-2rX0oS2IWkJuc",
  authDomain: "expense-tracker-302c9.firebaseapp.com",
  projectId: "expense-tracker-302c9",
  storageBucket: "expense-tracker-302c9.firebasestorage.app",
  messagingSenderId: "242760459618",
  appId: "1:242760459618:web:8d74a60c8230fd63d1b83b",
  measurementId: "G-MZ76HRE11G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

// Add Expense
expenseForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  try {
    await db.collection("expenses").add({
      amount,
      category,
      description,
      date
    });
    alert("Expense added!");
    expenseForm.reset();
    loadExpenses();
  } catch (error) {
    console.error("Error adding expense: ", error);
  }
});

// Load Expenses
async function loadExpenses() {
  expenseList.innerHTML = "";
  const snapshot = await db.collection("expenses").get();
  snapshot.forEach((doc) => {
    const expense = doc.data();
    const li = document.createElement("li");
    li.textContent = `${expense.date} - ₹${expense.amount} [${expense.category}] : ${expense.description}`;
    expenseList.appendChild(li);
  });
}

// Initial Load
loadExpenses();

```

---

## 📝 Hackathon Note  
✅ After the final evaluation, submit your **GitHub repository link** as per hackathon rules.  

---

## 📜 License  
This project is licensed under the **MIT License**.  
