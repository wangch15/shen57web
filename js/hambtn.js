const ham_btn = document.querySelector('.header-ham-btn');
const hambox = document.querySelector('#header-hambox');
const hambox_btn = document.querySelector('.hambox-btn');

ham_btn.onclick = function(){
   hambox_btn.classList.add('ham-checked');
   hambox.classList.add('showhambox');
};

hambox_btn.onclick = function(hamboxBtn){
   // 需要終止事件冒泡(兩個div，onclick重疊會導致事件冒泡)
   hamboxBtn.stopPropagation();

   hambox.classList.remove('showhambox');
   ham_btn.classList.remove('ham-checked');
};