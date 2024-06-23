import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    // private recipeService: RecipeService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchRecipes().subscribe();
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}
