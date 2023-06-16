function getData() {
  localStorage.setItem("data", "halo");
  location.reload();
}

const save = localStorage.getItem("data");
