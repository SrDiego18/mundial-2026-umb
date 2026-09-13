/* =========================================================
   DATOS — COPA MUNDIAL DE LA FIFA 2026
   ---------------------------------------------------------
   48 selecciones · 12 grupos · 104 partidos
   Fechas: 11 de junio al 19 de julio de 2026.

   Los resultados fueron contrastados con FIFA.
   Ver docs/FUENTES.md.
   ========================================================= */

const TEAM_FLAGS = {
    "México": "🇲🇽",
    "Sudáfrica": "🇿🇦",
    "República de Corea": "🇰🇷",
    "Chequia": "🇨🇿",
    "Canadá": "🇨🇦",
    "Bosnia y Herzegovina": "🇧🇦",
    "Catar": "🇶🇦",
    "Suiza": "🇨🇭",
    "Brasil": "🇧🇷",
    "Marruecos": "🇲🇦",
    "Haití": "🇭🇹",
    "Escocia": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    "Estados Unidos": "🇺🇸",
    "Paraguay": "🇵🇾",
    "Australia": "🇦🇺",
    "Turquía": "🇹🇷",
    "Alemania": "🇩🇪",
    "Curazao": "🇨🇼",
    "Costa de Marfil": "🇨🇮",
    "Ecuador": "🇪🇨",
    "Países Bajos": "🇳🇱",
    "Japón": "🇯🇵",
    "Suecia": "🇸🇪",
    "Túnez": "🇹🇳",
    "Bélgica": "🇧🇪",
    "Egipto": "🇪🇬",
    "Irán": "🇮🇷",
    "Nueva Zelanda": "🇳🇿",
    "España": "🇪🇸",
    "Cabo Verde": "🇨🇻",
    "Arabia Saudita": "🇸🇦",
    "Uruguay": "🇺🇾",
    "Francia": "🇫🇷",
    "Senegal": "🇸🇳",
    "Irak": "🇮🇶",
    "Noruega": "🇳🇴",
    "Argentina": "🇦🇷",
    "Argelia": "🇩🇿",
    "Austria": "🇦🇹",
    "Jordania": "🇯🇴",
    "Portugal": "🇵🇹",
    "RD del Congo": "🇨🇩",
    "Uzbekistán": "🇺🇿",
    "Colombia": "🇨🇴",
    "Inglaterra": "🏴",
    "Croacia": "🇭🇷",
    "Ghana": "🇬🇭",
    "Panamá": "🇵🇦"
};

