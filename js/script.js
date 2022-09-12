(function(){
    let nav =document.querySelector(".navbar ul");
    let links =document.querySelectorAll(".navbar ul li ");
    let bars=document.querySelector(".fa-bars");
    let landingPage=document.querySelector(".landing");
    bars.addEventListener("click",(e)=>{
        if(nav.classList.contains("showNav") ||nav.classList.contains("closeNav") )
        {
            nav.classList.toggle("closeNav");

        }
        nav.classList.toggle("showNav");
    });
    
    window.onload=function()
    {
        links.forEach(link=>{
                
                if(link.dataset.page ==  window.localStorage.getItem("currentPage"))
                {
                    links.forEach(li=>{
                        li.classList.remove("active");
                    });
                    link.classList.add("active");
                }
        });
        
    }
    links.forEach(link=>{
        link.addEventListener("click",(e)=>{
            links.forEach(li=>{
                li.classList.remove("active");
            });
            e.preventDefault();
            window.location.pathname=`/html/${e.target.closest("li").dataset.page}`;
            e.target.closest("li").classList.add("active");
            window.localStorage.setItem("currentPage",e.target.closest("li").dataset.page);
        });
    });
    
    //swiper js
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      //
      let progress=document.querySelectorAll(".features .skills .skills-progress .progress span")
      window.onscroll=function()
      {

        if(window.location.pathname.includes("html/home.html"))
        {
      let featureOffset=document.querySelector(".features").offsetTop;
        if(window.scrollY >= featureOffset)
        {
            progress.forEach(prog=>{
                prog.style.cssText=`width:${prog.dataset.width}`;
            });
        }else{
            progress.forEach(prog=>{
                prog.style.cssText=`width:0`;

            });
        }
    }
      }
      //profile page
      let tabs =document.querySelectorAll(".gallery .tabs li");
      let imgs=document.querySelectorAll(".gallery .image");
      tabs.forEach(tab=>{
        tab.addEventListener("click",(e)=>{
            tabs.forEach(t=>{
                t.classList.remove("active");
            });
            e.target.classList.add("active");
            if(e.target.dataset.img == 'design')
            {
                showCertinImg("design");
            }else if(e.target.dataset.img == 'web')
            {
                showCertinImg("web");

            }else if(e.target.dataset.img == 'branding')
            {
                showCertinImg("branding");

            }else if(e.target.dataset.img == 'print')
            {
                showCertinImg("print");

            }else{
                showCertinImg("all");

            }
        });
      });
      function showCertinImg(imgType)
      {
        imgs.forEach(img=>{
            img.style.display="block";
           if(imgType == "all")
           {
            img.style.display="block";
           }else if(img.getAttribute("id") !== imgType)
            {
                img.style.display="none";
            }else if(img.getAttribute("id") == imgType){
                img.style.display="block !important";

            }
        });
      }
      new WOW().init();
}());