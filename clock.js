var b;
var h="00";
var m="00";
var s="00";

        function showtime()
        {
            h="00";
             m="00";
            s="00";
          
           b = setInterval(function(){
            s++;
               if(s<10)
               {
                 s='0'+s;
                }
            
                if (s>=60)
                {
                    m++;s=0;
                    if (m<10){
                        m='0'+m;
                    }
                }
                if (m>=60){
                    h++;m=0
                    if (h<10){
                        h='0'+h;
                    }
                }

                // document.getElementById('main').innerText=h+":"+m+":"+s;
                const timeString = `${h}:${m}:${s}`;

// Update the element with id "main"
document.getElementById('main').innerText = timeString;
                

                if (parseInt(s)==time)
                {
                   
                  alert("Timer is already at "+time+" Seconds.");
                  restartw();
                }
            },1000);
        }

        function stopw()
        {
            clearInterval(b);
        }

        function restartw() 
        {
            clearInterval(b);
            showtime();
        }

        function setT()
        {
        
            time=prompt("Enter the seconds you want to set the Timer for :");
            time=parseInt(time);
            
            clearInterval(b);
            showtime();
            // s = time % 60;
           
        }

        window.onload = showtime;