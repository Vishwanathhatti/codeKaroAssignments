// Assignment 7
function vowelCount(string){
	let lowercase= string.toLowerCase();

	let vowels=['a', 'e', 'i', 'o', 'u'];

	let count=0;

	for (let i = 0; i < lowercase.length; i++) {
    
    if (vowels.includes(lowercase[i])) {
      count++;
    }
  }
  return console.log("the vowel count is", count);
}

let sentence="Codekaro me apka swagat hai";

console.log(sentence);
vowelCount(sentence);