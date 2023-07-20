const forms = document.querySelector('#form');
const main = document.getElementById('container2');//cntainer
const list = document.createElement('ul');
list.className = 'list-items';

const expense = document.querySelector('#expense');
const expdescription = document.querySelector('#description');
const expcategory = document.querySelector('#categories');

forms.addEventListener('submit', formInput);
function formInput(e) {
    e.preventDefault();
    const amount = expense.value;
    const description = expdescription.value;
    const category = expcategory.value;
    //creating object
    const obj = {
        amount,
        description,
        category
    }
    localStorage.setItem(obj.description, JSON.stringify(obj));
    showFun(obj);//tasks to be done function
    expense.value = '';
    expdescription.value = '';
    expcategory.value = '';
}
function showFun(obj) {
    const li = document.createElement('li');
    li.className = 'li-item float-right';
    li.appendChild(document.createTextNode(obj.amount + " - " + obj.description + " - " + obj.category));

    //delete btn
    const dltbtn = document.createElement('button');
    dltbtn.className = 'btn btn-danger mx-2 float-right delete';
    dltbtn.appendChild(document.createTextNode('X'));
    li.appendChild(dltbtn);

    //edit button
    const edtbtn = document.createElement('button');
    edtbtn.className = 'btn btn-secondary float-right  edit';
    edtbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edtbtn);

    list.appendChild(li);
    main.appendChild(list);

     dltbtn.addEventListener('click', funRemove);
     function funRemove(){
        list.removeChild(li);
        localStorage.removeItem(obj.description);
     }
  
    edtbtn.addEventListener('click', () => {
        expense.value = obj.amount;
        expdescription.value = obj.description;
        expcategory.value = obj.category;
        funRemove();
    });

}
