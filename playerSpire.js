var playerSpire = {
    // 数值计算开始
    LastShangHai: 0,
    LastDiaoLuo: 0,
    // 数值计算结束
    layout: [],
    rowsAllowed: 1,
    resetToRows: 1,
    startingRunestones: 200,
    runestones: 200,
    spirestones: 0,
    spentOnUpgrades: 0,
    currentEnemies: 0,
    selectedTrap: "",
    enemiesKilled: 0,
    escapees: 0,
    difficulty: 1,
    difficultyHidden: 1,
    ticksSinceLastEnemy: 0,
    strengthLocations: [],
    lightColumns: [0, 0, 0, 0, 0],
    smallMode: false,
    popupOpen: false,
    initialized: false,
    wasCatchingUp: false,
    nextUpgrade: -1,
    nextTrap: -1,
    tutorialStep: 0,
    killedSinceLeak: 0,
    savedLayout1: [],
    savedLayout2: [],
    layout1Note: "",
    layout2Note: "",
    peakThreat: 0,
    nextIcon: 0,
    dontDraw: false,
    paused: false,
    tooltipUpdate: null,
    settings: {
        fctTrap: true,
        fctPoison: true,
        fctRs: true,
        fctStatic: false,
        chillGradient: true,
        enemyIcons: true,
        trapIcons: true,
        shockEffect: true,
        percentHealth: false
    },
    lootAvg: {
        accumulator: 0,
        average: 0,
        counter: 0,
        lastAvg: [0]
    },
    resetToDefault: function(){
        this.layout = [];
        this.rowsAllowed = 1;
        this.resetToRows = 1;
        this.startingRunestones = 200;
        this.runestones = 200;
        this.spirestones = 0;
        this.spentOnUpgrades = 0;
        this.currentEnemies = 0;
        this.selectedTrap = "";
        this.enemiesKilled = 0;
        this.escapees = 0;
        this.difficulty = 1;
        this.difficultyHidden = 1;
        this.ticksSinceLastEnemy = 0;
        this.strengthLocations = [];
        this.lightColumns = [0, 0, 0, 0, 0];
        this.smallMode = false;
        this.popupOpen = false;
        this.initialized = false;
        this.wasCatchingUp = false;
        this.nextUpgrade = -1;
        this.nextTrap = -1;
        this.tutorialStep = 0;
        this.killedSinceLeak = 0;
        this.savedLayout = [];
        this.savedLayout2 = [];
        this.layout1Note = "";
        this.layout2Note = "";
        this.nextIcon = 0;
        this.peakThreat = 0;
        this.paused = false;
        this.settings = {
            fctTrap: true,
            fctPoison: true,
            fctRs: true,
            fctStatic: false,
            chillGradient: true,
            shockEffect: true,
            enemyIcons: true,
            trapIcons: true,
            percentHealth: false,
        }
        this.lootAvg = {
            accumulator: 0,
            average: 0,
            counter: 0,
            lastAvg: [0]
        }
        for (var item in playerSpireTraps){
            playerSpireTraps[item].owned = 0;
            playerSpireTraps[item].level = 1;
            playerSpireTraps[item].locked = true;
        }
        document.getElementById('playerSpireTab').style.display = 'none';
        playerSpire.closePopup();
    },
    init: function(){
        this.resetToDefault();
        if (game.global.spiresCompleted < 1) return;
        if (this.popupOpen)
            this.openPopup();
        else this.closePopup();
        if (this.smallMode)
            this.shrink();
        else this.enlarge();
        var layout = [];
        var totalCells = this.rowsAllowed * 5;
        for (var x = 0; x < totalCells; x++){
            layout.push({trap: {}, occupiedBy: {}});
        }
        this.layout = layout;
        playerSpireTraps.Fire.locked = false;
        playerSpireTraps.Frost.locked = false;
        this.initialized = true;
        this.drawSpire();
        this.drawInfo();
        document.getElementById('playerSpireTab').style.display = 'table-cell';
    },
    get maxEnemies(){
        var max = 1 + Math.ceil(this.rowsAllowed * 2.5);
        return max;
    },
    get killPercent(){
        var total = this.escapees + this.enemiesKilled;
        if (total == 0) return "0%";
        return prettify((this.enemiesKilled / total) * 100) + "%"
    },
    get difficultyMod(){
        var mod = this.difficulty;
        if (this.tutorialStep >= 4) this.addRow();
        if (mod < 1) mod = 1;
        return mod;
    },
    getNextRowCost: function(){
        var costs = [ //Spire I: 20. II: 200. III: 2k. IV: 20k. V: 200k
            -1, 6, 14, 20, 60, 200, 400, 800, 1600, 2500, 5500, 10e3, 25e3, 55e3, 100e3, 150e3, 200e3, 1e6, 2e6, 4e6
        ];
        if (this.rowsAllowed >= 20) return -1;
        return costs[this.rowsAllowed];
    },
    saveLayout: function(slot){
        var saveLayout = [];
        for (var x = 0; x < this.layout.length; x++){
            var toAdd = this.layout[x].trap.name ? this.layout[x].trap.name : "";
            saveLayout.push(toAdd);
        }
        this['savedLayout' + slot] = saveLayout;
        var noteElem = document.getElementById('spireLayoutNoteInput');
        if (noteElem){
            var note = noteElem.value;
            if (!note) {
                this['layout' + slot + 'Note'] = "";
            }
            if (note.length > 250) note = note.substring(0, 250);
            this['layout' + slot + 'Note'] = htmlEncode(note)
        }
    },
    loadLayout: function(slot){
        if (slot <= 0 || slot > 3) return false;
        var savedLayout = this["savedLayout" + slot];
        if ((this.runestones + this.getCurrentLayoutPrice()) < this.getSavedLayoutPrice(slot)) return false;
        this.resetTraps();
        for (var x = 0; x < savedLayout.length; x++){
            if (!savedLayout[x]) continue;
            this.buildTrap(x, savedLayout[x]);
        }
        return true;
    },
    getSavedLayoutPrice: function(slot){
        var layoutCost = 0;
        var tempTraps = {};
        var savedLayout = this['savedLayout' + slot];
        for (var x = 0; x < savedLayout.length; x++){
            if (!savedLayout[x]) continue;
            if (!tempTraps[savedLayout[x]]) tempTraps[savedLayout[x]] = 0;
            layoutCost += this.getTrapCost(savedLayout[x], false, tempTraps[savedLayout[x]]);
            tempTraps[savedLayout[x]]++;
        }
        return layoutCost;
    },
    getCurrentLayoutPrice: function(){
        var price = 0;
        var tempTraps = {};
        for (var item in playerSpireTraps){
            tempTraps[item] = 0;
        }
        for (var x = 0; x < this.layout.length; x++){
            var cell = this.layout[x];
            if (cell.trap.name && tempTraps[item] >= 0){
                price += this.getTrapCost(cell.trap.name, false, tempTraps[cell.trap.name]);
                tempTraps[cell.trap.name]++;
            }
        }
        return price;
    },
    presetTooltip: function(slot){
        var title = "Trap Layout " + slot;
        var text = "<b>此处保存的布局包含：</b><br/><br/>";
        var traps = {};
        var layout = this["savedLayout" + slot];
        var hasTraps = false;
        for (var item in playerSpireTraps){
            traps[item] = 0;
        }
        for (var x = 0; x < layout.length; x++){
            if (!layout[x]) continue;
            hasTraps = true;
            traps[layout[x]]++;
        }
        var cost = this.getSavedLayoutPrice(slot);
        var curCost = this.getCurrentLayoutPrice();
        for (var item in traps){
            if (traps[item] == 0) continue;
            var color = playerSpireTraps[item].color;
            text += "<span class='playerSpireTooltipTrapName' style='background-color: " + color + "'>" + cnItem(item) + "&nbsp;x" + traps[item] + "</span> ";
        }
        text += "<br/><br/>";
        text += "总成本: " + prettify(cost) + " 符石<br/>当前陷阱价值: " + prettify(curCost) + " 符石<br/>";
        var dif = (curCost - cost);
        if (dif < 0) text += "剩余成本: " + prettify(Math.abs(dif));
        else text += "退款: " + prettify(dif);
        text += " 符石";
        if (!hasTraps) text = "此布局目前为空。 您可以将当前设置保存到此布局，稍后再加载！";
        else if (this['layout' + slot + 'Note'].length) text += "<br/><br/><b>你想提醒自己:</b><br/>" + this['layout' + slot + 'Note'];
        text += "<br/>";
        var noLoad = false;
        if (dif < 0 && this.runestones < Math.abs(dif)){
            text += "<span class='red'>您负担不起加载此陷阱布局的费用。</span>";
            noLoad = true;
        }
        else if (layout.length > this.layout.length){
            text += "<span class='red'>您的尖塔中没有足够的层数可用于加载此布局。</span>";
            noLoad = true;
        }
        text += "<br/><br/><div class='spirePresetBtns'><span onclick='tooltip(\"confirm\", null, \"update\", \"您确定要将当前的尖塔布局保存到预设 " + slot + "? 这将覆盖您当前保存的布局。<br/><br/>如果你愿意，你也可以在下面输入你未来的笔记！<br/><br/><input maxlength=\\\"250\\\" style=\\\"width: 100%\\\" id=\\\"spireLayoutNoteInput\\\"/><br/>\", \"playerSpire.saveLayout(" + slot + ")\", \"保存到布局 " + slot + "?\")'>在这里保存当前布局</span>";
        if (hasTraps && layout.length <= this.layout.length && !noLoad)
            text += "<span onclick='tooltip(\"confirm\", null, \"update\", \"您确定要加载布局 " + slot + "? 这将删除目前放置在尖塔中的所有陷阱和塔！\", \"playerSpire.loadLayout(" + slot + ")\", \"加载布局 " + slot + "?\")'>加载此布局</span>";
        text += "</div>";
        tooltip(title, 'customText', 'lock', text, "", "center");
    },
    settingsTooltip: function(){
        var text = "<div id='spireSettingsTooltip'>";
        text += "<b style='margin-bottom: 1vw'>浮动战斗文本</b>";
        text += "<span class='spireOption'>静态数值:" + buildNiceCheckbox('spirefctStatic', '', this.settings.fctStatic) + "</span>";
        text += "<span class='spireOption'>陷阱伤害: " + buildNiceCheckbox('spirefctTrap', '', this.settings.fctTrap) + "</span>";
        if (!playerSpireTraps.Poison.locked)
            text += "<span class='spireOption'>毒伤每轮: " + buildNiceCheckbox('spirefctPoison', '', this.settings.fctPoison) + "</span>";
        text += "<span class='spireOption'>符石掉落: " + buildNiceCheckbox('spirefctRs', '', this.settings.fctRs) + "</span>";
        text += "<b style='margin-top: 0; margin-bottom: 1vw'>视觉设置</b>";
        text += "<span class='spireOption'>陷阱图标: " + buildNiceCheckbox('spiretrapIcons', '', this.settings.trapIcons) + "</span>";
        text += "<span class='spireOption'>敌人图标: " + buildNiceCheckbox('spireenemyIcons', '', this.settings.enemyIcons) + "</span>";
        text += "<span class='spireOption'>寒冷效应: " + buildNiceCheckbox('spirechillGradient', '', this.settings.chillGradient) + "</span>";
        if (!playerSpireTraps.Lightning.locked)
        text += "<span class='spireOption'>震慑状态: " + buildNiceCheckbox('spireshockEffect', '', this.settings.shockEffect) + "</span>";
        text += "<span class='spireOption'>生命值 %: " + buildNiceCheckbox('spirepercentHealth', '', this.settings.percentHealth) + "</span>";
        text += "</div>";
        tooltip("Spire Settings", 'customText', 'lock', text, "<span class='btn btn-info' onclick='playerSpire.saveSettings()'>保存</span><span class='btn btn-danger' onclick='cancelTooltip()'>取消</span>", "hi", "hi");
    },
    saveSettings: function(){
        for (var item in this.settings){
            var elem = document.getElementById('spire' + item);
            if (elem){
                this.settings[item] = readNiceCheckbox(elem);
            }
        }
        this.drawSpire();
        this.drawInfo();
        cancelTooltip();
    },
    rewardRunestones: function(amt){
        this.runestones += amt;
        this.lootAvg.accumulator += amt;
        this.updateRunestones();
    },
    getRsPs: function() {
        if (!this.lootAvg.lastAvg.length) return 0;
        var avg = 0;
        for (var x = 0; x < this.lootAvg.lastAvg.length; x++){
            avg += this.lootAvg.lastAvg[x];
        }
        avg /= this.lootAvg.lastAvg.length;
        return (avg > 0.01) ? avg : 0;
    },
    updateRsPs: function(){
        var elem = document.getElementById('RsPs');
        if (elem)
            elem.innerHTML = prettify(this.getRsPs());
    },
    curateAvgs: function() {
        this.lootAvg.counter++;
        if (this.lootAvg.counter < 10) return;
        this.lootAvg.counter = 0;
        var alpha = 0.05;
        this.lootAvg.average = this.lootAvg.average * (1 - alpha) + this.lootAvg.accumulator * alpha / 10;
        this.lootAvg.accumulator = 0;
        if (this.lootAvg.lastAvg && this.lootAvg.lastAvg.length >= 20) this.lootAvg.lastAvg.splice(0, 1);
        this.lootAvg.lastAvg.push(Math.floor(this.lootAvg.average * 100) / 100);
        this.updateRsPs();
        if (game.stats.tdKills.value + game.stats.tdKills.valueTotal >= 1e6) giveSingleAchieve("Stoned");
    },
    addRow: function(force){
        var cost = this.getNextRowCost();
        if (cost == -1) return;
        if (!force && this.spirestones < cost) return;
        if (!force && this.difficulty < (100 * (this.rowsAllowed + 1))) return;
        this.rowsAllowed++;
        if (this.rowsAllowed == 10) giveSingleAchieve("Defender");
        if (this.rowsAllowed == 20) giveSingleAchieve("Power Tower");
        this.spirestones -= cost;
        if (this.spirestones < 0) this.spirestones = 0;
        for (var x = 0; x < 5; x++){
            this.layout.push({occupiedBy: {}, trap: {}})
        }
        this.drawSpire();
        this.drawInfo();
    },
    getUpgradesHtml: function(){
        var html = "";
        var cheapestTrap = 0;
        if (this.tutorialStep < 4) return "";
        for (var trapItem in playerSpireTraps){
            var trap = playerSpireTraps[trapItem];
            if (trap.locked) continue;
            if (!trap.upgrades || trap.upgrades.length < trap.level) continue;
            var nextUpgrade = trap.upgrades[trap.level - 1];
            if ((nextUpgrade.cost > this.runestones || game.global.highestLevelCleared + 1 < nextUpgrade.unlockAt) && this.smallMode) continue;
            var trapText = trap.isTower ? " 塔 " : " 陷阱 ";
            var style = (nextUpgrade.cost > this.runestones || (game.global.highestLevelCleared + 1 < nextUpgrade.unlockAt)) ? "grey" : trap.color;
            var upgradeClass;
            var text;
            if (this.smallMode){
                upgradeClass = 'spireTrapBoxSmall';
                text = cnItem(trapItem) + " " + romanNumeral(trap.level + 1);
            }
            else{
                upgradeClass = 'playerSpireUpgrade spireTrapBox';
                text = cnItem(trapItem) + trapText + romanNumeral(trap.level + 1)
            }
            html += "<div onmouseover='playerSpire.upgradeTooltip(\"" + trapItem + "\", event)' onmouseout='tooltip(\"hide\")' onclick='playerSpire.buyUpgrade(\"" + trapItem + "\")' style='background-color: " + style + "' class='" + upgradeClass + "'>" + text + "</div>";
            if (this.runestones < nextUpgrade.cost && (cheapestTrap == -1 || nextUpgrade.cost < cheapestTrap)) cheapestTrap = nextUpgrade.cost;
        }
        if (this.smallMode && html.length) html = "<hr/>" + html;
        this.nextUpgrade = cheapestTrap;
        return html;
    },
    resetUpgrades: function(){
        for (var trap in playerSpireTraps){
            var trapObj = playerSpireTraps[trap];
            trapObj.level = 1;
        }
        this.runestones += this.spentOnUpgrades;
        this.spentOnUpgrades = 0;
        this.drawInfo();
    },
    redrawUpgrades: function(){
        var elem = document.getElementById('playerSpireUpgradesArea');
        if (elem == null){
            this.drawInfo();
            return;
        }
        elem.innerHTML = this.getUpgradesHtml();
    },
    checkRedrawUpgrades: function(){
        //only needed if drawInfo isn't being called, basically just for killedEnemy()
        if (this.nextUpgrade != -1 && this.runestones >= this.nextUpgrade) this.redrawUpgrades();
    },
    checkUpdateTrapColors: function(){
        if (this.nextTrap != -1 && this.runestones >= this.nextTrap) this.updateTrapColors();
    },
    updateTrapColors: function(){
        var cheapestTrap = -1;
        for (var item in playerSpireTraps){
            var trap = playerSpireTraps[item];
            if (trap.locked) continue;
            var cost = this.getTrapCost(item);
            var color = (this.runestones >= cost) ? trap.color : "grey";
            var elem = document.getElementById(item + "TrapBox");
            if (elem) elem.style.backgroundColor = color;
            if (this.runestones < cost && (cheapestTrap == -1 || cost < cheapestTrap)) cheapestTrap = cost;
        }
        this.nextTrap = cheapestTrap;
    },
    buyUpgrade: function(trapName, confirmed){
        var trapObj = playerSpireTraps[trapName];
        if (!trapObj.upgrades || trapObj.upgrades.length < trapObj.level) return;
        var upgrade = trapObj.upgrades[trapObj.level - 1];
        if (this.runestones < upgrade.cost) return;
        if (game.global.highestLevelCleared + 1 < upgrade.unlockAt) return;
        if (!confirmed){
            var trapText = trapName + ((trapObj.isTower) ? " 塔" : " 陷阱");
            var tipText = "你确定要升级你的 " + trapText + " 吗? 这个升级是不可退还的!<br/><br/><i>\"" + upgrade.description + "\"</i><br/><br/><b>成本: " + prettify(upgrade.cost) + " 符石</b>";
            tooltip("confirm", null, "update", tipText, "playerSpire.buyUpgrade('" + trapName + "', true)", "升级 " + trapText + "?");
            return;
        }
        this.runestones -= upgrade.cost;
        this.spentOnUpgrades += upgrade.cost;
        if (this.runestones + this.getCurrentLayoutPrice() < 200) this.runestones = 200 - this.getCurrentLayoutPrice();
        trapObj.level++;
        this.drawInfo();
        this.drawSpire();
    },
    rewardSpirestones: function(spireNumber){
        var reward = Math.floor(Math.pow(10, spireNumber - 1) * 20);
        this.spirestones += reward;
        if (this.tutorialStep >= 4) this.addRow();
        this.updateSpirestoneText();
        return reward;
    },
    updateSpirestoneText: function() {
        var elem = document.getElementById('spirestoneBox');
        if (elem) elem.innerHTML = this.getSpirestoneHtml();
    },
    getSpirestoneHtml: function() {
        var text = ((this.smallMode) ? "尖顶石头: " : "尖顶石头: ") + prettify(this.spirestones);
        var nextCost = this.getNextRowCost();
        if (nextCost == -1 || this.tutorialStep < 3) return text;
        text += " / " + prettify(nextCost) + "</span>"
        return text;
    },
    togglePause: function(){
        this.paused = !this.paused;
        this.drawInfo();
    },
    infoTooltip: function(what, event){
        var tooltipText = "";
        switch(what){
            case "Runestones":
                var curCost = this.getCurrentLayoutPrice();
                var upgradeCost = this.spentOnUpgrades;
                var remaining = this.runestones;
                tooltipText = "符石（RS）是由在尖塔杀敌人获得，并且获得符文的数量与敌人的生命值是成正比的。<br/><br/>你总共找到了 " + prettify(curCost + upgradeCost + remaining) + " 符石。<br/><br/>" + prettify(upgradeCost) + " 符石用于升级。<br/><br/>" + prettify(curCost) + " 符石用于建造塔/陷阱在你当前的布局中。";
                break;
            case "Threat":
                tooltipText = "当你在塔尖杀死敌人时，威胁上升，当他们逃跑时，威胁下降。威胁是一段时间内杀死/逃脱的平均值，可能不会在杀死敌人后立即上升，也不会在敌人逃跑后立即下降，但会一直停留在你的尖塔所能承受的范围内。<br/><br/>更多威胁会有更高生命值的敌人，也会掉落更多的符石。为您的尖塔添加新的楼层也需要威胁值，每增加一层需要增加100的威胁值。<br/><br/>你的尖塔所达到的最高威胁值是：<b>" + prettify(Math.floor(this.peakThreat)) + "</b><br/><br/>显示为: <b>当前威胁</b> / <b>下一层需要的威胁</b>";
                break;
            case "Enemies":
                tooltipText = "您尖塔当前允许的敌人数量。<br/> <br/>您的尖塔可以容纳1个敌人，另外每层还能多存在2.5个敌人（向上取整）。";
                if (playerSpireTraps.Frost.level >= 7 && playerSpireTraps.Frost.owned) tooltipText += "<br/><br/>你有一个额外的 " + playerSpireTraps.Frost.owned + " Maximum Enemies allowed in your Spire, thanks to Frost IV.";
                tooltipText += "<br/><br/>显示为: <b>当前尖塔里的敌人</b> / <b>尖塔里允许的最大敌人数量</b>"
                break;
            case "Spirestones":
                tooltipText = "尖塔石头(Ss)只能通过清除世界上的尖塔获得，除了在升级层数时消耗外，没有其它用处了。<br/><br/>显示为: <b>当前尖塔石头</b> / <b>下一层需要的尖塔石头</b>"
                break;
            default:
                break;
        }

        tooltip(what, 'customText', event, tooltipText, "");
    },
    drawInfo: function(){
        if (!this.popupOpen) return;
        if (this.smallMode){
            this.drawSmallInfo();
            return;
        }
        var elem = document.getElementById('playerSpireInfoPanel');
        var infoHtml = "";
        infoHtml += "<div id='playerSpireInfoTop'>";
        infoHtml += "<span onmouseover='playerSpire.infoTooltip(\"Runestones\", event)' onmouseout='tooltip(\"hide\")'>符石: <span id='playerSpireRunestones'>" + prettify(this.runestones) + "</span><br/>每秒产生符石: <span id='RsPs'>" + prettify(this.getRsPs()) + "</span></span>";
        infoHtml += "<br/><span onmouseover='playerSpire.infoTooltip(\"Enemies\", event)' onmouseout='tooltip(\"hide\")'>敌人: <span id='playerSpireCurrentEnemies'>" + this.currentEnemies + "</span> / <span id='playerSpireMaxEnemies'>" + this.maxEnemies + "</span></span>";
        infoHtml += "<br/><span onmouseover='playerSpire.infoTooltip(\"Spirestones\", event)' onmouseout='tooltip(\"hide\")' id='spirestoneBox'>" + this.getSpirestoneHtml() + "</span><br/><span onmouseover='playerSpire.infoTooltip(\"Threat\", event)' onmouseout='tooltip(\"hide\")' id='playerSpireDifficulty'>" + this.getDifficultyHtml() + "</span></div>";
        infoHtml += "<div id='spireTrapsWindow'>";
        infoHtml += "<div onclick='playerSpire.shrink()' id='shrinkSpireBox' class='spireControlBox'>缩小窗口</div>";
        infoHtml += "<div onclick='playerSpire.settingsTooltip()' id='spireSettingsBox' class='spireControlBox'>设置</div>"
        infoHtml += "<div onclick='tooltip(\"confirm\", null, \"update\", \"Are you sure you want to sell all Traps and Towers? You will get back 100% of Runestones spent on them.<br/><br/>" + ((this.paused) ? "" : "<b>Protip:</b> Pause your Spire before selling your defenses if you want to avoid leaking!") + "\", \"playerSpire.resetTraps()\", \"Sell All?\")' class='spireControlBox'>卖出全部</div>";
        infoHtml += "<div onclick='playerSpire.togglePause()' id='pauseSpireBtn' class='spireControlBox spirePaused" + ((this.paused) ? "Yes'>解除暂停" : "'>暂停尖塔") + "</div>";      
        infoHtml += "<div class='spireControlBoxDbl'><div onclick='playerSpire.presetTooltip(1)'>布局1</div><div onclick='playerSpire.presetTooltip(2)'>布局2</div></div>"
        infoHtml += "<div onclick='playerSpire.selectTrap(\"shiftUp\")' onmouseout='tooltip(\"hide\")' onmouseover='playerSpire.trapTooltip(\"shiftUp\", event)' id='sellTrapBox' class='spireControlBox" + ((this.selectedTrap == "shiftUp") ? " selected" : "") + "'>后移</div>";
        infoHtml += "<div onclick='playerSpire.selectTrap(\"shiftDown\")' onmouseout='tooltip(\"hide\")' onmouseover='playerSpire.trapTooltip(\"shiftDown\", event)' id='sellTrapBox' class='spireControlBox" + ((this.selectedTrap == "shiftDown") ? " selected" : "") + "'>前移</div>";

        
        // infoHtml += "<div onclick='playerSpire.resetUpgrades()' class='spireControlBox'>Reset Upgrades</div>";
        // infoHtml += "<div onclick='tooltip(\"confirm\", null, \"update\", \"Are you sure you want to reset EVERYTHING? This includes Floors, upgrades, and runestones!\", \"playerSpire.init()\", \"Reset Spire?\")' class='spireControlBox'>Reset EVERYTHING</div>";
        // infoHtml += "<div onclick='playerSpire.clearEnemies()' class='spireControlBox'>Clear Enemies</div>";

        infoHtml += "<br/><hr/>"
        infoHtml += "<div onclick='playerSpire.selectTrap(\"sell\")' onmouseout='tooltip(\"hide\")' onmouseover='playerSpire.trapTooltip(\"sell\", event)' style='padding-top: 1.35vw' id='sellTrapBox' class='spireTrapBox" + ((this.selectedTrap == "sell") ? " selected" : "") + "'>卖掉一个陷阱或塔</div>";
        var cheapestTrap = -1;
        for (var item in playerSpireTraps){
            var trap = playerSpireTraps[item];
            if (trap.locked) continue;
            var trapText = trap.isTower ? "塔" : "陷阱";
            trapText += " " + romanNumeral(trap.level);
            var trapIcon = "";
            if (this.settings.trapIcons) trapIcon = "<span class='icomoon icon-" + trap.icon + "'></span> ";
            var cost = this.getTrapCost(item);
            var color = (this.runestones >= cost) ? trap.color : "grey";
            infoHtml += "<div style='background-color: " + color + "' onmouseout='tooltip(\"hide\")' onmouseover='playerSpire.trapTooltip(\"" + item + "\", event)' onclick='playerSpire.selectTrap(\"" + item + "\")' id='" + item + "TrapBox' class='spireTrapBox" + ((item == this.selectedTrap) ? " selected" : "") + "'>" + trapIcon + cnItem(item) + " " + trapText + "<br/>" + prettify(this.getTrapCost(item)) + " 符石</div>"
            if (this.runestones < cost && (cheapestTrap == -1 || cost < cheapestTrap)) cheapestTrap = cost;
        }
        this.nextTrap = cheapestTrap;
        infoHtml += "</div><hr/>"; //spireTrapsWindow
        infoHtml += "<span id='playerSpireCloseBtn' class='icomoon icon-close' onclick='playerSpire.closePopup()'></span>";
        infoHtml += "<div id='playerSpireUpgradesArea'>";
        infoHtml += this.getUpgradesHtml();
        infoHtml += "</div>"; //playerSpireUpgradesArea
        elem.innerHTML = infoHtml;
    },
    drawSmallInfo: function(){
        var elem = document.getElementById('playerSpireSmallPanel');
        var html = "<div id='playerSpireInfoTopSm'>";
        html += "<span onmouseover='playerSpire.infoTooltip(\"Runestones\", event)' onmouseout='tooltip(\"hide\")'>符石: <span id='playerSpireRunestones'>" + prettify(this.runestones) + "</span><br/>";
        html += "符石/秒: <span id='RsPs'>" + prettify(this.getRsPs()) + "</span></span><br/>"
        html += "<span onmouseover='playerSpire.infoTooltip(\"Enemies\", event)' onmouseout='tooltip(\"hide\")'>敌人: <span id='playerSpireCurrentEnemies'>" + this.currentEnemies + "</span> / <span id='playerSpireMaxEnemies'>" + this.maxEnemies + "</span></span><br/>";
        html += "<span onmouseover='playerSpire.infoTooltip(\"Spirestones\", event)' onmouseout='tooltip(\"hide\")' id='spirestoneBox'>" + this.getSpirestoneHtml() + "</span><br/>"
        html += "<span onmouseover='playerSpire.infoTooltip(\"Threat\", event)' onmouseout='tooltip(\"hide\")' id='playerSpireDifficulty'>" + this.getDifficultyHtml() + "</span><br/>";
        html += "</div>"; //playerSpireInfoTopSm
        html += "<div onclick='playerSpire.enlarge()' id='shrinkSpireBox' class='spireControlBoxSmall'>扩大窗口</div>";
        html += "<hr style='margin: 2%'/>";
        html += "<div onclick='playerSpire.selectTrap(\"sell\")' id='sellTrapBox' onmouseout='tooltip(\"hide\")' onmouseover='playerSpire.trapTooltip(\"sell\", event)' class='spireTrapBoxSmall" + ((this.selectedTrap == "sell") ? " selected" : "") + "'>出售</div>";
        var cheapestTrap = -1;
        for (var item in playerSpireTraps){
            if (playerSpireTraps[item].locked) continue;
            var cost = this.getTrapCost(item);
            var color = (this.runestones >= cost) ? playerSpireTraps[item].color : "grey";
            var trapIcon = "";
            if (this.settings.trapIcons) trapIcon = "<span class='icomoon icon-" + playerSpireTraps[item].icon + "'></span> ";
            html += "<div style='background-color: " + color + "' onmouseout='tooltip(\"hide\")' onmouseover='playerSpire.trapTooltip(\"" + item + "\", event)' onclick='playerSpire.selectTrap(\"" + item + "\")' id='" + item + "TrapBox' class='spireTrapBoxSmall" + ((item == this.selectedTrap) ? " selected" : "") + "'>" + trapIcon + cnItem(item) + "</div>";
            if (this.runestones < cost && (cheapestTrap == -1 || cost < cheapestTrap)) cheapestTrap = cost;
        }
        html += "<div id='playerSpireUpgradesArea'>" + this.getUpgradesHtml() + "</div>";
        this.nextTrap = cheapestTrap;
        html += "<span id='playerSpireCloseBtnSm' class='icomoon icon-close' onclick='playerSpire.closePopup()'></span>";
        elem.innerHTML = html;
    },
    resetStats: function(){
        this.escapees = 0;
        this.enemiesKilled = 0;
        this.lootAvg.accumulator = 0;
        this.lootAvg.average = 0;
        this.updateKills();
        this.updateRsPs();
    },
    resetTraps: function(){
        var refund = 0;
        for (var x = 0; x < this.layout.length; x++){
            var cell = this.layout[x];
            if (cell.trap.name){
                playerSpireTraps[cell.trap.name].owned--;
                refund += this.getTrapCost(cell.trap.name);
            }
            cell.trap = {};
        }
        for (var trap in playerSpireTraps){
            playerSpireTraps[trap].owned = 0;
        }
        this.runestones += refund;
        this.strengthLocations = [];
        this.lightColumns = [0, 0, 0, 0, 0];
        this.drawSpire();
        this.drawInfo();
    },
    clearEnemies: function(){
        for (var x = 0; x < this.layout.length; x++){
            var cell = this.layout[x];
            cell.occupiedBy = {};
        }
        this.drawSpire();
        this.resetStats();
        this.currentEnemies = 0;
        this.drawInfo();
    },
    shrink: function(){
        this.smallMode = true;
        document.getElementById('playerSpireInfoPanel').style.display = 'none';
        var popoutElem = document.getElementById('playerSpirePopout');
        popoutElem.style.left = "2.5%";
        document.getElementById('playerSpireSmallPanel').style.display = 'inline-block';
        document.getElementById('playerSpireSpirePanel').style.width = "calc(27vw - 4px)";
        document.getElementById('floatingCombatText').style.width = "calc(26vw - 4px)";
        this.drawSmallInfo();
    },
    enlarge: function(){
        this.smallMode = false;
        document.getElementById('playerSpireInfoPanel').style.display = 'inline-block';
        var smallElem = document.getElementById('playerSpireSmallPanel');
        smallElem.innerHTML = "";
        smallElem.style.display = 'none';
        document.getElementById('playerSpirePopout').style.left = "5%";
        document.getElementById('playerSpireSpirePanel').style.width = "calc(30vw - 4px)";
        document.getElementById('floatingCombatText').style.width = "calc(29vw - 4px)";
        this.drawInfo();

    },
    closePopup: function() {
        this.popupOpen = false;
        document.getElementById('playerSpirePopout').style.display = 'none';
    },
    openPopup: function(){
        this.popupOpen = true;
        document.getElementById('playerSpirePopout').style.display = 'block';
        this.drawSpire();
        this.drawInfo();
    },
    trapTooltip: function(which, event){
        if (which == "sell"){
            tooltip("Sell Trap/Tower", 'customText', event, "Sell a Trap or Tower! You'll get back 100% of what you spent on the last Trap or Tower of that type.<br/><br/>(快捷键 0 或 ')")
            return;
        }
        if (which == "shiftUp"){
            tooltip("Shift Up", 'customText', event, "把你的陷阱和塔移向后移一格！<br/><br/>单击此按钮选择“后移模式”，然后单击“尖塔”中的“陷阱”或“塔”。你选择的陷阱/塔以及之后的所有陷阱/塔将向后移动一个单元格，直到碰到的第一个空白区域。<br/><br/>如果没有空的空间，您的最后一个陷阱/塔将被出售。")
            return;
        }
        if (which == "shiftDown"){
            tooltip("Shift Down", 'customText', event, "把你的陷阱和塔移向前移一格！<br/><br/>单击此按钮选择“前移模式”，然后单击“尖塔”中的“陷阱”或“塔”。你选择的陷阱/塔以及之后的所有陷阱/塔将向前移动一个单元格，直到碰到的第一个空白区域。<br/><br/>如果没有空的空间，您的最后一个陷阱/塔将被出售。")
            return;
        }
        var trapText = playerSpireTraps[which].isTower ? " Tower" : " Trap";
        var cost = this.getTrapCost(which);
        var costText = (cost > this.runestones) ? "<span style='color: red'>" : "<span style='color: green'>";
        costText += prettify(cost) + " 符石";
        if (cost > this.runestones) costText += " (" + calculateTimeToMax(null, this.lootAvg.average, (cost - this.runestones)) + ")";
        else{
            var costPct = (cost / this.runestones) * 100;
            if (costPct < 0.01) costPct = 0;
            costText += " (" + prettify(costPct) + "%)";
        } 
        costText += "</span>";
        tooltip(which + trapText, 'customText', event, playerSpireTraps[which].description, costText);
        tooltipUpdateFunction = function(){playerSpire.trapTooltip(which, event)};
    },
    upgradeTooltip: function(which, event){
        var trap = playerSpireTraps[which];
        if (!trap.upgrades || trap.upgrades.length < trap.level) return;
        var upgrade = trap.upgrades[trap.level - 1];
        var text = upgrade.description;
        var title = which + ((trap.isTower) ? " Tower " : " Trap ") + romanNumeral(trap.level + 1);
        var cost = "<span style='color: ";
        cost += (this.runestones >= upgrade.cost) ? "green" : "red";
        cost += "'>" + prettify(upgrade.cost) + " 符石";
        if (upgrade.cost > this.runestones) cost += " (" + calculateTimeToMax(null, this.lootAvg.average, (upgrade.cost - this.runestones)) + ")";
        else{
            var costPct = (upgrade.cost / this.runestones) * 100;
            if (costPct < 0.01) costPct = 0;
            cost += " (" + prettify(costPct) + "%)";
        } 
        cost += "</span>";
        if (upgrade.unlockAt != -1)
            cost += ", <span style='color: " + ((game.global.highestLevelCleared + 1 >= upgrade.unlockAt) ? "green" : "red") + "'>Reach Z" + upgrade.unlockAt + "</span>";
        tooltip(title, 'customText', event, text, cost);
        tooltipUpdateFunction = function(){playerSpire.upgradeTooltip(which, event)};
    },
    selectTrap: function(which){
        this.selectedTrap = which;
        this.drawInfo();
    },

    drawSpire: function(){
        if (!this.popupOpen) return;
        if (this.dontDraw) return;
        var layout = this.layout;
        var layoutHtml = "";
        var rowHtml = "";
        for (var x = layout.length - 1; x >= 0; x--){
            var cellWrapper = "<div onmouseover='playerSpire.checkDragTraps(" + x + ", event)' onmousedown='playerSpire.buildTrap(\"" + x + "\")' id='playerSpireCell" + x + "' class='noselect playerSpireCell'";
            cellWrapper += " style='";
            cellWrapper += this.getSetTrapBgColor(x);
            cellWrapper += "'><span id='playerSpireCell" + x + "enemy'>"
            var iconText = "";
            if (this.settings.trapIcons){
                iconText = "<span id='spireTrapIcon" + x + "' class='spireTrapIcon'>"
                if (layout[x].trap.name)
                    iconText += this.getTrapIcon(x);
                iconText += "</span>"
            }
            rowHtml = cellWrapper + this.getEnemyHtml(x) + "</span>" + iconText + "</div>" + rowHtml;
            if (x % 5 == 0){
            layoutHtml += rowHtml;
            rowHtml = "";
            }
        }
        var tutorialHeight = 84 - (playerSpire.rowsAllowed * 4.5);
        layoutHtml += "<div id='playerSpireTutorial' style='height: " + tutorialHeight + "vh' class='niceScroll'>" + this.updateTutorial(true) + "</div>"
        document.getElementById("playerSpireSpireSpirePanel").innerHTML = layoutHtml;
    },
    updateTutorial: function(textOnly){
        var elem = document.getElementById('playerSpireTutorial');
        if (!elem || this.tutorialStep >= 8) return "";
        var currentStep = this.tutorialStep;
        switch(currentStep){
            case 0:
                if (this.layout[0].trap.name == "Frost" && this.layout[1].trap.name == "Fire"){
                    this.tutorialStep++;
                }
                break;
            case 1:
                if (playerSpireTraps.Frost.owned + playerSpireTraps.Fire.owned >= 5){
                    this.tutorialStep++;
                    playerSpireTraps.Strength.locked = false;
                    this.addRow(true);
                }
                break;
            case 2:
                if (this.difficulty >= 300){
                    this.tutorialStep++;
                    this.addRow(true);
                }
                break;
            case 3:
                if (this.difficulty >= 400 && this.spirestones >= 20){
                    this.tutorialStep++;
                    this.addRow();
                }
                break;
            case 4:
                if (playerSpireTraps.Frost.level >= 2){
                    this.tutorialStep++;
                }
                break;
            case 5:
                if (playerSpireTraps.Poison.locked && game.global.spiresCompleted >= 2) {
                    playerSpireTraps.Poison.locked = false;
                    playerSpireTraps.Condenser.locked = false;
                    this.drawInfo();
                }
                if (this.rowsAllowed >= 6 && game.global.spiresCompleted >= 2){
                    this.tutorialStep++;
                }
                break;
            case 6:
                if (playerSpireTraps.Lightning.locked && game.global.spiresCompleted >= 3) {
                    playerSpireTraps.Lightning.locked = false;
                    playerSpireTraps.Knowledge.locked = false;
                    this.drawInfo();
                }
                if (this.rowsAllowed >= 11 && game.global.spiresCompleted >= 3){
                    this.tutorialStep++;
                }
                break;
            case 7: 
                if (this.rowsAllowed >= 13){
                    this.tutorialStep++;
                }
                break;
            default:
                break;
        }
        if (currentStep != this.tutorialStep){
            this.drawInfo();
            this.drawSpire();
        }
        var tutorialSteps = [
            "<p>欢迎来到你的尖顶！ 你已经杀死了Druopitee并且偷走了一些尖顶石头：古老的建筑材料，它们跨越尺寸复制自己，传统上用来制造强大的尖顶。 德鲁奥皮特认为他是唯一一个可以建造高层建筑的人，但是你的任务是证明他是错的！</p><p>你能够用你找到的尖顶石头完成你自己的尖塔的第一层建造，你仍然有一些遗留下来试图让它更高。 你让脆皮们在整个城镇周围筑起一堵墙，让你的新尖塔成为唯一的入口和出口点。 几秒钟你感觉超级安全，你的脆皮在他们的新堡垒上超级刺激。</p><p>在这几秒钟之后，你会看到尖塔吸引了大量不受欢迎的嫉妒敌人的注意力，他们似乎把你的尖塔作为挑战。</p><p>幸运的是，你的科学家已经设法提出了一些陷阱设计，可以有希望阻止敌人流入你的城镇。</p><p class='spireQuest'>尝试将冰霜陷阱放置在尖塔最左边的单元格中，并将火焰陷阱直接放在它的右侧。</p>",
            "<p>完美，一切似乎都像你的科学家解释的那样工作。 冰霜陷阱使敌人减速，火焰陷阱干掉它们。</p><p>不幸的是，看起来你在这里杀死的每个敌人都会使你的尖塔成为一个更重要的目标，从而导致更强大，更强大的敌人通过。</p><p>幸运的是，你的魔法尖塔陷阱会在他们杀死一个人的时候把坏人变成一种新的资源，你的科学家称之为“符石”。 更幸运的是，拥有更多符石上限！ 随着你的尖塔威胁的增加，你的符石每秒也会增加，你的尖塔的防御也会增加（如果你正在做你的工作）。</p><p style='text-decoration: underline'>当符石积聚时，你不必留在这里，脆皮。 魔法的尖顶石头会将您的进度复制到所有可能的维度，因此如果您使用传送门，您甚至不会丢失陷阱！</p><p class='spireQuest'>留意你的符石，并尽可能添加更多陷阱。 尝试用陷阱填充整个楼层！</p>",
            "<p>You're a natural Spiarchitect! Your Scientists have finally finished adding the second Floor of your Spire, and the added height seems to be attracting even more enemies. Cool, more Runestones for you! You're starting to really like the idea of enemies constantly climbing to their demise in the teeth of your Traps.</p><p>While you're appreciating your deadly handiwork, a small group of Scientists runs up to you and shares some new research. They say that the Runestones can also be used to create mini-towers that broadcast their energy to all Trimps in the World. Wasting no time, they hand you the schematics for the Strength Tower, which increases the effect of all Fire Traps on its Floor, and grants all of your Trimps an attack bonus.</p><p class='spireQuest'>Continue placing more Traps and Towers to fill out your Spire, and raise your Threat level to 300.</p>",
            "<p>Beautiful. It seems like you're getting the hang of this!</p><p>You've finished constructing the third Floor of your Spire, but it seems as if you've used up your entire intial supply of Spirestones. You'll need to clear a Spire again to earn more! Note that you'll find considerably more Spirestones from more difficult Spires.</p><p class='spireQuest'>Collect 20 Spirestones and raise your Spire's Threat to 400 to build your fourth Floor.</p>",
            "<p>It's getting huge! However, the Traps are getting more expensive as you place more and more of them. At this rate you'll never be able to afford enough Strength Towers to make a huge impact on your Trimps.</p><p>You consult with your Scientists, who tell you that they can create upgrades for your Traps, but that they need to study corpses of high level enemies in order to exploit their weaknesses.</p><p class='spireQuest'>提高你的最高区域达到Z230，并升级你的Frost Trap。</p>",
            "<p>Wow, look at that thing slow!</p><p>You seem to have a pretty decent understanding of how to manage your Spire, and I believe you can handle it on your own for a while. Continue to raise your HZE to unlock more upgrades, collect Spirestones to add more Floors and enemies, and tweak your Trap layout every once in a while to make sure you're getting as many Runestones as you can, you'll definitely need them later.</p><p>Your Scientists let you know that they can possibly forge a new Trap and Tower, but they need to study Spirestones from a higher level Spire first.</p><p class='spireQuest'>Complete Spire II to unlock Poison Trap and Condenser Tower! Once you have your new Traps, raise your Spire's Threat to 600 and build your sixth Floor.<br/><br/>Remember that you have to satisfy both the Threat and Spirestone requirements to add a new Floor!</p>",
            "<p>You've got a new Trap and Tower, your Spire is still growing, and your power is growing with it! Your Trimps are slightly annoyed that they have to clean up the occasional Bad Guy that makes it through the Spire and into the town, but they can handle it. They all agree that life in general is just more fun when there's a giant Spire grinding Bad Guys at the entrance to their town.</p><p>While you're feeling comfortable maintaining your Spire's defenses with the tools you have, you still feel like there's something missing. Your Scientists say that they could perhaps create one more Trap and Tower, but again they'll need to study Spirestones from an even higher Spire.</p><p class='spireQuest'>Clear Spire III to unlock the Lightning Trap and Knowledge Tower, then raise your Spire's Threat to 1100 and build your eleventh Floor.</p>",
            "<p>And that's about all there is to teach you! The rest of the management of your Spire is left in your more-than-capable hands.</p><p>Raise your HZE, clear Spires, buy upgrades, build Floors, and come up with the perfect layout for your Spire.</p><p class='spireQuest'>I'll hang out and make sure everything's OK until you reach Threat level 1300 and build your thirteenth Floor, and then you'll be on your own.</p>"
        ];
        var text = (this.tutorialStep < 8) ? tutorialSteps[this.tutorialStep] : "";
        if (textOnly) return text;
        elem.innerHTML = text;
    },
    getSetTrapBgColor: function(cellNumber, elem){
        //Elem is optional, will set on the element instead of getting html
        var trap = this.layout[cellNumber].trap;
        var bgColor = trap.name ? playerSpireTraps[trap.name].color : "#000";
        var layout = this.layout;
        var dblPoisonColor = "";
        if (playerSpireTraps.Poison.level >= 3 && trap.name == "Poison"){
            var dblPoisonCount = 0;
            if (cellNumber > 0 && this.layout[cellNumber - 1].trap.name == "Poison") dblPoisonCount++;
            if (cellNumber + 1 < this.layout.length && this.layout[cellNumber + 1].trap.name == "Poison") dblPoisonCount++;
            var barColor = "#012b13";
            if (dblPoisonCount > 0){
                dblPoisonColor = "linear-gradient(" + barColor + " 20%, " + bgColor + " 20%";
                if (dblPoisonCount == 2) dblPoisonColor += ", " + bgColor + " 30%, " + barColor + " 30%, " + barColor + " 50%, " + bgColor + " 50%";
                dblPoisonColor += ")";
            }
        }
        var secondGradient = "";
        var lightStacks = (playerSpireTraps.Lightning.level >= 4) ? this.lightColumns[this.getColFromCell(cellNumber)] : 0;
        if (lightStacks && (trap.name == "Poison" || trap.name == "Fire")){
            var pct = (100 - (lightStacks * 2)) + "%";
            secondGradient = "linear-gradient(to right, rgba(0,0,0,0) " + pct + ", " + playerSpireTraps.Lightning.color + " " + pct + ")";
        }
        if ((!trap.name || trap.name == "Fire") && this.strengthLocations.indexOf(this.getRowFromCell(cellNumber)) != -1){
            var setting = (trap.name) ? "linear-gradient(#7F0505, #630202 75%, #684112 75%)" : "linear-gradient(#000 75%, #684112 75%)";
            if (secondGradient) setting = secondGradient + ", " + setting;
            if (elem) elem.style.backgroundImage = setting;
            else return "background-image: " + setting;
        }
        else if (playerSpireTraps.Frost.level >= 4 && (!trap.name || trap.name == "Poison") && layout.length > cellNumber + 1 && playerSpire.layout[cellNumber + 1].trap.name && playerSpire.layout[cellNumber + 1].trap.name == "Frost"){
            var setting = "linear-gradient(";
            if (dblPoisonColor) setting = dblPoisonColor.substring(0, dblPoisonColor.length - 1) + ", ";
            setting += bgColor + " 73%, " + playerSpireTraps.Frost.color + " 73%)";
            if (secondGradient) setting = secondGradient + ", " + setting;
            if (elem) elem.style.backgroundImage = setting;
            else return "background-image: " + setting;
        }
        else if (dblPoisonColor){
            if (secondGradient) dblPoisonColor = secondGradient + ", " + dblPoisonColor;
            if (elem) elem.style.backgroundImage = dblPoisonColor;
            else return "background-image: " + dblPoisonColor;
        }
        else if (secondGradient){
            secondGradient = secondGradient.replace("rgba(0,0,0,0)", bgColor);
            if (elem) elem.style.backgroundImage = secondGradient;
            else return "background-image: " + secondGradient;
        }
        else if (elem){
            elem.style.backgroundColor = bgColor;
            elem.style.backgroundImage = "none";
        }
        else return "background-color: " + bgColor;
    },
    getEnemyHtml: function(cellNumber){
        var cell = this.layout[cellNumber];
        var color = "";
        var iconColor = "#000";
        if (cell.occupiedBy.dead){
            color = "#350e0d";
        }
        else if (!cell.occupiedBy.name) return "";
        else {
            var healthPct = Math.ceil(cell.occupiedBy.health / cell.occupiedBy.maxHealth * 100);
            color = "#009681";
            iconColor = "#42f1d9";
            if (healthPct <= 20){
                color = "#541411";
                iconColor = "#ec352c";
            }
            else if (healthPct <= 50){
                color = "#861d18";
                iconColor = "#ff584f";
            }
            else if (healthPct < 75){
                color = "#b55b1b";
                iconColor = "#fb9b57"
            }
        }
        var cellHtml = "<span ";
        var cellClass = "playerSpireEnemy";
        if (cell.occupiedBy.slowedFor && this.settings.chillGradient){
            var pct = cell.occupiedBy.slowedFor * 10;
            var freezeColor = cell.occupiedBy.slowMod == 1 ? playerSpireTraps.Frost.color : playerSpireTraps.Knowledge.color;
            var gradient = freezeColor + " 0%, ";
            var lastPct = 0;
            if (pct > 100) pct = 100;
            var bars = Math.floor(pct / 10);
            var borderColor = cell.occupiedBy.slowMod == 1 ? "#0470CE" : "#7e4fd4";
            for (var x = 0; x < bars; x++){
                //if (x != 0) gradient += freezeColor + " " + lastPct + "%, ";
                lastPct += 10;
                gradient += borderColor + " " + (lastPct) + "%";
                if (x != 9) gradient += ", " + freezeColor + " " + (lastPct) + "%, "
            }
            if (bars != 10) gradient += color + " " + lastPct + "%";
            cellHtml += "style='background-image: linear-gradient(to right, " + gradient + ");";
        }
        else cellHtml += "style='background-color: " + color + ";";
        if (this.settings.shockEffect && cell.occupiedBy.shockTurns != null && cell.occupiedBy.shockTurns >= 0) cellClass += " shocked"
        var innerText = (cell.occupiedBy.dead) ? "<span class='icomoon icon-skeletor'></span>" : ((this.settings.percentHealth) ? prettify((cell.occupiedBy.health / cell.occupiedBy.maxHealth) * 100) + "%" : prettify(cell.occupiedBy.health));
        innerText = "<span class='playerSpireEnemyText'>" + innerText + "</span>";
        if (cell.occupiedBy.name && this.settings.enemyIcons){
            innerText += "<span class='icomoon icon-" + cell.occupiedBy.name + " spireUniqueIcon' style='color: " + iconColor + "'></span>"
        }
        cellHtml += "' class='" + cellClass + "'>" + innerText + "</span>";
        return cellHtml;

    },
    checkDragTraps: function(cell, event){
        if (event.buttons) this.buildTrap(cell);
    },
    drawSpireCell: function(cellNumber){
        if (!this.popupOpen) return;
        var elem = document.getElementById('playerSpireCell' + cellNumber);
        if (!elem) return;
        this.drawTrapIcon(cellNumber);
        this.getSetTrapBgColor(cellNumber, elem);
        this.drawEnemy(cellNumber);
    },
    getTrapIcon: function(cellNumber){
        var trap = this.layout[cellNumber].trap;
        if (!trap.name) return "";
        var trapIcon = "icomoon icon-" + playerSpireTraps[trap.name].icon;
        return "<span class='" + trapIcon + "'></span>";
    },
    drawTrapIcon: function(cellNumber){
        if (!this.settings.trapIcons) return;
        var elem = document.getElementById('spireTrapIcon' + cellNumber);
        if (!elem) return;
        elem.innerHTML = this.getTrapIcon(cellNumber);
    },
    drawEnemy: function(cellNumber){
        if (!this.popupOpen) return;
        var elem = document.getElementById('playerSpireCell' + cellNumber + 'enemy');
        if (!elem) return;
        elem.innerHTML = this.getEnemyHtml(cellNumber);
    },
    getThreatChange: function(isKill, enemy, location){
        var base = 2;
        if (!isKill){
            var healthPct = Math.ceil((enemy.health / enemy.maxHealth) / 0.15);
            base *= healthPct;
        }
        else{
            if (this.killedSinceLeak > 100) base *= 2;
            if (this.killedSinceLeak > 250) base *= 2;
            if (this.difficultyHidden > 300){
                var row = this.getRowFromCell(location);
                row = (this.rowsAllowed - row + 1) / this.rowsAllowed;
                base *= row;
            }
            else base *= 0.5;
        }
        var enemyMod = 1 / (this.currentEnemies / 5);
        if (enemyMod > 1) enemyMod = 1;
        base *= enemyMod;
        //console.log(((isKill) ? "kill" : "leak"), prettify(enemy.health / enemy.maxHealth * 100), location, base);
        return base;
    },
    enemyEscaped: function(enemy, location, catchingUp){
        this.currentEnemies--;
        this.updateEnemyCount();
        this.escapees++;
        this.killedSinceLeak = 0;
        
        if (enemy.toxicity > 0 && playerSpireTraps.Poison.level >= 6){
            var toxReward = enemy.toxicity * 0.1;
            this.rewardRunestones(toxReward);
            if (!catchingUp && this.settings.fctRs)
                TDFloatingText.spawnFloatingText(location, playerSpireTraps.Poison.color, -0.05, 3.5, "+ " + prettify(toxReward) + " 符石");
        }
        this.difficultyHidden -= this.getThreatChange(false, enemy, location);
        if (this.difficultyHidden < 1) this.difficultyHidden = 1;
        if (this.difficultyHidden < this.difficulty)
            this.difficulty += ((this.difficultyHidden - this.difficulty) / 10);
        if (this.difficulty < 1) this.difficulty = 1;
        this.updateKills();
    },
    getRsReward: function(enemy, rsBonus){
        var reward = Math.ceil(enemy.maxHealth / 600);
        if (enemy.threat){
            reward += enemy.threat / 20;
            reward *= Math.pow(1.00116, enemy.threat);
        }
        if (rsBonus > 0){
            //Send rsBonus as the integer, EG 20 for 20%
            reward *= (1 + (rsBonus / 100));
        }
        if (enemy.slowTot && playerSpireTraps.Frost.level >= 5){
            reward *= (1 + (enemy.slowTot * 0.02))
        }
        return reward;
    },
    killedEnemy: function(enemy, location, rsBonus, catchingUp){
        this.killedSinceLeak++;
        var reward = this.getRsReward(enemy, rsBonus);
        this.rewardRunestones(reward);
        this.layout[location].occupiedBy = {dead: true};
        this.currentEnemies--;
        this.updateEnemyCount();
        this.enemiesKilled++;
        game.stats.tdKills.value++;

        //Increase Threat
        this.difficultyHidden += this.getThreatChange(true, enemy, location);
        if (this.difficulty < this.difficultyHidden)
            this.difficulty += ((this.difficultyHidden - this.difficulty) / 10);

        if (this.difficulty > this.peakThreat) this.peakThreat = this.difficulty;
        
        this.updateKills();
        if (!catchingUp && this.settings.fctRs)
            TDFloatingText.spawnFloatingText(location, "black", -0.1, 7, "+ " + prettify(reward) + " 符石");
        this.checkRedrawUpgrades();
        this.checkUpdateTrapColors();
    },
    updateRunestones: function(){
        var elem = document.getElementById('playerSpireRunestones');
        if (elem)
            elem.innerHTML = prettify(this.runestones);
    },
    updateEnemyCount: function(){
        var elem1 = document.getElementById('playerSpireCurrentEnemies');
        if (elem1)
            elem1.textContent = this.currentEnemies;
        var elem2 = document.getElementById('playerSpireMaxEnemies');
        if (elem2)
            elem2.textContent = this.maxEnemies;
    },
    updateDifficultyMod: function(){
        var elem = document.getElementById('playerSpireDifficulty');
        if (elem)
            elem.textContent = this.getDifficultyHtml();
    },
    getDifficultyHtml: function() {
        var text = ((this.smallMode) ? "威胁: " : "威胁: ") + prettify(Math.floor(this.difficulty));
        var nextCost = (this.rowsAllowed < 20 && this.tutorialStep > 1) ? " / " + prettify(100 * (this.rowsAllowed + 1)) : "";
        return text + nextCost;
    },
    updateKills: function(){
        var elem1 = document.getElementById('playerSpireKilled');
        if (elem1)
            elem1.textContent = prettify(this.enemiesKilled);
        var elem2 = document.getElementById('playerSpireEscapees');
        if (elem2)
            elem2.textContent = prettify(this.escapees);
        var elem3 = document.getElementById('playerSpireKillPct');
        if (elem3)
            elem3.textContent = this.killPercent;
    },
    spawnEnemy: function(catchingUp){
        var health = this.getEnemyHealth();
        var icons = ["spades", "diamonds", "clubs", "heart"];
        var icon;
        if (this.nextIcon < icons.length) icon = icons[this.nextIcon];
        else icon = icons[0];
        this.nextIcon++;
        if (this.nextIcon >= icons.length) this.nextIcon = 0;
        this.layout[0].occupiedBy = {name: icon, maxHealth: health, health: health, toxicity: 0, threat: this.difficulty};
        this.currentEnemies++;
        var enemy = this.layout[0].occupiedBy;
        if (this.layout[0].trap.name) this.triggerTrap(this.layout[0].trap, enemy, 0);
        if (enemy.toxicity){
            enemy.health -= enemy.toxicity;
            if (!catchingUp && this.settings.fctPoison)
                TDFloatingText.spawnFloatingText(0, playerSpireTraps.Poison.color, -1.5, 45, prettify(enemy.toxicity));
        }
        if (enemy.health <= 0){
            this.killedEnemy(enemy, 0, 0, catchingUp);
        }   
        if (!catchingUp){
            this.updateEnemyCount();
            this.drawEnemy(0);
        }
    },
    getEnemyHealth: function() {
        var difficultyMod = this.difficultyMod;
        var scaledMod = Math.pow(1.012, difficultyMod);
        var health = 10 + (difficultyMod * 4) + scaledMod;
        var difPct = 0.00053 * this.difficulty;
        if (difPct > 0.85) difPct = 0.85;
        if (difPct < 0.15) difPct = 0.15;
        health = (health * (1 - difPct)) + (Math.random() * difPct * health);
        return Math.floor(health);
    },
    sellTrap: function(cell){
        cell = parseInt(cell, 10);
        var trapToSell = this.layout[cell].trap.name;
        if (trapToSell){
            var cost = this.getTrapCost(trapToSell, true);
            this.layout[cell].trap = {};
            this.runestones += cost;
            playerSpireTraps[trapToSell].owned--;
            if (trapToSell == "Strength"){
                this.removeStrength(cell);
                var row = this.getRowFromCell(cell);
                for (var x = (row * 5); x < ((row * 5) + 5); x++){
                    if (x !== cell)
                        this.drawSpireCell(x);
                }
            }
            if (trapToSell == "Lightning"){
                this.removeLightning(cell);
                this.redrawColumn(cell);
            }
            if (trapToSell == "Frost" && cell != 0){
                this.drawSpireCell(cell - 1);
            }
            if (trapToSell == "Poison"){
                if (cell != 0) this.drawSpireCell(cell - 1);
                if (cell != this.layout.length - 1) this.drawSpireCell(cell + 1);
            }
            this.drawSpireCell(cell);
            this.drawInfo();

        }
    },
    buildTrap: function(cell, forceTrap){
        var trap = this.selectedTrap;
        if (forceTrap != null) trap = forceTrap;
        if (trap == "shiftUp"){
            this.dontDraw = true;
            this.shiftUp(cell);
            this.dontDraw = false;
            this.drawSpire();
            return;
        }
        if (trap == "shiftDown"){
            this.dontDraw = true;
            this.shiftDown(cell);
            this.dontDraw = false;
            this.drawSpire();
            return;
        }
        cell = parseInt(cell, 10);
        var redrawSpire = false;
        var redrawCol = false;
        if (trap == "sell"){
            this.sellTrap(cell);
            return;
        }
        if (!trap) return;
        var oldTrap = this.layout[cell].trap.name;
        if (trap == oldTrap) return;
        var cost = this.getTrapCost(trap);
        var refund = 0;
        if (oldTrap) refund = this.getTrapCost(oldTrap, true);
        if (this.runestones + refund < cost) return;
        if (trap == "Strength"){
            if (this.addStrength(cell) == -1) return;
            redrawSpire = true;
        }
        if (trap == "Lightning"){
            this.addLightning(cell);
            redrawCol = true;
        }
        if (oldTrap){
            playerSpireTraps[oldTrap].owned--;
            if (oldTrap == "Strength"){
                this.removeStrength(cell);
                redrawSpire = true;
            }
            if (oldTrap == "Lightning"){
                this.removeLightning(cell);
                redrawCol = true;
            }
        }
        playerSpireTraps[trap].owned++;
        this.runestones += refund - cost;
        this.layout[cell].trap = {name: trap};
        if (redrawSpire) this.drawSpire();
        else{
            if (redrawCol)
                this.redrawColumn(cell);
            else
                this.drawSpireCell(cell);

            if ((trap == "Frost" || oldTrap == "Frost") && cell != 0){
                this.drawSpireCell(cell - 1);
            }
            if ((trap == "Poison" || oldTrap == "Poison")){
                if (cell != 0) this.drawSpireCell(cell - 1);
                if (cell != this.layout.length - 1) this.drawSpireCell(cell + 1);
            }
        }
        this.drawInfo();
    },
    shiftUp: function(fromCell){
        fromCell = parseInt(fromCell, 10);
        if (fromCell + 1 >= this.layout.length || fromCell < 0) return;
        var startCell = this.layout.length - 1;
        for (var x = fromCell; x < this.layout.length; x++){
            if (!this.layout[x].trap.name){
                startCell = x;
                break;
            }
        }
        for (var x = startCell; x > fromCell; x--){
            var trap = this.layout[x].trap;
            if (x == this.layout.length - 1 && trap.name){
                this.sellTrap(x);
            }
            if (x > 0 && this.layout[x - 1].trap.name){
                var trapSave = this.layout[x - 1].trap.name;
                this.sellTrap(x - 1);
                this.buildTrap(x, trapSave);
            }
        }
    },
    shiftDown: function(fromCell){
        fromCell = parseInt(fromCell, 10);
        if (fromCell >= this.layout.length || fromCell < 0) return;
        var startCell = 0;
        for (var x = fromCell; x >= 0; x--){
            if (!this.layout[x].trap.name){
                startCell = x;
                break;
            }
        }
        for (var x = startCell; x <= fromCell - 1; x++){
            var trap = this.layout[x].trap;
            if (x == 0 && trap.name){
                this.sellTrap(x);
            }
            if (x < this.layout.length - 1 && this.layout[x + 1].trap.name){
                var trapSave = this.layout[x + 1].trap.name;
                this.sellTrap(x + 1);
                this.buildTrap(x, trapSave);
            }
        }
    },
    addStrength: function(cell){
        var row = this.getRowFromCell(cell);
        if (this.strengthLocations.indexOf(row) != -1){
            return -1;
        }
        this.strengthLocations.push(row);
    },
    removeStrength: function(cell){
        var row = this.getRowFromCell(cell);
        var index = this.strengthLocations.indexOf(row);
        this.strengthLocations.splice(index, 1);
    },
    addLightning: function(cell){
        var col = this.getColFromCell(cell);
        this.lightColumns[col]++;
    },
    removeLightning: function(cell){
        var col = this.getColFromCell(cell);
        if (this.lightColumns[col] > 0)
            this.lightColumns[col]--;
    },
    redrawColumn: function(cell){
        var col = this.getColFromCell(cell);
        for (var x = 0; x < this.rowsAllowed; x++){
            this.drawSpireCell((x * 5) + col);
        }
    },
    triggerTrap: function(trap, enemy, cellNumber, catchingUp){
        var trapConfig = playerSpireTraps[trap.name];
        if (!trapConfig.noDirectDamage){
            var trapDmg = playerSpireTraps[trap.name].totalDamage(enemy, cellNumber);
            enemy.health -= trapDmg;
            if (!catchingUp && this.settings.fctTrap)
                TDFloatingText.spawnFloatingText(cellNumber, trapConfig.color, -0.5, 25, prettify(trapDmg));
        }
        if (typeof trapConfig.extraEffect !== 'undefined') trapConfig.extraEffect(enemy, cellNumber)
        if (trap.name != "Lightning" && enemy.shockTurns >= 0) enemy.shockTurns--;
    },
    getTrapCost: function(trap, forRefund, levelOverride){
        var trapCfg = playerSpireTraps[trap];
        var level;
        if (levelOverride != null)
            level = levelOverride;
        else
            level = (forRefund) ? trapCfg.owned - 1 : trapCfg.owned;
        var amt = Math.floor(Math.pow(trapCfg.costIncrease, level) * trapCfg.baseCost);
        return amt;
    },
    getRowFromCell: function(cell){
        return Math.floor(cell / 5); 
    },
    getColFromCell: function(cell){
        return cell % 5;  
    },
    moveEnemies: function(catchingUp){
        if (this.paused) return;
        var layout = playerSpire.layout;
        var totalEnemies = 0;
        var cells = layout.length;
        if (!playerSpire.popupOpen) catchingUp = true;
        for (var x = cells - 1; x >= 0; x--){
            var drawCell = false;
            if (layout[x].occupiedBy.dead){
                drawCell = true;
                layout[x].occupiedBy = {};
            }
            if (layout[x].occupiedBy.name){
                totalEnemies++;
                var newLocation;
                var enemy = layout[x].occupiedBy;
                var slowed = false;
                if (enemy.slowedFor && enemy.slowedFor > 0){
                    if (enemy.canMoveIn > 0){
                        enemy.canMoveIn--;
                        slowed = true;
                    }
                    else if (x == cells - 1 || !layout[x + 1].occupiedBy.name){
                        enemy.canMoveIn = enemy.slowMod;
                        enemy.slowedFor--;
                    }
                }
                if (slowed && playerSpireTraps.Frost.level >= 5){
                    enemy.slowTot = (enemy.slowTot) ? enemy.slowTot + 1 : 1;
                }
                if (!slowed && x == cells - 1){
                    playerSpire.enemyEscaped(layout[x].occupiedBy, x, catchingUp);
                    layout[x].occupiedBy = {};
                    drawCell = true;
                }
                else{
                    if (!slowed && !layout[x + 1].occupiedBy.name){
                        layout[x + 1].occupiedBy = enemy;
                        layout[x].occupiedBy = {};
                        newLocation = x + 1;
                    }
                    else newLocation = x;
                    enemy = layout[newLocation].occupiedBy;
                    var trap = layout[newLocation].trap;
                    var rsBonus = 0;
                    if (trap.name){
                        playerSpire.triggerTrap(trap, enemy, newLocation, catchingUp);
                        if (trap.name == "Fire" && playerSpireTraps.Fire.level >= 4){
                            var healthPct = (enemy.health / enemy.maxHealth);
                            if (healthPct <= 0.2) enemy.health = 0;
                        }
                        if (trap.name == "Fire" && playerSpireTraps.Fire.level >= 7){
                            rsBonus = 20;
                        }
                    }
                    if (enemy.toxicity && enemy.health > 0){
                        enemy.health -= enemy.toxicity;
                        if (!catchingUp && this.settings.fctPoison)
                            TDFloatingText.spawnFloatingText(newLocation, playerSpireTraps.Poison.color, -1.5, 45, prettify(enemy.toxicity));
                    }
                    if (enemy.health <= 0) {
                        playerSpire.killedEnemy(enemy, newLocation, rsBonus, catchingUp)
                        totalEnemies--;
                    }
                    drawCell = true;
                    if (!catchingUp){
                        if (newLocation != x) playerSpire.drawEnemy(newLocation);
                    }
                }
                // 数值计算开始
                if(x == cells - 1)
                {
                    var maxshanghai =  enemy.maxHealth - enemy.health;
                    if (enemy.health <= 0) {
                        if(this.LastDiaoLuo != this.getRsReward(enemy, rsBonus)) {
                            this.LastDiaoLuo = this.getRsReward(enemy, rsBonus);
                            console.log("最大生命：" + enemy.maxHealth + "掉落：" + this.LastDiaoLuo);
                        }
                    }
                    else {
                        if(this.LastShangHai != maxshanghai) {
                            this.LastShangHai = maxshanghai;
                            console.log("最大生命：" + enemy.maxHealth + "最大伤害：" + maxshanghai + "预计掉落：" + this.getRsReward(enemy, rsBonus));
                        }
                    }
                }
                // 数值计算结束
            }
            if (drawCell && !catchingUp) playerSpire.drawEnemy(x);
        }
        playerSpire.currentEnemies = totalEnemies;
        if (totalEnemies < playerSpire.maxEnemies && playerSpire.ticksSinceLastEnemy > 1){
            playerSpire.spawnEnemy(catchingUp);
            playerSpire.ticksSinceLastEnemy = 0;
        }
        else playerSpire.ticksSinceLastEnemy++;
        if (!catchingUp)
            playerSpire.updateDifficultyMod();
        if (!catchingUp && playerSpire.wasCatchingUp) {
            playerSpire.drawSpire();
            playerSpire.drawInfo();
        }
        playerSpire.wasCatchingUp = catchingUp;
        playerSpire.curateAvgs();
        playerSpire.updateTutorial();
    },
    save: function(){
        var saveObject = {main: {}, traps: {}, settings: {}};
        saveObject.main.layout = this.layout;
        saveObject.main.rowsAllowed = this.rowsAllowed;
        saveObject.main.runestones = this.runestones;
        saveObject.main.spirestones = this.spirestones;
        saveObject.main.maxEnemies = this.maxEnemies;
        saveObject.main.currentEnemies = this.currentEnemies;
        saveObject.main.enemiesKilled = this.enemiesKilled;
        saveObject.main.escapees = this.escapees;
        saveObject.main.ticksSinceLastEnemy = this.ticksSinceLastEnemy;
        saveObject.main.smallMode = this.smallMode;
        saveObject.main.popupOpen = this.popupOpen;
        saveObject.main.strengthLocations = this.strengthLocations;
        saveObject.main.lightColumns = this.lightColumns;
        saveObject.main.initialized = this.initialized;
        saveObject.main.difficulty = this.difficulty;
        saveObject.main.tutorialStep = this.tutorialStep;
        saveObject.main.lootAvg = this.lootAvg;
        saveObject.main.killedSinceLeak = this.killedSinceLeak;
        saveObject.main.nextIcon = this.nextIcon;
        saveObject.main.spentOnUpgrades = this.spentOnUpgrades;
        saveObject.main.savedLayout1 = this.savedLayout1;
        saveObject.main.savedLayout2 = this.savedLayout2;
        saveObject.main.layout1Note = this.layout1Note;
        saveObject.main.layout2Note = this.layout2Note;
        saveObject.main.spirestones = this.spirestones;
        saveObject.main.difficultyHidden = this.difficultyHidden;
        saveObject.main.peakThreat = this.peakThreat;
        saveObject.main.paused = this.paused;
        saveObject.settings = this.settings;

        for (var item in playerSpireTraps){
            saveObject.traps[item] = {
                owned: playerSpireTraps[item].owned,
                level: playerSpireTraps[item].level,
                locked: playerSpireTraps[item].locked
            };
        }
        return saveObject;
    },
    load: function(saveObj){
        if (!saveObj.main.initialized) {
            return;
        }
        for (var item in saveObj.main){
            if (typeof this[item] === 'undefined') continue;
            this[item] = saveObj.main[item];
        }
        for (var item in saveObj.settings){
            if (typeof this.settings[item] === 'undefined') continue;
            this.settings[item] = saveObj.settings[item];
        }
        for (var item in saveObj.traps){
            if (typeof saveObj.traps[item].owned === 'undefined') continue;
            playerSpireTraps[item].owned = saveObj.traps[item].owned;
            playerSpireTraps[item].level = saveObj.traps[item].level;
            playerSpireTraps[item].locked = saveObj.traps[item].locked;
        }
        if (this.popupOpen)
            this.openPopup();
        else this.closePopup();
        if (this.smallMode)
            this.shrink();
        else this.enlarge();
        if (this.difficultyHidden == 1) this.difficultyHidden = this.difficulty;
        this.drawSpire();
        this.drawInfo();
        this.initalized = true;
        document.getElementById('playerSpireTab').style.display = 'table-cell';
    }

}

