(function()
{
    let doReplace = function(img, isTrue)
    {
        let rimg = document.createElement('span');
        rimg.textContent = ' ' + ((isTrue) ? '✅' : '❌');
        img.parentNode.appendChild(rimg);
        img.parentNode.removeChild(img);
    };
    
    console.log('Emoji Replacer for M enabled ✅');
    let images = document.getElementsByTagName('img');
    
    Array.from(images).forEach(function(img)
    {
        if (img.src.endsWith('/pix/i/tick_green_small.gif'))
        {
            doReplace(img, true);
        }
        else if (img.src.endsWith('/pix/i/cross_red_small.gif'))
        {
            doReplace(img, false);
        }
    });
})();
