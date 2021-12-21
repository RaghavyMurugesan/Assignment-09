Print the following details name, capital, flag using forEach function

//______CODE______
var XMLHttpRequest = require("xhr2");
var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

request.send();

request.onload = function () {
  var data = JSON.parse(request.response);
  //console.log(data);

  data.forEach((data) => {
    console.log(`
    Name:${data.name}, 
    Capital:${data.capital},
    FlagLink:${data.flag}` );
  });
};


//____OUTPUT________

Name:Afghanistan, 
    Capital:Kabul,
    FlagLink:https://restcountries.eu/data/afg.svg

    Name:Åland Islands, 
    Capital:Mariehamn,
    FlagLink:https://restcountries.eu/data/ala.svg

    Name:Albania, 
    Capital:Tirana,
    FlagLink:https://restcountries.eu/data/alb.svg

    Name:Algeria, 
    Capital:Algiers,
    FlagLink:https://restcountries.eu/data/dza.svg

    Name:American Samoa, 
    Capital:Pago Pago,
    FlagLink:https://restcountries.eu/data/asm.svg

    Name:Andorra, 
    Capital:Andorra la Vella,
    FlagLink:https://restcountries.eu/data/and.svg

    Name:Angola, 
    Capital:Luanda,
    FlagLink:https://restcountries.eu/data/ago.svg

    Name:Anguilla, 
    Capital:The Valley,
    FlagLink:https://restcountries.eu/data/aia.svg

    Name:Antarctica, 
    Capital:,
    FlagLink:https://restcountries.eu/data/ata.svg

    Name:Antigua and Barbuda, 
    Capital:Saint John's,
    FlagLink:https://restcountries.eu/data/atg.svg

    Name:Argentina, 
    Capital:Buenos Aires,
    FlagLink:https://restcountries.eu/data/arg.svg

    Name:Armenia, 
    Capital:Yerevan,
    FlagLink:https://restcountries.eu/data/arm.svg

    Name:Aruba, 
    Capital:Oranjestad,
    FlagLink:https://restcountries.eu/data/abw.svg

    Name:Australia, 
    Capital:Canberra,
    FlagLink:https://restcountries.eu/data/aus.svg

    Name:Austria, 
    Capital:Vienna,
    FlagLink:https://restcountries.eu/data/aut.svg

    Name:Azerbaijan, 
    Capital:Baku,
    FlagLink:https://restcountries.eu/data/aze.svg

    Name:Bahamas, 
    Capital:Nassau,
    FlagLink:https://restcountries.eu/data/bhs.svg

    Name:Bahrain, 
    Capital:Manama,
    FlagLink:https://restcountries.eu/data/bhr.svg

    Name:Bangladesh, 
    Capital:Dhaka,
    FlagLink:https://restcountries.eu/data/bgd.svg

    Name:Barbados, 
    Capital:Bridgetown,
    FlagLink:https://restcountries.eu/data/brb.svg

    Name:Belarus, 
    Capital:Minsk,
    FlagLink:https://restcountries.eu/data/blr.svg

    Name:Belgium, 
    Capital:Brussels,
    FlagLink:https://restcountries.eu/data/bel.svg

    Name:Belize, 
    Capital:Belmopan,
    FlagLink:https://restcountries.eu/data/blz.svg

    Name:Benin, 
    Capital:Porto-Novo,
    FlagLink:https://restcountries.eu/data/ben.svg

    Name:Bermuda, 
    Capital:Hamilton,
    FlagLink:https://restcountries.eu/data/bmu.svg

    Name:Bhutan, 
    Capital:Thimphu,
    FlagLink:https://restcountries.eu/data/btn.svg

    Name:Bolivia (Plurinational State of), 
    Capital:Sucre,
    FlagLink:https://restcountries.eu/data/bol.svg

    Name:Bonaire, Sint Eustatius and Saba, 
    Capital:Kralendijk,
    FlagLink:https://restcountries.eu/data/bes.svg

    Name:Bosnia and Herzegovina, 
    Capital:Sarajevo,
    FlagLink:https://restcountries.eu/data/bih.svg

    Name:Botswana, 
    Capital:Gaborone,
    FlagLink:https://restcountries.eu/data/bwa.svg

    Name:Bouvet Island, 
    Capital:,
    FlagLink:https://restcountries.eu/data/bvt.svg

    Name:Brazil, 
    Capital:Brasília,
    FlagLink:https://restcountries.eu/data/bra.svg

    Name:British Indian Ocean Territory, 
    Capital:Diego Garcia,
    FlagLink:https://restcountries.eu/data/iot.svg

    Name:United States Minor Outlying Islands, 
    Capital:,
    FlagLink:https://restcountries.eu/data/umi.svg

    Name:Virgin Islands (British), 
    Capital:Road Town,
    FlagLink:https://restcountries.eu/data/vgb.svg

    Name:Virgin Islands (U.S.), 
    Capital:Charlotte Amalie,
    FlagLink:https://restcountries.eu/data/vir.svg

    Name:Brunei Darussalam, 
    Capital:Bandar Seri Begawan,
    FlagLink:https://restcountries.eu/data/brn.svg

    Name:Bulgaria, 
    Capital:Sofia,
    FlagLink:https://restcountries.eu/data/bgr.svg

    Name:Burkina Faso, 
    Capital:Ouagadougou,
    FlagLink:https://restcountries.eu/data/bfa.svg

    Name:Burundi, 
    Capital:Bujumbura,
    FlagLink:https://restcountries.eu/data/bdi.svg

    Name:Cambodia, 
    Capital:Phnom Penh,
    FlagLink:https://restcountries.eu/data/khm.svg

    Name:Cameroon, 
    Capital:Yaoundé,
    FlagLink:https://restcountries.eu/data/cmr.svg

    Name:Canada, 
    Capital:Ottawa,
    FlagLink:https://restcountries.eu/data/can.svg

    Name:Cabo Verde, 
    Capital:Praia,
    FlagLink:https://restcountries.eu/data/cpv.svg

    Name:Cayman Islands, 
    Capital:George Town,
    FlagLink:https://restcountries.eu/data/cym.svg

    Name:Central African Republic, 
    Capital:Bangui,
    FlagLink:https://restcountries.eu/data/caf.svg

    Name:Chad, 
    Capital:N'Djamena,
    FlagLink:https://restcountries.eu/data/tcd.svg

    Name:Chile, 
    Capital:Santiago,
    FlagLink:https://restcountries.eu/data/chl.svg

    Name:China, 
    Capital:Beijing,
    FlagLink:https://restcountries.eu/data/chn.svg

    Name:Christmas Island, 
    Capital:Flying Fish Cove,
    FlagLink:https://restcountries.eu/data/cxr.svg

    Name:Cocos (Keeling) Islands, 
    Capital:West Island,
    FlagLink:https://restcountries.eu/data/cck.svg

    Name:Colombia, 
    Capital:Bogotá,
    FlagLink:https://restcountries.eu/data/col.svg

    Name:Comoros, 
    Capital:Moroni,
    FlagLink:https://restcountries.eu/data/com.svg

    Name:Congo, 
    Capital:Brazzaville,
    FlagLink:https://restcountries.eu/data/cog.svg

    Name:Congo (Democratic Republic of the), 
    Capital:Kinshasa,
    FlagLink:https://restcountries.eu/data/cod.svg

    Name:Cook Islands, 
    Capital:Avarua,
    FlagLink:https://restcountries.eu/data/cok.svg

    Name:Costa Rica, 
    Capital:San José,
    FlagLink:https://restcountries.eu/data/cri.svg

    Name:Croatia, 
    Capital:Zagreb,
    FlagLink:https://restcountries.eu/data/hrv.svg

    Name:Cuba, 
    Capital:Havana,
    FlagLink:https://restcountries.eu/data/cub.svg

    Name:Curaçao, 
    Capital:Willemstad,
    FlagLink:https://restcountries.eu/data/cuw.svg

    Name:Cyprus, 
    Capital:Nicosia,
    FlagLink:https://restcountries.eu/data/cyp.svg

    Name:Czech Republic, 
    Capital:Prague,
    FlagLink:https://restcountries.eu/data/cze.svg

    Name:Denmark, 
    Capital:Copenhagen,
    FlagLink:https://restcountries.eu/data/dnk.svg

    Name:Djibouti, 
    Capital:Djibouti,
    FlagLink:https://restcountries.eu/data/dji.svg

    Name:Dominica, 
    Capital:Roseau,
    FlagLink:https://restcountries.eu/data/dma.svg

    Name:Dominican Republic, 
    Capital:Santo Domingo,
    FlagLink:https://restcountries.eu/data/dom.svg

    Name:Ecuador, 
    Capital:Quito,
    FlagLink:https://restcountries.eu/data/ecu.svg

    Name:Egypt, 
    Capital:Cairo,
    FlagLink:https://restcountries.eu/data/egy.svg

    Name:El Salvador, 
    Capital:San Salvador,
    FlagLink:https://restcountries.eu/data/slv.svg

    Name:Equatorial Guinea, 
    Capital:Malabo,
    FlagLink:https://restcountries.eu/data/gnq.svg

    Name:Eritrea, 
    Capital:Asmara,
    FlagLink:https://restcountries.eu/data/eri.svg

    Name:Estonia, 
    Capital:Tallinn,
    FlagLink:https://restcountries.eu/data/est.svg

    Name:Ethiopia, 
    Capital:Addis Ababa,
    FlagLink:https://restcountries.eu/data/eth.svg

    Name:Falkland Islands (Malvinas), 
    Capital:Stanley,
    FlagLink:https://restcountries.eu/data/flk.svg

    Name:Faroe Islands, 
    Capital:Tórshavn,
    FlagLink:https://restcountries.eu/data/fro.svg

    Name:Fiji, 
    Capital:Suva,
    FlagLink:https://restcountries.eu/data/fji.svg

    Name:Finland, 
    Capital:Helsinki,
    FlagLink:https://restcountries.eu/data/fin.svg

    Name:France, 
    Capital:Paris,
    FlagLink:https://restcountries.eu/data/fra.svg

    Name:French Guiana, 
    Capital:Cayenne,
    FlagLink:https://restcountries.eu/data/guf.svg

    Name:French Polynesia, 
    Capital:Papeetē,
    FlagLink:https://restcountries.eu/data/pyf.svg

    Name:French Southern Territories, 
    Capital:Port-aux-Français,
    FlagLink:https://restcountries.eu/data/atf.svg

    Name:Gabon, 
    Capital:Libreville,
    FlagLink:https://restcountries.eu/data/gab.svg

    Name:Gambia, 
    Capital:Banjul,
    FlagLink:https://restcountries.eu/data/gmb.svg

    Name:Georgia, 
    Capital:Tbilisi,
    FlagLink:https://restcountries.eu/data/geo.svg

    Name:Germany, 
    Capital:Berlin,
    FlagLink:https://restcountries.eu/data/deu.svg

    Name:Ghana, 
    Capital:Accra,
    FlagLink:https://restcountries.eu/data/gha.svg

    Name:Gibraltar, 
    Capital:Gibraltar,
    FlagLink:https://restcountries.eu/data/gib.svg

    Name:Greece, 
    Capital:Athens,
    FlagLink:https://restcountries.eu/data/grc.svg

    Name:Greenland, 
    Capital:Nuuk,
    FlagLink:https://restcountries.eu/data/grl.svg

    Name:Grenada, 
    Capital:St. George's,
    FlagLink:https://restcountries.eu/data/grd.svg

    Name:Guadeloupe, 
    Capital:Basse-Terre,
    FlagLink:https://restcountries.eu/data/glp.svg

    Name:Guam, 
    Capital:Hagåtña,
    FlagLink:https://restcountries.eu/data/gum.svg

    Name:Guatemala, 
    Capital:Guatemala City,
    FlagLink:https://restcountries.eu/data/gtm.svg

    Name:Guernsey, 
    Capital:St. Peter Port,
    FlagLink:https://restcountries.eu/data/ggy.svg

    Name:Guinea, 
    Capital:Conakry,
    FlagLink:https://restcountries.eu/data/gin.svg

    Name:Guinea-Bissau, 
    Capital:Bissau,
    FlagLink:https://restcountries.eu/data/gnb.svg

    Name:Guyana, 
    Capital:Georgetown,
    FlagLink:https://restcountries.eu/data/guy.svg

    Name:Haiti, 
    Capital:Port-au-Prince,
    FlagLink:https://restcountries.eu/data/hti.svg

    Name:Heard Island and McDonald Islands, 
    Capital:,
    FlagLink:https://restcountries.eu/data/hmd.svg

    Name:Holy See, 
    Capital:Rome,
    FlagLink:https://restcountries.eu/data/vat.svg

    Name:Honduras, 
    Capital:Tegucigalpa,
    FlagLink:https://restcountries.eu/data/hnd.svg

    Name:Hong Kong, 
    Capital:City of Victoria,
    FlagLink:https://restcountries.eu/data/hkg.svg

    Name:Hungary, 
    Capital:Budapest,
    FlagLink:https://restcountries.eu/data/hun.svg

    Name:Iceland, 
    Capital:Reykjavík,
    FlagLink:https://restcountries.eu/data/isl.svg

    Name:India, 
    Capital:New Delhi,
    FlagLink:https://restcountries.eu/data/ind.svg

    Name:Indonesia, 
    Capital:Jakarta,
    FlagLink:https://restcountries.eu/data/idn.svg

    Name:Côte d'Ivoire, 
    Capital:Yamoussoukro,
    FlagLink:https://restcountries.eu/data/civ.svg

    Name:Iran (Islamic Republic of), 
    Capital:Tehran,
    FlagLink:https://restcountries.eu/data/irn.svg

    Name:Iraq, 
    Capital:Baghdad,
    FlagLink:https://restcountries.eu/data/irq.svg

    Name:Ireland, 
    Capital:Dublin,
    FlagLink:https://restcountries.eu/data/irl.svg

    Name:Isle of Man, 
    Capital:Douglas,
    FlagLink:https://restcountries.eu/data/imn.svg

    Name:Israel, 
    Capital:Jerusalem,
    FlagLink:https://restcountries.eu/data/isr.svg

    Name:Italy, 
    Capital:Rome,
    FlagLink:https://restcountries.eu/data/ita.svg

    Name:Jamaica, 
    Capital:Kingston,
    FlagLink:https://restcountries.eu/data/jam.svg

    Name:Japan, 
    Capital:Tokyo,
    FlagLink:https://restcountries.eu/data/jpn.svg

    Name:Jersey, 
    Capital:Saint Helier,
    FlagLink:https://restcountries.eu/data/jey.svg

    Name:Jordan, 
    Capital:Amman,
    FlagLink:https://restcountries.eu/data/jor.svg

    Name:Kazakhstan, 
    Capital:Astana,
    FlagLink:https://restcountries.eu/data/kaz.svg

    Name:Kenya, 
    Capital:Nairobi,
    FlagLink:https://restcountries.eu/data/ken.svg

    Name:Kiribati, 
    Capital:South Tarawa,
    FlagLink:https://restcountries.eu/data/kir.svg

    Name:Kuwait, 
    Capital:Kuwait City,
    FlagLink:https://restcountries.eu/data/kwt.svg

    Name:Kyrgyzstan, 
    Capital:Bishkek,
    FlagLink:https://restcountries.eu/data/kgz.svg

    Name:Lao People's Democratic Republic, 
    Capital:Vientiane,
    FlagLink:https://restcountries.eu/data/lao.svg

    Name:Latvia, 
    Capital:Riga,
    FlagLink:https://restcountries.eu/data/lva.svg

    Name:Lebanon, 
    Capital:Beirut,
    FlagLink:https://restcountries.eu/data/lbn.svg

    Name:Lesotho, 
    Capital:Maseru,
    FlagLink:https://restcountries.eu/data/lso.svg

    Name:Liberia, 
    Capital:Monrovia,
    FlagLink:https://restcountries.eu/data/lbr.svg

    Name:Libya, 
    Capital:Tripoli,
    FlagLink:https://restcountries.eu/data/lby.svg

    Name:Liechtenstein, 
    Capital:Vaduz,
    FlagLink:https://restcountries.eu/data/lie.svg

    Name:Lithuania, 
    Capital:Vilnius,
    FlagLink:https://restcountries.eu/data/ltu.svg

    Name:Luxembourg, 
    Capital:Luxembourg,
    FlagLink:https://restcountries.eu/data/lux.svg

    Name:Macao, 
    Capital:,
    FlagLink:https://restcountries.eu/data/mac.svg

    Name:Macedonia (the former Yugoslav Republic of), 
    Capital:Skopje,
    FlagLink:https://restcountries.eu/data/mkd.svg

    Name:Madagascar, 
    Capital:Antananarivo,
    FlagLink:https://restcountries.eu/data/mdg.svg

    Name:Malawi, 
    Capital:Lilongwe,
    FlagLink:https://restcountries.eu/data/mwi.svg

    Name:Malaysia, 
    Capital:Kuala Lumpur,
    FlagLink:https://restcountries.eu/data/mys.svg

    Name:Maldives, 
    Capital:Malé,
    FlagLink:https://restcountries.eu/data/mdv.svg

    Name:Mali, 
    Capital:Bamako,
    FlagLink:https://restcountries.eu/data/mli.svg

    Name:Malta, 
    Capital:Valletta,
    FlagLink:https://restcountries.eu/data/mlt.svg

    Name:Marshall Islands, 
    Capital:Majuro,
    FlagLink:https://restcountries.eu/data/mhl.svg

    Name:Martinique, 
    Capital:Fort-de-France,
    FlagLink:https://restcountries.eu/data/mtq.svg

    Name:Mauritania, 
    Capital:Nouakchott,
    FlagLink:https://restcountries.eu/data/mrt.svg

    Name:Mauritius, 
    Capital:Port Louis,
    FlagLink:https://restcountries.eu/data/mus.svg

    Name:Mayotte, 
    Capital:Mamoudzou,
    FlagLink:https://restcountries.eu/data/myt.svg

    Name:Mexico, 
    Capital:Mexico City,
    FlagLink:https://restcountries.eu/data/mex.svg

    Name:Micronesia (Federated States of), 
    Capital:Palikir,
    FlagLink:https://restcountries.eu/data/fsm.svg

    Name:Moldova (Republic of), 
    Capital:Chișinău,
    FlagLink:https://restcountries.eu/data/mda.svg

    Name:Monaco, 
    Capital:Monaco,
    FlagLink:https://restcountries.eu/data/mco.svg

    Name:Mongolia, 
    Capital:Ulan Bator,
    FlagLink:https://restcountries.eu/data/mng.svg

    Name:Montenegro, 
    Capital:Podgorica,
    FlagLink:https://restcountries.eu/data/mne.svg

    Name:Montserrat, 
    Capital:Plymouth,
    FlagLink:https://restcountries.eu/data/msr.svg

    Name:Morocco, 
    Capital:Rabat,
    FlagLink:https://restcountries.eu/data/mar.svg

    Name:Mozambique, 
    Capital:Maputo,
    FlagLink:https://restcountries.eu/data/moz.svg

    Name:Myanmar, 
    Capital:Naypyidaw,
    FlagLink:https://restcountries.eu/data/mmr.svg

    Name:Namibia, 
    Capital:Windhoek,
    FlagLink:https://restcountries.eu/data/nam.svg

    Name:Nauru, 
    Capital:Yaren,
    FlagLink:https://restcountries.eu/data/nru.svg

    Name:Nepal, 
    Capital:Kathmandu,
    FlagLink:https://restcountries.eu/data/npl.svg

    Name:Netherlands, 
    Capital:Amsterdam,
    FlagLink:https://restcountries.eu/data/nld.svg

    Name:New Caledonia, 
    Capital:Nouméa,
    FlagLink:https://restcountries.eu/data/ncl.svg

    Name:New Zealand, 
    Capital:Wellington,
    FlagLink:https://restcountries.eu/data/nzl.svg

    Name:Nicaragua, 
    Capital:Managua,
    FlagLink:https://restcountries.eu/data/nic.svg

    Name:Niger, 
    Capital:Niamey,
    FlagLink:https://restcountries.eu/data/ner.svg

    Name:Nigeria, 
    Capital:Abuja,
    FlagLink:https://restcountries.eu/data/nga.svg

    Name:Niue, 
    Capital:Alofi,
    FlagLink:https://restcountries.eu/data/niu.svg

    Name:Norfolk Island, 
    Capital:Kingston,
    FlagLink:https://restcountries.eu/data/nfk.svg

    Name:Korea (Democratic People's Republic of), 
    Capital:Pyongyang,
    FlagLink:https://restcountries.eu/data/prk.svg

    Name:Northern Mariana Islands, 
    Capital:Saipan,
    FlagLink:https://restcountries.eu/data/mnp.svg

    Name:Norway, 
    Capital:Oslo,
    FlagLink:https://restcountries.eu/data/nor.svg

    Name:Oman, 
    Capital:Muscat,
    FlagLink:https://restcountries.eu/data/omn.svg

    Name:Pakistan, 
    Capital:Islamabad,
    FlagLink:https://restcountries.eu/data/pak.svg

    Name:Palau, 
    Capital:Ngerulmud,
    FlagLink:https://restcountries.eu/data/plw.svg

    Name:Palestine, State of, 
    Capital:Ramallah,
    FlagLink:https://restcountries.eu/data/pse.svg

    Name:Panama, 
    Capital:Panama City,
    FlagLink:https://restcountries.eu/data/pan.svg

    Name:Papua New Guinea, 
    Capital:Port Moresby,
    FlagLink:https://restcountries.eu/data/png.svg

    Name:Paraguay, 
    Capital:Asunción,
    FlagLink:https://restcountries.eu/data/pry.svg

    Name:Peru, 
    Capital:Lima,
    FlagLink:https://restcountries.eu/data/per.svg

    Name:Philippines, 
    Capital:Manila,
    FlagLink:https://restcountries.eu/data/phl.svg

    Name:Pitcairn, 
    Capital:Adamstown,
    FlagLink:https://restcountries.eu/data/pcn.svg

    Name:Poland, 
    Capital:Warsaw,
    FlagLink:https://restcountries.eu/data/pol.svg

    Name:Portugal, 
    Capital:Lisbon,
    FlagLink:https://restcountries.eu/data/prt.svg

    Name:Puerto Rico, 
    Capital:San Juan,
    FlagLink:https://restcountries.eu/data/pri.svg

    Name:Qatar, 
    Capital:Doha,
    FlagLink:https://restcountries.eu/data/qat.svg

    Name:Republic of Kosovo, 
    Capital:Pristina,
    FlagLink:https://restcountries.eu/data/kos.svg

    Name:Réunion, 
    Capital:Saint-Denis,
    FlagLink:https://restcountries.eu/data/reu.svg

    Name:Romania, 
    Capital:Bucharest,
    FlagLink:https://restcountries.eu/data/rou.svg

    Name:Russian Federation, 
    Capital:Moscow,
    FlagLink:https://restcountries.eu/data/rus.svg

    Name:Rwanda, 
    Capital:Kigali,
    FlagLink:https://restcountries.eu/data/rwa.svg

    Name:Saint Barthélemy, 
    Capital:Gustavia,
    FlagLink:https://restcountries.eu/data/blm.svg

    Name:Saint Helena, Ascension and Tristan da Cunha, 
    Capital:Jamestown,
    FlagLink:https://restcountries.eu/data/shn.svg

    Name:Saint Kitts and Nevis, 
    Capital:Basseterre,
    FlagLink:https://restcountries.eu/data/kna.svg

    Name:Saint Lucia, 
    Capital:Castries,
    FlagLink:https://restcountries.eu/data/lca.svg

    Name:Saint Martin (French part), 
    Capital:Marigot,
    FlagLink:https://restcountries.eu/data/maf.svg

    Name:Saint Pierre and Miquelon, 
    Capital:Saint-Pierre,
    FlagLink:https://restcountries.eu/data/spm.svg

    Name:Saint Vincent and the Grenadines, 
    Capital:Kingstown,
    FlagLink:https://restcountries.eu/data/vct.svg

    Name:Samoa, 
    Capital:Apia,
    FlagLink:https://restcountries.eu/data/wsm.svg

    Name:San Marino, 
    Capital:City of San Marino,
    FlagLink:https://restcountries.eu/data/smr.svg

    Name:Sao Tome and Principe, 
    Capital:São Tomé,
    FlagLink:https://restcountries.eu/data/stp.svg

    Name:Saudi Arabia, 
    Capital:Riyadh,
    FlagLink:https://restcountries.eu/data/sau.svg

    Name:Senegal, 
    Capital:Dakar,
    FlagLink:https://restcountries.eu/data/sen.svg

    Name:Serbia, 
    Capital:Belgrade,
    FlagLink:https://restcountries.eu/data/srb.svg

    Name:Seychelles, 
    Capital:Victoria,
    FlagLink:https://restcountries.eu/data/syc.svg

    Name:Sierra Leone, 
    Capital:Freetown,
    FlagLink:https://restcountries.eu/data/sle.svg

    Name:Singapore, 
    Capital:Singapore,
    FlagLink:https://restcountries.eu/data/sgp.svg

    Name:Sint Maarten (Dutch part), 
    Capital:Philipsburg,
    FlagLink:https://restcountries.eu/data/sxm.svg

    Name:Slovakia, 
    Capital:Bratislava,
    FlagLink:https://restcountries.eu/data/svk.svg

    Name:Slovenia, 
    Capital:Ljubljana,
    FlagLink:https://restcountries.eu/data/svn.svg

    Name:Solomon Islands, 
    Capital:Honiara,
    FlagLink:https://restcountries.eu/data/slb.svg

    Name:Somalia, 
    Capital:Mogadishu,
    FlagLink:https://restcountries.eu/data/som.svg

    Name:South Africa, 
    Capital:Pretoria,
    FlagLink:https://restcountries.eu/data/zaf.svg

    Name:South Georgia and the South Sandwich Islands, 
    Capital:King Edward Point,
    FlagLink:https://restcountries.eu/data/sgs.svg

    Name:Korea (Republic of), 
    Capital:Seoul,
    FlagLink:https://restcountries.eu/data/kor.svg

    Name:South Sudan, 
    Capital:Juba,
    FlagLink:https://restcountries.eu/data/ssd.svg

    Name:Spain, 
    Capital:Madrid,
    FlagLink:https://restcountries.eu/data/esp.svg

    Name:Sri Lanka, 
    Capital:Colombo,
    FlagLink:https://restcountries.eu/data/lka.svg

    Name:Sudan, 
    Capital:Khartoum,
    FlagLink:https://restcountries.eu/data/sdn.svg

    Name:Suriname, 
    Capital:Paramaribo,
    FlagLink:https://restcountries.eu/data/sur.svg

    Name:Svalbard and Jan Mayen, 
    Capital:Longyearbyen,
    FlagLink:https://restcountries.eu/data/sjm.svg

    Name:Swaziland, 
    Capital:Lobamba,
    FlagLink:https://restcountries.eu/data/swz.svg

    Name:Sweden, 
    Capital:Stockholm,
    FlagLink:https://restcountries.eu/data/swe.svg

    Name:Switzerland, 
    Capital:Bern,
    FlagLink:https://restcountries.eu/data/che.svg

    Name:Syrian Arab Republic, 
    Capital:Damascus,
    FlagLink:https://restcountries.eu/data/syr.svg

    Name:Taiwan, 
    Capital:Taipei,
    FlagLink:https://restcountries.eu/data/twn.svg

    Name:Tajikistan, 
    Capital:Dushanbe,
    FlagLink:https://restcountries.eu/data/tjk.svg

    Name:Tanzania, United Republic of, 
    Capital:Dodoma,
    FlagLink:https://restcountries.eu/data/tza.svg

    Name:Thailand, 
    Capital:Bangkok,
    FlagLink:https://restcountries.eu/data/tha.svg

    Name:Timor-Leste, 
    Capital:Dili,
    FlagLink:https://restcountries.eu/data/tls.svg

    Name:Togo, 
    Capital:Lomé,
    FlagLink:https://restcountries.eu/data/tgo.svg

    Name:Tokelau, 
    Capital:Fakaofo,
    FlagLink:https://restcountries.eu/data/tkl.svg

    Name:Tonga, 
    Capital:Nuku'alofa,
    FlagLink:https://restcountries.eu/data/ton.svg

    Name:Trinidad and Tobago, 
    Capital:Port of Spain,
    FlagLink:https://restcountries.eu/data/tto.svg

    Name:Tunisia, 
    Capital:Tunis,
    FlagLink:https://restcountries.eu/data/tun.svg

    Name:Turkey, 
    Capital:Ankara,
    FlagLink:https://restcountries.eu/data/tur.svg

    Name:Turkmenistan, 
    Capital:Ashgabat,
    FlagLink:https://restcountries.eu/data/tkm.svg

    Name:Turks and Caicos Islands, 
    Capital:Cockburn Town,
    FlagLink:https://restcountries.eu/data/tca.svg

    Name:Tuvalu, 
    Capital:Funafuti,
    FlagLink:https://restcountries.eu/data/tuv.svg

    Name:Uganda, 
    Capital:Kampala,
    FlagLink:https://restcountries.eu/data/uga.svg

    Name:Ukraine, 
    Capital:Kiev,
    FlagLink:https://restcountries.eu/data/ukr.svg

    Name:United Arab Emirates, 
    Capital:Abu Dhabi,
    FlagLink:https://restcountries.eu/data/are.svg

    Name:United Kingdom of Great Britain and Northern Ireland, 
    Capital:London,
    FlagLink:https://restcountries.eu/data/gbr.svg

    Name:United States of America, 
    Capital:Washington, D.C.,
    FlagLink:https://restcountries.eu/data/usa.svg

    Name:Uruguay, 
    Capital:Montevideo,
    FlagLink:https://restcountries.eu/data/ury.svg

    Name:Uzbekistan, 
    Capital:Tashkent,
    FlagLink:https://restcountries.eu/data/uzb.svg

    Name:Vanuatu, 
    Capital:Port Vila,
    FlagLink:https://restcountries.eu/data/vut.svg

    Name:Venezuela (Bolivarian Republic of), 
    Capital:Caracas,
    FlagLink:https://restcountries.eu/data/ven.svg

    Name:Viet Nam, 
    Capital:Hanoi,
    FlagLink:https://restcountries.eu/data/vnm.svg

    Name:Wallis and Futuna, 
    Capital:Mata-Utu,
    FlagLink:https://restcountries.eu/data/wlf.svg

    Name:Western Sahara, 
    Capital:El Aaiún,
    FlagLink:https://restcountries.eu/data/esh.svg

    Name:Yemen, 
    Capital:Sana'a,
    FlagLink:https://restcountries.eu/data/yem.svg

    Name:Zambia, 
    Capital:Lusaka,
    FlagLink:https://restcountries.eu/data/zmb.svg

    Name:Zimbabwe, 
    Capital:Harare,
    FlagLink:https://restcountries.eu/data/zwe.svg
