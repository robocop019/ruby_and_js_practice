// function firstTask() {
//   console.log('First task done.');
//   setTimeout(secondTask, 2000);
// }

// function secondTask() {
//   console.log('Second task done.');
//   setTimeout(thirdTask, 2000);
// }

// function thirdTask() {
//   console.log('Third task done.');
//   setTimeout(fourthTask, 2000);
// }

// function fourthTask() {
//   console.log('Fourth task done.');
// }


// setTimeout(firstTask, 2000);
// // setTimeout(secondTask, 4000);
// setTimeout(thirdTask, 6000);
// setTimeout(fourthTask, 8000);

setTimeout(function() {
  console.log('First task done.');
  setTimeout(function() {
    console.log('Second task done.');
    setTimeout(function thirdTask() {
      console.log('Third task done.');
      setTimeout(function() {
        console.log('Fourth task done.');
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);