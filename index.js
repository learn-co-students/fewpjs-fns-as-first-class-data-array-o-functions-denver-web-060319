import { brotliDecompressSync } from "zlib";

function wakeDog(dogName, dogBreed) {
  const wake = (`Wake ${dogName} the ${dogBreed}`);
  console.log(wake);
  return wake;
}

function leashDog(dogName, dogBreed) {
  const leash = (`Leash ${dogName} the ${dogBreed}`);
  console.log(leash);
  return leash;
}

function walkToPark(dogName, dogBreed) {
  const walk = (`Walk to the park with ${dogName} the ${dogBreed}`);
  console.log(walk);
  return walk;
}

function throwFrisbee(dogName, dogBreed) {
  const frisbee = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(frisbee);
  return frisbee;
}

function walkHome(dogName, dogBreed) {
  const walkH = (`Walk home with ${dogName} the ${dogBreed}`);
  console.log(walkH);
  return walkH;
}

function unleashDog(dogName, dogBreed) {
  const unleash = (`Unleash ${dogName} the ${dogBreed}`);
  console.log(unleash);
  return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];



const exerciseDog = function (dogName, dogBreed) {
  let i = 0
  let result = []
  while (i < routine.length) {
      const body = document.body
      const p = document.createElement('p')
      p.innerText = `${(routine[i](dogName, dogBreed))}`
      body.appendChild(p)
      result.push(routine[i](dogName, dogBreed))
      i++
  }
  return result;
}

