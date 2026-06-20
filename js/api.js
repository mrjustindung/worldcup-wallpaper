async function loadWorldCupData() {
    try {

        const groups = await fetch('./2026/worldcup.groups.json')
            .then(r => r.json());

        const squads = await fetch('./2026/worldcup.squads.json')
            .then(r => r.json());

        const stadiums = await fetch('./2026/worldcup.stadiums.json')
            .then(r => r.json());

        console.log(groups);
        console.log(squads);
        console.log(stadiums);

    } catch(err) {
        console.error(err);
    }
}

loadWorldCupData();
