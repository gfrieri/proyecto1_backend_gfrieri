import userModel from './user.model';

//POST / Create
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

//PATCH / Update
export async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE / Delete
export async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
