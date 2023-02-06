// function findLeapYear(arrOfYears){
//     let years = [];
//     for (let i = 0; i < arrOfYears.length; i++) {
//       if (arrOfYears[i] % 4 == 0) {
//          years.push(arrOfYears[i]);
//       }
//     }
//     return years;
//     }

//     let leap_year = findLeapYear([2023,2024,2025,2028,2030]);

//     console.log(leap_year);
// program to check leap year
function checkLeapYear(year) {

  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}

// take input
const year = 1100;

checkLeapYear(year);