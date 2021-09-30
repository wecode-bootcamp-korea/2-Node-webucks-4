-- CreateTable
CREATE TABLE `nutritions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product_id` INTEGER NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `calories` DOUBLE NOT NULL,
    `fat` DOUBLE NOT NULL,
    `protein` DOUBLE NOT NULL,
    `sodium` DOUBLE NOT NULL,
    `sugars` DOUBLE NOT NULL,
    `caffeine` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `nutritions` ADD CONSTRAINT `nutritions_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
