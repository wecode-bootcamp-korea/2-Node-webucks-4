/*
  Warnings:

  - You are about to alter the column `name` on the `allergies` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `products_id` on the `nutritions` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `korean_name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `english_name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `password` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(100)`.
  - You are about to alter the column `address` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `phone_number` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - Added the required column `product_id` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `nutritions` DROP FOREIGN KEY `nutritions_products_id_fkey`;

-- AlterTable
ALTER TABLE `allergies` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `images` MODIFY `image_url` VARCHAR(500) NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `products_id`,
    ADD COLUMN `product_id` INTEGER NOT NULL,
    MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `korean_name` VARCHAR(100) NOT NULL,
    MODIFY `english_name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `products_allergies` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(100) NOT NULL,
    MODIFY `username` VARCHAR(100),
    MODIFY `address` VARCHAR(100),
    MODIFY `phone_number` VARCHAR(100);

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
