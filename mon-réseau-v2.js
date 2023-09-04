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

        const links = [
        { source:	1	,	target:	28	},
      { source:	1	,	target:	32	},
      { source:	1	,	target:	52	},
      { source:	1	,	target:  57	},
      { source:	1	,	target:	65	},
      { source:	1	,	target:	94	},
      { source:	1	,	target:	98	},
      { source:	1	,	target:	99	},
      { source:	1	,	target:	100	},
      { source:	1	,	target:	109	},
      { source:	1	,	target:	118	},
      { source:	1	,	target:	140	},
      { source:	1	,	target:	147	},
      { source:	2	,	target:	24	},
      { source:	2	,	target:	33	},
      { source:	2	,	target:	35	},
      { source:	2	,	target:	57	},
      { source:	2	,	target:	79	},
      { source:	2	,	target:	80	},
      { source:	2	,	target:	70	},
      { source:	2	,	target:	86	},
      { source:	2	,	target:	93	},
      { source:	2	,	target:	96	},
      { source:	2	,	target:	103	},
      { source:	2	,	target:	119	},
      { source:	2	,	target:	122	},
      { source:	2	,	target:	141	},
      { source:	2	,	target:	147	},
      { source:	3	,	target:	23	},
      { source:	3	,	target:	34	},
      { source:	3	,	target:	53	},
      { source:	3	,	target:	54	},
      { source:	3	,	target:	82	},
      { source:	3	,	target:	91	},
      { source:	3	,	target:	92	},
      { source:	3	,	target:	59	},
      { source:	3	,	target:	60	},
      { source:	3	,	target:	121	},
      { source:	3	,	target:	130	},
      { source:	3	,	target:	140	},
      { source:	3	,	target:	148	},
      { source:	4	,	target:	25	},
      { source:	4	,	target:	30	},
      { source:	4	,	target:	36	},
      { source:	4	,	target:	39	},
      { source:	4	,	target:	52	},
      { source:	4	,	target:	56	},
      { source:	4	,	target:	72	},
      { source:	4	,	target:	73	},
      { source:	4	,	target:	78	},
      { source:	4	,	target:	95	},
      { source:	4	,	target:	94	},
      { source:	4	,	target:	103	},
      { source:	4	,	target:	104	},
      { source:	4	,	target:	109	},
      { source:	4	,	target:	123	},
      { source:	4	,	target:	138	},
      { source:	5	,	target:	24	},
      { source:	5	,	target:	36	},
      { source:	5	,	target:	52	},
      { source:	5	,	target:	72	},
      { source:	5	,	target:	73	},
      { source:	5	,	target:	79	},
      { source:	5	,	target:	122	},
      { source:	5	,	target:	138	},
      { source:	5	,	target:	119	},
      { source:	5	,	target:	140	},
      { source:	5	,	target:	148	},
      { source:	6	,	target:	26	},
      { source:	6	,	target:	37	},
      { source:	6	,	target:	57	},
      { source:	6	,	target:	58	},
      { source:	6	,	target:	65	},
      { source:	6	,	target:	96	},
      { source:	6	,	target:	114	},
      { source:	6	,	target:	124	},
      { source:	6	,	target:	142	},
      { source:	6	,	target:	147	},
      { source:	6	,	target:	147	},
      { source:	8	,	target:	22	},
      { source:	8	,	target:	39	},
      { source:	8	,	target:	54	},
      { source:	8	,	target:	53	},
      { source:	8	,	target:	81	},
      { source:	8	,	target:	91	},
      { source:	8	,	target:	92	},
      { source:	8	,	target:	93	},
      { source:	8	,	target:	94	},
      { source:	8	,	target:	96	},
      { source:	8	,	target:	97	},
      { source:	8	,	target:	102	},
      { source:	8	,	target:	115	},
      { source:	8	,	target:	130	},
      { source:	8	,	target:	127	},
      { source:	8	,	target:	140	},
      { source:	8	,	target:	126	},
      { source:	8	,	target:	147	},
      { source:	9	,	target:	38	},
      { source:	9	,	target:	27	},
      { source:	9	,	target:	71	},
      { source:	9	,	target:	74	},
      { source:	9	,	target:	94	},
      { source:	9	,	target:	105	},
      { source:	9	,	target:	111	},
      { source:	9	,	target:	110	},
      { source:	9	,	target:	113	},
      { source:	9	,	target:	125	},
      { source:	9	,	target:	120	},
      { source:	9	,	target:	135	},
      { source:	9	,	target:	143	},
      { source:	9	,	target:	146	},
      { source:	10	,	target:	27	},
      { source:	10	,	target:	28	},
      { source:	10	,	target:	32	},
      { source:	10	,	target:	38	},
      { source:	10	,	target:	50	},
      { source:	10	,	target:	57	},
      { source:	10	,	target:	58	},
      { source:	10	,	target:	66	},
      { source:	10	,	target:	67	},
      { source:	10	,	target:	74	},
      { source:	10	,	target:	83	},
      { source:	10	,	target:	89	},
      { source:	10	,	target:	107	},
      { source:	10	,	target:	113	},
      { source:	10	,	target:	120	},
      { source:	10	,	target:	125	},
      { source:	10	,	target:	149	},
      { source:	12	,	target:	37	},
      { source:	12	,	target:	88	},
      { source:	12	,	target:	93	},
      { source:	12	,	target:	94	},
      { source:	12	,	target:	96	},
      { source:	12	,	target:	101	},
      { source:	12	,	target:	115	},
      { source:	12	,	target:	128	},
      { source:	12	,	target:	136	},
      { source:	12	,	target:	142	},
      { source:	12	,	target:	146	},
      { source:	12	,	target:	149	},
      { source:	12	,	target:	150	},
      { source:	13	,	target:	57	},
      { source:	13	,	target:	58	},
      { source:	13	,	target:	59	},
      { source:	13	,	target:	87	},
      { source:	13	,	target:	145	},
      { source:	13	,	target:	149	},
      { source:	14	,	target:	58	},
{ source:	14	,	target:	60	},
{ source:	14	,	target:	129	},
{ source:	14	,	target:	134	},
{ source:	14	,	target:	144	},
{ source:	14	,	target:	145	},
{ source:	14	,	target:	146	},
{ source:	15	,	target:	33	},
{ source:	15	,	target:	57	},
{ source:	15	,	target:	58	},
{ source:	15	,	target:	90	},
{ source:	15	,	target:	129	},
{ source:	15	,	target:	132	},
{ source:	15	,	target:	144	},
{ source:	15	,	target:	150	},
{ source:	16	,	target:	57	},
{ source:	16	,	target:	66	},
{ source:	16	,	target:	68	},
{ source:	16	,	target:	85	},
{ source:	16	,	target:	88	},
{ source:	16	,	target:	131	},
{ source:	16	,	target:	139	},
{ source:	16	,	target:	141	},
{ source:	17	,	target:	57	},
{ source:	17	,	target:	60	},
{ source:	17	,	target:	83	},
{ source:	17	,	target:	84	},
{ source:	17	,	target:	88	},
{ source:	17	,	target:	128	},
{ source:	17	,	target:	129	},
{ source:	17	,	target:	134	},
{ source:	17	,	target:	144	},
{ source:	17	,	target:	145	},
{ source:	17	,	target:	149	},
{ source:	18	,	target:	33	},
{ source:	18	,	target:	57	},
{ source:	18	,	target:	87	},
{ source:	18	,	target:	129	},
{ source:	18	,	target:	145	},
{ source:	19	,	target:	49	},
{ source:	19	,	target:	58	},
{ source:	19	,	target:	75	},
{ source:	19	,	target:	122	},
{ source:	19	,	target:	128	},
{ source:	19	,	target:	132	},
{ source:	19	,	target:	133	},
{ source:	19	,	target:	136	},
{ source:	19	,	target:	138	},
{ source:	19	,	target:	139	},
{ source:	19	,	target:	144	},
{ source:	22	,	target:	82	},
{ source:	22	,	target:	93	},
{ source:	22	,	target:	96	},
{ source:	22	,	target:	97	},
{ source:	22	,	target:	103	},
{ source:	22	,	target:	104	},
{ source:	22	,	target:	140	},
{ source:	23	,	target:	81	},
{ source:	24	,	target:	33	},
{ source:	24	,	target:	35	},
{ source:	24	,	target:	70	},
{ source:	24	,	target:	72	},
{ source:	24	,	target:	79	},
{ source:	24	,	target:	86	},
{ source:	24	,	target:	108	},
{ source:	24	,	target:	119	},
{ source:	24	,	target:	141	},
{ source:	24	,	target:	147	},
{ source:	25	,	target:	36	},
{ source:	25	,	target:	72	},
{ source:	25	,	target:	78	},
{ source:	25	,	target:	104	},
{ source:	25	,	target:	123	},
{ source:	25	,	target:	138	},
{ source:	26	,	target:	57	},
{ source:	26	,	target:	58	},
{ source:	26	,	target:	66	},
{ source:	26	,	target:	67	},
{ source:	26	,	target:	80	},
{ source:	26	,	target:	107	},
{ source:	27	,	target:	38	},
{ source:	27	,	target:	71	},
{ source:	27	,	target:	74	},
{ source:	27	,	target:	135	},
{ source:	28	,	target:	32	},
{ source:	28	,	target:	50	},
{ source:	28	,	target:	118	},
{ source:	28	,	target:	119	},
{ source:	28	,	target:	120	},
{ source:	29	,	target:	78	},
{ source:	29	,	target:	123	},
{ source:	29	,	target:	135	},
{ source:	29	,	target:	138	},
{ source:	29	,	target:	140	},
{ source:	30	,	target:	36	},
{ source:	30	,	target:	72	},
{ source:	30	,	target:	73	},
{ source:	30	,	target:	78	},
{ source:	30	,	target:	103	},
{ source:	30	,	target:	104	},
{ source:	30	,	target:	123	},
{ source:	30	,	target:	138	},
{ source:	30	,	target:	140	},
{ source:	31	,	target:	33	},
{ source:	31	,	target:	57	},
{ source:	31	,	target:	66	},
{ source:	31	,	target:	96	},
{ source:	53	,	target:	54	},
{ source:	53	,	target:	55	},
{ source:	56	,	target:	95	},
{ source:	66	,	target:	89	},
{ source:	68	,	target:	85	},
{ source:	68	,	target:	131	},
{ source:	69	,	target:	139	},
{ source:	69	,	target:	136	},
{ source:	70	,	target:	105	},
{ source:	70	,	target:	106	},
{ source:	70	,	target:	141	},
{ source:	71	,	target:	105	},
{ source:	71	,	target:	120	},
{ source:	71	,	target:	130	},
{ source:	72	,	target:	73	},
{ source:	72	,	target:	104	},
{ source:	73	,	target:	123	},
{ source:	73	,	target:	138	},
{ source:	82	,	target:	58	},
{ source:	82	,	target:	76	},
{ source:	83	,	target:	57	},
{ source:	83	,	target:	74	},
{ source:	83	,	target:	89	},
{ source:	83	,	target:	107	},
{ source:	84	,	target:	57	},
{ source:	84	,	target:	124	},
{ source:	84	,	target:	128	},
{ source:	86	,	target:	53	},
{ source:	87	,	target:	57	},
{ source:	88	,	target:	57	},
{ source:	85	,	target:	88	},
{ source:	96	,	target:	31	},
{ source:	96	,	target:	22	},
{ source:	96	,	target:	26	},
{ source:	96	,	target:	33	},
{ source:	96	,	target:	93	},
{ source:	97	,	target:	91	},
{ source:	97	,	target:	92	},
{ source:	97	,	target:	93	},
{ source:	97	,	target:	94	},
{ source:	97	,	target:	96	},
{ source:	98	,	target:	66	},
{ source:	98	,	target:	94	},
{ source:	98	,	target:	93	},
{ source:	98	,	target:	94	},
{ source:	98	,	target:	99	},
{ source:	98	,	target:	130	},
{ source:	98	,	target:	140	},
{ source:	98	,	target:	147	},
{ source:	98	,	target:	148	},
{ source:	98	,	target:	148	},
{ source:	99	,	target:	95	},
{ source:	99	,	target:	100	},
{ source:	99	,	target:	101	},
{ source:	99	,	target:	115	},
{ source:	99	,	target:	130	},
{ source:	99	,	target:	131	},
{ source:	100	,	target:	131	},
{ source:	101	,	target:	131	},
{ source:	100	,	target:	130	},
{ source:	101	,	target:	131	},
{ source:	103	,	target:	94	},
{ source:	103	,	target:	119	},
{ source:	103	,	target:	123	},
{ source:	103	,	target:	138	},
{ source:	104	,	target:	95	},
{ source:	104	,	target:	123	},
{ source:	104	,	target:	138	},
{ source:	105	,	target:	94	},
{ source:	105	,	target:	130	},
{ source:	105	,	target:	131	},
{ source:	105	,	target:	143	},
{ source:	105	,	target:	120	},
      
              ];

        const svg = d3.select("svg")
        .attr("width", "100vw")
        .attr("height", "100vh");
        //const width = +svg.attr("width");
        //const height = +svg.attr("height");


        // Définit les dimensions, notamment la moitié de la largeur et de la hauteur de la fenêtre, ainsi qu'un rayon
        const width = window.innerWidth / 2;
        const height = window.innerHeight / 2;
        const radius = 80;





        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody().strength(-50))
            .force("link", d3.forceLink(links).id(d => d.id).distance(200))
            .force("center", d3.forceCenter(width, height)) // Force de centrage des nœuds dans le SVG

            .on("tick", ticked);


        const g = svg.append("g").attr("class", "everything");

        const link = g.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("class", "link");

        const node = g.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(nodes)
            .enter().append("g")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        // Calculez le nombre de connexions pour chaque nœud
        const nodeConnections = {};
        links.forEach(link => {
            if (!nodeConnections[link.source.id]) {
                nodeConnections[link.source.id] = 0;
            }
            if (!nodeConnections[link.target.id]) {
                nodeConnections[link.target.id] = 0;
            }
            nodeConnections[link.source.id]++;
            nodeConnections[link.target.id]++;
        });

        // Définissez l'échelle pour la taille des nœuds en fonction du nombre de connexions
        const maxConnections = Math.max(...Object.values(nodeConnections));
        const nodeSizeScale = d3.scaleLinear()
            .domain([1, maxConnections])
            .range([5, 20]); // Ajustez la plage de tailles de nœuds selon vos préférences

        // Créez une échelle de couleur pour mapper les types de nœuds à des couleurs
        const colorScale = d3.scaleOrdinal()
    .domain(["librairie", "program", "platform", "data type", "render engine", "IDE", "environnement", "languages", "data-file-extension", "plugins"])
    .range(["#ffdfd3", "#84A59D", "#A4A9C4", "#F9CA57", "#ff8c94", "#E29F7D", "#ffb5a7", "#8DBDAF", "#C0C6D9", "#C2B2E0"]);

