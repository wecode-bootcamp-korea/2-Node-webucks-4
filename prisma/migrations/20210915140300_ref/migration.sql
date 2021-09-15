/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `policyAgreed` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `phoneNumber`,
    DROP COLUMN `policyAgreed`,
    DROP COLUMN `username`,
    ADD COLUMN `phone_number` VARCHAR(191),
    ADD COLUMN `policy_agreed` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `user_name` VARCHAR(191);

-- CreateTable
CREATE TABLE `nutritions_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `nutritions_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nutritions_products` ADD CONSTRAINT `nutritions_products_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `nutritions_products` ADD CONSTRAINT `nutritions_products_nutritions_id_fkey` FOREIGN KEY (`nutritions_id`) REFERENCES `nutritions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
