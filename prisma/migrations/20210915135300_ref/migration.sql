/*
  Warnings:

  - You are about to alter the column `amount` on the `nutritions` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `nutritions` MODIFY `amount` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `_NutritionsToProducts` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_NutritionsToProducts_AB_unique`(`A`, `B`),
    INDEX `_NutritionsToProducts_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_NutritionsToProducts` ADD FOREIGN KEY (`A`) REFERENCES `nutritions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_NutritionsToProducts` ADD FOREIGN KEY (`B`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
