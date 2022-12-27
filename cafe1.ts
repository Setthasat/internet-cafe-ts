function main() : void {
    
    var time : number = 50
    var bathperhour : number = 15
    var x  = cal(time, bathperhour)
    console.log(x)
}

function cal(time : number, bathperhour : number) : number {
    var finalresult =  time * bathperhour
    return finalresult
}


main()
