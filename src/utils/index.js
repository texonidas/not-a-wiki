//header
function shohid(e) {
  //$('.autohide').not(e.next()).hide();
  $(e).parents('.autohide').show();
  $(e).next().toggle();
}

$(document).ready(function () {
  $("#Expand").on("hide.bs.collapse", function () {
    $(".btn").html('<span class="glyphicon glyphicon-collapse-down"></span> Expand');
  });
  $("#Expand").on("show.bs.collapse", function () {
    $(".btn").html('<span class="glyphicon glyphicon-collapse-up"></span> Collapse');
  });
});
(function ($) {
  $(document).ready(function () {
    $("[research]").style_my_tooltips();
  });
})(jQuery);

// build stuff
var oomSuffix = {
  6:'M',
  7:'0M',
  8:'00M',
  9:'B',
  10:'0B',
  11:'00B',
  12:'T',
  13:'0T',
  14:'00T',
  15:'Qa',
  16:'0Qa',
  17:'00Qa',
  18:'Qi',
  19:'0Qi',
  20:'00Qi',
  21:'Sx',
  22:'0Sx',
  23:'00Sx',
  24:'Sp',
  25:'0Sp',
  26:'00Sp',
  27:'Oc',
  28:'0Oc',
  29:'00Oc',
  30:'No',
  31:'0No',
  32:'00No',
  33:'Dc',
  34:'0Dc',
  35:'00Dc',
  36:'Ud',
  37:'0Ud',
  38:'00Ud',
  39:'Dd',
  40:'0Dd',
  41:'00Dd',
  42:'Td',
  43:'0Td',
  44:'00Td',
  45:'Qad',
  46:'0Qad',
  47:'00Qad',
  48:'Qid',
  49:'0Qid',
  50:'00Qid',
  51:'Sxd',
  52:'0Sxd',
  53:'00Sxd',
  54:'Spd',
  55:'0Spd',
  56:'00Spd',
  57:'Ocd',
  58:'0Ocd',
  59:'00Ocd',
  60:'Nod',
  61:'0Nod',
  62:'00Nod',
  63:'Vg',
  64:'0Vg',
  65:'00Vg',
  66:'Uvg',
  67:'0Uvg',
  68:'00Uvg',
  69:'Dvg',
  70:'0Dvg',
  71:'00Dvg',
  72:'Tvg',
  73:'0Tvg',
  74:'00Tvg',
  75:'Qavg',
  76:'0Qavg',
  77:'00Qavg',
  78:'Qivg',
  79:'0Qivg',
  80:'00Qivg',
  81:'Sxvg',
  82:'0Sxvg',
  83:'00Sxvg',
  84:'Spvg',
  85:'0Spvg',
  86:'00Spvg',
  87:'Ocvg',
  88:'0Ocvg',
  89:'00Ocvg',
  90:'Novg',
  91:'0Novg',
  92:'00Novg',
  93:'Tg',
  94:'0Tg',
  95:'00Tg',
  96:'Utg',
  97:'0Utg',
  98:'00Utg',
  99:'Dtg',
  100:'0Dtg',
  101:'00Dtg',
  102:'Ttg',
  103:'0Ttg',
  104:'00Ttg',
  105:'Qatg',
  106:'0Qatg',
  107:'00Qatg',
  108:'Qitg',
  109:'0Qitg',
  110:'00Qitg',
  111:'Sxtg',
  112:'0Sxtg',
  113:'00Sxtg',
  114:'Sptg',
  115:'0Sptg',
  116:'00Sptg',
  117:'Octg',
  118:'0Octg',
  119:'00Octg',
  120:'Notg',
  121:'0Notg',
  122:'00Notg',
  123:'Qag',
  124:'0Qag',
  125:'00Qag',
  126:'Uqag',
  127:'0Uqag',
  128:'00Uqag',
  129:'Dqag',
  130:'0Dqag',
  131:'00Dqag',
  132:'Tqag',
  133:'0Tqag',
  134:'00Tqag',
  135:'Qaqag',
  136:'0Qaqag',
  137:'00Qaqag',
  138:'Qiqag',
  139:'0Qiqag',
  140:'00Qiqag',
  141:'Sxqag',
  142:'0Sxqag',
  143:'00Sxqag',
  144:'Spqag',
  145:'0Spqag',
  146:'00Spqag',
  147:'Ocqag',
  148:'0Ocqag',
  149:'00Ocqag',
  150:'Noqag',
  151:'0Noqag',
  152:'00Noqag',
  153:'Qig',
  154:'0Qig',
  155:'00Qig',
  156:'UQig',
  157:'0UQig',
  158:'00UQig',
  159:'DQig',
  160:'0DQig',
  161:'00DQig',
  162:'TQig',
  163:'0TQig',
  164:'00TQig',
  165:'QaQig',
  166:'0QaQig',
  167:'00QaQig',
  168:'QiQig',
  169:'0QiQig',
  170:'00QiQig',
  171:'SxQig',
  172:'0SxQig',
  173:'00SxQig',
  174:'SpQig',
  175:'0SpQig',
  176:'00SpQig',
  177:'OcQig',
  178:'0OcQig',
  179:'00OcQig',
  180:'NoQig',
  181:'0NoQig',
  182:'00NoQig',
  183:'Sxg',
  184:'0Sxg',
  185:'00Sxg',
  186:'USxg',
  187:'0USxg',
  188:'00USxg',
  189:'DSxg',
  190:'0DSxg',
  191:'00DSxg',
  192:'TSxg',
  193:'0TSxg',
  194:'00TSxg',
  195:'QaSxg',
  196:'0QaSxg',
  197:'00QaSxg',
  198:'QiSxg',
  199:'0QiSxg',
  200:'00QiSxg',
  201:'SxSxg',
  202:'0SxSxg',
  203:'00SxSxg',
  204:'SpSxg',
  205:'0SpSxg',
  206:'00SpSxg',
  207:'OcSxg',
  208:'0OcSxg',
  209:'00OcSxg',
  210:'NoSxg',
  211:'0NoSxg',
  212:'00NoSxg',
  213:'Spg',
  214:'0Spg',
  215:'00Spg',
  216:'USpg',
  217:'0USpg',
  218:'00USpg',
  219:'DSpg',
  220:'0DSpg',
  221:'00DSpg',
  222:'TSpg',
  223:'0TSpg',
  224:'00TSpg',
  225:'QaSpg',
  226:'0QaSpg',
  227:'00QaSpg',
  228:'QiSpg',
  229:'0QiSpg',
  230:'00QiSpg',
  231:'SxSpg',
  232:'0SxSpg',
  233:'00SxSpg',
  234:'SpSpg',
  235:'0SpSpg',
  236:'00SpSpg',
  237:'OcSpg',
  238:'0OcSpg',
  239:'00OcSpg',
  240:'NoSpg',
  241:'0NoSpg',
  242:'00NoSpg',
  243:'Ocg',
  244:'0Ocg',
  245:'00Ocg',
  246:'UOcg',
  247:'0UOcg',
  248:'00UOcg',
  249:'DOcg',
  250:'0DOcg',
  251:'00DOcg',
  252:'TOcg',
  253:'0TOcg',
  254:'00TOcg',
  255:'QaOcg',
  256:'0QaOcg',
  257:'00QaOcg',
  258:'QiOcg',
  259:'0QiOcg',
  260:'00QiOcg',
  261:'SxOcg',
  262:'0SxOcg',
  263:'00SxOcg',
  264:'SpOcg',
  265:'0SpOcg',
  266:'00SpOcg',
  267:'OcOcg',
  268:'0OcOcg',
  269:'00OcOcg',
  270:'NoOcg',
  271:'0NoOcg',
  272:'00NoOcg',
  273:'Nog',
  274:'0Nog',
  275:'00Nog',
  276:'UNog',
  277:'0UNog',
  278:'00UNog',
  279:'DNog',
  280:'0DNog',
  281:'00DNog',
  282:'TNog',
  283:'0TNog',
  284:'00TNog',
  285:'QaNog',
  286:'0QaNog',
  287:'00QaNog',
  288:'QiNog',
  289:'0QiNog',
  290:'00QiNog',
  291:'SxNog',
  292:'0SxNog',
  293:'00SxNog',
  294:'SpNog',
  295:'0SpNog',
  296:'00SpNog',
  297:'OcNog',
  298:'0OcNog',
  299:'00OcNog',
  300:'NoNog',
  301:'0NoNog',
  302:'00NoNog',
  303:'C',
  304:'0C',
  305:'00C',
  306:'Uc',
  307:'0Uc',
  308:'00Uc',
};

