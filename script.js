const params = new URLSearchParams(location.search);
document.getElementById("msg").textContent = params.get("msg") || "placeholdar";