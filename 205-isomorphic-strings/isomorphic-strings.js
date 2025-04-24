/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let smap = new Map();
    let tmap = new Map();

    for (let i = 0; i < s.length; i++) {
        let char_one = s[i];
        let char_two = t[i];

        if (!smap.has(char_one)) {
            smap.set(char_one, char_two);
        }

        if (!tmap.has(char_two)) {
            tmap.set(char_two, char_one);
        }

        if (smap.get(char_one) !== char_two || tmap.get(char_two) !== char_one) {
            return false;
        }
    }
    return true;
};