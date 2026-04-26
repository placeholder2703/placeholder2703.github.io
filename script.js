const params = new URLSearchParams(location.search);
const encoded = params.get("msg");
const output = document.getElementById("msg");
try {
	output.textContent = encoded
		? atob(encoded)
		: "nothing here(⊙_⊙)？";
} catch {
	output.textContent = "nothing here¯\_(ツ)_/¯";
}
