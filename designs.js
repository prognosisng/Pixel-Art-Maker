// Select color input
// Select size input

var color, width, height;

$('#sizePicker').on('submit', function(event){
event.preventDefault();
color= $('#colorPicker').val();
width= $('#inputWeight').val();
height= $('#inputHeight').val();
makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {

// Your code goes here!
$('tr').remove();
for (n = 1; n <= x; n++){
   $('#pixelCanvas').append('<tr id=table'+ n +'></tr>');
   for(m = 1; m <= y; m++){
       $('tr').filter(':last').append('<td></td>');
   }
}

$('td').click(function addColor(){
   color = $('#colorPicker').val();
   if ($(this).attr('style')) {
       $(this).removeAttr('style')
   } else {
       $(this).css('background-color',color);
   }
})
}

