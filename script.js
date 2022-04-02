 
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