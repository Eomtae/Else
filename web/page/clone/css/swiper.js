
    

window.onload = function(){

  let cam = new Swiper(".campain-right", {
    // observer: false,
    // observeParents: false,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

    let txt1 = [
      '발효미원',
      '다시마 발효미원',
      '치킨스톡 오리지널',
      '맛소금',
      '미원',
      '감칠맛미원',
      '중화미원',
      '아미노산미원',
    ]
    const elTxt = document.querySelector('.txt');
    let pro = new Swiper(".product-right", {
      
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
 
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          
        },
        on:{
          slideChange:function(e){
            console.log(e.realIndex)
            elTxt.innerHTML = `<h5>${txt1[e.realIndex]}</h5>`;
          }
        }
      });
      let txt3 = [
        ' "라면에 MSG좀 넣어주세요"...미원라면 인기 ',
        '롯데마트, 미원·만선호프 협업 상품 공개',
      ]

      const elPPP = document.querySelector('.txt2')
      let news = new Swiper(".news-left", {
        // observer: true,
        // observeParents: false,
          slidesPerView: 1,
          spaceBetween: 30,
          loop: false,
          centeredSlides: true,
          navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3",
          },
          on:{
            slideChange:function(e){
              console.log(e.realIndex)
              elPPP.innerHTML = `<b>${txt3[e.realIndex]}</b>`;
            }
          }
        });
  
}






