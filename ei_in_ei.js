import { ExponentialCost, FirstFreeCost, LinearCost } from "../api/Costs";
import { Localization } from "../api/Localization";
import { parseBigNumber, BigNumber } from "../api/BigNumber";
import { theory } from "../api/Theory";
import { Utils } from "../api/Utils";

var id = "ei_in_ei";
var name = "EXP IDLE IN EXP IDLE";
var description = "No Theory description.";
var authors = "JojoGames320";
var version = "1.0.0";

var ft = BigNumber.ONE;
var dt = BigNumber.ONE
var t = BigNumber.ZERO;
var db = BigNumber.from("0.001");
var b = BigNumber.ZERO;
var x = BigNumber.ZERO;

var getPrimaryEquation = () => {
    let result = "f(t+dt)=f(t) \\times e^{bxdt}";
 
    return result;
}

var init = () => {

    //REGULAR UPG
    //x
    {
        let getDesc = (level) => "x=" + (level / 10);
        let getInfo = (level) => "\\text{Each level increases 0.1 x};
        x0 = theory.createUpgrade(0, currency, new FreeCost());
        x0.getDescription = (amount) => Utils.getMath(getDesc(x0.level));
        x0.getInfo = (amount) => "\\text{Each level increases 0.1 x}";
    }
    
    theory.createBuyAllUpgrade(0, ft, BigNumber.from("ee5"));
    theory.createAutoBuyerUpgrade(1, ft, BigNumber.from("ee15"));
}

var getSecondaryEquation = () => `t=${t} dt=${dt} f(t)=${ft} db=${db} b=${b} x=${x}`;

init();
