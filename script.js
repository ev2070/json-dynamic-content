let targetElem = document.getElementById('jsonContent');

let jsonDatabase = [
  {
    "bg-color" : "",
    "bg-img" : "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm422-047-x.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=d51e4afc6dba2e61c284ebbf85814ba2",
    "text-color" : "#000000",
    "name" : "Elizabeth Vazquez",
    "occupation" : "Student",
    "company" : "New York University",
    "addr" : "Brooklyn, NY",
    "website" : "ev2070.github.io",
    "email" : "ev2070@nyu.edu",
    "phone" : "123-456-7890",
    "name-font" : "Lucida Handwriting, sans-serif",
    "rest-font" : "Courier New, monospace"
  },
  {
    "bg-color" : "#405f7c",
    "bg-img" : "https://images.unsplash.com/photo-1668450433152-e56d7e8fe4ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    "text-color" : "#f0f0f0",
    "name" : "John Doe",
    "occupation" : "Financial Consultant",
    "company" : "Chase",
    "addr" : "New York, NY",
    "website" : "google.com",
    "email" : "$$$@gmail.com",
    "phone" : "123-456-7890",
    "name-font" : "Arial, sans-serif",
    "rest-font" : "Helvetica, sans-serif"
  },
  {
    "bg-color" : "#e87ea1",
    "bg-img" : "",
    "text-color" : "#ffffff",
    "name" : "Jane Doe",
    "occupation" : "Spy",
    "company" : "U.S. Government",
    "addr" : "Area 51",
    "website" : "nasa.gov",
    "email" : "###@gmail.com",
    "phone" : "123-456-7890",
    "name-font" : "Verdana, sans-serif",
    "rest-font" : "Georgia, serif"
  }
];

// Add content for each JSON object
// in the database provided
for (var i = 0; i < jsonDatabase.length; ++i) {
  addNewCard(jsonDatabase[i]);
}

