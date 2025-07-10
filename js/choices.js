function change_question(desired_question){
    
    //Reset questions
    $(".option").css("border", "1px solid #C4C4C4").css("font-weight","normal").css("margin-bottom","2%").show().attr("disabled", false);
    $("#advice").hide(); 
    $("h4").css("color", "#B6B6B6").css("font-weight", "normal");
    $(".progress_bar_rectangle").css("background-color", "#F0F2DD");
    $("#option_4").hide();
    
    if (desired_question == 1){

        //Change text of question 1 here
        $("#title").text("How often do you get lost?");
        
        //Change text of option 1 for question 1 here
        $("#option_1").text("I get lost all the time");
        
        //Change text of option 2 for question 1 here
        $("#option_2").text("I get lost sometimes");
        
        //Change text of option 3 for question 1 here
        $("#option_3").text("I never get lost");
        
        //Change progress bar
        if(window.innerHeight > window.innerWidth){
            $("h3").text("QUESTION 1 of 6");
        }
        if(window.innerWidth > window.innerHeight){
            $("h3").text("QUESTION 1");
        }
        $("h2").text("1 of 6");
        $("#question_1").css("color", "#848F17").css("font-weight", 800);
        $("#question_2").css("font-weight", "bold");
        $("#question_1_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_1");

    } else if (desired_question == 2){

        //Change text of question 2 here
        $("#title").text("What is your living status?");

        //Change text of option 1 for question 2 here
        $("#option_1").text("I live alone");

        //Change text of option 2 for question 2 here
        $("#option_2").text("I live with family/friends who are sometimes around");

        //Change text of option 3 for question 2 here
        $("#option_3").text("I live with family/friends who someone is always around");

        //Change progress bar
        if(window.innerHeight > window.innerWidth){
            $("h3").text("QUESTION 2 of 6");
        }
        if(window.innerWidth > window.innerHeight){
            $("h3").text("QUESTION 2");
        }
        $("h2").text("2 of 6");
        $("#question_2").css("color", "#848F17").css("font-weight", 800);
        $("#question_3").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_2");

    } else if (desired_question == 3){
        
        //Change text of question 3 here
        $("#title").text("How often do you go into the community?");

        //Change text of option 1 for question 3 here
        $("#option_1").text("I leave my home at least once a day");
        
        //Change text of option 2 for question 3 here
        $("#option_2").text("I leave my home a few times a week");
        
        //Change text of option 3 for question 3 here
        $("#option_3").text("I never leave my home");
        
        //Change progress bar
        if(window.innerHeight > window.innerWidth){
            $("h3").text("QUESTION 3 of 6");
        }
        if(window.innerWidth > window.innerHeight){
            $("h3").text("QUESTION 3");
        }
        $("h2").text("3 of 6");
        $("#question_3").css("color", "#848F17").css("font-weight", 800);
        $("#question_4").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar, #question_3_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_3");

    } else if (desired_question == 4){

        //Change text of question 4 here
        $("#title").text("At what time do you typically leave the house?");
        
        //Change text of option 1 for question 4 here
        $("#option_1").text("Only during the day");

        //Change text of option 2 for question 4 here
        $("#option_2").text("During the day and in the evening");
        
        //Change text of option 3 for question 4 here
        $("#option_3").text("In the evening");

        //Change progress bar
        if(window.innerHeight > window.innerWidth){
            $("h3").text("QUESTION 4 of 6");
        }
        if(window.innerWidth > window.innerHeight){
            $("h3").text("QUESTION 4");
        }
        $("h2").text("4 of 6");
        $("#question_4").css("color", "#848F17").css("font-weight", 800);
        $("#question_5").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar, #question_3_bar, #question_4_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_4");
        
    } else if (desired_question == 5){

        //Change text of question 5 here
        $("#title").text("How do you cope during stressful situations?");
        
        //Change text of option 1 for question 5 here
        $("#option_1").text("I often feel the need to leave the house to cope with stress");

        //Change text of option 2 for question 5 here
        $("#option_2").text("Sometimes I feel the need to leave the house and sometimes I prefer to stay home");

        //Change text of option 3 for question 5 here
        $("#option_3").text("I prefer to stay home to cope with stress");

        //Change progress bar
        if(window.innerHeight > window.innerWidth){
            $("h3").text("QUESTION 5 of 6");
        }
        if(window.innerWidth > window.innerHeight){
            $("h3").text("QUESTION 5");
        }
        $("h2").text("5 of 6");
        $("#question_5").css("color", "#848F17").css("font-weight", 800);
        $("#question_6").css("font-weight", "bold");
        $("#question_1_bar, #question_2_bar, #question_3_bar, #question_4_bar, #question_5_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_5");
    } else {
        
        $("#title").text("How do you typically get around?");
        $("#option_1").text("I drive");
        $("#option_2").text("I take public transit");
        $("#option_3").text("I walk everywhere");

        //Change progress bar
        if(window.innerHeight > window.innerWidth){
            $("h3").text("QUESTION 6 of 6");
        }
        if(window.innerWidth > window.innerHeight){
            $("h3").text("QUESTION 6");
        }
        $("h2").text("6 of 6");
        $("#question_6").css("color", "#848F17").css("font-weight", 800);
        $("#question_1_bar, #question_2_bar, #question_3_bar, #question_4_bar, #question_5_bar, #question_6_bar").css("background-color", "#848F17");
        $("#pointer").css("grid-area", "arrow_6");
        $("#option_4").show();

    }
}

