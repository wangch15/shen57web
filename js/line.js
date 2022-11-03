const dialog = document.querySelector('.show-dialog')

function openwindow(){
   dialog.showModal();
}
function closewindow(){
   dialog.close();
}
// 點擊視窗外空白處可取消視窗
const linebox = document.querySelector('.linebox')

dialog.onclick = function(bodyclose){
   if(bodyclose.target == linebox){
      dialog.close();
      // 阻止事件冒泡
      bodyclose.stopPropagation();
   }else{
      // 阻止另一個事件冒泡
      bodyclose.stopPropagation();
   }
}