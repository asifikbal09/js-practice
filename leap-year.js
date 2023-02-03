function findLeapYear(arrOfYears){
    let years = [];
    for (let i = 0; i < arrOfYears.length; i++) {
      if (arrOfYears[i] % 4 == 0) {
         years.push(arrOfYears[i]);
      }
    }
    return years;
    }

    let leap_year = findLeapYear([2023,2024,2025,2028,2030]);

    console.log(leap_year);
