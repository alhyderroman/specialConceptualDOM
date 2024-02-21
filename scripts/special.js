
const allBtn = document.getElementsByClassName('add-btn');
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-players-container');

        event.target.setAttribute('disabled',false);
       

        //update budget, cart and left

        const firstCartCount=getvalueById('cart');
        if(firstCartCount+1>6){
            alert('limit shes');
            return;
        }
        event.target.parentNode.style.backgroundColor='gray';

        const budget=getvalueById('budget');
        document.getElementById('budget').innerText=budget-parseInt(price);

        const cartCount=getvalueById('cart');
        document.getElementById('cart').innerText=cartCount+1;

        const leftCount=getvalueById('left');
        document.getElementById('left').innerText=leftCount-1;



        const div = document.createElement('div');
        div.classList.add('selected-players');

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedContainer.appendChild(div);

        updateTotalCost(price);
        updateGrandTotal();


    });
}

function updateGrandTotal(status) {
    const totalCost = getvalueById('total-cost');
    if (status) {                 // if any parameter is passed this portion will be executed
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == 'love20') {
            const discountedPrice = totalCost*.20;
            document.getElementById('grand-total').innerText = totalCost-discountedPrice;

        }
        else {
            window.alert('Please Enter a valid coupon code');
        }

    }
    else {
        const totalCost = getvalueById('total-cost');
        document.getElementById('grand-total').innerText = totalCost;

    }
}

function getvalueById(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}

function updateTotalCost(value) {
    const totalCost = getvalueById('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}


