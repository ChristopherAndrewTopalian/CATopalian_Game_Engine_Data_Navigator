// makePlayer.js

function makePlayer()
{
    let player = ce("div");
    player.id = "thePlayer";
    player.style.position = 'absolute';
    player.style.left = ourPlayer.x + 'px';
    player.style.top = ourPlayer.y + 'px';
    player.style.backgroundSize = 'cover';
    //player.style.backgroundPosition = 'center center';
    //player.style.backgroundRepeat = 'no-repeat';
    //player.style.objectFit = 'cover';
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

