/*
  Warnings:

  - You are about to drop the column `amount` on the `nutritions` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `nutritions` table. All the data in the column will be lost.
  - Added the required column `caffeine` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `calories` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fat` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `natrium` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `protein` to the `nutritions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sugar` to the `nutritions` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `nutritions_name_key` ON `nutritions`;

-- AlterTable
ALTER TABLE `nutritions` DROP COLUMN `amount`,
    DROP COLUMN `name`,
    ADD COLUMN `caffeine` DOUBLE NOT NULL,
    ADD COLUMN `calories` DOUBLE NOT NULL,
    ADD COLUMN `fat` DOUBLE NOT NULL,
    ADD COLUMN `natrium` DOUBLE NOT NULL,
    ADD COLUMN `protein` DOUBLE NOT NULL,
    ADD COLUMN `sugar` DOUBLE NOT NULL;
