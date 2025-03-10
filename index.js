function saturdayFun(activity="roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
function mondayWork(act = "go to the office"){
    return (`This Monday, I will ${act}.`)
}
function wrapAdjective(wrapper="*"){
    return function(adjective = "hard worker"){
        return (`You are ${wrapper}${adjective}${wrapper}!`)
    }
    

}