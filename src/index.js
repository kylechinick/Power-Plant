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

// const damagingDandelion = { ...plant, water: 12 };

// const scrappySunflower = { ...plant };

// const radRose = { ...plant };

// console.log('damagingDandelion', damagingDandelion);

const storeState = initialValue => {
  let currentState = initialValue;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateControl = storeState();
const stateControl2 = storeState();
const stateControl3 = storeState();

const changeState = prop => {
  return value => {
    return state => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

const blueFood = changeState('soil')(5);
const greenFood = changeState('soil')(10);
const dandelionPunch = changeState('hp')(-5);

// UI Stuff

$(document).ready(function () {
  let plants = [];
  $('#player-choice-form').submit(function (event) {
    event.preventDefault();
    let playerChoice = $('input[type=radio][name=survey]:checked').val();
    console.log(playerChoice);
    $('#fighter-choice').text(playerChoice);

    const playerGenerator = () => {
      const plant1 = storeState(plant);
      // const plant2 = stateControl(blueFood);
      plants.push(plant1);
      console.log(plant1());
      $('#player-stats-soil').text(plant1().soil);
      $('#player-stats-light').text(plant1().light);
      $('#player-stats-water').text(plant1().water);
      $('#player-stats-hp').text(plant1().hp);
    };
    playerGenerator();
  });

  $('#player-actions').click(function () {
    plants[0](blueFood);
    console.log(plants[0]());
    // $('#player-stats').text(plants[0]());
    $('#player-stats-soil').text(plants[0]().soil);
    $('#player-stats-light').text(plants[0]().light);
    $('#player-stats-water').text(plants[0]().water);
    $('#player-stats-hp').text(plants[0]().hp);
  });
});

// var value = $("input[type=radio][name=contact]:checked").val();

// const plant1 = stateControl(blueFood);
// const plant2 = stateControl(blueFood);
// const plant3 = stateControl(blueFood);
// const plant4 = stateControl2(greenFood);
// const plant5 = stateControl3(greenFood);

// console.log('plant 1 ', plant1);
// console.log('plant 2 ', plant2);
// console.log('plant 3 ', plant3);
// console.log('plant 4 ', plant4);
// console.log('plant 5 ', plant5);

// const stateControl = storeState();
// const stateControl2 = storeState();
