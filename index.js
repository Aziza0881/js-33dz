
function generateRandomId(length) {
    let ij = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
  
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * ij.length);
      id += ij.charAt(index);
    }
  
    return id;
  }
  
  let Id = generateRandomId(10);
  console.log(Id);


                                              //4

function sortArray(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                sorted = false;
            }
        }
    }

    return arr;
}

let numbers = [5, 2, 8, 1, 4, 3, 10];
let sortedNumbers = sortArray(numbers);
console.log(sortedNumbers);