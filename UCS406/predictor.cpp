#include <iostream>
#include <fstream>
#include <mysql.h>
#include <sys/time.h>
#include <stdio.h>
#include <string.h>

using namespace std;

int main(){
	MYSQL_RES *result;
	MYSQL_ROW row;
	MYSQL *connection, mysql;
	int state;
	mysql_init(&mysql);
	ifstream fin("train_file.txt", ifstream::in);
	string fCont;
	if(connection == NULL){
		cout << "Connection Error";
		return 1;
	}
	string query;
	do{
		fin >> fCont;
		// query = "UPDATE WordList SET Frequency = Frequency + 1 WHERE Word = '" + fCont + "';";
		// cout << query << endl;
		state = mysql_query(connection, "UPDATE WordList SET Frequency = Frequency + 1 WHERE Word = '" + fCont + "';");
		if(state != 0){
			cout << mysql_error(connection);
			return 1;
		}
	}while(!fin.eof());
	fin.close();
	return 0;
}











