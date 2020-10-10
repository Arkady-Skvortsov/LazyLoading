window.addEventListener('load', () => { //Ну да, если навесить событие на document, то ничего не случиться)

   let mainChildrens = document.querySelectorAll('.main-lazy__childrens');

   let loadingImg = "img/loading_screen.jpg";
   
   let options = {
   	 root: null,
   	 rootMargin: "0px",
     thershold: 0.6
   }; //Если устраивают root и rootMargin, то можно их и не писать

   let callback = (entries, observer) => {
      entries.forEach(entry => {
        let img = entry.target.children[0];  

      	if(entry.isIntersecting && img.classList.contains('loading')) { 
           img.src = img.dataset.src;

           img.classList.remove('loading');
      	} else {
      	   img.src = loadingImg;

      	   img.classList.add('loading');
      	}
      });
   }

   const observer = new IntersectionObserver(callback, options);

   mainChildrens.forEach((main) => observer.observe(main));
});