var playerSpireTraps = {
    Fire: {
        color: "#7F0505",
        baseCost: 100,
        costIncrease: 1.5,
        icon: "fire",
        upgrades: [
            {   //level 2
                description: "所有火焰陷阱<b>10倍</b>伤害。", //500 
                unlockAt: 250,
                cost: 5e4
            },
            {
                //level 3
                description: "所有火焰陷阱<b>5倍</b>伤害。", //2500
                unlockAt: 300,
                cost: 5e6
            },
            {
                //level 4
                description: "所有火焰陷阱<b>2倍</b>伤害，所有火焰陷阱可以秒杀20%及以下血的敌人。", //5000
                unlockAt: 375,
                cost: 2.5e7
            },
            {
                //level 5
                description: "所有火焰陷阱<b>2倍</b>伤害。",
                unlockAt: 425,
                cost: 7.5e7
            },
            {
                //level 6
                description: "所有火焰陷阱<b>10倍</b>伤害。", //50k
                unlockAt: 500,
                cost: 5e9
            },
            {
                //level 7
                description: "所有火焰陷阱<b>10倍</b>伤害，在火焰陷阱上死亡的敌人额外掉落20%符石", //500k
                unlockAt: 590,
                cost: 5e11
            },
            {
                //level 8
                description: "所有火焰陷阱<b>100倍</b>伤害。", //5m
                unlockAt: 650,
                cost: 1e14
            }

        ],
        level: 1,
        locked: false,
        damage: 50,
        owned: 0,
        get description(){
            var desc = "每步造成" + prettify(this.totalDamage()) + "点伤害。";
            if (this.level >= 4) desc += "<br/><br/>秒杀等于少于20%血的敌人。";
            if (this.level >= 7) desc += "<br/><br/>在火焰陷阱上死亡的敌人额外掉落20%符石。";
            desc += "<br/><br/>(快捷键 1)";
            return desc;
        },
        totalDamage: function (enemy, cell){
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedDamage() : 0;
            var level = this.level;
            var dmgs = [50, 500, 2500, 5e3, 10e3, 10e4, 10e5, 10e7];
            var dmg;
            if (level > dmgs.length)
                dmg = dmgs[dmgs.length - 1];
            else
                dmg = dmgs[this.level - 1];
            var row = playerSpire.getRowFromCell(cell);
            if (playerSpire.strengthLocations.indexOf(row) != -1) dmg *= 2;
            if (playerSpireTraps.Frost.level >= 3 && enemy && enemy.slowedFor && enemy.slowMod == 1){
                dmg *= 1.25;
            }
            if (effect > 0) dmg *= effect;
            dmg *= playerSpireTraps.Lightning.getColBonus(cell);
            return dmg;
        },
    },
    Frost: {
        color: "#02437C",
        baseCost: 100,
        costIncrease: 5,
        icon: "snow",
        upgrades: [
            {
                //level 2
                description: "所有冰霜陷阱<b>5倍</b>伤害，使冰冷效果的持续时间增加<b>1</b>格。",
                unlockAt: 230,
                cost: 1e4
            },
            {
                //level 3
                description: "所有冰霜陷阱<b>10倍</b>伤害。冰冷效果会使敌人多受到25%火焰陷阱伤害。",
                unlockAt: 275,
                cost: 5e5
            },
            {
                //level 4
                description: "所有冰霜陷阱<b>5倍</b>伤害。冰霜陷阱前一格的毒陷阱叠加效果翻到4倍。",
                unlockAt: 330,
                cost: 2.5e6
            },
            {
                //level 5
                description: "所有冰霜陷阱<b>2倍</b>伤害，每当敌人因为速度减慢而无法移动时，该敌人的符石掉落就会增加2％。这种效果可以叠加。",
                unlockAt: 430,
                cost: 1e8
            },
            {
                //level 6
                description: "所有冰霜陷阱<b>5倍</b>伤害，使冰冷效果的持续时间增加<b>1</b>格。",
                unlockAt: 530,
                cost: 5e10,
            }
        ],
        level: 1,
        locked: false,
        owned: 0,
        damage: 10,
        get description() {
            var desc = "每步造成" + prettify(this.totalDamage()) + "伤害, 使目标变冰冷, 减50%移动速度持续" + this.slowTurns() + "格. 这个速度降低导致目标在每个陷阱上停留两倍时间，触发每个陷阱两次。请注意，冰霜陷阱涂有防冻剂，可防止敌人站在冰霜陷阱时起作用。"
            if (this.level >= 3) desc += "<br/><br/>被冰冻的敌人会额外受到火陷阱25%伤害."
            if (this.level >= 4) desc += "<br/><br/>放置在冰霜陷阱之前的毒物陷阱效果是4倍。";
            if (this.level >= 5) desc += "<br/><br/>每当敌人因为速度减慢而无法移动时（从冰冷或冻结），他掉落的符石会额外多2％。这种效果可以叠加。"
            desc += "<br/><br/>(快捷键 2)";
            return desc;
        },
        slowTurns: function(){
            if (this.level < 2) return 3;
            if (this.level < 6) return 4;
            return 5;
        },
        totalDamage: function (enemy){
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedDamage() : 0;
            var level = this.level;
            var dmgs = [10, 50, 500, 2500, 5000, 25000];
            var dmg;
            if (level > dmgs.length)
                dmg = dmgs[dmgs.length - 1];
            else
                dmg = dmgs[this.level - 1];
            if (effect) dmg *= effect;
            return dmg;
        },
        extraEffect: function (enemy){
            var slowTurns = this.slowTurns();
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedEffect() : 0;
            if (effect > 0) slowTurns *= effect;
            slowTurns++; //to make up for stuff
            enemy.slowedFor = slowTurns;
            enemy.canMoveIn = 0;
            enemy.slowMod = 1;
        }
    },
    Poison: {
        color: "#008238",
        baseCost: 500,
        locked: true,
        costIncrease: 1.75,
        icon: "flask",
        upgrades: [
            {
                //Level 2
                description: "当敌人踩到毒物陷阱时叠加的毒性层数<b>翻倍</b>。",
                unlockAt: 350,
                cost: 1e7
            },
            {
                //level 3
                description: "如果在两个毒陷阱想连，则两个毒陷阱都获得3倍效果。如果一个毒陷阱两侧都有毒陷阱，则此毒陷阱会造成9倍效果。",
                unlockAt: 400,
                cost: 5e7
            },
            {
                //Level 4
                description: "当敌人踩到毒物陷阱时叠加的毒性层数<b>翻倍</b>。",
                unlockAt: 450,
                cost: 7.5e8
            },
            {
                //Level 5
                description: "当敌人踩到毒物陷阱时叠加的毒性层数<b>翻倍</b>。此外，如果敌人的生命值在75％或更低，则毒陷阱造成5倍效果。",
                unlockAt: 550,
                cost: 1e11
            },
            {
                //Level 6
                description: "当敌人踩到毒物陷阱时叠加的毒性层数<b>翻倍</b>。此外，如果敌人逃跑，将获得其毒性伤害的10％的符石。",
                unlockAt: 600,
                cost: 1e12
            },
            {
                //Level 7
                description: "当敌人踩到毒物陷阱时叠加的毒性层数<b>翻倍</b>。",
                unlockAt: 625,
                cost: 4e13
            }
        ],
        damage: 5,
        owned: 0,
        level: 1,
        noDirectDamage: true,
        get description() {
            var desc = "每步增加" + prettify(this.totalDamage()) + "层毒性伤害。每步目标都会受到与其总毒性相等的伤害。";
            if (this.level >= 3) desc += "<br/><br/>如果在两个毒陷阱想连，则两个毒陷阱都获得3倍效果。如果一个毒陷阱两侧都有毒陷阱，则此毒陷阱会造成9倍效果。"
            if (this.level >= 5) desc += "<br/><br/>如果敌人的生命值在75％或更低，则叠加" + prettify(this.totalDamage() * 5) + "伤害。";
            if (this.level >= 6) desc += "<br/><br/>如果敌人逃跑，将获得其毒性伤害的10％的符石。";
            desc += "<br/><br/>(快捷键 3)";
            return desc;
        },
        totalDamage: function (enemy, cell){
            var level = this.level;
            var dmgs = [5, 10, 10, 20, 40, 80, 160];
            var dmg;
            if (level > dmgs.length)
                dmg = dmgs[dmgs.length - 1];
            else
                dmg = dmgs[this.level - 1];
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedDamage() : 0;
            if (effect > 0) dmg *= effect;
            if (cell != null && playerSpireTraps.Frost.level >= 4 && playerSpire.layout.length > cell + 1 && playerSpire.layout[cell + 1].trap.name && playerSpire.layout[cell + 1].trap.name == "Frost"){
                dmg *= 4;
            }
            if (this.level >= 3 && cell != null){
                var count = 0;
                if (cell > 0 && playerSpire.layout[cell - 1].trap.name == "Poison") count++;
                if (cell + 1 < playerSpire.layout.length && playerSpire.layout[cell + 1].trap.name == "Poison") count++;
                if (count == 1) dmg *= 3;
                if (count == 2) dmg *= 9;
            }
            if (this.level >= 5 && cell != null){
                var enemy = playerSpire.layout[cell].occupiedBy;
                if (enemy.name){
                    if ((enemy.health / enemy.maxHealth) <= 0.75){
                        dmg *= 5;
                    }
                }
            }
            dmg *= playerSpireTraps.Lightning.getColBonus(cell);
            return dmg;
        },
        extraEffect: function (enemy, cell){
            var dmg = this.totalDamage(enemy, cell);
            enemy.toxicity += dmg;
        }

    },
    Lightning: {
        color: "#a27d02",
        baseCost: 1000,
        locked: true,
        costIncrease: 3,
        icon: "bolt",
        getColBonus: function(cell){
            if (cell == null) return 1;
            if (this.level < 4) return 1;
            var col = playerSpire.getColFromCell(cell);
            var traps = playerSpire.lightColumns[col];
            return 1 + (traps * 0.1);
        },
        upgrades: [
            {
                //Level 2
                description: "所有闪电陷阱<b>10倍</b>伤害，闪电陷阱现在叠加<b>2</b>层震慑效果。",
                unlockAt: 440,
                cost: 5e8
            },
            {
                //Level 3
                description: "所有闪电陷阱<b>10倍</b>伤害，每层震慑效果会使敌人在陷阱中受到4倍伤害和毒性叠加。这个效果不会增加塔和减速效果。",
                unlockAt: 500,
                cost: 5e9
            },
            {
                //Level 4
                description: "闪电陷阱将一列中其他火焰和毒物陷阱的伤害和效果提高10％，与其他闪电陷阱叠加。",
                unlockAt: 575,
                cost: 2.5e11
            },
            {
                //Level 5
                description: "所有闪电陷阱<b>10倍</b>伤害，闪电陷阱现在叠加<b>3</b>层震慑效果。",
                unlockAt: 600,
                cost: 1e12
            },
            {
                //Level 6
                description: "所有闪电陷阱<b>10倍</b>伤害，每层震慑效果会使敌人在陷阱中受到8倍伤害和毒性叠加。这个效果不会增加塔和减速效果。",
                unlockAt: 675,
                cost: 1e15
            }
        ],
        damage: 50,
        level: 1,
        owned: 0,
        damageMod: 2,
        effectMod: 2,
        turns: 1,
        get description(){
            var shockTurns = this.shockTurns();
            var text = "每步造成" + prettify(this.totalDamage()) + "伤害，并给敌人叠加" + shockTurns + "层" + needAnS(shockTurns) + "震慑状态。敌人每步行动时会消耗一层震慑状态，导致敌人多受到<b>" + this.shockedDamage() + "倍</b>伤害和<b>" + this.shockedEffect() + "倍</b>效果。震慑状态在闪电陷阱上只有伤害加成，不享受效果加成。"
            if (this.level >= 4) text += "<br/><br/>闪电陷阱将一列中其他火焰和毒物陷阱的伤害和效果提高10％，效果是叠加的。";
            text += "<br/><br/>(快捷键 4)";
            return text;
        },
        shockedDamage: function(){
            var dmg = this.damageMod;
            if (this.level >= 3) dmg *= 2;
            if (this.level >= 6) dmg *= 2;
            return dmg;
        },
        shockedEffect: function(){
            return this.effectMod;
        },
        shockTurns: function(){
            var turns = this.turns;
            if (this.level >= 2) turns++;
            if (this.level >= 5) turns++;
            return turns;
        },
        totalDamage: function (enemy){
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedDamage() : 0;
            var level = this.level;
            var dmgs = [50, 500, 5000, 5000, 5e4, 5e5];
            var dmg;
            if (level > dmgs.length)
                dmg = dmgs[dmgs.length - 1];
            else
                dmg = dmgs[this.level - 1];
            if (effect) dmg *= effect;
            return dmg;
        },
        extraEffect: function (enemy){
            enemy.shockTurns = this.shockTurns();
        }
    },
    //Towers
    Strength: {
        color: "#684112",
        isTower: true,
        locked: true,
        baseCost: 3000,
        costIncrease: 100,
        icon: "gavel",
        upgrades: [
            {   //level 2
                description: "每个力量之塔对你的脆皮攻击加成提高15%.", //500 
                unlockAt: -1,
                cost: 1e6
            },
            {
                //level 3
                description: "每个力量之塔对你的脆皮攻击加成提高15%.", //5000
                unlockAt: -1,
                cost: 1e10
            },
            {
                //level 4
                description: "每个力量之塔对你的脆皮攻击加成提高15%.", //50000
                unlockAt: -1,
                cost: 1e14
            },
            {
                //level 5
                description: "每个力量之塔对你的脆皮攻击加成提高15%.", //500000
                unlockAt: -1,
                cost: 1e18
            },
        ],
        totalDamage: function (enemy, cell){
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedDamage() : 0;
            var row = playerSpire.getRowFromCell(cell);
            var startCell = row * 5;
            var dmg = 0;
            for (var x = startCell; x < startCell + 5; x++){
                if (playerSpire.layout.length <= x) continue;
                if (playerSpire.layout[x].trap.name == "Fire") dmg += playerSpireTraps.Fire.totalDamage(null, x);
            }
            if (playerSpireTraps.Frost.level >= 3 && enemy && enemy.slowedFor && enemy.slowMod == 1){
                dmg *= 1.25;
            }
            if (effect > 0) dmg *= effect;
            return dmg;
        },
        getWorldBonus: function(singleOnly){
            var mod = 30;
            if (this.level > 1) mod += ((this.level - 1) * 15);
            if (singleOnly) return mod;
            return (mod * this.owned);
        },
        damage: 0,
        level: 1,
        owned: 0,
        get description(){
            return "将同一层上所有火陷阱伤害提高100%，其本身造成这楼层所有火陷阱伤害之和的伤害（每层楼最多建1个）. 此外，这个塔还对你在世界和地图中的脆皮攻击" + prettify(this.getWorldBonus(true)) + "%伤害(与其它力量之塔叠加).<br/><br/>你的力量之塔总共给你的脆皮加成<b>" + prettify(this.getWorldBonus()) + "%</b>攻击伤害.<br/><br/>(快捷键 5)";
        }
    },
    Condenser: {
        color: "#262925",
        isTower: true,
        locked: true,
        baseCost: 6000,
        costIncrease: 100,
        icon: "funnel",
        upgrades: [
            {   //level 2
                description: "每个冷凝塔都可以从所有来源获得额外的5％氦气。", //500 
                unlockAt: -1,
                cost: 2e6
            },
            {
                //level 3
                description: "每个冷凝塔都可以从所有来源获得额外的5％氦气。", //5000
                unlockAt: -1,
                cost: 2e10
            },
            {
                //level 4
                description: "每个冷凝塔都可以从所有来源获得额外的5％氦气。", //50000
                unlockAt: -1,
                cost: 2e14
            },
            {
                //level 5
                description: "每个冷凝塔都可以从所有来源获得额外的5％氦气。", //500000
                unlockAt: -1,
                cost: 2e18
            },
        ],
        damage: 0,
        level: 1,
        owned: 0,
        getWorldBonus: function(singleOnly){
            var mod = 10;
            if (this.level > 1) mod += ((this.level - 1) * 5);
            if (singleOnly) return mod;
            return (mod * this.owned);
        },
        noDirectDamage: true,
        get description(){
            return "每步增加目标的毒性25%。此外，每个冷凝塔都会增加所有来源获得额外的" + prettify(this.getWorldBonus(true)) + "%氦气(additive with other Condenser Towers)。<br/><br/>你的冷凝塔总共加成所有来源获得额外的<b>" + prettify(this.getWorldBonus()) + "%</b>氦气。<br/><br/>(快捷键 6)";
        },
        extraEffect: function(enemy, cell){
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedEffect() : 1;
            var boost = (1 + (0.25 * effect));
            if (enemy.toxicity) enemy.toxicity *= boost;
        },
    },
    Knowledge: {
        color: "#2b115b",
        isTower: true,
        locked: true,
        baseCost: 9000,
        costIncrease: 100,
        icon: "book2",
        upgrades: [
            {   //level 2
                description: "每个知识塔提供从所有来源获得的额外7.5％蓬松经验加成。", //500 
                unlockAt: -1,
                cost: 3e6
            },
            {
                //level 3
                description: "每个知识塔提供从所有来源获得的额外7.5％蓬松经验加成。", //5000
                unlockAt: -1,
                cost: 3e10
            },
            {
                //level 4
                description: "每个知识塔提供从所有来源获得的额外7.5％蓬松经验加成。", //50000
                unlockAt: -1,
                cost: 3e14
            },
            {
                //level 4
                description: "每个知识塔提供从所有来源获得的额外7.5％蓬松经验加成。", //50000
                unlockAt: -1,
                cost: 3e18
            }
        ],
        damage: 0,
        level: 1,
        owned: 0,
        getWorldBonus: function(singleOnly){
            var mod = 15;
            if (this.level > 1) mod += ((this.level - 1) * 7.5);
            if (singleOnly) return mod;
            return (mod * this.owned);
        },
        noDirectDamage: true,
        get description(){
            return "当被冰冷的敌人踩到时，冰冷变为冻结，使目标减速至33％（一格三步），持续5格。此外，每个知识塔都会提供" + prettify(this.getWorldBonus(true)) + "%蓬松经验加成(additive with other Knowledge Towers). 请注意，知识塔涂有防冻剂，可防止冰冷或冻结直到敌人离开此塔。<br/><br/>你的知识塔一共提供<b>" + prettify(this.getWorldBonus()) + "%</b>蓬松经验加成。<br/><br/>(快捷键 7)";
        },
        totalDamage: function (enemy){
            var level = this.level;
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedDamage() : 0;
            var dmg = this.damage + ((level - 1) * 10);
            if (effect > 0) dmg *= effect;
            return dmg;
        },
        extraEffect: function(enemy){
            var effect = (enemy && enemy.shockTurns && enemy.shockTurns > 0) ? playerSpireTraps.Lightning.shockedEffect() : 0;
            if (enemy.slowedFor && enemy.slowMod == 1){
                var slowTurns = 5;
                if (effect) slowTurns *= effect;
                slowTurns++;
                enemy.slowedFor = slowTurns;
                enemy.canMoveIn = 0;
                enemy.slowMod = 2;
            }
        }
    }
}

