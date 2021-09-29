-- MySQL dump 10.13  Distrib 8.0.26, for macos11.4 (arm64)
--
-- Host: localhost    Database: we_starbucks
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

-- DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `_prisma_migrations` (
--   `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `finished_at` datetime(3) DEFAULT NULL,
--   `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `logs` text COLLATE utf8mb4_unicode_ci,
--   `rolled_back_at` datetime(3) DEFAULT NULL,
--   `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--   `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('06a53717-c456-4d6a-a63c-7cad24462af1','3a572eac16d0756dec7ab728433be269f3ca05c28f9183712b667a1341811b22','2021-09-15 15:50:41.583','20210915153417_step1',NULL,NULL,'2021-09-15 15:50:41.537',1),('07372149-06f9-4372-98a9-df470969625e','41948777bbd1c73f0b6acf12c58f7007bdb0ab767182308fa407ffef3e2447e4','2021-09-15 16:00:54.664','20210915160054_step1',NULL,NULL,'2021-09-15 16:00:54.617',1),('135a88c8-9b59-48fd-92be-c7fee49f2f60','ee2427bfee87a3a250b1eb884bda2125c5ac2ba1a224a9d20b8d63517b40ecd2','2021-09-15 16:25:59.915','20210915162559_step3',NULL,NULL,'2021-09-15 16:25:59.905',1),('160c6331-bfbd-4938-b1c0-7781c60764e5','8d477c4c4e5695c997a2674773e8435f489e1c0bcbc373e033f6f21c5015d709','2021-09-16 05:04:08.439','20210916050408_step3_3',NULL,NULL,'2021-09-16 05:04:08.358',1),('406d8f99-6c5f-46ea-a876-8811d3448899','b928ee42fc045216c4d0b8861d73aa1c92a7ec3c92f08282f1be08c2abee7b4d','2021-09-15 15:50:41.536','20210915131601_init',NULL,NULL,'2021-09-15 15:50:41.479',1),('e2074cb4-3a3c-480f-9b94-b2d765261a15','3f62a60ab4ddbff2112d46ff990a16d96be133044b6f850a4c5c7c8d307762c5','2021-09-15 16:13:15.463','20210915161315_step2',NULL,NULL,'2021-09-15 16:13:15.433',1),('f12da79c-4862-4946-8ca1-2ef5bd9f7ae1','70701b8a4c24353a3d47b087ddc0556c54a43d1e43a0b0b1b6ef2ccb91ca5718',NULL,'20210928121701_add','A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve\n\nMigration name: 20210928121701_add\n\nDatabase error code: 1292\n\nDatabase error:\nIncorrect datetime value: \'0000-00-00 00:00:00\' for column \'updated_at\' at row 1\n\nPlease check the query number 3 from the migration file.\n\n   0: sql_migration_connector::sql_database_step_applier::apply_script\n           with migration_name=\"20210928121701_add\"\n             at migration-engine/connectors/sql-migration-connector/src/sql_database_step_applier.rs:99\n   1: migration_core::api::ApplyMigrations\n             at migration-engine/core/src/api.rs:69',NULL,'2021-09-28 12:25:16.603',0);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allergies`
--

-- DROP TABLE IF EXISTS `allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `allergies` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergies`
--

LOCK TABLES `allergies` WRITE;
/*!40000 ALTER TABLE `allergies` DISABLE KEYS */;
INSERT INTO `allergies` VALUES (1,'우유'),(2,'대두'),(3,'밀'),(4,'콩'),(5,'땅콩'),(6,'생선'),(7,'복숭아'),(8,'밤'),(9,'조개'),(10,'랍스터');
/*!40000 ALTER TABLE `allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

-- DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `categories` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'콜드 브루 커피'),(2,'브루드 커피'),(3,'에스프레소'),(4,'프라프치노'),(5,'블렌디드'),(6,'스타벅스 피지오'),(7,'티(티바나)'),(8,'기타 제조 음료'),(9,'스타벅스 주스(병음료)');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

-- DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `images` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `image_url` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `product_id` int NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `images_product_id_fkey` (`product_id`),
--   CONSTRAINT `images_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg',1),(2,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238875.jpg',3),(3,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg',4),(4,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091844065.jpg',5),(5,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg',6),(6,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg',7),(7,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452556.jpg',8),(8,'https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223958.jpg',9),(9,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852999.jpg',10),(10,'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934246.jpg',11);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nutritions`
--

