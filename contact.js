let table = document.querySelector('#table');

async function fetchData() {
    let response = await fetch('https://reqres.in/api/unknown');

    if (response.ok) {
        let json = await response.json();
        let dataList = await json.data;
        dataList.forEach((data) => {
            let dataValues = Object.values(data);

            let tr = document.createElement('tr');
            dataValues.forEach((el) => {
                let td = document.createElement('td');
                td.textContent = el;
                tr.appendChild(td);
            });

            table.tBodies[0].appendChild(tr);
        });
    }
}

fetchData();