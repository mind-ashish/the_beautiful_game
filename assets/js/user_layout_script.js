    $('.my-button').on('click', function () {
      $('.animated-icon').toggleClass('open');
    });
    function navigationToggler(){
      var flag=window.matchMedia('(max-width:768px)').matches;
      if(flag && ($('#navigation').parent('#main-content').length==0)){
        alert('done1');
          var element=$('#navigation').remove();
          console.log(element);
          $('#main-content').append(element);
          alert('done2');
      }
      // flag=window.matchMedia('(min-width:768px)').matches;
      // if(flag && ($('#navigation').parent('#navigation_container').length==0)){
      //   alert('hello1');
      //   var element=$('#navigation').detach();
        
      //   $('#navigation-container').append(element);
      //   alert('hello2');
        
      // }
    }
    window.addEventListener('load',navigationToggler);
    window.addEventListener('resize',navigationToggler);
    


