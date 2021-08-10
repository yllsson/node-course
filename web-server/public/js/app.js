const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'From javascript';

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

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
    messageOne.textContent = '';
    messageTwo.textContent = data.error;
  } else {
    messageOne.textContent = `${data.location}`;
    messageTwo.textContent = `${data.forecast}`;
  }
};
