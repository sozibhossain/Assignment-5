

// unified memory

document.getElementById('memory').addEventListener('click', function(){
    const freeMemory = document.getElementById('extra-memory');
    freeMemory.innerText = '0';
    calculateTotal();
})

document.getElementById('extra-memorygb').addEventListener('click', function(){
    const extraMemory = document.getElementById('extra-memory');
    extraMemory.innerText = '180';
    calculateTotal();
})
function getInputValue(){
    const memoryInput = document.getElementById('extra-memory');
    const totalMemory = parseInt(memoryInput.innerText);
    return totalMemory;
    
    
}
function calculateTotal(){
    const totalprice = getInputValue() + 1299;
    document.getElementById('total-price').innerText = totalprice;
    
}

// SSD storage

document.getElementById('free-ssd').addEventListener('click', function(){
    const freeSsd = document.getElementById('extra-Storage');
    freeSsd.innerText = '0';
    storagePrice()
})

document.getElementById('512gb-ssd').addEventListener('click', function(){
    const ssdStorage = document.getElementById('extra-Storage');
    ssdStorage.innerText = '100';
    storagePrice()
})

document.getElementById('1tb-ssd').addEventListener('click', function(){
    const ssdStorage = document.getElementById('extra-Storage');
    ssdStorage.innerText = '180';
    storagePrice()
})

function ssdPrice(){
    const storageInput = document.getElementById('extra-Storage');
    const totalSrorage = parseInt(storageInput.innerText);
    return totalSrorage;
    
    
}
function storagePrice(){
    const totalprice = ssdPrice() + 1299;
    document.getElementById('total-price').innerText = totalprice;
    
}




// Delivery area

document.getElementById('free-delivery').addEventListener('click', function(){
    const deliveryAug = document.getElementById('delivery-charge');
    deliveryAug.innerText = '0';
    deliverychage()
})

document.getElementById('delivery-aug').addEventListener('click', function(){
    const deliveryAug = document.getElementById('delivery-charge');
    deliveryAug.innerText = '20';
    deliverychage()
    
})

function deliveryPrice(){
    const deliveryInput = document.getElementById('delivery-charge');
    const totalDelivery = parseInt(deliveryInput.innerText);
    return totalDelivery;
    
    
}
function deliverychage(){
    const totalprice = deliveryPrice() + 1299;
    document.getElementById('total-price').innerText = totalprice;
    
}



