#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main (){
	string dataline;
	ifstream infile;
	infile.open("words.txt");
	ofstream myfile;
	myfile.open ("web_modules/res/js/trie_words.js");
	while(!infile.eof()){
		getline(infile, dataline);
		cout << dataline;
		myfile << "trie.addWord('" << dataline << "');\n";
	}
	infile.close();
	myfile.close();
	return 0;
}