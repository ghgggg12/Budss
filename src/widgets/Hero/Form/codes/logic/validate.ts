document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.Form') as HTMLElement;

    if (form){
        init(form);
    }else{
        const observer = new MutationObserver(() =>{
        const form = document.querySelector('.Form') as HTMLElement;
            if (form) {
                init(form);
                observer.disconnect();
            }
        });

        observer.observe(document.body,{
            childList: true,
            subtree: true,
        });
    }
});


function init(form: HTMLElement) {
    const starInput = form.querySelectorAll<HTMLInputElement>('.star_input');
    const starText = form.querySelectorAll<HTMLElement>('.star_text');
    const FormStarText = form.querySelector<HTMLElement>('.Form_Star_Text');
    const button1 = form.querySelector<HTMLElement>('.Form_Button');

    if (!FormStarText || !button1) return;

    button1.addEventListener('click', () => {
        starInput.forEach(input =>{
            let Empty = false;

            if(input.value.trim() === ''){
                FormStarText.style.display = 'flex';
                input.style.borderColor = 'red';
                starText.forEach(
                    text => text.style.display = 'flex'
                );
            }else{
                FormStarText.style.display = 'none';
                input.style.borderColor = '#a7a7a748';
                starText.forEach(
                    text => text.style.display = 'none'
                );
            }

            starInput.forEach(inp => {
                if (inp.value.trim() === '') {
                    Empty = true;
                }
            });

            if(Empty){
                FormStarText.style.display = 'flex';
                input.style.borderColor = 'red';
                starText.forEach(
                    text => text.style.display = 'flex'
                );
            }else{
                FormStarText.style.display = 'none';
                input.style.borderColor = '#a7a7a748';
                starText.forEach(
                    text => text.style.display = 'none'
                );
            }
        });
    });
}