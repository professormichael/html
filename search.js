function connect(list){
    let title = list;
    let img =[];
    let phone_lists ;
    let price;
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
        price = [
            [
                'price',
                '120,000',
                '126,000',
                '125,000',
                '129,000',
                '124,000',
                '123,000',
                '154,000',
                '126,000',
                
            ],[
                'price',
                '120,000',
                '146,000',
                '155,000',
                '139,000',
                '144,000',
                '123,000',
                
            ]
        ]
        localStorage.setItem('price', JSON.stringify(price));
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
        price = [
            [
                'price',
                '120,000',
                '126,000',
                '125,000',
                '129,000',
                
                
            ],[
                
                'price',
                '120,000',
                '146,000',
                '155,000',
                '139,000',
                
            ]
            ,[
                
                'price',
                '120,000',
                '146,000',
                '155,000',
             
                
            ]
        ]
        localStorage.setItem('price', JSON.stringify(price));
        
    
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
    price = [
        [
            'price',
            '120,000',
            '126,000',
            
        ],[
            'price',
            '120,000',
            '146,000',
            
        ]
        ,[
            'price',
            '120,000',
            '146,000',
            '120,000',
            '120,000',
        ]
        ,[
            'price',
            '120,000',
            '146,000',
            '120,000',
            '146,000',            
        ]
        ,[
            'price',
            '120,000',
            '146,000',
            '120,000',
        ]
    ]
    localStorage.setItem('price', JSON.stringify(price));
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
    price = [
        [
            'price',
            '120,000',
            '126,000',
            '125,000',
            '129,000',
            '124,000',
            
        ],[
            'price',
            '120,000',
            '146,000',
            '155,000',
            '139,000',
            
        ]
        ,[
            'price',
            '120,000',
            '146,000',
            '155,000',
            
            
        ]
    ]
    localStorage.setItem('price', JSON.stringify(price));
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
for(var i = 0; i<connect('nokia').length; i++){
    for(var j =0; j<connect('nokia')[i].length; j++){
        
            const opt = document.createElement('option');
            opt.value = connect('nokia')[i][j];
            opt.textContent = connect('nokia')[i][j];
            data.appendChild(opt)
    }
}
for(var i = 0; i<connect('tecno').length; i++){
    for(var j =0; j<connect('tecno')[i].length; j++){
        
            const opt = document.createElement('option');
            opt.value = connect('tecno')[i][j];
            opt.textContent = connect('tecno')[i][j];
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
                    window.location.href = 'phone_details.html';
                    console.log('samsung')
                    localStorage.setItem('lists', JSON.stringify(connect('samsung')));
                    localStorage.setItem('title1','samsung') 
                    window.location.href = `phone_details.html#${connect('samsung')[i][j]}`;
                };
                }
            
        }
        console.log(connect('samsung'), connect('apple'))
        for(var i = 0; i<connect('apple').length; i++){
            for(var j =0; j<connect('apple')[i].length; j++){
                if(connect('apple')[i][j].toLowerCase() === inputElement.value.toLowerCase()){
                    window.location.href = 'phone_details.html';
                    //document.getElementById('apple').click()          
                    //window.location.href = `#${connect('apple')[i][j]}`;
                    localStorage.setItem('lists', JSON.stringify(connect('apple')));
                    localStorage.setItem('title1','apple') 
                    window.location.href = `phone_details.html#${connect('apple')[i][j]}`;
                } 
                }
            
        }
        for(var i = 0; i<connect('nokia').length; i++){
            for(var j =0; j<connect('nokia')[i].length; j++){
                if(connect('nokia')[i][j].toLowerCase() === inputElement.value.toLowerCase()){
                    window.location.href = 'phone_details.html';
                    localStorage.setItem('lists', JSON.stringify(connect('nokia')));
                    localStorage.setItem('title1','nokia') 
                    //window.location.href = `#${connect('nokia')[i][j]}`;
                    console.log('nokia 33')
                    
                } 
                }
            
        }
        for(var i = 0; i<connect('tecno').length; i++){
            for(var j =0; j<connect('tecno')[i].length; j++){
                if(connect('tecno')[i][j].toLowerCase() === inputElement.value.toLowerCase()){
                    //document.getElementById('tecno').click()       
                    window.location.href = 'phone_details.html';
                    localStorage.setItem('lists', JSON.stringify(connect('tecno')));
                    localStorage.setItem('title1','tecno') 
                    //window.location.href = `phone_details.html#${connect('tecno')[i][j]}`;
                } 
                }
            
        }
        
        
    
});