const WORLD_CUP_MATCHES = [
    {
        "id": 1,
        "date": "2026-06-11",
        "stage": "Fase de grupos",
        "group": "A",
        "home": "México",
        "away": "Sudáfrica",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 2,
        "date": "2026-06-11",
        "stage": "Fase de grupos",
        "group": "A",
        "home": "República de Corea",
        "away": "Chequia",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 3,
        "date": "2026-06-18",
        "stage": "Fase de grupos",
        "group": "A",
        "home": "Chequia",
        "away": "Sudáfrica",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 4,
        "date": "2026-06-18",
        "stage": "Fase de grupos",
        "group": "A",
        "home": "México",
        "away": "República de Corea",
        "homeScore": 1,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 5,
        "date": "2026-06-24",
        "stage": "Fase de grupos",
        "group": "A",
        "home": "Chequia",
        "away": "México",
        "homeScore": 0,
        "awayScore": 3,
        "note": "",
        "venue": ""
    },
    {
        "id": 6,
        "date": "2026-06-24",
        "stage": "Fase de grupos",
        "group": "A",
        "home": "Sudáfrica",
        "away": "República de Corea",
        "homeScore": 1,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 7,
        "date": "2026-06-12",
        "stage": "Fase de grupos",
        "group": "B",
        "home": "Canadá",
        "away": "Bosnia y Herzegovina",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 8,
        "date": "2026-06-13",
        "stage": "Fase de grupos",
        "group": "B",
        "home": "Catar",
        "away": "Suiza",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 9,
        "date": "2026-06-18",
        "stage": "Fase de grupos",
        "group": "B",
        "home": "Suiza",
        "away": "Bosnia y Herzegovina",
        "homeScore": 4,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 10,
        "date": "2026-06-18",
        "stage": "Fase de grupos",
        "group": "B",
        "home": "Canadá",
        "away": "Catar",
        "homeScore": 6,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 11,
        "date": "2026-06-24",
        "stage": "Fase de grupos",
        "group": "B",
        "home": "Suiza",
        "away": "Canadá",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 12,
        "date": "2026-06-24",
        "stage": "Fase de grupos",
        "group": "B",
        "home": "Bosnia y Herzegovina",
        "away": "Catar",
        "homeScore": 3,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 13,
        "date": "2026-06-13",
        "stage": "Fase de grupos",
        "group": "C",
        "home": "Brasil",
        "away": "Marruecos",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 14,
        "date": "2026-06-13",
        "stage": "Fase de grupos",
        "group": "C",
        "home": "Haití",
        "away": "Escocia",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 15,
        "date": "2026-06-19",
        "stage": "Fase de grupos",
        "group": "C",
        "home": "Escocia",
        "away": "Marruecos",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 16,
        "date": "2026-06-19",
        "stage": "Fase de grupos",
        "group": "C",
        "home": "Brasil",
        "away": "Haití",
        "homeScore": 3,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 17,
        "date": "2026-06-24",
        "stage": "Fase de grupos",
        "group": "C",
        "home": "Escocia",
        "away": "Brasil",
        "homeScore": 0,
        "awayScore": 3,
        "note": "",
        "venue": ""
    },
    {
        "id": 18,
        "date": "2026-06-24",
        "stage": "Fase de grupos",
        "group": "C",
        "home": "Marruecos",
        "away": "Haití",
        "homeScore": 4,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 19,
        "date": "2026-06-12",
        "stage": "Fase de grupos",
        "group": "D",
        "home": "Estados Unidos",
        "away": "Paraguay",
        "homeScore": 4,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 20,
        "date": "2026-06-13",
        "stage": "Fase de grupos",
        "group": "D",
        "home": "Australia",
        "away": "Turquía",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 21,
        "date": "2026-06-19",
        "stage": "Fase de grupos",
        "group": "D",
        "home": "Estados Unidos",
        "away": "Australia",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 22,
        "date": "2026-06-19",
        "stage": "Fase de grupos",
        "group": "D",
        "home": "Turquía",
        "away": "Paraguay",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 23,
        "date": "2026-06-25",
        "stage": "Fase de grupos",
        "group": "D",
        "home": "Turquía",
        "away": "Estados Unidos",
        "homeScore": 3,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 24,
        "date": "2026-06-25",
        "stage": "Fase de grupos",
        "group": "D",
        "home": "Paraguay",
        "away": "Australia",
        "homeScore": 0,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 25,
        "date": "2026-06-14",
        "stage": "Fase de grupos",
        "group": "E",
        "home": "Alemania",
        "away": "Curazao",
        "homeScore": 7,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 26,
        "date": "2026-06-14",
        "stage": "Fase de grupos",
        "group": "E",
        "home": "Costa de Marfil",
        "away": "Ecuador",
        "homeScore": 1,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 27,
        "date": "2026-06-20",
        "stage": "Fase de grupos",
        "group": "E",
        "home": "Alemania",
        "away": "Costa de Marfil",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 28,
        "date": "2026-06-20",
        "stage": "Fase de grupos",
        "group": "E",
        "home": "Ecuador",
        "away": "Curazao",
        "homeScore": 0,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 29,
        "date": "2026-06-25",
        "stage": "Fase de grupos",
        "group": "E",
        "home": "Ecuador",
        "away": "Alemania",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 30,
        "date": "2026-06-25",
        "stage": "Fase de grupos",
        "group": "E",
        "home": "Curazao",
        "away": "Costa de Marfil",
        "homeScore": 0,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 31,
        "date": "2026-06-14",
        "stage": "Fase de grupos",
        "group": "F",
        "home": "Países Bajos",
        "away": "Japón",
        "homeScore": 2,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 32,
        "date": "2026-06-14",
        "stage": "Fase de grupos",
        "group": "F",
        "home": "Suecia",
        "away": "Túnez",
        "homeScore": 5,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 33,
        "date": "2026-06-20",
        "stage": "Fase de grupos",
        "group": "F",
        "home": "Países Bajos",
        "away": "Suecia",
        "homeScore": 5,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 34,
        "date": "2026-06-20",
        "stage": "Fase de grupos",
        "group": "F",
        "home": "Túnez",
        "away": "Japón",
        "homeScore": 0,
        "awayScore": 4,
        "note": "",
        "venue": ""
    },
    {
        "id": 35,
        "date": "2026-06-25",
        "stage": "Fase de grupos",
        "group": "F",
        "home": "Túnez",
        "away": "Países Bajos",
        "homeScore": 1,
        "awayScore": 3,
        "note": "",
        "venue": ""
    },
    {
        "id": 36,
        "date": "2026-06-25",
        "stage": "Fase de grupos",
        "group": "F",
        "home": "Japón",
        "away": "Suecia",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 37,
        "date": "2026-06-15",
        "stage": "Fase de grupos",
        "group": "G",
        "home": "Bélgica",
        "away": "Egipto",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 38,
        "date": "2026-06-15",
        "stage": "Fase de grupos",
        "group": "G",
        "home": "Irán",
        "away": "Nueva Zelanda",
        "homeScore": 2,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 39,
        "date": "2026-06-21",
        "stage": "Fase de grupos",
        "group": "G",
        "home": "Bélgica",
        "away": "Irán",
        "homeScore": 0,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 40,
        "date": "2026-06-21",
        "stage": "Fase de grupos",
        "group": "G",
        "home": "Nueva Zelanda",
        "away": "Egipto",
        "homeScore": 1,
        "awayScore": 3,
        "note": "",
        "venue": ""
    },
    {
        "id": 41,
        "date": "2026-06-26",
        "stage": "Fase de grupos",
        "group": "G",
        "home": "Nueva Zelanda",
        "away": "Bélgica",
        "homeScore": 1,
        "awayScore": 5,
        "note": "",
        "venue": ""
    },
    {
        "id": 42,
        "date": "2026-06-26",
        "stage": "Fase de grupos",
        "group": "G",
        "home": "Egipto",
        "away": "Irán",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 43,
        "date": "2026-06-15",
        "stage": "Fase de grupos",
        "group": "H",
        "home": "España",
        "away": "Cabo Verde",
        "homeScore": 0,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 44,
        "date": "2026-06-15",
        "stage": "Fase de grupos",
        "group": "H",
        "home": "Arabia Saudita",
        "away": "Uruguay",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 45,
        "date": "2026-06-21",
        "stage": "Fase de grupos",
        "group": "H",
        "home": "España",
        "away": "Arabia Saudita",
        "homeScore": 4,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 46,
        "date": "2026-06-21",
        "stage": "Fase de grupos",
        "group": "H",
        "home": "Uruguay",
        "away": "Cabo Verde",
        "homeScore": 2,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 47,
        "date": "2026-06-26",
        "stage": "Fase de grupos",
        "group": "H",
        "home": "Uruguay",
        "away": "España",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 48,
        "date": "2026-06-26",
        "stage": "Fase de grupos",
        "group": "H",
        "home": "Cabo Verde",
        "away": "Arabia Saudita",
        "homeScore": 0,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 49,
        "date": "2026-06-16",
        "stage": "Fase de grupos",
        "group": "I",
        "home": "Francia",
        "away": "Senegal",
        "homeScore": 3,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 50,
        "date": "2026-06-16",
        "stage": "Fase de grupos",
        "group": "I",
        "home": "Irak",
        "away": "Noruega",
        "homeScore": 1,
        "awayScore": 4,
        "note": "",
        "venue": ""
    },
    {
        "id": 51,
        "date": "2026-06-22",
        "stage": "Fase de grupos",
        "group": "I",
        "home": "Francia",
        "away": "Irak",
        "homeScore": 3,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 52,
        "date": "2026-06-22",
        "stage": "Fase de grupos",
        "group": "I",
        "home": "Noruega",
        "away": "Senegal",
        "homeScore": 3,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 53,
        "date": "2026-06-26",
        "stage": "Fase de grupos",
        "group": "I",
        "home": "Noruega",
        "away": "Francia",
        "homeScore": 1,
        "awayScore": 4,
        "note": "",
        "venue": ""
    },
    {
        "id": 54,
        "date": "2026-06-26",
        "stage": "Fase de grupos",
        "group": "I",
        "home": "Senegal",
        "away": "Irak",
        "homeScore": 5,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 55,
        "date": "2026-06-16",
        "stage": "Fase de grupos",
        "group": "J",
        "home": "Argentina",
        "away": "Argelia",
        "homeScore": 3,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 56,
        "date": "2026-06-16",
        "stage": "Fase de grupos",
        "group": "J",
        "home": "Austria",
        "away": "Jordania",
        "homeScore": 3,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 57,
        "date": "2026-06-22",
        "stage": "Fase de grupos",
        "group": "J",
        "home": "Argentina",
        "away": "Austria",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 58,
        "date": "2026-06-22",
        "stage": "Fase de grupos",
        "group": "J",
        "home": "Jordania",
        "away": "Argelia",
        "homeScore": 1,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 59,
        "date": "2026-06-27",
        "stage": "Fase de grupos",
        "group": "J",
        "home": "Jordania",
        "away": "Argentina",
        "homeScore": 1,
        "awayScore": 3,
        "note": "",
        "venue": ""
    },
    {
        "id": 60,
        "date": "2026-06-27",
        "stage": "Fase de grupos",
        "group": "J",
        "home": "Argelia",
        "away": "Austria",
        "homeScore": 3,
        "awayScore": 3,
        "note": "",
        "venue": ""
    },
    {
        "id": 61,
        "date": "2026-06-17",
        "stage": "Fase de grupos",
        "group": "K",
        "home": "Portugal",
        "away": "RD del Congo",
        "homeScore": 1,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 62,
        "date": "2026-06-17",
        "stage": "Fase de grupos",
        "group": "K",
        "home": "Uzbekistán",
        "away": "Colombia",
        "homeScore": 1,
        "awayScore": 3,
        "note": "",
        "venue": ""
    },
    {
        "id": 63,
        "date": "2026-06-23",
        "stage": "Fase de grupos",
        "group": "K",
        "home": "Portugal",
        "away": "Uzbekistán",
        "homeScore": 5,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 64,
        "date": "2026-06-23",
        "stage": "Fase de grupos",
        "group": "K",
        "home": "Colombia",
        "away": "RD del Congo",
        "homeScore": 1,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 65,
        "date": "2026-06-27",
        "stage": "Fase de grupos",
        "group": "K",
        "home": "Colombia",
        "away": "Portugal",
        "homeScore": 0,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 66,
        "date": "2026-06-27",
        "stage": "Fase de grupos",
        "group": "K",
        "home": "RD del Congo",
        "away": "Uzbekistán",
        "homeScore": 3,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 67,
        "date": "2026-06-17",
        "stage": "Fase de grupos",
        "group": "L",
        "home": "Inglaterra",
        "away": "Croacia",
        "homeScore": 4,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 68,
        "date": "2026-06-17",
        "stage": "Fase de grupos",
        "group": "L",
        "home": "Ghana",
        "away": "Panamá",
        "homeScore": 1,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 69,
        "date": "2026-06-23",
        "stage": "Fase de grupos",
        "group": "L",
        "home": "Inglaterra",
        "away": "Ghana",
        "homeScore": 0,
        "awayScore": 0,
        "note": "",
        "venue": ""
    },
    {
        "id": 70,
        "date": "2026-06-23",
        "stage": "Fase de grupos",
        "group": "L",
        "home": "Panamá",
        "away": "Croacia",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 71,
        "date": "2026-06-27",
        "stage": "Fase de grupos",
        "group": "L",
        "home": "Panamá",
        "away": "Inglaterra",
        "homeScore": 0,
        "awayScore": 2,
        "note": "",
        "venue": ""
    },
    {
        "id": 72,
        "date": "2026-06-27",
        "stage": "Fase de grupos",
        "group": "L",
        "home": "Croacia",
        "away": "Ghana",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": ""
    },
    {
        "id": 73,
        "date": "2026-06-28",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Sudáfrica",
        "away": "Canadá",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": "Estadio Los Ángeles"
    },
    {
        "id": 74,
        "date": "2026-06-29",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Alemania",
        "away": "Paraguay",
        "homeScore": 1,
        "awayScore": 1,
        "note": "Paraguay ganó 4-3 en penales",
        "venue": "Estadio Boston"
    },
    {
        "id": 75,
        "date": "2026-06-29",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Países Bajos",
        "away": "Marruecos",
        "homeScore": 1,
        "awayScore": 1,
        "note": "Marruecos ganó 3-2 en penales",
        "venue": "Estadio Monterrey"
    },
    {
        "id": 76,
        "date": "2026-06-29",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Brasil",
        "away": "Japón",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": "Estadio Houston"
    },
    {
        "id": 77,
        "date": "2026-06-30",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Francia",
        "away": "Suecia",
        "homeScore": 3,
        "awayScore": 0,
        "note": "",
        "venue": "Estadio Nueva York/Nueva Jersey"
    },
    {
        "id": 78,
        "date": "2026-06-30",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Costa de Marfil",
        "away": "Noruega",
        "homeScore": 1,
        "awayScore": 2,
        "note": "",
        "venue": "Estadio Dallas"
    },
    {
        "id": 79,
        "date": "2026-06-30",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "México",
        "away": "Ecuador",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": "Estadio Ciudad de México"
    },
    {
        "id": 80,
        "date": "2026-07-01",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Inglaterra",
        "away": "RD del Congo",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": "Estadio Atlanta"
    },
    {
        "id": 81,
        "date": "2026-07-01",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Estados Unidos",
        "away": "Bosnia y Herzegovina",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": "Estadio Bahía de San Francisco"
    },
    {
        "id": 82,
        "date": "2026-07-01",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Bélgica",
        "away": "Senegal",
        "homeScore": 3,
        "awayScore": 2,
        "note": "Tras prórroga",
        "venue": "Estadio Seattle"
    },
    {
        "id": 83,
        "date": "2026-07-02",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Portugal",
        "away": "Croacia",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": "Estadio Toronto"
    },
    {
        "id": 84,
        "date": "2026-07-02",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "España",
        "away": "Austria",
        "homeScore": 3,
        "awayScore": 0,
        "note": "",
        "venue": "Estadio Los Ángeles"
    },
    {
        "id": 85,
        "date": "2026-07-02",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Suiza",
        "away": "Argelia",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": "BC Place Vancouver"
    },
    {
        "id": 86,
        "date": "2026-07-03",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Argentina",
        "away": "Cabo Verde",
        "homeScore": 3,
        "awayScore": 2,
        "note": "Tras prórroga",
        "venue": "Estadio Miami"
    },
    {
        "id": 87,
        "date": "2026-07-03",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Colombia",
        "away": "Ghana",
        "homeScore": 1,
        "awayScore": 0,
        "note": "",
        "venue": "Estadio Kansas City"
    },
    {
        "id": 88,
        "date": "2026-07-03",
        "stage": "Dieciseisavos",
        "group": "",
        "home": "Australia",
        "away": "Egipto",
        "homeScore": 1,
        "awayScore": 1,
        "note": "Egipto ganó 4-2 en penales",
        "venue": "Estadio Dallas"
    },
    {
        "id": 89,
        "date": "2026-07-04",
        "stage": "Octavos de final",
        "group": "",
        "home": "Paraguay",
        "away": "Francia",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": "Estadio Filadelfia"
    },
    {
        "id": 90,
        "date": "2026-07-04",
        "stage": "Octavos de final",
        "group": "",
        "home": "Canadá",
        "away": "Marruecos",
        "homeScore": 0,
        "awayScore": 3,
        "note": "",
        "venue": "Estadio Houston"
    },
    {
        "id": 91,
        "date": "2026-07-05",
        "stage": "Octavos de final",
        "group": "",
        "home": "Brasil",
        "away": "Noruega",
        "homeScore": 1,
        "awayScore": 2,
        "note": "",
        "venue": "Estadio Nueva York/Nueva Jersey"
    },
    {
        "id": 92,
        "date": "2026-07-05",
        "stage": "Octavos de final",
        "group": "",
        "home": "México",
        "away": "Inglaterra",
        "homeScore": 2,
        "awayScore": 3,
        "note": "",
        "venue": "Estadio Ciudad de México"
    },
    {
        "id": 93,
        "date": "2026-07-06",
        "stage": "Octavos de final",
        "group": "",
        "home": "Portugal",
        "away": "España",
        "homeScore": 0,
        "awayScore": 1,
        "note": "",
        "venue": "Estadio Dallas"
    },
    {
        "id": 94,
        "date": "2026-07-06",
        "stage": "Octavos de final",
        "group": "",
        "home": "Estados Unidos",
        "away": "Bélgica",
        "homeScore": 1,
        "awayScore": 4,
        "note": "",
        "venue": "Estadio Seattle"
    },
    {
        "id": 95,
        "date": "2026-07-07",
        "stage": "Octavos de final",
        "group": "",
        "home": "Argentina",
        "away": "Egipto",
        "homeScore": 3,
        "awayScore": 2,
        "note": "",
        "venue": "Estadio Atlanta"
    },
    {
        "id": 96,
        "date": "2026-07-07",
        "stage": "Octavos de final",
        "group": "",
        "home": "Suiza",
        "away": "Colombia",
        "homeScore": 0,
        "awayScore": 0,
        "note": "Suiza ganó 4-3 en penales",
        "venue": "BC Place Vancouver"
    },
    {
        "id": 97,
        "date": "2026-07-09",
        "stage": "Cuartos de final",
        "group": "",
        "home": "Francia",
        "away": "Marruecos",
        "homeScore": 2,
        "awayScore": 0,
        "note": "",
        "venue": "Estadio Boston"
    },
    {
        "id": 98,
        "date": "2026-07-10",
        "stage": "Cuartos de final",
        "group": "",
        "home": "España",
        "away": "Bélgica",
        "homeScore": 2,
        "awayScore": 1,
        "note": "",
        "venue": "Estadio Los Ángeles"
    },
    {
        "id": 99,
        "date": "2026-07-11",
        "stage": "Cuartos de final",
        "group": "",
        "home": "Noruega",
        "away": "Inglaterra",
        "homeScore": 1,
        "awayScore": 2,
        "note": "Tras prórroga",
        "venue": "Estadio Miami"
    },
    {
        "id": 100,
        "date": "2026-07-11",
        "stage": "Cuartos de final",
        "group": "",
        "home": "Argentina",
        "away": "Suiza",
        "homeScore": 3,
        "awayScore": 1,
        "note": "Tras prórroga",
        "venue": "Estadio Kansas City"
    },
    {
        "id": 101,
        "date": "2026-07-14",
        "stage": "Semifinal",
        "group": "",
        "home": "Francia",
        "away": "España",
        "homeScore": 0,
        "awayScore": 2,
        "note": "",
        "venue": "Estadio Dallas"
    },
    {
        "id": 102,
        "date": "2026-07-15",
        "stage": "Semifinal",
        "group": "",
        "home": "Inglaterra",
        "away": "Argentina",
        "homeScore": 1,
        "awayScore": 2,
        "note": "",
        "venue": "Estadio Atlanta"
    },
    {
        "id": 103,
        "date": "2026-07-18",
        "stage": "Tercer puesto",
        "group": "",
        "home": "Francia",
        "away": "Inglaterra",
        "homeScore": 4,
        "awayScore": 6,
        "note": "",
        "venue": "Estadio Miami"
    },
    {
        "id": 104,
        "date": "2026-07-19",
        "stage": "Final",
        "group": "",
        "home": "España",
        "away": "Argentina",
        "homeScore": 1,
        "awayScore": 0,
        "note": "Tras prórroga",
        "venue": "Estadio Nueva York/Nueva Jersey"
    }
];

