import React, { useState } from "react";
import "./styles.css";

const upDb = {
  Lucknow: [
    {
      name: "Rumi darwaza",
      desciption:
        "It is said to be identical in design to an ancient portal at Constantinople in Turkey and is also referred to as Turkish Gate. It is a huge ornate structure, marked by an eight faceted chhatri in its uppermost part. In earlier times it was used to mark the entrance to the Old Lucknow City. It is now adopted as a symbol of the city of Lucknow. It was built by Nawab Asaf-ud-Daula to generate employment during the famine of 1784.",
      poster:
        "http://uptourism.gov.in/images/gallery/lucknow/place_of_interest/rumi.jpg"
    },
    {
      name: "Bara Imambara",
      desciption:
        "Its central hall is said to be the largest vaulted chamber in the world. Except for the galleries in the interior, there is no woodwork in the entire structure. It is now used by Shia Muslims for the purpose of Azadari.",
      poster: "http://uptourism.gov.in/images/banner/bara_imambara.jpg"
    },
    {
      name: "La Martiniere",
      desciption:
        "The finest and the largest example of European funerary monument in the subcontinent, La Martiniere is associated with its rather strange and romantic past. Built and designed by French soldier turned architect Claude Martin, it incorporates the features of Italian architecture, fusing them with native architectural attributes of Hindu and Mughal architecture. Another college by the same name is situated in Kolkata.",
      poster: "http://uptourism.gov.in/images/banner/la_martiniere.jpg"
    }
  ],
  Prayagraj: [
    {
      name: "Sangam",
      desciption:
        "This is the point where the brown water of the Ganga meets the green water of the Yamuna, along with the mythical Saraswati, which remains unseen but believed to run underground. It is located about 7 km from Civil Lines, overlooked by the eastern ramparts of the Akbar Fort.",
      poster: "http://uptourism.gov.in/images/banner/sangam.jpg"
    },
    {
      name: "Allahabad Fort",
      desciption:
        "The massive fort built by Emperor Akbar in 1583 A.D. stands on the banks of the Yamuna, close to the confluence site. In its prime, the fort was unrivalled for its design, construction and craftsmanship.",
      poster: "http://uptourism.gov.in/images/banner/allahabad_fort.jpg"
    },
    {
      name: "Kumbh Mela",
      desciption:
        "Prayag in modern-day Prayagraj is believed to be the most important pilgrimage centre for Hindus. Traditionally river confluences are regarded as auspicious places, but in Sangam, the significance of the confluence is most pious because here, the holy Ganga, Yamuna and the mythical Saraswati meet to become one.",
      poster:
        "http://uptourism.gov.in/site/writereaddata/uploadedImages/Image/I_201505021701097884.jpg"
    }
  ],
  Ayodhya: [
    {
      name: "Ram ki Paidi",
      desciption:
        "A series of ghats set on the banks of river Saryu that serves as a platform to devotees who come here to wash away their sins. It also has lush green gardens surrounded by temples. The river front brings forth an outstanding panorama especially in floodlit night. These serve as platforms to devotees who, it is believed, come to wash away their sins by taking a dip in the holy river. Saryu provides a regular supply of water for the ghats and is maintained by the Irrigation Department, Government of Uttar Pradesh.",
      poster:
        "http://uptourism.gov.in/site/writereaddata/siteContent/202007311758225717Ram-Paidi.jpg"
    },
    {
      name: "Hanumangarhi",
      desciption:
        "Constructed in the shape of a fort and accessed by a flight of seventy - six steps, the 10th century ancient temple nestles in the centre of the pilgrim town. It has circular fortifications in each corner and is believed to be the spot where Lord Hanuman resided in a cave and protected the town. The temple has a golden idol of Lord Hanuman; it is counted amongst the most revered sites in Ayodhya",
      poster:
        "http://uptourism.gov.in/site/writereaddata/siteContent/202007311738489761hanumanji.jpg"
    }
  ]
}; //eg { name:"", desciption:"",poster:""}

export default function App() {
  var places = Object.keys(upDb);
  const [dPlace, setdPlace] = useState("lucknow");

  function placeClickHandler(place) {
    setdPlace(place);
  }
  return (
    <div className="App">
      <h1>Uttar Pradesh Tourism</h1>
      {places.map(function (place) {
        return (
          <button onClick={() => placeClickHandler(place)} key={place}>
            {place}
          </button>
        );
      })}
      <ul className="list-no-bullet">
        {upDb[dPlace].map(function (area) {
          return (
            <li key={area.name}>
              <div className="area">{area.name}</div>
              <div>
                <img className="poster" src={area.poster} />
              </div>
              <div className="desc">
                <small>{area.desciption}</small>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
