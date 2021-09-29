/*
  Warnings:

  - Made the column `updated_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `updated_at` DATETIME(3) NOT NULL;
