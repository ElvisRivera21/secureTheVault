/*Combination Alert*/
const seq1 = (8 + 2);
const seq2 = (20 * 2);
const seq3 = (40 - 1);
alert('The Secret Combination Is : ' + seq1 + ' ' + seq2 + ' ' + seq3);

/*Form Validation*/
document.getElementById('vaultForm').addEventListener('submit', function (event) {
    event.preventDefault();//Prevent default behavior

    //retrive the values of the inputs
    let firstNum = parseInt(document.getElementById('input1').value, 10);
    
 })
