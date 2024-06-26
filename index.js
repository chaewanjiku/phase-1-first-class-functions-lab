// Code your solution in this file!
  const returnFirstTwoDrivers = function (names) {
    return names.slice(0, 2);
  };

  const returnLastTwoDrivers=function (names){
    return names.slice(-2);
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function (multiplyValue) {
    return function (value) {
        return multiplyValue * value ;
    };
  };

    const fareDoubler = createFareMultiplier(2);

    const fareTripler = createFareMultiplier(3);

    const selectDifferentDrivers=function (names,namesToReturn){
        return namesToReturn(names);
    };


