import setValueChange from './dd';

window.addEventListener("load",
    function (e){
       
        let vNum = document.getElementById('vNum').value;
        let vTitle = document.getElementById('vTitle').value;
        let vWriter = document.getElementById('vWriter').value;
        let vDate = document.getElementById('vDate').value;
        let vCount = document.getElementById('vCount').value;
        let vCont = document.getElementById('vCont').value;
        
        this.document.addEventListener("DOMContentLoaded",
            function (e){
                const getStorage = JSON.parse(localStorage.getItem('storage'));

                vNum = getStorage.Num;
                vTitle = getStorage.Title;
                vWriter = getStorage.Writer;
                vDate = getStorage.Date;
                vCount = getStorage.Count;
                vCont = getStorage.Cont;
                
                console.log(vNum);
                console.log(vTitle);
                console.log(vWriter);
                console.log(vDate);
                console.log(vCount);
                console.log(vCont);
            }
        )
    }
)

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