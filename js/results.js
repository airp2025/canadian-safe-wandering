var initial_risk_level = sessionStorage.getItem("risk_level");
var unplanned_absence = false;
var store_risk = 0;

/*https://tomeko.net/online_tools/html_list_gen.php?lang=en : Use this link to create a new list to replace with the ones in the strategies below. You will have to remove the leading <ul> and ending </ul> as well as all white spaces when replacing the text.*/

//You will need to change the strategy advices in two places, both will be indicated with a comment like this

function change_risk_level(risk_level){
    $("#technology_content, #family_friends_content, #community_content").empty();
    if ( risk_level == 1 ){
        document.getElementById("risk_level").value = "1";
        $("#first_p").fadeOut(200, function(){
            //Change text of first paragraph for low risk here
            if ( initial_risk_level == "low" ){
                //If the user had an initial risk level of low and they are currently viewing the low risk level
                $("#first_p").text("While you are at a low risk right now, keep in mind that you can change to a higher level of risk very quickly. Below are some strategies you can try to reduce your risk of getting lost. Each strategy has its own strengths and limitations; therefore, it is always better to have at least two preventive strategies in place in case one fails.")
            } else if ( initial_risk_level == "medium" ) {
                //If the user had an initial risk level of medium and they are currently viewing the low risk level
                $("#first_p").text("Based on your responses, you are at a medium risk for getting lost. Here, you will see the strategies recommended for someone at low risk of getting lost.")
            } else {
                //If the user had an initial risk level of high and they are currently viewing the low risk level
                $("#first_p").text("Based on your responses, you are at a high risk for getting lost. Here, you will see the strategies recommended for someone at low risk of getting lost.")
            }

        }).fadeIn(200);

        $("#second_p").fadeOut(200, function(){
            //Change text of second paragraph for low risk here
            if ( initial_risk_level == "low" ){
                //If the user had an initial risk level of low and they are currently viewing the low risk level
                $("#second_p").html("Even though you are at this risk level right now, you can be at a higher or lower level of risk at any moment. For example, one moment you know exactly where you are, and a few minutes later you suddenly are lost and disoriented. <b>Click on “Strategies” in the upper right corner of this site to see tips for all three risk levels so that you can act quickly when your risk level does change.</b>")
            } else {
                $("#second_p").text("")
            }
            
        }).fadeIn(200);

        $("#technology_content").fadeOut(300, function(){
            //Change technology section of the strategies page for low risk here
            $("#technology_content").empty().append("<li>Look into obtaining a locating technology.<ul><li>These devices can be found on the <a href = 'https://uwaterloo.ca/aging-innovation-research-program/locator-devices' target = '_blank'>Following</a> website, or you can use the ones already on your phone (e.g., Find My Friend App, Life360, or Google Maps)</li></ul></li>").fadeIn();

        });

        $("#family_friends_content").fadeOut(300, function(){

            //Change family and friends section of the strategies page for low risk here
            $("#family_friends_content").empty().append("<li>Develop a plan of preventive strategies such as those highlighted in different risk levels. For example, tell your partner or friend you are going to the grocery store.</li>").fadeIn();

        });

        $("#community_content").fadeOut(300, function(){

            //Change community section of the strategies page for low risk here
            $("#community_content").empty().append("<li>Talk to your local Alzheimer Society or care provider. They can provide you with education or strategies to help keep you safe. </li><ul><li><a href = 'http://findingyourwayontario.ca' target= '_blank'>Finding Your Way Program</a></li><li><a href = 'http://alzheimer.ca/en/' target= '_blank'>Alzheimer Society</a></li></ul><li>Register yourself under a Vulnerable Persons Registry if available in your area.</li><ul><li>Ask local police or Alzheimer Society to determine if your community has one.</li></ul><li><a href='https://www.medicalert.ca' target = '_blank'>MedicAlert</a> can provide a bracelet that can identify who you are and connect you to your family member or friend if you get lost.</li>").fadeIn();

        });
        
        //Changing back and next button
        $("#back").css("background-color", "white").css("border", "1px solid #C4C4C4").find("i").css("color", "#C4C4C4");
        $("#next").css("background-color", "#848F17").css("border", "none").find("i").css("color", "white");

        //Change the download file of low risk here by replacing "assets/Low Risk Strategy.pdf"
        $("#download_link").attr("href", "assets/Low Risk Strategy.pdf");

        $("#low_section").css("opacity", "1");
        $("#medium_section").css("opacity", "0.5");
        $("#high_section").css("opacity", "0.5");
        $("#risk_text").text("Low Risk").css("color", "#848f17");

    } else if ( risk_level == 2 ){
        document.getElementById("risk_level").value = "2";
        $("#first_p").fadeOut(200, function(){

            if ( initial_risk_level == "low" ){
                //If the user had an initial risk level of low and they are currently viewing the medium risk level
                $("#first_p").text("Based on your responses, you are at a low risk for getting lost. Here, you will see the strategies recommended for someone at medium risk of getting lost.")
            } else if ( initial_risk_level == "medium" ) {
                //If the user had an initial risk level of medium and they are currently viewing the medium risk level
                $("#first_p").text("You are not alone and there is no need to fear. Many people living with dementia are at a medium risk. Below are some strategies you can try to reduce your risk of getting lost. It is better to have at least two strategies in place in case one fails.")
            } else {
                //If the user had an initial risk level of high and they are currently viewing the medium risk level
                $("#first_p").text("Based on your responses, you are at a high risk for getting lost. Here, you will see the strategies recommended for someone at medium risk of getting lost.")
            }

            //Change text of first paragraph for medium risk here
            

        }).fadeIn(200);
        $("#second_p").fadeOut(200, function(){

            //Change text of second paragraph for medium risk here
            if ( initial_risk_level == "medium" ){
                //If the user had an initial risk level of medium and they are currently viewing the medium risk level
                $("#second_p").html("Even though you are at this risk level right now, you can be at a higher or lower level of risk at any moment. For example, one moment you know exactly where you are, and a few minutes later you suddenly are lost and disoriented. <b>Click on “Strategies” in the upper right corner of this site to see tips for all three risk levels so that you can act quickly when your risk level does change.</b>")
            } else {
                $("#second_p").text("")
            }

        }).fadeIn(200);

        //Change technology section of the strategies page for medium risk here
        $("#technology_content").fadeOut(300, function(){
            $("#technology_content").empty().append("<li>Look into obtaining a locating technology.<ul><li>These devices can be found on the <a href = 'https://uwaterloo.ca/aging-innovation-research-program/locator-devices' target = '_blank'>Following</a> website, or you can use the ones already on your phone (e.g., Find My Friend App, Life360, or Google Maps)</li></ul></li>").fadeIn();
        });

        //Change family and friends section of the strategies page for medium risk here
        $("#family_friends_content").fadeOut(300, function(){
            $("#family_friends_content").empty().append("<li>Exercise with a partner.</li><li>Walk by yourself and let a family member or friend know that you are going on a walk, as well as where you are going.</li><li>Have someone look out for you.<ul><li>Have a family member or friend check in with you daily if you live alone. For example, a family member of neighbour can message you in the morning and afternoon to see how you are doing.</li></ul></li>").fadeIn();
        });

        //Change community section of the strategies page for medium risk here
        $("#community_content").fadeOut(300, function(){
            $("#community_content").empty().append("<li>Create list of where you used to live/work/frequent and keep list at home.<ul><li>This information can be used for others to find you. People tend to go back to places that are familiar to them. For example, these places can include a grocery store, coffee shop, or library.</li></ul></li><li>If you live alone and/or are afraid of venturing out for errands, consider using delivery programs and mobile applications for medications and groceries.</li>").fadeIn();
        });

        //Changing back and next button
        $("#back").css("background-color", "#848F17").css("border", "none").find("i").css("color", "white");
        $("#next").css("background-color", "#848F17").css("border", "none").find("i").css("color", "white");

        //Change the download file of medium risk here by replacing "assets/Medium Risk Strategy.pdf"
        $("#download_link").attr("href", "assets/Medium Risk Strategy.pdf");

        $("#low_section").css("opacity", "0.5");
        $("#medium_section").css("opacity", "1");
        $("#high_section").css("opacity", "0.5");
        $("#risk_text").text("Medium Risk").css("color", "#9a9d00");

    } else {
        document.getElementById("risk_level").value = "3";
        $("#first_p").fadeOut(200, function(){

            if ( initial_risk_level == "low" ){
                //If the user had an initial risk level of low and they are currently viewing the high risk level
                $("#first_p").text("Based on your responses, you are at a low risk for getting lost. Here, you will see the strategies recommended for someone at high risk of getting lost.")
            } else if ( initial_risk_level == "medium" ) {
                //If the user had an initial risk level of medium and they are currently viewing the high risk level
                $("#first_p").text("Based on your responses, you are at a medium risk for getting lost. Here, you will see the strategies recommended for someone at high risk of getting lost.")
            } else {
                //If the user had an initial risk level of high and they are currently viewing the high risk level
                $("#first_p").text("You are not alone and there is no need to fear. Many people living with dementia are at a high risk of getting lost. Below are some strategies you can try to reduce your risk of getting lost. It is better to have at least two strategies in place in case one fails.")
            }
            
        }).fadeIn(200);

        $("#second_p").fadeOut(200, function(){

            //Change text of second paragraph for high risk here
            if ( initial_risk_level == "high" ){
                $("#second_p").html("Even though you are at this risk level right now, you can be at a higher or lower level of risk at any moment. For example, one moment you know exactly where you are, and a few minutes later you suddenly are lost and disoriented. <b>Click on “Strategies” in the upper right corner of this site to see tips for all three risk levels so that you can act quickly when your risk level does change.</b>")
            } else {
                $("#second_p").text("")
            }
        }).fadeIn(200);

         //Change technology section of the strategies page for high risk here
         $("#technology_content").fadeOut(300, function(){
            $("#technology_content").empty().append("<li>Look into obtaining a locating technology.<ul><li>These devices can be found on the <a href = 'https://uwaterloo.ca/aging-innovation-research-program/locator-devices' target = '_blank'>Following</a> website, or you can use the ones already on your phone (e.g., Find My Friend App, Life360, or Google Maps)</li></ul></li>").fadeIn();
        });

        //Change family and friends section of the strategies page for high risk here
        $("#family_friends_content").fadeOut(300, function(){
            $("#family_friends_content").empty().append("<li>Start a buddy system (only go for walks or to the store with a family member or friend).</li>").fadeIn();
        });

        //Change community section of the strategies page for high risk here
        $("#community_content").fadeOut(300, function(){
            $("#community_content").empty().append("<li>Seek community supports (home care which includes occupational therapy and social work).</li><li>Register yourself with the Vulnerable Persons Registry if available in your community or with an identification program.<ul><li>Ask local police or Alzheimer Society to see if they have a locating database.  </li><li><a href = 'https://www.medicalert.ca' target = '_blank'>MedicAlert</a></li></ul></li><li>If you live alone and/or are afraid of venturing out for errands, consider using delivery programs and mobile applications for medications and groceries.</li>").fadeIn();
        });

        //Changing back and next button
        $("#back").css("background-color", "#848F17").css("border", "none").find("i").css("color", "white");
        $("#next").css("background-color", "white").css("border", "1px solid #C4C4C4").find("i").css("color", "#C4C4C4");
        
        //Change the download file of high risk here by replacing "assets/High Risk Strategy.pdf"
        $("#download_link").attr("href", "assets/High Risk Strategy.pdf");

        $("#low_section").css("opacity", "0.5");
        $("#medium_section").css("opacity", "0.5");
        $("#high_section").css("opacity", "1");
        $("#risk_text").text("High Risk").css("color", "#ff8500");

    }
}

