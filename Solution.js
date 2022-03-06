
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    this.alphabet = 26;
    this.ascii_smallCase_a = 97;
    this.quickAccessLettersToRank = new Array(this.alphabet);
    initiliaze_quickAccessLettersToRank(order);

    const size = words.length;
    for (let i = 0; i < size - 1; i++) {
        if (!pairIsInAlienCorrectOrder(words[i], words[i + 1])) {
            return false;
        }
    }
    return true;
};

/**
 * @param {string} word_1
 * @param {string} word_2
 * @return {boolean}
 */
function pairIsInAlienCorrectOrder(word_1, word_2) {
    const minSize = word_1.length < word_2.length ? word_1.length : word_2.length;

    for (let i = 0; i < minSize; i++) {
        let rankFirst = this.quickAccessLettersToRank[word_1.codePointAt(i) - this.ascii_smallCase_a];
        let rankSecond = this.quickAccessLettersToRank[word_2.codePointAt(i) - this.ascii_smallCase_a];

        if (rankFirst > rankSecond) {
            return false;
        }
        if (rankFirst < rankSecond) {
            return true;
        }
    }
    return word_1.length <= word_2.length;
}

/**
 * @param {string} order
 */
function initiliaze_quickAccessLettersToRank(order) {
    const size = order.length;
    for (let i = 0; i < size; i++) {
        this.quickAccessLettersToRank[order.codePointAt(i) - this.ascii_smallCase_a] = i;
    }
}
