f = open('words.txt')
words = f.read().split('\n')
f.close()


f = open('web_modules/res/js/trie_words.js', 'w')
for word in words:
	f.write('trie.addWord(\'' + word + '\');\n')
f.close()