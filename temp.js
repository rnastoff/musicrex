let url = 'https://tastedive.com/api/similar?';
let search = 'q=red+hot+chili+peppers';
let apiKey = '&k=308154-Test-7CWGEKQA';

fetch(url + search + apiKey, {mode: 'cors'})
  .then(function(response) {
    return response.json();
    //console.log(response);
  })
  .then(function(data) {
    console.log(data);
});
