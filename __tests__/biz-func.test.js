// import GalacticDatabase from '../src/js/biz-func.js';

// describe('GalacticDatabase', () => {
//   test('Create an instance of the GalacticDatabase class', () => {
//     const sectorOneDataBase = new GalacticDatabase();
//     expect(sectorOneDataBase).toEqual({});
//   });

//   test('Create an instance of GalacticDatabase with a defined age property', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.databaseUserAge).toEqual(20);
//   });

//   test('Return a number that is .24 times the value of databaseUserAge via the GalacticDatabase method mercuryYearsConverter()', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.mercuryYearsConverter(20)).toEqual(4.8);
//   });

//   test('Return a number that is .62 times the value of databaseUserAge via the GalacticDatabase method venusYearsConverter()', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.venusYearsConverter(20)).toEqual(12.4);
//   });

//   test('Return a number that is 1.88 times the value of databaseUserAge via the GalacticDatabase method marsYearsConverter()', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(
//       sectorOneDataBase.marsYearsConverter(sectorOneDataBase.databaseUserAge)
//     ).toEqual(37.6);
//   });

//   test('Return a number that is 11.86 times the value of databaseUserAge via the GalacticDatabase method jupiterYearsConverter()', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.jupiterYearsConverter(20)).toEqual(237.2);
//   });

//   test('Return result of subtracting the planet-converted user age from the planet-converted average lifespan via the GalacticDatabase method yearsRemainingCalculator()', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.yearsRemainingCalculator(20, 100, 'mars')).toEqual(
//       150.4
//     );
//   });

//   // test('Return the number result of subtracting databaseUserAge from 100 via the GalacticDatabase method yearsRemainingCalculator() as a positive number if databaseUserAge is greater than 100 ', () => {
//   //   const sectorOneDataBase = new GalacticDatabase(120);
//   //   expect(sectorOneDataBase.yearsRemainingCalculator()).toEqual(20);
//   // });

//   test('Return a string stating the positive number of years above 100 that the user has lived based on databaseUserAge', () => {
//     const sectorOneDataBase = new GalacticDatabase(120);
//     expect(
//       sectorOneDataBase.yearsRemainingCalculator(120, 100, 'mars')
//     ).toEqual(
//       'You have lived 37.6 years past average life expectancy, keep it up!'
//     );
//   });

//   test('Return the converted average lifespan for mercury', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.averageLifespanConverter(100, 'mercury')).toEqual(
//       24
//     );
//   });
//   test('Return the converted average lifespan for venus', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.averageLifespanConverter(100, 'venus')).toEqual(
//       62
//     );
//   });
//   test('Return the converted average lifespan for mars', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.averageLifespanConverter(100, 'mars')).toEqual(
//       188
//     );
//   });
//   test('Return the converted average lifespan for jupiter', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.averageLifespanConverter(100, 'jupiter')).toEqual(
//       1186
//     );
//   });

//   test('Return error if no case is matched', () => {
//     const sectorOneDataBase = new GalacticDatabase(20);
//     expect(sectorOneDataBase.averageLifespanConverter(100, '')).toEqual(
//       'Average lifespan conversion failed to execute properly'
//     );
//   });
// });
