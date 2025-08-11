function getCharTypes () { 
    //This function get the checkbox of characters the user want, and push them into a list charTypes.

    const upperletter = document.querySelector('#upperletter').checked; //Checked returns true or false if the checkbox is marked on console.log.
    const lowerletter = document.querySelector('#lowerletter').checked;
    const number = document.querySelector('#number').checked;
    const specialcharacter = document.querySelector('#specialch').checked;
    
    const charTypes = [];

    if (upperletter) {
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (lowerletter) {
        charTypes.push('abcdefghijklmnopqrstuvwxyz');
    }
    if (number) {
        charTypes.push('1234567890');
    }
    if (specialcharacter) {
        charTypes.push('!@#$%^&*()_-+={}|\\:;"\'<>,.?/~');
    }   
    return charTypes;
}

function getPasswordSize () {
    // This function get the size for the password that user want.

    const passwordsize = document.querySelector('#size').value;
    if (passwordsize < 5 || passwordsize > 100) {
        alert('Valor inválido, digite um número >= 5 ou <= 100!');
    } else {
        return passwordsize;
    }
}

function randomIndexCharType (charTypes) { 
    //This function takes one argument (charTypes) to randomized and select one index.

    const randomIndex = Math.floor(Math.random() * charTypes.length); //Take the length of charTypes and randomize the index.
    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)]; //Take one random character from the random index generated.
}

function generatePassword (passwordsize, charTypes) { 
    //This function generate the password, and needs two arguments (the size of the password, and charTypes randomized).

    let passwordGenerated = '';

    while (passwordGenerated.length <= passwordsize) {
        passwordGenerated += randomIndexCharType(charTypes);
    }
    return passwordGenerated;
}

document.querySelector('#generate').addEventListener('click', function() {
    const size = getPasswordSize();
    const characters = getCharTypes();
    const passwordGenerated = generatePassword(size, characters)
    //console.log(randomIndexCharType(getCharTypes()));
    //console.log(getPasswordSize());
    console.log(generatePassword(size, characters));
    document.querySelector('.password_container').classList.add('show');
    document.querySelector('#password').textContent = passwordGenerated;
});