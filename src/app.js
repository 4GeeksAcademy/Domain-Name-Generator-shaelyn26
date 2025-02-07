import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let domainNames;
  document.querySelector("#btn").addEventListener("click", () => {
    domainNames = generateDomain();
    displayDomains(domainNames);
  });

  let generateDomain = () => {
    let pronoun = ["the", "our", "them","my","its"];
    let adj = ["great", "big", "tall","super","awesome"];
    let noun = ["jogger", "racoon", "chair","scissor","cup"];
    let domain = [".com", ".org", ".edu",".gov",".net"];

    let combinations = [];
    for (let i = 0; i < pronoun.length; i++) {
      for (let n = 0; n < noun.length; n++) {
        for (let j = 0; j < adj.length; j++) {
          for (let l = 0; l < domain.length; l++) {
            let domainName = `${pronoun[i]}${adj[j]}${noun[n]}${domain[l]}`;
            combinations.push(domainName);
          }
        }
      }
    }
    combinations = shuffleArray(combinations).slice(0, 8);
    return combinations;
  };

  let shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const n = Math.floor(Math.random() * (i + 1) ); 
      [array[i], array[n]] = [
        array[n],
        array[i],
      ];
    }
    return array;
  };
  let displayDomains = (domains) => {
    let domainList = domains.map((domain) => `<li>${domain}</li>`).join("");
    document.querySelector(
      "#the-domain"
    ).innerHTML = `<ul style="list-style-type: none; padding: 0;">${domainList}</ul>`;
  };
  console.log("Any string");
};
