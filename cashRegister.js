function checkCashRegister(price, cash, cid) {
    const valuesNames = {"PENNY":0.01,"NICKEL":0.05,"DIME":0.1,"QUARTER":0.25,"ONE":1,"FIVE":5,"TEN":10,"TWENTY":20,"ONE HUNDRED":100};
    var cidReturn ={};
    cid = Object.fromEntries(cid)
    const originalCid= Object.assign({},cid);
    let returnValue = cash-price;

    for (const [Key, Value] of Object.entries(valuesNames).reverse()) {
        let isDivisor = Math.floor(returnValue / Value);

        if (isDivisor >= 1) {
            let NumberofItems = Math.floor(isDivisor);
            if(cid[Key]){
                var ticketsToErase =0;
                if(Math.floor(cid[Key]/valuesNames[Key])>=NumberofItems){
                    ticketsToErase = NumberofItems*valuesNames[Key];
                }else{
                    ticketsToErase = cid[Key];   
                }
                returnValue= Number(returnValue-ticketsToErase).toFixed(3);
                cidReturn[Key] =  ticketsToErase;
                cid[Key]=cid[Key]-ticketsToErase;
                if(returnValue == 0)
                {
                    if(Object.values(cid).every(item => item === 0))
                        {
                            cidReturn = Object.entries(cidReturn);
                            return {'status':"CLOSED",change:Object.entries(originalCid) };
                        }
                    else
                        {
                            cidReturn = Object.entries(cidReturn);
                            return {'status':"OPEN",change:cidReturn}
                        }
                    }
                }
            }
        }
    if(returnValue>0)
    {
        return {'status':'INSUFFICIENT_FUNDS',change:[]};
    }
  }

const price = 19.5;
const cash = 20;
const cid =[["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0.5], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
