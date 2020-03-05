const urlDecode = function(text)
{
  // Tired of writing loops to replace substrings...
  const pairs = text.replace(/%20/g, " ").split("&");
  let pair;
  let result = {};

  for (let i = 0; i < pairs.length; i++) {
    pair = pairs[i].split("=");
    result[pair[0]] = pair[1];
  }

  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
