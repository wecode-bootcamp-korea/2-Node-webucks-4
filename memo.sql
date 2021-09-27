INSERT INTO users 
VALUES (default, ${email}, ${password}, ${username}, ${address}, ${phone_number}, ${policy_agreed});

SELECT * 
FROM users 
ORDER BY id DESC 
LIMIT 1;

SELECT users.id, users.email, users.password
FROM users
WHERE users.id=${email};

SELECT products.id, products.korean_name, images.image_url
FROM products
LEFT JOIN images
ON products.id = images.product_id;

SELECT products.id, categories.name, products.korean_name, 
products.english_name, images.image_url, nutritions.name, nutritions.amount,
allergies.name
FROM products

LEFT JOIN categories
ON products.category_id = categories.id

LEFT JOIN images
ON products.id = images.product_id

LEFT JOIN nutritions
ON products.id = nutritions.product_id

LEFT JOIN products_allergies
ON products.id = products_allergies.product_id

LEFT JOIN allergies
ON products_allergies.allergy_id = allergies.id

WHERE products.id = ${id};


INSERT INTO nutritions VALUES (default, 'Bottle(보틀)', 500, 1);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 3);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 4);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 5);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 6);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 7);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 8);
INSERT INTO nutritions VALUES (default, 'Grande(그란데)', 473, 9);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 10);
INSERT INTO nutritions VALUES (default, 'Tall(톨)', 355, 11);