$(document).ready(function () {
    // google.maps.event.addDomListener(window, 'load', initialize);
    // var getArrayData = getLocalStoreData();

    // if (getArrayData["current_url"]) {
    //   window.location = getArrayData["current_url"];
    // }

    // checkHash();

    // $("#myModal").modal("show");
    $('#dob, #firstName, #lastName, #email, #location, #phone, #zipcode').on('change', function (e) {
        var mname = $(this).val();
        if (mname === '') {
            $(this).next('label').removeClass('scale-[0.8] translate-x-[12px] translate-y-[8px]');
        } else {
            $(this).next('label').addClass('scale-[0.8] translate-x-[12px] translate-y-[8px]');
        }
    })

    $(".gender-form .custom_click").click(function () {
        $(".error").hide();
        var hash = $(this).parent().attr("href");
        var currentstpnd = $(this);

        var d = new Date();
        var n = d.getFullYear();
        var location = $("#location").val();
        var zipcode = $("#zipcode").val();
        var dob = $("#dob").val();
        //   var birth_day = $("#birth_day").val();
        //   var birth_year = $("#birth_year").val();
        //   var valid_year = n - birth_year;
        var verify_firstname = $("#firstName").val();
        var verify_lastname = $("#lastName").val();
        var verify_email = $("#email").val();
        var verify_phonenumber = $("#phone").val();
        var ip_address = $("#lead_ip").val();
        var tahnkyou_phone = $("#tahnkyou_phone").val();
        var verifyCheck = true;
        var city = state_code = state_name = "";
        var phonevalidate = false;


        if (zipcode != "") {
            $.ajax("https://panel.uniquote.com/zip/" + zipcode, {
                type: "GET",
                success: function (data, status, xhr) {
                    console.log(data);
                    city = data.data['city'];
                    state_name = data.data['state_name'];
                    state_code = data.data['state_code'];
                    $("#city").val(city);
                    $("#state").val(state_code);
                },
                error: function (jqXhr, textStatus, errorMessage) {
                    console.log("Error" + errorMessage);
                }
            });
        }
        //        console.log('one-click');
        var skip = false;

        if ($(this).hasClass('skip-btn')) {
            skip = true;
        }
        if ($(this).hasClass('skip_location')) {
            $('#my_location').hide();
            $('.skip_location').hide();
            $('.nonono').hide();
            $('#my_zipcode').show();
            return false;
        }
        console.log(hash);


        if (dob == "" && hash == "step_four" && skip != true) {
            $(".error_birth_month").show();
        } else if (verify_firstname == "" && hash == "step_six") {
            $(".error_first_name").show();
        } else if (verify_lastname == "" && hash == "step_six") {
            $(".error_last_name").show();
        }
        //        else if (verify_email == "" && hash == "step_five") {
        //        $(".error_your_email").show();
        //      } 
        else if ((location == "" && zipcode == "") && hash == "final_step") {
            $(".error_your_zipcode").show();
        } else if (verify_phonenumber == "" && hash == "step_five") {
            $(".error_verify_phone").show();
        }
       
        else {

            const circle_progress = parseInt($("#custom_progress").val());
            //          console.log(circle_progress);

            $("#custom_progress").val(circle_progress + 16);
            $(".progress_speed").attr("data-current", circle_progress + 16);
            //console.log(circle_progress);
            if (circle_progress > 15 && circle_progress < 30) {
                // $('.itm-1 > .relative').removeAttr('class');
                $('.itm-1 > .relative').html('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5 h-5 text-white iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"></path></svg>');
                $('.itm-1 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-[#0F37A1]');

                $('.itm-2 > .relative').html('<div class="w-2.5 h-2.5 relative"><div class="h-2.5 w-2.5 rounded-full absolute transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div><div class="h-2.5 w-2.5 rounded-full absolute animate-ping transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div></div>');
                $('.itm-2 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 border-2 border-[#0F37A1] bg-white');
            } else if (circle_progress > 30 && circle_progress < 45) {
                console.log('working');
                $('.itm-2 > .relative').html('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5 h-5 text-white iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"></path></svg>');
                $('.itm-2 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-[#0F37A1]');

                $('.itm-3 > .relative').html('<div class="w-2.5 h-2.5 relative"><div class="h-2.5 w-2.5 rounded-full absolute transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div><div class="h-2.5 w-2.5 rounded-full absolute animate-ping transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div></div>');
                $('.itm-3 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 border-2 border-[#0F37A1] bg-white');
            } else if (circle_progress > 45 && circle_progress < 60) {
                console.log('working');
                $('.itm-3 > .relative').html('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5 h-5 text-white iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"></path></svg>');
                $('.itm-3 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-[#0F37A1]');

                $('.itm-4 > .relative').html('<div class="w-2.5 h-2.5 relative"><div class="h-2.5 w-2.5 rounded-full absolute transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div><div class="h-2.5 w-2.5 rounded-full absolute animate-ping transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div></div>');
                $('.itm-4 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 border-2 border-[#0F37A1] bg-white');
            } else if (circle_progress > 60 && circle_progress < 75) {
                console.log('working');
                $('.itm-4 > .relative').html('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5 h-5 text-white iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"></path></svg>');
                $('.itm-4 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-[#0F37A1]');

                $('.itm-5 > .relative').html('<div class="w-2.5 h-2.5 relative"><div class="h-2.5 w-2.5 rounded-full absolute transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div><div class="h-2.5 w-2.5 rounded-full absolute animate-ping transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div></div>');
                $('.itm-5 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 border-2 border-[#0F37A1] bg-white');
            } else if (circle_progress > 75 && circle_progress < 90) {
                console.log('working');
                $('.itm-5 > .relative').html('<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5 h-5 text-white iconify iconify--mdi" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"></path></svg>');
                $('.itm-5 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 bg-[#0F37A1]');

                $('.itm-6 > .relative').html('<div class="w-2.5 h-2.5 relative"><div class="h-2.5 w-2.5 rounded-full absolute transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div><div class="h-2.5 w-2.5 rounded-full absolute animate-ping transition-colors delay-300 duration-200 bg-[#0F37A1]" aria-hidden="true"></div></div>');
                $('.itm-6 > .relative').attr('class', 'relative w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 border-2 border-[#0F37A1] bg-white');
            }

            //            window.location.hash = "#" + hash;
            //            $("#current_url").val(window.location);
            localStorage.seniorangel_form = JSON.stringify($(".seniorangel_form").serializeArray());

            $(".errormsg").hide();

            $(".current_steps").hide();

            var nextblock = $(this).closest(".current_steps").next(".current_steps");

            nextblock.show();

            if (hash == "final_step" && verify_firstname != "") {
                console.log(verify_firstname)
                $("#prestep").hide();
                $("#finalstep").show();
                $("#customerName").text(verify_firstname);
                //   $("#customerZipcode").text("in "+zipcode);
                setTimeout(function () {
                    $('.my-outputs').html('<li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"><div class="bg-[#0F37A1] transition-height duration-500 h-full"></div></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-[#0F37A1] border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">REVIEWING YOUR DETAILS</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Checking Your Information</div></div></a></li><li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 border-[#0F37A1] bg-white border-2"><div class="w-full h-full border-2 border-[#0F37A1] rounded-full animate-ping" style="display: z;"></div><div class="absolute text-[#0F37A1] w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">SEARCHING YOUR AREA</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Finding Local Providers</div></div></a></li><li class="relative"><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 false border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="tracking-wide uppercase transform transition-transform duration-500 text-base text-[#0F37A1] font-semibold">MATCHING PROVIDERS</div><div class="text-base text-gray-500 transition-opacity duration-250">Searching for Available Licensed Insurance Agent</div></div></a></li>');
                }, 800);
                setTimeout(function () {
                    $('.my-outputs').html('<li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"><div class="bg-[#0F37A1] transition-height duration-500 h-full"></div></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-[#0F37A1] border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">REVIEWING YOUR DETAILS</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Checking Your Information</div></div></a></li><li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"><div class="bg-[#0F37A1] transition-height duration-500 h-full"></div></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-[#0F37A1] border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">SEARCHING YOUR AREA</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Finding Local Providers</div></div></a></li><li class="relative"><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 border-[#0F37A1] bg-white border-2"><div class="w-full h-full border-2 border-[#0F37A1] rounded-full animate-ping" style="display: z;"></div><div class="absolute text-[#0F37A1] w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="tracking-wide uppercase transform transition-transform duration-500 text-base text-[#0F37A1] font-semibold">MATCHING PROVIDERS</div><div class="text-base text-gray-500 transition-opacity duration-250">Searching for Available Licensed Insurance Agent</div></div></a></li>');
                }, 1800);
                setTimeout(function () {
                    window.location.href = "./thankyou.php?" + getParams() + "&name=" + verify_firstname;
                }, 2800);
                // $.ajax("form_request.php", {
                //     type: "POST",
                //     data: {
                //         form_data: JSON.stringify($(".seniorangel_form").serializeArray())
                //     },
                //     success: function (data, status, xhr) {
                //         setTimeout(function () {
                //             $('.my-outputs').html('<li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"><div class="bg-[#0F37A1] transition-height duration-500 h-full"></div></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-[#0F37A1] border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">REVIEWING YOUR DETAILS</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Checking Your Information</div></div></a></li><li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 border-[#0F37A1] bg-white border-2"><div class="w-full h-full border-2 border-[#0F37A1] rounded-full animate-ping" style="display: z;"></div><div class="absolute text-[#0F37A1] w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">SEARCHING YOUR AREA</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Finding Local Providers</div></div></a></li><li class="relative"><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 false border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="tracking-wide uppercase transform transition-transform duration-500 text-base text-[#0F37A1] font-semibold">MATCHING PROVIDERS</div><div class="text-base text-gray-500 transition-opacity duration-250">Searching for Available Licensed Insurance Agent</div></div></a></li>');
                //         }, 800);
                //         setTimeout(function () {
                //             $('.my-outputs').html('<li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"><div class="bg-[#0F37A1] transition-height duration-500 h-full"></div></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-[#0F37A1] border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">REVIEWING YOUR DETAILS</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Checking Your Information</div></div></a></li><li class="relative pb-10"><div class="-ml-px absolute mt-0.5 top-4 left-5 w-0.5 h-full bg-gray-300" aria-hidden="true"><div class="bg-[#0F37A1] transition-height duration-500 h-full"></div></div><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 bg-[#0F37A1] border-2"><div class="absolute text-white w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="text-base font-semibold tracking-wide uppercase transition-transform duration-500 transform">SEARCHING YOUR AREA</div><div class="text-base text-gray-500 transition-opacity opacity-100 duration-250">Finding Local Providers</div></div></a></li><li class="relative"><a href="#" class="relative flex items-start group"><div class="flex items-center h-9" aria-hidden="true"><div class="relative z-10 flex items-center justify-center rounded-full transition-all duration-200 w-10 h-10 border-[#0F37A1] bg-white border-2"><div class="w-full h-full border-2 border-[#0F37A1] rounded-full animate-ping" style="display: z;"></div><div class="absolute text-[#0F37A1] w-6 h-6"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div></div></div><div class="flex flex-col min-w-0 ml-4"><div class="tracking-wide uppercase transform transition-transform duration-500 text-base text-[#0F37A1] font-semibold">MATCHING PROVIDERS</div><div class="text-base text-gray-500 transition-opacity duration-250">Searching for Available Licensed Insurance Agent</div></div></a></li>');
                //         }, 1800);
                //         setTimeout(function () {
                //             window.location.href = "./thankyou.php?" + getParams() + "&name=" + verify_firstname + "&thank_phone=" + tahnkyou_phone;
                //         }, 2800);
                //         //   console.log("status: " + status + ", data: " + data);

                //     },
                //     error: function (jqXhr, textStatus, errorMessage) {
                //         console.log("Error" + errorMessage);
                //     },
                // });
            }
        }
    });
});

