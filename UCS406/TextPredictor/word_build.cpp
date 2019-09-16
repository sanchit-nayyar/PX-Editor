#include <iostream>
#include <fstream>
#include <mysql.h>
#include <sys/time.h>
#include <stdio.h>

using namespace std;

int main(int argc, char const *argv[]){
	MYSQL_RES *result;
	MYSQL_ROW row;
	MYSQL *connection, mysql;
	int state;
	mysql_init(&mysql);
	ofstream fout(argv[1], ofstream::out);
	connection = mysql_real_connect(&mysql, "localhost", "root", "password", "UCS406", 0, 0, 0);
	if(connection == NULL){
		cout << "Connection Error";
		return 1;
	}
	state = mysql_query(connection, "SELECT * FROM WordList ORDER BY Frequency DESC");
	if(state != 0){
		cout << mysql_error(connection);
		return 1;
	}
	result = mysql_store_result(connection);
	while ((row = mysql_fetch_row(result)) != NULL){
		fout << "trie.addWord('" << row[0] << "');\n";
	}
	fout.close();
	return 0;
}