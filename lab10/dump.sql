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

-- Дамп структуры для таблица lab10.orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL DEFAULT 0,
  `items` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_orders_users` (`user_id`),
  CONSTRAINT `FK_orders_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `check_items` CHECK (json_valid(`items`))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab10.orders: ~0 rows (приблизительно)
DELETE FROM `orders`;
INSERT INTO `orders` (`id`, `user_id`, `items`, `payment_at`, `created_at`, `updated_at`) VALUES
	(8, 5, '"{\\"3\\":\\"8\\",\\"2\\":\\"7\\"}"', NULL, '2022-09-02 11:16:56', '2022-09-02 11:16:56'),
	(9, 5, '"{\\"3\\":\\"8\\",\\"2\\":\\"89\\"}"', NULL, '2022-09-02 11:18:03', '2022-09-02 11:18:03');

-- Дамп структуры для таблица lab10.products
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `image` char(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` tinytext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `in_stock` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab10.products: ~4 rows (приблизительно)
DELETE FROM `products`;
INSERT INTO `products` (`id`, `image`, `name`, `description`, `price`, `in_stock`, `created_at`, `updated_at`) VALUES
	(2, 'test2.jpg', 'Товар 2', 'Описание к товару 2', 5654654, 46, NULL, '2022-09-02 03:20:36'),
	(3, 'test3.jpg', 'Товар 3', 'Описание к товару 3', 11, 654, NULL, NULL),
	(4, 'test4.jpg', 'Товар 4', 'Описание к товару 4', 2000, 67, NULL, NULL),
	(6, 'test6.jpg', 'Товар 6', 'Описание к товару 6', 122, 1, NULL, NULL);

-- Дамп структуры для таблица lab10.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab10.users: ~0 rows (приблизительно)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `login`, `password`, `first_name`, `last_name`, `is_admin`, `created_at`, `updated_at`) VALUES
	(5, 'vitkuz573', '$2y$10$2EXDJlfmnIqlubJHBeTAYeOJSxlyWTeUJDAEZ5eo384/DOZB00/Zu', 'Vitaly', 'Kuzyaev', 1, NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
