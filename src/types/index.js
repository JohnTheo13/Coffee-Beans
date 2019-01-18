// @flow

type Resistance =  "SUSCEPTIBLE" | "TOLERANT" | "RESISTANT"
type BeanSize = "VERY_LARGE" | "LARGE" |"AVERAGE" | "BELOW_AVERAGE"
type Quality = "EXCEPTIONAL" | "VERY_GOOD" | "GOOD" | "LOW" | "VERY_LOW"
type Yield = "VERY_HIGH" | "HIGH" | "GOOD" | "MEDIUM" | "LOW"

export type CoffeeType = {
    name: string,
    description: string,
    bean_size: BeanSize,
    quality_potential: Quality,
    yield: Yield,
    disease_resistance: [
        { leaf_rust: Resistance },
        { coffer_berry_disease: Resistance },
        { nematodes: Resistance }
    ],
    producing_countries: Array<string>
}


export {
  CoffeeType,
  Resistance,
  BeanSize,
  Quality,
  Yield
};
