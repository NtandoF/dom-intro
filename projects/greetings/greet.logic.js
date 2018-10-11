function GreetingFactory(userStorages){


  var counter = 0;
  var Names ='' ;
  var languages = "" ;

       function Counter(Name){
        if(Name !== ""){
          if (NamesGreeted[Name.toUpperCase()] === undefined){

         NamesGreeted[Name.toUpperCase()] = 0;

         }
         NamesGreeted[Name.toUpperCase()] += 1;
        }

      }

   function counterAmount(){
        return(NamesGreeted)
      }

      function languages(){
        return languages;
      }


        function greeting(language, Names){
          //console.log(Names);
               Counter(Names);
          if (language === "English"){
              // Counter(name);
             return languages = 'Hello, ' + Names;
          }

          if (language === "Afrikaans"){
            // Counter(name);
            return languages = 'Hallo, ' + Names ;
          }

          if (language === "French"){
            // Counter(name);
             return languages = 'Bonjour, '  + Names;
          }

        }

        function clear(){
          NamesGreeted = {}
        }
        function forNames(){
          return Names;
        }

        return{
        GreetingFactory,
        greeting,
        counterTotal,
        languages,
        clearing,
        NamesGreeted
     }

 }
