document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Akun dummy (bisa dihubungkan dengan backend di tahap selanjutnya)
    if (email === "admin@tsaqib.ai" && password === "123456") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Email atau password salah!");
    }
});