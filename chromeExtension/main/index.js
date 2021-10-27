let myLeads = [];
// let oldLeads = [];

// myLeads = JSON.parse(myLeads);
// myLeads.push("www.google.com");
// myLeads = JSON.stringify(myLeads);
// //console.log(typeof myLeads);
// localStorage.clear();

// myLeads = JSON.parse(myLeads);
// myLeads.push("www.leads.com");
// console.log(myLeads);

// let myLeads = ["www.bing.com"];
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el");

// localStorage.clear();
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");
console.log(leadsFromLocalStorage);
//localStorage.setItem("myLeads", "www.example.com");
// console.log(ulEl);
//console.log(localStorage.getItem("myLeads"));
//localStorage.clear();
//localStorage.setItem("myLeads", "www.google.com");
//console.log(localStorage.getItem("myLeads"));
//localStorage.clear();
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

//const tabs = [{ url: "https://www.bing.com" }];

tabBtn.addEventListener("click", function () {
  // console.log(tabs[0].url);

  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //   // since only one tab should be active and in the current window at once
  //   // the return variable should only have one entry
  //   let activeTab = tabs[0];
  //   let activeTabId = activeTab.id; // or do whatever you need
  // });
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });

  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  //console.log("double clicked!");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //   console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);

  console.log(localStorage.getItem("myLeads"));
});

// const recipient = "James";
// //const email = "Hey" + recipient + "! How is it going? Cheers Per";
// const sender = "Guys";

// const email = `
// Hey ${recipient}!
// How is it going?
// Cheers ${sender}`;

// console.log(email);

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `;
//   }
//   ulEl.innerHTML = listItems;
// }

//     create element
//     set text content
//     append to ul
//       const li = document.createElement("li");
//       li.textContent = myLeads[i];
//       ulEl.append(li);
//       console.log(myLeads[i]);

// let inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function () {
//   console.log("Botton clicked by Event Listener");
// });

// let box = document.getElementById("box");

// box.addEventListener("click", function () {
//   console.log("I want to open the box!");
// });

// const playerName = "Sagar";
// let credits = 45;

// credits = credits - 10;

// const container = document.getElementById("container");

// container.innerHTML = "<button onclick ='buy()'>Buy!</button>";

// function buy() {
//   container.innerHTML += "<p>Thank you for buying</p>";
// }
