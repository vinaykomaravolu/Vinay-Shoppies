export function addNominationLocally(nomination){
    let nominations = JSON.parse(localStorage.getItem("nominations"));
    if(!nominations){
        nominations = [];
    }
    nominations.push(nomination);
    localStorage.setItem('nominations', JSON.stringify(nominations));
}

export function RemoveNominationLocally(index){
    let nominations = JSON.parse(localStorage.getItem("nominations"));
    if(!nominations){
        nominations = [];
        return;
    }
    nominations.splice(index,1);
    localStorage.setItem('nominations', JSON.stringify(nominations)); 
}

export function getNominationsLocally(){
    return JSON.parse(localStorage.getItem("nominations"));
}