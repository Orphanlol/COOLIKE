if (typeof  Coolike !== 'undefined') {
    if ( Coolike === null) {
        delete  Coolike;
    } else throw new Error(' Coolike already loaded.');
}
var  Coolike = {
    OG: {}, // Original Game Data
    Game: { // Our overrides
        UpdateMenu: () => {
             Coolike.OG.UpdateMenu();
            if (Game.onMenu == 'prefs') {
                let fragment = document.createDocumentFragment();
                fragment.appendChild( Coolike.Menu.heading(' Coolike Toggleables'));
                fragment.appendChild( Coolike.Menu.subheading('Auto Clickers'));
                fragment.appendChild( Coolike.Menu.toggleButton('autoClicker','Auto Click Big Cookie','Clicks the big cookie for you.'));
                fragment.appendChild( Coolike.Menu.toggleButton('autoGolden','Auto Click Golden Cookies','Clicks any golden cookies for you.'));
                fragment.appendChild( Coolike.Menu.toggleButton('autoReindeer','Auto Click Reindeer','Clicks on reindeer for you'));
                fragment.appendChild( Coolike.Menu.toggleButton('autoNews','Auto Click News','Clicks on the news ticker for you.'));
                fragment.appendChild( Coolike.Menu.subheading('Golden Cookies'));
                fragment.appendChild( Coolike.Menu.toggleButton('blockWrath','Block Wrath Cookies','Prevents wrath cookies from spawning.'));
                fragment.appendChild( Coolike.Menu.subheading('Infinite Stuff'));
                fragment.appendChild( Coolike.Menu.toggleButton('infiniteCookies','Infinite Cookies','Causes your cookies to constantly regenerate.'));
                fragment.appendChild( Coolike.Menu.toggleButton('infiniteMagic','Infinite Magic','Causes your Grimoire magic to recharge almost instantly'));
                fragment.appendChild( Coolike.Menu.toggleButton('infiniteSwaps','Infinite Swaps','Causes your Pantheon swaps to regenerate almost instantly.'));
                fragment.appendChild( Coolike.Menu.subheading('Mini-game Enhancers'));
                fragment.appendChild( Coolike.Menu.toggleButton('miracleSpells','Miracle Spell™','Grimoire spells will never fail.'));
                fragment.appendChild( Coolike.Menu.toggleButton('immortalPlants','Make Plants Immortal','Makes it so plants never wither. Does not affect weeds or fungi.'));
                fragment.appendChild( Coolike.Menu.toggleButton('neverWeeds','Never Weed™','Makes it so weeds never spawn on their own. You can still plant them and they still may spread.'));
                fragment.appendChild( Coolike.Menu.toggleButton('allGodsActive','Pantheon \'R Us','All Pantheon gods except for Cyclius will be active in slot one.'));
                fragment.appendChild( Coolike.Menu.toggleButton('allGodsSlotOne','Power Of The Gods','All Pantheon gods will behave as if they are in slot 1 regardless of which slot they are in.'));
                fragment.appendChild( Coolike.Menu.heading(' Coolike Actions'));
                fragment.appendChild( Coolike.Menu.subheading('Spawning'));
                fragment.appendChild( Coolike.Menu.actionButton('spawnGolden','Spawn a Golden Cookie','Spawns a golden cookie.',  Coolike.Actions.spawnGolden));
                fragment.appendChild( Coolike.Menu.actionButton('spawnGoldenFrenzy','Spawn a Frenzy Cookie','Spawns a golden cookie that will cause a frenzy.',  Coolike.Actions.spawnGolden));
                fragment.appendChild( Coolike.Menu.actionButton('spawnGoldenDragonflight','Spawn a Dragonflight Cookie','Spawns a golden cookie that will cause a dragonflight.',  Coolike.Actions.spawnGoldenDragonflight));
                fragment.appendChild( Coolike.Menu.actionButton('giveSugarLump','Give Sugar Lump','Gives you a sugar limp.',  Coolike.Actions.giveSugarLump));
                fragment.appendChild( Coolike.Menu.actionButton('giveCookies','Give Cookies','Gives you the most cookies you can have without getting the cheated cookies achievement.',  Coolike.Actions.giveCookies));
                fragment.appendChild( Coolike.Menu.subheading('Mini-games'));
                fragment.appendChild( Coolike.Menu.actionButton('refillMagic','Refill Magic','Refill all of your Grimoire\'s magic.',  Coolike.Actions.refillMagic));
                fragment.appendChild( Coolike.Menu.actionButton('refillSwaps','Refill Swaps','Refill all of your Pantheon\'s swaps',  Coolike.Actions.refillSwaps));
                fragment.appendChild( Coolike.Menu.subheading('Unlock Things'));
                fragment.appendChild( Coolike.Menu.actionButton('unlockAllSeeds','Unlock Plant Seeds','Unlocks all the plant seeds for your Garden. Does not unlock weeds or fungi.',  Coolike.Actions.unlockAllSeeds));
                fragment.appendChild( Coolike.Menu.actionButton('unlockAllWeedFungusSeeds','Unlock Weed and Fungi Seeds','Unlocks all the weed and fungus seeds for the Garden.',  Coolike.Actions.unlockAllWeedFungusSeeds));
                fragment.appendChild( Coolike.Menu.actionButton('lockAllSeeds','Lock All Seeds','Locks all the seeds for the Garden except for the starting seed.',  Coolike.Actions.lockAllSeeds));
                fragment.appendChild( Coolike.Menu.subheading('Misc'));
                fragment.appendChild( Coolike.Menu.actionButton('removeCheatedCookies','Remove Cheat Achievement','Remove \'Cheated cookies taste awful\' achievement',  Coolike.Actions.removeCheatedCookies));

                // Unload  Coolike button. Doesn't work if you loaded other add-ons first. We check only for Cookie Monster.
                if (typeof CM === 'undefined' ||  Coolike.cookieMonsterLoaded) fragment.appendChild( Coolike.Menu.actionButton('unload Coolike','Unload  Coolike','Unloads  Coolike and disabled all of it\'s features.',  Coolike.Actions.unload Coolike));

                 Coolike.PluginHooks.UpdateMenu(fragment);
        
                l('menu').childNodes[2].insertBefore(fragment, l('menu').childNodes[2].childNodes[l('menu').childNodes[2].childNodes.length - 1]);
            }
        },
    },
    Actions: { // Our action library
        spawnGolden: () => {
            Game.shimmerTypes.golden.time = Game.shimmerTypes.golden.maxTime;
        },
        spawnGoldenFrenzy: ()=> Coolike.Actions.spawnGoldenFixed('frenzy'),
        spawnGoldenDragonflight: ()=> Coolike.Actions.spawnGoldenFixed('dragonflight'),
        spawnGoldenFixed: (type) => {
            let newShimmer = new Game.shimmer('golden',{noWrath:true});
            newShimmer.dur = 10000;
            newShimmer.life = Math.ceil(Game.fps*newShimmer.dur);
            newShimmer.force = type;
            newShimmer.sizeMult = 2;
            return newShimmer;
        },
        removeCheatedCookies: ()=>Game.RemoveAchiev('Cheated cookies taste awful'),
        refillMagic: ()=>{
            if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
        },
        refillSwaps: ()=>{
            if (Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods) {
                Game.Objects['Temple'].minigame.swaps=3;
                Game.Objects['Temple'].minigame.swapT=Date.now();
                Game.Objects['Temple'].minigame.lastSwapT=0;
            }
        },
        giveSugarLump: ()=>{
            Game.gainLumps(1);
        },
        giveCookies: ()=>{
            Game.cookies = Game.cookiesEarned;
        },
        unlockAllSeeds: ()=>{
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) return;
                    if (plant.weed || plant.fungus) return;
                    Game.Objects['Farm'].minigame.unlockSeed(plant);
                });
            }
        },
        unlockAllWeedFungusSeeds: ()=>{
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) return;
                    if (!plant.weed && !plant.fungus) return;
                    Game.Objects['Farm'].minigame.unlockSeed(plant);
                });
            }
        },
        lockAllSeeds: ()=>{
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) Game.Objects['Farm'].minigame.lockSeed(plant);
                });
                Game.Objects['Farm'].minigame.unlockSeed(Game.Objects['Farm'].minigame.plants['bakerWheat']);
            }
        },
        unload Coolike: ()=>{
            Object.keys( Coolike.ticks).forEach((tickThis) => {
                let tick =  Coolike.ticks[tickThis];
                if (tick.intervalId) {
                    clearInterval(tick.intervalId);
                    tick.intervalId = 0;
                }
            });
             Coolike.Liberate.Game();
             Coolike.PluginHooks.UnloadPlugins();
            Game.UpdateMenu();
            setTimeout(() =>  Coolike = null, 100);
        },
    },
    ConfigDefaults: { // The default value for the configs
        'autoClicker': false,
        'autoGolden': false,
        'autoReindeer': false,
        'autoNews': false,
        'infiniteCookies': false,
        'infiniteMagic': false,
        'infiniteSwaps': false,
        'blockWrath': false,
        'immortalPlants': false,
        'neverWeeds': false,
        'miracleSpells': false,
        'allGodsActive': false,
        'allGodsSlotOne': false,
    },
    Config: {}, // User settings
    Init: () => { // Initialize the add-on.
        if (!Game || !Game.version || !Game.updateLog) {
            alert('The game isn\'t loaded yet or this isn\'t the game.');
            return;
        }
         Coolike.Hijack.Game();
         Coolike.loadConfig();
         Coolike.initTicks();
        Game.Win('Third-party');
        if (typeof CM === 'object' && typeof Queue !== 'undefined' && typeof jscolor !== 'undefined')  Coolike.cookieMonsterLoaded = true;
         Coolike.PluginHooks.Init();
    },
    cookieMonsterLoaded: false,
    Menu: {
        toggleButton: (configParam, text, description) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            if (! Coolike.getConfig(configParam)) a.className = 'option off';
            else a.className = 'option';
            a.id = ` Coolike-${configParam}`;
            a.onclick = ()=> Coolike.toggleConfig(configParam);
            a.textContent = text;
            label.textContent = description;
            div.className = 'listing';
            div.appendChild(a);
            div.appendChild(label);
            return div;
        },
        actionButton: (configParam, text, description, action) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            a.className = 'option';
            a.id = ` Coolike-${configParam}`;
            a.onclick = action;
            a.textContent = text;
            label.textContent = description;
            div.className = 'listing';
            div.appendChild(a);
            div.appendChild(label);
            return div;
        },
        heading: (text) => {
            let heading = document.createElement('div');
            heading.className = 'title';
            heading.textContent = text;
            return heading;
        },
        subheading: (text) => {
            let subheading =  Coolike.Menu.heading(text);
            subheading.style.fontSize = '17px';
            return subheading;
        },
    },
    saveConfig: () => {
        localStorage.setItem(' Coolike', JSON.stringify( Coolike.Config));
    },
    loadConfig: () => {
        let config = localStorage.getItem(' Coolike');
        if (config) {
            config = JSON.parse(config);
            Object.keys(config).forEach((key) => {
                 Coolike.setConfig(key, config[key]);
            });
        }
    },
    getConfig: (configParam) => {
        if (typeof  Coolike.Config[configParam] === 'undefined')
            return  Coolike.ConfigDefaults[configParam];
        else return  Coolike.Config[configParam];
    },
    setConfig: (configParam, configValue) => {
        if (configValue ===  Coolike.ConfigDefaults[configParam])
            delete  Coolike.Config[configParam];
        else  Coolike.Config[configParam] = configValue;
         Coolike.saveConfig();
        return  Coolike.getConfig(configParam);
    },
    toggleConfig: (configParam) => {
        let val =  Coolike.setConfig(configParam, ! Coolike.getConfig(configParam));
         Coolike.updateMenuView(configParam);
        return val;
    },
    updateMenuView: (configParam) => {
        if (! Coolike.getConfig(configParam))
            l(` Coolike-${configParam}`).className = 'option off';
        else
            l(` Coolike-${configParam}`).className = 'option';
    },
    Liberate: {
        Game: () => {
            if ( Coolike.OG.UpdateMenu) Game.UpdateMenu =  Coolike.OG.UpdateMenu;
            if ( Coolike.OG.shimmerPrototypeInit) Game.shimmer.prototype.init = function() {
                Game.shimmerTypes[this.type].initFunc(this);
            };
            if (Game.hasGod)  Coolike.Liberate.hasGod();
             Coolike.Liberate.miniGames();
        },
        miniGames: () => {
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants && Game.Objects['Farm'].minigame.soils) {
                if ( Coolike.OG.gardenPlantsMortality) Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (!plant.weed && !plant.fungus) Object.defineProperty(plant, 'immortal', {value: Coolike.OG.gardenPlantsMortality[plantName],configurable: true});
                });
        
                if ( Coolike.OG.gardenSoilWeed) Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                    let soil = Game.Objects['Farm'].minigame.soils[soilName];
                    Object.defineProperty(soil, 'weedMult', {value: Coolike.OG.gardenSoilWeed[soilName],configurable: true});
                });
            }
            if(Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.getFailChance) {
                if ( Coolike.OG.grimoireFailChance) Game.Objects['Wizard tower'].minigame.getFailChance =  Coolike.OG.grimoireFailChance;
            }
        },
        hasGod: () => {
            if(Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods &&  Coolike.OG.hasGod && Game.hasGod) Game.hasGod =  Coolike.OG.hasGod;
            else delete Game.hasGod;
        },
    },
    Hijack: {
        Game: () => {
            if (! Coolike.OG.UpdateMenu) {
                 Coolike.OG.UpdateMenu = Game.UpdateMenu;
                Game.UpdateMenu =  Coolike.Game.UpdateMenu;
            }
            if (! Coolike.OG.shimmerPrototypeInit) {
                 Coolike.OG.shimmerPrototypeInit = true;
                Game.shimmer.prototype.init = function() {
                    if ( Coolike.getConfig('blockWrath')) {
                        this.forceObj = {'noWrath':true};
                        Game.shimmerTypes[this.type].initFunc(this);
                    } else {
                        Game.shimmerTypes[this.type].initFunc(this);
                    }
                }
            }
            if (! Coolike.OG.hasGod)  Coolike.Hijack.hasGod();
        
             Coolike.Hijack.miniGames();
        },
        miniGames: () => {
            if (! Coolike) return;
            retry = false;
        
            if(!Game.Objects['Farm'].minigameLoaded || !Game.Objects['Farm'].minigame.plants || !Game.Objects['Farm'].minigame.soils) {
                retry = true;
            } else {
                if (! Coolike.OG.gardenPlantsMortality) {
                     Coolike.OG.gardenPlantsMortality = {};
                    Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                        let plant = Game.Objects['Farm'].minigame.plants[plantName];
                        if (!plant.weed && !plant.fungus) {
                             Coolike.OG.gardenPlantsMortality[plantName] = plant.immortal;
                            Object.defineProperty(plant, 'immortal', {get:()=>{return ( Coolike.getConfig('immortalPlants')?true: Coolike.OG.gardenPlantsMortality[plantName])},configurable: true});
                        }
                    });
                }
        
                if (! Coolike.OG.gardenSoilWeed) {
                     Coolike.OG.gardenSoilWeed = {};
                    Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                        let soil = Game.Objects['Farm'].minigame.soils[soilName];
                         Coolike.OG.gardenSoilWeed[soilName] = soil.weedMult;
                        Object.defineProperty(soil, 'weedMult',{get:()=>{return ( Coolike.getConfig('neverWeeds')?0: Coolike.OG.gardenSoilWeed[soilName])},configurable: true});
                    });
                }
            }
        
            if(!Game.Objects['Wizard tower'].minigameLoaded || !Game.Objects['Wizard tower'].minigame.getFailChance) {
                retry = true;
            } else {
                if (! Coolike.OG.grimoireFailChance) {
                     Coolike.OG.grimoireFailChance = Game.Objects['Wizard tower'].minigame.getFailChance;
                    Game.Objects['Wizard tower'].minigame.getFailChance = (spell)=>( Coolike.getConfig('miracleSpells')?0: Coolike.OG.grimoireFailChance(spell));
                }
            }
        
            if (retry) setTimeout( Coolike.Hijack.miniGames, 1000);
        },
        hasGod: () => {
            if (! Coolike) return;
            if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) {
                setTimeout( Coolike.Hijack.hasGod, 1000); // We keep running this until we get the real Game.hasGod()
            } else if (! Coolike.OG.hasGod && Game.hasGod) {
                 Coolike.OG.hasGod = Game.hasGod;
            }
            Game.hasGod = function(what) {
                if ( Coolike.getConfig('allGodsActive')) {
                    if (['ages'].includes(what)) return false; // Add gods to this if you want to skip them
                    return 1;
                } else if ( Coolike.getConfig('allGodsSlotOne')) {
                    if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return false; // Don't run if minigame isn't loaded (errors otherwise)
                    let god = Game.Objects['Temple'].minigame.gods[what];
                    for (let i=0;i<3;i++)
                        if (Game.Objects['Temple'].minigame.slot[i]==god.id) return 1;
                    return false;
                } else {
                    if ( Coolike.OG.hasGod) return  Coolike.OG.hasGod(what);
                    else return false;
                }
            }
        },
    },
    initTicks: () => {
        Object.keys( Coolike.ticks).forEach((tickThis) => {
            let tick =  Coolike.ticks[tickThis];
            if (!tick.intervalId) tick.intervalId = setInterval(tick.onTick, tick.rate);
        });
    },
    ticks: {
        'autoClicker': {
            'intervalId': null,
            'rate': 50,
            'onTick': ()=>{
                if (! Coolike.getConfig('autoClicker')) return;
                Game.ClickCookie();
            },
        },
        'autoGolden': {
            'intervalId': null,
            'rate': 500,
            'onTick': ()=>{
                if (! Coolike.getConfig('autoGolden')) return;
                Game.shimmers.forEach(function(shimmer) {
                    if (shimmer.type == "golden") { shimmer.pop() }
                })
            },
        },
        'autoReindeer': {
            'intervalId': null,
            'rate': 500,
            'onTick': ()=>{
                if (! Coolike.getConfig('autoReindeer')) return;
                Game.shimmers.forEach(function(shimmer) {
                    if (shimmer.type == 'reindeer') { shimmer.pop() }
                })
            },
        },
        'autoNews': {
            'intervalId': null,
            'rate': 3000,
            'onTick': ()=>{
                if (! Coolike.getConfig('autoNews')) return;
                if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') Game.tickerL.click();
            },
        },
        'infiniteCookies': {
            'intervalId': null,
            'rate': 100,
            'onTick': ()=>{
                if (! Coolike.getConfig('infiniteCookies')) return;
                Game.cookies = Game.cookiesEarned;
            },
        },
        'infiniteMagic': {
            'intervalId': null,
            'rate': 1000,
            'onTick': ()=>{
                if (! Coolike.getConfig('infiniteMagic')) return;
                if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                    Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
            },
        },
        'infiniteSwaps': {
            'intervalId': null,
            'rate': 1000,
            'onTick': ()=>{
                if (! Coolike.getConfig('infiniteSwaps')) return;
                if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return;
                Game.Objects['Temple'].minigame.swaps=3;
                Game.Objects['Temple'].minigame.swapT=Date.now();
                Game.Objects['Temple'].minigame.lastSwapT=0;
            },
        },
    },
    PluginHooks: {
        Init: () => {
            Object.keys( Coolike.Plugins).forEach((key) => {
                let plugin =  Coolike.Plugins[key];
                if (typeof plugin['Init'] === 'function') plugin['Init']();
            });
        },
        UnloadPlugins: () => {
            Object.keys( Coolike.Plugins).forEach((key) => {
                let plugin =  Coolike.Plugins[key];
                if (typeof plugin['Unload'] === 'function') plugin['Unload']();
            });
        },
        UpdateMenu: (fragment) => {
            Object.keys( Coolike.Plugins).forEach((key) => {
                let plugin =  Coolike.Plugins[key];
                if (typeof plugin['Game'] === 'object' && typeof plugin['Game']['UpdateMenu'] === 'function') plugin['Game']['UpdateMenu'](fragment);
            });
        },
    },
    Plugins: {}, // Plugins
};

// You can setup ` CoolikePlugins` (object) with your custom plugins before loading this script
if (typeof  CoolikePlugins === 'object') {
    Object.keys( CoolikePlugins).forEach((key) => {
        let plugin =  CoolikePlugins[key];
        if (typeof plugin === 'object') {
             Coolike.Plugins[key] = plugin;
            if (typeof  Coolike.Plugins[key]['Loaded'] === 'function')  Coolike.Plugins[key].Loaded();
        } else if (typeof plugin === 'function') {
             Coolike.Plugins[key] = plugin;
             Coolike.Plugins[key]();
        }
    });
}

// Alternatively, you can set  CoolikeInit to false to prevent the Init and set up your plugins after loading the script, remember to call ` Coolike.Init()` afterwards.
if (typeof  CoolikeInit === 'undefined' ||  CoolikeInit)  Coolike.Init();

/* cSpell:ignore  Coolike, Toggleables, prefs, minigame, Mult, grimoire, grimoire's, grimoire\'s, Cyclius, dragonflight, Achiev, jscolor */
