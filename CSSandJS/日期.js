var sday = document.getElementsByClassName('setday')
var sactive = document.getElementsByClassName('setactive')
var sdwork = document.getElementsByClassName('setwork')
var sylbuttom = document.getElementById('butssizeyl')
var syrbuttom = document.getElementById('butssizeyr')
var smlbuttom = document.getElementById('butssizeml')
var smrbuttom = document.getElementById('butssizemr')
var stodayb = document.getElementById('butsizetoday')
var sactiveb = document.getElementById('butsizeactive')
var sworkb = document.getElementById('butsizework')
var ipYear = document.getElementById('inputYear')
var ipMonth = document.getElementById('inputMonth')

// 設定年月日
var mdate = new Date();
var myear = mdate.getFullYear();
ipYear.innerHTML = myear;
var mmonth = mdate.getMonth();
ipMonth.innerHTML = `${mmonth + 1}月`;
var mtoday = mdate.getDate();

// 設定哪年哪月第一天星期幾
function dayStart(month, year) {
    var tempDate = new Date(year, month, 1);
    return (tempDate.getDay());
}

// 設定月天數
var normalyeard = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
];
var leapyeard = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
];
var monthName = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December']

// 設定閏年
// 公元年份非4的倍數，為365天平年。
// 公元年份為4的倍數但非100的倍數，為366天閏年。
// 公元年份為100的倍數但非400的倍數，為平年。
// 公元年份為400的倍數，為閏年。
// 是400的倍數或是4的倍數但不是100倍數為閏年
function gYearDay(year, month) {
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        return (leapyeard);
    } else {
        return (normalyeard);
    }
}

function ipDayFun() {
    var totalDay = gYearDay(mmonth, myear)[mmonth];//取得當月總天數
    var lele = totalDay.length;
    var firstDay = dayStart(mmonth, myear);//取得當月第一天星期幾

    //將天數放進日期欄
    // // firstDay前不放入
    for (i = 0; i < totalDay.length; i++) {
        sday[firstDay + i].innerHTML = totalDay[i]
    }
}
ipDayFun();

//設定年月按鈕
//月
smlbuttom.onclick = function () {
    // var myear = mdate.getFullYear();
    // ipYear.innerHTML = myear;
    // var mmonth = mdate.getMonth();
    // ipMonth.innerHTML = `${mmonth + 1}月`;
    mmonth--;
    if (mmonth < 0) {
        myear--;
        mmonth += 12;
    }
    for (i = 0; i < 42; i++) {
        sday[i].innerHTML = '';
    }
    ipDayFun();
    ipYear.innerHTML = (myear);
    ipMonth.innerHTML = `${mmonth + 1}月`;

}

smrbuttom.onclick = function () {
    mmonth++;
    if (mmonth > 11) {
        mmonth -= 12;
        myear++;      //不知為啥12~1卡一個鍵
    }
    for (i = 0; i < 42; i++) {
        sday[i].innerHTML = '';
    }
    ipDayFun();
    ipYear.innerHTML = (myear);
    ipMonth.innerHTML = `${mmonth + 1}月`;
    $('.sday').load(location.innerHTML + '.sday')

}

//年
sylbuttom.onclick = function () {
    myear -= 1;
    for (i = 0; i < 42; i++) {
        sday[i].innerHTML = '';
    }
    ipDayFun();
    ipYear.innerHTML = (myear);
    ipMonth.innerHTML = `${mmonth + 1}月`;
    $('.sday').load(location.innerHTML + '.sday')

}

syrbuttom.onclick = function () {
    myear += 1;
    for (i = 0; i < 42; i++) {
        sday[i].innerHTML = '';
    }
    ipDayFun();
    ipYear.innerHTML = (myear);
    ipMonth.innerHTML = `${mmonth + 1}月`;
    $('.sday').load(location.innerHTML + '.sday')

}

// 回到今天
butsizetoday.onclick = function () {
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
    var sday = document.getElementsByClassName('setday')
    var sactive = document.getElementsByClassName('setactive')
    var sdwork = document.getElementsByClassName('setwork')
    var sylbuttom = document.getElementById('butssizeyl')
    var syrbuttom = document.getElementById('butssizeyr')
    var smlbuttom = document.getElementById('butssizeml')
    var smrbuttom = document.getElementById('butssizemr')
    var stodayb = document.getElementById('butsizetoday')
    var sactiveb = document.getElementById('butsizeactive')
    var sworkb = document.getElementById('butsizework')
    var ipYear = document.getElementById('inputYear')
    var ipMonth = document.getElementById('inputMonth')
    
    var mdate = new Date();
    var myear = mdate.getFullYear();
    ipYear.innerHTML = myear;
    var mmonth = mdate.getMonth();
    ipMonth.innerHTML = `${mmonth + 1}月`;
    var mtoday = mdate.getDate();
    
    function dayStart(month, year) {
        var tempDate = new Date(year, month, 1);
        return (tempDate.getDay());
    }
    
    var normalyeard = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    ];
    var leapyeard = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    ];
    var monthName = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December']
    
    function gYearDay(year, month) {
        if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
            return (leapyeard);
        } else {
            return (normalyeard);
        }
    }
    
    function ipDayFun() {
        var totalDay = gYearDay(mmonth, myear)[mmonth];
        var lele = totalDay.length;
        var firstDay = dayStart(mmonth, myear);
        for (i = 0; i < 42; i++) {
            sday[i].innerHTML = '';
        }
        for (i = 0; i < totalDay.length; i++) {
            sday[firstDay + i].innerHTML = totalDay[i]
        }
    }
    ipDayFun();

    smlbuttom.onclick = function () {
        // var myear = mdate.getFullYear();
        // ipYear.innerHTML = myear;
        // var mmonth = mdate.getMonth();
        // ipMonth.innerHTML = `${mmonth + 1}月`;
        mmonth--;
        if (mmonth < 0) {
            myear--;
            mmonth += 12;
        }
        for (i = 0; i < 42; i++) {
            sday[i].innerHTML = '';
        }
        ipDayFun();
        ipYear.innerHTML = (myear);
        ipMonth.innerHTML = `${mmonth + 1}月`;

    }

    smrbuttom.onclick = function () {
        mmonth++;
        if (mmonth > 11) {
            mmonth -= 12;
            myear++;      //不知為啥12~1卡一個鍵
        }
        for (i = 0; i < 42; i++) {
            sday[i].innerHTML = '';
        }
        ipDayFun();
        ipYear.innerHTML = (myear);
        ipMonth.innerHTML = `${mmonth + 1}月`;
        $('.sday').load(location.innerHTML + '.sday')

    }

    sylbuttom.onclick = function () {
        myear -= 1;
        for (i = 0; i < 42; i++) {
            sday[i].innerHTML = '';
        }
        ipDayFun();
        ipYear.innerHTML = (myear);
        ipMonth.innerHTML = `${mmonth + 1}月`;
        $('.sday').load(location.innerHTML + '.sday')

    }

    syrbuttom.onclick = function () {
        myear += 1;
        for (i = 0; i < 42; i++) {
            sday[i].innerHTML = '';
        }
        ipDayFun();
        ipYear.innerHTML = (myear);
        ipMonth.innerHTML = `${mmonth + 1}月`;
        $('.sday').load(location.innerHTML + '.sday')

    }
}
