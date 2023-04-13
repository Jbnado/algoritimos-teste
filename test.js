function ticoTeco() {

  for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

      console.log("TicoTeco");

    } else if (i % 3 === 0) {

      console.log("Tico");

    } else if (i % 5 === 0) {

      console.log("Teco");

    } else {

      console.log(i);

    }

  }

}

function isPalindrome(s) {



   s = s.toLowerCase();

  



  s = s.replace(/[^a-z]/g, "");

  



  let reversed = s.split("").reverse().join("");

  



  return s === reversed;

}
