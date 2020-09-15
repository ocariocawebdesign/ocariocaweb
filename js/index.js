var colors = ['#fff', '#FAFAFA', '#fff']; // Define Your colors here, can be html name of color, hex, rgb or anything what You can use in CSS
 var active = 0;
 setInterval(function(){
     document.querySelector('body').style.background = colors[active];
     active++;
     if (active == colors.length) active = 0;
 }, 3000);

 console.log('Carregou');