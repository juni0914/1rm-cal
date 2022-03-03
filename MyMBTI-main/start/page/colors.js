let Link = {
    setColor:function(color){
      // let alist = document.querySelectorAll('a');
      // let i = 0;
      // while(i<alist.length){
      //   alist[i].style.color = color;
      //   i+=1;
      // }
      $('a').css('color',color);
    }
  }
let Body={
    setColor:function(color){
      $('body').css('color',color);
    },
    setBackgroundColor:function(color){
      $('body').css('backgroundColor',color);
    }
  }

function nightDayHandler(self){
  let target= document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');



      self.value = 'day';
      Link.setColor('powderblue');

  }else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Link.setColor('blue');
  }
}