function parseNumber(value) {
  var parts = value.trim().split('e');

  if (parts.length !== 2) {
    return value === '0' ? '0' : '?'
  }

  var leading = parts[0][0];
  var oom = Number(parts[1]);

  return value + ' (' + leading + oomSuffix[oomLookup] + ')';
}

function parseRange(range) {
  var parts = range.split('-');

  if (parts.length === 1) {
    return parseNumber(parts[0]) + '+ Gems';
  }

  return parseNumber(parts[0]) + ' - ' + parseNumber(parts[1]) + ' Gems';
}

function diffResearches(from, to) {
  var from = from.split(',').map(function (x) { return x.trim(); });
  var to = to.split(',').map(function (x) { return x.trim(); });

  var missing = to.filter(function (x) { return from.indexOf(x) < 0; });
  var added = from.filter(function (x) { return to.indexOf(x) < 0; });

  return {
    missing: missing,
    added: added,
    count: missing.length + added.length,
  };
}

function generateResearches(researches) {
  var firstResearch = researches[0];

  var notes = [];
  var copyButtonsHtml = '';

  for (var i = 0; i < researches.length; i++) {
    var build = researches[i];
    var when = build.when ? parseNumber(build.when) : '???';

    if (build.notes && build.notes.length) {
      for (var j = 0; j < build.notes.length; j++) {
        notes.push(build.notes[j]);
      }
    }

    // no researches means something else changed so cast as bool
    var needsOwnButton = Boolean(build.researches);

    if (!needsOwnButton) {
      notes.push('At ' + when + ' Gems, ' + (build.what || 'do something else i guess'));
    }
    else if (i) {
      var diff = diffResearches(researches[i - 1].researches, build.researches);

      if (diff.count > 0) {
        needsOwnButton = true;

        var diffNote = 'At ' + when + ' Gems, ';

        if (diff.missing.length && diff.added.length) {
          diffNote += 'swap ' + diff.missing.join(', ') + ' for ' + diff.added.join(', ');
        }
        else if (diff.missing.length) {
          diffNote += 'remove ' + diff.missing.join(', ');
        }
        else if (diff.added.length) {
          diffNote += 'add ' + diff.added.join(', ');
        }

        notes.push(diffNote);
      }
    }

    if (needsOwnButton) {
      copyButtonsHtml += '<p><button onclick="myFunction($(this))">Copy Build</button><input type="text" value="' + build.researches + '">';

      if (i) {
        copyButtonsHtml += '<b>' + (when || '???') + '+</b>';
      }

      copyButtonsHtml += '</p>';
    }
  }

  var researchList = firstResearch.researches.split(',').map(function (x) { return x.trim(); });
  var lastResearchCategory = firstResearch.researches[0];
  var fancyResearchLayout = '<p>';

  for (var i = 0; i < researchList.length; i++) {
    var research = researchList[i];
    var category = research[0];

    if (lastResearchCategory === category) {
      fancyResearchLayout += '</p><p>';
    }

    fancyResearchLayout += research + ',';
  }

  fancyResearchLayout += '</p>';

  var notesHtml = '';

  for (var i = 0; i < notes.length; i++) {
    notesHtml += '<p><b>Note</b>: ' + notes[i] + '.</p>';
  }

  return copyButtonHtml + fancyResearchLayout + notesHtml;
}

