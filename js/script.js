let sa = 0
        function mate() {
            sa++
            if (sa%2 == 1) {
             var materias = document.getElementById('espec')
            materias.classList.remove("esc")
            
            }else{
                var materias = document.getElementById('espec')
            materias.classList.add("esc") 
              
            }
            
            
        }

        //-------------------NATUREZA----------------

        function nat() {
            window.open("nat-1.html")
           
        }

        //-------------------LINGUAGENS----------------

        function ling() {
            window.open("ling.html")
           
        }

        //-------------------MATEMATICA----------------

        function mat(){
            window.open("mat.html")
        }

        //-------------------HUMANAS----------------

        function hum(){
            window.open("humanas.html")
        }


        //-------------------SOBRE----------------
        function sobre(){
            window.open("sobre.html")
        }
