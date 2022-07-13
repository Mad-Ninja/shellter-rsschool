const cards = document.querySelectorAll('.slider__card'),
  popup = document.querySelector('.popup'),
  popupContent = document.querySelector('.popup_content'),
  closePopupBtn = document.querySelector('.popup_close_btn'),
  blackout = document.querySelector('.blackout');

let pets = [],
  popupImg = document.querySelector('.popup_img'),
  popupPetName = document.querySelector('.popup_content_textblock_titles_title'),
  popupPetType = document.querySelector('.type'),
  popupPetBreed = document.querySelector('.breed'),
  popupPetDescription = document.querySelector('.popup_content_textblock_description'),
  popupPetAge = document.querySelector('.age'),
  popupPetInoculations = document.querySelector('.inoculations'),
  popupPetDiseases = document.querySelector('.diseases'),
  popupPetParasites = document.querySelector('.parasites');


for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', showPopup);
}

closePopupBtn.addEventListener('click', closePopup);
blackout.addEventListener('click', closePopup);

function showPopup(e) {
  popup.style.display = 'flex';
  blackout.style.display = 'block';
  document.body.style.overflow = 'hidden';

  let petName;

  console.log(e.target.className);
  if (e.target.className.split(' ')[0] === 'slider__card') {
    petName = e.target.querySelector('.pet__name').innerText;
  } else if (e.target.className === 'card__image'){
    petName = e.target.parentNode.parentNode.querySelector('.pet__name').innerText;
  } else {
    petName = e.target.parentNode.querySelector('.pet__name').innerText;
  }
  

  for (let i = 0; i < pets.length; i++){
    if (pets[i].name === petName) {
      popupImg.setAttribute('src', pets[i].img);
      popupPetName.innerText = pets[i].name;
      popupPetType.innerText = pets[i].type;
      popupPetBreed.innerText = pets[i].breed;
      popupPetDescription.innerText = pets[i].description;
      popupPetAge.innerText = pets[i].age;
      popupPetInoculations.innerText = pets[i].inoculations;
      popupPetDiseases.innerText = pets[i].diseases;
      popupPetParasites.innerText = pets[i].parasites;
      break;
    }
  }
}

function closePopup() {
  popup.style.display = 'none';
  blackout.style.display = 'none';
  document.body.style.overflow = 'visible';
}



const request = new XMLHttpRequest();
request.open('GET', './pets.json');

request.onload = () => {
  pets = JSON.parse(request.response);
}

request.send();