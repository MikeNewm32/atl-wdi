// Question 1
function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    }
}

// Question 2
function maxOfThree(num1,num2,num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num1 < num2 && num2 > num3) {
        return num2;
    } else if (num1 < num3 && num2 < num3) {
        return num3;
    }
}

// Question 3
function isCharacterAVowel(letter) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.indexOf(letter.toLowerCase()) !== -1) {
        return true;
    }
    return false;
}

// Question 4
function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}


// Question 4
function multiplyArray(numbers) {
  var multiply = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    multiply *= numbers[i];
  }
  return multiply;
}


// Question 5
var numberOfArguments = function(){
  
}



// Question 6
var reverseString = function (){
  
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {
  
}
