let data;

  // Load JSON datas
  fetch('weapons/data.json')
    .then(response => response.json())
    .then(jsonData => {
      data = jsonData;
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));

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
      let imageElement = document.getElementById('randomImage');
      imageElement.src = item.image;
      imageElement.style.display = 'block';
    }
  }
