





var value2= document.getElementById('checking')
var linkGenerator=''
var linkGenerator2=''
$('#check').click (function checkJob(){
  
    for (var i=0;i<jobs.length;i++){
if (value2.value==jobs[i].jobTitle){
    document.getElementById('intro').innerText=jobs[i].jobDiscription //this function will loop on jobs array and get access to the elements of the array which are object and will you spesific keys to access spesific values to display it or to compare it .
   if(jobRoles[i].role==value2.value){
    $('#one').text(jobRoles[i].requirements[0])
    $('#two').text(jobRoles[i].requirements[1])
    $('#three').text(jobRoles[i].requirements[2])
    $('#four').text(jobRoles[i].requirements[3])
    $('#five').text(jobRoles[i].requirements[4])

   }
   if (jobs[i].jobTitle==value2.value){
    $('#salary').text("According to paylab.com The salary range of employees working in Tunisia is, by default, in the range of 774.00 TND (low salaries, employees actual wages may be even lower) to 2,929.00 TND (high salaries, actual salaries can be even higher)"+
    " and the average salary of "+ jobs[i].jobTitle+' is ' +jobs[i].averageSalary + " TND." )
  

   generateLink()
   }

}

    }
})

function generateLink(){                             //this fuction will generate google jobs links accourding to the selector
    for (var i=0;i<jobs.length;i++){
    if (jobs[i].jobTitle==value2.value){
    linkGenerator=(jobs[i].jobTitle).split(" ")                                           /* this is yassin's work*/
    linkGenerator=linkGenerator[0].concat('%20',linkGenerator[1])
  linkGenerator2 ="https://careers.google.com/jobs/results/?distance=50&q="+linkGenerator
}
}return $("#link").attr("href",linkGenerator2) 

}






function makeFichePay(salaireBrut){                            /* this is tarek's work*/
    var fiche={}
    fiche.salaireBrut=salaireBrut,
    fiche.retenueCNSS=0,
    fiche.salaireImposable=0,
    fiche.contributionSocialeSolidaire=0,
    fiche.salairNet=0
    fiche.calculretenueCNSS=calculretenueCNSS
    fiche.calculsalaireImposable=calculsalaireImposable
    fiche.calculcontributionSocialeSolidaire=calculcontributionSocialeSolidaire
    fiche.calculsalaireNet=calculsalaireNet
                                                                                            /* this is tarek's work*/
    return fiche
}
var calculretenueCNSS=function(){
    return this.retenueCNSS=(this.salaireBrut*(0.0918)).toFixed(3)
}
var calculsalaireImposable=function(){
    return this.salaireImposable=(this.salaireBrut-this.retenueCNSS).toFixed(3)
}
var calculcontributionSocialeSolidaire=function(){
    return this.contributionSocialeSolidaire=(this.salaireBrut*0.01).toFixed(3)
}
var calculsalaireNet=function(){
    return this.salairNet=(this.salaireImposable-this.contributionSocialeSolidaire).toFixed(3)          /* this is tarek's work*/
}


function saleBrutCalculator(salaryPerDay,daysWorked,extraHours,sundayWorks){                  /* this is tarek's work*/
    return{
        salaryPerDay:salaryPerDay,
        daysWorked:daysWorked,
        extraHours:extraHours,
        sundayWorks:sundayWorks,
        calculateSalaryperMonth:function(){
            return salaryperMonth=(daysWorked-extraHours)*salaryPerDay + (extraHours*salaryPerDay)*1.5 + sundayWorks*25
        }
    }
}
var value= document.getElementById('selected')


$(document).ready(function(){
$('#calculate').click(function(){
    $('.summary').animate({
        "top":"500px",
        "left": "800px",
    })
    $('.result').show(2000)
    $("#salairB").empty()
    $("#cnss").empty()
    $("#sImpo").empty()                                                          /* this is tarek's work*/
    $("#cssolidarity").empty()
    $("#sNet").empty()
    var fiche1=makeFichePay(+$('#brutsale').val())
    fiche1.calculretenueCNSS()
    fiche1.calculsalaireImposable()
    fiche1.calculcontributionSocialeSolidaire()
    fiche1.calculsalaireNet()
    console.log(fiche1)
    $("#salairB").append(+$('#brutsale').val()+"DT")
    $("#cnss").append(fiche1.retenueCNSS+"DT")
    $("#sImpo").append(fiche1.salaireImposable+"DT")
    $("#cssolidarity").append(fiche1.contributionSocialeSolidaire+"DT")       /* this is tarek's work*/
    $("#sNet").append(fiche1.salairNet+"DT")

    for(var i=0;i<jobs.length;i++){
        if(value.value==jobs[i].jobTitle){
            if(+$('input').val()<jobs[i].averageSalary){
                document.getElementById('resi').innerText="According to paylab.com your gross income is below average for "+value.value+' posision'
            }else {document.getElementById('resi').innerText="According to paylab.com your gross income is above average for "+value.value+' posision' }        /* this is yassin's work*/
        }
    }
})

$('#result').click(function(){
    var sal1=saleBrutCalculator(+$('#salaryPerDay').val(),+$('#daysWorked').val(),+$('#extraHours').val(),+$('#sundayWorks').val())    /* this is tarek's work*/
    $('.resultSalBrut').empty()
    $('.resultSalBrut').append(" "+sal1.calculateSalaryperMonth()+"DT")
})


})