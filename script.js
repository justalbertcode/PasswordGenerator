const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const charset = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
    
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
    'P','Q','R','S','T','U','V','W','X','Y','Z',

'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
 ".","!", "@", "#", "$", "%", "&", "*", 
];

btn.addEventListener('click', function(){
  let password = '';
  for(let i=0; i < 10; i++){
    let rand = Math.floor(Math.random() * charset.length);
    password += charset[rand];
  }
  result.innerHTML = `<p class="password">${password}</p>`;
})