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
  //   console.log(phones);
  phones.forEach((phone) => {
    // console.log(phone);
    const displayField = document.getElementById('display-field');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Brand Name: ${phone.brand}</h5>
                <p class="card-text">Device Name: ${phone.phone_name}</p>
                <button href="#" onclick="lodeDetails('${phone.slug}')" class="btn btn-primary">Go Details</button>
            </div>
        </div>
    `;
    displayField.appendChild(div);
  });
};

const lodeDetails = async (phoneId) => {
  console.log(phoneId);

  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
};

const displayDetails = (phone) => {
  console.log(phone);
  const displayDetail = document.getElementById('display-detail');
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
      <div style="margin: 0 auto; float: none; margin-bottom: 10px; width: 18rem" class="card">
              <div class="card-body">
                  <h5 class="card-title">${phone.slug}</h5>
                  <p class="card-text">Phone Name: ${phone.name}</p>
              </div>
          </div>
      `;
  displayDetail.appendChild(div);
};