-- DROP TABLE IF EXISTS `nutritions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `nutritions` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `amount` double NOT NULL,
--   `product_id` int NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `nutritions_product_id_fkey` (`product_id`),
--   CONSTRAINT `nutritions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nutritions`
--

LOCK TABLES `nutritions` WRITE;
/*!40000 ALTER TABLE `nutritions` DISABLE KEYS */;
INSERT INTO `nutritions` VALUES (1,'Bottle(보틀)',500,1),(2,'Tall(톨)',355,3),(3,'Tall(톨)',355,4),(4,'Tall(톨)',355,5),(5,'Tall(톨)',355,6),(6,'Tall(톨)',355,7),(7,'Tall(톨)',355,8),(8,'Grande(그란데)',473,9),(9,'Tall(톨)',355,10),(10,'Tall(톨)',355,11);
/*!40000 ALTER TABLE `nutritions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

-- DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `korean_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `english_name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `category_id` int NOT NULL,
--   `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
--   PRIMARY KEY (`id`),
--   KEY `products_category_id_fkey` (`category_id`),
--   CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
-- ) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'시그니처 더 블랙 콜드 블루','Signature The Black Cold Brew',1,'2021-09-28 21:25:16.612'),(3,'아이스크림 블렌딩 콜드 브루','Ice Cream Blending Cold Brew',1,'2021-09-28 21:25:16.612'),(4,'나이트로 바닐라 크림','Nitro Vanilla Cream',1,'2021-09-28 21:25:16.612'),(5,'나이트로 콜드 브루','Nitro Cold Brew',1,'2021-09-28 21:25:16.612'),(6,'돌체 콜드 브루','Dolce Cold Brew',1,'2021-09-28 21:25:16.612'),(7,'바닐라 크림 콜드 브루','Vanilla Cream Cold Brew',1,'2021-09-28 21:25:16.612'),(8,'벨벳 다크 모카 나이트로','Velvet Dark Mocha Nitro',1,'2021-09-28 21:25:16.612'),(9,'제주 비자림 콜드 브루','Jeju Forest Cold Brew',1,'2021-09-28 21:25:16.612'),(10,'아이스 커피','Iced Coffee',2,'2021-09-28 21:25:16.612'),(11,'오늘의 커피','Brewed Coffee',2,'2021-09-28 21:25:16.612');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_allergies`
--

-- DROP TABLE IF EXISTS `products_allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `products_allergies` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `product_id` int NOT NULL,
--   `allergy_id` int NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `products_allergies_product_id_fkey` (`product_id`),
--   KEY `products_allergies_allergy_id_fkey` (`allergy_id`),
--   CONSTRAINT `products_allergies_allergy_id_fkey` FOREIGN KEY (`allergy_id`) REFERENCES `allergies` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
--   CONSTRAINT `products_allergies_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_allergies`
--

LOCK TABLES `products_allergies` WRITE;
/*!40000 ALTER TABLE `products_allergies` DISABLE KEYS */;
INSERT INTO `products_allergies` VALUES (1,3,1),(2,3,2),(3,4,1),(4,6,1),(5,7,1);
/*!40000 ALTER TABLE `products_allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

-- DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `users` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `username` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
--   `address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
--   `phone_number` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
--   `policy_agreed` tinyint(1) NOT NULL DEFAULT '1',
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `users_email_key` (`email`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES 
(2,'wltn1234@gmial.com','1234','성지수','인천 어딘가','010-8237-2123',1, DEFAULT, DEFAULT ),
(3,'tjdwo1234@gmial.com','1234','이성재','서울 어딘가','010-1234-2223',1, DEFAULT, DEFAULT),
(4,'rlcjf1234@gmial.com','1234','신기철','독일 어딘가','010-9593-2223',1, DEFAULT, DEFAULT),
(5,'tldnjs1234@gmial.com','1234','김시원','서울 어딘가','010-9593-2623',1, DEFAULT, DEFAULT),
(13,'alsworla1234@gmial.com','1234','김민재','서울 어딘가','010-8385-2639',1, DEFAULT, DEFAULT)
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-28 21:29:55
