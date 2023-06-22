
$('#dogAPIForm').on('submit', (event) => {
    event.preventDefault();
    
    const numberOfDogs = $('#numberOfDogs').val();
    const url = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
    
    /*
    $.get(url, (data) => {
        $('.results').empty();
        for (let i = 0; i < data.message.length; i ++){
            console.log(data.message[i]);
            $('.results').append(`<img class="dogImage" src="${data.message[i]}" alt="Random dog image">`);
        }
    }); */

    $.ajax({
        url: url,
        method: "GET" 
    }).done((data) => {
        $('.results').empty();
        for (let i = 0; i < data.message.length; i ++){
            console.log(data.message[i]);
            $('.results').append(`<img class="dogImage" src="${data.message[i]}" alt="Random dog image">`);
        }
    });

});