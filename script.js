const $ = (id) => document.getElementById(id);
const money = (n) => new Intl.NumberFormat('en-PH', {maximumFractionDigits:0}).format(n);
function updateCalculator(){
  const goal = Math.max(0, Number($('goal').value) || 0);
  const monthly = Math.max(0, Number($('monthly').value) || 0);
  const starting = Math.max(0, Number($('starting').value) || 0);
  const remaining = Math.max(0, goal - starting);
  if(goal <= 0){ $('months').textContent = 'Enter a goal'; $('calcDetail').textContent = 'Use an amount greater than zero.'; return; }
  if(remaining === 0){ $('months').textContent = 'Goal reached!'; $('calcDetail').textContent = 'Your starting savings meet this target.'; return; }
  if(monthly === 0){ $('months').textContent = 'Not yet'; $('calcDetail').textContent = 'Enter a monthly savings amount above zero.'; return; }
  const months = Math.ceil(remaining / monthly);
  $('months').textContent = `${months} month${months===1?'':'s'}`;
  $('calcDetail').textContent = `Saving ₱${money(monthly)} every month · ${months/12>=1?(months/12).toFixed(1)+' years': 'about '+months+' months'}`;
}
['goal','monthly','starting'].forEach(id => $(id).addEventListener('input', updateCalculator));
updateCalculator();
$('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('open');
  menu.setAttribute('aria-expanded','false');
}));
$('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  $('formMessage').textContent = 'Thanks! This demo form is not connected yet. Add a newsletter provider before collecting subscribers.';
});
