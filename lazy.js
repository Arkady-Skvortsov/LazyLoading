window.addEventListener('load', () => { //Ну да, если навесить событие на document, то ничего не случиться)

   let mainChildrens = document.querySelectorAll('.main-lazy__childrens');
   
   let options = {
   	 root: null,
   	 rootMargin: "0px",
     threshold: 0.5
   }; //Если устраивают root и rootMargin, то можно их и не писать

   let callback = (entries, observer) => {
      entries.forEach(entry => {
        let img = entry.target.children[0];

      	if(entry.isIntersecting && !entry.target.classList.contains('loading')) {
           entry.target.classList.add('loading');

           document.title = img.getAttribute("alt"); //Смена title у всей веб-страницы
        } else {
           entry.target.classList.remove('loading');
        }
      });
   }

   const observer = new IntersectionObserver(callback, options);

   mainChildrens.forEach((main) => observer.observe(main));
});
