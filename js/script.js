const url = "https://raddythebrand.github.io/apex-legends/data.json";
const loader = document.getElementById('loading');
const loadingFrame = document.getElementById('loading-frame');

const ul = document.getElementById('legends');
const list = document.createDocumentFragment();

async function getLegends() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (response) {
      loader.style.display = 'none';
    }

    listLegends(data);
    viewDetail(data[0]);
  } catch (error) {
    console.log(error);
    loadingFrame.innerHTML = 'Error';
  }
}

function listLegends(data) {
  data.map(function (legend) {
    const legendText = `
      <img src="${legend.thumbnail.default}" alt="${legend.nickname}"/>
      <div class="legend__nickname">${legend.nickname}</div>
    `;

    const item = document.createElement('li');
    item.innerHTML = legendText;
    list.appendChild(item);

    item.onclick = function () {
      viewDetail(legend);
    }


  });
  ul.appendChild(list);
}

const tl = gsap.timeline();
tl.to("#legends", { y: 0, duration: 0.6, opacity: 1 });
tl.to("#legend", { y: 0, duration: 0.6, opacity: 1, stagger: 0.2 });
const legend = document.getElementById('legend');
function viewDetail(data) {

  let result = `
    <img src="${data.thumbnail.medium}" alt="${data.nickname}"/>
    <div class="legend-data">
      <div>Name: ${data.name}</div>
      <div>Age: ${data.age}</div>
      <div>Home: ${data.home}</div>
      <div>Type: ${data.type}</div>
      <div>Description: ${data.desc}</div>
    </div>
  `;

  legend.innerHTML = result;


  tl.to(".legend-data", { y: 0, duration: 0.6, opacity: 1 });

}
















getLegends();