import { defineStore } from "pinia";
export const useNewsStore = defineStore("news", () => {
  const cricketNews = ref(null);
  const footballNews = ref(null);
  const hockeyNews = ref(null);
  const voleyballNews = ref(null);
  const basketballNews = ref(null);

  const matches = ref(null);
  const series = ref(null);

  const name = "gayafowejfoiewfoijwoif";
  const pageSeoData = ref({
    cricket: {
      title: "Latest Cricket News, Live Scores & Match Results | 9jjsport.in",
      name: "description",
      content:
        "Find all the latest Cricket News, LIVE scores, fixtures, results, photos, and analysis from around the world. Stay updated with T20, ODI, and Test match action.",
    },
    basketball: {
      title: "NBA Scores, Schedules, and Basketball News Today | 9jjsport.in",
      name: "description",
      content:
        "Get the latest NBA and global Basketball news, live scores, team standings, player stats, and expert analysis. Follow your favorite team and league action here.",
    },
    football: {
      title:
        "Global Football News: Premier League, La Liga, MLS & More | 9jjsport.in",
      name: "description",
      content:
        "Your source for the latest Football (Soccer) news. Up-to-the-minute scores, match results, transfer rumors, and in-depth coverage of all major leagues worldwide.",
    },
    hockey: {
      title: "NHL Scores, Schedules & Ice Hockey News | 9jjsport.in",
      name: "description",
      content:
        "All the latest Ice Hockey news, NHL scores, team standings, and league rumors. Get game previews, post-match analysis, and the full season schedule.",
    },
    volleyball: {
      title:
        "Professional Volleyball News, Fixtures & Tournament Results | 9jjsport.in",
      name: "description",
      content:
        "Stay current with professional Volleyball leagues. Get tournament results, match schedules, player news, and updates from the world of indoor and beach volleyball.",
    },
    homepage: {
      title:
        "Professional Volleyball News, Fixtures & Tournament Results | 9jjsport.in",
      name: "description",
      content:
        "Stay current with professional Volleyball leagues. Get tournament results, match schedules, player news, and updates from the world of indoor and beach volleyball.",
    },
  });

  return {
    cricketNews,
    footballNews,
    hockeyNews,
    voleyballNews,
    name,
    pageSeoData,
    basketballNews,
    matches,
    series,
  };
});
