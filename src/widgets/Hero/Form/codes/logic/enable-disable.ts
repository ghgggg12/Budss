document.addEventListener('DOMContentLoaded', () => {
  const ThankYou = document.querySelector('.ThankYou') as HTMLElement;

  if(ThankYou){
    initThankYou(ThankYou);
  }else{
    const observer = new MutationObserver(() => {
      const ThankYou = document.querySelector('.ThankYou') as HTMLElement;
      if(ThankYou){
        initThankYou(ThankYou);
        observer.disconnect();
      }
    });

    observer.observe(document.body,{
      childList: true,
      subtree: true,
    });
  }
});

function initThankYou(ThankYou: HTMLElement){
  const buttons1 = document.querySelectorAll('.Button_Super');
  const buttons2 = document.querySelectorAll('.ThankYou_Button_Cross');

  buttons1.forEach(button => {
    button.addEventListener('click', () => {
      ThankYou.style.display = 'none';
    });
  });
  buttons2.forEach(button => {
    button.addEventListener('click', () => {
      ThankYou.style.display = 'none';
    });
  });

  // if(!ThankYou){
  //   console.log('ThankYou error');
  // }
};