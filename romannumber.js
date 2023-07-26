function romanToInt(romanNumeral) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentCharValue = romanNumerals[romanNumeral[i]];
      const nextCharValue = romanNumerals[romanNumeral[i + 1]];
  
      if (nextCharValue > currentCharValue) {
        result += nextCharValue - currentCharValue;
        i++; // Skip the next character as it has already been accounted for
      } else {
        result += currentCharValue;
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(romanToInt("IX")); // Output: 9
  console.log(romanToInt("XXI")); // Output: 21
  console.log(romanToInt("LVIII")); // Output: 58
  