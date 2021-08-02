console.log('Client side JS file is loaded!');

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const address = searchElement.value;
  myFetch(address);
});

// My solution - opted for async-await
const myFetch = async (address) => {
  const res = await fetch(
    `http://localhost:3000/weather?address=${encodeURIComponent(address)}`
  );
  const data = await res.json();

  if (data.error) {
    console.log(data.error);
  } else {
    console.log(data.location);
    console.log(data.forecast);
  }
};