const COLOMBIA_TIMELINE = [
    {
        "title": "Regreso al Mundial",
        "text": "Colombia volvió a la Copa Mundial tras no disputar Catar 2022. Fue su séptima participación en la competición."
    },
    {
        "title": "Líder del Grupo K",
        "text": "La Tricolor sumó 7 puntos: venció 3-1 a Uzbekistán, 1-0 a RD del Congo y empató 0-0 con Portugal."
    },
    {
        "title": "Victoria ante Ghana",
        "text": "En dieciseisavos de final, Colombia superó 1-0 a Ghana en Kansas City y avanzó a octavos."
    },
    {
        "title": "Eliminación por penales",
        "text": "Colombia empató 0-0 con Suiza tras 120 minutos. En la tanda, Suiza ganó 4-3."
    },
    {
        "title": "Décimo lugar final",
        "text": "FIFA ubicó a Colombia en la posición 10 de la clasificación final del torneo."
    }
];

const TOURNAMENT_FACTS = [
    {"value":"48","label":"Selecciones","description":"La edición más grande del Mundial hasta ese momento."},
    {"value":"104","label":"Partidos","description":"72 de fase de grupos y 32 de eliminación directa."},
    {"value":"3","label":"Países anfitriones","description":"Canadá, México y Estados Unidos."},
    {"value":"🇪🇸","label":"España campeona","description":"Venció 1-0 a Argentina tras prórroga en la final."}
];

