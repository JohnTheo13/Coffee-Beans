const diseaseList = [
  "Leaf-Rust Resistant",
  "Leaf-Rust Tolerant",
  "Leaf-Rust Susceptible",
  "Coffee-Berry Resistant",
  "Coffee-Berry Tolerant",
  "Coffee-Berry Susceptible",
  "Nematodes Resistant",
  "Nematodes Tolerant",
  "Nematodes Susceptible"
];

const active = {
  "name": "Pacas",
  "description": "Very high susceptibility to coffee leaf rust.",
  "bean_size": "AVERAGE",
  "quality_potential": "GOOD",
  "yield": "GOOD",
  "disease_resistance": [
    {
      "leaf_rust": "RESISTANT"
    },
    {
      "coffee_berry_disease": "SUSCEPTIBLE"
    },
    {
      "nematodes": "TOLERANT"
    }
  ],
  "producing_countries": [
    "Honduras"
  ]
}

export {diseaseList, active};
