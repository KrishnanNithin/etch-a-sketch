const container = document.querySelector('#cont');
let rows = 16;
let columns = 16;
let cells = document.getElementsByClassName('cells')
let clear = document.getElementById('clear')

function createGrid(rows, columns){
    for (let i = 0; i < rows; i++){
        const div2 = document.createElement('div')
        div2.setAttribute('id', `row${i+1}`)
        div2.classList.add('row')
        container.appendChild(div2)
        for (let j=0; j < columns;j++){
            const div1 = document.createElement(`div`)
            div1.setAttribute('id',`div${i}${j}`)
            div1.classList.add('flexitem', 'cells')
            div2.appendChild(div1)
        }
    }
    onhvr()
}

function onhvr(){
    for (let i = 0, len=cells.length; i<len; i++){
        cells[i].addEventListener("mousemove", (e)=>{
            e.target.classList.add('hvr');
        })
    }
}

clear.addEventListener("click", (e)=>{
    for (let i = 0, len=cells.length; i<len; i++){
        cells[i].classList.remove('hvr')
    }
    container.innerHTML='';
    rows = parseInt(prompt("Enter new sketchpad dimension: "))
    columns = rows
    createGrid(rows, columns)
})

createGrid(rows, columns)
onhvr()


// const div1 = document.createElement('div');
// container.appendChild(div1);
// const div2 = document.createElement('div');
// container.appendChild(div2);
// const div3 = document.createElement('div');
// container.appendChild(div3);
// const div4 = document.createElement('div');
// container.appendChild(div4);
