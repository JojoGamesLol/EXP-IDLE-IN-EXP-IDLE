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

var currency;

var getPrimaryEquation = () => {
    let result = "f(t+dt)=f(t) \\times e^{bxdt}";
 
    return result;
}

var init = () => {
    currency = theory.createCurrency("f", "f");

    //REGULAR UPG
    //x
    {
        let getDesc = (level) => "q_1=" + getQ1(level).toString(0);
        let getInfo = (level) => "q_1=" + getQ1(level).toString(0);
        q1 = theory.createUpgrade(0, currency, new FreeCost());
        q1.getDescription = (amount) => Utils.getMath(getDesc(q1.level));
        q1.getInfo = (amount) => Utils.getMathTo(getInfo(q1.level), getInfo(q1.level + amount));
    }
    
    theory.createBuyAllUpgrade(0, currency, BigNumber.from("ee5");
    theory.createAutoBuyerUpgrade(1, currency, BigNumber.from("ee15");
}

var getSecondaryEquation = () => `t=${t} dt=${dt} f(t)=${ft} db=${db} b=${b} x=${x}`;

init();
