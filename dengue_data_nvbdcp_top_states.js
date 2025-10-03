
// dengue data (NVBDCP) — selected top states — cases & deaths by year (2021-2025) + coordinates
// Source: NCVBDC / NVBDCP 'DENGUE SITUATION IN INDIA' table (Updated Oct 03, 2025).
const dengueStateData = [
  { state: "Andhra Pradesh", lat: 15.9, lng: 79.7, values: { "2021": { cases: 4760, deaths: 0 },  "2022": { cases: 6391, deaths: 0 },  "2023": { cases: 6453, deaths: 0 },  "2024": { cases: 5555, deaths: 2 },  "2025": { cases: 1410, deaths: 2 } } },
  { state: "Karnataka",      lat: 15.3, lng: 75.7, values: { "2021": { cases: 7393, deaths: 7 },  "2022": { cases: 9889, deaths: 9 },  "2023": { cases: 19300, deaths: 11 }, "2024": { cases: 32886, deaths: 27 }, "2025": { cases: 4281, deaths: 0 } } },
  { state: "Kerala",         lat: 10.0, lng: 76.2, values: { "2021": { cases: 3251, deaths: 27 }, "2022": { cases: 4432, deaths: 29 }, "2023": { cases: 17426, deaths: 153 }, "2024": { cases: 20674, deaths: 128 }, "2025": { cases: 8259, deaths: 31 } } },
  { state: "Maharashtra",    lat: 19.7, lng: 75.7, values: { "2021": { cases: 12720, deaths: 42 }, "2022": { cases: 8578, deaths: 27 },  "2023": { cases: 19034, deaths: 55 }, "2024": { cases: 19385, deaths: 40 }, "2025": { cases: 6779, deaths: 0 } } },
  { state: "Uttar Pradesh",  lat: 26.8, lng: 80.9, values: { "2021": { cases: 29750, deaths: 29 }, "2022": { cases: 19821, deaths: 33 }, "2023": { cases: 35402, deaths: 36 }, "2024": { cases: 15868, deaths: 9 },  "2025": { cases: 1646, deaths: 0 } } },
  { state: "Delhi",          lat: 28.6, lng: 77.2, values: { "2021": { cases: 13089, deaths: 23 }, "2022": { cases: 10183, deaths: 9 }, "2023": { cases: 16866, deaths: 19 }, "2024": { cases: 10585, deaths: 11 }, "2025": { cases: 964, deaths: 0 } } },
  { state: "Tamil Nadu",     lat: 11.1, lng: 78.7, values: { "2021": { cases: 6039, deaths: 8 },  "2022": { cases: 6430, deaths: 8 },  "2023": { cases: 9121, deaths: 12 },  "2024": { cases: 27378, deaths: 13 }, "2025": { cases: 11825, deaths: 7 } } },
  { state: "Gujarat",        lat: 22.3, lng: 72.6, values: { "2021": { cases: 10983, deaths: 14 }, "2022": { cases: 6682, deaths: 7 },  "2023": { cases: 7222, deaths: 7 },   "2024": { cases: 7891, deaths: 6 },   "2025": { cases: 1729, deaths: 0 } } },
  { state: "Punjab",         lat: 30.8, lng: 75.8, values: { "2021": { cases: 23389, deaths: 55 }, "2022": { cases: 11030, deaths: 41 }, "2023": { cases: 13687, deaths: 39 }, "2024": { cases: 6260, deaths: 13 },  "2025": { cases: 467, deaths: 0 } } },
  { state: "Odisha",         lat: 20.9, lng: 84.0, values: { "2021": { cases: 7548, deaths: 0 },   "2022": { cases: 7063, deaths: 0 },   "2023": { cases: 12845, deaths: 1 },   "2024": { cases: 9892, deaths: 0 },   "2025": { cases: 1246, deaths: 0 } } },
  { state: "Telangana",      lat: 17.9, lng: 79.6, values: { "2021": { cases: 7135, deaths: 0 },   "2022": { cases: 8972, deaths: 0 },   "2023": { cases: 8016, deaths: 1 },    "2024": { cases: 10077, deaths: 0 },  "2025": { cases: 4296, deaths: 0 } } }
];
// expose to window
window.dengueStateData = dengueStateData;
