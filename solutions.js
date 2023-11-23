// ******************************************
// Set Alarm
// ******************************************

function setAlarm(employed, vacationing){
    if(employed && !vacationing){
        console.log("You are employed")
    } else {
        console.log("You are vacationing")
    }
}

setAlarm(true, true) // => returns You are vacationing
setAlarm(false, false) // => returns You are vacationing
setAlarm(false, true) // => returns You are vacationing
setAlarm(true, false) // => returns You are employed

// ***************************************
// Count Odd Numbers
// ***************************************

function oddNumberCount(number) {
    // Calculates the count of positive odd numbers below the given number
    return Math.floor(number / 2);
  }
  
  // Example output
  console.log(oddNumberCount(27));   // Output: 12
  console.log(oddNumberCount(68));  // Output: 34
  
  // *******************************************
  // Disemvoweling Trolls
  // *******************************************
  
    function trollsBeGone(sentence) {
        const vowels = 'aeiouAEIOU';
        const newSentence = sentence.replace(/[aeiouAEIOU]/g, '');
        return newSentence;
      }

    // Test the function with an example
    console.log(trollsBeGone("This website is for cool people")); // Output: "Ths wbst s fr cl ppl"

    // *****************************************
    // Bank Account Summary
    // *****************************************

    const bankInfo = {
        Savings: 100000,
        Checking: 2500,
        moneyMarket: 10000,
        creditCard: -1200,
    }

    function bankAccountSummary(bankInfo) {
        let totalBalance = 0;
      
        Object.keys(bankInfo).forEach(account => {
          totalBalance += bankInfo[account];
        });
      
        return totalBalance;
      }
      

    // Calculate the total bank account balance
    const bankTotal = bankAccountSummary(bankInfo);

    // Function to check if the bank account is in the red
    function inTheRed(totalBalance) {
    return totalBalance < 0;
    }
  
    // Check if the bank account is in the red
    const isRed = inTheRed(bankTotal);
  
    console.log("Total bank account balance:", bankTotal); // Output: 111300
    console.log("Is the bank account in the red?", isRed); // Output: false

    