node.append("circle")
    .attr("class", "node")
    .attr("r", d => nodeSizeScale(nodeConnections[d.id]))
    .style("stroke", d => colorScale(d.type));


        node.append("text")
            .attr("class", "label")
            .text(d => d.name);

        node.on("mouseover", mouseOverNode)
            .on("mouseout", mouseOutNode);

        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("transform", d => `translate(${d.x},${d.y})`);
        }

        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        
        
        
        
        function mouseOverNode(d) {
        // Ajoutez une classe CSS aux nœuds connectés au nœud survolé
        node.classed("node-hovered", n => n.id === d.id);
        link.classed("related-link", l => l.source === d || l.target === d);
        
        // Ajoutez une classe CSS aux nœuds connectés
        const connectedNodes = links.filter(l => l.source === d || l.target === d);
        connectedNodes.forEach(connectedNode => {
            node.filter(n => n.id === connectedNode.source.id || n.id === connectedNode.target.id)
                .classed("related-node", true);
        });

        // Ajoutez une classe CSS aux nœuds non connectés et réduisez leur opacité
        node.classed("non-connected-node", n => {
            return !connectedNodes.some(connectedNode => connectedNode.source.id === n.id || connectedNode.target.id === n.id);
        });
    }

    function mouseOutNode() {
        // Supprimez les classes CSS et rétablissez l'opacité normale
        node.classed("node-hovered", false);
        link.classed("related-link", false);
        node.classed("related-node", false);
        
        // Rétablissez l'opacité normale de tous les nœuds non connectés
        node.classed("non-connected-node", false);
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





        // Ajout des fonctions de zoom
        const zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on("zoom", zoomed);

        svg.call(zoom);

        function zoomed() {
            g.attr("transform", d3.event.transform);
        }
