import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Array, required: false },
    address: { type: String, required: true },
    categories: {
      type: [String],
      validate: {
        validator: function (array) {
          return array && array.length > 0;
        },
        message: 'Debe ingresar al menos una categoría.',
      },
    },
    inventory: { type: Array, required: false },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const restaurantModel = model('restaurants', restaurantSchema);
export default restaurantModel;

import { Schema, model } from 'mongoose';
