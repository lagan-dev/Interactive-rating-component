const ratings = document.querySelectorAll('.rating');
const rating_state = document.querySelector('.rating-state');
const thankyou_state = document.querySelector('.thank-you-state');
const submit = document.querySelector('.btn');

let rating_value = 0

ratings.forEach(rating => {
    rating.addEventListener('click', () => {
        rating_value = rating.innerHTML;
        console.log(rating_value);
        reset();
        rating.style.color = 'white'; 
        rating.style.backgroundColor = 'hsl(214, 12%, 54%)';
    });
});

function reset () {
    ratings.forEach(rating => {
    rating.style.color = 'hsl(217, 12%, 63%)'; 
    rating.style.backgroundColor = 'hsl(214, 10%, 28%)';
    });
}

submit.addEventListener('click', () => {
    rating_state.style.display = 'none';
    thankyou_state.style.display = 'block';
    document.querySelector('#rated').innerHTML = rating_value;
})

