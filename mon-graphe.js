document.addEventListener("DOMContentLoaded", function() {

/*
    const nodes = [
      { id: 1, name: "Node 1", type: "red"},
      { id: 2, name: "Node 2", type: "blue" },
      { id: 3, name: "Node 3", type: "yellow" },
      { id: 4, name: "Node 4", type: "red" },
      { id: 5, name: "Node 5", type: "red" }
    ];
*/
const nodes = [
{id: 1, name: 'interactive 3D point cloud / 3D scatter plot', type: 'object'},
{id: 2, name: 'astronomy', type: 'theme'},
{id: 3, name: 'data-visualisation', type: 'nature'},
{id: 4, name: '3D interactive', type: 'dimension'},
{id: 5, name: 'python', type: 'language'},
{id: 6, name: 'plotly', type: 'librairie'},
{id: 7, name: 'visualisation of large biomolecular structures', type: 'object'},
{id: 8, name: 'molecular biology', type: 'theme'},
{id: 9, name: '3D mesh visualisation', type: 'nature'},
{id: 10, name: 'Yasara', type: 'programm-used'},
{id: 11, name: 'javascript', type: 'language'},
{id: 12, name: 'PDBLoader', type: 'librairie'},
{id: 13, name: 'interactive css histogramm', type: 'object'},
{id: 14, name: 'meteorology', type: 'theme'},
{id: 15, name: '2D interactive', type: 'dimension'},
{id: 16, name: 'HTML/CSS', type: 'language'},
{id: 17, name: '3D phylogenetic tree', type: 'object'},
{id: 18, name: 'phylogenetic', type: 'theme'},
{id: 19, name: 'R', type: 'language'},
{id: 20, name: 'phylotools', type: 'librairie'},
{id: 21, name: 'DNA alignment visualisation', type: 'object'},
{id: 22, name: 'Geneious prime/BioEdit', type: 'programm-used'},
{id: 23, name: 'tracks of proton-proton collisions', type: 'object'},
{id: 24, name: 'particle physics', type: 'theme'},
{id: 25, name: 'tracks visualisation', type: 'nature'},
{id: 26, name: '2D/3D', type: 'dimension'},
{id: 27, name: 'Cinema 4D', type: 'programm-used'},
{id: 28, name: 'threejs', type: 'language'},
{id: 29, name: 'Neural Radiance Fields', type: 'object'},
{id: 30, name: 'virtual reality', type: 'theme'},
{id: 31, name: 'neural network', type: 'nature'},
{id: 32, name: 'Agisoft metashape/instant-ngp', type: 'programm-used'},
{id: 33, name: 'instant-ngp/nerfstudio', type: 'librairie'},
{id: 34, name: 'undirected network graph', type: 'object'},
{id: 35, name: 'sociolgy', type: 'theme'},
{id: 36, name: 'threejs/D3js', type: 'librairie'},
{id: 37, name: 'graphes', type: 'theme'},
{id: 38, name: 'Anaconda', type: 'programm-used'},
{id: 39, name: 'networkx plotly', type: 'librairie'},
{id: 40, name: 'animation poster', type: 'object'},
{id: 41, name: 'simulation', type: 'theme'},
{id: 42, name: 'motion-design', type: 'nature'},
{id: 43, name: '3D animation', type: 'dimension'},
{id: 44, name: 'Cinema 4D/Octane', type: 'programm-used'},
{id: 45, name: 'typography', type: 'theme'},
{id: 46, name: 'After Effects', type: 'programm-used'},
{id: 47, name: 'Cinema 4D/Sketch&Toon', type: 'programm-used'},
{id: 48, name: 'geometry', type: 'theme'},
{id: 49, name: 'Mandelbulber/Octane/Vectron', type: 'programm-used'},
{id: 50, name: 'music', type: 'theme'},
{id: 51, name: '3D image', type: 'object'},
{id: 52, name: ' typography', type: 'theme'},
{id: 53, name: 'graphic-design', type: 'nature'},
{id: 54, name: '3D', type: 'dimension'},
{id: 55, name: 'Cinema 4D/Physical Render', type: 'programm-used'},
{id: 56, name: 'thermodynamics/organic physics', type: 'theme'},
{id: 57, name: '2D', type: 'dimension'},
{id: 58, name: 'Ready/After effects', type: 'programm-used'},
{id: 59, name: 'science-fiction', type: 'theme'},
{id: 60, name: '3D point cloud simulation', type: 'object'},
{id: 61, name: 'topography', type: 'theme'},
{id: 62, name: 'Agisoft metashape/cinema 4D/X-particles/Blender/Cycles', type: 'programm-used'},
{id: 63, name: 'XYZtoOBJ', type: 'librairie'},

];

    
    const links = [
   {
      source: 1,
      target: 2
   },
   {
      source: 1,
      target: 3
   },
   {
      source: 1,
      target: 4
   },
   {
      source: 7,
      target: 8
   },
   {
      source: 7,
      target: 9
   },
   {
      source: 7,
      target: 4
   },
   {
      source: 13,
      target: 14
   },
   {
      source: 13,
      target: 3
   },
   {
      source: 13,
      target: 15
   },
   {
      source: 21,
      target: 18
   },
   {
      source: 21,
      target: 3
   },
   {
      source: 21,
      target: 15
   },
   {
      source: 23,
      target: 24
   },
   {
      source: 23,
      target: 25
   },
   {
      source: 23,
      target: 26
   },
   {
      source: 29,
      target: 30
   },
   {
      source: 29,
      target: 31
   },
   {
      source: 29,
      target: 4
   },
   {
      source: 34,
      target: 35
   },
   {
      source: 34,
      target: 3
   },
   {
      source: 34,
      target: 15
   },
   {
      source: 34,
      target: 37
   },
   {
      source: 34,
      target: 4
   },
   {
      source: 40,
      target: 41
   },
   {
      source: 40,
      target: 42
   },
   {
      source: 40,
      target: 43
   },
   {
      source: 40,
      target: 45
   },
   {
      source: 40,
      target: 48
   },
   {
      source: 40,
      target: 50
   },
   {
      source: 51,
      target: 52
   },
   {
      source: 51,
      target: 53
   },
   {
      source: 51,
      target: 54
   },
   {
      source: 40,
      target: 56
   },
   {
      source: 40,
      target: 57
   },
   {
      source: 40,
      target: 59
   },
   {
      source: 60,
      target: 61
   },
   {
      source: 60,
      target: 42
   },
   {
      source: 60,
      target: 43
   }
];

 

const svg = d3.select("svg")
      .attr("width", "100vw")
      .attr("height", "100vh")
      .call(d3.zoom()
        .scaleExtent([0.1, 4])
        .on("zoom", zoomed))
      .append("g");
      
      



      


    const width = +svg.attr("width");
    const height = +svg.attr("height");
    const radius = 80;

    const simulation = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-10))
      .force("link", d3.forceLink(links).distance(60))
      .force("center", d3.forceCenter(1000 / 2, 800 / 2));

    const link = svg.selectAll(".link")
      .data(links)
      .enter().append("line")
      .attr("class", "link");



    var colorScale = d3.scaleOrdinal((d3.schemeSet1 ))
    /*
    .domain(["red", "blue", "yellow"])
    .range(["red", "blue", "yellow"]);
    */
    const nodeGroup = svg.selectAll(".node-group")
      .data(nodes)
      .enter().append("g")
      .attr("class", "node-group")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));


    

        nodeGroup.append("circle")
          .attr("class", "node")
          .attr("r", d => 10 + links.filter(link => link.source === d || link.target === d).length * 2)
          .style("stroke", d => {
            // Couleur du cercle basée sur le type du nœud
            if (d.type === "object") {
              return "nature";
            } else if (d.type === "theme") {
              return "Dimension";
            } else if (d.type === "data-source") {
              return "data file extension";
            } else {
              return "black";
            }
          });









  // Mettre à jour la couleur du cercle en fonction du type du nœud
