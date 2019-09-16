code = function(e){
	return e.charCode || e.keyCode;
}

box = document.getElementById('showbox');
wordBox = document.getElementById('wordBox');

function generateString(charCount, baseString){
	var counter = 0;
	var counter_max = baseString.replace(/<br>/g, '').split('').length;
	if(charCount > counter_max) charCount = counter_max;
	var flag = true;
	var finalArray = new Array();
	originalData = new Array();
	var initialArray = baseString.split('');
	redundant = new Array();
	counter_max = initialArray.length;
	var i = 0;
	for(i = 0; counter != charCount; ++i){
		if(flag){
			if(initialArray[i] == '<'){
				originalData.push(counter + originalData.length)
				flag = false;
				finalArray.push(' ')
			}else{
				finalArray.push(initialArray[i]);
				counter ++;
			}
		}else{
			if(initialArray[i] == '>'){
				flag = true;
			}
		}
	}
	flag = false;
	for(; i < counter_max; ++i){
		if(!flag){
			if(initialArray[i] == ' ' || initialArray[i] == '>'){
				flag = true;
				if(initialArray[i] == ' ')
					redundant.push(initialArray[i]);
				else
					redundant.push('<br>')
			}
		}else{
			redundant.push(initialArray[i]);
		}
	}
	finalArray = finalArray.join('');
	redundant = redundant.join('');
	console.log(finalArray)
	retVal = {finalArray, redundant, originalData};
	return retVal;
}

function replaceWord(e, startOffset){
	wordExists = true;
	alltext = box.innerHTML;
	respData = generateString(startOffset, alltext);
	editableString = respData.finalArray;
	additiveString = respData.redundant;
	alteredPositions = respData.originalData;
	test_list = editableString.split(' ');
	test_expr = test_list[test_list.length - 1];
	try{
		words_predicted = trie.predictWord(test_expr);
	}catch(e){
		words_predicted = new Array();
	}
	if(words_predicted.length != 0){
		var wordStr = '';
		for(var i = 0; i < words_predicted.length; ++i){
			wordStr += '<button onclick="update_word(\'' + words_predicted[i] + '\', ' + startOffset + ');">' + words_predicted[i] + '</button><br>'
		}
		wordBox.innerHTML = wordStr;
	}
}

update_word = function(word, startOffset){
	wordExists = true;
	alltext = box.innerHTML;
	respData = generateString(startOffset, alltext);
	editableString = respData.finalArray;
	additiveString = respData.redundant;
	alteredPositions = respData.originalData;
	test_list = editableString.split(' ');
	test_expr = test_list[test_list.length - 1];
	var wordStr = '';
	wordBox.innerHTML = wordStr;
	test_list[test_list.length - 1] = word;
	editableString = test_list.join(' ');
	alteredPositions = alteredPositions.reverse();
	editableList = editableString.split('');
	for(var i = 0; i < alteredPositions.length; ++i){
		editableList[alteredPositions[i]] = '<br>'
	}
	editableString = editableList.join('');
	box.innerHTML = (editableString + additiveString);
	console.log(word)
}