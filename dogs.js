


function dogTalk() {
  let commonDogName = 'Rover';
  let unCommonDogName = 'Susan';
  let stateDogNameFact = () => {
    return `I believe ${commonDogName} is an excellent dog name. The name ${unCommonDogName} is a bad dog name.`;
  };
  let stateDogNameOpinion= () => {
    return `I have never met a dog named ${unCommonDogName}; while several dogs are named ${commonDogName}`;
};
  let callDogs = () => {
    return `Hey, come here ${commonDogName} and ${unCommonDogName}`;
  };
  return {
    stateDogNameFact: stateDogNameFact,
    stateDogNameOpinion: stateDogNameOpinion,
    callDogs: callDogs
  };
}

let dogfunctions = dogTalk();
console.log(dogfunctions.stateDogNameFact());
console.log(dogfunctions.stateDogNameOpinion());
console.log(dogfunctions.callDogs());
