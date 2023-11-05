Mod_Name =
    "Dueling mod";


const GAME_OPTIONS = {
    Subspace_allow: true, //Put [true] if you want subspace users else put [false]
    max_players: 180,
    SB_Removed_Ships: false, // Put [true] if you want removed ships(Toscain and H-Mercury) else put [false]
    SDC_Ships: false, //Put [true] if you want SDC ships else put [false]
};



const Ship = [];
//Spectator ship
Ship.Spectator_102 = '{"name":"Spectator","level":1,"model":2,"size":1,"zoom":0.2,"specs":{"shield":{"capacity":[1000,1000],"reload":[0.01,0.01]},"generator":{"capacity":[1000,1000],"reload":[0.01,0.01]},"ship":{"mass":1,"speed":[200,1000],"rotation":[360,360],"acceleration":[20000,20000]}},"bodies":{"face":{"section_segments":100,"angle":0,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-2,-2,2,2],"z":[0,0,0,0]},"width":[0,1,1,0],"height":[0,1,1,0],"vertical":true,"texture":[5]}},"typespec":{"name":"Spectator","level":1,"model":2,"code":102,"specs":{"shield":{"capacity":[1000,1000],"reload":[0.01,0.01]},"generator":{"capacity":[1000,1000],"reload":[0.01,0.01]},"ship":{"mass":1,"speed":[200,1000],"rotation":[360,360],"acceleration":[20000,20000]}},"shape":[0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02,0.02],"lasers":[],"radius":0.02}}';
//Removed ships
if (GAME_OPTIONS.SB_Removed_Ships) {
    Ship.Toscain_508 = '{"name":"Toscain","level":5,"model":8,"size":1.7,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"bodies":{"front":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[-100,-95,-25,0,25],"z":[0,0,0,0,0]},"width":[0,20,40,40,20],"height":[0,10,35,20,5],"texture":[63,11,2,63],"laser":{"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"recoil":50,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0],"y":[-70,-70,-25,0,100],"z":[0,0,0,0,9]},"width":[0,10,15,15,10],"height":[0,15,35,20,0],"texture":[9,9,9,4]},"lasers":{"section_segments":8,"angle":15,"offset":{"x":1,"y":-5,"z":-3},"position":{"x":[0,0,0],"y":[-90,-70,-100],"z":[0,0,0]},"width":[5,5,0],"height":[5,5,0],"texture":[6],"laser":{"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"angle":45,"error":0}},"motor":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[10,20,30,100,95],"z":[0,0,0,0,0]},"width":[0,40,50,50,0],"height":[0,10,15,20,0],"texture":[63,63,10,4]},"propulsors":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[0,0,0],"y":[30,105,100],"z":[0,0,0]},"width":[15,15,0],"height":[10,10,0],"propeller":true,"texture":[12]}},"wings":{"main":{"doubleside":true,"offset":{"x":30,"y":80,"z":0},"length":[70,20],"width":[80,20],"angle":[0,0],"position":[-20,0],"texture":[11],"bump":{"position":20,"size":10}},"winglets":{"doubleside":true,"offset":{"x":98,"y":81,"z":-20},"length":[20,50,20],"width":[20,35,20],"angle":[90,90,90],"position":[0,0,0,0],"texture":[63],"bump":{"position":30,"size":50}}},"typespec":{"name":"Toscain","level":5,"model":8,"code":508,"specs":{"shield":{"capacity":[275,350],"reload":[5,8]},"generator":{"capacity":[75,100],"reload":[35,50]},"ship":{"mass":300,"speed":[80,90],"rotation":[50,80],"acceleration":[80,110]}},"shape":[3.4,3.354,3.556,2.748,2.336,2.055,1.858,1.732,1.634,1.548,1.462,1.404,1.371,1.36,1.241,1.161,1.723,4.485,5.01,4.795,4.111,3.842,3.82,3.753,3.634,3.407,3.634,3.753,3.82,3.842,4.111,4.795,5.01,4.485,1.723,1.161,1.241,1.353,1.371,1.404,1.462,1.548,1.634,1.732,1.858,2.055,2.336,2.748,3.556,3.354],"lasers":[{"x":0,"y":-3.4,"z":0,"angle":0,"damage":[14,30],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.846,"y":-3.454,"z":-0.102,"angle":15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0},{"x":0.846,"y":-3.454,"z":-0.102,"angle":-15,"damage":[3.75,6],"rate":2,"type":1,"speed":[100,130],"number":2,"spread":45,"error":0,"recoil":0}],"radius":5.01}}';
    Ship.H_Mercury_609 = '{"name":"H-Mercury","level":6,"model":9,"size":2,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":500,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-65,-70,-60,-40,0,50,110,100],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,10,20,30,25,10,0],"height":[1,5,10,15,25,20,10,0],"texture":[6,4,4,63,11,63,12],"propeller":true,"laser":{"damage":[5,8],"rate":8,"type":1,"speed":[100,150],"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-10,0,15,25],"z":[0,0,0,0,0]},"width":[0,10,12,10,5],"height":[0,10,13,12,5],"texture":[9,9,4,4],"propeller":false},"arms":{"section_segments":8,"offset":{"x":60,"y":0,"z":-10},"position":{"x":[0,0,0,5,10,0,0,-10],"y":[-85,-70,-80,-30,0,30,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[1,5,6,15,15,15,10,0],"height":[1,5,6,20,30,25,10,0],"texture":[6,4,4,4,4,4,12],"angle":1,"propeller":true,"laser":{"damage":[3,5],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0}},"canon":{"section_segments":12,"offset":{"x":100,"y":27,"z":5},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,7,3,5,0],"height":[0,5,15,15,3,5,0],"angle":3,"laser":{"damage":[5,9],"rate":1,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,4,4]}},"wings":{"main":{"offset":{"x":0,"y":-15,"z":20},"length":[60,40],"width":[60,30,20],"angle":[-20,10],"position":[30,50,30],"texture":[11,11],"bump":{"position":30,"size":10}},"font":{"length":[60],"width":[20,15],"angle":[-10,20],"position":[-20,-40],"texture":[63],"bump":{"position":30,"size":10},"offset":{"x":0,"y":0,"z":0}},"font2":{"offset":{"x":0,"y":40,"z":8},"length":[60],"width":[20,15],"angle":[-10,20],"position":[20,40],"texture":[63],"bump":{"position":30,"size":10}}},"typespec":{"name":"H-Mercury","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[250,350],"reload":[6,8]},"generator":{"capacity":[100,150],"reload":[45,60]},"ship":{"mass":500,"speed":[75,95],"rotation":[50,60],"acceleration":[55,90]}},"shape":[2.806,2.807,2.354,2.037,1.822,4.151,4.081,3.789,3.595,3.471,3.406,4.17,4.202,4.284,4.413,4.508,4.834,4.883,4.011,4.534,4.917,4.734,3.583,3.454,4.418,4.409,4.418,3.454,3.583,4.734,4.917,4.534,4.011,4.883,4.834,4.508,4.413,4.284,4.202,4.17,3.406,3.471,3.595,3.789,4.081,4.151,1.822,2.037,2.354,2.807],"lasers":[{"x":0,"y":-2.8,"z":0.8,"angle":0,"damage":[5,8],"rate":8,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.341,"y":-3.399,"z":-0.4,"angle":1,"damage":[3,5],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.341,"y":-3.399,"z":-0.4,"angle":-1,"damage":[3,5],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.895,"y":-0.917,"z":0.2,"angle":3,"damage":[5,9],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.895,"y":-0.917,"z":0.2,"angle":-3,"damage":[5,9],"rate":1,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.917}}';
    game.custom.removedships = true;
}
//SDC Ships
if (GAME_OPTIONS.SDC_Ships) {
    Ship.Broly_611 = '{"name":"Broly","level":6,"model":11,"size":1.8,"specs":{"shield":{"capacity":[250,350],"reload":[7,8]},"generator":{"capacity":[90,140],"reload":[25,40]},"ship":{"mass":200,"speed":[80,100],"rotation":[40,60],"acceleration":[80,130]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":-6,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-80,-85,-60,0,0,60,75,70],"z":[0,0,0,0,0,0,0,0]},"width":[0,8,18,32,25,18,12,0],"height":[0,6,15,22,22,18,10,0],"texture":[17,10,18,5,11,8,17],"propeller":true,"laser":{"damage":[48,80],"rate":1,"type":2,"speed":[145,180],"recoil":40,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-68,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,40,60],"z":[-7,-5,0,0,5]},"width":[0,6,9,10,0],"height":[0,8,10,10,0],"texture":[4,9,9,4]},"side_propulsors":{"section_segments":12,"offset":{"x":30,"y":19,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-20,-10,5,15,25,30,40,60,50],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,14,16,16,12,12,14,10,0],"height":[0,10,15,15,15,10,10,10,8,0],"propeller":true,"texture":[4,4,8,4,5,63,5,4,17]},"cannons":{"section_segments":12,"offset":{"x":14,"y":19,"z":22},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,10,30,30],"z":[0,0,0,0,0,-5,-5]},"width":[0,5,7,10,10,3,0],"height":[0,4,4,5,6,3,0],"laser":{"damage":[15,20],"rate":1.2,"type":1,"speed":[120,150],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]},"cannons2":{"section_segments":12,"offset":{"x":28,"y":-6,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,6,8,12,8,8,0],"height":[0,5,7,8,3,5,0],"angle":1.5,"laser":{"damage":[8,13],"rate":1.5,"type":1,"speed":[100,140],"number":1,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"main":{"length":[40],"width":[60,50],"angle":[-10],"position":[0,-35],"doubleside":true,"bump":{"position":30,"size":10},"texture":[63,63],"offset":{"x":0,"y":24,"z":0}}},"typespec":{"name":"Broly","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[250,350],"reload":[7,8]},"generator":{"capacity":[90,140],"reload":[25,40]},"ship":{"mass":200,"speed":[80,100],"rotation":[40,60],"acceleration":[80,130]}},"shape":[3.282,3.289,2.749,2.251,2.233,2.188,1.913,1.921,1.75,1.616,1.524,1.463,1.453,1.543,1.645,1.749,1.888,2.046,2.138,2.397,2.849,3.188,3.143,2.99,2.521,2.489,2.521,2.99,3.143,3.188,2.849,2.397,2.138,2.046,1.888,1.749,1.645,1.543,1.454,1.463,1.524,1.616,1.75,1.921,1.913,2.188,2.233,2.251,2.749,3.289],"lasers":[{"x":0,"y":-3.276,"z":0,"angle":0,"damage":[48,80],"rate":1,"type":2,"speed":[145,180],"number":1,"spread":0,"error":0,"recoil":40},{"x":0.504,"y":-1.116,"z":0.792,"angle":0,"damage":[15,20],"rate":1.2,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.504,"y":-1.116,"z":0.792,"angle":0,"damage":[15,20],"rate":1.2,"type":1,"speed":[120,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.961,"y":-2.015,"z":0,"angle":1.5,"damage":[8,13],"rate":1.5,"type":1,"speed":[100,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.961,"y":-2.015,"z":0,"angle":-1.5,"damage":[8,13],"rate":1.5,"type":1,"speed":[100,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.289}}';
    Ship.Sparrow_612 = '{"name":"Sparrow","designer":"SChickenMan & ☒☒☒","level":6,"model":12,"size":1.6,"specs":{"shield":{"capacity":[120,200],"reload":[8,9]},"generator":{"capacity":[150,300],"reload":[20,30]},"ship":{"mass":175,"speed":[100,125],"rotation":[40,60],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-80,-85,-80,-50,-10,0,0,40,70,65],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,7,10,21,27,28,20,20,20,0],"height":[0,4,7,16,25,25,20,20,15,0],"texture":[17,63,4,11,3,63,2,63,12],"propeller":true,"laser":{"damage":[30,60],"rate":3.5,"type":2,"speed":[160,200],"number":1}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-70,"z":14},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,8,10,10,0],"height":[0,10,12,12,0],"texture":[9]},"cannons":{"section_segments":8,"offset":{"x":0,"y":30,"z":30},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-60,-20,0,20,40,60],"z":[-10,-10,-5,-5,-4,-5,-12]},"width":[0,6,10,10,12,10,8],"height":[0,5,10,10,10,6,8],"angle":180,"laser":{"damage":[30,50],"rate":0.6,"type":1,"speed":[200,240],"recoil":300,"number":1,"error":0},"propeller":false,"texture":[4,3,11,4,63,2]},"side_propulsors":{"section_segments":8,"offset":{"x":25,"y":10,"z":0},"position":{"x":[-15,-2,-1,-2,0,0,0,0,0,0,0,0],"y":[-90,-20,-15,-8,0,10,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,13,15,20,20,20,20,20,18,18,10,0],"height":[0,10,15,20,20,20,25,20,18,16,10,0],"propeller":true,"texture":[2,4,4,63,3,4,8,5,63,4,17]},"tops":{"section_segments":12,"offset":{"x":15,"y":30,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-45,-40,-25,0,15,40,35],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,13,11,6,0],"height":[0,5,9,8,6,5,0],"propeller":1,"angle":0,"texture":[5,4,10,63,4,17]}},"wings":{"join1":{"offset":{"x":0,"y":5,"z":0},"length":[35],"width":[20,70],"angle":[0],"position":[-90,-5],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":0,"y":35,"z":0},"length":[30],"width":[20,70],"angle":[0],"position":[-95,-10],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}}},"typespec":{"name":"Sparrow","level":6,"model":12,"code":612,"specs":{"shield":{"capacity":[120,200],"reload":[8,9]},"generator":{"capacity":[150,300],"reload":[20,30]},"ship":{"mass":175,"speed":[100,125],"rotation":[40,60],"acceleration":[90,140]}},"shape":[3.206,3.208,2.616,2.174,1.856,1.719,1.63,1.522,1.38,1.273,1.202,1.258,1.339,1.415,1.486,1.549,1.643,1.777,1.973,2.157,2.488,2.866,3.24,3.196,3.095,2.886,3.095,3.196,3.24,2.866,2.488,2.157,1.973,1.777,1.643,1.549,1.486,1.415,1.339,1.258,1.202,1.273,1.38,1.522,1.63,1.719,1.856,2.174,2.616,3.208],"lasers":[{"x":0,"y":-3.2,"z":0,"angle":0,"damage":[30,60],"rate":3.5,"type":2,"speed":[160,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":2.88,"z":0.96,"angle":180,"damage":[30,50],"rate":0.6,"type":1,"speed":[200,240],"number":1,"spread":0,"error":0,"recoil":300}],"radius":3.24}}';
    Ship.Contraband_613 = '{"name":"Contraband","level":6,"model":13,"size":1.6,"zoom":0.85,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-22,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-80,-20,0,15,20,60,65,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,24,26,20,20,20,20,25,12,0],"height":[0,5,25,25,20,15,15,15,20,10,0],"texture":[1,2,4,63,5,10,5,63,4,17],"propeller":true,"laser":{"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"recoil":250,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-77,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,5,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":3,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"cannons":{"section_segments":12,"offset":{"x":18,"y":43,"z":20},"position":{"x":[0,0,0,0,0],"y":[-50,-45,-20,-5,5],"z":[0,0,0,0,0]},"width":[0,5,7,8,0],"height":[0,5,7,8,0],"angle":0,"laser":{"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,63,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":-2,"z":0},"length":[37,0],"width":[20,70],"angle":[0],"position":[-95,0],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":25,"y":30,"z":0},"length":[35],"width":[10,10],"angle":[0],"position":[0,0,0,50],"texture":[8],"doubleside":1,"bump":{"position":0,"size":0}},"wing1":{"doubleside":true,"offset":{"x":50,"y":30,"z":-36},"length":[0,30,20,30],"width":[0,0,100,100,0],"angle":[110,70,90,110],"position":[0,0,0,0,0],"texture":[63],"bump":{"position":0,"size":5}}},"typespec":{"name":"Contraband","level":6,"model":13,"code":613,"specs":{"shield":{"capacity":[190,275],"reload":[6,8]},"generator":{"capacity":[125,200],"reload":[30,42.5]},"ship":{"mass":150,"speed":[100,125],"rotation":[60,80],"acceleration":[70,120]}},"shape":[3.424,3.274,2.552,2.215,2.002,1.835,1.725,1.612,1.456,1.35,2.032,2.005,1.991,2.031,2.107,2.229,2.362,2.513,2.737,3.055,3.205,3.163,3.112,2.961,2.525,2.501,2.525,2.961,3.112,3.163,3.205,3.055,2.737,2.513,2.362,2.229,2.107,2.031,1.992,2.005,2.032,1.35,1.456,1.612,1.725,1.835,2.002,2.215,2.552,3.274],"lasers":[{"x":0,"y":-3.264,"z":0,"angle":0,"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"number":1,"spread":0,"error":0,"recoil":250},{"x":0.576,"y":-0.224,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.576,"y":-0.224,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.424}}';
    Ship.A_Stasis_614 = '{"name":"A-Stasis","designer":"Thuliux","level":6,"model":14,"size":2.41,"zoom":0.9,"specs":{"shield":{"capacity":[250,320],"reload":[5,8]},"generator":{"capacity":[130,160],"reload":[22,37.5]},"ship":{"mass":190,"speed":[85,110],"rotation":[55,75],"acceleration":[130,140]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":12.5,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-80,-70,-75,-70,-30,-20,20,30,45,30],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,4.5,7,14,20,15,13,10,0],"height":[0,2.5,4,7.5,12,16,15,13,10,0],"texture":[6,63,63,10,4,2,63,8,17],"propeller":1,"laser":{"damage":[10,15],"rate":1,"type":2,"speed":[190,235],"recoil":10,"number":10,"error":3.5}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-32.5,"z":8},"position":{"x":[0,0,0,0,0,0],"y":[-8,0,20,30,60,80],"z":[0,0,0,0,0,0]},"width":[0,4,7,8,8,0],"height":[0,6,10,11,12,0],"propeller":false,"texture":[7,9,4,63,4]},"propulsors":{"section_segments":10,"offset":{"x":15,"y":7.5,"z":5},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-5,-2,8,20,30,35,45,40],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,7,10,10,10,8,8,10,8,0],"height":[0,6,10,10,10,8,8,8,6,0],"texture":[4,4,5,10,3,63,4,4,17],"propeller":true},"sides":{"section_segments":12,"offset":{"x":10,"y":-27.5,"z":0},"position":{"x":[0,0,2,4],"y":[-25,-10,5,35],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,6,0],"propeller":1,"angle":5,"texture":[4,2,63,4]}},"wings":{"main":{"length":[12,8],"width":[40,30,30],"angle":[10,0],"position":[30,40,30],"doubleside":true,"bump":{"position":30,"size":5},"texture":[11,63],"offset":{"x":5,"y":-17.5,"z":15}},"winglet":{"length":[38,10],"width":[50,40,30],"angle":[-30,20],"position":[30,50,30],"doubleside":true,"bump":{"position":30,"size":5},"texture":[8,63],"offset":{"x":0,"y":-22.5,"z":10}},"join1":{"offset":{"x":0,"y":20,"z":0},"length":[25],"width":[20,50],"angle":[-10],"position":[-60,0],"texture":[63],"doubleside":true,"bump":{"position":0,"size":5}}},"typespec":{"name":"A-Stasis","level":6,"model":14,"code":614,"specs":{"shield":{"capacity":[250,320],"reload":[5,8]},"generator":{"capacity":[130,160],"reload":[22,37.5]},"ship":{"mass":190,"speed":[85,110],"rotation":[55,75],"acceleration":[130,140]}},"shape":[3.254,3.02,2.394,2.039,1.729,1.499,1.303,1.191,1.165,1.165,1.191,2.071,2.054,2.054,2.105,2.189,2.313,2.373,2.476,2.634,2.785,2.627,2.755,2.697,2.813,2.777,2.813,2.697,2.755,2.627,2.785,2.634,2.476,2.373,2.313,2.189,2.105,2.054,2.054,2.071,1.191,1.165,1.165,1.191,1.303,1.499,1.729,2.039,2.394,3.02],"lasers":[{"x":0,"y":-3.254,"z":0,"angle":0,"damage":[10,15],"rate":1,"type":2,"speed":[190,235],"number":10,"spread":0,"error":3.5,"recoil":10}],"radius":3.254}}';
    Ship.Tripod_615 = '{"name":"Tripod","designer":"Nova","level":6,"model":15,"size":1.7,"specs":{"shield":{"capacity":[150,250],"reload":[8,10]},"generator":{"capacity":[100,130],"reload":[25,45]},"ship":{"mass":150,"speed":[100,138],"rotation":[47,70],"acceleration":[110,140]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-74,-65,-47,-20,5,17,29,50,60,75,72],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,15,20,18,18,18,20,20,15,0],"height":[0,6,8,10,12,13,14,15,14,10,0],"propeller":true,"texture":[4,63,2,10,63,3,63,4,13,17]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[-3,3,18,35,50],"z":[-7,-6,-7,-1,-1]},"width":[0,4,8,8,5],"height":[0,6,11,6,5],"propeller":false,"texture":[4,9,9,4,4]},"cannon_wing_top":{"section_segments":8,"offset":{"x":0,"y":60,"z":18},"position":{"x":[0,0,0,0,0,0,0],"y":[-45,-50,-30,-10,0,10,15],"z":[0,0,0,0,0,0,0]},"width":[0,4,6,8,8,6,0],"height":[0,2,4,5,5,4,0],"angle":0,"laser":{"damage":[35,50],"rate":1,"type":1,"speed":[130,180],"number":1,"recoil":10,"angle":0},"propeller":0,"texture":[6,4,10,63,8,3]},"cannon_wings":{"section_segments":8,"offset":{"x":23,"y":50,"z":-3},"position":{"x":[-2,-2,-2,-1,-3,-4,-4,-3,-3],"y":[-70,-80,-62,-50,-40,-30,-15,20,15],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,6,8,9,11,10,10,6,0],"height":[0,6,8,8,8,8,8,6,0],"texture":[13,4,2,63,4,10,4,13],"angle":0,"laser":{"damage":[18,35],"rate":1,"type":2,"speed":[125,165],"number":1,"angle":2,"error":0},"propeller":1}},"wings":{"main":{"length":[40,15],"width":[80,30,25],"angle":[0,40],"position":[10,20,0],"doubleside":true,"texture":[11,63],"offset":{"x":0,"y":13,"z":-5.31},"bump":{"position":10,"size":5}},"winglets":{"length":[14,3],"width":[40,30,59],"angle":[10,30,0],"position":[-15,23,50],"doubleside":true,"texture":[3],"offset":{"x":5,"y":-58,"z":-5},"bump":{"position":30,"size":10}},"winglets_cannon_top_2":{"length":[13,3],"width":[15,15,20],"angle":[30,30,0],"position":[-12,0,-2],"doubleside":true,"texture":[4,13],"offset":{"x":1,"y":65,"z":20},"bump":{"position":10,"size":10}}},"typespec":{"name":"Tripod","level":6,"model":15,"code":615,"specs":{"shield":{"capacity":[150,250],"reload":[8,10]},"generator":{"capacity":[100,130],"reload":[25,45]},"ship":{"mass":150,"speed":[100,138],"rotation":[47,70],"acceleration":[110,140]}},"shape":[3.167,3.081,2.356,1.926,1.616,1.348,1.372,1.279,1.178,1.108,1.063,1.043,1.053,1.765,1.806,1.881,1.954,1.977,2.032,2.124,2.12,2.158,2.539,2.6,2.596,2.555,2.596,2.6,2.539,2.158,2.12,2.124,2.032,1.977,1.954,1.881,1.806,1.765,1.054,1.043,1.063,1.108,1.178,1.279,1.372,1.348,1.616,1.926,2.356,3.081],"lasers":[{"x":0,"y":0.34,"z":0.612,"angle":0,"damage":[35,50],"rate":1,"type":1,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":10},{"x":0.714,"y":-1.02,"z":-0.102,"angle":0,"damage":[18,35],"rate":1,"type":2,"speed":[125,165],"number":1,"spread":2,"error":0,"recoil":0},{"x":-0.714,"y":-1.02,"z":-0.102,"angle":0,"damage":[18,35],"rate":1,"type":2,"speed":[125,165],"number":1,"spread":2,"error":0,"recoil":0}],"radius":3.167}}';
    Ship.Streamliner_616 = '{"name":"Streamliner","designer":"Thuliux & ☒☒☒","level":6,"model":16,"size":1.65,"specs":{"shield":{"capacity":[190,220],"reload":[7,9]},"generator":{"capacity":[15,30],"reload":[220,240]},"ship":{"mass":160,"speed":[100,122],"rotation":[50,70],"acceleration":[120,140]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":22,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-110,-100,-100,-70,-40,0,36,60,60],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,8.5,18,20,20,20,12,0],"height":[0,5,8,15,18,14,12,6,0],"texture":[6,4,2,10,3,63,4,17],"propeller":1},"cannon1":{"section_segments":6,"offset":{"x":0,"y":-25,"z":-10},"position":{"x":[0,0,0,0],"y":[-40,-50,-20],"z":[0,0,0]},"width":[0,5,8],"height":[0,5,8],"angle":0,"laser":{"damage":[20,30],"rate":0.87,"type":1,"speed":[160,200],"number":1,"recoil":150},"propeller":false},"cannon2":{"section_segments":6,"offset":{"x":0,"y":-25,"z":-10},"position":{"x":[0,0,0,0],"y":[-40,-50,-20],"z":[0,0,0]},"width":[0,5,8],"height":[0,5,8],"angle":0,"laser":{"damage":[20,30],"rate":0.87,"type":2,"speed":[160,190],"number":1,"recoil":150,"error":4},"propeller":false},"cannon3":{"section_segments":6,"offset":{"x":0,"y":-25,"z":-10},"position":{"x":[0,0,0,0],"y":[-40,-50,-20],"z":[0,0,0]},"width":[0,5,8],"height":[0,5,8],"angle":0,"laser":{"damage":[20,30],"rate":0.87,"type":2,"speed":[160,180],"number":1,"error":6,"recoil":150},"propeller":false},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-28,"z":18},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-30,-15,5,20,48,80,88],"z":[-7,-5,-3,-5,-5,-8,-8]},"width":[0,6,9,10,10,7,0],"height":[0,5,6,8,8,8,0],"texture":[9,9,9,11,63,4,1,2]},"laser2":{"section_segments":10,"offset":{"x":24,"y":2,"z":0},"position":{"x":[-4,-4,-1,0,0,0,0,0,0,0],"y":[-32,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,12,12,12,8,8,12,8,0],"height":[0,6,10,10,10,6,6,10,5,0],"texture":[6,4,10,3,4,3,2,4,16.9],"propeller":true}},"wings":{"main":{"length":[20,6,25],"width":[40,40,50,25],"angle":[5,-20,-20],"position":[0,10,18,-5],"doubleside":0,"bump":{"position":10,"size":5},"texture":[4,5,63,11],"offset":{"x":0,"y":22,"z":14}},"winglets":{"length":[26],"width":[38,10],"angle":[10,-10],"position":[-50,-30,-55],"bump":{"position":0,"size":20},"texture":63,"doubleside":true,"offset":{"x":0,"y":-15,"z":0}}},"typespec":{"name":"Streamliner","level":6,"model":16,"code":616,"specs":{"shield":{"capacity":[190,220],"reload":[7,9]},"generator":{"capacity":[15,30],"reload":[220,240]},"ship":{"mass":160,"speed":[100,122],"rotation":[50,70],"acceleration":[120,140]}},"shape":[2.904,2.589,2.251,2.032,1.879,1.576,1.178,1.186,1.153,1.108,1.085,1.089,1.115,1.631,1.671,1.739,1.844,1.889,1.913,1.97,2.088,2.484,2.595,2.521,2.735,2.711,2.735,2.521,2.595,2.484,2.088,1.97,1.913,1.889,1.844,1.739,1.671,1.631,1.118,1.089,1.085,1.108,1.153,1.186,1.178,1.576,1.879,2.032,2.251,2.589],"lasers":[{"x":0,"y":-2.475,"z":-0.33,"angle":0,"damage":[20,30],"rate":0.87,"type":1,"speed":[160,200],"number":1,"spread":0,"error":0,"recoil":150},{"x":0,"y":-2.475,"z":-0.33,"angle":0,"damage":[20,30],"rate":0.87,"type":2,"speed":[160,190],"number":1,"spread":0,"error":4,"recoil":150},{"x":0,"y":-2.475,"z":-0.33,"angle":0,"damage":[20,30],"rate":0.87,"type":2,"speed":[160,180],"number":1,"spread":0,"error":6,"recoil":150}],"radius":2.904}}';
    Ship.Mk47_617 = '{"name":"Mk47","level":6,"model":17,"size":1.52,"specs":{"shield":{"capacity":[200,250],"reload":[8,10]},"generator":{"capacity":[105,170],"reload":[30,50]},"ship":{"mass":150,"speed":[70,160],"rotation":[60,75],"acceleration":[100,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-10,"z":-2},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-65,-75,-55,-40,-5,0,30,35,70,65],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,14,18,20,23,20,20,20,0],"height":[0,5,10,11,11,11,10,12,6,0],"texture":[6,4,2,11,5,10,5,18,17],"propeller":true,"laser":{"damage":[6,10],"rate":10,"type":2,"speed":[170,200],"recoil":0,"number":1,"error":2}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-80,"z":8},"position":{"x":[0,0,0,0,0,0],"y":[15,35,60,85,90],"z":[-1,-2,-1,-4,0]},"width":[0,8,10,6,0],"height":[0,8,10,10,0],"texture":[8.98,8.98,4]},"intake":{"section_segments":12,"angle":0,"offset":{"x":15,"y":5,"z":-2},"position":{"x":[6,6,6,-4,0,0,0,0],"y":[-25,-30,-5,30,45,65,60],"z":[-2,-2,-2,0,0,0,0,0]},"width":[0,5,10,10,13,8,0],"height":[0,6,11,12,12,8,0],"texture":[6,4,63,4,63,17],"propeller":1,"laser":{"damage":[6,8],"angle":2,"rate":4,"type":2,"speed":[140,180],"recoil":0,"number":1,"error":5}}},"wings":{"main":{"length":[10,30,20],"width":[0,55,40,20],"angle":[0,-20,0],"position":[20,20,40,15],"texture":[3,11,63],"doubleside":true,"bump":{"position":10,"size":15},"offset":{"x":0,"y":15,"z":1}},"font":{"length":[25],"width":[30,10],"angle":[-10],"position":[0,15],"texture":[63],"doubleside":true,"bump":{"position":10,"size":15},"offset":{"x":5,"y":-65,"z":-7}}},"typespec":{"name":"Mk47","level":6,"model":17,"code":617,"specs":{"shield":{"capacity":[200,250],"reload":[8,10]},"generator":{"capacity":[105,170],"reload":[30,50]},"ship":{"mass":150,"speed":[70,160],"rotation":[60,75],"acceleration":[100,140]}},"shape":[2.589,2.59,2.205,2.04,1.933,1.679,1.097,1.088,1.015,0.968,0.939,0.926,0.941,0.942,0.916,1.902,2.016,2.151,2.199,2.285,2.415,2.559,2.465,2.237,2.166,1.827,2.166,2.237,2.465,2.559,2.415,2.285,2.199,2.151,2.016,1.902,0.916,0.939,0.942,0.926,0.939,0.968,1.015,1.088,1.097,1.679,1.933,2.04,2.205,2.59],"lasers":[{"x":0,"y":-2.584,"z":-0.061,"angle":0,"damage":[6,10],"rate":10,"type":2,"speed":[170,200],"number":1,"spread":0,"error":2,"recoil":0},{"x":0.638,"y":-0.76,"z":-0.061,"angle":0,"damage":[6,8],"rate":4,"type":2,"speed":[140,180],"number":1,"spread":2,"error":5,"recoil":0},{"x":-0.638,"y":-0.76,"z":-0.061,"angle":0,"damage":[6,8],"rate":4,"type":2,"speed":[140,180],"number":1,"spread":2,"error":5,"recoil":0}],"radius":2.59}}';
    Ship.R_34_618 = '{"name":"R-34","designer":"☒☒☒","level":6,"model":18,"size":1.84,"specs":{"shield":{"capacity":[200,325],"reload":[4,6]},"generator":{"capacity":[100,180],"reload":[30,36]},"ship":{"mass":255,"speed":[70,95],"rotation":[35,65],"acceleration":[90,130]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-100,-80,-90,-50,0,40,100,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,20,28,20,16,0],"height":[0,5,10,20,25,15,10,0],"propeller":true,"texture":[6,4,3,11,10,4,17],"laser":{"damage":[90,138],"rate":1,"type":1,"speed":[180,220],"number":1,"recoil":100,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":25},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,7,10,9,0],"height":[0,10,15,12,0],"texture":[9]},"engine":{"section_segments":8,"offset":{"x":0,"y":55,"z":17},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,10,30,40],"z":[10,4,0,0,0,0,0]},"width":[0,10,12,10,0],"height":[0,10,13,12,0],"propeller":false,"texture":[2,8,3,3]},"side_propellers":{"section_segments":10,"offset":{"x":25,"y":30,"z":0},"position":{"x":[-5,-5,0,0,-5,-5,-5],"y":[-60,-50,-20,0,20,75,70],"z":[7,3,0,0,0,0,0]},"width":[0,10,15,15,12,10,0],"height":[0,10,15,15,10,5,0],"angle":0,"propeller":true,"texture":[3,63,4,10,3,17]},"cannons":{"section_segments":12,"offset":{"x":40,"y":30,"z":0},"position":{"x":[0,0,0,0,-5,-5,-5],"y":[-50,-45,-20,0,20,50,55],"z":[0,0,0,0,0,0,0]},"width":[0,5,10,10,15,10,0],"height":[0,5,10,10,8,5,0],"angle":1,"propeller":false,"texture":[6,4,10,4,63,4],"laser":{"damage":[6,12],"rate":2.5,"type":1,"speed":[100,150],"number":1,"error":0}}},"wings":{"main":{"length":[55,20],"width":[100,50,30],"angle":[-15,30],"position":[50,70,40],"bump":{"position":-20,"size":10},"offset":{"x":0,"y":0,"z":0},"texture":[11,63],"doubleside":true},"main2":{"length":[15,15,15],"width":[50,50,50,50],"angle":[-10,-40,-15],"position":[30,40,35,50],"doubleside":true,"bump":{"position":10,"size":5},"texture":[11,4,63],"offset":{"x":5,"y":30,"z":24}}},"typespec":{"name":"R-34","level":6,"model":18,"code":618,"specs":{"shield":{"capacity":[200,325],"reload":[4,6]},"generator":{"capacity":[100,180],"reload":[30,36]},"ship":{"mass":255,"speed":[70,95],"rotation":[35,65],"acceleration":[90,130]}},"shape":[3.68,3.332,2.758,2.183,1.794,1.529,1.346,1.305,1.312,1.678,1.719,1.715,1.747,1.811,1.887,2.786,2.954,3.203,3.379,3.569,3.846,4.006,4.215,4.014,3.933,3.687,3.933,4.014,4.215,4.006,3.846,3.569,3.379,3.203,2.954,2.786,1.887,1.811,1.747,1.715,1.719,1.678,1.312,1.305,1.346,1.529,1.794,2.183,2.758,3.332],"lasers":[{"x":0,"y":-3.68,"z":0.368,"angle":0,"damage":[90,138],"rate":1,"type":1,"speed":[180,220],"number":1,"spread":0,"error":0,"recoil":100},{"x":1.44,"y":-0.736,"z":0,"angle":1,"damage":[6,12],"rate":2.5,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.44,"y":-0.736,"z":0,"angle":-1,"damage":[6,12],"rate":2.5,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.215}}';
    Ship.Phantom_619 = '{"name":"Phantom","designers":"Nex & ☒☒☒","level":6,"model":19,"size":1.55,"zoom":0.8,"specs":{"shield":{"capacity":[130,190],"reload":[8,10]},"generator":{"capacity":[140,210],"reload":[30,43]},"ship":{"mass":150,"speed":[110,140],"rotation":[40,62],"acceleration":[130,150]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":-15,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-70,-60,-30,0,20,55,75,95,85],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,14,17,14,18,14,10,0],"height":[0,5,10,13,15,15,10,8,0],"texture":[1,3,4,3,8,4,8,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-65,"z":7},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-5,0,20,40,50,70,85],"z":[-7,-5,0,0,3,4,3,5]},"width":[0,5,8,9,9,6,0],"height":[0,8,10,8,8,8,0],"texture":[3,9,9,2,3,4,3,2]},"cannons":{"section_segments":8,"offset":{"x":30,"y":45,"z":-15},"position":{"x":[0,0,0,0,-10,-25],"y":[-75,-70,-53,-25,-10,0],"z":[0,0,0,0,0,0]},"width":[0,5,6,8,10,0],"height":[0,3,5,6,8,0],"angle":1,"laser":{"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1},"propeller":0,"texture":[6,3,3,3,1,3,1,3,1,3]},"cannons2":{"section_segments":8,"offset":{"x":25,"y":33,"z":-15},"position":{"x":[0,0,0,0,-10,-25],"y":[-75,-70,-53,-25,-10,0],"z":[0,0,0,0,0,0]},"width":[0,5,6,8,10,0],"height":[0,3,5,6,8,0],"angle":1,"laser":{"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1},"propeller":0,"texture":[6,3,3,3,1,3,1,3,1,3]},"body":{"section_segments":8,"offset":{"x":20,"y":0,"z":-5},"position":{"x":[-5,-3,0,0,0,0,-3,-5],"y":[-25,-20,-10,0,20,40,60,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,7,10,12,10,12,8,0],"height":[0,4,6,8,9,10,10,0],"texture":[1,3,1,3,4,4,17],"propeller":true}},"wings":{"w":{"offset":{"x":-3,"y":40,"z":0},"length":[12,8,20,10],"width":[90,40,80,70,85],"angle":[10,-15,-10,0],"position":[-30,-60,-60,-10,15],"texture":[4,63,4,63],"bump":{"position":10,"size":10}},"plswork":{"doubleside":true,"offset":{"x":5,"y":-25,"z":4},"length":[20,40],"width":[60,35,15],"angle":[15,-20],"position":[0,45,80],"texture":[63,4],"bump":{"position":10,"size":5}},"top":{"doubleside":true,"offset":{"x":10,"y":30,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}}},"typespec":{"name":"Phantom","level":6,"model":19,"code":619,"specs":{"shield":{"capacity":[130,190],"reload":[8,10]},"generator":{"capacity":[140,210],"reload":[30,43]},"ship":{"mass":150,"speed":[110,140],"rotation":[40,62],"acceleration":[130,150]}},"shape":[2.635,2.448,1.929,1.813,1.568,1.476,1.405,1.304,1.296,1.211,1.155,1.139,1.21,1.313,1.463,1.534,1.633,2.154,2.63,2.727,2.675,3.335,2.501,3.045,2.499,2.485,2.499,3.045,2.501,3.335,2.675,2.727,2.63,2.154,1.633,1.534,1.463,1.313,1.21,1.139,1.155,1.211,1.296,1.304,1.405,1.476,1.568,1.813,1.929,2.448],"lasers":[{"x":0.889,"y":-0.93,"z":-0.465,"angle":1,"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.889,"y":-0.93,"z":-0.465,"angle":-1,"damage":[5,10],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.734,"y":-1.302,"z":-0.465,"angle":1,"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.734,"y":-1.302,"z":-0.465,"angle":-1,"damage":[2,5],"rate":10,"type":1,"speed":[140,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.335}}';
    Ship.Sinistyte_620 = '{"name":"Sinistyte","designer":"Nova","level":6,"model":20,"size":1.25,"specs":{"shield":{"capacity":[150,200],"reload":[7,9]},"generator":{"capacity":[130,160],"reload":[30,38]},"ship":{"mass":200,"speed":[110,120],"rotation":[50,70],"acceleration":[115,125]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":-120,"z":-1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,4,26,41,78,124,132,156,188,207,226,220],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,6,14,20,29,35,40,43,42,32,25,0],"height":[0,5,12,16.5,24,29,29,25,25,25,20,0],"propeller":true,"texture":[2,3,8,11,63,2,11,2,8,13,17],"laser":{"damage":[90,100],"rate":2,"type":2,"speed":[190,210],"number":1,"error":0}},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-65,"z":18.5},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[0,4,42,72,69,96,120,150,155],"z":[0,0,0,0,5,8,8,8,5]},"width":[0,7,15,17,17,17,16,5,0],"height":[0,3,17,20,17,18,14,5,0],"texture":[2,9,11,17,2,3,63]},"strut1":{"section_segments":8,"offset":{"x":55,"y":24,"z":-10},"position":{"x":[0,0,0,0],"y":[-10,8,49,55],"z":[0,0,2,3]},"width":[0,6,7,0],"height":[0,12,14,0],"texture":[63,2,3]},"strut2":{"section_segments":8,"offset":{"x":60,"y":90,"z":28},"position":{"x":[0,0,0,0],"y":[0,8,42,45],"z":[0,0,2,3]},"width":[0,5,6,0],"height":[0,7,8,0],"texture":[63,13,17]},"cannon2":{"section_segments":6,"offset":{"x":53,"y":65,"z":-15},"position":{"x":[0,0,0,0,0,0],"y":[-81,-108,-54,0,27,40.5],"z":[0,0,0,0,0,0]},"width":[0,5.2,11.7,14.3,9.1,0],"height":[0,5,9,11,10,0],"texture":[4,4,10,13,16.9],"laser":{"damage":[5,8],"rate":6,"type":1,"speed":[190,190],"number":1,"angle":2.5},"propeller":1},"cannon":{"section_segments":8,"offset":{"x":20,"y":80,"z":28},"propeller":1,"position":{"x":[0,0,0,0,0,0,0],"y":[-100,-90,-50,-20,20,50,50],"z":[-10,-10,0,0,0,0,0]},"width":[0,4,10,11,10,8,0],"height":[0,5,20,22,23,10,0],"angle":0,"texture":[3,4,10,2,13,17],"laser":{"damage":[10,15],"rate":4,"type":1,"speed":[190,190],"number":1,"error":1}}},"wings":{"bridge1":{"length":[10,23],"width":[20,218,100],"angle":[0,0],"position":[90,30,65],"doubleside":true,"texture":[63,3],"bump":{"position":40,"size":12.3},"offset":{"x":10,"y":-57,"z":5}},"bridge2":{"length":[0,55,0,2,11],"width":[0,122,36,105,105,30],"angle":[0,-30,-20,0,-10],"position":[0,13,35,10,15,30],"doubleside":true,"texture":[1,11,17,63,2],"bump":{"position":17,"size":11},"offset":{"x":18,"y":55,"z":27.2}},"main":{"length":[65],"width":[57,30],"angle":[-10,0],"position":[0,32],"doubleside":true,"texture":[63],"bump":{"position":30,"size":12},"offset":{"x":0,"y":86,"z":39}}},"typespec":{"name":"Sinistyte","level":6,"model":20,"code":620,"specs":{"shield":{"capacity":[150,200],"reload":[7,9]},"generator":{"capacity":[130,160],"reload":[30,38]},"ship":{"mass":200,"speed":[110,120],"rotation":[50,70],"acceleration":[115,125]}},"shape":[3,3.437,3.103,2.442,2.048,1.781,1.61,1.795,1.775,1.672,1.601,1.558,1.549,1.582,1.743,1.873,2.058,2.318,2.69,3.073,3.356,3.691,3.693,3.325,3.308,2.919,3.308,3.325,3.693,3.691,3.356,3.073,2.69,2.318,2.058,1.873,1.743,1.582,1.549,1.558,1.601,1.672,1.775,1.795,1.61,1.781,2.048,2.442,3.103,3.437],"lasers":[{"x":0,"y":-3,"z":-0.025,"angle":0,"damage":[90,100],"rate":2,"type":2,"speed":[190,210],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.325,"y":-1.075,"z":-0.375,"angle":0,"damage":[5,8],"rate":6,"type":1,"speed":[190,190],"number":1,"spread":2.5,"error":0,"recoil":0},{"x":-1.325,"y":-1.075,"z":-0.375,"angle":0,"damage":[5,8],"rate":6,"type":1,"speed":[190,190],"number":1,"spread":2.5,"error":0,"recoil":0},{"x":0.5,"y":-0.5,"z":0.7,"angle":0,"damage":[10,15],"rate":4,"type":1,"speed":[190,190],"number":1,"spread":0,"error":1,"recoil":0},{"x":-0.5,"y":-0.5,"z":0.7,"angle":0,"damage":[10,15],"rate":4,"type":1,"speed":[190,190],"number":1,"spread":0,"error":1,"recoil":0}],"radius":3.693}}';
    Ship.Deadshot_621 = '{"name":"Deadshot","level":6,"model":21,"size":1.35,"zoom":1,"specs":{"shield":{"capacity":[200,255],"reload":[7,9]},"generator":{"capacity":[180,215],"reload":[20,45]},"ship":{"mass":185,"speed":[80,108],"rotation":[40,65],"acceleration":[100,130]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":30,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-105,-110,-100,-80,-50,0,30,70,80,75],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,14,19,25,25,30,30,20,0],"height":[0,12,18,19,20,20,24,24,20,0],"texture":[17,4,63,3,11,2,3,12,17],"propeller":true,"laser":{"damage":[15,25],"rate":7,"type":1,"speed":[150,180],"number":1,"error":0}},"cannon":{"section_segments":6,"offset":{"x":0,"y":-10,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[8,15],"rate":9,"type":1,"speed":[160,200],"number":1,"error":0}},"side":{"section_segments":8,"offset":{"x":25,"y":0,"z":0},"position":{"x":[-17,-12,-3,0,0,0,0,0,0,0,0],"y":[-70,-60,-30,-5,5,20,35,55,75,90,85],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,12,15,15,15,15,15,15,10,0],"height":[0,5,7,10,10,10,10,10,10,7,0],"texture":[3,4,10,3,63,4,11,63,3,4],"propeller":false},"intake":{"section_segments":12,"offset":{"x":25,"y":0,"z":7},"position":{"x":[-10,-3,-2,-2,-2,4,7,0,0,0],"y":[-60,-20,0,35,60,70,85,95,100],"z":[-2,-6,0,0,0,0,0,0,0,0]},"width":[0,9,10,10,17,17,20,5,0],"height":[0,12,10,10,10,10,10,5,0],"texture":[13,4,63,18,2,3,4,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":-20,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-45,-20,0,30,50,90,125],"z":[-2,-4,-5,0,0,0,0,0]},"width":[2,12,15,17,17,15,0],"height":[0,12,19,16,15,15,0],"texture":[9,9,9,10,4,63],"propeller":false},"propulsor":{"section_segments":10,"offset":{"x":40,"y":58,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-30,-24,-28,-15,-10,10,30,40,50,60,55],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,4,6,11,12,13,13,13,11,8,0],"height":[0,4,6,11,12,13,13,13,11,8,0],"texture":[3,4,3,4,11,3,63,4,4,17],"propeller":true},"propulsor2":{"section_segments":12,"offset":{"x":15,"y":68,"z":20},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-60,-54,-48,-35,-20,0,25,40,50,60,55],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,4,6,11,12,13,13,13,11,8,0],"height":[0,4,6,11,12,13,13,13,11,8,0],"texture":[4,63,3,4,63,10,4,3,63,17],"propeller":true}},"wings":{"main":{"doubleside":1,"offset":{"x":0,"y":60,"z":0},"length":[50,20,20],"width":[70,50,50,50],"texture":[3,63,4],"angle":[0,0,0],"position":[-50,30,30,50],"bump":{"position":10,"size":5}},"main2":{"doubleside":true,"offset":{"x":10,"y":-60,"z":-5},"length":[0,20,20],"width":[0,160,140,70],"angle":[0,0,0,0],"position":[0,0,0,50],"texture":[63,3.5,63],"bump":{"position":20,"size":5}},"winglet":{"length":[10,20],"width":[50,50,40],"angle":[25,25],"position":[80,90,120],"texture":[2,4],"bump":{"position":10,"size":10},"offset":{"x":25,"y":-20,"z":25}},"winglet2":{"length":[20,10],"width":[30,30,20],"angle":[20,20],"position":[0,5,20],"texture":[3,4],"bump":{"position":10,"size":5},"offset":{"x":20,"y":-10,"z":5}}},"typespec":{"name":"Deadshot","level":6,"model":21,"code":621,"specs":{"shield":{"capacity":[200,255],"reload":[7,9]},"generator":{"capacity":[180,215],"reload":[20,45]},"ship":{"mass":185,"speed":[80,108],"rotation":[40,65],"acceleration":[100,130]}},"shape":[2.164,3.79,3.637,3.064,2.561,2.211,1.996,1.828,1.662,1.532,1.445,1.394,1.359,1.36,1.391,1.448,1.509,1.577,3.037,3.806,4.381,3.932,3.525,3.439,3.511,3.463,3.511,3.439,3.525,3.932,4.381,3.806,3.037,1.577,1.509,1.448,1.391,1.36,1.359,1.394,1.445,1.532,1.662,1.828,1.996,2.211,2.561,3.064,3.637,3.79],"lasers":[{"x":0,"y":-2.16,"z":0,"angle":0,"damage":[15,25],"rate":7,"type":1,"speed":[150,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-1.62,"z":-0.27,"angle":0,"damage":[8,15],"rate":9,"type":1,"speed":[160,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.381}}';
    Ship.Chimera_622 = '{"name":"Chimera","level":6,"model":22,"size":1.69,"zoom":0.8,"specs":{"shield":{"capacity":[260,315],"reload":[8,10]},"generator":{"capacity":[190,250],"reload":[30,45]},"ship":{"mass":220,"speed":[90,110],"rotation":[40,62],"acceleration":[90,125]}},"bodies":{"rail1":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[-10,-15,-15,0,0,0,0,0],"y":[-117,-105,-60,0,70,105,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,5,25,25,15,0],"height":[0,10,15,20,25,15,0],"propeller":false,"texture":[63,3,18,11,3,12]},"side_propulsors":{"section_segments":10,"offset":{"x":22,"y":17,"z":9.8},"position":{"x":[0,0,0,0,0,0,0,0,-5,-5],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,18,20,13,15,18,10,0],"height":[0,10,15,18,20,13,15,18,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"rail2":{"section_segments":8,"offset":{"x":0,"y":0,"z":10},"position":{"x":[10,15,15,0,0,0,0,0],"y":[-117,-105,-60,0,70,105,90],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,5,25,25,15,0],"height":[0,10,15,20,25,15,0],"propeller":true,"texture":[63,3,18,11,3,12]},"gunDeco0":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":101},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco1":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":90},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco2":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":79},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco3":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":68},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"gunDeco4":{"vertical":true,"section_segments":24,"offset":{"x":2,"y":-5,"z":57},"position":{"x":[0,10,10,0],"y":[0,10,20,30],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"propeller":false,"texture":[17,17,17,17]},"railCells":{"vertical":true,"section_segments":8,"offset":{"x":0,"y":10,"z":35},"position":{"x":[0,0,0,0],"y":[0,0,20,20],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"propeller":false,"texture":[8,8,17,17]},"sparkGuns":{"section_segments":8,"offset":{"x":15,"y":-90,"z":10},"position":{"x":[0,0,0,0],"y":[0,0,10,9],"z":[0,0,0,0]},"width":[0,10,10,0],"height":[0,10,10,0],"angle":90,"propeller":false,"texture":[8,8,17,17],"laser":{"damage":[1,2],"rate":10,"type":2,"speed":[10,20],"number":5,"error":65}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":5,"z":25},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,45,70],"z":[0,0,0,0,1]},"width":[0,8,12,13,0],"height":[0,12,15,12,0],"propeller":false,"texture":[4,9,9,4]},"cannon":{"section_segments":8,"offset":{"x":0,"y":-10,"z":10},"position":{"x":[0,0,0,0,0,0],"y":[-43,-50,-20,0,20,50],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,15,0],"height":[0,5,15,15,10,0],"angle":0,"laser":{"damage":[3,6],"speed":[150,200],"rate":1.69,"type":1,"number":30,"recoil":8,"error":0},"propeller":false,"texture":[17,3,3,3,3,3]},"deco":{"section_segments":8,"offset":{"x":45,"y":50,"z":-10},"position":{"x":[0,0,5,5,0,0],"y":[-52,-50,-20,0,20,25],"z":[0,0,0,0,0,0]},"width":[0,5,10,10,5,0],"height":[0,5,8,10,8,0],"angle":1,"laser":{"damage":[4,8],"rate":5,"type":1,"speed":[100,150],"number":1,"error":0},"texture":10}},"wings":{"main":{"length":[55,15],"width":[70,50,50],"angle":[-10,20],"position":[30,50,70],"doubleside":true,"bump":{"position":30,"size":10},"texture":[18,63],"offset":{"x":0,"y":0,"z":5}},"winglets":{"length":[12,8],"width":[20,15,65],"angle":[10,-10],"position":[-50,-40,-55],"doubleside":true,"bump":{"position":0,"size":30},"texture":63,"offset":{"x":12,"y":0,"z":5}},"stab1":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":0,"y":0,"z":0}},"stab2":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":-5,"y":-30,"z":0}},"stab3":{"length":[40,10],"width":[50,20,20],"angle":[40,30],"position":[70,75,80],"doubleside":true,"texture":63,"bump":{"position":0,"size":20},"offset":{"x":-10,"y":-60,"z":0}}},"typespec":{"name":"Railgun","level":6,"model":22,"code":622,"specs":{"shield":{"capacity":[260,315],"reload":[8,10]},"generator":{"capacity":[190,250],"reload":[30,45]},"ship":{"mass":220,"speed":[90,110],"rotation":[40,62],"acceleration":[90,125]}},"shape":[3.509,3.969,3.598,3.146,2.516,1.995,1.675,1.467,1.317,0.915,0.874,0.853,1.66,1.752,1.881,2.076,2.301,2.85,3.163,3.619,3.954,3.116,3.319,3.399,3.585,3.556,3.585,3.399,3.319,3.116,3.954,3.619,3.163,2.85,2.301,2.076,1.881,1.752,1.66,0.853,0.874,0.915,1.317,1.467,1.675,1.995,2.516,3.146,3.598,3.969],"lasers":[{"x":0.507,"y":-3.042,"z":0.338,"angle":90,"damage":[1,2],"rate":10,"type":2,"speed":[10,20],"number":5,"spread":0,"error":65,"recoil":0},{"x":-0.507,"y":-3.042,"z":0.338,"angle":-90,"damage":[1,2],"rate":10,"type":2,"speed":[10,20],"number":5,"spread":0,"error":65,"recoil":0},{"x":0,"y":-2.028,"z":0.338,"angle":0,"damage":[3,6],"rate":1.69,"type":1,"speed":[150,200],"number":30,"spread":0,"error":0,"recoil":8},{"x":1.49,"y":-0.067,"z":-0.338,"angle":1,"damage":[4,8],"rate":5,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.49,"y":-0.067,"z":-0.338,"angle":-1,"damage":[4,8],"rate":5,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.969}}';
    Ship.Vampire_623 = '{"name":"Vampire","designer":"nex","level":6,"model":23,"size":1.5,"specs":{"shield":{"capacity":[230,275],"reload":[6,9]},"generator":{"capacity":[190,225],"reload":[35,50]},"ship":{"mass":170,"speed":[120,130],"rotation":[90,90],"acceleration":[120,120]}},"bodies":{"main_DOESNOTSHOOT":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-35,-45,-15,10,30,45,70,100,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,10,15,25,15,15,25,20,0],"height":[0,6,13,17,13,13,17,13,0],"texture":[3,11,1,63,4,3,8,17],"propeller":true},"boris":{"section_segments":8,"offset":{"x":20,"y":30,"z":-5},"position":{"x":[0,0,-1,0,0,0,10,0,0],"y":[-105,-97,-80,-60,-20,0,20,50,40],"z":[-6.6,-10,-10,-10,0,0,0,0,0]},"width":[0,7,10,10,8,14,15,15,0],"height":[0,6,8,12,8,13,13,13,0],"texture":[6,4,1,10,8,4,13,17],"propeller":false,"angle":5,"laser":{"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"error":25,"angle":0,"recoil":15}},"propeller":{"section_segments":8,"offset":{"x":24,"y":25,"z":-5},"position":{"x":[0,0],"y":[41,40],"z":[0,0]},"width":[15,0],"height":[11,0],"texture":[69],"propeller":true,"angle":5},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-1,"z":5},"position":{"x":[0,0,0,0,0,0],"y":[-40,-25,-5,20,30,20],"z":[0,0,0,3,0,0]},"width":[0,9,12,17,10,0],"height":[0,8,12,14,13,0],"texture":[3,9,9,4],"propeller":false}},"wings":{"holy_moly_its_goku":{"offset":{"x":29,"y":44,"z":0},"length":[25,30],"width":[60,35,20],"angle":[-30,-20],"position":[0,10,25],"texture":[11,4],"doubleside":true,"bump":{"position":0,"size":10}},"what_no_way":{"offset":{"x":5,"y":45,"z":0},"length":[30,30],"width":[60,35,20],"angle":[30,20],"position":[0,15,35],"texture":[11,4],"doubleside":true,"bump":{"position":0,"size":10}},"teeth":{"offset":{"x":8,"y":-60,"z":-19},"length":[10,-10,25],"width":[15,15,55,25],"angle":[-30,-30,-20],"position":[10,3,-20,10],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}},"backteeth":{"offset":{"x":33,"y":60,"z":-10},"length":[30,-10,30],"width":[25,15,55,20],"angle":[-28,-20,-30],"position":[-20,-30,-40,-10],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}},"somanyteeth":{"offset":{"x":15,"y":10,"z":-5},"length":[10,-10,25],"width":[15,15,55,20],"angle":[30,30,50],"position":[-10,-20,-30,0],"texture":[4,13,63],"doubleside":true,"bump":{"position":10,"size":15}}},"typespec":{"name":"Vampire","level":6,"model":23,"code":623,"specs":{"shield":{"capacity":[230,275],"reload":[6,9]},"generator":{"capacity":[190,225],"reload":[35,50]},"ship":{"mass":170,"speed":[120,130],"rotation":[90,90],"acceleration":[120,120]}},"shape":[1.829,3.234,2.747,2.384,2.136,1.76,1.481,1.028,0.933,0.896,0.885,1.531,1.62,1.758,1.943,2.226,2.604,2.82,3.244,3.348,3.231,3.146,2.667,3.059,3.054,3.006,3.054,3.059,2.667,3.146,3.231,3.348,3.244,2.82,2.604,2.226,1.943,1.758,1.62,1.531,0.885,0.896,0.933,1.028,1.481,1.76,2.136,2.384,2.747,3.234],"lasers":[{"x":0.325,"y":-2.238,"z":-0.15,"angle":5,"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"spread":0,"error":25,"recoil":15},{"x":-0.325,"y":-2.238,"z":-0.15,"angle":-5,"damage":[4,8],"rate":1,"type":2,"speed":[140,180],"number":15,"spread":0,"error":25,"recoil":15}],"radius":3.348}}';
    game.custom.SDCships = true;
}
//Admin ship
Ship.Valkyrie_791 = '{"name":"Valkyrie","designer":"BASIT","level":7.9,"model":1,"size":1.15,"specs":{"shield":{"capacity":[1000,1000],"reload":[1e+308,1e+308]},"generator":{"capacity":[10000,10000],"reload":[1e+308,1e+308]},"ship":{"mass":1000,"speed":[110,110],"rotation":[130,130],"acceleration":[180,180]}},"bodies":{"chin":{"section_segments":6,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-60,-57,-30,-5,20,60,110,110,90],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,15,25,27,30,40,30,28.5,0],"height":[0,10,15,15,10,15,10,8.5,0],"texture":[4.9,4.9,4.9,48.9,4.9,48.9,16.9,16.9],"propeller":true},"shield":{"section_segments":4,"offset":{"x":10,"y":-58,"z":-3},"position":{"x":[-30,-20,0,0,-20,-30],"y":[-70,-60,-20,20,60,70],"z":[0,0,0,0,0,0]},"width":[0,10,17,17,10,0],"height":[0,20,24,24,20,0],"texture":[49,5,5,5,49],"propeller":true,"angle":90},"plate":{"section_segments":12,"offset":{"x":0,"y":-20,"z":-55},"position":{"x":[0,0,0,0,0,0],"y":[-40,-40,-30,-20],"z":[0,0,0,0,0,0]},"width":[0,35,45,0],"height":[0,35,45,0],"texture":[5,49,4,4],"propeller":false,"vertical":true,"angle":180},"plus_sign1":{"section_segments":6,"offset":{"x":0.1,"y":55,"z":21},"position":{"x":[0,0,0,0],"y":[-28,-25,25,28],"z":[0,0,0,0]},"width":[5,8,8,5],"height":[0,0,0,0],"texture":[5,5,5],"propeller":false,"vertical":false,"angle":45},"plus_sign1_2":{"section_segments":6,"offset":{"x":0.01,"y":55,"z":20.5},"position":{"x":[0,0,0,0],"y":[-30,-25,25,30],"z":[0,0,0,0]},"width":[5,10,10,5],"height":[0,0,0,0],"texture":[49],"propeller":false,"vertical":false,"angle":45},"wing_base":{"section_segments":4,"offset":{"x":120,"y":115,"z":10},"position":{"x":[0,0,-15,-25,-10,5,10],"y":[-130,-95,-70,-40,0,30,35],"z":[0,0,10,20,30,35,35]},"width":[0,10,11,17,12,10,0],"height":[0,10,10,13,10,7,0],"texture":5,"propeller":false,"angle":45},"wing_base_shade":{"section_segments":4,"offset":{"x":119,"y":121,"z":2.5},"position":{"x":[0,0,-15,-25,-10,5,10],"y":[-130,-95,-70,-40,0,30,35],"z":[0,0,10,20,30,35,35]},"width":[0,10,11,17,12,10,0],"height":[0,10,10,13,10,7,0],"texture":49,"propeller":false,"angle":45},"wing_base_shade2":{"section_segments":4,"offset":{"x":119,"y":121,"z":0.5},"position":{"x":[0,0,-15,-25,-10,5,10],"y":[-130,-95,-70,-40,0,30,35],"z":[0,0,10,20,30,35,35]},"width":[0,10,11,17,12,10,0],"height":[0,10,10,13,10,7,0],"texture":5,"propeller":false,"angle":45},"healinglaser1":{"section_segments":8,"offset":{"x":20,"y":-45,"z":-2},"position":{"x":[-10,-8,0,5,5,5,5,20],"y":[-95,-70,-50,-40,-20,-10,60,110],"z":[-15,-10,-10,-10,-10,-5,0,0]},"width":[0,4,6,7,7,5,10,5],"height":[0,4,6,7,7,5,5,5],"texture":[49,49,49,5,5,49,5],"propeller":false,"angle":0,"laser":{"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"error":0,"angle":0,"recoil":0}},"healinglaser2":{"section_segments":8,"offset":{"x":20,"y":-50,"z":-2},"position":{"x":[-10,-8,0,5,5,5,5,20],"y":[-95,-70,-50,-40,-20,-10,60,110],"z":[-15,-10,-10,-10,-10,-5,0,0]},"width":[0,4,6,7,7,5,10,5],"height":[0,4,6,7,7,5,5,5],"texture":[49,49,49,49,5,5,5],"propeller":false,"angle":-4,"laser":{"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"error":0,"angle":0,"recoil":0}},"healinglaser3":{"section_segments":8,"offset":{"x":20,"y":-55,"z":-2},"position":{"x":[-10,-8,0,5,5,5,5,20],"y":[-95,-70,-50,-40,-20,-10,60,110],"z":[-15,-10,-10,-10,-10,-5,0,0]},"width":[0,4,6,7,7,5,10,5],"height":[0,4,6,7,7,5,5,5],"texture":[49,49,49,49,5,5,5],"propeller":false,"angle":-8,"laser":{"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"error":0,"angle":0,"recoil":0}},"healinglaser4":{"section_segments":8,"offset":{"x":20,"y":-60,"z":-2},"position":{"x":[-10,-8,0,5,5,5,5,20],"y":[-95,-70,-50,-40,-20,-10,60,110],"z":[-15,-10,-10,-10,-10,-5,0,0]},"width":[0,4,6,7,7,5,10,5],"height":[0,4,6,7,7,5,5,5],"texture":[49,49,49,49,5,5,5],"propeller":false,"angle":-12,"laser":{"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"error":0,"angle":0,"recoil":0}},"healinglaser5":{"section_segments":8,"offset":{"x":0,"y":-50,"z":0},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-95,-70,-50,-40,-20,-10,60,140],"z":[-10,-10,-10,-10,-10,-5,0,0]},"width":[0,4,5,7,7,5,10,5],"height":[0,4,5,7,7,5,5,5],"texture":[49,5,49,5],"propeller":false,"angle":0,"laser":{"damage":[500,500],"rate":0.5,"type":1,"speed":[150,150],"number":10,"error":0,"angle":0,"recoil":0}}},"wings":{"main1":{"offset":{"x":20,"y":90,"z":-5},"length":[30,0,35],"width":[30,40,160,90],"angle":[0,100,-30],"position":[-30,-20,-40,-10],"texture":[5,49,49],"doubleside":true,"bump":{"position":20,"size":10}},"main2":{"offset":{"x":22,"y":85,"z":-5},"length":[30,0,35],"width":[30,40,160,90],"angle":[0,100,-30],"position":[-30,-20,-40,-10],"texture":[5],"doubleside":true,"bump":{"position":20,"size":5}},"main3":{"offset":{"x":23,"y":80,"z":-5},"length":[30,0,40],"width":[30,40,160,100],"angle":[0,100,-30],"position":[-30,-20,-40,0],"texture":[49],"doubleside":true,"bump":{"position":20,"size":0}},"fang1":{"offset":{"x":18,"y":-95,"z":-8},"length":[-10,25],"width":[0,90,100],"angle":[-20,-20],"position":[0,15,0],"texture":[4,5],"doubleside":true,"bump":{"position":20,"size":30}},"fang1_2":{"offset":{"x":20,"y":-95.7,"z":-8},"length":[-10,25],"width":[0,90,100],"angle":[-20,-20],"position":[0,15,0],"texture":[49],"doubleside":true,"bump":{"position":20,"size":29}},"fang1_3":{"offset":{"x":20.7,"y":-95,"z":-8},"length":[-10,25],"width":[0,90,100],"angle":[-20,-20],"position":[0,15,0],"texture":[4,5],"doubleside":true,"bump":{"position":20,"size":28}},"fang2":{"offset":{"x":34.7,"y":-73,"z":-10},"length":[-10,15,15],"width":[0,40,60,0],"angle":[0,0,30],"position":[0,10,0,30],"texture":[49],"doubleside":true,"bump":{"position":20,"size":20}},"fang3":{"offset":{"x":36,"y":-78,"z":-10},"length":[-10,15,15],"width":[0,40,60,0],"angle":[0,0,30],"position":[0,10,0,30],"texture":[5],"doubleside":true,"bump":{"position":20,"size":10}},"fang4":{"offset":{"x":37,"y":-82,"z":-10},"length":[-10,15,15],"width":[0,40,60,0],"angle":[0,0,30],"position":[0,10,0,30],"texture":[49],"doubleside":true,"bump":{"position":20,"size":0}},"feather1":{"offset":{"x":75,"y":100,"z":25.1},"length":[100,10],"width":[40,20,0],"angle":[12,9],"position":[0,30,35],"texture":[5,5],"doubleside":true,"bump":{"position":20,"size":15}},"feather1_2":{"offset":{"x":75,"y":100,"z":26},"length":[100,10],"width":[40,20,0],"angle":[12,9],"position":[0,30,35],"texture":[49],"doubleside":true,"bump":{"position":20,"size":0}},"feather2":{"offset":{"x":60,"y":80,"z":17},"length":[110,10],"width":[40,20,0],"angle":[10,-9],"position":[0,10,20],"texture":[5],"doubleside":true,"bump":{"position":20,"size":15}},"feather2_1":{"offset":{"x":60,"y":80,"z":18},"length":[110,10],"width":[40,20,0],"angle":[10,-9],"position":[0,10,20],"texture":[49],"doubleside":true,"bump":{"position":20,"size":0}},"feather3":{"offset":{"x":62,"y":70,"z":11},"length":[83,10],"width":[40,20,0],"angle":[10,-9],"position":[0,-10,-13],"texture":[5],"doubleside":true,"bump":{"position":20,"size":15}},"feather3_2":{"offset":{"x":62,"y":70,"z":12},"length":[83,10],"width":[40,20,0],"angle":[10,-9],"position":[0,-10,-13],"texture":[49],"doubleside":true,"bump":{"position":20,"size":0}},"feather4":{"offset":{"x":60,"y":45,"z":5},"length":[60,10],"width":[40,20,0],"angle":[5,-9],"position":[10,-12,-15],"texture":[5],"doubleside":true,"bump":{"position":20,"size":15}},"feather4_2":{"offset":{"x":60,"y":45,"z":6},"length":[60,10],"width":[40,20,0],"angle":[5,-9],"position":[10,-12,-15],"texture":[49],"doubleside":true,"bump":{"position":20,"size":0}},"cockpit":{"offset":{"x":0,"y":-15,"z":13.5},"length":[12,10],"width":[46,30,0],"angle":[-7,-20],"position":[0,0,10],"texture":[49,5],"doubleside":true,"bump":{"position":30,"size":16}},"cockpit_top":{"offset":{"x":0,"y":5,"z":20},"length":[12,15],"width":[30,30,70],"angle":[0,-60],"position":[0,0,15],"texture":[5],"doubleside":true,"bump":{"position":30,"size":10}}},"typespec":{"name":"Valkyrie","level":7.9,"model":1,"code":791,"specs":{"shield":{"capacity":[1000,1000],"reload":[1e+308,1e+308]},"generator":{"capacity":[10000,10000],"reload":[1e+308,1e+308]},"ship":{"mass":1000,"speed":[110,110],"rotation":[130,130],"acceleration":[180,180]}},"shape":[3.335,3.539,3.631,2.751,2.451,2.12,1.894,1.929,1.952,1.941,1.949,1.584,1.673,1.799,3.061,3.769,4.641,5.112,5.225,4.693,4.177,3.52,3.261,2.6,2.576,2.535,2.576,2.6,3.261,3.52,4.177,4.693,5.225,5.112,4.641,3.769,3.061,1.799,1.673,1.584,1.949,1.941,1.952,1.929,1.894,2.12,2.451,2.751,3.631,3.539],"lasers":[{"x":0.23,"y":-3.22,"z":-0.046,"angle":0,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":-0.23,"y":-3.22,"z":-0.046,"angle":0,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":0.383,"y":-3.346,"z":-0.046,"angle":-4,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":-0.383,"y":-3.346,"z":-0.046,"angle":4,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":0.536,"y":-3.461,"z":-0.046,"angle":-8,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":-0.536,"y":-3.461,"z":-0.046,"angle":8,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":0.689,"y":-3.565,"z":-0.046,"angle":-12,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":-0.689,"y":-3.565,"z":-0.046,"angle":12,"damage":[5,5],"rate":10,"type":1,"speed":[10,10],"number":10,"spread":0,"error":0,"recoil":0},{"x":0,"y":-3.335,"z":0,"angle":0,"damage":[500,500],"rate":0.5,"type":1,"speed":[150,150],"number":10,"spread":0,"error":0,"recoil":0}],"radius":5.225}}';
Ship.Megalodon_792 = '{"name":"Megalodon","designer":"Basit","level":7.9,"model":2,"size":4.4,"specs":{"shield":{"capacity":[10000,10000],"reload":[1e+308,1e+308]},"generator":{"capacity":[10000,10000],"reload":[1e+308,1e+308]},"ship":{"mass":9999,"speed":[160,160],"rotation":[360,360],"acceleration":[160,160]}},"bodies":{"thrustcannon":{"section_segments":0,"offset":{"x":30,"y":15,"z":-12},"position":{"x":[0,0,0,0,0,0],"y":[-10,0,10],"z":[0,0,0]},"width":[0,2,2],"height":[0,2,2],"angle":180,"propeller":false,"texture":[17,3],"laser":{"damage":[0.001,0.001],"rate":2,"type":1,"speed":[500,500],"number":1,"error":0,"angle":180,"recoil":360}},"main1":{"section_segments":12,"offset":{"x":0,"y":30,"z":0},"position":{"x":[-4,-4,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-75,-63,-55,-40,-20,-12,0,15,30,40,55,70,90],"z":[3,3,0,0,0,0,0,0,1,3.5,4,6,8,10]},"width":[0,15,20,22,24,22.5,21,17.5,13,10.6,9,7,4,0],"height":[0,5,14,18,20,20,19,16.5,13,9,7,6,3,0],"texture":[5,4],"propeller":false,"laser":{"damage":[100,100],"rate":1,"type":1,"speed":[250,250],"number":10,"error":0,"angle":0,"recoil":0}},"main2":{"section_segments":0,"offset":{"x":0,"y":30,"z":0},"position":{"x":[-4,-4,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-75,-63,-55,-40,-20,-12,0,15,30,40,55,70,90],"z":[3,3,0,0,0,0,0,0,1,3.5,4,6,8,10]},"width":[0,15,20,22,24,22.5,21,17.5,13,10.6,9,7,4,0],"height":[0,5,14,18,20,20,19,16.5,13,9,7,6,3,0],"texture":[5,4],"propeller":false,"laser":{"damage":[100,100],"rate":1,"type":1,"speed":[250,250],"number":10,"error":0,"angle":0,"recoil":0}},"upperjaw":{"section_segments":18,"offset":{"x":0,"y":-16,"z":35},"position":{"x":[0,0,0,0,0,0,0],"y":[-35,-35,-37,-37,-30,-25,-20],"z":[0,0,0,0,0,0,0]},"width":[0,8,11,11,20,23,0],"height":[0,15,20,40,60,55,0],"texture":[63,4,2,4,3,1],"propeller":0,"angle":180,"vertical":1},"lowerjaw1":{"section_segments":16,"offset":{"x":0,"y":24,"z":24},"position":{"x":[0,0,0,0,0,0,0],"y":[-31,-31,-25,-20],"z":[0,0,0,0,0,0,0]},"width":[0,20,18,0],"height":[0,50,40,0],"texture":[3,63,5],"propeller":0,"angle":0,"vertical":true},"upperjaw2":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":30,"z":13},"position":{"x":[0,0,0,0,0,0,0],"y":[-120,-80,-65,-45,-20,10,10],"z":[0,0,0,0,-2,-5,-5]},"width":[0,21,23,22,18,12,0],"height":[0,5,5,5,7,1,0],"texture":2,"propeller":0},"lowerjaw2":{"section_segments":16,"offset":{"x":0,"y":-38,"z":24},"position":{"x":[0,0,0,0,0,0,0,0],"y":[-31,-31,-26,-22,-19],"z":[0,0,0,0,-10,0]},"width":[0,20,18,10,0],"height":[0,50,40,20,0],"texture":[3,3,4],"propeller":0,"angle":180,"vertical":true},"lowerjaw3":{"section_segments":12,"offset":{"x":0,"y":35,"z":-9},"position":{"x":[0,0,0,0,0,0,0],"y":[-90,-70,-55,-45,-20,10,-12],"z":[0,0,0,0,5.5,8.5,8.5]},"width":[5,18,18,18,16,12,0],"height":[0,8,10,8,10,4,0],"texture":4},"upperteeths":{"section_segments":4,"angle":0,"offset":{"x":14,"y":-55,"z":-6},"position":{"x":[-14,-10.5,-7,-5,-3,-2,-1,0,0.5,1.5,2,2.5,2.5],"y":[-16,-15,-12,-9,-6,-3,0,3,6,9,12,15,18],"z":[0,5,0,5,0,5,0,5,0,5,0,5,0]},"width":[0,2,1,2,1,2,1,2,1,2,1,2,0],"height":[0,5,2,5,2,5,2,5,2,5,2,5,0],"texture":[49]},"lowerteeths":{"section_segments":4,"angle":0,"offset":{"x":13,"y":-58,"z":10},"position":{"x":[-13,-13,-9,-6,-3,-2,-1,0,0.5,1.5,2,2.5,2.5],"y":[-13,-13,-12,-9,-6,-3,0,3,6,9,12,15,18],"z":[0,-5,0,-5,0,-5,0,-5,0,-5,0,-5,0]},"width":[0,2,1,2,1,2,1,2,1,2,1,2,0],"height":[0,5,2,5,2,5,2,5,2,5,2,5,0],"texture":[49]},"detail1":{"section_segments":6,"angle":0,"offset":{"x":8,"y":7,"z":13},"position":{"x":[0,0,1,2,-9,-9],"y":[-10,-10,-15,15,50,50],"z":[-2,-2,-3,0,-3.5,-3.5]},"width":[0,3,3,3,2,0],"height":[0,3,3,3,2,0],"texture":2}},"wings":{"fin1":{"length":[0,6,6,6,10],"width":[30,30,25,22,17,4],"angle":[90,90,90,90,90],"position":[-15,-15,-12,-9,-2,16],"doubleside":true,"texture":63,"bump":{"position":-30,"size":15},"offset":{"x":0,"y":-8,"z":19}},"fin2":{"length":[30,15],"width":[45,20,10],"angle":[-30,-35],"position":[-15,10,23],"doubleside":true,"texture":[63,63],"bump":{"position":-30,"size":10},"offset":{"x":1,"y":-15,"z":10}},"fin3":{"length":[0,8,8,8,16],"width":[30,30,25,22,17,4],"angle":[90,90,90,90,90],"position":[-15,-15,-12,-9,-2,16],"doubleside":true,"texture":63,"bump":{"position":-30,"size":15},"offset":{"x":0,"y":125,"z":9}},"fin4":{"length":[0,8,8,8,8],"width":[30,30,25,22,17,9],"angle":[-90,-90,-90,-90,-90],"position":[-15,-15,-12,-9,-2,9],"doubleside":true,"texture":63,"bump":{"position":-30,"size":15},"offset":{"x":0,"y":125,"z":9}},"fin5":{"length":[20,5],"width":[15,10,7],"angle":[-40,-40],"position":[5,12,17],"doubleside":true,"texture":63,"bump":{"position":-30,"size":10},"offset":{"x":0,"y":45,"z":5}},"fin6":{"length":[15,5],"width":[15,10,7],"angle":[-90,-90],"position":[5,12,15],"doubleside":true,"texture":63,"bump":{"position":-60,"size":10},"offset":{"x":0,"y":60,"z":10}},"fin7":{"length":[8,3],"width":[15,10,7],"angle":[90,90],"position":[5,12,15],"doubleside":true,"texture":63,"bump":{"position":-60,"size":10},"offset":{"x":0,"y":65,"z":8}},"detail1":{"length":[10,5,-3],"width":[0,25,13,0],"angle":[90,90,90],"position":[0,0,0,6],"doubleside":true,"offset":{"x":0,"y":0,"z":9},"bump":{"position":-15,"size":20},"texture":[4,4,17,63]},"detail2":{"length":[10,5,-3],"width":[0,25,13,0],"angle":[90,90,90],"position":[0,0,0,6],"doubleside":true,"offset":{"x":0,"y":20,"z":6},"bump":{"position":-15,"size":20},"texture":[4,4,17,63]},"detail3":{"length":[10,5,-3],"width":[0,25,13,0],"angle":[90,90,90],"position":[0,0,0,6],"doubleside":true,"offset":{"x":0,"y":40,"z":3},"bump":{"position":-15,"size":20},"texture":[4,4,17,63]}},"typespec":{"name":"Megalodon","level":7.9,"model":2,"code":792,"specs":{"shield":{"capacity":[10000,10000],"reload":[1e+308,1e+308]},"generator":{"capacity":[10000,10000],"reload":[1e+308,1e+308]},"ship":{"mass":9999,"speed":[160,160],"rotation":[360,360],"acceleration":[160,160]}},"shape":[8.36,8.106,6.917,5.701,4.595,3.711,3.126,2.729,2.717,2.77,2.876,3.037,3.272,3.482,3.566,3.64,2.217,2.331,2.486,2.676,2.952,3.342,5.452,6.005,8.037,12.584,8.037,6.005,5.452,3.342,2.952,2.676,2.486,2.331,2.217,3.64,3.566,3.482,3.272,3.037,2.876,2.77,2.717,2.729,3.126,3.711,4.595,5.701,6.917,8.106],"lasers":[{"x":2.64,"y":2.2,"z":-1.056,"angle":180,"damage":[0.001,0.001],"rate":2,"type":1,"speed":[500,500],"number":1,"spread":180,"error":0,"recoil":360},{"x":-2.64,"y":2.2,"z":-1.056,"angle":-180,"damage":[0.001,0.001],"rate":2,"type":1,"speed":[500,500],"number":1,"spread":180,"error":0,"recoil":360},{"x":-0.352,"y":-3.96,"z":0,"angle":0,"damage":[100,100],"rate":1,"type":1,"speed":[250,250],"number":10,"spread":0,"error":0,"recoil":0},{"x":-0.352,"y":-3.96,"z":0,"angle":0,"damage":[100,100],"rate":1,"type":1,"speed":[250,250],"number":10,"spread":0,"error":0,"recoil":0}],"radius":12.584}}';