function generateBuild(build) {
  var title = build.title || 'No Title Provided';
  var author = build.author || 'Anonymous';
  var range = build.range ? parseRange(build.range) : '? Gems';
  var requirements = build.requirements;
  var recommendation = build.recommendation;
  var faction = build.faction || 'No Faction Provided';
  var bloodline = build.bloodline;
  var artifactSet = build.artifactSet;

  var researches;
  if (build.researches) {
    researches = [{ researches: build.researches }];
  }
  else if (build.researchBuilds && build.researchBuilds.length) {
    researches = build.researchBuilds;
  }
  else {
    researches = [];
  }

  var buildHtml = '<div class="shelementwhole">';

  buildHtml += '<p onclick="shohid($(this));"><b> <a href="#" onclick="return false;">' + title + '</a></b></p>';
  buildHtml += '<div class="autohide">';
  buildHtml += '<p><b>Author</b>: ' + author + '</p>';
  buildHtml += '<p><b>Range</b>: ' + range + '</p>';
  if (requirements) {
    buildHtml += '<p><b>Requirements</b>: ' + requirements + '</p>';
  }
  if (recommendation) {
    buildHtml += '<p><b>Recommendation</b>: ' + recommendation + '</p>';
  }
  buildHtml += '<p><b>Faction</b>: ' + faction + '</p>';
  if (bloodline) {
    buildHtml += '<p><b>Bloodline</b>: ' + bloodline + '</p>';
  }
  if (artifactSet) {
    buildHtml += '<p><b>Artifact Set</b>: ' + artifactSet + '</p>';
  }
  if (researches.length) {
    buildHtml += generateResearches(researches);
  }

  buildHtml += '</div>';
  buildHtml += '</div>';

  return buildHtml;
}

function generateCategory(category) {
  var title = '<p><b>' + (category.title || 'No Title Provided') + '</b></p>';

  if (!category.builds || !category.builds.length) {
    return title + '<p>No builds provided</p>';
  }

  var buildsHtml = '<div class="category">';

  for (var i = 0; i < category.builds.length; i++) {
    buildsHtml += generateBuild(category.builds[i]);
  }

  buildsHtml += '</div>';

  return title + buildsHtml;
}

function generateBuildPage(buildData) {
  var buildRoot = $('#builds');
  buildRoot.addClass('shlisting');

  buildRoot.html(function() {
    if (!buildData || !buildData.length) {
      return '<span>No builds found.</span>';
    }

    var html = '';

    for (var i = 0; i < buildData.length; i++) {
      html += generateCategory(buildData[i]);
    }

    return html;
  });
}

// footer
function myFunction(e) {
  var copyText = e.next();
  if (isOS()) {
        var textElement = copyText[0];
        var editable = textElement.contentEditable;
        var readOnly = textElement.readOnly;
        textElement.contentEditable = true;
        textElement.readOnly = false;
        var range = document.createRange();
        range.selectNodeContents(textElement);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textElement.setSelectionRange(0, 999999);
        textElement.contentEditable = editable;
        textElement.readOnly = readOnly;
    } else {
        copyText.select();
    }
  document.execCommand('copy');
}
 function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
}
