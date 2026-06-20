const API_KEY = "556150474amshf6a23d351485508p1c0084jsnd52662cb413c";

const headers = {
  "x-rapidapi-key": API_KEY,
  "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com"
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