var ships = [];
for (let ship in Ship) ships.push(Ship[ship]);


const GameFunctions = {
    playerList: function () {
        game.modding.terminal.echo("[[g;#FFEE00;]Playerlist =]\n   [[g;#FFFFFF;]Total Players :][[ib;#FFFFFF;]  " + game.ships.length + " ]\n\n| [[b;#FFFFFF;]IDs] |  [[b;#FFFFFF;]PLAYER NAMEs]\n------+------------------");
        for (let i = 0; i < game.ships.length; i++) {
            let ship = game.ships[i];
            game.modding.terminal.echo(`|  [[g;#FF0000;]${i}]  |  [[g;#F9D800;]${ship.name}] ${ship.custom.cheater ? "[[g;#AA00FF;]Using Subspace]" : ""}`);
        }
    },
    Subspace_Detector: function (ship) {
        if (!ship.custom.cheater) {
            game.modding.terminal.echo(`[[g;#AA00FF;]Subspace hack alert:\n[[g;#ff0000;][[g;#F9D800;]${ship.name}] has been caught by using Subspace.]`);
            alert(ship, "You have been caught by using Subspace", "#AA00FF");
            if (GAME_OPTIONS.Subspace_allow) {
                game.modding.terminal.echo(`[[g;#AA00FF;]Subspace Action:\n  [[g;#ff0000;][[g;#F9D800;]${ship.name}] has not been kicked because Subspace is allow by map host.]`);
            } else {
                let angle = ship.r;
                let initial_dependency = 0;
                let speed = Math.sqrt(ship.vx ** 2 + ship.vy ** 2) + 0.1;
                if (initial_dependency) speed += Math.sqrt(ship.vx ** 2 + ship.vy ** 2) * initial_dependency;
                ship.set({ type: 102, vx: speed * Math.cos(angle), vy: speed * Math.sin(angle), idle: true, generator: 0, crystals: 0, shield: 0, collider: false, stats: 0 });
                ship.gameover({
                    "You have been caught": "using Subspace",
                    "If you want to duel then come without Subspace": " "
                });
                game.modding.terminal.echo(`[[g;#AA00FF;]Subspace Action:\n  [[g;#ff0000;][[g;#F9D800;]${ship.name}] has been kicked because Subspace is not allow by map host.]`);
            }
            ship.custom.cheater = true;
        } else return;
    }
};



