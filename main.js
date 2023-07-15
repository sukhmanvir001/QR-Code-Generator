const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const generateQrCode = (e) =>{
    e.preventDefault();
    clearUI();

    

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url , size);

    if(url == ""){
        alert("Please enter the qr code!")
    }else{
        document.getElementById('codeheading').c 
        generateCode(url , size);

        setTimeout(() => {
            const saveUrl = qr.querySelector('img').src;
            createSaveBtn(saveUrl);
        }, 50);
    }
}

const generateCode =(url , size) =>{
    const qrcode = new QRCode('qrcode' , {
        text:url,
        width:size,
        height:size,
    })
}
form.addEventListener('submit' , generateQrCode);

const clearUI=()=>{
    qr.innerHTML = '';
}

const createSaveBtn = (saveUrl)=>{
    const link = document.createElement('a');
    link.id = 'save-link';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save QR Code';
    document.getElementById('generated').appendChild(link);
}