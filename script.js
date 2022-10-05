const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
        if(entry.isIntersecting) {
            entry.target.classList.add('not_hidden');
        } else {
            entry.target.classList.remove('not_hidden');
        }
    }) 
})

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el) => observer.observe(el));