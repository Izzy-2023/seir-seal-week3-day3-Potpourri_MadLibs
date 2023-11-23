// console.log("Hello World!")

// Create an object to store user input
const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
}
  
  function startMadlib() {
    // Prompt user to enter a number
    words.number = prompt('Enter a number:');
  
    // Prompt user to enter an adjective
    words.adjective = prompt('Enter an adjective:');
  
    // Prompt user to enter a plural noun
    words.pluralNoun = prompt('Enter a plural noun:');
  
    // Prompt user to enter an adverb
    words.adverb = prompt('Enter an adverb:');
  
    // Prompt the user to enter another adjective
    words.anotherAdjective = prompt('Enter another adjective:');
  
    // Create the MadLib story
    const story = `Once upon a time, a group of ${words.number} General Assembly graduates got together and made a startup called ${words.adjective} Technologies. Their goal was to create smart ${words.pluralNoun}. They approached the challenge ${words.adverb}, which ultimately led them to ${words.anotherAdjective} fame.`;
  
    // Alert the user of the story they created
    alert(story);
  
    // Log the words object to the console for debugging
    console.log(words);
  }
  
  // Start the madlib
  startMadlib();
  
  
