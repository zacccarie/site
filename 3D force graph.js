const Graph = ForceGraph3D()
                        (document.getElementById('3d-graph'))
                        
                        .jsonUrl('../datasets/miserables.json')

                        .height(window.innerHeight - 60)
                        //.graphData(gData)
                        .backgroundColor("black")
                        //.nodeColor(node => "red")
                        //.nodeOpacity(1)
                        .linkColor(links => "white")
                        .linkWidth(2)
                        
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
