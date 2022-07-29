const container = document.querySelector('.grid-container')
const slider = document.querySelector('#SizeRange');
const colorSelector = document.querySelector('#colorSelector');
let gridSize;
const items = [];
let mouseDown = 0; 
let magic = false; 
let colorPainter = colorSelector.value;
window.onmousedown = () => ++mouseDown;  
window.onmouseup = () => --mouseDown;  
colorSelector.onchange = (event) => colorPainter = colorSelector.value;
start(16);
slider.onchange = (event) => start(slider.value);
function start(size)
{
    let grid_items = document.querySelectorAll(".grid-item")
    grid_items.forEach(item => {
        container.removeChild(item);
    });
    slider.value = size;
    gridSize = (768/slider.value) + 'px ';
    for(let i = 1;i<slider.value;i++)
    {
        gridSize = gridSize + (768/slider.value)+'px ';
    }
    container.style.gridTemplateColumns=`${gridSize}`;
    for(let i = 1;i<=size*size;i++)
    {
        items[i] = document.createElement('div');
        items[i].classList.add( "grid-item" );
        items[i].style.width = (768/slider.value) + 'px';
        items[i].style.height = (768/slider.value) + 'px';
        items[i].addEventListener("mousedown", ()=>{
            if(magic)
                colorPainter = "#" + Math.floor(Math.random()*16777215).toString(16);
            items[i].style.backgroundColor = colorPainter;
        });
        items[i].addEventListener("mouseover", ()=>{
            if(mouseDown == 1)
            {
                if(magic)
                    colorPainter = "#" + Math.floor(Math.random()*16777215).toString(16);    
                items[i].style.backgroundColor = colorPainter;
            }
        });
        
        container.appendChild(items[i]);
    }
}