var TDFloatingText = (function(floatingCombatText) {
    //Floating combat text brought to you by your friendly neighborhood Grabarz
    var frameTime = 30;
    var elements = [];
    var interval = null;
 
    setFrameTime(frameTime);
    function setFrameTime(ft) {
        clearInterval(interval);
        interval = setInterval(update, ft);
        frameTime = ft;
    }
   
    function spawnFloatingText(cellNumber, color, speed, distance, text) {
        if (playerSpire.wasCatchingUp) return;
        var maxRows = 20;
        var maxCols = 5;
        var row = (playerSpire.rowsAllowed - Math.floor(cellNumber / 5)) - 1;
        var col = (cellNumber % 5);
        var elem = document.createElement("div");
        elem.className = "playerSpireCell floatingCombatText";
       
        elem.textContent = text;
        elem.style.position = "absolute";
        elem.style.color = color;
        elem.style.border = "none";
       
        var cellWidth = 1 / maxCols;
        var cellHeight = 1 / maxRows;
       
        var x = cellWidth * col;
        var y = cellHeight * row;

        if (playerSpire.settings.fctStatic){
            if (color == "black"){ 
                y += 0.02;
                distance = 5;
            }
            else if (playerSpireTraps.Poison.owned){
                if (color == playerSpireTraps.Poison.color){
                    if (speed == -0.05){ //Poison leak
                        y += 0.04;
                    }
                    else {
                        if (playerSpire.settings.fctTrap)
                        x -= 0.05;
                        speed = -0.5;
                        distance = 25;
                    }
                }
                else if (playerSpire.settings.fctPoison) x += 0.05;
            }
            y -= (0.001 * row);
        }
               
        elem.style.left = (x * 100) + "%";
        elem.style.top = (y * 100) + "%";
       
        floatingCombatText.appendChild(elem);
       
        elements.push({
            elem: elem,
            row: row,
            col: col,
            speed: speed,
            distanceLeft: distance,
            posY: 0
        });
    }
   
    function update() {
        var i;
        for(i = 0; i < elements.length; i++) {
            var element = elements[i];
            var speed = element.speed * (frameTime / 20);
           
            element.distanceLeft -= Math.abs(speed);
            if(element.distanceLeft <= 0) {
                elements.splice(i, 1);
                i--;
                floatingCombatText.removeChild(element.elem);
                continue;
            }
            if (!playerSpire.settings.fctStatic){
                element.posY += speed;
                element.elem.style.transform = "translateY(" + element.posY + "px)";
            }
        }
    }
   
    return {
        spawnFloatingText: spawnFloatingText,
        update: update,
        setFrameTime: setFrameTime
    }
})(document.getElementById("floatingCombatText"));