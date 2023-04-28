import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const productModel = model('products', productSchema);
export default productModel;
