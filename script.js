const container = document.querySelector('#cont');
let rows = 16;
let columns = 16;
let cells = document.getElementsByClassName('cells')

function createGrid(rows, columns){
    for (let i = 0; i < rows; i++){
        const div2 = document.createElement('div')
        div2.setAttribute('id', `row${i+1}`)
        container.appendChild(div2)
        for (let j=0; j < columns;j++){
            const div1 = document.createElement(`div`)
            div1.setAttribute('id',`div${i}${j}`)
            div1.classList.add('flexitem', 'cells')
            div2.appendChild(div1)
        }
    }
}

function onhvr(){
    for (let i = 0, len=cells.length; i<len; i++){
        cells[i].addEventListener("mousemove", (e)=>{
            e.target.classList.add('hvr');
        })
    }
}

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
