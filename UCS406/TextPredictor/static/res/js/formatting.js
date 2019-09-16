test = function(e){
	if(e.ctrlKey){

		var range = window.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(box);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;

		offsetsObject = window.getSelection().getRangeAt(0)
		var startOffset = offsetsObject.startOffset;

		//BOLD
		if(code(e) == 66 || code(e) == 98){
			e.preventDefault();
			document.execCommand('bold');
			return ;
		}

		//ITALIC
		if(code(e) == 73 || code(e) == 105){
			e.preventDefault();
			document.execCommand('italic');
			return ;
		}

		//UNDERLINE
		if(code(e) == 85 || code(e) == 117){
			e.preventDefault();
			document.execCommand('underline');
			return ;
		}

		//Replacement Algorithm
		if(code(e) == 32 || code(e) == 13){
			// words = getWordList(e, caretOffset);
			// sbx = document.getElementById('wordBox');
			// n = words.length;

			// cont = '';

			// for(var i = 0; i < n; ++i){
			// 	cont += words[i] + '<br>';
			// }
			// sbx.innerHTML = cont;
			replaceWord(e, caretOffset);
		}

	}
}

updateFont = function(){
	fontName = document.getElementById('ffamily').value;
	document.execCommand('fontName', false, fontName);
}

updateColor = function(){
	color = document.getElementById('color').value;
	document.execCommand('forecolor', false, color);
}

updateSize = function(){
	console.log('Size Update Trigger')
	size = document.getElementById('fsize').value;
	if(parseInt(size) > 7){
		size = '7';
	}
	document.execCommand('fontSize', false, parseInt(size))
}

/*
	startOffset					No of Characters before selection starts
	endOffset - startOffset		No of Characters selected
*/