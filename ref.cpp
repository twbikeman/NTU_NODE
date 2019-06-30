#include <string>
#include <iostream>

using namespace std;

string& myprint(string& word) {
    cout << word << endl;
    return word;
}



int main() {
    string a = "JAVA HELLO";
    myprint(myprint(a));
    return 0;
}