const PROJECT_TEAM = [
    "Diego Hernán Romero",
    "Axel Lozano",
    "Felipe Rincón"
];

/* =========================================================
   CONTENIDO EDITORIAL — COLOMBIA
   Resúmenes periodísticos basados en crónicas oficiales FIFA.
   Las fuentes completas están documentadas en docs/FUENTES.md.
   ========================================================= */

const COLOMBIA_MATCH_STORIES = [
    {
        id: "uzb-col",
        date: "17 JUN 2026",
        stage: "Grupo K",
        venue: "Estadio Ciudad de México",
        home: "Uzbekistán",
        away: "Colombia",
        score: "1 — 3",
        headline: "Díaz encendió el regreso y Colombia respondió cuando el partido se calentó",
        deck: "Ocho años después de su última Copa Mundial, la Tricolor volvió con autoridad: Daniel Muñoz abrió el camino, Luis Díaz desequilibró el duelo y Jáminton Campaz cerró la noche.",
        paragraphs: [
            "Colombia tomó la iniciativa desde el comienzo y fue empujando a Uzbekistán hacia su propio campo. Jhon Arias avisó desde media distancia y Luis Díaz empezó a encontrar espacios por el costado izquierdo.",
            "El primer golpe llegó a los 40 minutos: Díaz leyó la espalda de la defensa y encontró a Daniel Muñoz, que definió con calidad. Uzbekistán empató a los 60 y por unos minutos cambió el ánimo del partido, pero Colombia no se desordenó.",
            "Cinco minutos después apareció Luis Díaz para devolver la ventaja. En el cierre, con Uzbekistán volcado al ataque, Cucho Hernández recuperó una pelota y Jáminton Campaz marcó el 3-1 definitivo en el tiempo añadido.",
            "La lectura general fue positiva: Colombia mostró capacidad para dominar, pero también carácter para reaccionar después de recibir el empate. Ese equilibrio entre talento y respuesta competitiva fue una de las señales más fuertes del debut."
        ],
        keyPlayers: [
            {name: "Luis Díaz", role: "Figura", detail: "Gol, asistencia y Jugador del Partido FIFA."},
            {name: "Daniel Muñoz", role: "Determinante", detail: "Marcó el primer gol y atacó constantemente desde el lateral."},
            {name: "Jáminton Campaz", role: "Impacto", detail: "Entró desde el banco y sentenció el encuentro en el 90+9."}
        ],
        stat: "Luis Díaz fue elegido Jugador del Partido por FIFA.",
        verdict: "Colombia ganó porque mantuvo la agresividad incluso después del 1-1.",
        source: "https://www.fifa.com/ar/tournaments/mens/worldcup/canadamexicousa2026/articles/uzbekistan-colombia-match-report-highlights-ar"
    },
    {
        id: "col-cod",
        date: "23 JUN 2026",
        stage: "Grupo K",
        venue: "Estadio Guadalajara",
        home: "Colombia",
        away: "RD del Congo",
        score: "1 — 0",
        headline: "Paciencia, insistencia y otra aparición de Muñoz",
        deck: "RD del Congo resistió durante más de una hora, pero Colombia nunca abandonó su idea. Daniel Muñoz volvió a aparecer en el momento exacto.",
        paragraphs: [
            "El encuentro fue más cerrado que el debut. Colombia tuvo la pelota, encontró situaciones y obligó al arquero Lionel Mpasi a intervenir, especialmente ante Jhon Arias.",
            "Luis Díaz fue una amenaza constante y llegó a marcar dos veces, aunque ambas acciones fueron anuladas por fuera de juego. La sensación era de dominio colombiano, pero sin el premio del gol.",
            "La resistencia congoleña se rompió a los 76 minutos. Daniel Muñoz, otra vez llegando desde el costado, convirtió el 1-0 y aseguró la clasificación de Colombia a la fase eliminatoria.",
            "Fue un partido que exigió madurez: menos espacios, menos vértigo y más paciencia. Colombia no necesitó jugar su encuentro más espectacular para mostrar que podía resolver un escenario incómodo."
        ],
        keyPlayers: [
            {name: "Daniel Muñoz", role: "Jugador del Partido", detail: "Gol del triunfo y segundo partido consecutivo marcando."},
            {name: "Jhon Arias", role: "Generador", detail: "Obligó a Mpasi a intervenir y fue una salida permanente."},
            {name: "Luis Díaz", role: "Amenaza", detail: "Tuvo dos goles anulados por fuera de juego."}
        ],
        stat: "Daniel Muñoz marcó en los dos primeros partidos de Colombia en el Mundial.",
        verdict: "La Tricolor resolvió un partido de paciencia sin traicionar su intención ofensiva.",
        source: "https://www.fifa.com/en/articles/colombia-congo-dr-match-report-highlights"
    },
    {
        id: "col-por",
        date: "27 JUN 2026",
        stage: "Grupo K",
        venue: "Estadio Miami",
        home: "Colombia",
        away: "Portugal",
        score: "0 — 0",
        headline: "El 0-0 que pareció mucho más: Colombia jugó de igual a igual con Portugal",
        deck: "No hubo goles, pero sí uno de los partidos más completos de la fase de grupos para Colombia. La Tricolor terminó líder del Grupo K y dejó 24 remates como señal de su ambición.",
        paragraphs: [
            "Colombia no salió a especular con el empate. Durante buena parte del primer tiempo tomó la iniciativa y generó situaciones con Jhon Córdoba, Luis Díaz y Jhon Arias. Diogo Costa sostuvo a Portugal.",
            "Portugal respondió con Bruno Fernandes y João Félix, obligando a Camilo Vargas a mantenerse atento. El duelo se convirtió en un intercambio de ataques y presión alta.",
            "En la segunda mitad, Richard Ríos quedó a centímetros del gol y Colombia volvió a empujar con Díaz y Arias. En el cierre, un cabezazo de Davinson Sánchez terminó en la red, pero la jugada fue anulada por fuera de juego.",
            "Más allá del marcador, el partido dejó una conclusión periodística clara: Colombia no se sintió inferior ante una candidata. Lideró el grupo porque buscó ganar hasta el final y no porque se limitara a administrar el resultado."
        ],
        keyPlayers: [
            {name: "James Rodríguez", role: "Director", detail: "Manejó ritmos y se convirtió en el colombiano con más partidos mundialistas: 11."},
            {name: "Jhon Arias", role: "Motor", detail: "Generó peligro por derecha y exigió a la defensa portuguesa."},
            {name: "Richard Ríos", role: "Equilibrio", detail: "Sostuvo el mediocampo y tuvo una de las ocasiones más claras."},
            {name: "Camilo Vargas", role: "Seguro", detail: "Respondió ante una llegada peligrosa de Bruno Fernandes."}
        ],
        stat: "Colombia registró 24 remates y terminó primera del Grupo K.",
        verdict: "El resultado fue 0-0; el mensaje futbolístico fue mucho más grande.",
        source: "https://www.fifa.com/es/tournaments/mens/worldcup/canadamexicousa2026/articles/videos-goles-colombia-portugal-copa-mundial-resumen-highlights"
    },
    {
        id: "col-gha",
        date: "03 JUL 2026",
        stage: "Dieciseisavos",
        venue: "Estadio Kansas City",
        home: "Colombia",
        away: "Ghana",
        score: "1 — 0",
        headline: "Arias encontró el espacio y Colombia aprendió a ganar un mata-mata",
        deck: "La Tricolor no necesitó una goleada. Jhon Arias marcó la diferencia y el equipo administró el partido con una madurez que Ghana no pudo romper.",
        paragraphs: [
            "Colombia llevó la iniciativa y fue acumulando llegadas. Luis Díaz tuvo una ocasión clara, Johan Mojica obligó a Lawrence Ati-Zigi a una gran intervención y la presión fue creciendo.",
            "En el segundo tiempo, Jhon Arias consiguió el 1-0. Díaz también llegó a convertir, pero su gol fue anulado por un fuera de juego muy ajustado.",
            "Después de ponerse en ventaja, Colombia defendió con orden y redujo al mínimo la producción ofensiva de Ghana. El equipo africano terminó sin disparos a portería.",
            "Fue uno de los partidos más maduros del torneo para Colombia. No se volvió un intercambio abierto; la Tricolor controló el ritmo, protegió la ventaja y entendió cómo cerrar una eliminatoria."
        ],
        keyPlayers: [
            {name: "Luis Díaz", role: "Jugador del Partido", detail: "Fue la principal amenaza ofensiva y recibió el premio FIFA."},
            {name: "Jhon Arias", role: "Decisivo", detail: "Marcó el único gol del encuentro."},
            {name: "Johan Mojica", role: "Profundidad", detail: "Llegó al área y estuvo cerca de marcar de cabeza."}
        ],
        stat: "Ghana terminó el partido sin remates a portería.",
        verdict: "Colombia ganó el partido desde el control, no desde el caos.",
        source: "https://www.fifa.com/it/tournaments/mens/worldcup/canadamexicousa2026/articles/colombia-ghana-arias-mondiali-2026-sintesi-highlights"
    },
    {
        id: "sui-col",
        date: "07 JUL 2026",
        stage: "Octavos de final",
        venue: "BC Place Vancouver",
        home: "Suiza",
        away: "Colombia",
        score: "0 — 0 · PEN 4-3",
        headline: "Una eliminación sin derrota: Colombia se quedó a centímetros",
        deck: "Colombia fue superior durante varios pasajes y tuvo el travesaño de Jhon Lucumí en la prórroga, pero Gregor Kobel y la tanda de penales cambiaron la historia.",
        paragraphs: [
            "El primer tiempo tuvo más control colombiano que ocasiones claras. Gustavo Puerta encontró una ventana desde fuera del área y obligó a Gregor Kobel a una de las mejores atajadas de la noche.",
            "El partido se hizo cada vez más cerrado. Colombia siguió intentando con Luis Suárez y, ya en la prórroga, Jhon Lucumí estrelló un cabezazo en el travesaño. Jáminton Campaz también tuvo una ocasión inmejorable que terminó por encima del arco.",
            "En la tanda, Davinson Sánchez golpeó el travesaño y Kobel detuvo el remate de Cucho Hernández. Ruben Vargas convirtió el penal definitivo para Suiza.",
            "Colombia se fue del Mundial sin perder un partido en tiempo reglamentario o prórroga. La eliminación expuso el límite más duro del torneo: producir más no siempre significa convertir. El equipo compitió, pero pagó la falta de precisión en el momento de mayor tensión."
        ],
        keyPlayers: [
            {name: "Gregor Kobel", role: "Jugador del Partido", detail: "Sostuvo a Suiza y detuvo un penal en la tanda."},
            {name: "Jhon Lucumí", role: "A centímetros", detail: "Su cabezazo en la prórroga golpeó el travesaño."},
            {name: "Gustavo Puerta", role: "Claridad", detail: "Probó desde media distancia y obligó a una gran atajada de Kobel."},
            {name: "Camilo Vargas", role: "Respuesta", detail: "Mantuvo el arco colombiano en cero durante 120 minutos."}
        ],
        stat: "Colombia quedó eliminada sin recibir goles durante los 120 minutos.",
        verdict: "La campaña terminó por penales, no por inferioridad futbolística.",
        source: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/switzerland-colombia-match-report-highlights"
    }
];

