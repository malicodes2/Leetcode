/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t === "") return "";

    let countT = new Map();
    let window = new Map();

    // Create frequency map for t
    for (let c of t) {
        countT.set(c, (countT.get(c) || 0) + 1);
    }

    let have = 0, need = countT.size;
    let res = [-1, -1], resLen = Infinity;
    let l = 0;

    // Expand the window
    for (let r = 0; r < s.length; r++) {
        let c = s[r];
        window.set(c, (window.get(c) || 0) + 1);

        // Check if current character meets the frequency requirement
        if (countT.has(c) && window.get(c) === countT.get(c)) {
            have += 1;
        }

        // Shrink the window
        while (have === need) {
            // Update result if it's a smaller window
            if ((r - l + 1) < resLen) {
                res = [l, r];
                resLen = (r - l + 1);
            }

            // Pop from the left
            window.set(s[l], window.get(s[l]) - 1);
            if (countT.has(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                have -= 1;
            }
            l += 1;
        }
    }

    let [lRes, rRes] = res;
    return resLen !== Infinity ? s.slice(lRes, rRes + 1) : "";
};