nodeGroup.selectAll("circle")
  .style("stroke", d => colorScale(d.type));

      nodeGroup.append("text")
      .attr("class", "label")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(d => d.name);

    simulation.nodes(nodes)
      .on("tick", ticked);

    simulation.force("link")
      .links(links);

    function ticked() {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      nodeGroup
        .attr("transform", d => `translate(${d.x},${d.y})`);
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    function zoomed(event) {
      svg.attr("transform", event.transform);
    }


    svg.selectAll(".node")
  .on("click", function(d) {
    // Obtenir l'objet de nœud cliqué
    const clickedNode = d;

    // Accéder à l'URL associée à l'objet de nœud cliqué
    const url = clickedNode.url;

    // Ouvrir le lien dans une nouvelle fenêtre/onglet
    window.open(url);
  });

var originalRadius;

svg.selectAll(".node")
  .on("mouseover", function(d) {
    // Obtenir l'objet de nœud survolé
    hoveredNode = d;

    // Stocker le rayon d'origine de la node
    originalRadius = d3.select(this).attr("r");

    // Augmenter le rayon de la node de 100%
    d3.select(this)
      .attr("r", originalRadius * 2)
      .classed("node-hovered", true)
      .style("background-image", "url('geneious_withName.jpg')")
      .style("background-size", "100px 100px"); // remplacer par les dimensions de votre image

    // Mettre en évidence les nodes en relation
    svg.selectAll(".node")
      .filter(function(e) {
        return hoveredNode.relations.includes(e.id); // Remplacez `relations` par le nom de votre propriété contenant les relations
      })
      .classed("related-node", true); // Remplacez `related-node` par le nom de la classe CSS ou les styles que vous souhaitez appliquer
  })
  .on("mouseout", function(d) {
    // Rétablir le rayon d'origine de la node
    d3.select(this)
      .attr("r", originalRadius)
      .classed("node-hovered", false)
      .style("background-image", null)
      .style("background-size", null);

    // Supprimer la mise en évidence des nodes en relation
    svg.selectAll(".related-node")
      .classed("related-node", false);
  });



  svg.selectAll(".node")
  .on("mouseout", function(d) {
    // Réinitialiser le rayon de la node à sa valeur d'origine
    d3.select(this)
      .attr("r", originalRadius)
      .classed("node-hovered", false);

    // Supprimer les styles de mise en évidence pour les nodes en relation
    svg.selectAll(".node")
      .filter(function(e) {
        return hoveredNode.relations && hoveredNode.relations.includes(e.id);
      })
      .classed("related-node", false); // Remplacez `related-node` par le nom de la classe CSS ou les styles que vous avez utilisés pour mettre en évidence les nodes en relation
  });
});
