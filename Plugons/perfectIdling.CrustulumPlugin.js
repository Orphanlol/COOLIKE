/**
 * Perfect Idling Plugin for Coolike
 * 
 * Adds buttons to toggle the Perfect idling achievement.
 * 
 * Load this file and then load Coolike
 */

if (typeof CoolikePlugins !== 'object') CoolikePlugins = {};

CoolikePlugins['perfectIdling'] = {
    Actions: { // Only ran when we call them
        perfectIdlingActivate: ()=>{
            let upgrade = Game.Upgrades['Perfect idling'];
            upgrade.unlocked = 1;
            upgrade.bought = 1;
            Game.upgradesToRebuild = 1;
            Coolike.Game.UpdateMenu();
        },
        perfectIdlingDeactivate: ()=>{
            let upgrade = Game.Upgrades['Perfect idling'];
            upgrade.unlocked = 0;
            upgrade.bought = 0;
            Game.upgradesToRebuild = 1;
            Coolike.Game.UpdateMenu();
        },
    },
    Game: { // Ran when Coolike runs them
        UpdateMenu: (fragment) => { 
            fragment.appendChild(Coolike.Menu.subheading('Coolike: Perfect Idling'));
            if (Game.Has('Perfect idling')) fragment.appendChild(Coolike.Menu.actionButton('perfectIdlingDeactivate','Deactivate Perfect Idling','Toggles perfect idling which makes cookies generate while the game is closed.', Coolike.Plugins['perfectIdling'].Actions.perfectIdlingDeactivate));
            else fragment.appendChild(Coolike.Menu.actionButton('perfectIdlingActivate','Activate Perfect Idling','Toggles perfect idling which makes cookies generate while the game is closed.', Coolike.Plugins['perfectIdling'].Actions.perfectIdlingActivate));
        },
    },
};

/* cSpell:ignore Coolike, Achiev */
