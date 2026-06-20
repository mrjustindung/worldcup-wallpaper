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
async function loadMatches() {

  const container = document.querySelector(".bottom");

  try {

    const fixtures = await getTodayFixtures();

    container.innerHTML =
      "<h2>TODAY'S MATCHES</h2>";

    if (!fixtures.length) {

      container.innerHTML += `
      <div class="match">
        No qualifiers today
      </div>
      `;

      return;
    }

    fixtures.slice(0,5).forEach(match => {

      const home =
        match.teams.home.name;

      const away =
        match.teams.away.name;

      const time =
        new Date(match.fixture.date)
        .toLocaleTimeString([],{
          hour:'2-digit',
          minute:'2-digit'
        });

      container.innerHTML += `
        <div class="match">
          <span>${home} vs ${away}</span>
          <strong>${time}</strong>
        </div>
      `;
    });

  } catch(err) {

    console.error(err);

    container.innerHTML = `
      <h2>TODAY'S MATCHES</h2>
      <div class="match">
        API ERROR
      </div>
    `;
  }
}

loadMatches();
