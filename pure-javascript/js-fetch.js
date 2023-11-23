let url =
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";
let response = await fetch(url);
if (response.ok) {
  let json = await response.json();
  console.log(json);
} else {
  console.error("HTTP-Error: " + response.status);
}
