document.getElementById('spinner').style.display = 'none';

const lodeData = async () => {
  document.getElementById('spinner').style.display = 'block';
  const searchField = document.getElementById('input-field');
  const searchText = searchField.value;

  if (searchText === '') {
    alert('please give a text');
    return false;
  }
  searchField.value = '';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data);
};

const displayData = (phones) => {
  document.getElementById('spinner').style.display = 'block';

  const displayField = document.getElementById('display-field');
  displayField.textContent = '';

  if (phones.length == 0) {
    alert('please give a proper value');
  }
  const sli = phones.slice(0, 20);
  sli.forEach((phone) => {
    // console.log(phone);
    // const displayField = document.getElementById('display-field');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title"><b>Brand Name:</b> ${phone.brand}</h5>
                <p class="card-text"><b>Device Name:</b> ${phone.phone_name}</p>
                <button href="#" onclick="lodeDetails('${phone.slug}')" class="btn btn-primary">Go Details</button>
            </div>
        </div>
    `;
    displayField.appendChild(div);
  });
  document.getElementById('spinner').style.display = 'none';
};

const lodeDetails = async (phoneId) => {
  // console.log(phoneId);

  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
};

const displayDetails = (phone) => {
  console.log(phone);
  const displayDetail = document.getElementById('display-detail');
  displayDetail.textContent = '';
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
      <div style="margin: 0 auto; float: none; margin-bottom: 10px; width: 30rem;" class="card">
              <div class="card-body">
              <img src="${
                phone.image ? phone.image : 'Image not found'
              }" class="card-img-top" alt="..." />
                  <h5 class="card-title"><b>Brand:</b> 
                  ${phone.brand ? phone.brand : 'Brand not found'}
                  </h5>
                  <p class="card-text"><b>Device Name:</b> 
                  ${phone.name ? phone.name : 'Device name not found'}
                  </p>
                  <p class="card-text"><b>Release Date:</b> 
                  ${phone.releaseDate}
                  </p>
                  <p class="card-text"><b>Main Features:</b> </br>
                  Storage: ${
                    phone.mainFeatures.storage
                      ? phone.mainFeatures.storage
                      : 'Storage not found'
                  } </br>
                  Display Size: ${
                    phone.mainFeatures.displaySize
                      ? phone.mainFeatures.displaySize
                      : 'Display size not found'
                  } </br>
                  Chip Set: ${
                    phone.mainFeatures.chipSet
                      ? phone.mainFeatures.chipSet
                      : 'Chip set not found'
                  } </br>
                  </p>
                  
              </div>
          </div>
      `;
  displayDetail.appendChild(div);
};
