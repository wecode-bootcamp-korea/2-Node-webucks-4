/*
  Warnings:

  - You are about to drop the column `englishName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `koreanName` on the `products` table. All the data in the column will be lost.
  - Added the required column `english_name` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `korean_name` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `englishName`,
    DROP COLUMN `koreanName`,
    ADD COLUMN `english_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `korean_name` VARCHAR(191) NOT NULL;
