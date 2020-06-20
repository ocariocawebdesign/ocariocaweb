var colors = ['#2e415c', '#333', '#06060F']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
 var active = 0;
 setInterval(function(){
     document.querySelector('body').style.background = colors[active];
     active++;
     if (active == colors.length) active = 0;
 }, 3000);

 console.log('Carregou')