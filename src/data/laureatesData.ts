import data from './json_laureates.json';

// console.log(data);

// ********************* 4. Könsfördelning ********************************

const genderData: string[] = data.map(object => object.gender ? object.gender : 'Organization' );

let genderLabels: string[] = [];
let genderCount: any = {};

for (let i = 0; i < genderData.length; i++) {

    if(!genderLabels.includes(genderData[i])) {
        genderLabels.push(genderData[i]);
    }
    if (genderCount[genderData[i]] === undefined) {
        genderCount[genderData[i]] = 1;
    } else {
        genderCount[genderData[i]]++;
    }
}

let genderDataset: number[] = [];

genderLabels.forEach(label => {
    genderDataset.push(genderCount[label]);
}); 

const genderDiagramData = {
    datasets: [
        {
            data: genderDataset,
            label: 'Count',
            backgroundColor: ['#6ECCAF', '#ADE792', '#F3ECB0'],
        }
    ],
    labels: genderLabels,
}

// ********************* 6. Antal pristagare från olika länder ********************************

const countries: string[] = data.map(object => object.birth ? object.birth.place.country.en : object.founded ? object.founded.place.country ? object.founded.place.country.en : object.nativeName : 'No data');

const countryCount: any = {};

for (const country of countries) {
    countryCount[country] = countryCount[country] ? countryCount[country] + 1 : 1;
}

let country = Object.keys(countryCount);

type NewCountryCountArr = {
    country: string;
    count: number;
}

let newCountryCountArr: NewCountryCountArr[] = country.map(country => ({country: country, count: countryCount[country]}));

newCountryCountArr.sort((a, b) => {
    return b.count - a.count;
});

const filteredCountryArr = newCountryCountArr.filter(country => country.count > 1);

let countryLabels: string[] = [];

let countryDataset: any = [];

for (let i = 0; i < filteredCountryArr.length; i++) {
    if (!countryDataset.includes(filteredCountryArr[i].country)) {
        countryDataset.push(filteredCountryArr[i].count);
    }
}

filteredCountryArr.forEach(label => {
    countryLabels.push(label.country)
});

const noOfWinnersFromEachCountryDiagramData = {
    datasets: [
        {
            data: countryDataset,
            label: 'Count',
            backgroundColor: ['#E8F3D6', '#FCF9BE', '#FFDCA9', '#FAAB78', '#2D033B', '#810CA8', '#C147E9', '#E5B8F4', '#10A19D', '#540375', '#FF7000', '#FFBF00', '#2B3A55', '#CE7777', '#E8C4C4', '#F2E5E5', '#FB2576', '#332FD0', '#0002A1', '#FEFCF3', '#F5EBE0', '#F0DBDB', '#DBA39A', '#FED049', '#CFFDE1', '#68B984', '#3D5656', '#F3EFE0', '#D23369', '#00FFF6'],
            borderColor: '#d7d7d7',
            borderWidth: 1
        }
    ],
    labels: countryLabels,
}

export { genderDiagramData, noOfWinnersFromEachCountryDiagramData };