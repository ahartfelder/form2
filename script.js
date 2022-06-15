let checkbox = document.querySelectorAll('input[type="checkbox"]');
let member = document.querySelectorAll('input[name="member"]');

member[0].addEventListener('click', setMember);
member[1].addEventListener('click', setMember);

function setMember(e) {
    if(e.target.id == 'true') {
        for(box of checkbox){
            box.removeAttribute( 'disabled');
        }
    } else {
        for(box of checkbox){
            if(box.checked){
                console.log(box)
                box.checked = false;
            }
            box.setAttribute( 'disabled','');
        }
    }
}

let select = document.querySelector('select[name="gender"]');

select.addEventListener('change', changeColor);

function changeColor(e) {
    select.style.color = 'black';
}
