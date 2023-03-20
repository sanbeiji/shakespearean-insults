function Insult() {
	insult1 = ["artless","bawdy","bawling","beslubbering","bootless","burly-boned","caluminous","churlish","clouted","cockered","craven","cullionly","currish","dankish","dissembling","droning","errant","fawning","feculent","fobbing","frothy","froward","fusty","giftless","gleeking","goatish","gorbellied","grim","impertinent","infectious","jarring","loggerheaded","lumpish","malodorous","mammering","mangled","mewling","misbegotten","odiferous","paunchy","pribbling","puking","puny","qualling","rank","reeky","roguish","ruttish","saucy","spleeny","spongy","sullied","surly","tottering","unmuzzled","vain","venomed","villainous","warped","wayward","weedy","wimpled","yeasty"];
	insult2 = ["base-court","bat-fowling","beef-witted","beetle-headed","boil-brained","clapper-clawed","clay-brained","common-kissing","crook-pated","dismal-dreaming","dizzy-eyed","doghearted","dread-bolted","earth-vexing","elf-skinned","fat-kidneyed","fen-sucked","flap-mouthed","fly-bitten","folly-fallen","fool-born","full-gorged","guts-griping","half-faced","hasty-witted","hedge-born","hell-hated","idle-headed","ill-breeding","ill-nurtured","knotty-pated","milk-livered","motley-minded","onion-eyed","plume-plucked","pottle-deep","pox-marked","reeling-ripe","rough-hewn","rude-growing","rump-fed","shard-borne","sheep-biting","spur-galled","swag-bellied","tardy-gaited","tickle-brained","toad-spotted","unchin-snouted","weather-bitten","whoreson","malmsey-nosed","rampallian","lily-livered","scurvy-valiant","brazen-faced","unwash'd","gleat-sucking","wart-encrusted"];
	insult3 = ["apple-john","baggage","barnacle","bed swerver","bobolyne","bladder","blind-worm","blumpkin","boar-pig","bugbear","bum-bailey","canker-bloss","clack-dish","clotpole","codpiece","coxcomb","cumberworld","cumberground","cur","dalcop","death-token","devil-monk","dewberry","donkey","eater of broken meats","flap-dragon","flax-wench","flirt-gill","fool","foot-licker","fustilarian","giglet","gudgeon","haggard","harecop","harpy","hedge-pig","horn-beast","hugger-mugge","joithead","jolt-head","knave","lewdster","lickspittle","lout","maggot-pie","malcontent","malt-worm","mammet","measle","minnow","miscreant","moldwarp","mumble-news","ninnycock","nut-hook","peasant","pigeon-egg","pignut","plague-rat","popinjay","pumpion","puttock","quim","ratsbane","rogue","ruffian","scullian","scut","skainsmate","stewed prune","strumpet","unnecessary letter","varlot","vassal","villain","wagtail","whey-face","wretch"];

	Array.prototype.randomItem = function () {
		return this[Math.floor(Math.random() * this.length)];
	}

	var shakespearianInsult = "Thou " + 
							  insult1.randomItem() + ", " + 
							  insult2.randomItem() + " " +
							  insult3.randomItem() + "!";
	return shakespearianInsult;
}
$(document).ready(function() {
		$("#insult_me").on('click', function () {
		$("#result").hide().html(Insult()).fadeIn(1200);
	});
});
