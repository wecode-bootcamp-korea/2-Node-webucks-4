/*
  Warnings:

  - You are about to drop the column `description` on the `description` table. All the data in the column will be lost.
  - You are about to drop the column `serving_size` on the `nutritions` table. All the data in the column will be lost.
  - Added the required column `content` to the `description` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `description` DROP COLUMN `description`,
    ADD COLUMN `content` VARCHAR(3000) NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `serving_size`;

-- CreateTable
CREATE TABLE `serving_size` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(100) NOT NULL,
    `nutrition_id` INTEGER NOT NULL,

    UNIQUE INDEX `serving_size_nutrition_id_unique`(`nutrition_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `serving_size` ADD CONSTRAINT `serving_size_nutrition_id_fkey` FOREIGN KEY (`nutrition_id`) REFERENCES `nutritions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
