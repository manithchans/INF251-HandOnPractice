const aob = [
    {framework: 'React.js', website: 'Paypayl'},
    {framework: 'React.js', website: 'Tesla'},
    {framework: 'Angular', website: 'Google'},
    {framework: 'Vue.js', website: 'Vue'},
    {framework: 'JavaScript', website: 'inblack67'},
];

const count = [];
const result = [];

// count the occurence in the array 'aob'
for (const element of aob){
  if (count[element.framework]) {
    count[element.framework] += 1;
  } else {
    count[element.framework] = 1;
  }
}

// push the framework and count property into 'result' array
for (const i in count) {
  result.push({framework: i, count: count[i]});
}

console.log(result);