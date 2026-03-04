export const kadapaLocations = [
  "Kadapa", "Proddatur", "Pulivendula", "Rajampet", "Badvel",
  "Jammalamadugu", "Mydukur", "Yerraguntla", "Kamalapuram",
  "Vempalle", "Muddanur", "Porumamilla", "Chennur", "Vontimitta",
  "Siddavatam", "Kopparthy", "Gandikota", "Brahmamgari Matham",
  "Lakkireddipalli", "Rayachoti", "Gopavaram", "Khajipet", "Duvvur",
];

export const locations = {
  cities: ["Kadapa", "Proddatur"],
  municipalities: [
    "Pulivendula", "Rajampet", "Badvel", "Jammalamadugu",
    "Mydukur", "Yerraguntla", "Kamalapuram",
  ],
  majorTowns: ["Vempalle", "Muddanur", "Porumamilla", "Chennur"],
  touristIndustrial: ["Kopparthy", "Gandikota", "Vontimitta", "Siddavatam"],
};

/** Flat keyword list ready for metadata.keywords */
export const kadapaKeywords = kadapaLocations.flatMap((loc) => [
  `herbal hair oil ${loc}`,
  `Ayurvedic hair oil ${loc}`,
  `Mahira hair oil ${loc}`,
  `hair care ${loc}`,
]);
