$(function(){

  $("#menu ul li").on("mouseenter",function(){
    $(".submenu").stop().slideDown(100);
  });

  $("#menubox").on("mouseleave", function(){
    $(".submenu").stop().slideUp(100);
  });

  $("#banner").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000
    
  });

  //p img hover
  $("#p1").on("mouseenter",function(){
    $(this).attr('src','himg/p1.png').css('opacity','0.8');
  });

  $("#p1").on("mouseleave",function(){
    $(this).attr('src','img/p1.jpg').css('opacity','1');
  });

  $("#p2").on("mouseenter",function(){
    $(this).attr('src','himg/p2.png').css('opacity','0.8');
  });

  $("#p2").on("mouseleave",function(){
    $(this).attr('src','img/p2.jpg').css('opacity','1');
  });

  $("#p3").on("mouseenter",function(){
    $(this).attr('src','himg/p3.png').css('opacity','0.8');
  });

  $("#p3").on("mouseleave",function(){
    $(this).attr('src','img/p3.jpg').css('opacity','1');
  });

  $("#p4").on("mouseenter",function(){
    $(this).attr('src','himg/p4.png').css('opacity','0.8');
  });

  $("#p4").on("mouseleave",function(){
    $(this).attr('src','img/p4.jpg').css('opacity','1');
  });


  //o img hover
  $("#o1").on("mouseenter",function(){
    $(this).attr('src','himg/o1.png').css('opacity','0.8');
  });

  $("#o1").on("mouseleave",function(){
    $(this).attr('src','img/o1.jpg').css('opacity','1');
  });
  
  $("#o2").on("mouseenter",function(){
    $(this).attr('src','himg/o2.png').css('opacity','0.8');
  });

  $("#o2").on("mouseleave",function(){
    $(this).attr('src','img/o2.jpg').css('opacity','1');
  });
  $("#o3").on("mouseenter",function(){
    $(this).attr('src','himg/o3.png').css('opacity','0.8');
  });

  $("#o3").on("mouseleave",function(){
    $(this).attr('src','img/o3.jpg').css('opacity','1');
  });
  $("#o4").on("mouseenter",function(){
    $(this).attr('src','himg/o4.png').css('opacity','0.8');
  });

  $("#o4").on("mouseleave",function(){
    $(this).attr('src','img/o4.jpg').css('opacity','1');
  });
  

  //g img hover
  $("#g1").on("mouseenter",function(){
    $(this).attr('src','himg/g1.png').css('opacity','0.8');
  });

  $("#g1").on("mouseleave",function(){
    $(this).attr('src','img/g1.jpg').css('opacity','1');
  });

  $("#g2").on("mouseenter",function(){
    $(this).attr('src','himg/g2.png').css('opacity','0.8');
  });

  $("#g2").on("mouseleave",function(){
    $(this).attr('src','img/g2.jpg').css('opacity','1');
  });

  $("#g3").on("mouseenter",function(){
    $(this).attr('src','himg/g3.png').css('opacity','0.8');
  });

  $("#g3").on("mouseleave",function(){
    $(this).attr('src','img/g3.jpg').css('opacity','1');
  });

  $("#g4").on("mouseenter",function(){
    $(this).attr('src','himg/g4.png').css('opacity','0.8');
  });

  $("#g4").on("mouseleave",function(){
    $(this).attr('src','img/g4.jpg').css('opacity','1');
  });
});
