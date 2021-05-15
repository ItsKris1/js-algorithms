function rot13(str) {
    let letters = str.split("");
    console.log(letters);
    for (let i = 0; i < letters.length; i++) {    
        let charCode = letters[i].charCodeAt(0);

        // Latin characters are between 90 and 65
        // We dont want to touch punctuation
        if (charCode > 90 || charCode < 65) {
            continue;
        }

        if (charCode > 77) {
            letters[i] = String.fromCharCode(charCode - 13);
        } else {
            letters[i] = String.fromCharCode(charCode + 13);
        }
    }

    return letters.join("")
}

console.log(rot13("SERR CVMMN!"))