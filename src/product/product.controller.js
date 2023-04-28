import productModel from './product.model';

//POST / Create
export async function createProduct(req, res) {
  try {
    const product = req.body;
    req.body.active = true;
    const document = await productModel.create(product);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//GET / Read
export async function readProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
export async function readProducts(req, res) {
  res.json('product');
}

//PATCH / Update
export async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE / Delete
export async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

/*
import userModel from './user.model';


//GET / Read
//ID
export async function readUserByID(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//Mail + Password
export async function readUserByMail(req, res) {
  try {
    const { mail, password } = req.params;
    const document = await userModel.findOne({
      mail,
      password,
    });

    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
*/
