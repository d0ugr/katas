const urlEncode = function(text)
{
  let result = "";

  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    result += (text[i] === " " ? "%20" : text[i]);
  }

  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