Object.assign(GAME_OPTIONS, {
    Maxstats: 88888888,
    Maxshield: 1e4,
});

const ship_list = [
    101, // T1
    201, 202, // T2
    301, 302, 303, 304, // T3
    401, 402, 403, 404, 405, 406, // T4
    501, 502, 503, 504, 505, 506, 507, // T5
    ...(game.custom.removedships ? [508] : []),// Removed ship
    601, 602, 603, 604, 605, 606, 608, // T6
    ...(game.custom.removedships ? [609] : []),// Removed ship
    701, 702, 703, 704 // T7
];
const tracks = [
    "argon.mp3",
    "crystals.mp3",
    "warp_drive.mp3"
];
const vocabulary = [
    {
        text: "You", icon: "\u004e", key: "O"
    }, {
        text: "Me", icon: "\u004f", key: "E"
    }, {
        text: "Yes", icon: "\u004c", key: "Y"
    }, {
        text: "No", icon: "\u003d", key: "N"
    }, {
        text: "Hmm?", icon: "\u004b", key: "Q"
    }, {
        text: "Sorry", icon: "\u00a1", key: "S"
    }, {
        text: "Thanks", icon: "\u0041", key: "X"
    }, {
        text: "Duel", icon: "\u00be", key: "B"
    }, {
        text: "Wait", icon: "\u0048", key: "T"
    }, {
        text: "Follow", icon: "\u0050", key: "F"
    }, {
        text: "Attack", icon: "\u00b4", key: "A"
    }, {
        text: "Heal", icon: "\u0037", key: "H"
    }, {
        text: "Good Game", icon: "\u00a3", key: "G"
    }, {
        text: "Lag", icon: "\u00be", key: "V"
    }, {
        text: "Discord", icon: "\u007b", key: "D"
    }, {
        text: "Bruh", icon: "\u{1F480}", key: "I"
    }, {
        text: "My Ship", icon: "OI", key: "K"
    }, {
        text: "Gems", icon: "\u0044", key: "M"
    }, {
        text: "No Problem", icon: "\u0047", key: "P"
    }, {
        text: "Spectate", icon: "\u0059", key: "L"
    }
];
const GameUIsfunc = {
    customoptions: function (ship) {
        const ids = ["Next ship", "Prev ship", "Reset", "Spectate", game.custom.SDCships ? "Speedsters" : "A-Speedster", "TP Sun", "TP Random", "Stats"];
        const shc = ["1", "2", "3", "4", "5"];
        const lineMax = 4;
        const rowHeight = 11;

        if (ship.custom.option_screen === true) {
            if (ship.custom.a) {
                for (let i = 0, line = 0, row = 1; i < ids.length; i++) {
                    line++;
                    if (line > lineMax) {
                        line = 1;
                        row++;
                    }
                    const isShortcutVisible = i < 5;
                    ship.setUIComponent({
                        id: ids[i],
                        position: [13 + line * 12.8, 27.5 + row * rowHeight, 10, 8],
                        clickable: true,
                        visible: true,
                        shortcut: shc[i],
                        components: [
                            { type: "round", position: [-7.5, -22.5, 115, 147.5], fill: "rgba(0, 221, 255, 0.25)", stroke: "#00DDFF", width: 6 },
                            { type: "text", position: [5, 33, 90, 40], value: isShortcutVisible ? `${ids[i]} (${shc[i]})` : `${ids[i]}`, color: "#00DDFF" },
                        ],
                    });
                }
                ship.setUIComponent({
                    id: "box",
                    position: [23.5, 30, 53, 30],
                    visible: true,
                    components: [
                        { type: "box", position: [0, 0, 100, 100], fill: "rgba(0, 221, 255, 0.25)", stroke: "#00DDFF", width: 4 },
                        { type: "box", position: [0, 0, 100, 20], fill: "rgba(0, 221, 255, 0.35)", stroke: "#00DDFF", width: 3 },
                        { type: "text", position: [0, -1.5, 30, 20], value: `Options`, color: "#00DDFF" },
                    ],
                });
                ship.set({ idle: true, vx: 0, vy: 0 });
                ship.custom.option_screen = false;
            }
        } else {
            for (const id of ids) {
                ship.setUIComponent({ id, visible: false });
            }
            ship.setUIComponent({ id: "box", visible: false });
            ship.set({ idle: false });
            ship.custom.init = false;
            ship.custom.option_screen = true;
        }
    },
    NextShip: function (ship) {
        const currentIndex = ship_list.indexOf(ship.type);
        const nextIndex = (currentIndex + 1) % ship_list.length;
        const next_type = ship_list[nextIndex];

        let newType = next_type;
        let newCrystals = 20 * Math.trunc(next_type / 100) ** 2;

        if (ship.type === 101) {
            newType = 201;
            newCrystals = 80;
        } else if (ship.type === 102) {
            newType = 101;
            newCrystals = 20;
        } else if ([611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623].includes(ship.type)) {
            newType = 605;
            newCrystals = 720;
        }
        ship.set({
            type: newType, crystals: newCrystals, shield: GAME_OPTIONS.Maxshield, stats: GAME_OPTIONS.Maxstats, collider: true, vx: 0, vy: 0
        });
        ship.custom.last_ship_type = next_type;
    },
    PreviousShip: function (ship) {
        const currentIndex = ship_list.indexOf(ship.type);
        const previousIndex = (currentIndex - 1 + ship_list.length) % ship_list.length;
        const previous_type = ship_list[previousIndex];

        let newType = previous_type;
        let newCrystals = 20 * Math.trunc(previous_type / 100) ** 2;

        if (ship.type === 101) {
            newType = 704;
            newCrystals = 980;
        } else if (ship.type === 102) {
            newType = 101;
            newCrystals = 20;
        } else if ([611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623].includes(ship.type)) {
            newType = 605;
            newCrystals = 720;
        }
        ship.set({
            type: newType, crystals: newCrystals, shield: GAME_OPTIONS.Maxshield, stats: GAME_OPTIONS.Maxstats, collider: true, vx: 0, vy: 0
        });
        ship.custom.last_ship_type = newType;
    }
};

