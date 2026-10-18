USE mundial2026_umb;
SELECT COUNT(*) AS total_partidos FROM partidos;
SELECT COUNT(*) AS total_cronicas FROM cronicas;
SELECT fase,COUNT(*) AS partidos FROM partidos GROUP BY fase ORDER BY partidos DESC;
SELECT local,visitante,goles_local,goles_visitante FROM partidos WHERE local='Colombia' OR visitante='Colombia' ORDER BY fecha;
SELECT id,nombre,correo,favorito,mensaje,estado,creado_en FROM comentarios ORDER BY id DESC LIMIT 10;
SELECT id,titulo,publicado_en FROM cronicas ORDER BY publicado_en DESC;
