document.getElementById('spinner').style.display = 'none';
document.getElementById('error1').style.display = 'none';
document.getElementById('error2').style.display = 'none';

const lodeData = async () => {
  const searchField = document.getElementById('input-field');
  const searchText = searchField.value;

  if (searchText === '') {
    document.getElementById('error1').style.display = 'block';
    document.getElementById('error2').style.display = 'none';
    // return false;
  } else {
    document.getElementById('error1').style.display = 'none';

    document.getElementById('spinner').style.display = 'block';
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
    document.getElementById('spinner').style.display = 'none';
  }
};

const displayData = (phones) => {
  document.getElementById('spinner').style.display = 'block';

  const displayField = document.getElementById('display-field');
  displayField.textContent = '';

  const displayDetails = document.getElementById('display-detail');
  displayDetails.textContent = '';

  if (phones.length === 0) {
    document.getElementById('error2').style.display = 'block';
    document.getElementById('error1').style.display = 'none';
  } else {
    document.getElementById('error2').style.display = 'none';
    document.getElementById('error1').style.display = 'none';
    const sli = phones.slice(0, 20);
    sli?.forEach((phone) => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
    <div class="card">
        <img src="${phone.image}" class="card-img-top rounded mx-auto" style="max-width: 75%;" alt="..." />
            <div class="card-body">
                <h5 class="card-title"><b>Brand Name:</b> ${phone.brand}</h5>
                <p class="card-text"><b>Device Name:</b> ${phone.phone_name}</p>
                <button href="#" onclick="lodeDetails('${phone.slug}')" class="btn btn-primary">Go Details</button>
            </div>
        </div>
    `;
      displayField.appendChild(div);
    });
  }
  // document.getElementById('error2').style.display = 'none';
  // const sli = phones.slice(0, 20);
  // sli.forEach((phone) => {
  //   // console.log(phone);
  //   // const displayField = document.getElementById('display-field');
  //   const div = document.createElement('div');
  //   div.classList.add('col');
  //   div.innerHTML = `
  //   <div class="card">
  //       <img src="${phone.image}" class="card-img-top rounded mx-auto" style="max-width: 75%;" alt="..." />
  //           <div class="card-body">
  //               <h5 class="card-title"><b>Brand Name:</b> ${phone.brand}</h5>
  //               <p class="card-text"><b>Device Name:</b> ${phone.phone_name}</p>
  //               <button href="#" onclick="lodeDetails('${phone.slug}')" class="btn btn-primary">Go Details</button>
  //           </div>
  //       </div>
  //   `;
  //   displayField.appendChild(div);
  // });
  // document.getElementById('spinner').style.display = 'none';
};

const lodeDetails = async (phoneId) => {
  const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
};

const displayDetails = (phone) => {
  const displayDetail = document.getElementById('display-detail');
  displayDetail.textContent = '';
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
  <div class="card mb-3" style="margin: 0 auto; float: none; margin-bottom: 10px; max-width: 75%;">
    <div class="row g-0">
      <div class="col-md-4">
      <img src="${
        phone.image ? phone.image : 'Image not found'
      }" class="card-img-top" alt="..." />
      </div>
          <div class="col-md-8">
              <div class="card-body">
            
                  <h5 class="card-title"><b>Brand:</b> 
                  ${phone.brand ? phone.brand : 'Brand not found'}
                  </h5>
                  <p class="card-text"><b>Device Name:</b> 
                  ${phone.name ? phone.name : 'Device name not found'}
                  </p>
                  <p class="card-text"><b>Release Date:</b> 
                  ${
                    phone.releaseDate
                      ? phone.releaseDate
                      : 'Release date note found'
                  }
                  </p>

              <!-- Main Features -->

                  <p class="card-text"><b>Main Features:</b> </br>
                  Storage: ${
                    phone.mainFeatures?.storage
                      ? phone.mainFeatures.storage
                      : 'Storage not found'
                  } </br>
                  Display Size: ${
                    phone.mainFeatures?.displaySize
                      ? phone.mainFeatures.displaySize
                      : 'Display size not found'
                  } </br>
                  Chip Set: ${
                    phone.mainFeatures?.chipSet
                      ? phone.mainFeatures.chipSet
                      : 'Chip set not found'
                  } </br>
                  Memory: ${
                    phone.mainFeatures?.memory
                      ? phone.mainFeatures.memory
                      : 'Memory not found'
                  } </br>
                  Sensors: ${
                    phone.mainFeatures?.sensors
                      ? phone.mainFeatures.sensors
                      : 'Sensors not found'
                  } </br>

                  <!-- others -->

                  </p>
                  <p class="card-text"><b>Others:</b></br>
                  WLAN: ${
                    phone.others?.WLAN ? phone.others.WLAN : 'WLAN not found'
                  } </br>
                  Bluetooth: ${
                    phone.others?.Bluetooth
                      ? phone.others.Bluetooth
                      : 'Bluetooth not found'
                  } </br>
                  GPS: ${
                    phone.others?.GPS ? phone.others.GPS : 'GPS not found'
                  } </br>
                  NFC: ${
                    phone.others?.NFC ? phone.others.NFC : 'NFC not found'
                  }</br>
                  Radio: ${
                    phone.others?.Radio ? phone.others.Radio : 'Radio not found'
                  }</br>
                  USB: ${
                    phone.others?.USB ? phone.others.USB : 'USB not found'
                  }</br>
                  </p>
                  
                  </div>
                </div>
              </div>
            </div>
              
      `;
  displayDetail.appendChild(div);
};

/* 
<div style="margin: 0 auto; float: none; margin-bottom: 10px; width: 20rem;" class="card">
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
                  Memory: ${
                    phone.mainFeatures.memory
                      ? phone.mainFeatures.memory
                      : 'Memory not found'
                  } </br>
                  Sensors: ${
                    phone.mainFeatures.sensors
                      ? phone.mainFeatures.sensors
                      : 'Sensors not found'
                  } </br>
                  </p>
                  
              </div>
          </div> 
          */
