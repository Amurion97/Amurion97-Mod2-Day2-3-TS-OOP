var recipe = {
    title: "Suon xao chua ngot",
    servings: 2,
    ingredient: [
        "- 400 g sườn thăn",
        "- 4 tbsp nước mắm",
        "- 5 tsp đường",
        "- 5 tsp nước cốt chanh"
    ]
};
console.log(recipe.title);
console.log(recipe.servings);
var N = recipe.ingredient.length;
for (var i = 0; i < N; i++) {
    console.log(recipe.ingredient[i]);
}
