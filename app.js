// https://calculator.swiftutors.com/cost-per-point-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const costPerPointRadio = document.getElementById('costPerPointRadio');
const costofCampaignRadio = document.getElementById('costofCampaignRadio');
const grossRatingPointsRadio = document.getElementById('grossRatingPointsRadio');

let costPerPoint;
let costofCampaign = v1;
let grossRatingPoints = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

costPerPointRadio.addEventListener('click', function() {
  variable1.textContent = 'Cost of Campaign ($)';
  variable2.textContent = 'Gross Rating Points';
  costofCampaign = v1;
  grossRatingPoints = v2;
  result.textContent = '';
});

costofCampaignRadio.addEventListener('click', function() {
  variable1.textContent = '(CPP) Cost Per Point ($)';
  variable2.textContent = 'Gross Rating Points';
  costPerPoint = v1;
  grossRatingPoints = v2;
  result.textContent = '';
});

grossRatingPointsRadio.addEventListener('click', function() {
  variable1.textContent = '(CPP) Cost Per Point ($)';
  variable2.textContent = 'Cost of Campaign ($)';
  costPerPoint = v1;
  costofCampaign = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(costPerPointRadio.checked)
    result.textContent = `Cost Per Point = ${computeCostPerPoint().toFixed(2)}`;

  else if(costofCampaignRadio.checked)
    result.textContent = `Cost of Campaign = ${computeCostofCampaign().toFixed(2)}`;

  else if(grossRatingPointsRadio.checked)
    result.textContent = `Gross Rating Points = ${computeGrossRatingPoints().toFixed(2)}`;
})

// calculation

function computeCostPerPoint() {
  return Number(costofCampaign.value) / Number(grossRatingPoints.value);
}

function computeCostofCampaign() {
  return Number(costPerPoint.value) * Number(grossRatingPoints.value);
}

function computeGrossRatingPoints() {
  return Number(costofCampaign.value) / Number(costPerPoint.value);
}