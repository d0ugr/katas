let numberOfVowels = function(data)
{
  const vowels = "aeiou";
  let total = 0;

  for (i = 0; i < data.length; i++) {
    if (vowels.indexOf(data[i]) !== -1) {
      total++;
    }
  }

  return total;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
