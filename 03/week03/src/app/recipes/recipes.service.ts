import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Ketupat.jpg',
      ingredients: ['Nasi', 'Air']
    },
    {
      id: 'r3',
      title: 'Pizza Margherita',
      imageUrl: 'https://imgp2.schaer.com/sites/default/files/2017-09/HeaderProducts_Pizza%20Margherita.jpg',
      ingredients: ['Tepung', 'Daun Basil', 'Saus Margherita']
    }
  ]
  
  constructor() { }

  getAllRecipes()
  {
    return [...this.recipes];
  }
  getRecipe(recipeId: string)
  {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
  deleteRecipe(recipeId: string)
  {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
