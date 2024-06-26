const Graph = ForceGraph3D()
                        (document.getElementById('3d-graph'))
                        
                        .jsonUrl('https://cdn.jsdelivr.net/gh/zacccarie/site@main/starwars-episode-5-interactions-v2.json')

                        .height(window.innerHeight - 60)
                        //.graphData(gData)
                        .backgroundColor("white")
                        //.nodeColor(node => "red")
                        //.nodeOpacity(1)
                        .linkColor(links => "black")
                        .linkWidth(1)
                        .linkOpacity(0.3)
                        
                        .showNavInfo(false)

                        .nodeAutoColorBy('group')
                        .nodeThreeObject(node => {
                            const sprite = new SpriteText(node.id);
                            sprite.material.depthWrite = false; // make sprite background transparent
                            sprite.color = node.color;
                            sprite.textHeight = 8;
                            return sprite;
                        });


                    elementResizeDetectorMaker().listenTo(
                        document.getElementById('3d-graph'),
                        el => Graph.width(el.offsetWidth)
                    );
