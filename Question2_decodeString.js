// Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the
// square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s) {
  let numbers = '1234567890'
  s = s.split('[').join('')
  s = s.split(']').join('')
  for(let i = s.length - 1; i >=0; i--) {
    if(numbers.indexOf(s[i]) !== -1) {
      let toMultiply = '';
      let temp = '';
      for(let x = i + 1; x < s.length; x++) {
        toMultiply += s[x]
      }
      for(let y = 1; y <= parseInt(s[i]); y++) {
        temp += toMultiply
      }
      s = s.slice(0, (i - s.length)) + temp
    }
  }
}
