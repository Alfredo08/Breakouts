

$('.cocktail-info').on('submit', (event) => {
    event.preventDefault();
    const $searchTerm = $('#cocktail-name').val();
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${$searchTerm}`;
    /*
    $.ajax({
        url: URL,
        method: 'GET',
        success: (responseJSON) => {
            $('.results').empty();
            responseJSON.drinks.forEach((drink) => {
                let ingredients = "";
                for(let i = 0; drink['strIngredient'+(i+1)] != null; i ++){
                    ingredients += `<li>${drink['strIngredient'+(i+1)]} ${drink['strMeasure'+(i+1)]}</li>`
                }

                $('.results').append(`
                    <h2>${drink.strDrink}</h2>
                    <div class="drink-card">
                        <div class="drink-image">
                            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                        </div>
                        <div class="drink-info">
                            <h3> Ingredients </h3>
                            <ul class="ingredients">
                                ${ingredients}
                            </ul>
                            <h3> Instructions </h3>
                            <p>${drink.strInstructions}</p>
                        </div>
                    </div>
                `);
            });
        },
        error: (err) => {
            console.log(err);
        }
    }); */

    $.get(URL)
        .done((responseJSON) => {
            $('.results').empty();
            responseJSON.drinks.forEach((drink) => {
                let ingredients = "";
                for(let i = 0; drink['strIngredient'+(i+1)] != null; i ++){
                    ingredients += `<li>${drink['strIngredient'+(i+1)]} ${drink['strMeasure'+(i+1)]}</li>`
                }

                $('.results').append(`
                    <h2>${drink.strDrink}</h2>
                    <div class="drink-card">
                        <div class="drink-image">
                            <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                        </div>
                        <div class="drink-info">
                            <h3> Ingredients </h3>
                            <ul class="ingredients">
                                ${ingredients}
                            </ul>
                            <h3> Instructions </h3>
                            <p>${drink.strInstructions}</p>
                        </div>
                    </div>
                `);
            });
        });
});