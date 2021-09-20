/*
  Warnings:

  - You are about to alter the column `name` on the `categories` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `amount` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `nutritions` table. All the data in the column will be lost.
  - You are about to alter the column `korean_name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `english_name` on the `products` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kcal` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natrium` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serving_size` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `amount`,
    DROP COLUMN `name`,
    ADD COLUMN `caffeine` DOUBLE NOT NULL,
    ADD COLUMN `fat` DOUBLE NOT NULL,
    ADD COLUMN `kcal` DOUBLE NOT NULL,
    ADD COLUMN `natrium` DOUBLE NOT NULL,
    ADD COLUMN `protein` DOUBLE NOT NULL,
    ADD COLUMN `serving_size` VARCHAR(100) NOT NULL,
    ADD COLUMN `sugar` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `products` MODIFY `korean_name` VARCHAR(100) NOT NULL,
    MODIFY `english_name` VARCHAR(100) NOT NULL;
