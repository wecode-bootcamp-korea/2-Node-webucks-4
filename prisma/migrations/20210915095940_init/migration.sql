/*
  Warnings:

  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `policyAgreed` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `username` VARCHAR(191),
    MODIFY `address` VARCHAR(191),
    MODIFY `phoneNumber` VARCHAR(191),
    MODIFY `policyAgreed` BOOLEAN NOT NULL DEFAULT true;
