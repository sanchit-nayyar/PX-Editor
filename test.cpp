#include <iostream>

using namespace std;

struct node{
	int val;
	node* left;
	node* right;
};

int insert_val(node* root, int val){
	if(root -> val > val){
		if(root -> left == NULL){
			root -> left = new node;
			root -> left -> left = NULL;
			root -> left -> right = NULL;
			root -> left -> val = val;
		}else{
			insert_val(root -> left, val);
		}
	}else{
		if(root -> right == NULL){
			root -> right = new node;
			root -> right -> left = NULL;
			root -> right -> right = NULL;
			root -> right -> val = val;
		}else{
			insert_val(root -> right, val);
		}
	}
	return 0;
}

int main(){
	node *root = new node;
	root -> val = 5;
	root -> left = NULL;
	root -> right = NULL;
	for(int i = 0; i < 5; ++i){
		int x;
		cin >> x;
		if(insert_val(root, x) != 0) cout << "Error inserting " << x << endl;
	}
	return 0;
}