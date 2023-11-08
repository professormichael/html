const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchNow = document.getElementById('search_now');
const searchNow1 = document.getElementById('search_now1');
const searchresultstyle = getComputedStyle(searchInput);
const searchIcon = document.getElementById('search_icon');
searchNow.style.display ='none';
searchNow1.style.display ='none';
// Sample data (you can replace this with your own)
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

/*const data = [
  'Result 1',
  'Result 2',
  'Result 3',
  'Result 4',
  'Result 5'
];*/
let data = [
    
]
console.log(connect('samsung'))
for(var i =0; i<connect('samsung').length; i++){
    for(var j = 0; j<connect('samsung')[i].length; j++){
        data.push(connect('samsung')[i][j])
    }
}
for(var i =0; i<connect('apple').length; i++){
    for(var j = 0; j<connect('apple')[i].length; j++){
        data.push(connect('apple')[i][j])
    }
}
for(var i =0; i<connect('nokia').length; i++){
    for(var j = 0; j<connect('nokia')[i].length; j++){
        data.push(connect('nokia')[i][j])
    }
}
for(var i =0; i<connect('tecno').length; i++){
    for(var j = 0; j<connect('tecno')[i].length; j++){
        data.push(connect('tecno')[i][j])
    }
}
//<i class="fa fa-search" style="color: blue; font-size: 30px; cursor: pointer;" onclick="window.location.href = '#searchInput'" ></i>



searchInput.style.display = 'none';
const i__ = document.getElementById('search_now');
searchIcon.addEventListener('click', function(){
    if(searchresultstyle.display ==='none'){
        i__.classList.remove('fa')
        i__.classList.remove('fa-search');
        i__.innerHTML = 'X';
        searchInput.style.display = 'block';
        searchNow1.style.display = 'inline-block';
        searchNow.style.display ='inline-block';

    }
    else if(searchresultstyle.display ==='block'){
        searchNow1.style.display = 'none';
        searchInput.style.display = 'none';
        searchNow.style.display ='none';
    }
})
// Function to display search results
function showResults(results) {
  searchResults.innerHTML = '';
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    searchResults.appendChild(li);
  });
  searchResults.style.display = 'block';
}

// Function to handle user input
searchInput.addEventListener('input', function() {
    i__.classList.remove('fa')
    i__.classList.remove('fa-search');
    i__.innerHTML = 'X';
    const query = this.value;
    const filteredResults = data.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    showResults(filteredResults);
});
i__.addEventListener('click', function(){
    if(i__.innerHTML === 'X'){
        i__.classList.add('fa')
        i__.classList.add('fa-search');
        searchNow1.style.display = 'none';
        document.getElementById('search_now1').style.display ='none'
        searchInput.style.display = 'none';
        searchNow.style.display ='none';
    }
})
// Handle result selection
searchResults.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    searchInput.value = e.target.textContent;
    searchResults.style.display = 'none';
  }
});

// Hide results if user clicks outside the search container
document.addEventListener('click', function(e) {
  if (!searchResults.contains(e.target) && e.target !== searchInput) {
    searchResults.style.display = 'none';
  }
});

document.getElementById('search_now1').addEventListener('click', function(){    
    for(var i = 0; i<connect('samsung').length; i++){
        for(var j =0; j<connect('samsung')[i].length; j++){
            console.log(connect('samsung')[i][j]);
            if(connect('samsung')[i][j].toLowerCase() === searchInput.value.toLowerCase()){
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
            if(connect('apple')[i][j].toLowerCase() === searchInput.value.toLowerCase()){
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
            if(connect('nokia')[i][j].toLowerCase() === searchInput.value.toLowerCase()){
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
            if(connect('tecno')[i][j].toLowerCase() === searchInput.value.toLowerCase()){
                //document.getElementById('tecno').click()       
                window.location.href = 'phone_details.html';
                localStorage.setItem('lists', JSON.stringify(connect('tecno')));
                localStorage.setItem('title1','tecno') 
                //window.location.href = `phone_details.html#${connect('tecno')[i][j]}`;
            } 
            }
        
    }
    
    

});