Object.assign(GameFunctions, GameUIsfunc);


function alert(ship, message = "", color = "#FFFFFF", duration = 2500) {
    ship.setUIComponent({
        id: "alert",
        position: [0, 60, 100, 100],
        clickable: false,
        visible: true,
        components: [{ type: "text", position: [0, 16, 100, 4], color, value: message, align: "center" }]
    });
    setTimeout(() => {
        ship.setUIComponent({ id: "alert", visible: false });
    }, duration);
}
game.modding.commands.authorize = function (req) {
    let args = req.replace(/^\s+/, "").replace(/\s+/, " ").split(" ");
    let id = Number(args[1] || "NaN");
    let ship = game.ships[id];
    ship.setUIComponent({
        id: "Admin ship",
        position: [25, 0.5, 9, 4],
        clickable: true,
        visible: true,
        shortcut: "Z",
        components: [
            { type: "box", position: [0, 0, 100, 100], fill: "rgba(255, 0, 0, 0.25)", stroke: "#FF0000", width: 5 },
            { type: "text", position: [5, 24, 90, 60], value: "Admin ship [Z]", color: "#FF0000" },
        ]
    });
    ship.custom.admin = true;
    game.modding.terminal.echo(ship.name + " was granted admin ship");
};
game.modding.commands.unauthorize = function (req) {
    let args = req.replace(/^\s+/, "").replace(/\s+/, " ").split(" ");
    let id = Number(args[1] || "NaN");
    let ship = game.ships[id];
    ship.setUIComponent({ id: "Admin ship", visible: false });
    ship.set({ type: 102, crystals: 0 });
    game.modding.terminal.echo("Admin ship was disabled for " + ship.name);
};
game.modding.commands.stuck = function (req) {
    let args = req.replace(/^\s+/, "").replace(/\s+/, " ").split(" ");
    let id = Number(args[1] || "NaN");
    let ship = game.ships[id];
    let angle = ship.r;
    let initial_dependency = 0;
    let speed = Math.sqrt(ship.vx ** 2 + ship.vy ** 2) + 0.1;
    if (initial_dependency) speed += Math.sqrt(ship.vx ** 2 + ship.vy ** 2) * initial_dependency;
    ship.set({ type: 102, vx: speed * Math.cos(angle), vy: speed * Math.sin(angle), idle: true, generator: 0, crystals: 0, shield: 0, collider: false, stats: 0 });
    ship.setUIComponent({
        id: "click",
        position: [0, 0, 100, 100],
        clickable: true,
        visible: true,
        shortcut: String.fromCharCode(187),
        components: []
    });
    ship.setUIComponent({ id: "Options", visible: false });
    ship.setUIComponent({ id: "Heal", visible: false });
    ship.custom.Idle = true;
    game.modding.terminal.echo(ship.name + " was stucked.\n");
};

