import React, { useState } from "react";
import "./styles.css";

const upDb = {
  lucknow: [
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
  prayagraj: [
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
