function isSmooth(sentence) {
	const words= sentence.split(' ');
	for (let word of words){
		if(words.length-1 === words.indexOf(word))return true;
		const lastCharacter= word.slice(-1);
		console.log(lastCharacter)
		const firstCharacterOfNextWord= words[words.indexOf(word)+1].slice(0,1);
		console.log(firstCharacterOfNextWord)
		if(lastCharacter.toString() === firstCharacterOfNextWord.toString()) return true;
		return false;
	}
}

console.log(isSmooth("Someone is outside the doorway"));