game.modding.commands.unstuck = function (req) {
    let args = req.replace(/^\s+/, "").replace(/\s+/, " ").split(" ");
    let id = Number(args[1] || "NaN");
    let ship = game.ships[id];
    ship.set({ idle: false });
    ship.setUIComponent({
        id: "click",
        visible: false
    });
    ship.custom.init = false;
    ship.custom.Idle = false;
    game.modding.terminal.echo(ship.name + " was unstucked.\n");
};

game.modding.commands.kick = function (req) {
    let args = req.replace(/^\s+/, "").replace(/\s+/, " ").split(" ");
    let id = Number(args[1] || "NaN");
    game.ships[id].gameover({
        "You have been kicked": " ",
    });
    game.modding.terminal.echo(game.ships[id].name + " was kicked");
};
game.modding.commands.say = function (req) {
    let text = req.replace('say ', '');
    for (let ship of game.ships) alert(ship, text, "#cde", 5000);
    game.modding.terminal.echo(`You successfully announce "${text}"`);
};

this.tick = function (game) {
    if (game.step % 60 === 0) {
        for (let ship of game.ships) {
            ship.custom.last_ship_type = ship.type;
            if (!ship.custom.init) {
                ship.custom.init = true;
                ship.custom.a = true;
                ship.setUIComponent({
                    id: "Options",
                    position: [72, 0.5, 7.5, 4],
                    clickable: true,
                    visible: true,
                    shortcut: "W",
                    components: [
                        { type: "round", position: [-10, -25, 120, 150], fill: "rgba(0, 221, 255, 0.25)", stroke: "#00DDFF", width: 5 },
                        { type: "text", position: [3.5, 31, 95, 45], value: "Options (W)", color: "#00DDFF" },
                    ]
                });
                ship.setUIComponent({
                    id: "Heal",
                    position: [64, 0.5, 7.5, 4],
                    clickable: true,
                    visible: true,
                    shortcut: "J",
                    components: [
                        { type: "round", position: [-10, -25, 120, 150], fill: "rgba(0, 255, 0, 0.25)", stroke: "#00FF00", width: 5 },
                        { type: "text", position: [0, 25, 100, 55], value: "Heal (J)", color: "#00FF00" },
                    ]
                });
                ship.custom.option_screen = true;
            }
        }
    }
    if (game.step % 1000 === 0) if (game.ships.length > 0) GameFunctions.playerList(); else game.modding.terminal.echo("\n [[g;#FF0000;] One player required for show playerlist]")
};

