let talkingCalendar = function(date)
{
  const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function appendDaySuffix(day)
  {
    day = day.toString();
    switch (day.slice(-1)) {
      case "1":
        day += (day !== "11" ? "st" : "th");
        break;
      case "2":
        day += (day !== "12" ? "nd" : "th");
        break;
      case "3":
        day += (day !== "13" ? "rd" : "th");
        break;
      default:
        day += "th";
        break;
    }
    return day;
  }

  return monthName[parseInt(date.substring(5, 7)) - 1] + " " + appendDaySuffix(parseInt(date.substring(8, 10))) + ", " + date.substring(0, 4);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*
console.log(talkingCalendar("1969/04/01"));
console.log(talkingCalendar("1969/04/02"));
console.log(talkingCalendar("1969/04/03"));
console.log(talkingCalendar("1969/04/04"));
console.log(talkingCalendar("1969/07/11"));
console.log(talkingCalendar("1969/07/12"));
console.log(talkingCalendar("1969/07/13"));
console.log(talkingCalendar("1969/07/14"));
console.log(talkingCalendar("1970/03/21"));
console.log(talkingCalendar("1970/03/22"));
console.log(talkingCalendar("1970/03/23"));
console.log(talkingCalendar("1970/03/24"));
*/
