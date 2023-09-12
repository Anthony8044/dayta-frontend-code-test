export async function getUserData() {
  const res = await fetch("https://64ca236fb2980cec85c2f086.mockapi.io/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function getScoreData() {
  const res = await fetch("https://64ca236fb2980cec85c2f086.mockapi.io/scores");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
