const BASE_URL = "https://newsapi.org";
const token = "Place your API token here!";

$newsForm = $('.news-form');

$newsForm.on('submit', (event) => {
    event.preventDefault();
    $searchText = $('#search-text').val();

    const queryParams = {
        //apiKey : token,
        q : $searchText,
        pageSize : 20 
    };

    $.ajax({
        url : `${BASE_URL}/v2/everything`,
        data : queryParams,
        method : "GET",
        headers : {
            "X-Api-Key" : token
        },
        success : (responseJSON) => {
            $('.results').empty();
            responseJSON.articles.forEach((article) => {
                $('.results').append(`
                    <div class="article">
                        <h2 class="article-title"> ${article.title} </h2>
                        <div class="article-image">
                            <img src="${article.urlToImage}" alt="${article.title}" >
                        </div>
                        <p class="article-author"> ${article.author} </p>
                        <p class="article-description"> ${article.description} </p>
                        <p> 
                            <a target="_blank" href="${article.url}"> Take me to the article </a> 
                        </p>
                    </div>
                `);
            });
        },
        error : (error) => {
            console.log(error);
        }
    });
    
});