export default class CommentModel {
  id;
  name;
  text;
  visible;
  productId;
  created;
  updated;
  
  constructor(inputData) {
    this.id = inputData.id;
    this.name = inputData.name;
    this.text = inputData.text;
    this.visible = inputData.visible;
    this.productId = inputData.product_id;
    this.created = new Date(inputData.created_at);
    this.updated = new Date(inputData.updated_at);
  }
}