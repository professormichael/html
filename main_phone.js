const script = document.createElement('script')
script.src = 'js.js';
document.body.appendChild(script)
console.log(controlscreen())
const phone_div = document.getElementById('main_phone_products')
const phon_style = getComputedStyle(phone_div);
const phone_a = document.getElementById('phone_a');
phone_div.style.display = 'none';
const laptop_div = document.getElementById('main_laptop_products')
const lap_style = getComputedStyle(laptop_div);
const laptop_a = document.getElementById('laptop_a');
laptop_div.style.display = 'none';
const other_div = document.getElementById('other_products')
const other_style = getComputedStyle(other_div);
const other_a = document.getElementById('other_a');
other_div.style.display = 'none';

phone_a.addEventListener('click', function(){
    if(phon_style.display ==='none'){
        phone_div.style.display = 'inline';
        phone_div.style.transition = 'all 20s';
        phone_a.style.textDecoration = 'underline';
    }
    else if(phon_style.display ==='inline'){
        phone_div.style.display = 'none';
        phone_div.style.transition = 'all 20s';
        phone_a.style.textDecoration = 'none';
    }
})
other_a.addEventListener('click', function(){
    if(other_style.display ==='none'){
        other_div.style.display = 'inline';
        other_div.style.transition = 'all 20s';
        other_a.style.textDecoration = 'underline';
    }
    else if(other_style.display ==='inline'){
        other_div.style.display = 'none';
        other_div.style.transition = 'all 20s';
        other_a.style.textDecoration = 'none';
    }
})
laptop_a.addEventListener('click', function(){
    if(lap_style.display ==='none'){
        laptop_div.style.display = 'inline';
        laptop_div.style.transition = 'all 20s';
        laptop_a.style.textDecoration = 'underline';
    }
    else if(lap_style.display ==='inline'){
        laptop_div.style.transition = 'all 20s';
        laptop_div.style.display = 'none';
        laptop_a.style.textDecoration = 'none';
    }
})

const swipe = document.getElementById('phone_swap');
const swipe_img = document.getElementById('swipe_img');
const swipe_text = document.getElementById('swipe_text');
const phone_list =[
    'Infinix amb.jpg',
    'Nokia.jpg',
    'apple.jpg',
    
    'itel.jpg',
    'product_11.jpg',
    'product_12.jpg',
    'samsung amb.jpg',
    'tecno amb.jpg',
    
    
];

