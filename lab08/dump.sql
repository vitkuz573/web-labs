-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               10.6.7-MariaDB - mariadb.org binary distribution
-- Операционная система:         Win64
-- HeidiSQL Версия:              12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Дамп структуры базы данных lab08
DROP DATABASE IF EXISTS `lab08`;
CREATE DATABASE IF NOT EXISTS `lab08` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `lab08`;

-- Дамп структуры для таблица lab08.abiturients
DROP TABLE IF EXISTS `abiturients`;
CREATE TABLE IF NOT EXISTS `abiturients` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `middle_name` char(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reg_number` bigint(20) NOT NULL DEFAULT unix_timestamp(current_timestamp()),
  PRIMARY KEY (`id`),
  UNIQUE KEY `reg_number` (`reg_number`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab08.abiturients: ~2 rows (приблизительно)
DELETE FROM `abiturients`;
INSERT INTO `abiturients` (`id`, `first_name`, `last_name`, `middle_name`, `reg_number`) VALUES
	(1, 'Иван', 'Иванов', 'Иванович', 1657171087),
	(2, 'Петр', 'Петров', NULL, 1657171108);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
