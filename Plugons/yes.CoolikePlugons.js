/**
 * Sample Plugin for Coolike
 * 
 * Adds a button to give you 10 sugar lumps at a time.
 * 
 * Load this file and then load Coolike
 */

if (typeof CoolikePlugins !== 'object') CoolikePlugins = {};

CoolikePlugins['moreLumps'] = { // Functions don't need defined if they aren't used -- defined here for example only
    Init: () => { // Ran after Coolike inits
    },
    Loaded: () => { // Ran after Coolike is loaded but before Init() is called
    },
    Unloaded: () => { // Ran right before Coolike unload finishes - only ran when the user clicks the unload button
    },
    Actions: { // Only ran when we call them
        moreSugarLumps: ()=>{
            Game.gainLumps(10);
        },
    },
    Game: { // Ran when Coolike runs them
        UpdateMenu: (fragment) => { 
            fragment.appendChild(Coolike.Menu.subheading('Coolike: More Lumps Add-on'));
            fragment.appendChild(Coolike.Menu.actionButton('giveSugarLump','Give Sugar Lump','Gives you a sugar limp.', Coolike.Plugins['moreLumps'].Actions.moreSugarLumps));
        },
    },
};

/* cSpell:ignore Coolike */
