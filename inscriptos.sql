-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-08-2026 a las 00:46:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `formutu`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscriptos`
--

CREATE TABLE `inscriptos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `cedula` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `numero` varchar(45) NOT NULL,
  `edad` int(11) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `talle` varchar(45) DEFAULT NULL,
  `ganador_remera` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inscriptos`
--

INSERT INTO `inscriptos` (`id`, `nombre`, `cedula`, `email`, `numero`, `edad`, `ciudad`, `talle`, `ganador_remera`) VALUES
(114, 'Sofía Rodríguez', '12345678', 'sofia.rodriguez@gmail.com', '091234567', 25, 'Montevideo', 'S', NULL),
(115, 'Javier López', '87654321', 'javier.lopez@hotmail.com', '092345678', 32, 'Canelones', 'M', NULL),
(116, 'Camila Fernández', '45678912', 'camila.fer@yahoo.com', '093456789', 19, 'Punta del Este', 'XS', NULL),
(117, 'Lucas Martínez', '78912345', 'lucas.martinez@gmail.com', '094567890', 28, 'Colonia', 'L', NULL),
(118, 'Valentina González', '32165487', 'valegonzalez@gmail.com', '095678901', 22, 'Montevideo', 'M', NULL),
(119, 'Mateo Silva', '65498732', 'mateo.silva@outlook.com', '096789012', 35, 'Maldonado', 'XL', NULL),
(120, 'Florencia Pérez', '98765432', 'florperez@gmail.com', '097890123', 27, 'Rivera', 'S', NULL),
(121, 'Agustín Romero', '15975346', 'agustin.romero@hotmail.com', '098901234', 31, 'Salto', 'L', NULL),
(122, 'Julieta Castro', '75315982', 'julieta.castro@gmail.com', '099012345', 24, 'Montevideo', 'M', NULL),
(123, 'Facundo Morales', '85214796', 'facundo.morales@gmail.com', '091234568', 29, 'Paysandú', 'XL', NULL),
(124, 'Luciana Rojas', '96325874', 'luciana.rojas@yahoo.com', '092345679', 33, 'Las Piedras', 'S', NULL),
(125, 'Santiago Suárez', '74125896', 'santi.suarez@gmail.com', '093456780', 26, 'Montevideo', 'L', NULL),
(126, 'Micaela Peña', '36925814', 'micaela.pena@gmail.com', '094567891', 21, 'Mercedes', 'XS', NULL),
(127, 'Tomás Cabrera', '25814796', 'tomas.cabrera@outlook.com', '095678902', 34, 'Durazno', 'M', NULL),
(128, 'Isabella Torres', '14785236', 'isa.torres@gmail.com', '096789013', 23, 'Montevideo', 'L', NULL),
(129, 'Benjamín Acosta', '95135746', 'benja.acosta@hotmail.com', '097890124', 30, 'Florida', 'XL', NULL),
(130, 'Renata Vargas', '35715982', 'renata.vargas@gmail.com', '098901235', 20, 'San José', 'S', NULL),
(131, 'Federico Ojeda', '15935748', 'fede.ojeda@gmail.com', '099012346', 36, 'Montevideo', 'M', NULL),
(132, 'Clara Iglesias', '75395126', 'clara.iglesias@yahoo.com', '091234569', 27, 'Tacuarembó', 'L', NULL),
(133, 'Emiliano Blanco', '65432198', 'emi.blanco@gmail.com', '092345680', 38, 'Minas', 'XL', NULL),
(134, 'Valeria Arce', '12378945', 'valeria.arce@gmail.com', '093456781', 22, 'Montevideo', 'S', NULL),
(135, 'Maximiliano Paredes', '45632178', 'maxi.paredes@hotmail.com', '094567892', 31, 'Artigas', 'M', NULL),
(136, 'Violeta Ferraro', '78965412', 'violeta.ferraro@gmail.com', '095678903', 25, 'Treinta y Tres', 'XS', NULL),
(137, 'Gonzalo Núñez', '32178965', 'gonzalo.nunez@gmail.com', '096789014', 29, 'Montevideo', 'L', NULL),
(138, 'Catalina Díaz', '65412398', 'cata.diaz@outlook.com', '097890125', 24, 'Rocha', 'M', NULL),
(139, 'Bautista Herrera', '98732165', 'bautista.herrera@gmail.com', '098901236', 33, 'Salto', 'XL', NULL),
(140, 'Martina Giménez', '15965482', 'martina.gimenez@gmail.com', '099012347', 20, 'Montevideo', 'S', NULL),
(141, 'Ramiro Benítez', '75365412', 'ramiro.benitez@hotmail.com', '091234570', 35, 'Canelones', 'L', NULL),
(142, 'Abril Sosa', '25874136', 'abril.sosa@gmail.com', '092345681', 26, 'Punta del Este', 'M', NULL),
(143, 'Leonardo Andrade', '36985214', 'leo.andrade@gmail.com', '093456782', 30, 'Montevideo', 'XL', NULL),
(144, 'Natalia Cáceres', '14736925', 'nat.caceres@yahoo.com', '094567893', 28, 'Colonia', 'S', NULL),
(145, 'Santino Moreira', '85236914', 'santi.moreira@gmail.com', '095678904', 32, 'Rivera', 'L', NULL),
(146, 'Agostina Medina', '96374125', 'agostina.medina@gmail.com', '096789015', 23, 'Montevideo', 'XS', NULL),
(147, 'Franco Carrizo', '74196325', 'franco.carrizo@outlook.com', '097890126', 37, 'Maldonado', 'M', NULL),
(148, 'Luz Díaz', '25896314', 'luz.diaz@gmail.com', '098901237', 29, 'Paysandú', 'XL', NULL),
(149, 'Pablo Ríos', '36974125', 'pablo.rios@gmail.com', '099012348', 34, 'Montevideo', 'L', NULL),
(150, 'Juliana Figueroa', '14725836', 'juli.figueroa@gmail.com', '091234571', 21, 'Las Piedras', 'S', NULL),
(151, 'Lautaro Acuña', '75315948', 'lautaro.acuna@hotmail.com', '092345682', 36, 'Durazno', 'M', NULL),
(152, 'Manuela Godoy', '95175382', 'manu.godoy@gmail.com', '093456783', 27, 'Montevideo', 'XL', NULL),
(153, 'Thiago Ibáñez', '15975328', 'thiago.ibanez@gmail.com', '094567894', 30, 'Florida', 'L', NULL),
(154, 'Paula Reynoso', '35795146', 'paula.reynoso@yahoo.com', '095678905', 24, 'San José', 'XS', NULL),
(155, 'Nicolás Lema', '75315946', 'nico.lema@gmail.com', '096789016', 33, 'Montevideo', 'M', NULL),
(156, 'Camila Méndez', '15975364', 'cami.mendez@gmail.com', '097890127', 22, 'Tacuarembó', 'S', NULL),
(157, 'Juan Cruz Olivera', '65498713', 'juancruz.olivera@outlook.com', '098901238', 39, 'Artigas', 'L', NULL),
(158, 'Delfina Suarez', '96325871', 'delfina.suarez@gmail.com', '099012349', 26, 'Montevideo', 'XL', NULL),
(159, 'Alexis Godoy', '85296317', 'alexis.godoy@gmail.com', '091234572', 28, 'Treinta y Tres', 'M', NULL),
(160, 'Candela Barrios', '74185296', 'candela.barrios@hotmail.com', '092345683', 31, 'Rocha', 'S', NULL),
(161, 'Gabriel Coronel', '36985217', 'gabo.coronel@gmail.com', '093456784', 34, 'Montevideo', 'L', NULL),
(162, 'Cintya De Leon', '2868186', 'cintyaymarcos@gmail.com', '099007505', 46, 'Nueva Palmira', 'S', NULL),
(163, 'Mateo Baute', ' 57465053', 'mateobaute10@gmail.com', '098653417', 18, 'Nueva Palmira', 'M', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inscriptos`
--
ALTER TABLE `inscriptos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inscriptos`
--
ALTER TABLE `inscriptos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
