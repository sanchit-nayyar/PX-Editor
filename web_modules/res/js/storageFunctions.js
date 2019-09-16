prefixKey = 'pxeditor___';

saveDoc = function(){
	docData = box.innerHTML;
	docName = document.getElementById('fName').value;
	while(docName == ''){
		docName = prompt("Please Enter a valid Doc Name");
	}
	localStorage.setItem(prefixKey + docName, docData);
	document.getElementById('fName').value = docName;
	console.log('Saved Successfully')
}

loadDoc = function(){
	docName = '';
	while(docName == ''){
		docName = prompt('Enter Document name to load');
	}
	document.getElementById('fName').value = docName;
	docData = localStorage.getItem(prefixKey + docName);
	if(docData == null){
		docData = '';
	}
	box.innerHTML = docData;
}

rmDoc = function(){
	docName = '';
	while(docName == ''){
		docName = prompt('Enter Document name to load');
	}
	localStorage.removeItem(prefixKey + docName);
}

freshDoc = function(){
	box.innerHTML = '';
	document.getElementById('fName').value = '';
}