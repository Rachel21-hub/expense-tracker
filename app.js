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