function change_strategy_no_fade(risk_level){
    if ( risk_level ==  1 ){

        //Change technology section of the strategies page for low risk here
        $("#technology_content").empty().append("<li>Look into obtaining a locating technology.<ul><li>These devices can be found on the <a href = 'https://uwaterloo.ca/aging-innovation-research-program/locator-devices' target = '_blank'>Following</a> website, or you can use the ones already on your phone (e.g., Find My Friend App, Life360, or Google Maps)</li></ul></li>");

        //Change family and friends section of the strategies page for low risk here
        $("#family_friends_content").empty().append("<li>Develop a plan of preventive strategies such as those highlighted in different risk levels. For example, tell your partner or friend you are going to the grocery store.</li>");
        
        //Change community section of the strategies page for low risk here
        $("#community_content").empty().append("<li>Talk to your local Alzheimer Society or care provider. They can provide you with education or strategies to help keep you safe. </li><ul><li><a href = 'http://findingyourwayontario.ca' target= '_blank'>Finding Your Way Program</a></li><li><a href = 'http://alzheimer.ca/en/' target= '_blank'>Alzheimer Society</a></li></ul><li>Register yourself under a Vulnerable Persons Registry if available in your area.</li><ul><li>Ask local police or Alzheimer Society to determine if your community has one.</li></ul><li><a href='https://www.medicalert.ca' target = '_blank'>MedicAlert</a> can provide a bracelet that can identify who you are and connect you to your family member or friend if you get lost.</li>");

    } else if ( risk_level == 2 ){

        //Change technology section of the strategies page for medium risk here
        $("#technology_content").empty().append("<li>Look into obtaining a locating technology.<ul><li>These devices can be found on the <a href = 'https://uwaterloo.ca/aging-innovation-research-program/locator-devices' target = '_blank'>Following</a> website, or you can use the ones already on your phone (e.g., Find My Friend App, Life360, or Google Maps)</li></ul></li>");

        //Change family and friends section of the strategies page for medium risk here
        $("#family_friends_content").empty().append("<li>Exercise with a partner.</li><li>Walk by yourself and let a family member or friend know that you are going on a walk, as well as where you are going.</li><li>Have someone look out for you.<ul><li>Have a family member or friend check in with you daily if you live alone. For example, a family member of neighbour can message you in the morning and afternoon to see how you are doing.</li></ul></li>");

        //Change community section of the strategies page for medium risk here
        $("#community_content").empty().append("<li>Create list of where you used to live/work/frequent and keep list at home.<ul><li>This information can be used for others to find you. People tend to go back to places that are familiar to them. For example, these places can include a grocery store, coffee shop, or library.</li></ul></li><li>If you live alone and/or are afraid of venturing out for errands, consider using delivery programs and mobile applications for medications and groceries.</li>");
    } else {

        //Change technology section of the strategies page for high risk here
        $("#technology_content").empty().append("<li>Look into obtaining a locating technology.<ul><li>These devices can be found on the <a href = 'https://uwaterloo.ca/aging-innovation-research-program/locator-devices' target = '_blank'>Following</a> website, or you can use the ones already on your phone (e.g., Find My Friend App, Life360, or Google Maps)</li></ul></li>");

        //Change family and friends section of the strategies page for high risk here
        $("#family_friends_content").empty().append("<li>Start a buddy system (only go for walks or to the store with a family member or friend).</li>");

        //Change community section of the strategies page for high risk here
        $("#community_content").empty().append("<li>Seek community supports (home care which includes occupational therapy and social work).</li><li>Register yourself with the Vulnerable Persons Registry if available in your community or with an identification program.<ul><li>Ask local police or Alzheimer Society to see if they have a locating database.  </li><li><a href = 'https://www.medicalert.ca' target = '_blank'>MedicAlert</a></li></ul></li><li>If you live alone and/or are afraid of venturing out for errands, consider using delivery programs and mobile applications for medications and groceries.</li>");
    }
}

