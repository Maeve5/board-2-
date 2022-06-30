let eTitle = document.querySelector('#eTitle');
let eWriter = document.querySelector('#eWriter');
let ePassword = document.querySelector('#ePassword');
let eCont = document.querySelector('#eCont');

const editStorage = JSON.parse(localStorage.getItem('setStorage'));

let v_Num = editStorage.Num;
let v_Title = editStorage.Title;
let v_Writer = editStorage.Writer;
let v_Date = editStorage.Date;
let v_Count = editStorage.Count;
let v_Cont = editStorage.Cont;

vNum.textContent = v_Num;
vTitle.textContent = v_Title;
vWriter.textContent = v_Writer;
vDate.textContent = v_Date;
vCount.textContent = v_Count;
vCont.textContent = v_Cont;











const editKey = document.getElementById();
const editValue = document.getElementById().value;

const editData = JSON.parse(localStorage.getItem('setStorage'));
console.log('before', editData);

editData.editKey = editValue;
console.log('after', editData);

localStorage.setItem('setStorage',JSON.stringify(editData));