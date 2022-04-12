// const { SearchSource } = require('jest');

let index = 0;
function recursiveSearch(arr, target) {
  if (arr[index] === target) return true;
  console.log(arr[index]);
  index += 1;
  recursiveSearch(arr[index], target);
}

recursiveSearch([1, 2, 3], 2);

// if (require.main === module) {
//   // add your own tests in here
//   console.log('Expecting: true');
//   console.log('=>', recursiveSearch([1, 2, 3], 2));

//   console.log('');

//   console.log('Expecting: false');
//   console.log('=>', recursiveSearch([3, 2, 1], 4));
// }

// module.exports = recursiveSearch;

// Please add your pseudocode to this file
// if arr[i] = target: return
// search(i+1, target)

// And a written explanation of your solution