$("#strategy_popup").hide();

//Changing layout on portrait
window.onload = function(){
    if(window.innerHeight > window.innerWidth){
        $("nav ul").hide();
        $("#image").hide();
        $("body").css("padding-bottom", "30%");
    }
    if(window.innerWidth > window.innerHeight){
        $("nav ul").show();
        $("#image").show();
        $("body").css("padding-bottom", "0%");
    }

    if ( initial_risk_level == "low" ){
       change_risk_level(1);
        $("#medium_section").css("opacity", "0.5");
        $("#high_section").css("opacity", "0.5");
        $("#medium_section").css("background-image", "none");
        $("#high_section").css("background-image", "none");
    } else if ( initial_risk_level == "medium" ){
        change_risk_level(2);
        $("#low_section").css("opacity", "0.5");
        $("#high_section").css("opacity", "0.5");
        $("#low_section").css("background-image", "none");
        $("#high_section").css("background-image", "none");
    } else {
        change_risk_level(3);
        $("#low_section").css("opacity", "0.5");
        $("#medium_section").css("opacity", "0.5");
        $("#low_section").css("background-image", "none");
        $("#medium_section").css("background-image", "none");
    }
};

$(document).ready(function(){

    //Changing layout on orientation change
    $( window ).on( "orientationchange", function( event ) {
        if(window.innerHeight > window.innerWidth){
            $("nav ul").hide();
            $("#image").hide();
            $("body").css("padding-bottom", "30%");
        }
        if(window.innerWidth > window.innerHeight){
            $("nav ul").show();
            $("#image").show();
            $("body").css("padding-bottom", "0%");
        }
    });

    //Changing layout on browser size change
    $(window).resize(function(){
        if(window.innerHeight > window.innerWidth){
            $("nav ul").hide();
            $("#image").hide();
            $("body").css("padding-bottom", "30%");
        }
        if(window.innerWidth > window.innerHeight){
            $("nav ul").show();
            $("#image").show();
            $("body").css("padding-bottom", "0%");
        }
    });
    
    //Change texts when slider changes
    $("#risk_level").change( function(event){
        change_risk_level( document.querySelector('#risk_level').value );
    })

    //Change risk level to low on left circle click
    $("#low_circle").on( 'click', function () {
        var event = new Event('change');
        document.getElementById("risk_level").value = "1";
        document.getElementById("risk_level").dispatchEvent(event);
    });

    //Change risk level to medium on center circle click
    $("#medium_circle").click( function(){
        var event = new Event('change');
        document.getElementById("risk_level").value = "2";
        document.getElementById("risk_level").dispatchEvent(event);
    });

    //Change risk level to high on right circle click
    $("#high_circle").click( function(){
        var event = new Event('change');
        document.getElementById("risk_level").value = "3";
        document.getElementById("risk_level").dispatchEvent(event);
    });

    $("#strategies").click( function(){
        //Show strategies on button click
        $("#strategy_popup").fadeIn(300);
        $("#content").hide();
        if(window.innerHeight > window.innerWidth){
            $("body").css("padding-bottom", "40%");
        }
    });

    $("#close").click( function(){
        //Close strategies on button click
        unplanned_absence = false;
        change_strategy_no_fade(store_risk);
        $("#strategy_popup").hide();
        $("#content").fadeIn(100);
        if(window.innerHeight > window.innerWidth){
            $("body").css("padding-bottom", "30%");
        }
    })

    $("#lost").click( function(){
        if ( unplanned_absence == false ){
            //Change content when lost button is clicked
            $("#technology_content").fadeOut(300, function(){
                //Change technology section of the unplanned absence strategies
                $("#technology_content").empty().append("<li>Use Google or Apple Maps to redirect you home and keep your home address saved on your phone or on a card that can be kept in your wallet or jacket.</li>").fadeIn();
            });
    
            $("#family_friends_content").fadeOut(300, function(){
                //Change family and friends section of the unplanned absence strategies
                $("#family_friends_content").empty().append("<li>Have a friend or family member’s phone number that you can call.</li>").fadeIn();
            });
    
            $("#community_content").fadeOut(300, function(){
                //Change community section of the unplanned absence strategies
                $("#community_content").empty().append("<li>Call 911 or go to a local business to ask for help.</li><li>Identification strategies, such as wearing an ID bracelet, or put your care partner’s phone number in your wallet or jacket.</li>").fadeIn();
            });
            $(this).text("Back To Proactive Strategies").css("width", "clamp(250px, 22vw, 350px)");
            store_risk = document.getElementById("risk_level").value;
            unplanned_absence = true;
        } else {
            //Change content back when return button is clicked
            change_risk_level(store_risk);
            unplanned_absence = false;
            $(this).text("If You Are Lost").css("width","clamp(200px, 16vw, 300px)");
        }

    });
    
    $("#strategies").hover( function(){
        $(this).css("background-color", "#FF8500");            
    }, function(){
        $(this).css("background-color", "#848F17");
    });

    $("#restart").hover( function(){
        $(this).css("background-color", "#FF8500").css("border", "1px solid #FF8500").find("a").css("color", "#FFFFFF");            
    }, function(){
        $(this).css("background-color", "white").css("border", "1px solid #848F17").find("a").css("color", "#848F17");
    });

    $("#lost").hover( function(){
        $(this).css("background-color", "#FF8500");            
    }, function(){
        $(this).css("background-color", "#848F17");
    });

});