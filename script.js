const currencySelect = document.getElementById('currencySelect');

if(currencySelect){

  currencySelect.addEventListener('change',()=>{

    const value = currencySelect.value;

    const price = document.querySelector('.price');

    const usd = Number(price.dataset.usd);

    if(value === 'EGP'){
      price.innerText = (usd * 50) + ' EGP';
    }
    else if(value === 'SAR'){
      price.innerText = (usd * 3.75) + ' SAR';
    }

    else{
      price.innerText = usd + ' USD';
    }

  });

}
function goToProduct(){

  const token = localStorage.getItem('token');

  if(!token){
    alert('Please login first');
    window.location.href='login.html';
    return;
  }

  window.location.href='product.html';

}
window.addEventListener('load',()=>{

  const loader = document.getElementById('loader');

  if(loader){
    loader.style.display='none';
  }

});

const darkBtn = document.getElementById('darkModeBtn');

if(darkBtn){

  darkBtn.addEventListener('click',()=>{

    document.body.classList.toggle('dark');

  });

}
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove',(e)=>{

  glow.style.left = e.pageX + 'px';
  glow.style.top = e.pageY + 'px';

});
if(data.token){

  localStorage.setItem('token',data.token);

  window.location.href='index.html';

}
function goToProduct(){

  const token = localStorage.getItem('token');

  if(!token){

    alert('You Need To Login First');

    window.location.href='index2.html';

    return;

  }

  window.location.href='product.html';

}