function addNewCard(jsonCard) {

  // Make a card div, center it within the page, give it
  // some space from other cards, give it some padding
  // for its content, give it a given text color, give
  // it a height and width that follow the dimensions
  // of a business card (3.5'' x 2''), and give it a shadow
  let newCard = document.createElement("DIV");
  newCard.style.margin = "auto";
  newCard.style.marginBottom = "20vh";
  newCard.style.padding = "3vw";
  newCard.style.color = jsonCard['text-color'];
  newCard.style.height = "24vw";
  newCard.style.width = "42vw";
  newCard.style.boxShadow = "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px";

  // Each card's background color / image should be
  // provided and the latter will take priority
  let bgColor = jsonCard['bg-color'];
  let bgImg = jsonCard['bg-img'];
  if (bgImg != "") {
  	newCard.style.backgroundImage = "url('" + bgImg + "')"
  	newCard.style.backgroundRepeat = "no-repeat";
	newCard.style.backgroundPosition = "center";
	newCard.style.backgroundSize = "cover";
  } else if (bgColor != "") {
  	newCard.style.backgroundColor = bgColor;
  }

  // Give the card a class
  newCard.classList.add('aCard');


  // The card's top portion will be nested
  // as a div inside the card's div
  let newTopHalf = document.createElement("DIV");
  newTopHalf.classList.add('topHalf');
  newCard.appendChild(newTopHalf);


  // The card's top portion will contain an H1
  // element for the owner of the business card
  // with a given font for the name and name
  let newName = document.createElement("H1");
  newName.classList.add('aName');
  newName.style.fontFamily = jsonCard['name-font'];
  newName.style.fontSize = "2.35vw";
  newName.innerText = jsonCard['name'];
  newName.style.marginBottom = "0";
  newTopHalf.appendChild(newName);

  // The card's top portion will also contain an H2
  // element for the occupation of the owner
  // with a different font (only the name will have a
  // distinct font)
  let newOccupation = document.createElement("H2");
  newOccupation.classList.add('anOccupation');
  newOccupation.style.fontFamily = jsonCard['rest-font'];
  newOccupation.style.fontSize = "1.8vw";
  newOccupation.innerText = jsonCard['occupation'];
  newTopHalf.appendChild(newOccupation);


  // The card's bottom portion will be nested
  // as a div inside the card's div and have
  // its text right aligned
  let newBottomHalf = document.createElement("DIV");
  newBottomHalf.classList.add('bottomHalf');
  newBottomHalf.style.textAlign = "right";
  newCard.appendChild(newBottomHalf);

  // The card's bottom portion will first contain
  // the company / brand / organization that the
  // owner is a member or worker of which will be
  // a tad bit bold
  let newCompany = document.createElement("p");
  newCompany.classList.add('aCompany');
  newCompany.style.fontFamily = jsonCard['rest-font'];
  newCompany.style.fontWeight = "900";
  newCompany.style.margin = "1vh";
  newCompany.style.fontSize = "1.5vw";
  newCompany.innerText = jsonCard['company'];
  newBottomHalf.appendChild(newCompany);


  // The card's bottom portion will also contain
  // four pairs of icon and content

  // The 1st pair will have the address and its
  // icon side by side with a little bit of space
  let newPair1 = document.createElement("DIV");
  newPair1.classList.add('aPair');
  newBottomHalf.appendChild(newPair1);

  let newAddr = document.createElement("p");
  newAddr.classList.add('anAddr');
  newAddr.style.fontFamily = jsonCard['rest-font'];
  newAddr.innerText = jsonCard['addr'];
  newAddr.style.display = "inline-block";
  newAddr.style.margin = "1vh";
  newAddr.style.fontSize = "1.4vw";
  newPair1.appendChild(newAddr);

  let locationIcon = document.createElement("i");
  locationIcon.classList.add('fa');
  locationIcon.classList.add('fa_solid');
  locationIcon.classList.add('fa-location-dot');
  locationIcon.style.display = "inline-block";
  locationIcon.style.marginLeft = "1vw";
  newPair1.appendChild(locationIcon);


  // The 2nd pair will have the website and its
  // icon side by side with a little bit of space
  let newPair2 = document.createElement("DIV");
  newPair2.classList.add('aPair');
  newBottomHalf.appendChild(newPair2);

  let newWebsite = document.createElement("p");
  newWebsite.classList.add('aWebsite');
  newWebsite.style.fontFamily = jsonCard['rest-font'];
  newWebsite.innerText = jsonCard['website'];
  newWebsite.style.display = "inline-block";
  newWebsite.style.margin = "1vh";
  newWebsite.style.fontSize = "1.4vw";
  newPair2.appendChild(newWebsite);

  let websiteIcon = document.createElement("i");
  websiteIcon.classList.add('fa');
  websiteIcon.classList.add('fa_solid');
  websiteIcon.classList.add('fa-globe');
  websiteIcon.style.display = "inline-block";
  websiteIcon.style.marginLeft = "1vw";
  newPair2.appendChild(websiteIcon);


  // The 3rd pair will have the email and its
  // icon side by side with a little bit of space
  let newPair3 = document.createElement("DIV");
  newPair3.classList.add('aPair');
  newBottomHalf.appendChild(newPair3);

  let newEmail = document.createElement("p");
  newEmail.classList.add('anEmail');
  newEmail.style.fontFamily = jsonCard['rest-font'];
  newEmail.innerText = jsonCard['email'];
  newEmail.style.display = "inline-block";
  newEmail.style.margin = "1vh";
  newEmail.style.fontSize = "1.4vw";
  newPair3.appendChild(newEmail);

  let envelopeIcon = document.createElement("i");
  envelopeIcon.classList.add('fa');
  envelopeIcon.classList.add('fa_solid');
  envelopeIcon.classList.add('fa-envelope');
  envelopeIcon.style.display = "inline-block";
  envelopeIcon.style.marginLeft = "1vw";
  newPair3.appendChild(envelopeIcon);


  // The 4th pair will have the phone # and its
  // icon side by side with a little bit of space
  let newPair4 = document.createElement("DIV");
  newPair4.classList.add('aPair');
  newBottomHalf.appendChild(newPair4);

  let newPhone = document.createElement("p");
  newPhone.classList.add('aPhone');
  newPhone.style.fontFamily = jsonCard['rest-font'];
  newPhone.innerText = jsonCard['phone'];
  newPhone.style.display = "inline-block";
  newPhone.style.margin = "1vh";
  newPhone.style.fontSize = "1.4vw";
  newPair4.appendChild(newPhone);

  let phoneIcon = document.createElement("i");
  phoneIcon.classList.add('fa');
  phoneIcon.classList.add('fa_solid');
  phoneIcon.classList.add('fa-phone');
  phoneIcon.style.display = "inline-block";
  phoneIcon.style.marginLeft = "1vw";
  newPair4.appendChild(phoneIcon);


  // Finally, we add the entire card onto the page
  targetElem.appendChild(newCard);

}

// // Resources
// // https://www.w3schools.com/jsref/dom_obj_style.asp
// // https://getcssscan.com/css-box-shadow-examples // example #28
// // https://www.w3schools.com/jsref/prop_style_fontweight.asp
// // https://stackoverflow.com/questions/26867795/font-awesome-is-not-showing-icon
// // https://www.w3schools.com/css/css_font.asp
// // https://fontawesome.com/docs/web/add-icons/how-to