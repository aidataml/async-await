let favoriteNumber = 10;
let baseURL = "http://numbersapi.com";

/* Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. 
(Make sure you get back JSON by including the json query key, specific to this API.*/

async function part1() {
  let data = await $.getJSON(`${baseURL}/${favoriteNumber}?json`);
  console.log(data);
}
part1();

/* Figure out how to get data on multiple numbers in a single request. Make that request and when you 
get the data back, put all of the number facts on the page.*/

const favoriteNumbers = [10, 20, 30];
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favoriteNumbers}?json`);
  console.log(data);
}
part2();

/* Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. 
It’s okay if some of the facts are repeats.*/

async function part3() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
part3();