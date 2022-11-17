<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
		"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
<?php include "../scripts/header.html"; ?>
<h6><img src="http://musicfamily.org/realm/Factions/picks/TopPageResearch.png" alt="Spellcraft" align="middle"></h6>
<br/>
<script>
var buildData = [
	{
		title: 'Production Builds (R116-125)',
		builds: [
			{
				title: 'R116+ Druidline Elves',
				author: 'Sad, ElJay',
				range: '0 Gems - 1e36 (1 Ud)',
				faction: 'Elf',
				bloodline: 'Druid',
				artifactSet: 'Dwarf (If you do not have it at R116, use Undead)',
				researchBuilds: [{
					researches: 'S175,S3200,C1,C225,C340,C405,C520,C590,D50,D435,D1375,E25,E410,E3250,A495,A3400,W10,W560,W1375',
					notes: [
						'Not intended to get to SS7',
						'Profits from manual clicking',
					],
				}],
			},
			{
				title: 'R116-R125 Facelessline Elves 1e36 (1 Ud) - 1e50 (100 Qid)',
				author: 'Ensteffahn and RellikRellik, minorly adjusted by Pent',
				range: '1e36 (1 Ud) Gems - 1e50 (100 Qid)',
				faction: 'Elf',
				bloodline: 'Faceless',
				artifactSet: 'Dwarf',
				researchBuilds: [{
					researches: 'S175,S3200,C1,C225,C340,C405,C520,C590,D50,D435,D1375,E25,E145,E410,A495,A3400,W10,W560,W1375',
					notes: [
						'Profits from manual clicking',
					],
				}],
			},
			{
				title: 'R116-R125 Dragonline Angel 1e50 (100 Qid)+',
				author: 'ensteffahn',
				range: '1e50 (100 Qid) Gems+',
				recommendation: 'Uniformity and TTC4 buffs (100%+ and 400%+ at least)',
				faction: 'Angel',
				bloodline: 'Dragon',
				artifactSet: 'Angel',
				researchBuilds: [
					{
						researches: 'S10,S3200,C25,C400,C405,C520,D1,D175,D435,D590,D1375,E145,E410,A50,A120,A495,W180,W225,W560',
						notes: [
							'Can take a little to build up. Runs can take ~2h close to reincarnation amount of gems',
						],
					},
					{
						when: '1e65',
						what: 'switch from Angel set to Dwarf set', // outputs "At 1e65 (100Vg), switch from Angel set to Dwarf set"
					},
					{
						when: '1e67',
						researches: 'S10,S3200,C25,C340,C405,C520,D1,D175,D435,D590,D1375,E145,E410,A50,A120,A495,W180,W225,W560', // auto-outputs "At 1e67 (10Uvg), drop C400 for C430"
					}
				],
			},
		],
	},
	{
		title: 'Artifact Builds',
		builds: [
			{
				title: 'Beard Hair (Dwarf Set)',
				author: 'Sad',
				range: '?',
				faction: 'Fairy',
				bloodline: 'Undead',
				artifactSet: 'Fairy',
				researches: 'S1,S180,S400,S590,C10,C340,C405,C520,D225,D1375,D435,E50,E135,E410,A30,A120,A495,W560,W1375',
			},
			{
				title: 'Ancestral Hourglass',
				author: 'Xoneris',
				range: '1e55 (10 Spd)+',
				faction: 'Faceless',
				bloodline: 'Titan',
				artifactSet: 'Goblin',
				researchBuilds: [{
					researches: 'S251,S375,S1450,S1500,S3200,C400,C1300,D150,D260,D1125,E320,E350,E1225,A300,A1200,A3400,W275,W1375,W1400',
					notes: [
						'Run a quick Max Assistants (Undeadline Fairies) build prior to buff W275',
						'Having more gems is beneficial as the multiplicate increase to Faction Coin find chance from Lightning Strike is based on Gems you own',
						'Build should reach at least 5e14% Faction Coin find chance',
					],
				}],
			},
			{
				title: 'Lantern Of Guidance (Tier 2 Temporal Flux) (R120+)',
				author: 'Sad',
				range: '1e52+ (1 Sxd) Gems+',
					faction: 'Angel',
					bloodline: 'Druid',
					artifactSet: 'Angel',
					researchBuilds: [{
						researches: 'S10,S3200,C25,C400,C405,C520,D1,D175,D290,D435,D590,E135,E410,A50,A120,A495,W225,W560,W1375',
						notes: [
							'Can reach 7e9 (7 B) - 1e10 (10 B) mana regen',
						],
					}],
			},
		],
	},
	{
		title: 'Buff Builds',
		builds: [
			{
				title: 'Undeadline Fairies (Max Assistants)',
				author: 'Sad',
				range: '?',
				requirements: 'Dwarven Union',
				faction: 'Fairy',
				bloodline: 'Undead',
				artifactSet: 'Dwarf',
				researches: 'S1,S180,S400,S590,C10,C340,C405,C520,D225,D435,D1375,E50,E135,E410,A30,A120,A495,W560,W1375',
			},
			{
				title: 'Dragonline Undead (Higher Gems Max Assistants + Drow Master)',
				author: 'Glenniss2, Iluxa4000',
				range: '1e64',
				faction: 'Undead',
				bloodline: 'Dragon',
				artifactSet: 'Dwarf',
				researchBuilds: [{
					researches: 'S225,S435,S3200,C340,D25,D560,D1375,E10,E400,E495,A1,A175,A410,A590,A3400,W50,W205,W405,W520',
					notes: [
						'Cast only Tax Collection until you get Dragon lineage',
						'Run the build until 15 minutes after DW12 is bought at minimum',
					],
				}],
			},
			{
				title: 'Dragonline Goblins (Spells cast)',
				author: 'Sad',
				range: '1e52 (10 SxD) gems+',
				faction: 'Goblin/Drow',
				bloodline: 'Dragon',
				artifactSet: 'Undead',
				researches: 'S50,S435,S3200,C175,C340,D290,D560,E1,E135,E225,E495,E590,A10,A120,A410,W25,W205,W405,W520',
			},
			{
				title: 'Dragonline Angels (Mana Spent)',
				author: 'Ensteffahn',
				range: '?',
				faction: 'Angel/Dwarf',
				bloodline: 'Dragon',
				artifactSet: 'Elf',
				researchBuilds: [{
					researches: 'S10,S400,C25,C400,C405,C520,D1,D175,D290,D435,D590,E135,E410,A50,A120,A495,W225,W400,W560',
					notes: [
						'Estimated Time to Primal Balance +10 is ?',
					],
				}],
			},
		],
	},
	{
		title: 'Lineage level 30 Builds R120+',
		notes: [
			'Start with Dwarfline and go from there',
		],
		builds: [
			{
				title: 'Dwarfline Druid (Dwarf L30)',
				author: 'kuerti',
				range: '7e61',
				requirements: 'Future Linkin, Ancestral Hourglass, possibly 1-2 available excavation resets',
				faction: 'Druid',
				bloodline: 'Dwarf',
				artifactSet: 'Dwarf',
				researchBuilds: [{
					researches: 'S1450,S3200,C300,C340,C1300,D275,D290,D1125,E260,E290,E1225,A120,A251,A375,A1200,A1500,W350,W400,W1400',
					notes: [
						'Build is based on Dwarven Perk 3 boosting Dragon Challenge 4, allowing you to excavate for the required Faction Coins',
					],
				}],
			},
			{
				title: 'Faceless lineage leveler (L30) (for all but Facelessline and Dragonline)',
				author: 'Xantcha',
				range: '7e61',
				requirements: 'Future Linkin, Ancestral Hourglass, Any L30 Lineage',
				faction: 'Faceless',
				bloodline: 'Any except for Faceless and Dragons',
				artifactSet: 'Matching bloodline set for FC bonus',
				researchBuilds: [{
					researches: 'S251,S375,S1450,S1500,S3200,C400,C1300,D260,D1125,D1375,E320,E350,E1225,A300,A1200,A3400,W275,W1375,W1400',
					notes: [
						'Requires a L30 lineage, use Dwarfline Druid',
						'Run Dragonline Undead build to buff Max Assistants, takes around 20m to afford DW12',
						'Performs well for Elven and Drow (less than 30min); Dwarven (~40min); Fairy, Goblin (both 10m); Undead, Titan (~5min). Might be faster depending on your stats',
						'Compared to other two builds, this one is faster for leveling DN and EL. If you\'re using an autoclicker, then DW is faster with the Elven build. Unsure about AN, DM, DD',
					],
				}],
			},
			{
				title: 'Goblin lineage leveler (L30) (for all but goblin and drowline)',
				author: 'Ender',
				range: '1e64 (10 Vg) Gems+',
				requirements: 'Future Linkin, Ancestral Hourglass',
				faction: 'Goblin/Drow',
				bloodline: 'Start with Dragonline, then rest. Doesn\'t work for Goblin or Drow',
				artifactSet: 'Dragon should use Dwarfset, Titan should use Angelset, everything else should use matching bloodline set for FC bonus',
				researchBuilds: [{
					researches: 'S50,S435,S3200,C175,C400,D560,D1375,E1,E225,E320,E495,E590,A10,A410,A3400,W25,W405,W520,W1375',
					notes: [
						'For titan, angel and elf, switch S3200 to S400',
						'Dragon will take a while, but ancestral heirloom will make the rest easier. Most should be very fast (sub 10min) with just elf taking a while (~3h for me)',
					],
				}],
			},
			{
				title: 'Elf Lineage Leveler (L30)',
				author: 'Ender',
				range: '1e64',
				requirements: 'Future Linkin, Ancestral Hourglass',
				faction: 'Elf',
				bloodline: 'Goblin/Drow',
				artifactSet: 'Dwarf for both',
				researches: 'S3200,S175,C400,C590,D1375,E320,A3400,W1375',
			},
		],
	},
];

(function ($) {
	$(document).ready(function () {
		generateBuildPage(buildData);
	});
})(jQuery);
</script>
<div id="builds"></div>
<?php include "../scripts/footer.html"; ?>
