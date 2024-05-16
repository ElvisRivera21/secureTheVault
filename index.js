//Combination Alert
const seq1 = (8 + 2);
const seq2 = (20 * 2);
const seq3 = (40 - 1);
alert(' You have received this message because you have been chosen to open an important vault. Here is the secret combination:' + seq1 + ' ' + seq2 + ' ' + seq3);

//Form Validation
document.getElementById('vaultForm').addEventListener('submit', function (event) {
    event.preventDefault();//Prevent default behavior

    //Retrive the values of the inputs
    let firstNum = parseInt(document.getElementById('input1').value, 10);
    let secondNum = parseInt(document.getElementById('input2').value, 10);
    let thirdNum = parseInt(document.getElementById('input3').value, 10);

    //Check if combination is correct
    if (firstNum === 10 && secondNum === 40 && thirdNum === 39) {
        document.getElementById('secretImage').style.display = 'block';
        alert('You are in!');
    } else {
        alert('Access Denied!');
    }

});
