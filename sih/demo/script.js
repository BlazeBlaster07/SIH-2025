document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  // ✅ Users Database (You can extend this or replace with real DB/API later)
  const users = {
    admin: {
      username: "admin123",
      password: "adminpass"
    },
    alumni: {
      username: "alumni123",
      password: "alumnipass"
    },
    student: {
      username: "student123",
      password: "studentpass"
    }
  };

  if (!role || !username || !password) {
    alert("Please fill all fields.");
    return;
  }

  if (users[role] && users[role].username === username && users[role].password === password) {
    // Store user details in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify({ username, role }));

    // Redirect based on role
    if (role === "admin") {
      window.location.href = "admin.html";
    } else if (role === "alumni") {
      window.location.href = "alumni.html";
    } else if (role === "student") {
      window.location.href = "student.html"; // ✅ Student Dashboard Page
    }
  } else {
    alert("Invalid credentials. Try again!");
  }
});
