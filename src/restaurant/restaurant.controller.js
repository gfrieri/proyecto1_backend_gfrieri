import restaurantModel from './restaurant.model';

//POST / Create
export async function createRestaurant(req, res) {
  try {
    const restaurant = req.body;
    req.body.active = true;
    const document = await restaurantModel.create(restaurant);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//GET / Read
export async function readRestaurant(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//Name AND/OR Categories
export async function readRestaurants(req, res) {
  try {
    const { name, categories } = req.query;
    const filter = {
      ...(name && { name: { $regex: name, $options: 'i' } }),
      ...(categories && { categories: { $in: categories.split(',') } }),
      active: true,
    };
    const documents = await restaurantModel.find(filter);
    documents.length > 0
      ? res.status(200).json(documents)
      : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//PATCH / Update
export async function updateRestaurant(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE / Delete
export async function deleteRestaurant(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findByIdAndUpdate(
      id,
      { active: false },
      { new: true }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
