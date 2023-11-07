swipe_img.src= phone_list[0];
    swipe_text.innerText = phone_text[0]
    let img = 0;
    function swipe_p(){        
        img +=1;
        
        swipe_img.src = phone_list[img]
        swipe_text.innerText = phone_text[img]
        if(img>phone_list.length-1){
        img=0
            swipe_img.src= phone_list[0];
            swipe_text.innerText = phone_text[0]
        }

    }
    setInterval(swipe_p,3000)