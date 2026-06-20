const API_KEY = "4d3922e69bmsh727270bfaaa09eep1d8c7bjsn39910b9a6c01";

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
};

async function getTodayFixtures() {
  const today = new Date().toISOString().split("T")[0];

  const url =
    `https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${today}`;

  const res = await fetch(url, {
    method: "GET",
    headers
  });

  const data = await res.json();
  return data.response || [];
}