function show_advice(option){
    if (current_question == 1){
        if ( option == 1 ){
            //Change advice for option 1 for question 1 here
            $("#first_paragraph").html("Everyone gets lost from time to time, but persons with memory loss have a higher risk of getting lost.");
            $("#second_paragraph").html("Typically, we look for strategies after a missing incident happens. It is safer to be proactive, or prepare for a missing incident before it happens. If you walk away from your family or friends when you are out in the community, consider carrying a wearable locating device such as a commercial Global Positioning System (GPS), or download a GPS application on your phone.  Considering carrying a note on you that states your name, home address and explains that you have a cognitive impairment like dementia.");
        } else if ( option == 2 ){
            //Change advice for option 2 for question 1 here
            $("#first_paragraph").html("Everyone gets lost from time to time, but persons with memory loss have a higher risk of getting lost.");
            $("#second_paragraph").html("If you enjoy outdoor walks, consider going with a family member or a friend. It is safer to be proactive, or prepare for a missing incident before it happens. Consider carrying a wearable locating device such as a commercial Global Positioning System (GPS), or download a GPS application on your phone.");
        } else {
            //Change advice for option 3 for question 1 here
            $("#first_paragraph").html("Everyone gets lost from time to time, but persons with memory loss have a higher risk of getting lost.");
            $("#second_paragraph").html("It would be a good idea to discuss strategies with your care partners and family to help prevent you from getting lost. It is safer to be proactive, or prepare for a missing incident before it happens. Even if you have never been lost, consider carrying a wearable locating device such as a commercial Global Positioning System (GPS), or download a GPS application on your phone.");
        }
    } else if (current_question == 2){
        if ( option == 1 ){
            //Change advice for option 1 for question 2 here
            $("#first_paragraph").html("Persons living with dementia have different living situations.");
            $("#second_paragraph").html("If you live alone, consider using the buddy system when you want to go for a walk. If this is not an option, consider using a locating technology like a commercial GPS or applications already on your phone.");
        } else if ( option == 2 ){
            //Change advice for option 2 for question 2 here
            $("#first_paragraph").html("Persons living with dementia have different living situations.");
            $("#second_paragraph").html("If you live with family but are normally home alone, consider using a locating technology like a commercial GPS or applications already on your phone.");
        } else {
            //Change advice for option 3 for question 2 here
            $("#first_paragraph").html("Persons living with dementia have different living situations.");
            $("#second_paragraph").html("If you live with family who are with you all day, consider talking about ways to help you from getting lost, such as coming up with a plan on what you should do if you get separated from your family/friends when out and about in the community.");
        }
    } else if (current_question == 3){
        if ( option == 1 ){
            //Change advice for option 1 for question 3 here
            $("#first_paragraph").html("It’s always nice to get some fresh air.");
            $("#second_paragraph").html("If you normally leave your home at least once a day, it’s a good idea to go with a family member or friend, or to let them know where you plan on going and when you plan to return. Carry a phone so that you can contact family or friend if you are lost. There might also be times where you are at risk of getting lost in your own home, whether it is in an apartment building or a single-family home. If this happens to you, consider calling a family member or friend so they can help to reorient you.");
        } else if ( option == 2 ){
            //Change advice for option 2 for question 3 here
            $("#first_paragraph").html("It’s always nice to get some fresh air.");
            $("#second_paragraph").html("If you normally leave your home a few times a week, it’s a good idea to go with a family member or friend, or to let them know where you plan on going and when you plan to return. There might also be times where you are at risk of getting lost in your own home, whether it is in an apartment building or a single-family home. If this happens to you, consider having a phone close by so you can call a family member or friend so they can help to reorient you.");
        } else {
            //Change advice for option 3 for question 3 here
            $("#first_paragraph").html("It’s always nice to get some fresh air.");
            $("#second_paragraph").html("In the few instances that you might leave your home, it’s a good idea to go with a family member or friend, or to let them know where you plan on going and when you plan to return. There might also be times where you are at risk of getting lost in your own home, whether it is in an apartment building or a single-family home. If this happens to you, consider having a phone close by so you can call a family member or friend so they can help to reorient you.");
        }
    } else if (current_question == 4){
        if ( option == 1 ){
            //Change advice for option 1 for question 4 here
            $("#first_paragraph").html("Persons living with memory loss may like to have a similar routine every day.");
            $("#second_paragraph").html("If you typically leave your house only during the day, consider letting a family member or friend know where you plan to go and when you plan to return.");
        } else if ( option == 2 ){
            //Change advice for option 2 for question 4 here
            $("#first_paragraph").html("Persons living with memory loss may like to have a similar routine every day.");
            $("#second_paragraph").html("If you typically leave your house during the day and in the evening, consider letting a family member or friend know where you plan to go and when you plan to return. In the evening, consider wearing reflective clothing or strips to help make yourself easily recognizable in the dark.");
        } else {
            //Change advice for option 3 for question 4 here
            $("#first_paragraph").html("Persons living with memory loss may like to have a similar routine every day.");
            $("#second_paragraph").html("If you typically leave your hours only during the evening, consider letting a family member or friend know where you plan to go and when you plan to return. Also consider wearing reflective clothing or strips to help make yourself easily recognizable in the dark.");
        }
    } else if (current_question == 5){
        if ( option == 1 ){
            //Change advice for option 1 for question 5 here
            $("#first_paragraph").html("Stress is a very real issue for some people.");
            $("#second_paragraph").html("If you cope with stressful situations by leaving your home or residence, consider going to the same place (e.g., park, community centre) each time and calling a family member or friend to let them know where you are.");
        } else if ( option == 2 ){
            //Change advice for option 2 for question 5 here
            $("#first_paragraph").html("Stress is a very real issue for some people.");
            $("#second_paragraph").html("If you cope with stressful situations by leaving the house, consider taking a walk each time to the same local park or community centre.");
        } else {
            //Change advice for option 3 for question 5 here
            $("#first_paragraph").html("Stress is a very real issue for some people.");
            $("#second_paragraph").html("If you are OK to stay at home when stressed, consider having a stretching or light exercise routine to release any nerves.");
        }
    } else {
        if ( option == 1 ){
            //Change advice for option 1 for question 6 here
            $("#first_paragraph").html("Some people leave their home or residence from time to time.");
            $("#second_paragraph").html("If you typically drive to go somewhere, consider having a phone with you that has phone numbers of family and friends. If you need to call somebody, the number will be easily accessible.");
        } else if ( option == 2 ){
            //Change advice for option 2 for question 6 here
            $("#first_paragraph").html("Some people leave their homes or residence from time to time.");
            $("#second_paragraph").html("If you typically take public transit to go somewhere, it's a good idea to let a family member or friend know where you plan to go and when you expect to return. Also, consider a way to plan the route, such as writing the route down, using Google Maps on your phone, or letting the bus driver know which stop is needed.");
        } else if ( option == 3 ) {
            //Change advice for option 3 for question 6 here
            $("#first_paragraph").html("Some people leave their home or residence from time to time.");
            $("#second_paragraph").html("If you typically walk to go somewhere, it’s a good idea to let a family member or friend know where you’re going and when you expect to return.");
        } else {
            //Change advice for option 4 for question 6 here
            $("#first_paragraph").html("Some people leave their home or residence from time to time.");
            $("#second_paragraph").html("If you typically have a ride to go somewhere, it’s a good idea to let the driver know how long you plan to be there, and when and where they should pick you up.");
        }
    }
}

