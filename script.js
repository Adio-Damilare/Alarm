 
        d= new Audio();
        d.src = "owo.mp3"
        var cock = new Audio("Alaram.mp3")
        var mp = new Audio("cock.mp3")
        var h;
        var m;
        var s;
        
        function setAlarm(){
            let hour = hr.value; 
            let mins = minute.value;
            let seconds = sec.value;
            var great = textarea.innerText
            t = new Date();

           

                if(hour==t.getHours() && mins== t.getMinutes() && seconds == t.getSeconds()){
                    cock.play();
                    d.play();
                    document.getElementById("alert").innerHTML=(`<div class="alert alert-danger alert-dismissible" role="alert">
                   ${great}
                    <button type="button" onclick="clear()" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>`)
                };
                setTimeout(`setAlarm()`,5000);
           
        }

        function stop(){   
            let hour = hr.value; 
            let mins = minute.value;
            let seconds = sec.value; 
            if(mins.length<=0 && hour.length<=0  ){
                alert("you have not set any alarm")
            }
            else{

                a=prompt(`What is the answer of ${100} X ${49}/ ${2.5}`)
                if(a==1960){
                    var e = confirm("Are you sure you want to stop the alarm")?true:false;
                        if(e==true){
                            d.pause();
                        }else{
                            
                        }
                }
                else{

                    mp.play()
                }
            }
            
            
           
        }

       

