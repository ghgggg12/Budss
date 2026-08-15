document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.Form') as HTMLElement;
  const background = document.querySelector('.Background_Form') as HTMLElement;

  if(form){
    initForm(form);
  }else{
    const observer = new MutationObserver(() => {
      const form = document.querySelector('.Form') as HTMLElement;
      if(form){
        initForm(form);
        observer.disconnect();
      }
    });

    observer.observe(document.body,{
      childList: true,
      subtree: true,
    });
  }
  if(background){
    initBackground(background);
  }else{
    const observer = new MutationObserver(() => {
      const background = document.querySelector('.Background_Form') as HTMLElement;
      if(background) {
        initBackground(background);
        observer.disconnect();
      }
    });

    observer.observe(document.body,{
      childList: true,
      subtree: true,
    });
  }
});

function initForm(form: HTMLElement){
  const buttons1 = document.querySelectorAll('.Contact');
  const buttons2 = document.querySelectorAll('.Buttons_Contact');
  const buttons3 = document.querySelectorAll('.Form_Button_Cross');

  buttons1.forEach(button => {
    button.addEventListener('click', () => {
      form.style.display = 'flex';
    });
  });

  buttons2.forEach(button => {
    button.addEventListener('click', () => {
      form.style.display = 'flex';
    });
  });

  buttons3.forEach(button => {
    button.addEventListener('click', () => {
      form.style.display = 'none';
    });
  });

  // if(!form){
  //   console.log('form error');
  // }
};
function initBackground(background: HTMLElement){
  const buttons1 = document.querySelectorAll('.Contact');
  const buttons2 = document.querySelectorAll('.Buttons_Contact');
  const buttons3 = document.querySelectorAll('.Form_Button_Cross');
  const buttons4 = document.querySelectorAll('.ThankYou_Button_Cross');
  const buttons5 = document.querySelectorAll('.Button_Super');

  buttons1.forEach(button => {
    button.addEventListener('click', () => {
      background.style.display = 'flex';
    });
  });

  buttons2.forEach(button => {
    button.addEventListener('click', () => {
      background.style.display = 'flex';
    });
  });

  buttons3.forEach(button => {
    button.addEventListener('click', () => {
      background.style.display = 'none';
    });
  });
  buttons4.forEach(button => {
    button.addEventListener('click', () => {
      background.style.display = 'none';
    });
  });
  buttons5.forEach(button => {
    button.addEventListener('click', () => {
      background.style.display = 'none';
    });
  });
}