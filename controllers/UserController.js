import UserService from "../services/UserService";

console.log("UserController");

const getAllUsers = async (req, res) => {
  try {
    console.log("UserController getAllUsers before");
    const users = await UserService.getAllUsers();
    console.log("UserController getAllUsers after");

    res.status(201).json({ message: "SUCCESS", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email:", email);
    console.log("password:", password);

    const user = await UserService.createUser(email, password);
    console.log("create user");
    res.status(201).json({ message: "SUCCESS", data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAllUsers, createUser };

// app.get("/users", async (req, res) => {
//   try {
//     const users = await prisma.$queryRaw`
//       SELECT email, password, policy_agreed
//       FROM users;
//     `;

//     res.json(users);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// // app.post(UserRouter);

// app.get("/products/categories", async (req, res) => {
//   try {
//     const categories = await prisma.$queryRaw`
//       SELECT c.id, c.name
//       FROM categories c
//     `;

//     res.json(categories);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.get("/products", async (req, res) => {
//   try {
//     const allProducts = await prisma.$queryRaw`
//       SELECT p.id, p.korean_name, p.english_name, c.name AS category, p.category_id, i.image_url
//       FROM products p
//       JOIN images i
//       ON p.id = i.product_id
//       JOIN categories c
//       ON p.category_id = c.id
//       ORDER BY c.id
//       ;
//     `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

//     res.json(allProducts);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.get("/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [product] = await prisma.$queryRaw`
//       SELECT p.id, p.korean_name, p.english_name, p.description, p.category_id, c.name AS category, i.image_url, n.kcal, n.fat, n.protein, n.sodium, n.sugar, n.caffeine
//       FROM products p
//       JOIN categories c
//       ON p.category_id = c.id
//       JOIN images i
//       ON p.id = i.product_id
//       JOIN nutritions n
//       ON p.id = n.product_id
//       WHERE p.id = ${id};
//     `; // need to add allergens later

//     res.json(product);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });

// app.post("/products", async (req, res) => {
//   try {
//     await prisma.$queryRaw`
//       INSERT INTO products (korean_name, english_name, category_id)
//       VALUES ('카라멜 프라푸치노', 'Caramel Frappucino', 4);
//     `;

//     const [product] = await prisma.$queryRaw`
//       SELECT p.id, p.category_id, p.korean_name, p.english_name
//       FROM products p
//       ORDER BY id DESC
//       LIMIT 1;
//     `; // SELECT를 할 때는 SQL문만 봐도 어떤 정보가 들어 오는지 알 수 있게 하기 위해 칼럼명을 꼭 명시해 주세요.

//     res.json(product);
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });
