
function initSelect(options={}){
    let elem = document.querySelectorAll('select');

    //Would configure options at a later date
    let instance = M.FormSelect.init(elem, options);

    console.log("Select fields initialised")
}


