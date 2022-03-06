
public class Solution {

    int[] quickAccessLettersToRank;
    final int alphabet = 26;
    final int ascii_smallCase_a = 97;

    public boolean isAlienSorted(String[] words, String order) {
        initiliaze_quickAccessLettersToRank(order);
        final int size = words.length;
        for (int i = 0; i < size - 1; i++) {
            if (!pairIsInAlienCorrectOrder(words[i], words[i + 1])) {
                return false;
            }
        }
        return true;
    }

    public boolean pairIsInAlienCorrectOrder(String word_1, String word_2) {
        final int minSize = word_1.length() < word_2.length() ? word_1.length() : word_2.length();

        for (int i = 0; i < minSize; i++) {
            int rankFirst = quickAccessLettersToRank[word_1.codePointAt(i) - ascii_smallCase_a];
            int rankSecond = quickAccessLettersToRank[word_2.codePointAt(i) - ascii_smallCase_a];

            if (rankFirst > rankSecond) {
                return false;
            }
            if (rankFirst < rankSecond) {
                return true;
            }
        }
        return word_1.length() <= word_2.length();
    }

    public void initiliaze_quickAccessLettersToRank(String order) {
        quickAccessLettersToRank = new int[alphabet];
        int size = order.length();
        for (int i = 0; i < size; i++) {
            quickAccessLettersToRank[order.codePointAt(i) - ascii_smallCase_a] = i;
        }
    }
}
