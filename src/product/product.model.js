import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    restaurant: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const productModel = model('products', productSchema);
export default productModel;
