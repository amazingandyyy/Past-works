    var clickTime; var createdTime; var reactionTime;
        
        function makeBox() {
        
            function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
            var randomTime = Math.random();
            
            randomTime = randomTime * 2000;
        
            setTimeout(function() {
                
                if (Math.random()>0.5) {
                document.getElementById("box").style.borderRadius = "0px";
                }else{
                document.getElementById("box").style.borderRadius = "100px";
                }
                
           
                
                document.getElementById("box").style.top = Math.random()*500+"px";
                document.getElementById("box").style.left = Math.random()*700+"px";
                //document.getElementById("box").style.width = (Math.random()*60+20) +"px";
                //document.getElementById("box").style.rotation = =Math.random()*180 + "deg";
                
                //document.getElementById("box").style.backgroundColor = getRandomColor();
                
                document.getElementById("box").style.display = "block";
                
                createdTime = Date.now();

        
            }, randomTime);
            
        }
        
        
        document.getElementById("box").onclick = function() {
        
            clickTime = Date.now();
            
            reactionTime = (clickTime - createdTime)/1000;
                        
            this.style.display = "none";
        
            makeBox();
            
            document.getElementById("time").innerHTML = reactionTime + " seconds";
        }
        
        
        makeBox();
        