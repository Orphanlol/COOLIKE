if (typeof  ballhaxsomgyes !== 'undefined') {
    if ( ballhaxsomgyes === null) {
        delete  ballhaxsomgyes;
    } else throw new Error(' ballhaxsomgyes already loaded.');
}
var  ballhaxsomgyes = {
    OG: {}, // Original Game Data
    Game: { // Our overrides
        UpdateMenu: () => {
             ballhaxsomgyes.OG.UpdateMenu();
            if (Game.onMenu == 'prefs') {
                let fragment = document.createDocumentFragment();
                fragment.appendChild( ballhaxsomgyes.Menu.heading(' ballhaxsomgyes Toggleables'));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Auto Clickers'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('autoClicker','Auto Click Big Cookie','Clicks the big cookie for you.'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('autoGolden','Auto Click Golden Cookies','Clicks any golden cookies for you.'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('autoReindeer','Auto Click Reindeer','Clicks on reindeer for you'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('autoNews','Auto Click News','Clicks on the news ticker for you.'));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Golden Cookies'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('blockWrath','Block Wrath Cookies','Prevents wrath cookies from spawning.'));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Infinite Stuff'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('infiniteCookies','Infinite Cookies','Causes your cookies to constantly regenerate.'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('infiniteMagic','Infinite Magic','Causes your Grimoire magic to recharge almost instantly'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('infiniteSwaps','Infinite Swaps','Causes your Pantheon swaps to regenerate almost instantly.'));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Mini-game Enhancers'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('miracleSpells','Miracle Spell™','Grimoire spells will never fail.'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('immortalPlants','Make Plants Immortal','Makes it so plants never wither. Does not affect weeds or fungi.'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('neverWeeds','Never Weed™','Makes it so weeds never spawn on their own. You can still plant them and they still may spread.'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('allGodsActive','Pantheon \'R Us','All Pantheon gods except for Cyclius will be active in slot one.'));
                fragment.appendChild( ballhaxsomgyes.Menu.toggleButton('allGodsSlotOne','Power Of The Gods','All Pantheon gods will behave as if they are in slot 1 regardless of which slot they are in.'));
                fragment.appendChild( ballhaxsomgyes.Menu.heading(' ballhaxsomgyes Actions'));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Spawning'));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('spawnGolden','Spawn a Golden Cookie','Spawns a golden cookie.',  ballhaxsomgyes.Actions.spawnGolden));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('spawnGoldenFrenzy','Spawn a Frenzy Cookie','Spawns a golden cookie that will cause a frenzy.',  ballhaxsomgyes.Actions.spawnGolden));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('spawnGoldenDragonflight','Spawn a Dragonflight Cookie','Spawns a golden cookie that will cause a dragonflight.',  ballhaxsomgyes.Actions.spawnGoldenDragonflight));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('giveSugarLump','Give Sugar Lump','Gives you a sugar limp.',  ballhaxsomgyes.Actions.giveSugarLump));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('giveCookies','Give Cookies','Gives you the most cookies you can have without getting the cheated cookies achievement.',  ballhaxsomgyes.Actions.giveCookies));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Mini-games'));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('refillMagic','Refill Magic','Refill all of your Grimoire\'s magic.',  ballhaxsomgyes.Actions.refillMagic));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('refillSwaps','Refill Swaps','Refill all of your Pantheon\'s swaps',  ballhaxsomgyes.Actions.refillSwaps));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Unlock Things'));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('unlockAllSeeds','Unlock Plant Seeds','Unlocks all the plant seeds for your Garden. Does not unlock weeds or fungi.',  ballhaxsomgyes.Actions.unlockAllSeeds));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('unlockAllWeedFungusSeeds','Unlock Weed and Fungi Seeds','Unlocks all the weed and fungus seeds for the Garden.',  ballhaxsomgyes.Actions.unlockAllWeedFungusSeeds));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('lockAllSeeds','Lock All Seeds','Locks all the seeds for the Garden except for the starting seed.',  ballhaxsomgyes.Actions.lockAllSeeds));
                fragment.appendChild( ballhaxsomgyes.Menu.subheading('Misc'));
                fragment.appendChild( ballhaxsomgyes.Menu.actionButton('removeCheatedCookies','Remove Cheat Achievement','Remove \'Cheated cookies taste awful\' achievement',  ballhaxsomgyes.Actions.removeCheatedCookies));

                // Unload  ballhaxsomgyes button. Doesn't work if you loaded other add-ons first. We check only for Cookie Monster.
                if (typeof CM === 'undefined' ||  ballhaxsomgyes.cookieMonsterLoaded) fragment.appendChild( ballhaxsomgyes.Menu.actionButton('unload ballhaxsomgyes','Unload  ballhaxsomgyes','Unloads  ballhaxsomgyes and disabled all of it\'s features.',  ballhaxsomgyes.Actions.unload ballhaxsomgyes));

                 ballhaxsomgyes.PluginHooks.UpdateMenu(fragment);
        
                l('menu').childNodes[2].insertBefore(fragment, l('menu').childNodes[2].childNodes[l('menu').childNodes[2].childNodes.length - 1]);
            }
        },
    },
    Actions: { // Our action library
        spawnGolden: () => {
            Game.shimmerTypes.golden.time = Game.shimmerTypes.golden.maxTime;
        },
        spawnGoldenFrenzy: ()=> ballhaxsomgyes.Actions.spawnGoldenFixed('frenzy'),
        spawnGoldenDragonflight: ()=> ballhaxsomgyes.Actions.spawnGoldenFixed('dragonflight'),
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
        unload ballhaxsomgyes: ()=>{
            Object.keys( ballhaxsomgyes.ticks).forEach((tickThis) => {
                let tick =  ballhaxsomgyes.ticks[tickThis];
                if (tick.intervalId) {
                    clearInterval(tick.intervalId);
                    tick.intervalId = 0;
                }
            });
             ballhaxsomgyes.Liberate.Game();
             ballhaxsomgyes.PluginHooks.UnloadPlugins();
            Game.UpdateMenu();
            setTimeout(() =>  ballhaxsomgyes = null, 100);
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
         ballhaxsomgyes.Hijack.Game();
         ballhaxsomgyes.loadConfig();
         ballhaxsomgyes.initTicks();
        Game.Win('Third-party');
        if (typeof CM === 'object' && typeof Queue !== 'undefined' && typeof jscolor !== 'undefined')  ballhaxsomgyes.cookieMonsterLoaded = true;
         ballhaxsomgyes.PluginHooks.Init();
    },
    cookieMonsterLoaded: false,
    Menu: {
        toggleButton: (configParam, text, description) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            if (! ballhaxsomgyes.getConfig(configParam)) a.className = 'option off';
            else a.className = 'option';
            a.id = ` ballhaxsomgyes-${configParam}`;
            a.onclick = ()=> ballhaxsomgyes.toggleConfig(configParam);
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
            a.id = ` ballhaxsomgyes-${configParam}`;
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
            let subheading =  ballhaxsomgyes.Menu.heading(text);
            subheading.style.fontSize = '17px';
            return subheading;
        },
    },
    saveConfig: () => {
        localStorage.setItem(' ballhaxsomgyes', JSON.stringify( ballhaxsomgyes.Config));
    },
    loadConfig: () => {
        let config = localStorage.getItem(' ballhaxsomgyes');
        if (config) {
            config = JSON.parse(config);
            Object.keys(config).forEach((key) => {
                 ballhaxsomgyes.setConfig(key, config[key]);
            });
        }
    },
    getConfig: (configParam) => {
        if (typeof  ballhaxsomgyes.Config[configParam] === 'undefined')
            return  ballhaxsomgyes.ConfigDefaults[configParam];
        else return  ballhaxsomgyes.Config[configParam];
    },
    setConfig: (configParam, configValue) => {
        if (configValue ===  ballhaxsomgyes.ConfigDefaults[configParam])
            delete  ballhaxsomgyes.Config[configParam];
        else  ballhaxsomgyes.Config[configParam] = configValue;
         ballhaxsomgyes.saveConfig();
        return  ballhaxsomgyes.getConfig(configParam);
    },
    toggleConfig: (configParam) => {
        let val =  ballhaxsomgyes.setConfig(configParam, ! ballhaxsomgyes.getConfig(configParam));
         ballhaxsomgyes.updateMenuView(configParam);
        return val;
    },
    updateMenuView: (configParam) => {
        if (! ballhaxsomgyes.getConfig(configParam))
            l(` ballhaxsomgyes-${configParam}`).className = 'option off';
        else
            l(` ballhaxsomgyes-${configParam}`).className = 'option';
    },
    Liberate: {
        Game: () => {
            if ( ballhaxsomgyes.OG.UpdateMenu) Game.UpdateMenu =  ballhaxsomgyes.OG.UpdateMenu;
            if ( ballhaxsomgyes.OG.shimmerPrototypeInit) Game.shimmer.prototype.init = function() {
                Game.shimmerTypes[this.type].initFunc(this);
            };
            if (Game.hasGod)  ballhaxsomgyes.Liberate.hasGod();
             ballhaxsomgyes.Liberate.miniGames();
        },
        miniGames: () => {
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants && Game.Objects['Farm'].minigame.soils) {
                if ( ballhaxsomgyes.OG.gardenPlantsMortality) Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (!plant.weed && !plant.fungus) Object.defineProperty(plant, 'immortal', {value: ballhaxsomgyes.OG.gardenPlantsMortality[plantName],configurable: true});
                });
        
                if ( ballhaxsomgyes.OG.gardenSoilWeed) Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                    let soil = Game.Objects['Farm'].minigame.soils[soilName];
                    Object.defineProperty(soil, 'weedMult', {value: ballhaxsomgyes.OG.gardenSoilWeed[soilName],configurable: true});
                });
            }
            if(Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.getFailChance) {
                if ( ballhaxsomgyes.OG.grimoireFailChance) Game.Objects['Wizard tower'].minigame.getFailChance =  ballhaxsomgyes.OG.grimoireFailChance;
            }
        },
        hasGod: () => {
            if(Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods &&  ballhaxsomgyes.OG.hasGod && Game.hasGod) Game.hasGod =  ballhaxsomgyes.OG.hasGod;
            else delete Game.hasGod;
        },
    },
    Hijack: {
        Game: () => {
            if (! ballhaxsomgyes.OG.UpdateMenu) {
                 ballhaxsomgyes.OG.UpdateMenu = Game.UpdateMenu;
                Game.UpdateMenu =  ballhaxsomgyes.Game.UpdateMenu;
            }
            if (! ballhaxsomgyes.OG.shimmerPrototypeInit) {
                 ballhaxsomgyes.OG.shimmerPrototypeInit = true;
                Game.shimmer.prototype.init = function() {
                    if ( ballhaxsomgyes.getConfig('blockWrath')) {
                        this.forceObj = {'noWrath':true};
                        Game.shimmerTypes[this.type].initFunc(this);
                    } else {
                        Game.shimmerTypes[this.type].initFunc(this);
                    }
                }
            }
            if (! ballhaxsomgyes.OG.hasGod)  ballhaxsomgyes.Hijack.hasGod();
        
             ballhaxsomgyes.Hijack.miniGames();
        },
        miniGames: () => {
            if (! ballhaxsomgyes) return;
            retry = false;
        
            if(!Game.Objects['Farm'].minigameLoaded || !Game.Objects['Farm'].minigame.plants || !Game.Objects['Farm'].minigame.soils) {
                retry = true;
            } else {
                if (! ballhaxsomgyes.OG.gardenPlantsMortality) {
                     ballhaxsomgyes.OG.gardenPlantsMortality = {};
                    Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                        let plant = Game.Objects['Farm'].minigame.plants[plantName];
                        if (!plant.weed && !plant.fungus) {
                             ballhaxsomgyes.OG.gardenPlantsMortality[plantName] = plant.immortal;
                            Object.defineProperty(plant, 'immortal', {get:()=>{return ( ballhaxsomgyes.getConfig('immortalPlants')?true: ballhaxsomgyes.OG.gardenPlantsMortality[plantName])},configurable: true});
                        }
                    });
                }
        
                if (! ballhaxsomgyes.OG.gardenSoilWeed) {
                     ballhaxsomgyes.OG.gardenSoilWeed = {};
                    Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                        let soil = Game.Objects['Farm'].minigame.soils[soilName];
                         ballhaxsomgyes.OG.gardenSoilWeed[soilName] = soil.weedMult;
                        Object.defineProperty(soil, 'weedMult',{get:()=>{return ( ballhaxsomgyes.getConfig('neverWeeds')?0: ballhaxsomgyes.OG.gardenSoilWeed[soilName])},configurable: true});
                    });
                }
            }
        
            if(!Game.Objects['Wizard tower'].minigameLoaded || !Game.Objects['Wizard tower'].minigame.getFailChance) {
                retry = true;
            } else {
                if (! ballhaxsomgyes.OG.grimoireFailChance) {
                     ballhaxsomgyes.OG.grimoireFailChance = Game.Objects['Wizard tower'].minigame.getFailChance;
                    Game.Objects['Wizard tower'].minigame.getFailChance = (spell)=>( ballhaxsomgyes.getConfig('miracleSpells')?0: ballhaxsomgyes.OG.grimoireFailChance(spell));
                }
            }
        
            if (retry) setTimeout( ballhaxsomgyes.Hijack.miniGames, 1000);
        },
        hasGod: () => {
            if (! ballhaxsomgyes) return;
            if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) {
                setTimeout( ballhaxsomgyes.Hijack.hasGod, 1000); // We keep running this until we get the real Game.hasGod()
            } else if (! ballhaxsomgyes.OG.hasGod && Game.hasGod) {
                 ballhaxsomgyes.OG.hasGod = Game.hasGod;
            }
            Game.hasGod = function(what) {
                if ( ballhaxsomgyes.getConfig('allGodsActive')) {
                    if (['ages'].includes(what)) return false; // Add gods to this if you want to skip them
                    return 1;
                } else if ( ballhaxsomgyes.getConfig('allGodsSlotOne')) {
                    if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return false; // Don't run if minigame isn't loaded (errors otherwise)
                    let god = Game.Objects['Temple'].minigame.gods[what];
                    for (let i=0;i<3;i++)
                        if (Game.Objects['Temple'].minigame.slot[i]==god.id) return 1;
                    return false;
                } else {
                    if ( ballhaxsomgyes.OG.hasGod) return  ballhaxsomgyes.OG.hasGod(what);
                    else return false;
                }
            }
        },
    },
    initTicks: () => {
        Object.keys( ballhaxsomgyes.ticks).forEach((tickThis) => {
            let tick =  ballhaxsomgyes.ticks[tickThis];
            if (!tick.intervalId) tick.intervalId = setInterval(tick.onTick, tick.rate);
        });
    },
    ticks: {
        'autoClicker': {
            'intervalId': null,
            'rate': 50,
            'onTick': ()=>{
                if (! ballhaxsomgyes.getConfig('autoClicker')) return;
                Game.ClickCookie();
            },
        },
        'autoGolden': {
            'intervalId': null,
            'rate': 500,
            'onTick': ()=>{
                if (! ballhaxsomgyes.getConfig('autoGolden')) return;
                Game.shimmers.forEach(function(shimmer) {
                    if (shimmer.type == "golden") { shimmer.pop() }
                })
            },
        },
        'autoReindeer': {
            'intervalId': null,
            'rate': 500,
            'onTick': ()=>{
                if (! ballhaxsomgyes.getConfig('autoReindeer')) return;
                Game.shimmers.forEach(function(shimmer) {
                    if (shimmer.type == 'reindeer') { shimmer.pop() }
                })
            },
        },
        'autoNews': {
            'intervalId': null,
            'rate': 3000,
            'onTick': ()=>{
                if (! ballhaxsomgyes.getConfig('autoNews')) return;
                if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') Game.tickerL.click();
            },
        },
        'infiniteCookies': {
            'intervalId': null,
            'rate': 100,
            'onTick': ()=>{
                if (! ballhaxsomgyes.getConfig('infiniteCookies')) return;
                Game.cookies = Game.cookiesEarned;
            },
        },
        'infiniteMagic': {
            'intervalId': null,
            'rate': 1000,
            'onTick': ()=>{
                if (! ballhaxsomgyes.getConfig('infiniteMagic')) return;
                if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                    Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
            },
        },
        'infiniteSwaps': {
            'intervalId': null,
            'rate': 1000,
            'onTick': ()=>{
                if (! ballhaxsomgyes.getConfig('infiniteSwaps')) return;
                if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return;
                Game.Objects['Temple'].minigame.swaps=3;
                Game.Objects['Temple'].minigame.swapT=Date.now();
                Game.Objects['Temple'].minigame.lastSwapT=0;
            },
        },
    },
    PluginHooks: {
        Init: () => {
            Object.keys( ballhaxsomgyes.Plugins).forEach((key) => {
                let plugin =  ballhaxsomgyes.Plugins[key];
                if (typeof plugin['Init'] === 'function') plugin['Init']();
            });
        },
        UnloadPlugins: () => {
            Object.keys( ballhaxsomgyes.Plugins).forEach((key) => {
                let plugin =  ballhaxsomgyes.Plugins[key];
                if (typeof plugin['Unload'] === 'function') plugin['Unload']();
            });
        },
        UpdateMenu: (fragment) => {
            Object.keys( ballhaxsomgyes.Plugins).forEach((key) => {
                let plugin =  ballhaxsomgyes.Plugins[key];
                if (typeof plugin['Game'] === 'object' && typeof plugin['Game']['UpdateMenu'] === 'function') plugin['Game']['UpdateMenu'](fragment);
            });
        },
    },
    Plugins: {}, // Plugins
};

// You can setup ` ballhaxsomgyesPlugins` (object) with your custom plugins before loading this script
if (typeof  ballhaxsomgyesPlugins === 'object') {
    Object.keys( ballhaxsomgyesPlugins).forEach((key) => {
        let plugin =  ballhaxsomgyesPlugins[key];
        if (typeof plugin === 'object') {
             ballhaxsomgyes.Plugins[key] = plugin;
            if (typeof  ballhaxsomgyes.Plugins[key]['Loaded'] === 'function')  ballhaxsomgyes.Plugins[key].Loaded();
        } else if (typeof plugin === 'function') {
             ballhaxsomgyes.Plugins[key] = plugin;
             ballhaxsomgyes.Plugins[key]();
        }
    });
}

// Alternatively, you can set  ballhaxsomgyesInit to false to prevent the Init and set up your plugins after loading the script, remember to call ` ballhaxsomgyes.Init()` afterwards.
if (typeof  ballhaxsomgyesInit === 'undefined' ||  ballhaxsomgyesInit)  ballhaxsomgyes.Init();

/* cSpell:ignore  ballhaxsomgyes, Toggleables, prefs, minigame, Mult, grimoire, grimoire's, grimoire\'s, Cyclius, dragonflight, Achiev, jscolor */
