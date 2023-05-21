// Create the SVG element
const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute("id", "text-container");
svgElement.setAttribute("viewBox", "-40 -40 320 320");

// Create the path element
const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
pathElement.setAttribute("id", "text-curve");
pathElement.setAttribute("d", "M254.55,118c.23,13.16-1.91,58.85-39.41,94.35-31.61,29.93-69,34.38-88.33,34.38-2.25,0-4.26-.06-6-.15A138.63,138.63,0,0,1,81.5,238c-25.6-9.52-45.85-25.13-60.18-46.41C2.23,163.23.11,133.88.55,118.91,1,105.33,5.34,58.53,45.23,26.53,76,1.84,110,.14,123.19.55,138.54,1,177.48,5.73,207.4,39c9.2,10.25,30.52,38.52,29.65,79.6-.27,12.42-4,55.28-40.65,85.38-9.4,7.72-34.51,25.11-69.71,25.11-1.43,0-2.86,0-4.32-.09-5.67-.23-56.25-3.48-85.55-47a106.51,106.51,0,0,1-17.77-62.68c.61-16.94,5.76-49.12,33.48-74.17,9.15-8.27,34.4-27.38,71.17-26.16,11.14.36,49.52,4.17,75.41,37.75,18.19,23.58,20.3,48.88,19.94,61.87-.35,12.2-3.89,43.17-29.42,67.15-8.31,7.81-30.57,25.33-62.82,25.33-1.47,0-3,0-4.49-.11-7.21-.36-44.43-3.84-68.41-36.85-6.74-9.27-17.88-28.72-16.86-54.82.38-9.8,4-43.47,33.83-65.45a83.56,83.56,0,0,1,52.86-15.87c11.76.51,41.27,4.54,61.38,30.76,15.93,20.77,16.44,43.29,15.92,52-.59,9.81-4.25,34.62-25.54,53.13-6.92,6-26,19.82-53.24,18.1-7.56-.48-33.66-3.82-52.21-26.66-14.5-17.86-16.7-35.47-16-47.11C55.73,90.7,74.17,74.34,79.79,70a66.08,66.08,0,0,1,42.94-13.94c7.25.3,32.18,3,48.43,24.81,4.92,6.62,13,20.48,11.88,39-.43,7-3.09,24.88-18.44,39-6.76,6.24-21.13,16.51-41.34,15.19-22.18-1.45-35.63-16.2-39.22-20.68-3.35-4.17-13.52-16.86-12-35.19C73.63,99.45,86.43,88,91.85,83.94c9.64-7.2,20.06-10.53,31-9.89,3.47.21,21.4,2,33.33,17.78,6.69,8.85,9.69,18.3,8.89,28.08-1.31,16.15-12.4,25.69-15.78,28.23A38.16,38.16,0,0,1,122,156c-5.52-.63-19.14-3.45-26.41-16.25a33.07,33.07,0,0,1-3.51-22");
pathElement.setAttribute("fill", "none");
svgElement.appendChild(pathElement);

// Create the text element
const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
textElement.setAttribute("id", "textecourbe");
textElement.setAttribute("y", "40");
textElement.setAttribute("font-size", "20");
textElement.setAttribute("style", "fill:red");

// Create the textPath element
const textPathElement = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
textPathElement.setAttribute("id", "text-path");
textPathElement.setAttribute("href", "#text-curve");
textPathElement.setAttribute("startOffset", "200");

// Create the tspan elements
const tspanTexts = [
    { text: "2016", fontFamily: "Arial", fontSize: "8px", fill: "#0006FF" },
    { text: "2015", fontFamily: "Arial", fontSize: "8px", fill: "#0705F8" },
    { text: "2014", fontFamily: "Arial", fontSize: "8px", fill: "#2505DA" },
    // ... Add the remaining tspan texts here ...
];

tspanTexts.forEach((tspanText) => {
    const tspanElement = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    tspanElement.setAttribute("style", `font-family:${tspanText.fontFamily}; font-size:${tspanText.fontSize}; fill:${tspanText.fill}`);
    tspanElement.textContent = tspanText.text;
    textPathElement.appendChild(tspanElement);
});

textElement.appendChild(textPathElement);
svgElement.appendChild(textElement);

// Add the SVG element to the HTML document
const svgDiv = document.getElementById("svg-div");
svgDiv.appendChild(svgElement);



console.clear();

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('#text-container');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);




function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset( scrollPercent * 2 * pathLength );
  });
}

window.addEventListener('scroll',onScroll);
