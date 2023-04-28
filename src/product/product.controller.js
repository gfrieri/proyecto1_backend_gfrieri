export async function createProduct(req, res) {}
export async function readProduct(req, res) {
  res.json('product');
}
export async function readProducts(req, res) {
  res.json('product');
}
export async function updateProduct(req, res) {}
export async function deleteProduct(req, res) {}

/*
export async function createUser(req, res) {
  try {
    const user = req.body;
    req.body.active = true;
    const document = await userModel.create(user);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
*/
