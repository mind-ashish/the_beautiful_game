    $('.my-button').on('click', function () {
      $('.animated-icon').toggleClass('open');
    });
    function navigationToggler(){
      var flag=window.matchMedia('(max-width:768px)').matches;
      if(flag && ($('#navigation').parent('#main-content').length==0)){
          var element=$('#navigation').remove();
          $('#main-content').append(element);
      }
      flag=window.matchMedia('(min-width:768px)').matches;
      if(flag && ($('#navigation').parent('#navigation_container').length==0)){
        var element=$('#navigation').remove();    
        $('#navigation_container').append(element);        
      }
    }
    window.addEventListener('load',navigationToggler);
    window.addEventListener('resize',navigationToggler);
    


