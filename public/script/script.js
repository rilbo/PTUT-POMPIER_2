$(function(){
    var shrinkHeader = 300;
     $(window).scroll(function() {
       var scroll = getCurrentScroll();
         if ( scroll >= shrinkHeader ) {
              $('header').addClass('shrink');
              $('.icon_rex').addClass('taille');
              

           }
           else {
               $('header').removeClass('shrink');
               $('.icon_rex').removeClass('taille');
               
               
           }
     });
   function getCurrentScroll() {
       return window.pageYOffset || document.documentElement.scrollTop;
       }

       
    
   });

   function change(){
    var button1 = document.getElementsByClassName("un").item(0).textContent;
    var button2 = document.getElementsByClassName("deux").item(0).textContent;
    var button3 = document.getElementsByClassName("trois").item(0).textContent;
    var button4 = document.getElementsByClassName("quattre").item(0).textContent;
    var button5 = document.getElementsByClassName("cinq").item(0).textContent;
    var button6 = document.getElementsByClassName("six").item(0).textContent;
    var button7 = document.getElementsByClassName("sept").item(0).textContent;
    var button8 = document.getElementsByClassName("huit").item(0).textContent;
    var button9 = document.getElementsByClassName("neuf").item(0).textContent;
    var button10 = document.getElementsByClassName("dix").item(0).textContent;
    var button11 = document.getElementsByClassName("onze").item(0).textContent;

    
    
    if (button1 == "Adjudant Chef - DEMORAIS F"){
      button1= "Adjudant Chef - STOCKLEY C";
      button2= "Adjudant - GANTIER A";
      button3= "Sergent Chef - SOUDRY R";
      button4= "Sergent Chef - ALFARO C";
      button5= "Caporal Chef - DERIAUX M";
      button6= "Caporal Chef - CAUCHOIS S";
      button7= "Caporal - DOWAY G";
      button8= "Sapeur 1ere Classe - FOUATRE S";
      button9= "Sapeur 1ere Classe - FECAMP P";
      button10="Sapeur 1ere Classe - BOUTEILLER C";
      button11="Sapeur 1ere Classe - STOCKLEY C";
      $(".modif").text("Equipe B");
      $(".modif_button").text("Voir Equipe A");

    }else{
      button1 = "Adjudant Chef - DEMORAIS F";
      button2= "Adjudant - AGASSE M";
      button3= "Sergent Chef - LAURENT P";
      button4= "Sergent Chef - LEFEBVRE B";
      button5= "Caporal Chef - ROUSSEL P";
      button6= "Caporal Chef - TREFFE R";
      button7= "Caporal Chef - BERRENGER Y";
      button8= "Caporal - LENOUVEL S";
      button9= "Sapeur 1er Classe - LE TALLEC S";
      button10="Sapeur 1er Classe - GAINVILLE F";
      button11="";
      $(".modif").text("Equipe A");
      $(".modif_button").text("Voir Equipe B");
      
    }

    document.getElementsByClassName("un").item(0).innerHTML= button1;
    document.getElementsByClassName("deux").item(0).innerHTML= button2;
    document.getElementsByClassName("trois").item(0).innerHTML= button3;
    document.getElementsByClassName("quattre").item(0).innerHTML= button4;
    document.getElementsByClassName("cinq").item(0).innerHTML= button5;
    document.getElementsByClassName("six").item(0).innerHTML= button6;
    document.getElementsByClassName("sept").item(0).innerHTML= button7;
    document.getElementsByClassName("huit").item(0).innerHTML= button8;
    document.getElementsByClassName("neuf").item(0).innerHTML= button9;
    document.getElementsByClassName("dix").item(0).innerHTML= button10;
    document.getElementsByClassName("onze").item(0).innerHTML= button11;

  }


    

   





