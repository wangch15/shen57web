const dialog = document.querySelector('.show-dialog')

function openwindow(){
   dialog.classList.add('showThis');
}
function closewindow(){
   dialog.classList.remove('showThis');
}
// 點擊視窗外空白處可取消視窗
const linebox = document.querySelector('.linebox')

dialog.onclick = function(bodyclose){
   if(bodyclose.target == linebox){
      closewindow();
      bodyclose.stopPropagation();
   }else{
      bodyclose.stopPropagation();
   }
}