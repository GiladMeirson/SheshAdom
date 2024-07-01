const SheshAdom=(flag)=>{
    const ph = document.getElementById('colorPH');
    const title = document.getElementById('label');
    
    const interval = setInterval(()=>{
        const color = Math.floor(Math.random()*16777215).toString(16);
        ph.style.backgroundColor = `#${color}`;
        const randomNumber = Math.floor(Math.random()*10 +1);
        title.innerText = `${randomNumber}`;
    },100);

    setTimeout(()=>{
        clearInterval(interval);
        if (flag) {
            ph.style.backgroundColor = 'red';
            title.innerText = '6';
        }

    },2500);
}


