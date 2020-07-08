const form = document.querySelector('#form');
const userNotification = document.querySelector('#userNotification');

// Named funtion so we can use `this` which is bind to the form object.
function handleSubmitEvent(e) {
  e.preventDefault();
  const stringInput = this.querySelector('[name = stringInput]').value;
  const result = isPalindrome(stringInput);

  return userNotification.innerHTML = `${result ? 'It is definitively a palindrome word' :
   'I am afraid this is just a regular word'}`;
}

const isPalindrome = value => value.toString().toLowerCase().trim().split('').reverse().join('') === value.trim();

form.addEventListener('submit', handleSubmitEvent);

