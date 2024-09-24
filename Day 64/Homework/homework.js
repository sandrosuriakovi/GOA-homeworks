function compare(s1, s2) {
  const sum = s => s ? s.toUpperCase().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
  return sum(s1) === sum(s2);
}



function mean(lst) {
  const nums = lst.slice(0, 10).map(Number);
  const letters = lst.slice(10).join('');
  return [Math.floor(nums.reduce((a, b) => a + b) / 10), letters];
  }

  
function wordSearch(query, seq) {
  const result = seq.filter(word => word.toLowerCase().includes(query.toLowerCase()));
  return result.length ? result : ['Empty'];
  }
 

  function sumOfN(n) {
    let result = [];
    let sum = 0;
    for (let i = 0; i <= Math.abs(n); i++) {
      sum += i * (n < 0 ? -1 : 1);
      result.push(sum);
    }
    return result;
  }

  
  function highAndLow(numbers) {
    let nums = numbers.split(' ').map(Number);
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
  }

  
  function findShort(s) {
    return Math.min(...s.split(' ').map(word => word.length));
  }

  
  function DNAtoRNA(dna) {
    return dna.replace(/A/g, 'T').replace(/T/g, 'A').replace(/C/g, 'G').replace(/G/g, 'C');
  }

  
  function stringify(list) {
    return list ? `${list.data} -> ${stringify(list.next)}` : 'None';
  }

  
  function solution(pairs) {
    return Object.keys(pairs).sort().map(k => `${k} = ${pairs[k]}`).join(',');
  }

  
  function countSubstring(str, subStr) {
    return (str.match(new RegExp(subStr, 'g')) || []).length;
  }

  
  function solve(s) {
    let lower = s.split('').filter(c => c === c.toLowerCase()).length;
    return lower >= s.length / 2 ? s.toLowerCase() : s.toUpperCase();
  }

  
  function reverseAndChangeCase(str) {
    return str.split('').reverse().map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
  }

  
  function timeForMilkAndCookies(date) {
    return date.getMonth() === 11 && date.getDate() === 24;
  }

  
  function squareDigits(num) {
    return +String(num).split('').map(d => d * d).join('');
  }

  
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  