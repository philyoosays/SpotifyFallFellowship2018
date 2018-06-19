// Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t.
// You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output
// should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

string = 'good';
string2 = 'odg';

function sortByString(s, t) {
  let testArray = t.split('');
  let resultArray = s.split('');
  let result = '';
  for(let i = 0; i < testArray.length; i++) {
    while(resultArray.indexOf(t[i]) !== -1) {
      result += resultArray.splice(resultArray.indexOf(t[i]), 1)
    }
  }
  return result
}

sortByString(string, string2)
