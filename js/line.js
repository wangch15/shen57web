const dialog = document.querySelector('.show-dialog')

function openwindow(){
   dialog.classList.add('showThis')
}
function closewindow(){
   dialog.classList.remove('showThis')
}
// 點擊視窗外空白處可取消視窗
const linebox = document.querySelector('.linebox')

dialog.onclick = function(bodyclose){
   if(bodyclose.target == linebox){
      closewindow()
      // 阻止事件冒泡
      bodyclose.stopPropagation();
   }else{
      // 阻止另一個事件冒泡
      bodyclose.stopPropagation();
   }
}