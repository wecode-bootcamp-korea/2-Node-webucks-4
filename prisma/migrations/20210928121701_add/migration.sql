/*
  Warnings:

  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `images` MODIFY `image_url` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) not null DEFAULT CURRENT_TIMESTAMP(3);

-- -- add default values
-- UPDATE users SET updated_at = NOW();