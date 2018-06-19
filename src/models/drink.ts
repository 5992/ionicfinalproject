export class Drink{
  name: string;
  image: string;
  ingredients: string;
  howtomix: string;
  id: string;
  constructor( id, name, image, ingredients, howtomix){
    this.id = id;
    this.name = name;
    this.image = image;
    this.ingredients = ingredients;
    this.howtomix = howtomix;
    return this;
  }
}
