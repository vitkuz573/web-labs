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
  `user_id` bigint(20) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `user_ip` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_orders_users` (`user_id`),
  CONSTRAINT `FK_orders_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab10.orders: ~4 rows (приблизительно)
DELETE FROM `orders`;
INSERT INTO `orders` (`id`, `user_id`, `status`, `user_ip`, `payment_at`, `created_at`, `updated_at`) VALUES
	(34, 1, 0, '127.0.0.1', NULL, '2022-09-05 05:26:24', '2022-09-05 05:26:24'),
	(35, 1, 0, '127.0.0.1', NULL, '2022-09-05 05:34:41', '2022-09-05 05:34:41'),
	(36, 1, 0, '127.0.0.1', NULL, '2022-09-05 06:00:30', '2022-09-05 06:00:30'),
	(37, 8, 0, '127.0.0.1', NULL, '2022-09-05 06:06:49', '2022-09-05 06:06:49');

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

-- Дамп данных таблицы lab10.products: ~8 rows (приблизительно)
DELETE FROM `products`;
INSERT INTO `products` (`id`, `image`, `name`, `description`, `price`, `in_stock`, `created_at`, `updated_at`) VALUES
	(1, 'test1.jpg', 'Товар 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 11, 0, '2022-09-04 18:08:39', '2022-09-05 06:00:30'),
	(2, 'test2.jpg', 'Товар 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 2000, 0, '2022-09-04 18:09:12', '2022-09-05 05:26:24'),
	(3, 'test3.jpg', 'Товар 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 122, 0, '2022-09-04 18:09:22', '2022-09-05 05:34:41'),
	(4, 'test4.jpg', 'Товар 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 45, 0, '2022-09-04 18:09:22', NULL),
	(5, 'test5.jpg', 'Товар 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 567, 0, '2022-09-04 18:09:22', '2022-09-05 06:06:49'),
	(6, 'test6.jpg', 'Товар 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 44, 2, '2022-09-04 18:09:22', '2022-09-05 06:06:49'),
	(7, 'test7.jpg', 'Товар 7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 5467, 22, '2022-09-04 18:09:22', '2022-09-05 05:02:18'),
	(8, 'test8.jpg', 'Товар 8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 425, 0, '2022-09-04 18:09:22', NULL);

-- Дамп структуры для таблица lab10.purchases
DROP TABLE IF EXISTS `purchases`;
CREATE TABLE IF NOT EXISTS `purchases` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `price` bigint(20) NOT NULL DEFAULT 0,
  `amount` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_purchases_orders` (`order_id`),
  KEY `FK_purchases_products` (`product_id`),
  CONSTRAINT `FK_purchases_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_purchases_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab10.purchases: ~5 rows (приблизительно)
DELETE FROM `purchases`;
INSERT INTO `purchases` (`id`, `order_id`, `product_id`, `price`, `amount`, `created_at`, `updated_at`) VALUES
	(46, 34, 1, 11, 46, '2022-09-05 05:26:24', '2022-09-05 05:26:24'),
	(47, 34, 2, 2000, 13, '2022-09-05 05:26:24', '2022-09-05 05:26:24'),
	(48, 35, 1, 11, 7, '2022-09-05 05:34:41', '2022-09-05 05:34:41'),
	(49, 35, 3, 122, 1, '2022-09-05 05:34:41', '2022-09-05 05:34:41'),
	(50, 36, 1, 11, 61, '2022-09-05 06:00:30', '2022-09-05 06:00:30'),
	(51, 37, 5, 567, 1, '2022-09-05 06:06:49', '2022-09-05 06:06:49'),
	(52, 37, 6, 44, 4, '2022-09-05 06:06:49', '2022-09-05 06:06:49');

-- Дамп структуры для таблица lab10.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` tinytext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы lab10.users: ~1 rows (приблизительно)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `login`, `password`, `first_name`, `last_name`, `phone`, `address`, `is_admin`, `created_at`, `updated_at`) VALUES
	(1, 'vitkuz573', '$2y$10$wtHRT/Ow0x2o2N9yZG.CW.J8FANtDQ6dVdwbdpfeEn6RYTJdH0C.6', 'Vitaly', 'Kuzyaev', '', '', 1, '2022-09-05 08:05:57', '2022-09-05 04:50:41'),
	(6, '123', '$2y$10$6/KaF6IWlB3zwifu9wPEeeoDRUx.kqIYvjzK7ISOoXMKHZY1WnqAq', 'treter', 'erert', NULL, NULL, 0, '2022-09-05 06:01:37', '2022-09-05 06:01:37'),
	(7, 'test', '$2y$10$PSQOamEeT1fhg1rDGo59ruC4iRGw/QHjcUYTBJ48u6Dy8lzkePUMO', 'Test', 'User', NULL, NULL, 0, '2022-09-05 06:05:00', '2022-09-05 06:05:00'),
	(8, 'admin', '$2y$10$VLneJEl/Q0FF6ub7n.K.1ej38IjZmyld4GSNryxNQhT0a8nMnRIGu', 'Admin', 'Admin', NULL, NULL, 1, '2022-09-05 06:05:33', '2022-09-05 06:05:33');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
