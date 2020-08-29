import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent implements OnInit {
    security = null;

  chooseSecurity(safety) {
      this.security = safety;
  }
  

  constructor() { }

  ngOnInit(): void {
  }
  safetylists = [
    {
        "nation": "Tanzania",
        "level": "Seventh out of 49 African countries",
        "details":"Safety-wise, it is advised to be cautious of some places especially at night especially in bigger cities."

    },
    {
        "nation": "South Africa",
        "level": "Thirty-fourth out of 49 African countries",
        "details":"While the political system of South Africa is notably stable, the biggest problem is the high rate of violent crime."
    },
    {

        "nation": "Morroco",
        "level": "Nineteenth out of 49 African countries",
        "details":" Other parts of the country are safe for tourists and all you have to be is cautious of petty crime such as pick-pocketing."
    },
    {

        "nation": "Namibia ",
        "level": "Eleventh out of 49 African countries",
        "details":"You are advised to be cautious of petty crime such as pickpocketing and purse snatching especially in the big cities when it is late in the night."
    },
    {

        "nation": "Rwanda ",
        "level": "Seventeen out of 49 African countries",
        "details":"Rwanda is very safe and crime involving tourists is almost nonexistent. Like any other place, exercise caution especially against petty crime."
    },
    {

        "nation": "Zambia",
        "level": "Fifth out of 49 African countries",
        "details":"The crime levels in Zambia are similar to those of general Europe and you will find that Zambians are very friendly people."
    },
    {

        "nation": "Egypt ",
        "level": "Thirty-nineth out of 49 African countries ",
        "details":"Since the revolution in 2011 during the Arab Spring, Egypt has been politically fragile and this has driven down their safety ratings."
    },
    {

        "nation": "Malawi ",
        "level": " Third out of 49 African countries",
        "details":"As far as safety is concerned, the risk is very low and in some isolated areas, you will have to be more cautious."
    },
    {

        "nation": "Botswana ",
        "level": "Second out of 49 African countries ",
        "details":"As far as your safety is concerned, the overall risk is low. Crime towards tourists is very rare and the people are welcoming."
    },
    {

        "nation": "Kenya ",
        "level": "Thirty-one out of 49 African nations",
        "details":"While in the big cities, be cautious because some areas do live up to the saying Nairobbery."
    },
    {

        "nation": " Mozambique",
        "level": " Twentieth out of 49 African nations",
        "details": " Mozambique is safe and tourist shouldn't have any troubles. You have to be cautious of some few areas as a precaution to petty theft."
    }
]

}
