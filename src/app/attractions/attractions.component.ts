import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
    
  place = null;

  choosePlace(destination) {
      this.place = destination;
  }

  constructor() { }

  ngOnInit(): void {
    
  }
  attractions = [
      
    {
        "id": 1,
        "country": "Tanzania",
        "name": "Ngorongoro Reserve",
        "description":"The migration of Zebras is actually a year-round event as the animals move from Tanzania Ngorongoros Reserve in January.",
        "picture":"https://www.flickr.com/photos/tipsfortravellers/35071993166/in/photostream/"
    },
    {
        "id": 2,
        "country": "South Africa",
        "name": "Table Mountain",
        "description":"Table Mountain makes Cape Town, one of the world's best beach cities, also one of the world's most photogenic.",
        "picture":"https://cdn.britannica.com/41/75841-050-FAAE44F0/Table-Mountain-Cape-Town-Western-Bay-South.jpg"
    },
    {
        "id": 3,
        "country": "Morocco",
        "name": "Djemaa el Fna",
        "description": "The world's most exciting town square, Djemaa el Fna reminds you you're in Africa (in the heart of the old city of Marrakech).",
        "picture": "https://thumbs.dreamstime.com/z/marrakech-djemaa-el-fna-square-morocco-apr-food-stalls-sunset-evening-large-fills-food-stands-81346713.jpg"
    },
    {
        "id": 4,
        "country": "Namibia",
        "name": "Sossusvlei Dunes",
        "description": "Sossusvlei means the gathering place of water but you'll need to bring your own if you don't want to dehydrate at this, Namibia's most outstanding attraction.",
        "picture":"https://artofsafari.travel/wp-content/uploads/2017/02/iStock_Namibia_NaukluftNationalPark_LandscapeSossusvleiDune.jpg"
    },
    {
        "id": 5,
        "country": "Rwanda",
        "name": "Mountain gorillas",
        "description":"At an elevation of more than 6,000 feet, the Nyungwe National Park is an isolated region, covering more than 386 square miles across southwest Rwanda.",
        "picture":"https://www.wildpeakadventures.com/wp-content/uploads/2020/04/rwanda-gorilla-tour.jpg"
    },
    {
        "id": 6,
        "country": "Zambia and Zimbabwe",
        "name": "Victoria Falls",
        "description":"Thousands have enjoyed the spray from the 108-meter high cascade, which was once recorded flowing at 12,800 cubic meters per second.",
        "picture":"https://images7.alphacoders.com/775/775770.jpg"
    },
    {
        "id": 7,
        "country": "Namibia",
        "name":"Spitzkoppe",
        "description":"The Spitzkoppe is a grouping of granite peaks in Namibia's Namib Desert, with the highest peak hitting nearly 1,800 meters (about 5,900 feet).",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508141321-04-amazing-places-africa---spitzkoppe.jpg"
    },
    {
        "id": 8,
        "country": "Morocco",
        "name": "Sahara Dunes",
        "description":"The most user-friendly part of the Sahara is accessible from the northern edge of Morocco. You can trek with Berbers from the town of Zagoura.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508141322-05-amazing-places-africa---sahara-dunes.jpg"
    },
    {
        "id": 9,
        "country": "Egypt",
        "name": "Pyramids of Giza",
        "description":"The most famous of the structures at Giza, near Cairo, the Pyramid of King Cheops was built around 2650 BC from 2.5 million blocks of limestone.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508141324-06-amazing-places-africa---pyramids.jpg"
    },
    {
        "id": 10,
        "country": "Malawi",
        "name": "Nyika Plateau National Park",
        "description":"Nyika, the largest national park in Malawi, is one of the most unusual in Africa, with a plateau cut by numerous rivers that reach Lake Malawi.",
        "image":"https://image.shutterstock.com/z/stock-photo-landscape-in-nyika-national-park-malawi-619714331.jpg"
    },
    {
        "id": 11,
        "country": "Botswana",
        "name": "Makgadikgadi Pans",
        "description":"It said you can hear your own blood flow in this vast area of dried-up salt pans in the Kalahari Desert, a forbidding landscape formed by a huge lake that dried up millennia ago.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508141325-07-amazing-places-africa---makgadikgadi-pans.jpg"
    },
    {
        "id": 12,
        "country": "Morocco",
        "name": "Draa Valley",
        "description":"Date palms and kasbahs make a good team in the Draa Valley, a fertile band that cuts through desert plateau. Hikers and trekkers are rewarded with some of Moroccos most beautiful scenery.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508141326-08-amazing-places-africa---draa-valley.jpg"
    },
    {
        "id": 13,
        "country": "Egypt",
        "name": "Sphinx",
        "description":"This colossal temple is on the way down to Egypt's Valley Temple of King Chefren. The body of a lion with a human head is 70 meters long and 20 mete high -- as tall as a six-story apartment block.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508141328-09-amazing-places-africa---sphinx.jpg"
    },
    {
        "id": 14,
        "country": "Malawi",
        "name":"Mount Mulanje",
        "description":"The mountain is distinguished by giant basins of rock and narrow gullies cut by fast-flowing strea.A strenuous trek leads to magnificent viewpoints.En route, expect to encounter monkeys, hares, voles.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508141329-10-amazing-places-africa---mount-mulanje.jpg"
    },
    {
        "id": 15,
        "country": "Kenya",
        "name": "Riding safari",
        "description":"The best way to experience Kenya's zebras? From the back of a horse. Travelers can gallop alongside the stripey beasts in the Masai Mara.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160808124950-zebra.jpg"
    },
    {
        "id": 16,
        "country": "Egypt",
        "name": "Wonders of the Nile",
        "description":"A cruise down the Egyptian Nile, ideally on a romantic felucca rather than a crowded tourist boat, reveals relics of one of the world's most ancient civilizations.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508142104-11-amazing-places-africa---nile.jpg"
    },
    {
        "id": 17,
        "country": "Kenya",
        "name": "Flamingos",
        "description":"Lake Nakuru National Park is home to 1 million resident flamingos, providing one of Kenyas most unforgettable sights. This lake has become famous for the greatest bird spectacle in the world.",
        "picture":'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508142108-12-amazing-places-africa---flamingos.jpg'
    },
    {
        "id": 18,
        "country": "Zambia",
        "name": "Lower Zambezi",
        "description":"Canoeing safaris in the Lower Zambezi offer sightings of hippos, elephants and other animals drinking from the rivers and tributaries around camp.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508142111-13-amazing-places-africa---lower-zambezi.jpg"
    },
    {
        "id": 19,
        "country": "Mozambique",
        "name": "Bazaruto Archipelago",
        "description":"The 10-minute helicopter ride across the Bazaruto Archipelago to the Azura Retreats lodge on Benguerra Island is worth it in its own righ.The destination is the icing on the cake.",
        "picture":"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180508142113-14-amazing-places-africa--bazaruto-archipelago.jpg"
    },
    {
        "id": 20,
        "country" : 'Botswana',
        "name": "Nxia Pan National Park",
        "description":"The Baines baobabs that sit close to the entrance of Botswanas Nxai Pan National Park take their name from a series of watercolors by Victorian explorer and artist Thomas Baines.",
        "image":'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_822,c_fill,g_auto,h_462,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170309125837-giraffe.jpg'
    }
  ]
  

}
