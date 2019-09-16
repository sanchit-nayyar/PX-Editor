code = function(e){
	return e.charCode || e.keyCode;
}

box = document.getElementById('showbox');

function getWordList(e, startOffset){
	text = box.innerHTML
	num = (text.match(/<br>/g) || []).length
	text = text.replace(/<br>/g, ' ')
	console.log(text)
	text_arr = text.split('');
	first_encounter = '0';
	console.log(startOffset)
	text_arr_new = text_arr.slice(0, startOffset + num);
	n = text_arr_new.length;
	text_arr = text_arr.reverse();
	text_arr_new = text_arr_new.reverse();

	for(var i = 0; i < n; ++i){
		if(text_arr_new[i] == ' '){
			first_encounter = ' ';
			break;
		}
		if(text_arr_new[i] == '\n'){
			first_encounter = '\n';
			break;
		}
	}
	text_arr_new = text_arr_new.reverse();
	test_expr = '';
	if(first_encounter == '0'){
		test_expr = text_arr_new.join('');
		console.log('FEZ')
	}else{
		console.log(text_arr_new)
		text_arr_new = text_arr_new.join('').split(first_encounter);
		test_expr = text_arr_new[text_arr_new.length - 1];
	}
	test_expr = test_expr.split('').reverse().join('').replace('>rb<', ' ').split('').reverse().join('')
	console.log(test_expr)
	console.log('prediction Complete')
	return trie.predictWord(test_expr);									//Word to be Replaced
}

function replaceWord(e, startOffset){
	console.log(startOffset)
	word_found = getWordList(e, startOffset)[0];						//Word to be Replaced
	console.log(word_found)
	addWord = '';
	if(first_encounter == '0'){
		addWord = word_found;
	}else{
		text_arr = box.innerHTML.split(first_encounter);
		console.log(text_arr)
		console.log(text_arr_new.length - 1)
		console.log(text_arr[text_arr_new.length - 1])
		text_arr[text_arr_new.length - 1] = word_found;
		text = text_arr.join(first_encounter);
		console.log(word_found)
		addWord = text;
	}
	addonArray = text_arr.slice(text_arr_new.length, text_arr.length)
	console.log(addWord)
	console.log(addonArray)
	box.innerHTML = addWord
}