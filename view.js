let vNum = document.querySelector('#vNum');
let vTitle = document.querySelector('#vTitle');
let vWriter = document.querySelector('#vWriter');
let vDate = document.querySelector('#vDate');
let vCount = document.querySelector('#vCount');
let vCont = document.querySelector('#vCont');

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