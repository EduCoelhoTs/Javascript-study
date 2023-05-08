var precoGasolina = new Intl.NumberFormat("en-US",
                        { style: "currency", currency: "USD",
                          minimumFractionDigits: 3 });

console.log(precoGasolina.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec",
                        { style: "currency", currency: "CNY" });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一,三一四.二五
