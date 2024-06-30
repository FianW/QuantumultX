if ($response.statusCode != 200) {
  $done(null);
}

const emojis = [
  "🆘",
  "🈲",
  "⚠️",
  "🔞",
  "📵",
  "🚦",
  "🏖",
  "🖥",
  "📺",
  "🐧",
  "🐬",
  "🦉",
  "🍄",
  "⛳️",
  "🚴",
  "🤑",
  "👽",
  "🤖",
  "🎃",
  "👺",
  "👁",
  "🐶",
  "🐼",
  "🐌",
  "👥",
];
var city0 = "浣熊市";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return city0;
    //emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if (para) {
    return para;
  } else {
    return isp0;
    //emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if (para == "中华民国") {
    return "台湾";
  } else {
    return para;
  }
}

var flags = new Map([
  ["AC", "🇦🇨"],
  ["AE", "🇦🇪"],
  ["AF", "🇦🇫"],
  ["AI", "🇦🇮"],
  ["AL", "🇦🇱"],
  ["AQ", "🇦🇶"],
  ["AR", "🇦🇷"],
  ["AS", "🇦🇸"],
  ["AT", "🇦🇹"],
  ["AU", "🇦🇺"],
  ["AW", "🇦🇼"],
  ["AX", "🇦🇽"],
  ["AZ", "🇦🇿"],
  ["BA", "🇧🇦"],
  ["BB", "🇧🇧"],
  ["BD", "🇧🇩"],
  ["BE", "🇧🇪"],
  ["BF", "🇧🇫"],
  ["BG", "🇧🇬"],
  ["BH", "🇧🇭"],
  ["BI", "🇧🇮"],
  ["BJ", "🇧🇯"],
  ["BM", "🇧🇲"],
  ["BN", "🇧🇳"],
  ["BO", "🇧🇴"],
  ["BR", "🇧🇷"],
  ["BS", "🇧🇸"],
  ["BT", "🇧🇹"],
  ["BV", "🇧🇻"],
  ["BW", "🇧🇼"],
  ["BY", "🇧🇾"],
  ["BZ", "🇧🇿"],
  ["CA", "🇨🇦"],
  ["CF", "🇨🇫"],
  ["CH", "🇨🇭"],
  ["CK", "🇨🇰"],
  ["CL", "🇨🇱"],
  ["CM", "🇨🇲"],
  ["CN", "🇨🇳"],
  ["CO", "🇨🇴"],
  ["CP", "🇨🇵"],
  ["CR", "🇨🇷"],
  ["CU", "🇨🇺"],
  ["CV", "🇨🇻"],
  ["CW", "🇨🇼"],
  ["CX", "🇨🇽"],
  ["CY", "🇨🇾"],
  ["CZ", "🇨🇿"],
  ["DE", "🇩🇪"],
  ["DG", "🇩🇬"],
  ["DJ", "🇩🇯"],
  ["DK", "🇩🇰"],
  ["DM", "🇩🇲"],
  ["DO", "🇩🇴"],
  ["DZ", "🇩🇿"],
  ["EA", "🇪🇦"],
  ["EC", "🇪🇨"],
  ["EE", "🇪🇪"],
  ["EG", "🇪🇬"],
  ["EH", "🇪🇭"],
  ["ER", "🇪🇷"],
  ["ES", "🇪🇸"],
  ["ET", "🇪🇹"],
  ["EU", "🇪🇺"],
  ["FI", "🇫🇮"],
  ["FJ", "🇫🇯"],
  ["FK", "🇫🇰"],
  ["FM", "🇫🇲"],
  ["FO", "🇫🇴"],
  ["FR", "🇫🇷"],
  ["GA", "🇬🇦"],
  ["GB", "🇬🇧"],
  ["HK", "🇭🇰"],
  ["HU", "🇭🇺"],
  ["ID", "🇮🇩"],
  ["IE", "🇮🇪"],
  ["IL", "🇮🇱"],
  ["IM", "🇮🇲"],
  ["IN", "🇮🇳"],
  ["IS", "🇮🇸"],
  ["IT", "🇮🇹"],
  ["JP", "🇯🇵"],
  ["KR", "🇰🇷"],
  ["LU", "🇱🇺"],
  ["MO", "🇲🇴"],
  ["MX", "🇲🇽"],
  ["MY", "🇲🇾"],
  ["NL", "🇳🇱"],
  ["PH", "🇵🇭"],
  ["RO", "🇷🇴"],
  ["RS", "🇷🇸"],
  ["RU", "🇷🇺"],
  ["RW", "🇷🇼"],
  ["SA", "🇸🇦"],
  ["SB", "🇸🇧"],
  ["SC", "🇸🇨"],
  ["SD", "🇸🇩"],
  ["SE", "🇸🇪"],
  ["SG", "🇸🇬"],
  ["TH", "🇹🇭"],
  ["TN", "🇹🇳"],
  ["TO", "🇹🇴"],
  ["TR", "🇹🇷"],
  ["TV", "🇹🇻"],
  ["TW", "🇨🇳"],
  ["UK", "🇬🇧"],
  ["UM", "🇺🇲"],
  ["US", "🇺🇸"],
  ["UY", "🇺🇾"],
  ["UZ", "🇺🇿"],
  ["VA", "🇻🇦"],
  ["VE", "🇻🇪"],
  ["VG", "🇻🇬"],
  ["VI", "🇻🇮"],
  ["VN", "🇻🇳"],
  ["ZA", "🇿🇦"],
  ["UA", "🇺🇦"],
  ["MD", "🇲🇩"],
  ["AD", "🇦🇩"],
  ["AM", "🇦🇲"],
  ["AO", "🇦🇴"],
  ["KP", "🇰🇵"],
  ["KY", "🇰🇾"],
  ["KZ", "🇰🇿"],
  ["🇱🇦", "LA"],
  ["NZ", "🇳🇿"],
  ["PK", "🇵🇰"],
  ["NO", "🇳🇴"],
  ["PT", "🇵🇹"],
  ["PL", "🇵🇱"],
  ["GR", "🇬🇷"],
  ["NG", "🇳🇬"],
  ["MV", "🇲🇻"],
  ["KH", "🇰🇭"],
  ["LA", "🇱🇦"],
  ["GU", "🇬🇺"],
  ["MN", "🇲🇳"],
  ["JO", "🇯🇴"],
  ["IR", "🇮🇷"],
  ["OM", "🇴🇲"],
  ["PS", "🇵🇸"],
  ["NP", "🇳🇵"],
  ["LB", "🇱🇧"],
  ["IQ", "🇮🇶"],
  ["SY", "🇸🇾"],
  ["QA", "🇶🇦"],
  ["GE", "🇬🇪"],
  ["LK", "🇱🇰"],
  ["KG", "🇰🇬"],
  ["ME", "🇲🇪"],
  ["LT", "🇱🇹"],
  ["MT", "🇲🇹"],
  ["MC", "🇲🇨"],
  ["HR", "🇭🇷"],
  ["MK", "🇲🇰"],
  ["LV", "🇱🇻"],
  ["SK", "🇸🇰"],
  ["GI", "🇬🇮"],
  ["SM", "🇸🇲"],
  ["LI", "🇱🇮"],
  ["RE", "🇷🇪"],
  ["PA", "🇵🇦"],
  ["GL", "🇬🇱"],
  ["PE", "🇵🇪"],
  ["PY", "🇵🇾"],
  ["JM", "🇯🇲"],
  ["SR", "🇸🇷"],
  ["GT", "🇬🇹"],
  ["PR", "🇵🇷"],
  ["HN", "🇭🇳"],
  ["NI", "🇳🇮"],
  ["GH", "🇬🇭"],
  ["MA", "🇲🇦"],
  ["LY", "🇱🇾"],
  ["KE", "🇰🇪"],
  ["MU", "🇲🇺"],
  ["TL", "🇹🇱"],
  ["SI", "🇸🇮"],
  ["GF", "🇬🇫"],
  ["TG", "🇹🇬"],
]);

var body = $response.body;
var obj = JSON.parse(body);
var title = flags.get(obj["countryCode"]) + " " + City_ValidCheck(obj["city"]) + " " +Area_check(obj["country"]);
var subtitle = ISP_ValidCheck(obj["org"] || obj.as);
var ip = obj["query"];
var description =
  "城市:" +
  City_ValidCheck(obj["city"]) +
  "\n" +
  "区域:" +
  City_ValidCheck(obj["regionName"]) +
  "\n" +
  "国家/地区:" +
  City_ValidCheck(obj["country"]) +
  "\n" +
  "IP:" +
  obj["query"] +
  "\n" +
  "ISP:" +
  obj["isp"] +
  "\n" +
  "ORG:" +
  obj["org"] +
  "\n" +
  "ASN:" +
  obj["as"] +
  "\n" +
  "Hosting:" +
  obj["hosting"];
$done({ title, subtitle, ip, description });
