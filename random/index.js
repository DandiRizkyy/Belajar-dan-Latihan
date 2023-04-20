const mainPass = document.getElementById("main-pass");
const confirmPass = document.getElementById("confirm-pass");
const usersData = localStorage.getItem("users");
const users = JSON.parse(usersData) || [{ name: "hello", password: "hello" }];
localStorage.setItem("users", JSON.stringify(users));

function submit() {
  if (mainPass.value !== confirmPass.value) {
    alert("Password must match!");
    console.log(mainPass.value);
    console.log(confirmPass.value);
  } else {
    alert("success");
    console.log(mainPass.value);
    console.log(confirmPass.value);
    users.push({
      name: mainPass.value,
      password: confirmPass.value,
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
}
