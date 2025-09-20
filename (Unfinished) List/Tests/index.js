let List = [{
    spot: '1',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '2',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '3',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
},{
    spot: '4',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '5',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '6',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
},{
    spot: '7',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '8',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '9',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
},{
    spot: '10',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '11',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '12',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
},{
    spot: '13',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '14',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '15',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
},{
    spot: '16',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '17',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '18',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
},{
    spot: '19',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '20',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '21',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
},{
    spot: '22',
    positionName: 'Sex',
    info: 'i love sex',
    image: 'sex here'
},{
    spot: '23',
    positionName: 'Hamsa',
    info: 'hamsa is so funny',
    image: "hamsa here",
},{
    spot: '24',
    positionName: 'Persik',
    info: 'persik is my fav fruit',
    image: 'persik here'
}]

let RangeMultiplier = 3;
const listRange = 5;

List.slice(listRange * RangeMultiplier, listRange * (RangeMultiplier+1)).forEach((placement) => {
    console.log(placement);
}) 