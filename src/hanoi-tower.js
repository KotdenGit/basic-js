module.exports = function calculateHanoi(diskN, speed) {
    let count = 2**diskN - 1;
    let time = turns / (speed/3600);
    return  {count,  time}
}
