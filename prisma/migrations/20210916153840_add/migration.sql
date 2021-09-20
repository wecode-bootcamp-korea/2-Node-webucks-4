/*
  Warnings:

  - You are about to drop the column `description` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `description`;

-- CreateTable
CREATE TABLE `description` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(3000) NOT NULL,
    `product_id` INTEGER NOT NULL,

    UNIQUE INDEX `description_product_id_unique`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `description` ADD CONSTRAINT `description_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
