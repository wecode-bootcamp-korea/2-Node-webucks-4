/*
  Warnings:

  - You are about to drop the column `is_liked` on the `likes` table. All the data in the column will be lost.
  - Added the required column `description` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `likes` DROP COLUMN `is_liked`;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `description` VARCHAR(3000) NOT NULL,
    ADD COLUMN `is_new` BOOLEAN NOT NULL DEFAULT false;
