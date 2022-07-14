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


-- Дамп структуры базы данных lab10
DROP DATABASE IF EXISTS `lab10`;
CREATE DATABASE IF NOT EXISTS `lab10` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `lab10`;

-- Дамп структуры для таблица lab10.items
DROP TABLE IF EXISTS `items`;
CREATE TABLE IF NOT EXISTS `items` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image` char(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page` char(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cost` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab10.items: ~8 rows (приблизительно)
DELETE FROM `items`;
INSERT INTO `items` (`id`, `image`, `name`, `description`, `page`, `cost`) VALUES
	(1, 'test1.jpg', 'Товар 1', 'Описание к товару 1', 'tovar1.html', 5),
	(2, 'test2.jpg', 'Товар 2', 'Описание к товару 2', 'tovar2.html', 57567),
	(3, 'test3.jpg', 'Товар 3', 'Описание к товару 3', 'tovar3.html', 11),
	(4, 'test4.jpg', 'Товар 4', 'Описание к товару 4', 'tovar4.html', 2000),
	(5, 'test5.jpg', 'Товар 5', 'Описание к товару 5', 'tovar5.html', 5000),
	(6, 'test6.jpg', 'Товар 6', 'Описание к товару 6', 'tovar6.html', 122),
	(7, 'test7.jpg', 'Товар 7', 'Описание к товару 7', 'tovar7.html', 25435),
	(8, 'test8.jpg', 'Товар 8', 'Описание к товару 8', 'tovar8.html', 45);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
