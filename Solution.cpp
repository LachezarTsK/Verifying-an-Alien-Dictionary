
#include <array>
#include <vector>
using namespace std;

class Solution {
    
    static const size_t alphabet = 26;
    static const int ascii_smallCase_a = 97;
    array<int, alphabet> quickAccessLettersToRank{ 0};

public:

    bool isAlienSorted(vector<string>& words, string order) {
        initiliaze_quickAccessLettersToRank(order);
        const size_t size = words.size();
        for (int i = 0; i < size - 1; i++) {
            if (!pairIsInAlienCorrectOrder(words[i], words[i + 1])) {
                return false;
            }
        }
        return true;
    }

    bool pairIsInAlienCorrectOrder(const string& word_1, const string& word_2) {
        const size_t minSize = word_1.length() < word_2.length() ? word_1.length() : word_2.length();

        for (int i = 0; i < minSize; i++) {
            int rankFirst = quickAccessLettersToRank[word_1[i] - ascii_smallCase_a];
            int rankSecond = quickAccessLettersToRank[word_2[i] - ascii_smallCase_a];

            if (rankFirst > rankSecond) {
                return false;
            }
            if (rankFirst < rankSecond) {
                return true;
            }
        }
        return word_1.length() <= word_2.length();
    }

    void initiliaze_quickAccessLettersToRank(const string& order) {
        const size_t size = order.length();
        for (int i = 0; i < size; i++) {
            quickAccessLettersToRank[order[i] - ascii_smallCase_a] = i;
        }
    }
};
