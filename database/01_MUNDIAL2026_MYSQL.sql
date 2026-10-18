-- BASE DE DATOS DEL PROYECTO MUNDIAL 2026 · UMB
-- Motor: MySQL 8.0.16+ | utf8mb4 | InnoDB
-- Los 104 resultados provienen del data.js del proyecto académico anterior.
-- Este archivo es editable y puede importarse en MySQL Workbench.

CREATE DATABASE IF NOT EXISTS mundial2026_umb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mundial2026_umb;

CREATE TABLE IF NOT EXISTS partidos (
 id INT UNSIGNED NOT NULL PRIMARY KEY,
 fecha DATE NOT NULL,
 fase VARCHAR(40) NOT NULL,
 grupo CHAR(1) NULL,
 local VARCHAR(90) NOT NULL,
 visitante VARCHAR(90) NOT NULL,
 goles_local TINYINT UNSIGNED NOT NULL,
 goles_visitante TINYINT UNSIGNED NOT NULL,
 nota VARCHAR(250) NOT NULL DEFAULT '',
 sede VARCHAR(160) NOT NULL DEFAULT '',
 INDEX idx_partidos_fecha(fecha),
 INDEX idx_partidos_fase_grupo(fase, grupo),
 INDEX idx_partidos_local(local),
 INDEX idx_partidos_visitante(visitante)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS cronicas (
 id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 partido_id INT UNSIGNED NULL,
 titulo VARCHAR(180) NOT NULL,
 subtitulo VARCHAR(240) NOT NULL,
 cuerpo TEXT NOT NULL,
 etiqueta VARCHAR(50) NOT NULL DEFAULT 'Análisis académico',
 destacado TINYINT(1) NOT NULL DEFAULT 0,
 publicado_en DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 FOREIGN KEY (partido_id) REFERENCES partidos(id) ON DELETE SET NULL,
 INDEX idx_cronicas_fecha(publicado_en)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS comentarios (
 id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 nombre VARCHAR(100) NOT NULL,
 correo VARCHAR(180) NOT NULL,
 favorito VARCHAR(100) NOT NULL,
 mensaje TEXT NOT NULL,
 estado ENUM('visible','oculto') NOT NULL DEFAULT 'visible',
 creado_en DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
 INDEX idx_comentarios_estado_fecha(estado, creado_en)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS suscripciones (
 id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 correo VARCHAR(180) NOT NULL UNIQUE,
 creado_en DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- La clave primaria hace idempotente el script de resultados.
INSERT INTO partidos
(id,fecha,fase,grupo,local,visitante,goles_local,goles_visitante,nota,sede) VALUES
(1, '2026-06-11', 'Fase de grupos', 'A', 'México', 'Sudáfrica', 2, 0, '', ''),
(2, '2026-06-11', 'Fase de grupos', 'A', 'República de Corea', 'Chequia', 2, 1, '', ''),
(3, '2026-06-18', 'Fase de grupos', 'A', 'Chequia', 'Sudáfrica', 1, 1, '', ''),
(4, '2026-06-18', 'Fase de grupos', 'A', 'México', 'República de Corea', 1, 0, '', ''),
(5, '2026-06-24', 'Fase de grupos', 'A', 'Chequia', 'México', 0, 3, '', ''),
(6, '2026-06-24', 'Fase de grupos', 'A', 'Sudáfrica', 'República de Corea', 1, 0, '', ''),
(7, '2026-06-12', 'Fase de grupos', 'B', 'Canadá', 'Bosnia y Herzegovina', 1, 1, '', ''),
(8, '2026-06-13', 'Fase de grupos', 'B', 'Catar', 'Suiza', 1, 1, '', ''),
(9, '2026-06-18', 'Fase de grupos', 'B', 'Suiza', 'Bosnia y Herzegovina', 4, 1, '', ''),
(10, '2026-06-18', 'Fase de grupos', 'B', 'Canadá', 'Catar', 6, 0, '', ''),
(11, '2026-06-24', 'Fase de grupos', 'B', 'Suiza', 'Canadá', 2, 1, '', ''),
(12, '2026-06-24', 'Fase de grupos', 'B', 'Bosnia y Herzegovina', 'Catar', 3, 1, '', ''),
(13, '2026-06-13', 'Fase de grupos', 'C', 'Brasil', 'Marruecos', 1, 1, '', ''),
(14, '2026-06-13', 'Fase de grupos', 'C', 'Haití', 'Escocia', 0, 1, '', ''),
(15, '2026-06-19', 'Fase de grupos', 'C', 'Escocia', 'Marruecos', 0, 1, '', ''),
(16, '2026-06-19', 'Fase de grupos', 'C', 'Brasil', 'Haití', 3, 0, '', ''),
(17, '2026-06-24', 'Fase de grupos', 'C', 'Escocia', 'Brasil', 0, 3, '', ''),
(18, '2026-06-24', 'Fase de grupos', 'C', 'Marruecos', 'Haití', 4, 2, '', ''),
(19, '2026-06-12', 'Fase de grupos', 'D', 'Estados Unidos', 'Paraguay', 4, 1, '', ''),
(20, '2026-06-13', 'Fase de grupos', 'D', 'Australia', 'Turquía', 2, 0, '', ''),
(21, '2026-06-19', 'Fase de grupos', 'D', 'Estados Unidos', 'Australia', 2, 0, '', ''),
(22, '2026-06-19', 'Fase de grupos', 'D', 'Turquía', 'Paraguay', 0, 1, '', ''),
(23, '2026-06-25', 'Fase de grupos', 'D', 'Turquía', 'Estados Unidos', 3, 2, '', ''),
(24, '2026-06-25', 'Fase de grupos', 'D', 'Paraguay', 'Australia', 0, 0, '', ''),
(25, '2026-06-14', 'Fase de grupos', 'E', 'Alemania', 'Curazao', 7, 1, '', ''),
(26, '2026-06-14', 'Fase de grupos', 'E', 'Costa de Marfil', 'Ecuador', 1, 0, '', ''),
(27, '2026-06-20', 'Fase de grupos', 'E', 'Alemania', 'Costa de Marfil', 2, 1, '', ''),
(28, '2026-06-20', 'Fase de grupos', 'E', 'Ecuador', 'Curazao', 0, 0, '', ''),
(29, '2026-06-25', 'Fase de grupos', 'E', 'Ecuador', 'Alemania', 2, 1, '', ''),
(30, '2026-06-25', 'Fase de grupos', 'E', 'Curazao', 'Costa de Marfil', 0, 2, '', ''),
(31, '2026-06-14', 'Fase de grupos', 'F', 'Países Bajos', 'Japón', 2, 2, '', ''),
(32, '2026-06-14', 'Fase de grupos', 'F', 'Suecia', 'Túnez', 5, 1, '', ''),
(33, '2026-06-20', 'Fase de grupos', 'F', 'Países Bajos', 'Suecia', 5, 1, '', ''),
(34, '2026-06-20', 'Fase de grupos', 'F', 'Túnez', 'Japón', 0, 4, '', ''),
(35, '2026-06-25', 'Fase de grupos', 'F', 'Túnez', 'Países Bajos', 1, 3, '', ''),
(36, '2026-06-25', 'Fase de grupos', 'F', 'Japón', 'Suecia', 1, 1, '', ''),
(37, '2026-06-15', 'Fase de grupos', 'G', 'Bélgica', 'Egipto', 1, 1, '', ''),
(38, '2026-06-15', 'Fase de grupos', 'G', 'Irán', 'Nueva Zelanda', 2, 2, '', ''),
(39, '2026-06-21', 'Fase de grupos', 'G', 'Bélgica', 'Irán', 0, 0, '', ''),
(40, '2026-06-21', 'Fase de grupos', 'G', 'Nueva Zelanda', 'Egipto', 1, 3, '', ''),
(41, '2026-06-26', 'Fase de grupos', 'G', 'Nueva Zelanda', 'Bélgica', 1, 5, '', ''),
(42, '2026-06-26', 'Fase de grupos', 'G', 'Egipto', 'Irán', 1, 1, '', ''),
(43, '2026-06-15', 'Fase de grupos', 'H', 'España', 'Cabo Verde', 0, 0, '', ''),
(44, '2026-06-15', 'Fase de grupos', 'H', 'Arabia Saudita', 'Uruguay', 1, 1, '', ''),
(45, '2026-06-21', 'Fase de grupos', 'H', 'España', 'Arabia Saudita', 4, 0, '', ''),
(46, '2026-06-21', 'Fase de grupos', 'H', 'Uruguay', 'Cabo Verde', 2, 2, '', ''),
(47, '2026-06-26', 'Fase de grupos', 'H', 'Uruguay', 'España', 0, 1, '', ''),
(48, '2026-06-26', 'Fase de grupos', 'H', 'Cabo Verde', 'Arabia Saudita', 0, 0, '', ''),
(49, '2026-06-16', 'Fase de grupos', 'I', 'Francia', 'Senegal', 3, 1, '', ''),
(50, '2026-06-16', 'Fase de grupos', 'I', 'Irak', 'Noruega', 1, 4, '', ''),
(51, '2026-06-22', 'Fase de grupos', 'I', 'Francia', 'Irak', 3, 0, '', ''),
(52, '2026-06-22', 'Fase de grupos', 'I', 'Noruega', 'Senegal', 3, 2, '', ''),
(53, '2026-06-26', 'Fase de grupos', 'I', 'Noruega', 'Francia', 1, 4, '', ''),
(54, '2026-06-26', 'Fase de grupos', 'I', 'Senegal', 'Irak', 5, 0, '', ''),
(55, '2026-06-16', 'Fase de grupos', 'J', 'Argentina', 'Argelia', 3, 0, '', ''),
(56, '2026-06-16', 'Fase de grupos', 'J', 'Austria', 'Jordania', 3, 1, '', ''),
(57, '2026-06-22', 'Fase de grupos', 'J', 'Argentina', 'Austria', 2, 0, '', ''),
(58, '2026-06-22', 'Fase de grupos', 'J', 'Jordania', 'Argelia', 1, 2, '', ''),
(59, '2026-06-27', 'Fase de grupos', 'J', 'Jordania', 'Argentina', 1, 3, '', ''),
(60, '2026-06-27', 'Fase de grupos', 'J', 'Argelia', 'Austria', 3, 3, '', ''),
(61, '2026-06-17', 'Fase de grupos', 'K', 'Portugal', 'RD del Congo', 1, 1, '', ''),
(62, '2026-06-17', 'Fase de grupos', 'K', 'Uzbekistán', 'Colombia', 1, 3, '', ''),
(63, '2026-06-23', 'Fase de grupos', 'K', 'Portugal', 'Uzbekistán', 5, 0, '', ''),
(64, '2026-06-23', 'Fase de grupos', 'K', 'Colombia', 'RD del Congo', 1, 0, '', ''),
(65, '2026-06-27', 'Fase de grupos', 'K', 'Colombia', 'Portugal', 0, 0, '', ''),
(66, '2026-06-27', 'Fase de grupos', 'K', 'RD del Congo', 'Uzbekistán', 3, 1, '', ''),
(67, '2026-06-17', 'Fase de grupos', 'L', 'Inglaterra', 'Croacia', 4, 2, '', ''),
(68, '2026-06-17', 'Fase de grupos', 'L', 'Ghana', 'Panamá', 1, 0, '', ''),
(69, '2026-06-23', 'Fase de grupos', 'L', 'Inglaterra', 'Ghana', 0, 0, '', ''),
(70, '2026-06-23', 'Fase de grupos', 'L', 'Panamá', 'Croacia', 0, 1, '', ''),
(71, '2026-06-27', 'Fase de grupos', 'L', 'Panamá', 'Inglaterra', 0, 2, '', ''),
(72, '2026-06-27', 'Fase de grupos', 'L', 'Croacia', 'Ghana', 2, 1, '', ''),
(73, '2026-06-28', 'Dieciseisavos', NULL, 'Sudáfrica', 'Canadá', 0, 1, '', 'Estadio Los Ángeles'),
(74, '2026-06-29', 'Dieciseisavos', NULL, 'Alemania', 'Paraguay', 1, 1, 'Paraguay ganó 4-3 en penales', 'Estadio Boston'),
(75, '2026-06-29', 'Dieciseisavos', NULL, 'Países Bajos', 'Marruecos', 1, 1, 'Marruecos ganó 3-2 en penales', 'Estadio Monterrey'),
(76, '2026-06-29', 'Dieciseisavos', NULL, 'Brasil', 'Japón', 2, 1, '', 'Estadio Houston'),
(77, '2026-06-30', 'Dieciseisavos', NULL, 'Francia', 'Suecia', 3, 0, '', 'Estadio Nueva York/Nueva Jersey'),
(78, '2026-06-30', 'Dieciseisavos', NULL, 'Costa de Marfil', 'Noruega', 1, 2, '', 'Estadio Dallas'),
(79, '2026-06-30', 'Dieciseisavos', NULL, 'México', 'Ecuador', 2, 0, '', 'Estadio Ciudad de México'),
(80, '2026-07-01', 'Dieciseisavos', NULL, 'Inglaterra', 'RD del Congo', 2, 1, '', 'Estadio Atlanta'),
(81, '2026-07-01', 'Dieciseisavos', NULL, 'Estados Unidos', 'Bosnia y Herzegovina', 2, 0, '', 'Estadio Bahía de San Francisco'),
(82, '2026-07-01', 'Dieciseisavos', NULL, 'Bélgica', 'Senegal', 3, 2, 'Tras prórroga', 'Estadio Seattle'),
(83, '2026-07-02', 'Dieciseisavos', NULL, 'Portugal', 'Croacia', 2, 1, '', 'Estadio Toronto'),
(84, '2026-07-02', 'Dieciseisavos', NULL, 'España', 'Austria', 3, 0, '', 'Estadio Los Ángeles'),
(85, '2026-07-02', 'Dieciseisavos', NULL, 'Suiza', 'Argelia', 2, 0, '', 'BC Place Vancouver'),
(86, '2026-07-03', 'Dieciseisavos', NULL, 'Argentina', 'Cabo Verde', 3, 2, 'Tras prórroga', 'Estadio Miami'),
(87, '2026-07-03', 'Dieciseisavos', NULL, 'Colombia', 'Ghana', 1, 0, '', 'Estadio Kansas City'),
(88, '2026-07-03', 'Dieciseisavos', NULL, 'Australia', 'Egipto', 1, 1, 'Egipto ganó 4-2 en penales', 'Estadio Dallas'),
(89, '2026-07-04', 'Octavos de final', NULL, 'Paraguay', 'Francia', 0, 1, '', 'Estadio Filadelfia'),
(90, '2026-07-04', 'Octavos de final', NULL, 'Canadá', 'Marruecos', 0, 3, '', 'Estadio Houston'),
(91, '2026-07-05', 'Octavos de final', NULL, 'Brasil', 'Noruega', 1, 2, '', 'Estadio Nueva York/Nueva Jersey'),
(92, '2026-07-05', 'Octavos de final', NULL, 'México', 'Inglaterra', 2, 3, '', 'Estadio Ciudad de México'),
(93, '2026-07-06', 'Octavos de final', NULL, 'Portugal', 'España', 0, 1, '', 'Estadio Dallas'),
(94, '2026-07-06', 'Octavos de final', NULL, 'Estados Unidos', 'Bélgica', 1, 4, '', 'Estadio Seattle'),
(95, '2026-07-07', 'Octavos de final', NULL, 'Argentina', 'Egipto', 3, 2, '', 'Estadio Atlanta'),
(96, '2026-07-07', 'Octavos de final', NULL, 'Suiza', 'Colombia', 0, 0, 'Suiza ganó 4-3 en penales', 'BC Place Vancouver'),
(97, '2026-07-09', 'Cuartos de final', NULL, 'Francia', 'Marruecos', 2, 0, '', 'Estadio Boston'),
(98, '2026-07-10', 'Cuartos de final', NULL, 'España', 'Bélgica', 2, 1, '', 'Estadio Los Ángeles'),
(99, '2026-07-11', 'Cuartos de final', NULL, 'Noruega', 'Inglaterra', 1, 2, 'Tras prórroga', 'Estadio Miami'),
(100, '2026-07-11', 'Cuartos de final', NULL, 'Argentina', 'Suiza', 3, 1, 'Tras prórroga', 'Estadio Kansas City'),
(101, '2026-07-14', 'Semifinal', NULL, 'Francia', 'España', 0, 2, '', 'Estadio Dallas'),
(102, '2026-07-15', 'Semifinal', NULL, 'Inglaterra', 'Argentina', 1, 2, '', 'Estadio Atlanta'),
(103, '2026-07-18', 'Tercer puesto', NULL, 'Francia', 'Inglaterra', 4, 6, '', 'Estadio Miami'),
(104, '2026-07-19', 'Final', NULL, 'España', 'Argentina', 1, 0, 'Tras prórroga', 'Estadio Nueva York/Nueva Jersey')
ON DUPLICATE KEY UPDATE id = VALUES(id);

-- Crónicas iniciales. La PK id es estable para poder ejecutar el script de nuevo.
INSERT INTO cronicas (id,partido_id,titulo,subtitulo,cuerpo,etiqueta,destacado) VALUES
(1, 62, 'Uzbekistán 1–3 Colombia: un inicio con autoridad', 'La selección comenzó su participación con una victoria que marcó el ritmo del grupo.', 'Colombia encontró espacios con transiciones rápidas y aprovechó sus oportunidades de gol. El resultado permitió sumar tres puntos importantes en el debut.

Desde lo táctico, la intensidad y la circulación por los costados fueron dos elementos que el equipo pudo explotar.', 'Fase de grupos', 1),
(2, 64, 'Colombia 1–0 RD del Congo: tres puntos trabajados', 'Un encuentro cerrado que exigió concentración y orden.', 'El equipo colombiano mantuvo la paciencia ante un rival que dificultó la progresión ofensiva. La victoria por la mínima fue el reflejo de un partido que tuvo que construirse con disciplina.

Este encuentro resaltó la importancia de defender bien después de conseguir ventaja.', 'Fase de grupos', 0),
(3, 65, 'Colombia 0–0 Portugal: equilibrio frente a un favorito', 'Un empate sin goles con análisis de las dos propuestas de juego.', 'Colombia sostuvo un bloque compacto y limitó los espacios ante un rival con mucho talento individual. Aunque el marcador terminó igualado, el partido dejó aprendizajes valiosos.

La presión, la recuperación y la lectura de los tiempos marcaron el desarrollo del compromiso.', 'Fase de grupos', 0),
(4, 87, 'Colombia 1–0 Ghana: avanzar exige competir', 'La fase de eliminación elevó la exigencia para cada decisión.', 'Colombia encontró la forma de resolver un partido de eliminación directa. La concentración defensiva y la capacidad de aprovechar un momento determinante fueron fundamentales.

La lectura del encuentro mostró un equipo capaz de adaptarse a contextos más exigentes.', 'Eliminación directa', 0),
(5, 96, 'Suiza 0–0 Colombia: definición desde el punto penal', 'La igualdad en el campo llevó la clasificación a una tanda decisiva.', 'Después de un juego de mucha tensión, el marcador permaneció 0–0 y la definición se trasladó a los penales. La selección suiza se impuso 4–3 en esa instancia.

La participación de Colombia terminó dejando momentos destacados y temas de análisis para el proyecto.', 'Octavos de final', 0)
ON DUPLICATE KEY UPDATE id=VALUES(id);

-- CONSULTAS DE VERIFICACIÓN:
-- SELECT COUNT(*) FROM partidos; -- Debe mostrar 104.
-- SELECT COUNT(*) FROM cronicas; -- Debe mostrar 5 en una base nueva.
-- SELECT COUNT(*) FROM comentarios; -- Comienza en 0, aumenta desde la web.
