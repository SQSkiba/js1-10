//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleepIn(true, false);
    document.getElementById("output").innerHTML += nextOne(true, false);
    //test third method, etc
}


//#1 write first method
function sleep_in(weekday,vacation) {
    if(!weekday||vacation) {
        return true
    } else {
        return false;
    }
}

//#2write second method
function monkey_trouble(a_smile, b_smile) {
    if (a_smile&&b_smile || !a_smile&&!b_smile){
        return true;
    } else{
        return false;
    }

}

//#3 Sting Times - third Method
function string_times (str, n) {
    var newWord = ("")
    for (var i = 0; i<n; i++) {
        newWord = newWord + str
    }
    return (newWord);
}

//4 front times - fourth method
function front_times (str, n) {
    var word = ("")
    for (var i=0; i<n; i++) {
        word= word + str.substring(0,3)
    }
   return word

}

//#5 string bits - fifth method
function string_bits (str, n) {
    var word = ("")
    for (var i=0; i<str.length; i+=2) {
        word= word + str[i]
    }
    return word

}

// #6 Caught Speeding - sixth method
function caughtSpeeding(speed, birthday){
    var noTicket = 60
    var smallTicket = 80
    if (birthday == true){
        noTicket = noTicket + 5
        smallTicket = smallTicket + 5

    }
    if (speed<noTicket){
        return 0
    }
    if(noTicket<=speed<smallTicket){
        return 1;
    }
    if(speed>smallTicket){
        return 2;

    }
}


//#7 fizzBizz - 7th method
function fizz_buzz(x) {
    if(x % 3 == 0 && x % 5 == 0) {
        return "FizzBuzz";
    }
    if(x % 3 == 0){
        return "Fizz";
    }
    if (x % 5 == 0){
        return "Buzz";
    }
    if (x % 3!= 0 && x % 5!= 0){
        return x + "!";
    }
}

//#8 teaParty - 8th method
function teaParty(tea, candy) {
    if (tea < 5 || candy < 5) {
        return 0
    }
    if (tea >= candy * 2 || candy >= tea * 2) {
        return 2
    }
    if (tea >= 5 && candy >= 5) {
        return 1
    }

//#9 blackjack
function blackjack(x,y){
    if (x>21 && y>21){
        return 0;
    }
    if (x>y && x<=21){
        return x;
    } else {
        if (y<=21){
            return y;
        } else {
            return x;
        }
    }
    if (y>x && y<=21){
        return y;
    } else {
        if (x <= 21){
            return x;
        } else {
            return y;
        }
    }
}
//#10 loneSum
    function loneSum(a,b,c){
        var sum = a+b+c
        if (a=b && a=c){
            return 0
        }
        if (a=b){
            return c
        }
        if (a=c){
            return b
        }
        if (b=c){
            return a
        }

        return sum
    }




