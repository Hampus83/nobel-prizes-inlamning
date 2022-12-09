import data from './json_award.json';

// ********************* 3. Antal pristagare per kategori ********************************

type CategoryCount = {
    [categoryCount: string]: number;
}

const categories = data.map(object => object.category.en);

const categoryCount: CategoryCount = {};

for (const category of categories) {
    categoryCount[category] = categoryCount[category] ? categoryCount[category] + 1 : 1;
}

const categoryNames = Object.getOwnPropertyNames(categoryCount);

const noOfPrizesPerCategoryDiagramData = {
    datasets: [
        {
            data: categoryNames.map((amount) => categoryCount[amount]),
            label: 'Count',
            backgroundColor: ['#829460', '#90A17D', '#8EC3B0', '#9ED5C5', '#BCEAD5', '#DEF5E5']
        }
    ],
    labels: categoryNames
}

// ********************* 7. Topp-10 pristagare ********************************

// Om tid över; GRÄV DJUPARE
const winners: any[] = data.map(object => object.laureates ? object.laureates : 'No data');

const realWinners = winners.filter(object => object !== 'No data');

const winnerNamesCount: CategoryCount = {};

for (let i = 0; i < realWinners.length; i++) {
    
    const winnerNames: string[] = realWinners[i].map((object: { knownName: { en: string; }; orgName: { en: string; }; }) => object.knownName ? object.knownName.en : object.orgName ? object.orgName.en : 'No data');

    for (const name of winnerNames) {
        winnerNamesCount[name] = winnerNamesCount[name] ? winnerNamesCount[name] + 1 : 1;
    }
}

type WinnerName = {
    name: string;
    wins: number;
}

const winnerNamesCountArr: WinnerName[] = [];

for (let name in winnerNamesCount) {
    winnerNamesCountArr.push({name: name, wins: winnerNamesCount[name]});
}

winnerNamesCountArr.sort((a, b) => {
    return b.wins - a.wins;
});

const topTenArr: WinnerName[] = winnerNamesCountArr.slice(0, 10);

let topTenDataset: number[] = [];
const topTenWinnersLabels: string[] = [];

for (let i = 0; i < topTenArr.length; i++) {
    topTenDataset.push(topTenArr[i].wins);
    topTenWinnersLabels.push(topTenArr[i].name);
}

const topTenLaureatesDiagram = {
    datasets: [
        {
            data: topTenDataset,
            label: 'Wins',
            backgroundColor: ['#E8F3D6', '#FCF9BE', '#FFDCA9', '#FAAB78', '#2D033B', '#810CA8', '#C147E9', '#E5B8F4', '#10A19D', '#540375']
        }
    ],
    labels: topTenWinnersLabels

}

export { noOfPrizesPerCategoryDiagramData, topTenLaureatesDiagram };