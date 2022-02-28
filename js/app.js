// const display

const lodeData = async () => {
  const searchField = document.getElementById('input-field');
  const searchText = searchField.value;
  searchField.value = '';
  //   console.log(searchText);
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data);
};

const displayData = (phones) => {
  console.log(phones);
  phones.forEach((phone) => {
    // console.log(phone);
    const displayField = document.getElementById('display-field');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card" style="width: 18rem">
        <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">Phone Name: ${phone.phone_name}</p>
                <button href="#" onclick="lodeDetails('${phone.slug}')" class="btn btn-primary">Go Details</button>
            </div>
        </div>
    `;
    displayField.appendChild(div);
  });
};

const lodeDetails = async (phoneId) => {
  // const searchField = document.getElementById('input-field');
  // const searchText = searchField.value;
  // searchField.value = '';
  //   console.log(searchText);
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data);
};