function getParams(url = window.location) {

    // Create a params object
    let params = {};
    let myurl = new URL(url);

    myurl.searchParams.forEach(function (val, key) {
        if (params[key] !== undefined) {
            if (!Array.isArray(params[key])) {
                params[key] = [params[key]];
            }
            params[key].push(val);
        } else {
            params[key] = val;
        }
    });
    return myurl.search;

    //	return params;

}

let autocomplete;
let address1Field;
let address2Field;
let postalField;

function initAutocomplete() {
    address1Field = document.querySelector("#location");
    postalField = document.querySelector("#zipcode");
    // Create the autocomplete object, restricting the search predictions to
    // addresses in the US and Canada.
    autocomplete = new google.maps.places.Autocomplete(address1Field, {
        componentRestrictions: { country: ["us"] },
        fields: ["address_components", "geometry"],
        types: ["address"],
    });
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
    let address1 = "";
    let postcode = "";
    console.log(place);

    for (const component of place.address_components) {
        // @ts-ignore remove once typings fixed
        const componentType = component.types[0];

        switch (componentType) {
            case "street_number": {
                address1 = `${component.long_name} ${address1}`;
                break;
            }

            case "route": {
                address1 += component.short_name;
                break;
            }

            case "postal_code": {
                postcode = `${component.long_name}${postcode}`;
                break;
            }

            case "postal_code_suffix": {
                postcode = `${postcode}-${component.long_name}`;
                break;
            }
            case "locality":
                document.querySelector("#city").value = component.long_name;
                break;
            case "administrative_area_level_1": {
                document.querySelector("#state").value = component.short_name;
                break;
            }
        }
    }

    //   address1Field.value = address1;
    postalField.value = postcode;

}

window.initAutocomplete = initAutocomplete;