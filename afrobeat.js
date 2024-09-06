var selectAll = document.querySelectorAll(".beat").length;

    for(i = 0; i<selectAll; i++){

        document.querySelectorAll(".beat")[i].addEventListener("click", function(){

            var buttonClicked = this.innerHTML;
            
            makeKeySound(buttonClicked);

        })
    }

        document.addEventListener("keypress", function(press){

            makeKeySound(press.key);
        });

        function makeKeySound(key){

        switch(key){
            case "d":
            var davido = new Audio("davidosong.mp3");
            davido.play();
            break;

            case "w":
            var wizkid = new Audio("wizkidsong.mp3");
            wizkid.play();
            break;

            case "b":
            var burna = new Audio("burna.mp3");
            burna.play();
            break;

            case "o":
            var olamide = new Audio("olamidesong.mp3");
            olamide.play();
            break;

            case "r":
            var rema = new Audio("remasong.mp3");
            rema.play();
            break;

            case "b":
            var asake = new Audio("asakesong.mp3");
            asake.play();
            break;

            default:console.log(buttonClicked)
        }
    }      
        
    