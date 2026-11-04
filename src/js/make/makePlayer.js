// makePlayer.js

function makePlayer()
{
    let player = ce("div");
    player.id = "thePlayer";
    player.style.position = 'absolute';
    player.style.left = ourPlayer.x + 'px';
    player.style.top = ourPlayer.y + 'px';

    // Give the div an explicit size so you control the scale
    player.style.width = '150px'; 
    player.style.height = '300px'; 

    // Change from 'cover' to 'contain' to prevent clipping
    player.style.backgroundSize = 'contain'; 
    player.style.backgroundRepeat = 'no-repeat';
    player.style.backgroundPosition = 'center center';
    
    // Remove objectFit if you are using background images instead of <img> tags
    // player.style.objectFit = 'cover'; 

    player.style.zIndex = 2;
    player.ondblclick = function()
    {
        clickSound();
        menuPlayer();
    };
    player.onclick = function()
    {
        keyboardControlOn();
    };
    ba(player);

    makeElementDraggable(player);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

