let url = 'https://kenux.duckdns.org'
let response = await fetch(url);
if (response.ok) {
  let json = await response.json();
} else {
  console.error("HTTP-Error: " + response.status);
}