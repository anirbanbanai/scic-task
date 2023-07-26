// problem 3

const givenArray = [1,2, 3, 4, 1,3,3,3, 2, 3, 4];

const maxValue = givenArray.reduce((previous, current, _, arr) => {
  if (
    arr.filter((item) => item === previous).length >
    arr.filter((item) => item === current).length
  ) {
    return previous;
  } else {
    return current;
  }
});

console.log(`Element with highest frequency: ${maxValue}`);