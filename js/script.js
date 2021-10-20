//inserisci nome, cognome, colore preferito
// output password nomecognomecolore21
// stampa lunghezza password

const firstname = prompt('Qual è il tuo nome?');
const lastname = prompt('Qual è il tuo cognome?');
const color = prompt('Qual è il tuo colore preferito?');

const password = firstname + lastname + color + '21';

const passwordLength = password.length;

console.log('Nome', firstname);
console.log('Cognome', lastname);
console.log('Colore', color);
console.log('password', password);

console.log('lunghezza password', passwordLength);

document.getElementById('password').innerHTML = 
`
  Password generata: <strong>${password}</strong> <br>
  Lunghezza password: <strong>${passwordLength}</strong> caratteri
`
