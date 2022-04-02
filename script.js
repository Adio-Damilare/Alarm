 
        d= new Audio();
        d.src = "owo.mp3"
        var h;
        var m;
        var s;
        
        function setAlarm(){
            let hour = hr.value; 
            let mins = min.value;
            let seconds = sec.value;
            t = new Date();
            if(hour==t.getHours() && mins == t.getMinutes() && seconds == t.getSeconds()){
                d.play();
                alert("wakeup");
                document.getElementById("alert").innerHTML=(`<div class="alert alert-danger alert-dismissible" role="alert">
                This is a danger dismissible alert — check it out!
                <button type="button" id="clear" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`)
                };
            setTimeout("setAlarm()",5000);
           
        }

        function stop(){    
            d = new Date;
            a=prompt(`What is the answer of ${100} X ${49}/ ${2.5}`)
            if(a==1960){
                var e = confirm("Are you sure you want to stop the alarm")?true:false;
                    if(e==true){
                        d.pause();
                    }else{
                        alert("wakeup")

                    }
            }
            else(
                alert("wakeup")
            )
            
           
        }

        document.getAnimations("clear").addEventListener("click",function(){
            document.getElementById("alert").innerHTML=""
        })