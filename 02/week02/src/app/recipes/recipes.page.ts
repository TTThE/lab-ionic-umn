import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
  
  getRecipe(recipeId: string){
    this.recipe = this.recipesService.getRecipe(recipeId);
    console.log(this.recipe);
  }

  deleteRecipe(recipeId: string){
    if(this.recipesService.deleteRecipe(recipeId)){
      this.recipes = this.recipesService.getAllRecipes();
    }
    else{
      alert("Cannot delete recipe: something went wrong.");
    }
  }
}
