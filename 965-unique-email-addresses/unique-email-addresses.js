/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const unique = new Set();

    for (let e of emails) {
        let [local, domain] = e.split('@');
        local = local.split('+')[0];
        local = local.replace(/\./g, '');
        unique.add(`${local}@${domain}`);
    }
    return unique.size;
};