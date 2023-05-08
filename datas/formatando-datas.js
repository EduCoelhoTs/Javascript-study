//formatando data usando o objeto intl:

var msPorDia = 24 * 60 * 60 * 1000; // número de milisegundos em um dia

// July 17, 2014 00:00:00 UTC.
var july172014 = new Date(msPorDia * (44 * 365 + 11 + 197));

var opcoes = { year: "2-digit", month: "2-digit", day: "2-digit",
                hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
var americanDateTime = new Intl.DateTimeFormat("en-US", opcoes).format;

console.log(americanDateTime(july172014)); // 07/16/14, 5:00 PM PDT