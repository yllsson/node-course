console.log('Client side JS file is loaded!');

// My solution - opted for async-await
const myFetch = async () => {
  const res = await fetch('http://localhost:3000/weather?address=Boston');
  const data = await res.json();

  if (data.error) {
    console.log(data.error);
  } else {
    console.log(data.location);
    console.log(data.forecast);
  }
};

myFetch();
