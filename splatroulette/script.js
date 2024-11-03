let data;

  // Load JSON datas
  fetch('./data.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
    })
    .catch(error => console.error('Cannot loading the JSON file:', error));

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomNumber() {
    let randomInt = getRandomInt(0, 142);
    document.getElementById('randomNumber').innerText = randomInt;

    // Find the right text and picture
    let item = data.find(d => randomInt >= d.min && randomInt <= d.max);
    if (item) {
      document.getElementById('randomText').innerText = item.text;
      let imageElement = document.getElementById('randomWeapon');
      imageElement.src = item.weapon;
      imageElement.style.display = 'block';
      
    }

    if (item) {
      document.getElementById('randomText').innerText = item.text;
      let imageElement = document.getElementById('subWeapon');
      imageElement.src = item.sub;
      imageElement.style.display = 'block';
      
    }

    if (item) {
      document.getElementById('randomText').innerText = item.text;
      let imageElement = document.getElementById('specialWeapon');
      imageElement.src = item.special;
      imageElement.style.display = 'block';
      
    }
  }
