window.onload=()=>{

    function rotate(letter){
      letter.classList.add('flip');  
    }
    var A = document.querySelectorAll('td')[0];
    var B = document.querySelectorAll('td')[1];
    var C = document.querySelectorAll('td')[2];
    var D = document.querySelectorAll('td')[3];
    var temp = 'Null';

    A.addEventListener('click',()=>{
        rotate(A);
        temp = A;
    });
}