const StorageLocationKey = "NominationsVinayShoppies" 

export function addNominationLocally(nomination){
    let nominations = JSON.parse(localStorage.getItem(StorageLocationKey));
    if(!nominations){
        nominations = [];
    }
    nominations.push(nomination);
    localStorage.setItem(StorageLocationKey, JSON.stringify(nominations));
}

export function RemoveNominationLocally(index){
    let nominations = JSON.parse(localStorage.getItem(StorageLocationKey));
    if(!nominations){
        nominations = [];
        return;
    }
    nominations.splice(index,1);
    localStorage.setItem(StorageLocationKey, JSON.stringify(nominations)); 
}

export function getNominationsLocally(){
    return JSON.parse(localStorage.getItem(StorageLocationKey));
}