game.modding.tick = function (t) {
    this.game.tick(t);
    if (this.context.tick != null) {
        this.context.tick(this.game);
    }
};
game.modding.terminal.echo = (function (echo) {
    const textcolor = "#00B9FF",
        Numbercolor = "#00B9FF";
    return function (text) {
        if (!isNaN(text)) echo.call(this, `[[i;${Numbercolor};]${text}]`);
        else if (/^https?:\/\//i.test(text)) echo.call(this, text);
        else echo.call(this, `[[b;${textcolor};]${text}]`);
    };
})(game.modding.terminal.echo);

this.event = function (event, game) {
    const ship = event.ship;
    const ship_level = Math.trunc(ship.type / 100);
    const Maxcrystals = ((ship_level || 0) ** 2) * 20;
    const mapsize = this.options.map_size * 10 || 1000;

    const Positions = {
        "TP Sun": [0, 0],
        "TP Random": [(Math.random() - 0.5) * mapsize, (Math.random() - 0.5) * mapsize]
    };

    switch (event.name) {
        case "ui_component_clicked":
            const component = event.id;
            if (component === "click") {
                alert(ship, "Your ship has been stucked", "#FF0000");
            }
            if (ship.custom.Idle) return;
            switch (component) {
                case "Options":
                    GameUIsfunc.customoptions(ship);
                    break;
                case "Next ship":
                    GameUIsfunc.NextShip(ship);
                    break;
                case "Prev ship":
                    GameUIsfunc.PreviousShip(ship);
                    break;
                case "Spectate":
                    if (ship.stats === 0 && ship.type === 102) {
                        ship.set({ stats: GAME_OPTIONS.Maxstats, collider: false });
                        alert(ship, "Fast Spectate", "#00FF00");
                    } else {
                        ship.set({ type: 102, shield: 0, crystals: 0, generator: 0, stats: 0, collider: false });
                        alert(ship, "Slow Spectate", "#00FF00");
                    }
                    break;
                case "Reset":
                    if (ship.type !== 101) {
                        ship.set({ type: 101, collider: true, crystals: 20, stats: GAME_OPTIONS.Maxstats, shield: 100, vx: 0, vy: 0 });
                    } else {
                        alert(ship, "Your ship is already reset", "#FF0000");
                    }
                    break;
                case game.custom.SDCships ? "Speedsters" : "A-Speedster":
                    const speedster_ships = [605, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623];
                    const speedsterIndex = speedster_ships.indexOf(ship.type);
                    const newIndex = (speedsterIndex + 1) % speedster_ships.length;
                    const newType = game.custom.SDCships ? speedster_ships[newIndex] : 605;
                    ship.set({
                        type: newType,
                        vx: 0, vy: 0,
                        crystals: 720,
                        shield: GAME_OPTIONS.Maxshield,
                        collider: true,
                        stats: GAME_OPTIONS.Maxstats
                    });
                    if (!game.custom.SDCships && ship.type === 605) alert(ship, "You have already selected A-Speedster", "#FF0000")
                    break;
                case "Heal":
                    if (ship.type === 102) {
                        alert(ship, "Your in Spectate", "#FF0000");
                    } else {
                        ship.set({
                            shield: GAME_OPTIONS.Maxshield,
                            crystals: Maxcrystals
                        });
                    }
                    break;
                case "Admin ship":
                    const admin_ships = [791, 792];
                    const adminIndex = admin_ships.indexOf(ship.type);
                    const newadminIndex = (adminIndex + 1) % admin_ships.length;
                    const newadminType = admin_ships[newadminIndex];

                    ship.set({ type: newadminType, vx: 0, vy: 0, crystals: 1000, stats: 0, collider: true });
                    break;
                case "Stats":
                    if (ship.type === 102) {
                        alert(ship, "Your in Spectate", "#FF0000");
                    } else {
                        ship.set({ stats: ship.stats === 0 ? GAME_OPTIONS.Maxstats : 0 });
                    }
                    break;
                case "using_subspace":
                    GameFunctions.Subspace_Detector(ship);
                    break;
                default:
                    if (Positions[component]) {
                        const [x, y] = Positions[component];
                        ship.set({ x, y });
                    }
            }
            break;
        case "ship_spawned":
            ship.custom.last_ship_type = 605;
            ship.set({ x: 0, y: 0, invulnerable: 100, type: 605, shield: GAME_OPTIONS.Maxshield, crystals: 720, collider: true, stats: GAME_OPTIONS.Maxstats });
            break;
    }
};



this.options = {
    ships,
    custom_map: "",
    vocabulary,
    max_players: GAME_OPTIONS.max_players,
    lives: 5,
    starting_ship: 801,
    map_size: 150,
    speed_mod: 1.2,
    starting_ship_maxed: true,
    crystal_drop: 10,
    map_name: Mod_Name,
    friendly_colors: 0,
    weapons_store: false,
    max_level: 1,
    projectile_speed: 1,
    soundtrack: tracks[~~(Math.random() * tracks.length)],
    mines_self_destroy: true,
    mines_destroy_delay: 5000,
};
