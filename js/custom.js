
  (function ($) {
  
  "use strict";

    const main=document.querySelector('main');
    if(main){const notice=document.createElement('aside');notice.className='alert alert-info';notice.setAttribute('aria-label','Historical archive');notice.textContent='Historical archive · values and observing notes on these pages are dated 2025, not live predictions. Current source: ';const link=document.createElement('a');link.href='https://science.nasa.gov/solar-system/comets/3i-atlas/';link.textContent='NASA’s 3I/ATLAS overview';link.target='_blank';link.rel='noopener noreferrer';notice.append(link);main.prepend(notice);}
    // MENU
    $('#sidebarMenu .nav-link').on('click',function(){
      $("#sidebarMenu").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

