'use strict';

const names = ["Piotr", "Adam", "Anna", "Monika"];
const surnames = ["Kania", "Nowak", "Kowalska", " Maszczykowska"];

names.forEach((elem, idx) => {
    let res = document.createElement("tr");
    for(let i = 0; i< 3; i++){
        let tmp = document.createElement("td");
        switch(i) {
            case 0:
                tmp.innerHTML = idx+1;
                break;
            case 1:
                tmp.innerHTML = surnames[idx];
                break;
            case 2:
                tmp.innerHTML = names[idx];
                break;
        }
        res.appendChild(tmp);
    }
    if(idx%2 == 0){
        res.classList.add("table-secondary");
    }
    let tbody = document.querySelector('tbody');
    tbody.appendChild(res);
})


