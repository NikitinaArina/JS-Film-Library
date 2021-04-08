function lenghtString(str) {
    let maxStr = str[0];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > maxStr.length) maxStr = str[i];
    }
    return maxStr;
}
let string = "llLll lol";
let maxChar;
function frequentChar(string) {
    let str2 = string.toLowerCase();
    let count = 0;
    let max = 0;
    maxChar = '';
    str2.split('').forEach(function (char) {
        if (str2.split(char).length > count) {
            count = str2.split(char).length;
            maxChar = char;
        }
    });
    return maxChar;
}

function changeChar(string) {
    let str2 = string.toLowerCase();
    return str2.replaceAll(maxChar, prompt("Введите символ для замены"));
}

function isAnagram(str, str2) {
    let original, test;
    if (str.trim() === str2.trim()) {
        // они не являются анаграммами
        return false;
    }
    original = str.replace(/\s+/g, '').toLowerCase().split("").sort().join("");
    test = str2.replace(/\s+/g, '').toLowerCase().split("").sort().join("");
    if (original === test) return true;
    else return false;
}