


// window.addEventListener("load",
    // function (e){
       
        let vNum = document.querySelector('#vNum');
        let vTitle = document.querySelector('#vTitle');
        let vWriter = document.querySelector('#vWriter');
        let vDate = document.querySelector('#vDate');
        let vCount = document.querySelector('#vCount');
        let vCont = document.querySelector('#vCont');
        
        // this.document.addEventListener("DOMContentLoaded",
            // function (e){
        const getStorage = JSON.parse(localStorage.getItem('setStorage'));


        let v_Num = getStorage.Num;
        let v_Title = getStorage.Title;
        let v_Writer = getStorage.Writer;
        let v_Date = getStorage.Date;
        let v_Count = getStorage.Count;
        let v_Cont = getStorage.Cont;
        
        vNum.textContent = v_Num;
        vTitle.textContent = v_Title;
        vWriter.textContent = v_Writer;
        vDate.textContent = v_Date;
        vCount.textContent = v_Count;
        vCont.textContent = v_Cont;

            // }
        // )
    // }
// )

// function setValue(){
//     let vNum = document.querySelector("#vNum");
//     let vTitle = document.querySelector("#vTitle");
//     let vWriter = document.querySelector("#vWriter");
//     let vDate = document.querySelector("#vDate");
//     let vCount = document.querySelector("#vCount");
//     let vCont = document.querySelector("#vCont");

//     setValueChange();

//     const getStorage = JSON.parse(localStorage.getItem('storage'));

//     const num = getStorage[Object.keys(getStorage)[0]];
//     const title = getStorage[Object.keys(getStorage)[1]];
//     const writer = getStorage[Object.keys(getStorage)[2]];
//     const date = getStorage[Object.keys(getStorage)[3]];
//     const count = getStorage[Object.keys(getStorage)[4]];
//     const cont = getStorage[Object.keys(getStorage)[5]];
    
//     vNum.textContent = num;
//     vTitle.textContent = title;
//     vWriter.textContent = writer;
//     vDate.textContent = date;
//     vCount.textContent = count;
//     vCont.textContent = cont;

// }

    // const addData = () => {
    //     const notice = JSON.parse(localStorage.getItem("storage")) || [];
    //     notice.push(storage)
    //     localStorage.setItem("storage", JSON.stringify(notice));
    // }


    // 수정코드

    // const editKey = document.getElementById();
    // const editValue = document.getElementById().value;

    // const editData = JSON.parse(localStorage.getItem('storage'));
    // console.log('before', editData);

    // editData.editKey = editValue;
    // console.log('after', editData);

    // localStorage.setItem('storage',JSON.stringify(editData));