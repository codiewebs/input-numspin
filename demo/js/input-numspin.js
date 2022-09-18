/*************************
Name:       Input Numspin - A Pure javascript input spin plugin.
Version:    1.3.0
Author:     codiewebs.com
file:       js file
*************************/
document.querySelectorAll("[data-numspin").forEach(function(element){
    // input dom
    var parent = element.parentNode;
    var wrapper = document.createElement('div');
    wrapper.className = "input-group input-numspin-element";
    parent.replaceChild(wrapper, element);
    wrapper.appendChild(element);

    var minusBtnVal = '<button class="btn btn-primary minus-btn" type="button">-</button>';
    element.insertAdjacentHTML("beforebegin", minusBtnVal);

    var plusBtnVal = '<button class="btn btn-primary plus-btn" type="button">+</button>';
    element.insertAdjacentHTML("afterend", plusBtnVal);

    var maxVal;
    var minVal;
    var numInput = element;
    //min, max and step values
    if (numInput.hasAttribute('step')) {
        step = parseInt(numInput.getAttribute('step'), 10);
    } else {
        step = 1;
    }
    if (numInput.hasAttribute('max')) {
        maxVal = parseInt(numInput.getAttribute('max'), 10);
    } else {
        maxVal = 99999;
    }
    if (numInput.hasAttribute('min')) {
        minVal = parseInt(numInput.getAttribute('min'), 10);
    } else {
        minVal = 0;
    }
    if (!numInput.hasAttribute('pattern')) {
        numInput.setAttribute('pattern', '[0-9]');
    }
    if(numInput.hasAttribute('data-prefix')){
        var prefixVal = numInput.getAttribute('data-prefix');
        var prefixElem = '<span class="input-group-text">'+prefixVal+'</span>';
        element.insertAdjacentHTML("beforebegin", prefixElem);
    }

    if(numInput.hasAttribute('data-suffix')){
        var suffixVal = numInput.getAttribute('data-suffix');
        var suffixElem = '<span class="input-group-text">'+suffixVal+'</span>';
        element.insertAdjacentHTML("afterend", suffixElem);
    }

    // sizing
    if(numInput.hasAttribute('data-input-size')){
        var sizingVal = numInput.getAttribute('data-input-size');
        if(sizingVal == "sm"){
            console.log(wrapper.classList.add("input-group-sm"))   
        }
    }

    // click events
    new DOMParser().parseFromString(wrapper, "text/html");

    wrapper.querySelector(".plus-btn").addEventListener("click", function(){
        newInputVal = parseInt(numInput.value, 10) + step;

        if (newInputVal <= maxVal) {
            numInput.value = newInputVal;
        }
    })

    wrapper.querySelector(".minus-btn").addEventListener("click", function(){
        newInputVal = parseInt(numInput.value, 10) - step;

        if (newInputVal >= minVal) {
            numInput.value = newInputVal;
        }
    })
});