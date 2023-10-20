//點擊活動
$('#as').click(function () {
    var x = $('#aD').val();
    var y = parseInt(x);
    var aAns = $('#aA').val()
    $('#inwork1').unbind('mouseenter');
    $('#inwork2').unbind('mouseenter');
    $('#inwork3').unbind('mouseenter');
    $('#inwork4').unbind('mouseenter');
    $('#inwork5').unbind('mouseenter');
    $('#inwork6').unbind('mouseenter');
    $('#inwork7').unbind('mouseenter');
    $('#inwork8').unbind('mouseenter');
    $('#inwork9').unbind('mouseenter');
    $('#inwork10').unbind('mouseenter');
    $('#inwork11').unbind('mouseenter');
    $('#inwork12').unbind('mouseenter');
    $('#inwork13').unbind('mouseenter');
    $('#inwork14').unbind('mouseenter');
    $('#inwork15').unbind('mouseenter');
    $('#inwork16').unbind('mouseenter');
    $('#inwork17').unbind('mouseenter');
    $('#inwork18').unbind('mouseenter');
    $('#inwork19').unbind('mouseenter');
    $('#inwork20').unbind('mouseenter');
    $('#inwork21').unbind('mouseenter');
    $('#inwork22').unbind('mouseenter');
    $('#inwork23').unbind('mouseenter');
    $('#inwork24').unbind('mouseenter');
    $('#inwork25').unbind('mouseenter');
    $('#inwork26').unbind('mouseenter');
    $('#inwork27').unbind('mouseenter');
    $('#inwork28').unbind('mouseenter');
    $('#inwork29').unbind('mouseenter');
    $('#inwork30').unbind('mouseenter');
    $('#inwork31').unbind('mouseenter');
    $('#inwork32').unbind('mouseenter');
    $('#inwork33').unbind('mouseenter');
    $('#inwork34').unbind('mouseenter');
    $('#inwork35').unbind('mouseenter');
    $('#inwork36').unbind('mouseenter');
    $('#inwork37').unbind('mouseenter');
    $('#inwork38').unbind('mouseenter');
    $('#inwork39').unbind('mouseenter');
    $('#inwork40').unbind('mouseenter');
    $('#inwork41').unbind('mouseenter');
    $('#inwork42').unbind('mouseenter');
    $('#askactive').dialog('close')

    $('#inactive1').mouseenter(function () {
        for (i = 1; i < y + 1; i++) {
            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive1').append(`${aAns}`)
    })
    $('#inactive1').click(function () {
        for (i = 1; i < y + 1; i++) {
            $(`#inactive` + i).css('background-color', 'red');
        }
        $('#inactive1').attr({'title':`<b>${aAns}</b>`});
    })
    $('#inactive1').mouseleave(function () {
        for (i = 1; i < y + 1; i++) {
            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive1').text('');
    })

    $('#inactive2').mouseenter(function () {
        for (i = 2; i < y + 2; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive2').append(`${aAns}`)
    })
    $('#inactive2').mouseleave(function () {
        for (i = 2; i < y + 2; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive2').text('')
    })
    $('#inactive3').mouseenter(function () {
        for (i = 3; i < y + 3; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive3').append(`${aAns}`)
    })
    $('#inactive3').mouseleave(function () {
        for (i = 3; i < y + 3; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive3').text('')
    })
    $('#inactive4').mouseenter(function () {
        for (i = 4; i < y + 4; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive4').append(`${aAns}`)
    })
    $('#inactive4').mouseleave(function () {
        for (i = 4; i < y + 4; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive4').text('')
    })
    $('#inactive5').mouseenter(function () {
        for (i = 5; i < y + 5; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive5').append(`${aAns}`)
    })
    $('#inactive5').mouseleave(function () {
        for (i = 5; i < y + 5; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive5').text('')
    })
    $('#inactive6').mouseenter(function () {
        for (i = 6; i < y + 6; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive6').append(`${aAns}`)
    })
    $('#inactive6').mouseleave(function () {
        for (i = 6; i < y + 6; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive6').text('')
    })
    $('#inactive7').mouseenter(function () {
        for (i = 7; i < y + 7; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive7').append(`${aAns}`)
    })
    $('#inactive7').mouseleave(function () {
        for (i = 7; i < y + 7; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive7').text('')
    })
    $('#inactive8').mouseenter(function () {
        for (i = 8; i < y + 8; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive8').append(`${aAns}`)
    })
    $('#inactive8').mouseleave(function () {
        for (i = 8; i < y + 8; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive8').text('')
    })
    $('#inactive9').mouseenter(function () {
        for (i = 9; i < y + 9; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive9').append(`${aAns}`)
    })
    $('#inactive9').mouseleave(function () {
        for (i = 9; i < y + 9; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive9').text('')
    })
    $('#inactive10').mouseenter(function () {
        for (i = 10; i < y + 10; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive10').append(`${aAns}`)
    })
    $('#inactive10').mouseleave(function () {
        for (i = 10; i < y + 10; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive10').text('')
    })
    $('#inactive11').mouseenter(function () {
        for (i = 11; i < y + 11; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive11').append(`${aAns}`)
    })
    $('#inactive11').mouseleave(function () {
        for (i = 11; i < y + 11; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive11').text('')
    })
    $('#inactive12').mouseenter(function () {
        for (i = 12; i < y + 12; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive12').append(`${aAns}`)
    })
    $('#inactive12').mouseleave(function () {
        for (i = 12; i < y + 12; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive12').text('')
    })
    $('#inactive13').mouseenter(function () {
        for (i = 13; i < y + 13; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive13').append(`${aAns}`)
    })
    $('#inactive13').mouseleave(function () {
        for (i = 13; i < y + 13; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive13').text('')
    })
    $('#inactive14').mouseenter(function () {
        for (i = 14; i < y + 14; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive14').append(`${aAns}`)
    })
    $('#inactive14').mouseleave(function () {
        for (i = 14; i < y + 14; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive14').text('')
    })
    $('#inactive15').mouseenter(function () {
        for (i = 15; i < y + 15; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive15').append(`${aAns}`)
    })
    $('#inactive15').mouseleave(function () {
        for (i = 15; i < y + 15; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive15').text('')
    })
    $('#inactive16').mouseenter(function () {
        for (i = 16; i < y + 16; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive16').append(`${aAns}`)
    })
    $('#inactive16').mouseleave(function () {
        for (i = 16; i < y + 16; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive16').text('')
    })
    $('#inactive17').mouseenter(function () {
        for (i = 17; i < y + 17; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive17').append(`${aAns}`)
    })
    $('#inactive17').mouseleave(function () {
        for (i = 17; i < y + 17; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive17').text('')
    })
    $('#inactive18').mouseenter(function () {
        for (i = 18; i < y + 18; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive18').append(`${aAns}`)
    })
    $('#inactive18').mouseleave(function () {
        for (i = 18; i < y + 18; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive18').text('')
    })
    $('#inactive19').mouseenter(function () {
        for (i = 19; i < y + 19; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive19').append(`${aAns}`)
    })
    $('#inactive19').mouseleave(function () {
        for (i = 19; i < y + 19; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive19').text('')
    })
    $('#inactive20').mouseenter(function () {
        for (i = 20; i < y + 20; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive20').append(`${aAns}`)
    })
    $('#inactive20').mouseleave(function () {
        for (i = 20; i < y + 20; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive20').text('')
    })
    $('#inactive21').mouseenter(function () {
        for (i = 21; i < y + 21; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive21').append(`${aAns}`)
    })
    $('#inactive21').mouseleave(function () {
        for (i = 21; i < y + 21; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive21').text('')
    })
    $('#inactive22').mouseenter(function () {
        for (i = 22; i < y + 22; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive22').append(`${aAns}`)
    })
    $('#inactive22').mouseleave(function () {
        for (i = 22; i < y + 22; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive22').text('')
    })
    $('#inactive23').mouseenter(function () {
        for (i = 23; i < y + 23; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive23').append(`${aAns}`)
    })
    $('#inactive23').mouseleave(function () {
        for (i = 23; i < y + 23; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive23').text('')
    })
    $('#inactive24').mouseenter(function () {
        for (i = 24; i < y + 24; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive24').append(`${aAns}`)
    })
    $('#inactive24').mouseleave(function () {
        for (i = 24; i < y + 24; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive24').text('')
    })
    $('#inactive25').mouseenter(function () {
        for (i = 25; i < y + 25; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive25').append(`${aAns}`)
    })
    $('#inactive25').mouseleave(function () {
        for (i = 25; i < y + 25; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive25').text('')
    })
    $('#inactive26').mouseenter(function () {
        for (i = 26; i < y + 26; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive26').append(`${aAns}`)
    })
    $('#inactive26').mouseleave(function () {
        for (i = 26; i < y + 26; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive26').text('')
    })
    $('#inactive27').mouseenter(function () {
        for (i = 27; i < y + 27; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive27').append(`${aAns}`)
    })
    $('#inactive27').mouseleave(function () {
        for (i = 27; i < y + 27; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive27').text('')
    })
    $('#inactive28').mouseenter(function () {
        for (i = 28; i < y + 28; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive28').append(`${aAns}`)
    })
    $('#inactive28').mouseleave(function () {
        for (i = 28; i < y + 28; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive28').text('')
    })
    $('#inactive29').mouseenter(function () {
        for (i = 29; i < y + 29; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive29').append(`${aAns}`)
    })
    $('#inactive29').mouseleave(function () {
        for (i = 29; i < y + 29; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive29').text('')
    })
    $('#inactive30').mouseenter(function () {
        for (i = 30; i < y + 30; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive30').append(`${aAns}`)
    })
    $('#inactive30').mouseleave(function () {
        for (i = 30; i < y + 30; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive30').text('')
    })
    $('#inactive31').mouseenter(function () {
        for (i = 31; i < y + 31; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive31').append(`${aAns}`)
    })
    $('#inactive31').mouseleave(function () {
        for (i = 31; i < y + 31; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive31').text('')
    })
    $('#inactive32').mouseenter(function () {
        for (i = 32; i < y + 32; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive32').append(`${aAns}`)
    })
    $('#inactive32').mouseleave(function () {
        for (i = 32; i < y + 32; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive32').text('')
    })
    $('#inactive33').mouseenter(function () {
        for (i = 33; i < y + 33; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive33').append(`${aAns}`)
    })
    $('#inactive33').mouseleave(function () {
        for (i = 33; i < y + 33; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive33').text('')
    })
    $('#inactive34').mouseenter(function () {
        for (i = 34; i < y + 34; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive34').append(`${aAns}`)
    })
    $('#inactive34').mouseleave(function () {
        for (i = 34; i < y + 34; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive34').text('')
    })
    $('#inactive35').mouseenter(function () {
        for (i = 35; i < y + 35; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive35').append(`${aAns}`)
    })
    $('#inactive35').mouseleave(function () {
        for (i = 35; i < y + 35; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive35').text('')
    })
    $('#inactive36').mouseenter(function () {
        for (i = 36; i < y + 36; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive36').append(`${aAns}`)
    })
    $('#inactive36').mouseleave(function () {
        for (i = 36; i < y + 36; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive36').text('')
    })
    $('#inactive37').mouseenter(function () {
        for (i = 37; i < y + 37; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive37').append(`${aAns}`)
    })
    $('#inactive37').mouseleave(function () {
        for (i = 37; i < y + 37; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive37').text('')
    })
    $('#inactive38').mouseenter(function () {
        for (i = 38; i < y + 38; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive38').append(`${aAns}`)
    })
    $('#inactive38').mouseleave(function () {
        for (i = 38; i < y + 38; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive38').text('')
    })
    $('#inactive39').mouseenter(function () {
        for (i = 39; i < y + 39; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive39').append(`${aAns}`)
    })
    $('#inactive39').mouseleave(function () {
        for (i = 39; i < y + 39; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive39').text('')
    })
    $('#inactive40').mouseenter(function () {
        for (i = 40; i < y + 40; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive40').append(`${aAns}`)
    })
    $('#inactive40').mouseleave(function () {
        for (i = 40; i < y + 40; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive40').text('')
    })
    $('#inactive41').mouseenter(function () {
        for (i = 41; i < y + 41; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive41').append(`${aAns}`)
    })
    $('#inactive41').mouseleave(function () {
        for (i = 41; i < y + 41; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive41').text('')
    })
    $('#inactive42').mouseenter(function () {
        for (i = 42; i < y + 42; i++) {

            $(`#inactive` + i).css('background-color', 'orange');
        }
        $('#inactive42').append(`${aAns}`)
    })
    $('#inactive42').mouseleave(function () {
        for (i = 42; i < y + 42; i++) {

            $(`#inactive` + i).css('background-color', 'rgb(246, 234, 224)');
        }
        $('#inactive42').text('')
    })
})










//點擊待辦
$('#ws').click(function () {
    var wWns = $('#wW').val()
    console.log(wWns);
    $('#inactive1').unbind('mouseenter');
    $('#inactive2').unbind('mouseenter');
    $('#inactive3').unbind('mouseenter');
    $('#inactive4').unbind('mouseenter');
    $('#inactive5').unbind('mouseenter');
    $('#inactive6').unbind('mouseenter');
    $('#inactive7').unbind('mouseenter');
    $('#inactive8').unbind('mouseenter');
    $('#inactive9').unbind('mouseenter');
    $('#inactive10').unbind('mouseenter');
    $('#inactive11').unbind('mouseenter');
    $('#inactive12').unbind('mouseenter');
    $('#inactive13').unbind('mouseenter');
    $('#inactive14').unbind('mouseenter');
    $('#inactive15').unbind('mouseenter');
    $('#inactive16').unbind('mouseenter');
    $('#inactive17').unbind('mouseenter');
    $('#inactive18').unbind('mouseenter');
    $('#inactive19').unbind('mouseenter');
    $('#inactive20').unbind('mouseenter');
    $('#inactive21').unbind('mouseenter');
    $('#inactive22').unbind('mouseenter');
    $('#inactive23').unbind('mouseenter');
    $('#inactive24').unbind('mouseenter');
    $('#inactive25').unbind('mouseenter');
    $('#inactive26').unbind('mouseenter');
    $('#inactive27').unbind('mouseenter');
    $('#inactive28').unbind('mouseenter');
    $('#inactive29').unbind('mouseenter');
    $('#inactive30').unbind('mouseenter');
    $('#inactive31').unbind('mouseenter');
    $('#inactive32').unbind('mouseenter');
    $('#inactive33').unbind('mouseenter');
    $('#inactive34').unbind('mouseenter');
    $('#inactive35').unbind('mouseenter');
    $('#inactive36').unbind('mouseenter');
    $('#inactive37').unbind('mouseenter');
    $('#inactive38').unbind('mouseenter');
    $('#inactive39').unbind('mouseenter');
    $('#inactive40').unbind('mouseenter');
    $('#inactive41').unbind('mouseenter');
    $('#inactive42').unbind('mouseenter');
    $('#askwork').dialog('close')
    $('#inwork1').mouseenter(function () {

        $('#inwork1').css('background-color', 'orange');
        $('#inwork1').append(`${wWns}`)
    })
    $('#inwork1').mouseleave(function () {

        $('#inwork1').css('background-color', 'rgb(191, 193, 179)');
        $('#inwork1').text('')
    })
    $('#inwork2').mouseenter(function () {

        $('#inwork2').append(`${wWns}`)
        $('#inwork2').css('background-color', 'orange');
    })
    $('#inwork2').mouseleave(function () {

        $('#inwork2').css('background-color', 'rgb(191, 193, 179)');
        $('#inwork2').text('')
    })
    $('#inwork3').mouseenter(function () {

        $('#inwork3').css('background-color', 'orange');
        $('#inwork3').append(`${wWns}`)
    })
    $('#inwork3').mouseleave(function () {

        $('#inwork3').css('background-color', 'rgb(191, 193, 179)');
        $('#inwork3').text('')
    })
    $('#inwork4').mouseenter(function () {

        $('#inwork4').append(`${wWns}`)
        $('#inwork4').css('background-color', 'orange');
    })
    $('#inwork4').mouseleave(function () {

        $('#inwork4').css('background-color', 'rgb(191, 193, 179)');
        $('#inwork4').text('')
    })
    $('#inwork5').mouseenter(function () {
        $('#inwork5').append(`${wWns}`)

        $('#inwork5').css('background-color', 'orange');
    })
    $('#inwork5').mouseleave(function () {

        $('#inwork5').css('background-color', 'rgb(191, 193, 179)');
        $('#inwork5').text('')
    })
    $('#inwork6').mouseenter(function () {
        $('#inwork6').append(`${wWns}`)
        $('#inwork6').css('background-color', 'orange');
    })
    $('#inwork6').mouseleave(function () {

        $('#inwork6').text('')
        $('#inwork6').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork7').mouseenter(function () {
        $('#inwork7').append(`${wWns}`)
        $('#inwork7').css('background-color', 'orange');
    })
    $('#inwork7').mouseleave(function () {

        $('#inwork7').text('')
        $('#inwork7').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork8').mouseenter(function () {
        $('#inwork8').append(`${wWns}`)
        $('#inwork8').css('background-color', 'orange');
    })
    $('#inwork8').mouseleave(function () {

        $('#inwork8').text('')
        $('#inwork8').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork9').mouseenter(function () {
        $('#inwork9').append(`${wWns}`)
        $('#inwork9').css('background-color', 'orange');
    })
    $('#inwork9').mouseleave(function () {
        $('#inwork9').text('')
        $('#inwork9').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork10').mouseenter(function () {
        $('#inwork10').append(`${wWns}`)
        $('#inwork10').css('background-color', 'orange');
    })
    $('#inwork10').mouseleave(function () {
        $('#inwork10').text('')
        $('#inwork10').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork11').mouseenter(function () {
        $('#inwork11').append(`${wWns}`)
        $('#inwork11').css('background-color', 'orange');
    })
    $('#inwork11').mouseleave(function () {
        $('#inwork11').text('')
        $('#inwork11').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork12').mouseenter(function () {
        $('#inwork12').append(`${wWns}`)
        $('#inwork12').css('background-color', 'orange');
    })
    $('#inwork12').mouseleave(function () {
        $('#inwork12').text('')
        $('#inwork12').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork13').mouseenter(function () {
        $('#inwork13').append(`${wWns}`)
        $('#inwork13').css('background-color', 'orange');
    })
    $('#inwork13').mouseleave(function () {
        $('#inwork13').text('')
        $('#inwork13').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork14').mouseenter(function () {
        $('#inwork14').append(`${wWns}`)
        $('#inwork14').css('background-color', 'orange');
    })
    $('#inwork14').mouseleave(function () {
        $('#inwork14').text('')
        $('#inwork14').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork15').mouseenter(function () {
        $('#inwork15').append(`${wWns}`)
        $('#inwork15').css('background-color', 'orange');
    })
    $('#inwork15').mouseleave(function () {
        $('#inwork15').text('')
        $('#inwork15').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork16').mouseenter(function () {
        $('#inwork16').append(`${wWns}`)
        $('#inwork16').css('background-color', 'orange');
    })
    $('#inwork16').mouseleave(function () {
        $('#inwork16').text('')
        $('#inwork16').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork17').mouseenter(function () {
        $('#inwork17').append(`${wWns}`)
        $('#inwork17').css('background-color', 'orange');
    })
    $('#inwork17').mouseleave(function () {
        $('#inwork17').text('')
        $('#inwork17').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork18').mouseenter(function () {
        $('#inwork18').append(`${wWns}`)
        $('#inwork18').css('background-color', 'orange');
    })
    $('#inwork18').mouseleave(function () {
        $('#inwork18').text('')
        $('#inwork18').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork19').mouseenter(function () {
        $('#inwork19').append(`${wWns}`)
        $('#inwork19').css('background-color', 'orange');
    })
    $('#inwork19').mouseleave(function () {
        $('#inwork19').text('')
        $('#inwork19').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork20').mouseenter(function () {
        $('#inwork20').append(`${wWns}`)
        $('#inwork20').css('background-color', 'orange');
    })
    $('#inwork20').mouseleave(function () {
        $('#inwork20').text('')
        $('#inwork20').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork21').mouseenter(function () {
        $('#inwork21').append(`${wWns}`)
        $('#inwork21').css('background-color', 'orange');
    })
    $('#inwork21').mouseleave(function () {
        $('#inwork21').text('')
        $('#inwork21').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork22').mouseenter(function () {
        $('#inwork22').append(`${wWns}`)
        $('#inwork22').css('background-color', 'orange');
    })
    $('#inwork22').mouseleave(function () {
        $('#inwork22').text('')
        $('#inwork22').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork23').mouseenter(function () {
        $('#inwork23').append(`${wWns}`)
        $('#inwork23').css('background-color', 'orange');
    })
    $('#inwork23').mouseleave(function () {
        $('#inwork23').text('')
        $('#inwork23').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork24').mouseenter(function () {
        $('#inwork24').append(`${wWns}`)
        $('#inwork24').css('background-color', 'orange');
    })
    $('#inwork24').mouseleave(function () {
        $('#inwork24').text('')
        $('#inwork24').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork25').mouseenter(function () {
        $('#inwork25').append(`${wWns}`)
        $('#inwork25').css('background-color', 'orange');
    })
    $('#inwork25').mouseleave(function () {
        $('#inwork25').text('')
        $('#inwork25').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork26').mouseenter(function () {
        $('#inwork26').append(`${wWns}`)
        $('#inwork26').css('background-color', 'orange');
    })
    $('#inwork26').mouseleave(function () {
        $('#inwork26').text('')
        $('#inwork26').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork27').mouseenter(function () {
        $('#inwork27').append(`${wWns}`)
        $('#inwork27').css('background-color', 'orange');
    })
    $('#inwork27').mouseleave(function () {
        $('#inwork27').text('')
        $('#inwork27').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork28').mouseenter(function () {
        $('#inwork28').append(`${wWns}`)
        $('#inwork28').css('background-color', 'orange');
    })
    $('#inwork28').mouseleave(function () {
        $('#inwork28').text('')
        $('#inwork28').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork29').mouseenter(function () {
        $('#inwork29').append(`${wWns}`)
        $('#inwork29').css('background-color', 'orange');
    })
    $('#inwork29').mouseleave(function () {
        $('#inwork29').text('')
        $('#inwork29').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork30').mouseenter(function () {
        $('#inwork30').append(`${wWns}`)
        $('#inwork30').css('background-color', 'orange');
    })
    $('#inwork30').mouseleave(function () {
        $('#inwork30').text('')
        $('#inwork30').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork31').mouseenter(function () {
        $('#inwork31').append(`${wWns}`)
        $('#inwork31').css('background-color', 'orange');
    })
    $('#inwork31').mouseleave(function () {
        $('#inwork31').text('')
        $('#inwork31').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork32').mouseenter(function () {
        $('#inwork32').append(`${wWns}`)
        $('#inwork32').css('background-color', 'orange');
    })
    $('#inwork32').mouseleave(function () {
        $('#inwork32').text('')
        $('#inwork32').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork33').mouseenter(function () {
        $('#inwork33').append(`${wWns}`)
        $('#inwork33').css('background-color', 'orange');
    })
    $('#inwork33').mouseleave(function () {
        $('#inwork33').text('')
        $('#inwork33').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork34').mouseenter(function () {
        $('#inwork34').append(`${wWns}`)
        $('#inwork34').css('background-color', 'orange');
    })
    $('#inwork34').mouseleave(function () {
        $('#inwork34').text('')
        $('#inwork34').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork35').mouseenter(function () {
        $('#inwork35').append(`${wWns}`)
        $('#inwork35').css('background-color', 'orange');
    })
    $('#inwork35').mouseleave(function () {
        $('#inwork35').text('')
        $('#inwork35').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork36').mouseenter(function () {
        $('#inwork36').append(`${wWns}`)
        $('#inwork36').css('background-color', 'orange');
    })
    $('#inwork36').mouseleave(function () {
        $('#inwork36').text('')
        $('#inwork36').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork37').mouseenter(function () {
        $('#inwork37').append(`${wWns}`)
        $('#inwork37').css('background-color', 'orange');
    })
    $('#inwork37').mouseleave(function () {
        $('#inwork37').text('')
        $('#inwork37').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork38').mouseenter(function () {
        $('#inwork38').append(`${wWns}`)
        $('#inwork38').css('background-color', 'orange');
    })
    $('#inwork38').mouseleave(function () {
        $('#inwork38').text('')
        $('#inwork38').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork39').mouseenter(function () {
        $('#inwork39').append(`${wWns}`)
        $('#inwork39').css('background-color', 'orange');
    })
    $('#inwork39').mouseleave(function () {
        $('#inwork39').text('')
        $('#inwork39').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork40').mouseenter(function () {
        $('#inwork40').append(`${wWns}`)
        $('#inwork40').css('background-color', 'orange');
    })
    $('#inwork40').mouseleave(function () {
        $('#inwork40').text('')
        $('#inwork40').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork41').mouseenter(function () {
        $('#inwork41').append(`${wWns}`)
        $('#inwork41').css('background-color', 'orange');
    })
    $('#inwork41').mouseleave(function () {
        $('#inwork41').text('')
        $('#inwork41').css('background-color', 'rgb(191, 193, 179)');
    })
    $('#inwork42').mouseenter(function () {
        $('#inwork42').append(`${wWns}`)
        $('#inwork42').css('background-color', 'orange');
    })
    $('#inwork42').mouseleave(function () {
        $('#inwork42').text('')
        $('#inwork42').css('background-color', 'rgb(191, 193, 179)');
    })

})