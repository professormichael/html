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

const dt = document.querySelectorAll('p').length
const dta = document.querySelectorAll('a').length
const dth2 = document.querySelectorAll('.h2').length
const data = document.getElementById('joy');
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


