/*
  Warnings:

  - You are about to drop the `_NutritionsToProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutritions_products` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[product_id]` on the table `nutritions` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `_NutritionsToProducts` DROP FOREIGN KEY `_NutritionsToProducts_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_NutritionsToProducts` DROP FOREIGN KEY `_NutritionsToProducts_ibfk_2`;

-- DropForeignKey
ALTER TABLE `nutritions_products` DROP FOREIGN KEY `nutritions_products_nutritions_id_fkey`;

-- DropForeignKey
ALTER TABLE `nutritions_products` DROP FOREIGN KEY `nutritions_products_product_id_fkey`;

-- DropTable
DROP TABLE `_NutritionsToProducts`;

-- DropTable
DROP TABLE `nutritions_products`;

-- CreateIndex
CREATE UNIQUE INDEX `nutritions_product_id_unique` ON `nutritions`(`product_id`);

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
