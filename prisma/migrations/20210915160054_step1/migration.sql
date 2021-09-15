/*
  Warnings:

  - You are about to drop the `product_allergies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product_allergies` DROP FOREIGN KEY `product_allergies_allergy_id_fkey`;

-- DropForeignKey
ALTER TABLE `product_allergies` DROP FOREIGN KEY `product_allergies_product_id_fkey`;

-- DropTable
DROP TABLE `product_allergies`;

-- CreateTable
CREATE TABLE `products_allergies` (
    `id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `allergy_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products_allergies` ADD CONSTRAINT `products_allergies_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products_allergies` ADD CONSTRAINT `products_allergies_allergy_id_fkey` FOREIGN KEY (`allergy_id`) REFERENCES `allergies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
