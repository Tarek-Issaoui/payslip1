function makeFichePay(salaireBrut){
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
    return fiche
}
var calculretenueCNSS=function(){
    return this.retenueCNSS=this.salaireBrut*(0.0918).toFixed(3)
}
var calculsalaireImposable=function(){
    return this.salaireImposable=this.salaireBrut-this.retenueCNSS
}
var calculcontributionSocialeSolidaire=function(){
    return this.contributionSocialeSolidaire=this.salaireBrut*0.01
}
var calculsalaireNet=function(){
    return this.salairNet=this.salaireImposable-this.contributionSocialeSolidaire
}