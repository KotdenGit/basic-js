const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  throw 'Not implemented';
  let numsampleActivity = parseFloat(sampleActivity);
  if(typeof(sampleActivity) !== 'string' || isNaN(numsampleActivity) || Number(numsampleActivity) <= 0 || Number(numsampleActivity) > MODERN_ACTIVITY) //Specific requirements
  { 
    return false;
  } else {

    return Math.ceil((Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)) / k));
  }// remove line with error and write your code here
};
