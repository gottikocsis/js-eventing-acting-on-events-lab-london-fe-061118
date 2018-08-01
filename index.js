var dodger = document.getElementById('dodger')
dodger.style.backgroundColor = 'red'
dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e){
  if (e.which === 39) {
  
   var rightNumbers = dodger.style.right.replace('px', '');
    var right = parseInt(rightNumbers, 10);
    if (right > 0){
    dodger.style.right = `${right - 1}px`;
    }
  }
})