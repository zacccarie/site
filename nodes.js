const nodes = [
    {id:0, name:  ' test ' , type: ' test ' },
{id:1, name:  ' Astral map ' , type: ' project ' },
{id:2, name:  ' Bacteriophage ms2 capsid protein : RNA complex    ' , type: ' project ' },
{id:3, name:  ' Infernal spiral ' , type: ' project ' },
{id:4, name:  ' Phylogenèse ' , type: ' project ' },
{id:5, name:  ' Baboon/human comparison ' , type: ' project ' },
{id:6, name:  ' CMS collisions ' , type: ' project ' },
{id:7, name:  ' Politics ' , type: ' project ' },
{id:8, name:  ' Star wars interactions ' , type: ' project ' },
{id:9, name:  ' NERF(s) ' , type: ' project ' },
{id:10, name:  ' Souvenir ' , type: ' project ' },
{id:11, name:  ' Le bal des nuées oiseaux ' , type: ' project ' },
{id:12, name:  ' La danse des bancs de poissons ' , type: ' project ' },
{id:13, name:  ' Mirage festival  ' , type: ' project ' },
{id:14, name:  ' Mirage festival  ' , type: ' project ' },
{id:15, name:  ' Dimension festival ' , type: ' project ' },
{id:16, name:  ' L’origine du monde ' , type: ' project ' },
{id:17, name:  ' Synesthésies ' , type: ' project ' },
{id:18, name:  ' Desigual ' , type: ' project ' },
{id:19, name:  ' Emergence ' , type: ' project ', url:"/tags.fr" },
{id:20, name:  ' Année 2090 ' , type: ' project ' },
{id:21, name:  ' Assises Internationales du Roman ' , type: ' project ' },
{id:22, name:  ' .json ' , type: ' data-file-extension ' },
{id:23, name:  ' .csv ' , type: ' data-file-extension ' },
{id:24, name:  ' .pdb ' , type: ' data-file-extension ' },
{id:25, name:  ' .nex ' , type: ' data-file-extension ' },
{id:26, name:  ' .obj ' , type: ' data-file-extension ' },
{id:27, name:  ' .xml ' , type: ' data-file-extension ' },
{id:28, name:  ' .xyz  ' , type: ' data-file-extension ' },
{id:29, name:  ' .geojson ' , type: ' data-file-extension ' },
{id:30, name:  ' .newick ' , type: ' data-file-extension ' },
{id:31, name:  ' .gltf  ' , type: ' data-file-extension ' },
{id:32, name:  ' xyz cartesian coordinates ' , type: ' data type ' },
{id:33, name:  ' mesh ' , type: ' data type ' },
{id:34, name:  ' décimal (float) ' , type: ' data type ' },
{id:35, name:  ' Atomicité  ' , type: ' data type ' },
{id:36, name:  ' sequence alignment matrix/taxonomy /trees ' , type: ' data type ' },
{id:37, name:  ' tracks / vectors ' , type: ' data type ' },
{id:38, name:  ' cameras positions alignement ' , type: ' data type ' },
{id:39, name:  ' edges ' , type: ' data type ' },
{id:40, name:  ' .jpeg ' , type: ' data-file-extension ' },
{id:41, name:  ' .gif ' , type: ' data-file-extension ' },
{id:42, name:  ' bla 1 ' , type: ' idem ' },
{id:43, name:  ' bla 2 ' , type: ' idem ' },
{id:44, name:  ' bla 3 ' , type: ' idem ' },
{id:45, name:  ' bla 4 ' , type: ' idem ' },
{id:46, name:  ' bla 5 ' , type: ' idem ' },
{id:47, name:  ' bla 6 ' , type: ' idem ' },
{id:48, name:  ' bla 7 ' , type: ' idem ' },
{id:49, name:  ' formulas ' , type: ' data type ' },
{id:50, name:  ' points cloud coordinates, Vertex RGB color ' , type: ' data type ' },
{id:51, name:  ' Dictionary  ' , type: ' IDE ' },
{id:52, name:  ' Jupyter notepad  ' , type: ' IDE ' },
{id:53, name:  ' Visual Studio Code ' , type: ' IDE ' },
{id:54, name:  ' Codepen ' , type: ' IDE ' },
{id:55, name:  ' Github ' , type: ' IDE ' },
{id:56, name:  ' R console ' , type: ' IDE ' },
{id:57, name:  ' Cinema 4D ' , type: ' Programm ' },
{id:58, name:  ' After Effects ' , type: ' Programm ' },
{id:59, name:  ' Photoshop  ' , type: ' Programm ' },
{id:60, name:  ' Illustrator ' , type: ' Programm ' },
{id:61, name:  ' Animate ' , type: ' Programm ' },
{id:62, name:  ' Lightroom ' , type: ' Programm ' },
{id:63, name:  ' DxO ' , type: ' Programm ' },
{id:64, name:  ' Phase One ' , type: ' Programm ' },
{id:65, name:  ' Matlab ' , type: ' Programm ' },
{id:66, name:  ' Blender ' , type: ' Programm ' },
{id:67, name:  ' Unreal engine 5 ' , type: ' Programm ' },
{id:68, name:  ' Mandelbulber ' , type: ' Programm ' },
{id:69, name:  ' DDlab ' , type: ' Programm ' },
{id:70, name:  ' Yasara ' , type: ' Programm ' },
{id:71, name:  ' instant-ngp ' , type: ' Programm ' },
{id:72, name:  ' BioEdit ' , type: ' Programm ' },
{id:73, name:  ' Geneious prime ' , type: ' Programm ' },
{id:74, name:  ' Agisoft-metashape ' , type: ' Programm ' },
{id:75, name:  ' Ready ' , type: ' Programm ' },
{id:76, name:  ' Webflow ' , type: ' Programm ' },
{id:77, name:  ' Bubble ' , type: ' Programm ' },
{id:78, name:  ' Arcgis Geophylobuilder ' , type: ' Programm ' },
{id:79, name:  ' Avogadro ' , type: ' Programm ' },
{id:80, name:  ' Meshlab ' , type: ' Programm ' },
{id:81, name:  ' Excel ' , type: ' Programm ' },
{id:82, name:  ' Lottie for After Effects ' , type: ' plugins ' },
{id:83, name:  ' Insydium x-particles ' , type: ' plugins ' },
{id:84, name:  ' Realflow ' , type: ' plugins ' },
{id:85, name:  ' Octane Vectron ' , type: ' plugins ' },
{id:86, name:  ' PDBLoader ' , type: ' plugins ' },
{id:87, name:  ' Cinema 4D Physical ' , type: ' Moteurs de rendu ' },
{id:88, name:  ' Octane render ' , type: ' Moteurs de rendu ' },
{id:89, name:  ' Cycles ' , type: ' Moteurs de rendu ' },
{id:90, name:  ' Sketch&Toon ' , type: ' Moteurs de rendu ' },
{id:91, name:  ' HTML ' , type: ' Language ' },
{id:92, name:  ' CSS ' , type: ' Language ' },
{id:93, name:  ' javascript ' , type: ' Language ' },
{id:94, name:  ' python ' , type: ' Language ' },
{id:95, name:  ' R ' , type: ' Language ' },
{id:96, name:  ' Three.js ' , type: ' Librairie ' },
{id:97, name:  ' D3.js ' , type: ' Librairie ' },
{id:98, name:  ' Plotly ' , type: ' Librairie ' },
{id:99, name:  ' Matplotlib ' , type: ' Librairie ' },
{id:100, name:  ' Numpy ' , type: ' Librairie ' },
{id:101, name:  ' Pandas ' , type: ' Librairie ' },
{id:102, name:  ' NetworkX ' , type: ' Librairie ' },
{id:103, name:  ' Biopython ' , type: ' Librairie ' },
{id:104, name:  ' Phylotools ' , type: ' Librairie ' },
{id:105, name:  ' NerfStudio ' , type: ' Librairie ' },
{id:106, name:  ' Instant-ngp ' , type: ' Librairie ' },
{id:107, name:  ' XYZtoOBJ.py ' , type: ' Librairie ' },
{id:108, name:  ' 3d mol.js ' , type: ' Librairie ' },
{id:109, name:  ' Anaconda ' , type: ' Plateforme ' },
{id:110, name:  ' Google Cloud Computing platform ' , type: ' Plateforme ' },
{id:111, name:  ' AWS EC2 ' , type: ' Plateforme ' },
{id:112, name:  ' MacOS ' , type: ' Environnement ' },
{id:113, name:  ' Windows 10 ' , type: ' Environnement ' },
{id:114, name:  ' Linux scientific ' , type: ' Environnement ' },
{id:115, name:  ' Jupyterlab ' , type: ' Environnement ' },
{id:116, name:  ' Ubuntu ' , type: ' Environnement ' },
{id:117, name:  ' Conda ' , type: ' Environnement ' },
{id:118, name:  ' Astronomy ' , type: ' Theme ' },
{id:119, name:  ' Molecular biology ' , type: ' Theme ' },
{id:120, name:  ' Photogrammetry ' , type: ' Theme ' },
{id:121, name:  ' Meteorology ' , type: ' Theme ' },
{id:122, name:  ' Organic physics ' , type: ' Theme ' },
{id:123, name:  ' Phylogenetic ' , type: ' Theme ' },
{id:124, name:  ' Particle physics ' , type: ' Theme ' },
{id:125, name:  ' Virtual reality ' , type: ' Theme ' },
{id:126, name:  ' Sociolgy ' , type: ' Theme ' },
{id:127, name:  ' Graph theory ' , type: ' Theme ' },
{id:128, name:  ' Simulation ' , type: ' Theme ' },
{id:129, name:  ' Typography ' , type: ' Theme ' },
{id:130, name:  ' Statistics ' , type: ' Theme ' },
{id:131, name:  ' Maths ' , type: ' Theme ' },
{id:132, name:  ' Music ' , type: ' Theme ' },
{id:133, name:  ' Thermodynamics ' , type: ' Theme ' },
{id:134, name:  ' Science-fiction ' , type: ' Theme ' },
{id:135, name:  ' Topography ' , type: ' Theme ' },
{id:136, name:  ' Dynamic systems  ' , type: ' Theme ' },
{id:137, name:  ' bla 8 ' , type: ' idem ' },
{id:138, name:  ' Évolutive biology  ' , type: ' Theme ' },
{id:139, name:  ' Chaos theory ' , type: ' Theme ' },
{id:140, name:  ' data-visualisation ' , type: ' Nature ' },
{id:141, name:  ' 3D mesh visualisation ' , type: ' Nature ' },
{id:142, name:  ' tracks visualisation ' , type: ' Nature ' },
{id:143, name:  ' neural network ' , type: ' Nature ' },
{id:144, name:  ' motion-design ' , type: ' Nature ' },
{id:145, name:  ' graphic-design ' , type: ' Nature ' },
{id:146, name:  ' animation ' , type: ' Nature ' },
{id:147, name:  ' 3D interactive ' , type: ' Nature ' },
{id:148, name:  ' 2D interactive ' , type: ' Dimension ' },
{id:149, name:  ' 3D animation ' , type: ' Dimension ' },
{id:150, name:  ' 2D animation ' , type: ' Dimension ' },
{id:151, name:  ' Particle-system  ' , type: ' Nature ' },
       ];
