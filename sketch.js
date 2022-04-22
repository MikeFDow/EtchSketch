const container = document.querySelector('#container');

const sixteenBtn = document.querySelector('#sixteenBtn');

sixteenBtn.addEventListener("click", sixteen);

thirtytwoBtn.addEventListener("click", thirtytwo);

sixtyfourBtn.addEventListener("click", sixtyfour);

const clearBtn = document.querySelector('#clear');  // WORKS
clearBtn.addEventListener("click", clear2);

/*
const block = document.createElement('div');
block.classList.add('gridBlock');

container.appendChild(block);
*/

// Function for creating a 16x16 grid

function sixteen () {
    if (container.hasChildNodes('gridBlock')) {
       return;
    } else {
        for(i =0; i < 256; i++) {
            const block = document.createElement('div');
            block.classList.add('gridBlock');
            block.addEventListener("mouseover", function(e){
                block.style.background = "black";
            });
            container.appendChild(block);
        }
    }
};

// Function for creating a 32x32 grid

function thirtytwo () {
    if (container.hasChildNodes('gridBlock32')) {
        return;
    } else {
        for(i =0; i < 1024; i++) {
            const block32 = document.createElement('div');
            block32.classList.add('gridBlock32');
            block32.addEventListener("mouseover", function(e){
                block32.style.background = "black";
            })
            container.appendChild(block32);
        }
    }
};

function sixtyfour () {
    if (container.hasChildNodes('gridBlock64')) {
        return;
    } else {
        for(i =0; i < 4096; i++) {
            const block64 = document.createElement('div');
            block64.classList.add('gridBlock64');
            block64.addEventListener("mouseover", function(e){
                block64.style.background = "black";
            })
            container.appendChild(block64);
        }
    }
};

/*
function clear() {
    let elements = document.getElementsByClassName('gridBlock'),
    element;
    while (element = elements[0]) {
    element.parentNode.removeChild(element);
}
};
*/

function clear2() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}





// only changes the color of the first div in upper corner

/*
document.querySelector(".gridBlock").addEventListener("mouseover", function () {
    document.querySelector(".gridBlock").style.background = "black";
});
*/

