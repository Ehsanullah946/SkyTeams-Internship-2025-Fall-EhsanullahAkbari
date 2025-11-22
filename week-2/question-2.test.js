// Author: Ehsanullah Akbari
// Date: 2025-10-11
// exercise 2 of week-2 finding the smallest and largest number 
// example
// input : a=4 b=5 c=10
// output: a=10 b=4
const { smallLargeNumber } = require('./question-2');
const test = (name, fn, expect) => {
  const logs = [];
  const originalLog = console.log;
    console.log = (msg) => logs.push(msg);
    
    fn();
    
    console.log = originalLog;
     
  const passed = JSON.stringify(logs) === JSON.stringify(expect);
  if (passed) {
    console.log(`✅ ${name} passed`);
  } else {
    console.log(`❌ ${name} failed`);
    console.log("   actual:", logs);
    console.log("   expected:", expect);
  }
};

test(
  "smallLargeNumber(4, 5, 1)",
  () => smallLargeNumber(4, 5, 1),
  [5, 1]
);

test(
  "smallLargeNumber(4, 0, 3)",
  () => smallLargeNumber(4, 0, 3),
  [4,0]
);

test(
  "smallLargeNumber(10, 5, 20)",
  () => smallLargeNumber(10, 5, 20),
  [20,5]
);
