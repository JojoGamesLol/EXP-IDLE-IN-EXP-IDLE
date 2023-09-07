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

var getSecondaryEquation = () => theory.latexSymbol + `t=${t} dt=${dt} f(t)=${ft} db=${db} b=${b} x=${x}`;