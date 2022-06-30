function setValueChange(){
    
    let num = 0;
    
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1));
    const day = today.getDate();
    const date = year + '.' + month + '.' + day;
    
    const count = 0;

    let title = document.getElementById('wTitle').value;
    let writer = document.getElementById('wWriter').value;
    let password = document.getElementById('wPassword').value;
    let cont = document.getElementById('wCont').value;
    
    const storage = {
        Num:num,
        Title:title,
        Writer:writer,
        Date:date,
        Count:count,
        Cont:cont,
        Password:password
    };
    
    localStorage.setItem("setStorage", JSON.stringify(storage));
}