const COLOMBIA_PLAYER_SPOTLIGHTS = [
    {
        name: "Luis Díaz",
        tag: "El desequilibrio",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Luis_Diaz_(cropped).jpg",
        alt: "Luis Díaz con la Selección Colombia",
        text: "Fue el colombiano con más premios de Jugador del Partido en el torneo: FIFA lo eligió ante Uzbekistán y Ghana. En el debut marcó y asistió; durante toda la campaña fue la referencia para romper defensas.",
        metric: "2 × Jugador del Partido",
        credit: "Foto: Wikimedia Commons"
    },
    {
        name: "Daniel Muñoz",
        tag: "El lateral goleador",
        image: "",
        alt: "",
        text: "Marcó frente a Uzbekistán y RD del Congo. Su llegada desde segunda línea convirtió el lateral derecho en una fuente de gol inesperada y fue elegido Jugador del Partido en Guadalajara.",
        metric: "2 goles",
        credit: ""
    },
    {
        name: "Jhon Arias",
        tag: "El motor",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jhon_Arias.jpg",
        alt: "Jhon Arias con la Selección Colombia",
        text: "Apareció de forma constante entre líneas y por derecha. Fue protagonista ante Portugal y marcó el gol que eliminó a Ghana en dieciseisavos.",
        metric: "Gol decisivo vs. Ghana",
        credit: "Foto: Wikimedia Commons"
    },
    {
        name: "James Rodríguez",
        tag: "El director",
        image: "https://commons.wikimedia.org/wiki/Special:Redirect/file/James_Rodríguez_(cropped).jpg",
        alt: "James Rodríguez con la Selección Colombia",
        text: "FIFA lo presentó como el principal líder de la generación. Contra Portugal alcanzó 11 partidos mundialistas y se convirtió en el colombiano con más presencias en la competición.",
        metric: "Récord: 11 partidos mundialistas",
        credit: "Foto: Wikimedia Commons"
    }
];

const WORLD_CUP_AWARDS = [
    {icon: "🏆", title: "Balón de Oro", name: "Rodri", country: "España", detail: "FIFA lo eligió mejor jugador del torneo."},
    {icon: "⚽", title: "Bota de Oro", name: "Kylian Mbappé", country: "Francia", detail: "Terminó como máximo goleador con 10 tantos."},
    {icon: "🧤", title: "Guante de Oro", name: "Unai Simón", country: "España", detail: "Logró siete porterías a cero en ocho partidos."},
    {icon: "⭐", title: "Mejor joven", name: "Pau Cubarsí", country: "España", detail: "Fue pieza clave de una defensa que solo recibió un gol."}
];

const UMB_PROJECT = {
    title: "Mundial 2026: Colombia en Norteamérica",
    course: "Ingeniería Web I",
    guide: "Guía 3 · Proyecto Integrador · Diseño del Front-End",
    university: "Universidad Manuela Beltrán",
    students: ["Diego Hernán Romero", "Axel Lozano", "Felipe Rincón"]
};

