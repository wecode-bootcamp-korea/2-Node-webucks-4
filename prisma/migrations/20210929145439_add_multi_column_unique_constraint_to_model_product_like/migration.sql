-- AlterTable
ALTER TABLE `allergies` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `categories` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `nutritions` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `product_images` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `products` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `is_deleted` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `product_likes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `product_likes_user_id_product_id_key`(`user_id`, `product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_comments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_deleted` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_likes` ADD CONSTRAINT `product_likes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_likes` ADD CONSTRAINT `product_likes_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_comments` ADD CONSTRAINT `product_comments_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_comments` ADD CONSTRAINT `product_comments_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
