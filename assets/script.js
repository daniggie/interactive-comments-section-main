
    function like(id){
        document.querySelector(id).innerHTML = (parseInt(document.querySelector(id).innerText) + 1);
    }

    function dislike(id){
        document.querySelector(id).innerHTML = (parseInt(document.querySelector(id).innerText) - 1);
    }