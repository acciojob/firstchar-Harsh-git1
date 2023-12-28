function firstChar(text) {
  // your code here
	if(text.length === 0) return "";
	let ans  = "";
	let i=0; 
	while((i < text.length) && (text.charAt(i) === " ")) i++;

	if(i < text.length) ans = text.charAt(i);
	return ans;
}

// Do not change the code below    

const text = prompt("Enter text:");
alert(firstChar(text));
