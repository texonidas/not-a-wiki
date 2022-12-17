import React from "react"
import PropTypes from "prop-types"

import pkcs7 from "./utils/pkcs7"

const HTML = (props) => (
  <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="http://musicfamily.org/realm/Factions/picks/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/realm/scripts/common.css"/>
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.0/jquery.min.js" integrity="sha512-K7Zj7PGsHk2fpY3Jwvbuo9nKc541MofFrrLaUUO9zqghnJxbZ3Zn35W/ZeXvbT2RtSujxGbw8PgkqpoZXXbGhw==" crossOrigin="anonymous"></script>
      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      <script src="http://musicfamily.org/realm/scripts/jquery.style-my-tooltips.js"></script>
      <title>G00F's Not a Wiki </title>
      <meta charSet="UTF-8" />
      <meta name="keywords" content="Realm Grinder, Game, Artifact, Artifacts, Factions, Reincarnation, Challenges, Mercenary Builds, Mercenary, Research Builds, Research, Upgrades, Spells, Ascension, Ascension Builds, Prestige Research, Prestige, Prestige Builds, Kongregate, Trophies, Trophy, Faction Champion, Games, Coins, Treasure, Mana, Assistants, Gem, Gems,  Archaeology, Excavation, Ruby, Rubies, Lore Artifacts, Quest Artifacts, Fairy, Elven, Angel, Goblin, Undead, Demon, Titan, Druid, Faceless, Dwarven, Drow, Research, Notation, Premium Upgrades, Requirements, Final Reward, Reward" />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div id="outer">
        <div id="parent">
          <div id="header" align="center">
          </div>
        </div>
        <div id="navbox">
          <div className="menu">
            <ul>
              <li>
                <a href="/realm/Challenges" research="A complete list of Challenges and their requirements in image map form">Challenges</a>
                <ul>
                  <li><a href="/realm/Fairy" research="All Fairy Challenges">Fairy</a></li>
                  <li><a href="/realm/Elf" research="All Elven Challenges">Elven</a></li>
                  <li><a href="/realm/Angel" research="All Angel Challenges">Angel</a></li>
                  <li><a href="/realm/Goblin" research="All Goblin Challenges">Goblin</a></li>
                  <li><a href="/realm/Undead" research="All Undead Challenges">Undead</a></li>
                  <li><a href="/realm/Demon" research="All Demon Challenges">Demon</a></li>
                  <li><a href="/realm/Titan" research="All Titan Challenges">Titan</a></li>
                  <li><a href="/realm/Druid" research="All Druid Challenges">Druid</a></li>
                  <li><a href="/realm/Faceless" research="All Faceless Challenges">Faceless</a></li>
                  <li><a href="/realm/Dwarf" research="All Dwarven Challenges">Dwarven</a></li>
                  <li><a href="/realm/Drow" research="All Drow Challenges">Drow</a></li>
                  <li><a href="/realm/Dragons" research="All Dragon Challenges">Dragon</a></li>
                  <li><a href="/realm/Archon" research="All Archon Challenges">Archon</a></li>
                  <li><a href="/realm/Djinn" research="All Djinn Challenges">Djinn</a></li>
                  <li><a href="/realm/Makers" research="All Makers Challenges">Makers</a></li>
                  <li><a href="/realm/Mercenary" research="All Mercenary Challenges">Mercenary</a></li>
                  <ul />
                </ul>
              </li>
              <li><a href="/realm/TrophyPage" research="A complete list of Trophies and their requirements in image map form">Trophies</a>
              </li>
              <li><a href="/realm/Factions">Factions</a>
                <ul>
                  <li><a href="/realm/FairyFaction" research="Fairy">Fairy</a></li>
                  <li><a href="/realm/ElfFaction" research="Elven">Elven</a></li>
                  <li><a href="/realm/AngelFaction" research="Angel">Angel</a></li>
                  <li><a href="/realm/GoblinFaction" research="Goblin">Goblin</a></li>
                  <li><a href="/realm/UndeadFaction" research="Undead">Undead</a></li>
                  <li><a href="/realm/DemonFaction" research="Demon">Demon</a></li>
                  <li><a href="/realm/TitanFaction" research="Titan">Titan</a></li>
                  <li><a href="/realm/DruidFaction" research="Druid">Druid</a></li>
                  <li><a href="/realm/FacelessFaction" research="Faceless">Faceless</a></li>
                  <li><a href="/realm/DwarfFaction" research="Dwarven">Dwarven</a></li>
                  <li><a href="/realm/DrowFaction" research="Drow">Drow</a></li>
                  <li><a href="/realm/DragonFaction" research="Dragon">Dragon</a></li>
                  <li><a href="/realm/MercenaryFaction" research="Mercenary">Mercenary</a></li>
                  <li><a href="/realm/ArchonFaction" research="Archon">Archon</a></li>
                  <li><a href="/realm/DjinnFaction" research="Djinn">Djinn</a></li>
                  <li><a href="/realm/MakersFaction" research="Makers">Makers</a></li>
                </ul>
              </li>
              <li><a href="/realm/Artifacts" research="A complete list of Artifacts and their requirements in image map form">Artifacts</a>
                <ul>
                  <li><a href="/realm/QuestArtifacts/" research="Quest Artifacts">Quest Artifacts</a></li>
                  <li><a href="/realm/LoreArtifacts/" research="Lore Artifacts">Lore Artifacts</a></li>
                </ul>
              </li>
              <li><a href="/realm/Research">Research</a>
                <ul>
                  <li><a href="/realm/ResearchList" research="Research List">Research List</a></li>
                  <li><a href="/realm/Researchtree" research="Research Tree">Research Tree</a></li>
                  <li><a href="/realm/UniqueBuilding" research="Unique Buildings">Unique Buildings</a></li>
                </ul>
              </li>
              <li><a href="/realm/Notation">Notation</a>
              </li>
              <li><a href="/realm/PremiumUpgrades/">Premium</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="parent">
          <div id="leftcolumn">
            <div id="leftbox">
            </div>
            <div id="navcontainer">
              <ul id="navlist">
                <li id="active">
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="encrypted" value={pkcs7} />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                    <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                  </form>
                </li>
                <li id="active"><a href="/realm" id="current">Home</a></li>
                <li id="active"><a href="/realm/GuestBook/gbook.php" id="current">G00F's<br/>not a Guest Book</a></li>
                <li id="active"><a href="/realm/SiteMap/" id="current">Sitemap</a></li>
                <li id="active"><a href="/realm/Kong">Kongregate Links</a></li>
                <li id="active"><a href="/realm/WallofShame">Wall of Shame</a></li>
                <li id="active"><a href="/realm/Changes/" id="current">Latest Major Patch</a></li>
                <li id="active"><a href="/realm/Changelog">Changelog</a></li>
                <li id="active"><a href="https://discord.gg/cq6zmQX" id="current">Official Realm Grinder Discord</a></li>
                <p align="center">The Game</p>
                <li id="active"><a href="/realm/GameWindow">Game Window</a></li>
                <li id="active"><a href="/realm/Notation">Notation</a></li>
                <li id="active"><a href="/realm/Terminology">Terminology<br/>HotKeys</a></li>
                <li id="active"><a href="/realm/RNG/" id="current">Random Number Generator</a></li>
                <li id="active"><a href="/realm/Reset">Abdication<br/>Reincarnation<br/>Ascension</a></li>
                <li id="active"><a href="/realm/Ascension2">Ascension 2</a></li>
                <li id="active"><a href="/realm/Ascension4">Ascension 4</a></li>
                <li id="active"><a href="/realm/Events">Events</a></li>
                <p align="center">Tools and Guides</p>
                <li id="active"><a href="/realm/Tools">Realm Grinder Tools</a></li>
                <li id="active"><a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1118498519">Beginners Guide </a></li>
                <li id="active"><a href="/realm/TrophyGuide">Trophy Guide</a></li>
                <li id="active"><a href="/realm/R16Guide">R16 Research Guide</a></li>
                <p align="center">Upgrades</p>
                <li id="active"><a href="/realm/Upgrades">Misc Upgrades</a></li>
                <li id="active"><a href="/realm/BuildingAlignments">Building Alignments</a></li>
                <li id="active"><a href="/realm/BuildingUpgrades">Building Upgrades</a></li>
                <li id="active"><a href="/realm/PremiumUpgrades">Premium Upgrades</a></li>
                <li id="active"><a href="/realm/Rubies">Rubies</a></li>
                <li id="active"><a href="/realm/TrophyPage" reserach="A complete list of Trophies">Trophy Page</a></li>
                <li id="active"><a href="/realm/Factions">Factions</a></li>
                <li id="active"><a href="/realm/FactionUpgrades">Faction Upgrades</a></li>
                <li id="active"><a href="/realm/Spells">Spells</a></li>
                <li id="active"><a href="/realm/Heritages">Heritages</a></li>
                <li id="active"><a href="/realm/Artifacts/">Artifacts</a></li>
                <li id="active"><a href="/realm/Challenges/">Challenges</a></li>
                <li id="active"><a href="/realm/Bloodline">Bloodlines</a></li>
                <li id="active"><a href="/realm/Research">Research</a></li>
                <li id="active"><a href="/realm/Researchtree">Research Tree</a></li>
                <li id="active"><a href="/realm/SunForce">Sun Force</a></li>
                <li id="active"><a href="/realm/SpellTiers">Spell Tiers</a></li>
                <li id="active"><a href="/realm/Lineages">Lineages</a></li>
                <li id="active"><a href="/realm/ArtifactSet">Artifact Sets</a></li>
                <li id="active"><a href="/realm/Legacies">Legacies</a></li>
                <p align="center">Builds</p>
                <li id="active"><a target="_blank" research="R0 - R39 Guide" href="/realm/A0_Plot.png">A0 Plot <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/MercBuilds" research="Mercenaries">R3-R16 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/ResearchBuilds" research="Research">R16-R29 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/PBuilds" research="Prestige Research">R30-R39 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a target="_blank" research="R40 - R99 Guide" href="/realm/A1_Plot.png">A1 Plot <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R40-R46" research="Ascension 1">R40-R46 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R47-R60" research="Dragons">R47-R59 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R60-R75" research="Lineages">R60-R75 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R75Plus" research="Mercenary Research">R75-R99 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a target="_blank" research="R100 - R159 Guide" href="/realm/A2_Plot.png">A2 Plot</a></li>
                <li id="active"><a href="/realm/R100Plus" research="Ascension 2">R100-R115 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R116Plus" research="Prestige Ascension 2">R116-R125 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R125Plus" research="Elite Factions">R125-R135 Builds</a></li>
                <li id="active"><a href="/realm/R135Plus" research="Elite Challenges">R135-R159 Builds</a></li>
                <li id="active"><a target="_blank" research="R160+ Guide" href="/realm/A3_Plot.png">A3 Plot <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R160Plus" research="Ascension 3">R160-R189 Builds</a></li>
                <li id="active"><a href="/realm/R190Plus" research="Mercenary Challenges">R190-R219 Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
                <li id="active"><a href="/realm/R220Plus" research="Ascension 4">R220+ Builds <span style={{color: 'gold'}}>(Not updated for v4.2)</span></a></li>
              </ul>
            </div>
          </div>
          <div id="rightcolumn">
            <div className="rightbox">
              <div className="rightboxcontent">
                <a href="https://discord.gg/cq6zmQX" research="Click to join Realm Grinder Chat on Discord"><img src="http://musicfamily.org/realm/Factions/picks/RealmGrinderGameRL.png" />
                </a>
              </div>
            </div>
          </div>
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}

          <div id="footer" />
        </div>
      </div>
      <table
        style={{
          width: '100%',
          marginTop: '1em',
          border :'1px solid #',
          fontSize: '90%',
          textAlign: 'center',
        }}
      >
        <tbody>
          <tr>
            <td style={{padding: '0.2em 0.5em'}}>
              {/* this desperately needs to be fixed lol  */}
              <font color="#98AFC7"> | <a href="/realm/Resources" research="Mana - Coins - Faction Coins - Gems - Rubies - Kreds"><font color="#98AFC7">Resources</font></a><font color="#98AFC7"> | <a href="/realm/Reset" research="Reset - Abdication - Reincarnation"><font color="#98AFC7">Soft Resets</font></a><font color="#98AFC7"> | <a href="/realm/BuildingAlignments" research="Building Alignments" className=""><font color="#98AFC7">Buildings</font></a><font color="#98AFC7"> | <a href="/realm/Heritages" research="Faction Heritages" className=""><font color="#98AFC7">Heritages</font></a><font color="#98AFC7"> | <a href="/realm/Bloodline" research="Faction Bloodlines" className="mw-redirect"><font color="#98AFC7">Bloodlines</font></a><font color="#98AFC7">
              | <a href="/realm/Spells" research="Spells and Tier unlock Times"><font color="#98AFC7">Spells</font></a><font color="#98AFC7"> | <a href="/realm/Artifacts" research="Excavations"><font color="#98AFC7">Excavations</font></a><font color="#98AFC7">  | <a href="/realm/Challenges" research="Complete list of Challenges and descriptions"><font color="#98AFC7">Challenges</font></a><font color="#98AFC7"> | <a href="/realm/Upgrades" research="Upgrades"><font color="#98AFC7">Upgrades</font></a><font color="#98AFC7"> | <a href="/realm/TrophyPage" research="Complete list of Trophies and descriptions" className=""><font color="#98AFC7">Trophies</font></a><font color="#98AFC7">
              | <a href="/realm/Factions" research="Factions" className=""><font color="#98AFC7">Factions</font></a><font color="#98AFC7"> | <a href="/realm/Research" research="The Research Facilities - Short and long names"><font color="#98AFC7">Research</font></a><font color="#98AFC7"> |
              <p> | <a href="/realm/MercBuilds" research="Mercenary Builds"><font color="#98AFC7">Merc Builds</font></a><font color="#98AFC7"> | <a href="/realm/ResearchBuilds" research="Research Builds" className=""><font color="#98AFC7">Research Builds</font></a><font color="#98AFC7"> | <a href="/realm/PBuilds" research="Evil and Good Prestige Builds"><font color="#98AFC7">Prestige Builds</font></a><font color="#98AFC7"> | <a href="/realm/R40-R46" research="Ascension Builds"><font color="#98AFC7">Dragon Unlock</font></a><font color="#98AFC7"> | <a href="/realm/R47-R60" research="Neutral Prestige Builds"><font color="#98AFC7">Neutral Prestige Builds</font></a><font color="#98AFC7"> | <a href="/realm/Researchtree" research="Complete list of Research and descriptions"><font color="#98AFC7">Research Tree</font></a><font color="#98AFC7"> |
              </font></font></font></font></font></font></p><font color="#98AFC7"><font color="#98AFC7"><font color="#98AFC7">
              <p>  |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #f1e9d1'}}> <a research="Vanilla Factions<p><font color=Blue>Good</font>: <font color=#efbbf0>Fairy, <font color=#46bd53>Elf</font>, <font color=#b1f4f1>Angel<p><font color=DarkRed>Evil</font>: <font color=#b8b87b>Goblin</font>, <font color=#62269d>Undead</font>, <font color=#e55131>Demon</font><p><font color=DarkGoldenRod>Neutral</font>: <font color=#eed835>Titan</font>, <font color=#876137>Druid</font>, <font color=#ac94ec>Faceless" className=""><font color="#98AFC7">Vanilla Factions</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #4db1e8'}}> <a research="Good Factions<p><font color=#efbbf0>Fairy<p><font color=#46bd53>Elf<p><font color=#b1f4f1>Angel<p>"><font color="#98AFC7">Good Factions</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #a0000d'}}> <a research="Evil Factions<p><font color=#b8b87b>Goblin<p><font color=#62269d>Undead<p><font color=#e55131>Demon"><font color="#98AFC7">Evil Factions</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #dcdcdc'}}> <a research="Neutral Factions<p><font color=#eed835>Titan<p><font color=#876137>Druid<p><font color=#ac94ec>Faceless"><font color="#98AFC7">Neutral Factions</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #000000'}}> <a research="Prestige Factions<p><font color=#3333e6>Dwarf<p><font color=#9a0368>Drow<p><font color=#006400>Dragon"><font color="#98AFC7">Prestige Factions</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #000000'}}> <a research="A2 Elite Factions<p><font color=#B0C4DE>Archon<p><font color=#483D8B>Djinn<p><font color=#C0C0C0>Makers"><font color="#98AFC7">A2 Elite Factions</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7"> |
              </font></font></font></font></font></font></p><font color="#98AFC7"><font color="#98AFC7"><font color="#98AFC7">
              | <a href="/realm/Events" research="Events"><font color="#98AFC7">Events</font></a><font color="#98AFC7">  | <a href="/realm/Changes" research="Latest Major Patch"><font color="#98AFC7">Latest Major Patch</font></a><font color="#98AFC7"> | <a href="/realm/Changelog" research="Changelog"><font color="#98AFC7">Changelog</font></a><font color="#98AFC7"> | <a href="/realm/Notation" research="Short - Scientific - Engineering"><font color="#98AFC7">Notation</font></a><font color="#98AFC7"> |  <a href="/realm/Terminology" research="Commonly used terms and abbreviations"><font color="#98AFC7">Terminology</font></a><font color="#98AFC7"> | <a href="/realm/Tools" research="Realm Weather Service - pastebin - auto clicker - Royal Scribe - Lara Crypt - imgur.com - Realm Grinder Wiki"><font color="#98AFC7">Tools</font></a><font color="#98AFC7"> | <a href="/realm/Kong" research="Help"><font color="#98AFC7">Kongregate Links</font></a><font color="#98AFC7">  |
              <p>  |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #efbbf0'}}> <a href="/realm/FairyFaction" research="Fairy (Good)"><font color="#98AFC7">Fairy</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #46bd53'}}> <a href="/realm/ElfFaction" research="Elf (Good)"><font color="#98AFC7">Elven</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #b1f4f1'}}> <a href="/realm/AngelFaction" research="Angel (Good)"><font color="#98AFC7">Angel</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #b8b87b'}}> <a href="/realm/GoblinFaction" research="Goblin (Evil)"><font color="#98AFC7">Goblin</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #62269d'}}> <a href="/realm/UndeadFaction" research="Undead (Evil)"><font color="#98AFC7">Undead</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #e55131'}}> <a href="/realm/DemonFaction" research="Demon (Evil)" className=""><font color="#98AFC7">Demon</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #eed835'}}> <a href="/realm/TitanFaction" research="Titan (Neutral)"><font color="#98AFC7">Titan</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #876137'}}> <a href="/realm/DruidFaction" research="Druid (Neutral)"><font color="#98AFC7">Druid</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #ac94ec'}}> <a href="/realm/FacelessFaction" research="Faceless (Neutral)"><font color="#98AFC7">Faceless</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7"> |
              </font></font></font></font></font></font></font></font></font></p><font color="#98AFC7"><font color="#98AFC7"><font color="#98AFC7">
              <p> | <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #000000'}}> <a href="/realm/MercenaryFaction" research="Mercenary"><font color="#98AFC7">Mercenary</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #3333e6'}}> <a href="/realm/DwarfFaction" research="Dwarf (Good Prestige)"><font color="#98AFC7">Dwarf</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #9a0368'}}> <a href="/realm/DrowFaction" research="Drow (Evil Prestige)"><font color="#98AFC7">Drow</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #006400'}}> <a href="/realm/DragonFaction" research="Dragon (Neutral Prestige)"><font color="#98AFC7">Dragon</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #B0C4DE'}}> <a href="/realm/ArchonFaction" research="Archon (A2 Elite)"><font color="#98AFC7">Archon</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #483D8B'}}> <a href="/realm/DjinnFaction" research="Djinn (A2 Elite)"><font color="#98AFC7">Djinn</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7">
                |  <span style={{ display: 'inline-block', padding: '1px 0', borderBottom: '5px solid #C0C0C0'}}> <a href="/realm/MakersFaction" research="Makers (A2 Elite)"><font color="#98AFC7">Makers</font></a><font color="#98AFC7"> </font></span><font color="#98AFC7"> |
              </font></font></font></font></font></font></font></p><font color="#98AFC7"><font color="#98AFC7"><font color="#98AFC7">
              </font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>
            </td>
          </tr>
        </tbody>
      </table>
      <p align="center"><font color="#98AFC7"> Contact me <a target="_blank" href="http://www.kongregate.com/accounts/G00FBALL/"><font color="#98AFC7"><b>G00FBALL</b></font></a></font></p>
      <div align="center">
        <font color="#98AFC7">
          <b>Thank You!!! for all your help.</b><p></p>
          <marquee className="html-marquee" direction="up" behavior="scroll" scrollamount="2">
            <p align="center">5ku||3d</p>
            <p align="center">6000j</p>
            <p align="center">7636kei</p>
            <p align="center">Aaborg</p>
            <p align="center">Aaron Cook</p>
            <p align="center">acbdefgfedbca</p>
            <p align="center">acer4321</p>
            <p align="center">Ach3ck</p>
            <p align="center">AJZ3</p>
            <p align="center">AKL</p>
            <p align="center">Alright</p>
            <p align="center">Altoscholto</p>
            <p align="center">Amirin</p>
            <p align="center">Anathah</p>
            <p align="center">AndreikaD</p>
            <p align="center">Antendren</p>
            <p align="center">apocal_88</p>
            <p align="center">arcanmster</p>
            <p align="center">Archmage</p>
            <p align="center">arintayn2</p>
            <p align="center">ARTEZZ</p>
            <p align="center">art-of-dom</p>
            <p align="center">ash1soccer</p>
            <p align="center">Ashthar</p>
            <p align="center">aurora</p>
            <p align="center">aviv</p>
            <p align="center">Azua</p>
            <p align="center">Bearpaws</p>
            <p align="center">BigGeak</p>
            <p align="center">bigshawnt</p>
            <p align="center">BillK14</p>
            <p align="center">BionicFrog</p>
            <p align="center">BioRules</p>
            <p align="center">blackbird</p>
            <p align="center">Blackeye</p>
            <p align="center">Blue</p>
            <p align="center">bobbert</p>
            <p align="center">Boffo</p>
            <p align="center">Book909</p>
            <p align="center">boss_mc</p>
            <p align="center">Boyo</p>
            <p align="center">brc48632</p>
            <p align="center">Breeze</p>
            <p align="center">btzeroes</p>
            <p align="center">burninglegion64</p>
            <p align="center">BuzzMarzz</p>
            <p align="center">CafeMaker</p>
            <p align="center">CamoBrie</p>
            <p align="center">capito27</p>
            <p align="center">Chaos</p>
            <p align="center">Chaosmancer7</p>
            <p align="center">chaosmarine4226</p>
            <p align="center">CheeseWitch</p>
            <p align="center">chris</p>
            <p align="center">chrispi</p>
            <p align="center">CHRullz</p>
            <p align="center">Ck</p>
            <p align="center">CluelessWonder</p>
            <p align="center">Coal_CC</p>
            <p align="center">ColdDrake13</p>
            <p align="center">Corgi</p>
            <p align="center">cralo</p>
            <p align="center">Cromedome</p>
            <p align="center">Cromieplays</p>
            <p align="center">Curunur</p>
            <p align="center">Cyden</p>
            <p align="center">Da Banana Man</p>
            <p align="center">DainDwarf</p>
            <p align="center">Damxacer1</p>
            <p align="center">Dariof4</p>
            <p align="center">DED SERVER</p>
            <p align="center">Delichtig</p>
            <p align="center">Dienes</p>
            <p align="center">djones0823</p>
            <p align="center">djru8ix</p>
            <p align="center">Doubleshoe</p>
            <p align="center">dox4242</p>
            <p align="center">DR</p>
            <p align="center">Draven</p>
            <p align="center">Drogor</p>
            <p align="center">drseilzug</p>
            <p align="center">EagleAgg03</p>
            <p align="center">Ebilkill</p>
            <p align="center">ehyder</p>
            <p align="center">eleganceseraph</p>
            <p align="center">ElJay</p>
            <p align="center">Eltro</p>
            <p align="center">Enexplogen</p>
            <p align="center">ensteffahn</p>
            <p align="center">ErrolErrolson</p>
            <p align="center">escalon</p>
            <p align="center">Essigschurke</p>
            <p align="center">Evengrey</p>
            <p align="center">Exsanguine</p>
            <p align="center">FastHit</p>
            <p align="center">FedeJossa</p>
            <p align="center">Fire</p>
            <p align="center">Flameslinger01</p>
            <p align="center">Fonzoland</p>
            <p align="center">Franelas</p>
            <p align="center">Freakomant</p>
            <p align="center">Fryguy9</p>
            <p align="center">furkannnO</p>
            <p align="center">fwbx529</p>
            <p align="center">gaccount</p>
            <p align="center">GalacManta</p>
            <p align="center">gamemasterty</p>
            <p align="center">Geno</p>
            <p align="center">Ghorre</p>
            <p align="center">Glitchstorm</p>
            <p align="center">Goholtramor</p>
            <p align="center">Grazloth</p>
            <p align="center">GreenMJ13</p>
            <p align="center">grelf</p>
            <p align="center">Guy</p>
            <p align="center">gvaiou</p>
            <p align="center">HeinQuek</p>
            <p align="center">HellTest</p>
            <p align="center">Heronimo2</p>
            <p align="center">heyitsdross</p>
            <p align="center">hiimahotdog</p>
            <p align="center">homebrewer54</p>
            <p align="center">Hotspot</p>
            <p align="center">iam10ninjas</p>
            <p align="center">Ignus</p>
            <p align="center">Igorogi</p>
            <p align="center">iluxa4000</p>
            <p align="center">Ilya</p>
            <p align="center">ivanovichkoslov</p>
            <p align="center">j8ner</p>
            <p align="center">jabberok</p>
            <p align="center">Jakeb2002</p>
            <p align="center">Jenetikitty</p>
            <p align="center">JezuzLizard</p>
            <p align="center">JGChan</p>
            <p align="center">jgchan29</p>
            <p align="center">Joa</p>
            <p align="center">johnharveybc</p>
            <p align="center">johnleprude</p>
            <p align="center">johny_blaze</p>
            <p align="center">jonny0panic</p>
            <p align="center">Just1pirate</p>
            <p align="center">Just1pirate</p>
            <p align="center">kabuto44</p>
            <p align="center">Kacper</p>
            <p align="center">Kain</p>
            <p align="center">Kanra</p>
            <p align="center">Kaos</p>
            <p align="center">Keben</p>
            <p align="center">kiluh</p>
            <p align="center">KRIEG</p>
            <p align="center">Kroll</p>
            <p align="center">kuerti</p>
            <p align="center">KuraTheDog</p>
            <p align="center">Kurt-bookboy</p>
            <p align="center">KyonLevic</p>
            <p align="center">Lailoken</p>
            <p align="center">Lapare</p>
            <p align="center">Lavi04</p>
            <p align="center">Lavi04</p>
            <p align="center">Lead Luigi</p>
            <p align="center">LeoB516</p>
            <p align="center">LeoC.II</p>
            <p align="center">lesd</p>
            <p align="center">lesdruides</p>
            <p align="center">Liraso</p>
            <p align="center">Lollipop</p>
            <p align="center">lordulster</p>
            <p align="center">Luio2revenge</p>
            <p align="center">lvl 1 crook</p>
            <p align="center">magnanimousCynic</p>
            <p align="center">Magnusly</p>
            <p align="center">ManDude33</p>
            <p align="center">mangafreak140</p>
            <p align="center">mangaking118</p>
            <p align="center">MarioFanaticXV</p>
            <p align="center">masteff</p>
            <p align="center">Masterzan</p>
            <p align="center">Matrix4767</p>
            <p align="center">Max Schradin</p>
            <p align="center">Maya</p>
            <p align="center">McguyverZero</p>
            <p align="center">Mechaflood</p>
            <p align="center">Merp</p>
            <p align="center">Milkopilko</p>
            <p align="center">mpeechee</p>
            <p align="center">Mr.Celedown</p>
            <p align="center">MrGerman</p>
            <p align="center">mrothorr</p>
            <p align="center">myogin</p>
            <p align="center">Mysticman89</p>
            <p align="center">MythWiz_</p>
            <p align="center">nakota</p>
            <p align="center">Namelessname</p>
            <p align="center">NateMcCloud</p>
            <p align="center">Necrodoom</p>
            <p align="center">NecroXD</p>
            <p align="center">Neutral Potato</p>
            <p align="center">NeutralPotato</p>
            <p align="center">Nizidramaniiyt</p>
            <p align="center">noonomoon</p>
            <p align="center">NTWgreatest</p>
            <p align="center">NTWgrinder</p>
            <p align="center">oholoko</p>
            <p align="center">Okami</p>
            <p align="center">okunderground</p>
            <p align="center">onianinara</p>
            <p align="center">Onoxious</p>
            <p align="center">Origin</p>
            <p align="center">oswarlan</p>
            <p align="center">OvenBakedGod</p>
            <p align="center">Paah</p>
            <p align="center">pacmanlite</p>
            <p align="center">Palamazzi</p>
            <p align="center">Parasitez83</p>
            <p align="center">Piezza24</p>
            <p align="center">pizza_troll</p>
            <p align="center">pkal</p>
            <p align="center">plaaosert</p>
            <p align="center">player2aj</p>
            <p align="center">Polibus</p>
            <p align="center">Popington</p>
            <p align="center">primal cradily</p>
            <p align="center">Proxy</p>
            <p align="center">pseudobyte</p>
            <p align="center">PseudonymousBosh</p>
            <p align="center">Pyxl</p>
            <p align="center">q1235</p><p></p>
            <p align="center">raato</p>
            <p align="center">Rade</p>
            <p align="center">RageBall</p>
            <p align="center">RastlinV</p>
            <p align="center">RebelKeithy</p>
            <p align="center">Redd</p>
            <p align="center">Redd</p>
            <p align="center">Regulus</p>
            <p align="center">Reknot</p>
            <p align="center">RetroDerpSquid9</p>
            <p align="center">rhaek7</p>
            <p align="center">Rustle Crowe</p>
            <p align="center">Ryonir</p>
            <p align="center">saitenhieb</p>
            <p align="center">SamGooBat</p>
            <p align="center">Sandworm</p>
            <p align="center">Sas Assassin</p>
            <p align="center">Sc0rp</p>
            <p align="center">Sefa</p>
            <p align="center">Seyliz</p>
            <p align="center">Shantie</p>
            <p align="center">shayner12</p>
            <p align="center">Sheer</p>
            <p align="center">Sho Phaune</p>
            <p align="center">Skulled190</p>
            <p align="center">Slakkarn</p>
            <p align="center">Slakkarn</p>
            <p align="center">slantfer</p>
            <p align="center">solidifiedmind</p>
            <p align="center">somarilnos</p>
            <p align="center">SomeoneLucas</p>
            <p align="center">Soulrift</p>
            <p align="center">Space Troll</p>
            <p align="center">spamtraprus</p>
            <p align="center">Spanosa</p>
            <p align="center">SRT</p>
            <p align="center">StAUG</p>
            <p align="center">stmlee</p>
            <p align="center">Stoner Claff</p>
            <p align="center">Sum Yung Gai</p>
            <p align="center">sunk</p>
            <p align="center">Suranis</p>
            <p align="center">swim</p>
            <p align="center">Synthini</p>
            <p align="center">Sythen2014</p>
            <p align="center">tangyifei</p>
            <p align="center">Tanny</p>
            <p align="center">Taxiway</p>
            <p align="center">tbrown30</p>
            <p align="center">Teabagger Vance</p>
            <p align="center">Technosaurus</p>
            <p align="center">Tenebricosus</p>
            <p align="center">Tenyasha</p>
            <p align="center">ThatGuy</p>
            <p align="center">The Homa</p>
            <p align="center">ThePeon</p>
            <p align="center">Thorian</p>
            <p align="center">toifel131</p>
            <p align="center">Tornadobird</p>
            <p align="center">torskenn</p>
            <p align="center">trevYT</p>
            <p align="center">Trewq_</p>
            <p align="center">TrostNi</p>
            <p align="center">Tskami_ek</p>
            <p align="center">Tyler</p>
            <p align="center">ukulelejongetje</p><p></p>
            <p align="center">UndeadAbbys</p>
            <p align="center">Uni</p>
            <p align="center">Username</p>
            <p align="center">uwnim</p>
            <p align="center">Valentin</p>
            <p align="center">Versine</p>
            <p align="center">VilgefortzPL</p>
            <p align="center">Vince</p>
            <p align="center">waga baba bobo</p>
            <p align="center">WaitingIdly</p>
            <p align="center">waterfire425</p>
            <p align="center">websterguy</p>
            <p align="center">Weedheter</p>
            <p align="center">Wlerin</p>
            <p align="center">Wolf415</p>
            <p align="center">wolfsblood</p>
            <p align="center">woopemgood</p>
            <p align="center">WynneYilmaz</p>
            <p align="center">xemima</p>
            <p align="center">XenosHg</p>
            <p align="center">Xentha</p>
            <p align="center">XenTwo</p>
            <p align="center">xeperiset</p>
            <p align="center">Xikre</p>
            <p align="center">Xorious</p>
            <p align="center">Xpt14</p>
            <p align="center">xXRochforteXx</p>
            <p align="center">Yarilo</p>
            <p align="center">ydc1017902176</p>
            <p align="center">yob</p>
            <p align="center">Zange</p>
            <p align="center">Zaraza</p>
            <p align="center">Zariars</p>
            <p align="center">Zeckenschwarm</p>
            <p align="center">Zeen</p>
            <p align="center">Zelphh1</p>
            <p align="center">Zepto</p>
            <p align="center">zionhian</p>
            <p align="center">Zyllyn</p>
            <p align="center">Zylon</p>
            <p align="center">Дикий Речной Пёс</p>
          </marquee>
          <div align="center">
            <a href="https://www.cutercounter.com/" target="_blank"><img src="https://www.cutercounter.com/hits.php?id=geqcfpc&amp;nd=9&amp;style=39" border="0" alt="visitor counter" /></a>
          </div>
        </font>
      </div>
    </body>
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML;