var current_question = 1;
var choice_weight = [0,0,0,0,0,0];
var option_selected = false;

//Changing layout on portrait
window.onload = function(){
    if(window.innerHeight > window.innerWidth){
        $("ul").hide();
        $("h3").text("QUESTION 1 of 6");
        $("#progress_bar").hide();
    }
    if(window.innerWidth > window.innerHeight){
        $("ul").show();
        $("h3").text("QUESTION 1");
        $("#progress_bar").show();
    }
}

$(document).ready(function(){

    //Changing layout on orientation change
    $( window ).on( "orientationchange", function( event ) {
        if(window.innerHeight > window.innerWidth){
            $("ul").hide();
            $("h3").text("QUESTION 1 of 6");
            $("#progress_bar").hide();
        }
        if(window.innerWidth > window.innerHeight){
            $("ul").show();
            $("h3").text("QUESTION 1");
            $("#progress_bar").show();
        }
    });

    //Changing layout on window resize
    $(window).resize(function(){
        if(window.innerHeight > window.innerWidth){
            $("ul").hide();
            $("h3").text("QUESTION 1 of 6");
            $("#progress_bar").hide();
        }
        if(window.innerWidth > window.innerHeight){
            $("ul").show();
            $("h3").text("QUESTION 1");
            $("#progress_bar").show();
        }
    });

    //Hide advice and option 4 on start
    $("#advice").hide();
    $("#option_4").hide();

    //Disable navigation buttons
    $("#back").attr("disabled", true);
    $("#next").attr("disabled", true);

    $(".option").click(function(){

        option_selected = true;

        //Hide other options
        $(".option").not(this).each( function(){
            $(this).hide();
        });

        $(".option").css("margin-bottom", "1.5%");
        $("#options").css("margin-top", "2%");

        //Disable button and set option as selected
        $(this).css("border", "3px solid #848F17").css("font-weight", "bold").attr("disabled", true).append('<i class="fas fa-check checkmark"></i>');     
        
        //Show advice
        $("#advice").fadeIn("slow");

        //Control which advice to show and change weight of option
        if( $(this).attr("id") == "option_1" ){
            show_advice(1);
            choice_weight[current_question - 1] = 3;
        } else if ( $(this).attr("id") == "option_2" ){
            show_advice(2);
            choice_weight[current_question - 1] = 2;
        } else if ( $(this).attr("id") == "option_3" ){
            show_advice(3);
            if (current_question != 6){
                choice_weight[current_question - 1] = 1;
            } else {
                choice_weight[current_question - 1] = 2;
            }
        } else {
            show_advice(4);
            choice_weight[current_question - 1] = 1;
        }

        //Set next button to be enabled
        $("#next").css("background-color", "#848F17").css("color", "white").attr("disabled", false);
        $("#next_icon").css("color", "white");

        //Change back button to enabled
        $("#back").css("color", "#848F17").css("border","1px solid #848F17").attr("disabled", false);
        $("#back_icon").css("color","#848F17");

        //Change next button to be risk level button on last question
        if (current_question == 6){
            $("#next").text("Risk Level");
            $("#next").append('<i class="fas fa-chevron-right" id = "next_icon"></i>');
            $("#next").css("background-color", "#FF8500").css("width", "clamp(140px, 13vw, 300px)");
            $("#next_icon").css("margin-left","clamp(8px, 0.3vw, 10px)").css("color", "white");
        }

    });

    $(".navigation_button").click( function(){
    
        //
        $("#next").text("Next").css("background-color", "#848F17").css("width", "clamp(120px, 10vw, 300px)").append('<i class="fas fa-chevron-right" id = "next_icon"></i>').css("background-color", "white").css("color", "#C4C4C4").css("border","1px solid #C4C4C4").attr("disabled", true).find("i").css("margin-left","15px");
        $("#next_icon").css("color", "#C4C4C4");
    
    });

    $("#back").click( function(){
        //Change back button to original colours
        $(this).css("color","#848F17").css("background-color", "white").css("border","1px solid #848F17");
        $("#back_icon").css("color", "#848F17");

        //Go back a question if an option is selected
        if ( option_selected == false ){
            --current_question;
        }

        //Change question
        change_question(current_question);

        //Disable back button if first question
        if ( current_question == 1 ){
            $("#back").css("color", "#C4C4C4").css("border","1px solid #C4C4C4").attr("disabled", true);
            $("#back_icon").css("color","#C4C4C4");
        }

        option_selected = false;
    });

    $("#back").hover( function(){
        $(this).css("color","white").css("background-color", "#FF8500").css("border","none");
        $("#back_icon").css("color", "white");
    }, function(){
         $(this).css("color","#848F17").css("background-color", "white").css("border","1px solid #848F17");
        $("#back_icon").css("color", "#848F17");
    });

    $("#next").click( function(){
        if ( option_selected == true){
            if ( current_question != 6 ){
                //Change question on click if option is selected
                ++current_question;
                change_question(current_question);
                option_selected = false;   
            } else {
                //Calculate weight and go to results on last question
                var final_weight = 0.25*choice_weight[0] + 0.2*choice_weight[1] + 0.15*choice_weight[2] + 0.15*choice_weight[3] + 0.15*choice_weight[4] + 0.1*choice_weight[5];
                //Determining risk level
                if ( final_weight <= 1.6 ){
                    sessionStorage.setItem("risk_level", "low");
                } else if ( final_weight <= 2.3){
                    sessionStorage.setItem("risk_level", "medium");
                } else {
                    sessionStorage.setItem("risk_level", "high");
                }
                window.location.href = "results.html";
            }
        }
    });

    $("#next").hover( function(){
        if (current_question != 6){
            $(this).css("color","white").css("background-color", "#FF8500").css("border","none");
        } else {
            $(this).css("color","white").css("background-color", "#848F17").css("border","none");
        }
        }, function(){
        if (current_question != 6){
            $(this).css("color","white").css("background-color", "#848F17").css("border","1px solid #848F17");
            $("#next_icon").css("color", "white");
        } else {
            $(this).css("color","white").css("background-color", "#FF8500").css("border","1px solid #FF8500");
        }
        
    });
    
});