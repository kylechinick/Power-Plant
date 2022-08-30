import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let plant = { soil: 5, light: 0, water: 0, hp: 10 };

// const feed = changeState('soil');
// const hydrate = changeState('water');
// const giveLight = changeState('light');

// const greenFood = changeState('soil')(10);
// const yuckyFood = changeState('soil')(-5);

// console.log('plant - blueFood', blueFood(plant));

const damagingDandelion = { ...plant, water: 12 };
// does extra damage

const scrappySunflower = { ...plant };
// some unique move

const radRose = { ...plant };
// lives in your grandparents' yard

console.log('damagingDandelion', damagingDandelion);

// const dandelionPunch = changeState('hp')(-5);
// console.log('scrappySunflower', dandelionPunch(scrappySunflower));

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();

const changeState = prop => {
  return value => {
    return state => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

const blueFood = changeState('soil')(5);
const dandelionPunch = changeState('hp')(-5);

const fedPlant = stateControl(blueFood);
const currentState = stateControl();
console.log(currentState.soil);
console.log(currentState);

// UI Stuff

$(document).ready(function () {
  $('#player-choice-form').submit(function (event) {
    event.preventDefault();
    let playerChoice = $("input[type=radio][name=survey]:checked").val();
    console.log(playerChoice);
    $('#fighter-choice').text(playerChoice);
  });
});

// var value = $("input[type=radio][name=contact]:checked").val();

// const plantFedAgain = stateControl(greenFood);

// console.log('fedPlant', fedPlant);
// console.log('plantFedAgain', plantFedAgain);
