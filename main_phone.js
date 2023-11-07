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
    
    function connect(list){
        let title = list;
        let img =[];
        let phone_lists ;
        if(list ==='samsung'){
            
            phone_lists =[
                ['Galaxy S series',
                'Galaxy S21',
                'Galaxy S21+',
                'Galaxy S20',
                'Galaxy S20+', 
                'Galaxy S20 Ultra',
                'Galaxy S10',
                'Galaxy S10+', 
                'Galaxy S10e'],
                [
                    'Galaxy A series',
                    'Galaxy A71',
                    'Galaxy A51',
                    'Galaxy A31',
                    'Galaxy A21',
                    'Galaxy A11',
                    'Galaxy A80',

                ]
                
            ]
            //localStorage.setItem('lists', JSON.stringify(phone_lists))
            //for(var i= 0; i<phone_lists.length; i++){
              //  for(var j = 1; j<phone_lists[i].length; j++){
                img.push(`${phone_lists}`);
              //  console.log(img)
                localStorage.setItem('image',JSON.stringify( img))
            //}
            //}
            
            localStorage.setItem('image',JSON.stringify( img))
        
            localStorage.setItem('title', title)
            //console.log(localStorage.getItem('image'))
            //console.log(localStorage.getItem('lists'),localStorage.getItem('title').toUpperCase())
        }
        if(list ==='apple'){
            
            phone_lists =[
                ['iPhone 13 Series',
                    'iPhone 13 mini',
                'iPhone 13',
                'iPhone 13 Pro',
                'iPhone 13 Pro Max',
                ],
                [
                    'iPhone 12 Series',
                    'iPhone 12 mini',
                    'iPhone 12',
                    'iPhone 12 Pro',
                    'iPhone 12 Pro Max',
                    
                ],
                [
                    'iPhone 11 Series',
                    'iPhone 11',
                    'iPhone 11 Pro',
                    'iPhone 11 Pro Max'
                ]
                
            ]
            //for(var i= 0; i<phone_lists.length; i++){
              //  for(var j = 1; j<phone_lists[i].length; j++){
                
            //}
            
        
        }
        if(list ==='nokia'){
            phone_lists = [
                ["Nokia X Series", "Nokia X10", "Nokia X20"],
                ["Nokia G Series", "Nokia G10", "Nokia G20"],
                ["Nokia C Series", "Nokia C01 Plus", "Nokia C10", "Nokia C20", "Nokia C30"],
                ["Nokia 5G Phones", "Nokia 8.3 5G", "Nokia 9 PureView"],
                ["Nokia 3 Series", "Nokia 3.4", "Nokia 3.2", "Nokia 3.1"],
                
              ];
              img.push(`${phone_lists}`);
            
        //console.log(localStorage.getItem('image'))
        //console.log(localStorage.getItem('lists'),lo
    
        localStorage.setItem('image',JSON.stringify( img))
        localStorage.setItem('title', title)
        
        }
        if(list ==='tecno'){
            phone_lists = [
                ["Tecno Camon Series", "Tecno Camon 17", "Tecno Camon 17P", "Tecno Camon 17 Pro", "Tecno Camon 16", "Tecno Camon 16 Pro"],
                ["Tecno Spark Series", "Tecno Spark 8", "Tecno Spark 8P", "Tecno Spark 7", "Tecno Spark 7P"],
                ["Tecno Phantom Series", "Tecno Phantom X", "Tecno Phantom 9", "Tecno Phantom 8"],
                
              ];
              img.push(`${phone_lists}`);
            
        //console.log(localStorage.getItem('image'))
        //console.log(localStorage.getItem('lists'),lo
    
        localStorage.setItem('image',JSON.stringify( img))
        localStorage.setItem('title', title)
        
              
        }
        
        return phone_lists
    }

    const phone_text =[
            'INFINIX',
            'NOKIA',
            'APPLE',

            'ITEL',
            'PS5',
            'SPEAKERS',
            'SAMSUNG',
            'TECNO',
            
            
    ];
    
    document.querySelectorAll('p').forEach(each =>{
        each.style.display = 'none'
    })
    
    const dt = document.querySelectorAll('p').length
    const dta = document.querySelectorAll('a').length
    const dth2 = document.querySelectorAll('.h2').length
    const data = document.getElementById('joy');
    for (var i=0; i<dt; i++){
        
        
        const opt = document.createElement('option');
        opt.value = document.querySelectorAll('p')[i].textContent;
        opt.textContent = document.querySelectorAll('p')[i].textContent;
        data.appendChild(opt)


    }
    
    for (var i=0; i<dta; i++){
        
        
        const opt = document.createElement('option');
        opt.value = document.querySelectorAll('a')[i].textContent;
        opt.textContent = document.querySelectorAll('a')[i].textContent;
        data.appendChild(opt)


    }
    
    for (var i=0; i<dth2; i++){
        const opt = document.createElement('option');
        opt.value = document.querySelectorAll('.h2')[i].textContent;
        opt.textContent = document.querySelectorAll('.h2')[i].textContent;
        data.appendChild(opt)
    }
    for(var i = 0; i<connect('samsung').length; i++){
        for(var j =0; j<connect('samsung')[i].length; j++){
            
                const opt = document.createElement('option');
                opt.value = connect('samsung')[i][j];
                opt.textContent = connect('samsung')[i][j];
                data.appendChild(opt)
        }
    }
    for(var i = 0; i<connect('apple').length; i++){
        for(var j =0; j<connect('apple')[i].length; j++){
            
                const opt = document.createElement('option');
                opt.value = connect('apple')[i][j];
                opt.textContent = connect('apple')[i][j];
                data.appendChild(opt)
        }
    }

    


    const pElements = document.querySelectorAll('p');
    const h2Elements = document.querySelectorAll('.h2');
    const aElements = document.querySelectorAll('a');
    const inputElement = document.getElementById('search');

    inputElement.addEventListener('input', function() {
        document.querySelectorAll('p').forEach(each =>{
            each.style.display = 'none'
        })
     
        const inputValue = inputElement.value.toLowerCase(); // Convert the input to lowercase for case-insensitive matching
        
        pElements.forEach(function(p) {
            const text = p.textContent.toLowerCase(); // Convert the text content to lowercase
            if (text.includes(inputValue)) {
                p.style.display = 'block'         
                p.style.color = 'gray';
                p.style.opacity = '0.7';
                
            }
            else {
                // Reset the style for non-matching <p> elements
                p.style.color = ''; // Reset to the default text color
                p.style.opacity = '1'; // Reset opacity to 1 (fully visible)
            }
            
            
        });
       
    });

    inputElement.addEventListener('change', function(){
        
        
            for(var i = 0; i<pElements.length; i++){
                if(pElements[i].innerText.toLowerCase() === inputElement.value.toLowerCase()){
                    pElements[i].style.display = 'block';         
                    pElements[i].style.color = 'black';
                    pElements[i].style.opacity = '1';
            
                }   
                
            }
            for(var i = 0; i<aElements.length; i++){
                aElements[i].style.textDecoration = 'none';
                if(aElements[i].innerText.toLowerCase() === inputElement.value.toLowerCase()){
                    aElements[i].parentElement.style = 'inline-block';
                    aElements[i].style.textDecoration = 'underline';

                    aElements[i].style.display = 'block';         
                    
                    aElements[i].style.opacity = '1';
                    aElements[i].click()
            
                }   
            }
            for(var i = 0; i<h2Elements.length; i++){
                h2Elements[i].style.textDecoration = 'none';
                if(h2Elements[i].innerText.toLowerCase() === inputElement.value.toLowerCase()){
                    h2Elements[i].parentElement.style = 'inline-block';
                    h2Elements[i].style.textDecoration = 'underline';

                    h2Elements[i].style.display = 'block';         
                    
                    h2Elements[i].style.opacity = '1';
            
                }   
                
            }
            for(var i = 0; i<connect('samsung').length; i++){
                for(var j =0; j<connect('samsung')[i].length; j++){
                    console.log(connect('samsung')[i][j]);
                    if(connect('samsung')[i][j].toLowerCase() === inputElement.value.toLowerCase()){
                        localStorage.setItem('lists', JSON.stringify(connect('samsung')))
                        document.getElementById('samsung').click()          
                        window.location.href = `#${connect('apple')[i][j]}`;
                    };
                  }
                
            }
            console.log(connect('samsung'), connect('apple'))
            for(var i = 0; i<connect('apple').length; i++){
                for(var j =0; j<connect('apple')[i].length; j++){
                    if(connect('apple')[i][j].toLowerCase() === inputElement.value.toLowerCase()){
                        document.getElementById('apple').click()          
                        window.location.href = `#${connect('apple')[i][j]}`;
                    } 
                  }
                
            }
            
            
        
    });