/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

var cnItems = {
    _OTHER_: [],
    //段末标点处理
    '.': '。',
    '"': '',
    //段末标点处理结束
    //敌人名称相关
    //'s': 's', //协同挑战中后缀带s，查阅badName.replace，且最后有括号部分
    'Liquimp': '液化者',
    'Presimpt': '脆皮小礼',
    'Turkimp': '脆皮火鸡',
    'Randimp': '脆皮百变怪',
    'Squimp': '脆皮乌贼',
    'Elephimp': '脆皮象',
    'Turtlimp': '脆皮龟',
    'Chimp': '脆皮黑猩猩',
    'Penguimp': '脆皮企鹅',
    'Snimp': '脆皮鹬',
    'Gorillimp': '脆皮大猩猩',
    'Blimp': '脆皮飞艇',
    'Dragimp': '脆皮龙',
    'Improbability': '乌有者',
    'Omnipotrimp': '全能者',
    'Mutimp': '脆皮变异者',
    'Hulking Mutimp': '脆皮大型变异者',
    'Feyimp': '脆皮小妖',
    'Tauntimp': '脆皮咚咚',
    'Grants an extra 0.3% of current Trimps': '脆皮数量及上限增加当前上限的0.3%',
    'Whipimp': '脆皮鞭者',
    'Grants 0.3% Trimp resource production speed': '脆皮资源获取速度增加0.3%',
    'Venimp': '脆皮爱神',
    'Grants 0.3% Trimp breed speed': '脆皮繁殖速度增加0.3%',
    'Magnimp': '脆皮磁王',
    '0.3% extra loot from maps and Zones (Not Helium': '地图和世界上获得的战利品增加0.3%(不包括氦',
    'Skeletimp': '脆皮骷髅',
    'Megaskeletimp': '脆皮超级骷髅',
    'Pumpkimp': '脆皮南瓜怪', //地图敌人
    'Shrimp': '脆皮虾', //地图敌人
    'Mountimp': '脆皮山怪', //地图敌人
    'Frimp': '脆皮森精', //地图敌人
    'Chickimp': '脆皮小鸡', //地图敌人
    'Hippopotamimp': '脆皮河马', //地图敌人
    'Onoudidimp': '脆皮蜗牛', //地图敌人
    'Kittimp': '脆皮小猫', //地图敌人
    'Grimp': '脆皮护林者', //地图敌人
    'Golimp': '脆皮魔像', //地图敌人
    'Seirimp': '脆皮矿精', //地图敌人
    'Slagimp': '脆皮炉渣怪', //地图敌人
    'Moltimp': '脆皮熔金怪', //地图敌人
    'Lavimp': '脆皮火岩怪', //地图敌人
    'Flowimp': '脆皮花妖', //地图敌人
    'Kangarimp': '脆皮袋鼠', //地图敌人
    'Gnomimp': '脆皮侏儒', //地图敌人
    'Slosnimp': '脆皮慢鹬', //地图敌人
    'Entimp': '脆皮树人', //地图敌人
    'Squirrimp': '脆皮松鼠', //地图敌人
    'Gravelimp': '脆皮碎石怪', //地图敌人
    'Cthulimp': '脆皮克苏鲁', //地图敌人
    'Shadimp': '脆皮暗影怪', //地图敌人
    'Voidsnimp': '脆皮虚空鹬', //地图敌人
    'Goblimp': '脆皮地精', //地图敌人
    'Flutimp': '脆皮飘兽', //地图敌人
    'Drops Fragments': '掉落碎片',
    'Jestimp': '脆皮弄臣', //地图敌人
    '45 seconds of production for 1 random resource': '获得随机1种资源45秒的产量',
    'Titimp': '脆皮泰坦', //地图敌人
    '100% damage for 30 seconds in maps': '100%攻击力，持续30秒，只在地图中生效',
    'Chronoimp': '脆皮时者', //地图敌人
    '5 seconds of production for all basic resources': '获得所有基本资源5秒的产量',
    'Megablimp': '脆皮超级飞艇', //特殊敌人
    'Mitschimp': '脆皮巨猩猩', //特殊敌人
    'Brickimp': '脆皮砖汉', //特殊敌人
    'Indianimp': '脆皮印第安人', //特殊敌人
    'Warden': '典狱长', //特殊敌人
    'Robotrimp': '脆皮机器人', //特殊敌人
    'Mechimp': '脆皮机甲', //特殊敌人
    'Destructimp': '脆皮破灭者', //特殊敌人
    'Terminatimp': '脆皮终结者', //特殊敌人
    'Autoimp': '脆皮汽车', //特殊敌人
    'Artimp': '脆皮机器艺术家', //特殊敌人
    'Neutrimp': '脆皮中子怪', //特殊敌人
    'Fusimp': '脆皮聚变怪', //特殊敌人
    'Hydrogimp': '脆皮氢怪', //特殊敌人
    'Carbimp': '脆皮碳怪', //特殊敌人
    'Prismimp': '脆皮棱镜怪', //特殊敌人
    'Rainbimp': '脆皮彩虹兽', //特殊敌人
    'Lightimp': '脆皮光怪', //特殊敌人
    'Meltimp': '脆皮熔怪', //特殊敌人
    'Sweltimp': '脆皮酷热者', //特殊敌人
    'Darknimp': '脆皮暗罪者', //特殊敌人
    'Druopitee': '德罗披提', //特殊敌人
    'Druopitee and Pals': '德罗披提和随从们', //特殊敌人
    'Echo of Druopitee': '德罗披提的幻影', //特殊敌人
    'Echoes of Druopitee and Pals': '德罗披提的幻影和随从们', //特殊敌人
    'Corrupt Liquimp': '腐化液化者',
    'Corrupt Presimpt': '腐化脆皮小礼',
    'Corrupt Turkimp': '腐化脆皮火鸡',
    'Corrupt Randimp': '腐化脆皮百变怪',
    'Corrupt Squimp': '腐化脆皮乌贼',
    'Corrupt Elephimp': '腐化脆皮象',
    'Corrupt Turtlimp': '腐化脆皮龟',
    'Corrupt Chimp': '腐化脆皮黑猩猩',
    'Corrupt Penguimp': '腐化脆皮企鹅',
    'Corrupt Snimp': '腐化脆皮鹬',
    'Corrupt Gorillimp': '腐化脆皮大猩猩',
    'Corrupt Blimp': '腐化脆皮飞艇',
    'Corrupt Dragimp': '腐化脆皮龙',
    'Corrupt Improbability': '腐化乌有者',
    'Corrupt Omnipotrimp': '腐化全能者',
    'Corrupt Mutimp': '腐化脆皮变异者',
    'Corrupt Hulking Mutimp': '腐化脆皮大型变异者',
    'Corrupt Feyimp': '腐化脆皮小妖',
    'Corrupt Tauntimp': '腐化脆皮咚咚',
    'Corrupt Whipimp': '腐化脆皮鞭者',
    'Corrupt Venimp': '腐化脆皮爱神',
    'Corrupt Magnimp': '腐化脆皮磁王',
    'Corrupt Skeletimp': '腐化脆皮骷髅',
    'Corrupt Megaskeletimp': '腐化脆皮超级骷髅',
    'Magma Liquimp': '岩浆液化者',
    'Magma Presimpt': '岩浆脆皮小礼',
    'Magma Turkimp': '岩浆脆皮火鸡',
    'Magma Randimp': '岩浆脆皮百变怪',
    'Magma Squimp': '岩浆脆皮乌贼',
    'Magma Elephimp': '岩浆脆皮象',
    'Magma Turtlimp': '岩浆脆皮龟',
    'Magma Chimp': '岩浆脆皮黑猩猩',
    'Magma Penguimp': '岩浆脆皮企鹅',
    'Magma Snimp': '岩浆脆皮鹬',
    'Magma Gorillimp': '岩浆脆皮大猩猩',
    'Magma Blimp': '岩浆脆皮飞艇',
    'Magma Dragimp': '岩浆脆皮龙',
    'Magma Improbability': '岩浆乌有者',
    'Magma Omnipotrimp': '岩浆全能者',
    'Magma Mutimp': '岩浆脆皮变异者',
    'Magma Hulking Mutimp': '岩浆脆皮大型变异者',
    'Magma Feyimp': '岩浆脆皮小妖',
    'Magma Tauntimp': '岩浆脆皮咚咚',
    'Magma Whipimp': '岩浆脆皮鞭者',
    'Magma Venimp': '岩浆脆皮爱神',
    'Magma Magnimp': '岩浆脆皮磁王',
    'Magma Skeletimp': '岩浆脆皮骷髅',
    'Magma Megaskeletimp': '岩浆脆皮超级骷髅',
    'Hardened Liquimp': '硬化液化者',
    'Hardened Presimpt': '硬化脆皮小礼',
    'Hardened Turkimp': '硬化脆皮火鸡',
    'Hardened Randimp': '硬化脆皮百变怪',
    'Hardened Squimp': '硬化脆皮乌贼',
    'Hardened Elephimp': '硬化脆皮象',
    'Hardened Turtlimp': '硬化脆皮龟',
    'Hardened Chimp': '硬化脆皮黑猩猩',
    'Hardened Penguimp': '硬化脆皮企鹅',
    'Hardened Snimp': '硬化脆皮鹬',
    'Hardened Gorillimp': '硬化脆皮大猩猩',
    'Hardened Blimp': '硬化脆皮飞艇',
    'Hardened Dragimp': '硬化脆皮龙',
    'Hardened Improbability': '硬化乌有者',
    'Hardened Omnipotrimp': '硬化全能者',
    'Hardened Mutimp': '硬化脆皮变异者',
    'Hardened Hulking Mutimp': '硬化脆皮大型变异者',
    'Hardened Feyimp': '硬化脆皮小妖',
    'Hardened Tauntimp': '硬化脆皮咚咚',
    'Hardened Whipimp': '硬化脆皮鞭者',
    'Hardened Venimp': '硬化脆皮爱神',
    'Hardened Magnimp': '硬化脆皮磁王',
    'Hardened Skeletimp': '硬化脆皮骷髅',
    'Hardened Megaskeletimp': '硬化脆皮超级骷髅',
    'Healthy Liquimp': '健康液化者',
    'Healthy Presimpt': '健康脆皮小礼',
    'Healthy Turkimp': '健康脆皮火鸡',
    'Healthy Randimp': '健康脆皮百变怪',
    'Healthy Squimp': '健康脆皮乌贼',
    'Healthy Elephimp': '健康脆皮象',
    'Healthy Turtlimp': '健康脆皮龟',
    'Healthy Chimp': '健康脆皮黑猩猩',
    'Healthy Penguimp': '健康脆皮企鹅',
    'Healthy Snimp': '健康脆皮鹬',
    'Healthy Gorillimp': '健康脆皮大猩猩',
    'Healthy Blimp': '健康脆皮飞艇',
    'Healthy Dragimp': '健康脆皮龙',
    'Healthy Improbability': '健康乌有者',
    'Healthy Omnipotrimp': '健康全能者',
    'Healthy Mutimp': '健康脆皮变异者',
    'Healthy Hulking Mutimp': '健康脆皮大型变异者',
    'Healthy Feyimp': '健康脆皮小妖',
    'Healthy Tauntimp': '健康脆皮咚咚',
    'Healthy Whipimp': '健康脆皮鞭者',
    'Healthy Venimp': '健康脆皮爱神',
    'Healthy Magnimp': '健康脆皮磁王',
    'Healthy Skeletimp': '健康脆皮骷髅',
    'Healthy Megaskeletimp': '健康脆皮超级骷髅',
    'Snowy Liquimp': '积雪液化者',
    'Snowy Presimpt': '积雪脆皮小礼',
    'Snowy Turkimp': '积雪脆皮火鸡',
    'Snowy Randimp': '积雪脆皮百变怪',
    'Snowy Squimp': '积雪脆皮乌贼',
    'Snowy Elephimp': '积雪脆皮象',
    'Snowy Turtlimp': '积雪脆皮龟',
    'Snowy Chimp': '积雪脆皮黑猩猩',
    'Snowy Penguimp': '积雪脆皮企鹅',
    'Snowy Snimp': '积雪脆皮鹬',
    'Snowy Gorillimp': '积雪脆皮大猩猩',
    'Snowy Blimp': '积雪脆皮飞艇',
    'Snowy Dragimp': '积雪脆皮龙',
    'Snowy Improbability': '积雪乌有者',
    'Snowy Omnipotrimp': '积雪全能者',
    'Snowy Mutimp': '积雪脆皮变异者',
    'Snowy Hulking Mutimp': '积雪脆皮大型变异者',
    'Snowy Feyimp': '积雪脆皮小妖',
    'Snowy Tauntimp': '积雪脆皮咚咚',
    'Snowy Whipimp': '积雪脆皮鞭者',
    'Snowy Venimp': '积雪脆皮爱神',
    'Snowy Magnimp': '积雪脆皮磁王',
    'Snowy Skeletimp': '积雪脆皮骷髅',
    'Snowy Megaskeletimp': '积雪脆皮超级骷髅',
    'Living Liquimp': '非亡灵液化者',
    'Living Presimpt': '非亡灵脆皮小礼',
    'Living Turkimp': '非亡灵脆皮火鸡',
    'Living Randimp': '非亡灵脆皮百变怪',
    'Living Squimp': '非亡灵脆皮乌贼',
    'Living Elephimp': '非亡灵脆皮象',
    'Living Turtlimp': '非亡灵脆皮龟',
    'Living Chimp': '非亡灵脆皮黑猩猩',
    'Living Penguimp': '非亡灵脆皮企鹅',
    'Living Snimp': '非亡灵脆皮鹬',
    'Living Gorillimp': '非亡灵脆皮大猩猩',
    'Living Blimp': '非亡灵脆皮飞艇',
    'Living Dragimp': '非亡灵脆皮龙',
    'Living Improbability': '非亡灵乌有者',
    'Living Omnipotrimp': '非亡灵全能者',
    'Living Mutimp': '非亡灵脆皮变异者',
    'Living Hulking Mutimp': '非亡灵脆皮大型变异者',
    'Living Feyimp': '非亡灵脆皮小妖',
    'Living Tauntimp': '非亡灵脆皮咚咚',
    'Living Whipimp': '非亡灵脆皮鞭者',
    'Living Venimp': '非亡灵脆皮爱神',
    'Living Magnimp': '非亡灵脆皮磁王',
    'Living Skeletimp': '非亡灵脆皮骷髅',
    'Living Megaskeletimp': '非亡灵脆皮超级骷髅',
    'Toxic Liquimp': '毒性液化者',
    'Toxic Presimpt': '毒性脆皮小礼',
    'Toxic Turkimp': '毒性脆皮火鸡',
    'Toxic Randimp': '毒性脆皮百变怪',
    'Toxic Squimp': '毒性脆皮乌贼',
    'Toxic Elephimp': '毒性脆皮象',
    'Toxic Turtlimp': '毒性脆皮龟',
    'Toxic Chimp': '毒性脆皮黑猩猩',
    'Toxic Penguimp': '毒性脆皮企鹅',
    'Toxic Snimp': '毒性脆皮鹬',
    'Toxic Gorillimp': '毒性脆皮大猩猩',
    'Toxic Blimp': '毒性脆皮飞艇',
    'Toxic Dragimp': '毒性脆皮龙',
    'Toxic Improbability': '毒性乌有者',
    'Toxic Omnipotrimp': '毒性全能者',
    'Toxic Mutimp': '毒性脆皮变异者',
    'Toxic Hulking Mutimp': '毒性脆皮大型变异者',
    'Toxic Feyimp': '毒性脆皮小妖',
    'Toxic Tauntimp': '毒性脆皮咚咚',
    'Toxic Whipimp': '毒性脆皮鞭者',
    'Toxic Venimp': '毒性脆皮爱神',
    'Toxic Magnimp': '毒性脆皮磁王',
    'Toxic Skeletimp': '毒性脆皮骷髅',
    'Toxic Megaskeletimp': '毒性脆皮超级骷髅',
    'Gusty Liquimp': '阵风液化者',
    'Gusty Presimpt': '阵风脆皮小礼',
    'Gusty Turkimp': '阵风脆皮火鸡',
    'Gusty Randimp': '阵风脆皮百变怪',
    'Gusty Squimp': '阵风脆皮乌贼',
    'Gusty Elephimp': '阵风脆皮象',
    'Gusty Turtlimp': '阵风脆皮龟',
    'Gusty Chimp': '阵风脆皮黑猩猩',
    'Gusty Penguimp': '阵风脆皮企鹅',
    'Gusty Snimp': '阵风脆皮鹬',
    'Gusty Gorillimp': '阵风脆皮大猩猩',
    'Gusty Blimp': '阵风脆皮飞艇',
    'Gusty Dragimp': '阵风脆皮龙',
    'Gusty Improbability': '阵风乌有者',
    'Gusty Omnipotrimp': '阵风全能者',
    'Gusty Mutimp': '阵风脆皮变异者',
    'Gusty Hulking Mutimp': '阵风脆皮大型变异者',
    'Gusty Feyimp': '阵风脆皮小妖',
    'Gusty Tauntimp': '阵风脆皮咚咚',
    'Gusty Whipimp': '阵风脆皮鞭者',
    'Gusty Venimp': '阵风脆皮爱神',
    'Gusty Magnimp': '阵风脆皮磁王',
    'Gusty Skeletimp': '阵风脆皮骷髅',
    'Gusty Megaskeletimp': '阵风脆皮超级骷髅',
    'Frozen Liquimp': '冻结液化者',
    'Frozen Presimpt': '冻结脆皮小礼',
    'Frozen Turkimp': '冻结脆皮火鸡',
    'Frozen Randimp': '冻结脆皮百变怪',
    'Frozen Squimp': '冻结脆皮乌贼',
    'Frozen Elephimp': '冻结脆皮象',
    'Frozen Turtlimp': '冻结脆皮龟',
    'Frozen Chimp': '冻结脆皮黑猩猩',
    'Frozen Penguimp': '冻结脆皮企鹅',
    'Frozen Snimp': '冻结脆皮鹬',
    'Frozen Gorillimp': '冻结脆皮大猩猩',
    'Frozen Blimp': '冻结脆皮飞艇',
    'Frozen Dragimp': '冻结脆皮龙',
    'Frozen Improbability': '冻结乌有者',
    'Frozen Omnipotrimp': '冻结全能者',
    'Frozen Mutimp': '冻结脆皮变异者',
    'Frozen Hulking Mutimp': '冻结脆皮大型变异者',
    'Frozen Feyimp': '冻结脆皮小妖',
    'Frozen Tauntimp': '冻结脆皮咚咚',
    'Frozen Whipimp': '冻结脆皮鞭者',
    'Frozen Venimp': '冻结脆皮爱神',
    'Frozen Magnimp': '冻结脆皮磁王',
    'Frozen Skeletimp': '冻结脆皮骷髅',
    'Frozen Megaskeletimp': '冻结脆皮超级骷髅',
    '': '',
    '': '',
    //敌人名称相关结束
    //装备相关
    'Shield': '盾牌',
    'Dagger': '匕首',
    'Boots': '靴子',
    'Mace': '狼牙棒',
    'Helmet': '头盔',
    'Polearm': '战戟',
    'Pants': '裤子',
    'Battleaxe': '战斧',
    'Shoulderguards': '护肩',
    'Greatsword': '巨剑',
    'Breastplate': '胸铠',
    'Arbalest': '强弩',
    'Gambeson': '棉甲',
    //装备相关结束
    //游戏统计相关
    'Dead Trimps': '脆皮阵亡数',
    'Battles Won': '战斗胜利数',
    'Battles Lost': '战斗失败数',
    'Gems Collected': '宝石收集数',
    'Maps Cleared': '地图通过数',
    'Zones Cleared': '区域通过数',
    'Trimps Fired': '脆皮解雇数',
    'Wormholed Helium': '虫洞上消耗的氦',
    'Golden Upgrades': '黄金升级数',
    'He/Hour this Run': '自上次传送后氦/小时',
    'Rn/Hour this Run': '自上次传送后氡/小时',
    'Best He/Hour this Run': '自上次传送后最高的氦/小时',
    'Best Rn/Hour this Run': '自上次传送后最高的氡/小时',
    'Total Helium Earned': '氦总获取量',
    'Best He/Hour all Runs': '所有游戏中最高的氦/小时',
    'Daily Challenge Helium': '日常挑战获取的氦',
    'Total Radon Earned': '氡总获取量',
    'Best Rn/Hour all Runs': '所有游戏中最高的氡/小时',
    'Daily Challenge Radon': '日常挑战获取的氡',
    'Zones Liquified': '区域液化数',
    'Highest Void Map Clear': '虚空地图最高通过区域',
    'Highest U2 Void Map': '宇宙2虚空地图最高通过区域',
    'Total Void Maps Cleared': '虚空地图通过数',
    'Heirlooms Found': '传家宝收集数',
    'Cores Found': '核心收集数',
    'World Cells Overkilled': '世界格子超杀总数',
    'Trimps from Generator': '维度发生器生产的脆皮数',
    'Burned Nurseries': '岩浆烧掉的托儿所数',
    'Tokens This Run': '自上次传送后获得的符记',
    'Most Tokens': '符记最高数量',
    'Amalgamators Befriended': '合并者数量',
    'Fluffy Exp This Run': '自上次传送后绒绒经验',
    'Best Fluffy Exp': '最高绒绒经验',
    'Scruffy Exp This Run': '自上次传送后污污经验',
    'Best U2 Scruffy Exp': '最高污污经验',
    'Fluffy Exp/Hr this Run': '自上次传送后绒绒经验/小时',
    'Scruffy Exp/Hr this Run': '自上次传送后污污经验/小时',
    'Best Fluffy Exp/Hr this Run': '自上次传送后最高绒绒经验/小时',
    'Best Scruffy Exp/Hr this Run': '自上次传送后最高污污经验/小时',
    'Best Fluffy Exp/Hr': '最高绒绒经验/小时',
    'Best Scruffy Exp/Hr': '最高污污经验/小时',
    'Total Portals Used': '传送门使用次数',
    'Total Radon Portals': '宇宙2传送门使用次数',
    'Planets Broken': '行星破碎数',
    'Highest Zone': '最高区域',
    'Highest Zone U': '最高区域于宇宙',
    'Trap/Tower Kills': '陷阱/塔击杀数',
    //游戏统计相关结束
    //游戏成就相关
    'Zone Progress': '区域进度',
    'Complete Zone': '通过区域',
    'Row Finished! (Highest is': '此类成就全部完成！(最高为',
    'This is Easy': '易如反掌',
    'Blimp Slayer': '脆皮飞艇杀手',
    'Groundbreaker': '开拓者',
    'The Beginning': '自此而始',
    'Determined': '决心已定',
    'Professor': '教授',
    'Trimp Aficionado': '脆皮酷爱者',
    'Slayer of Planets': '行星杀手',
    'Electric': '电气',
    'Stronk': '强大',
    'Endurance': '耐久力',
    'Unwavering': '绝不动摇',
    'Resolved': '坚定不移',
    'Steadfast': '矢志不渝',
    'Grit': '坚毅果敢',
    'Perseverance': '不屈不挠',
    'Persistence': '锲而不舍',
    'The Instigator': '煽动者',
    'The Destroyer': '破坏者',
    'The Eradicator': '歼灭者',
    'The Exterminator': '毁灭者',
    'Heat Maker': '制热者',
    'Heat Hater': '绝热者',
    'Heat Breaker': '断热者',
    'Heat Slayer': '除热者',
    'Heat Expert': '热专家',
    'Heat Bender': '饮热者',
    'Volcanic': '火山',
    'Magma Master': '岩浆大师',
    'Acre of Nature': '自然之地',
    'Aspirer': '野望者',
    'Insane': '癫狂',
    'Spire Master': '尖塔大师',
    'Zone Progress: U': '区域进度：宇宙',
    'This is Harder': '难度上升',
    'Second Coming': '基督复临',
    'Blimp Destroyer': '脆皮飞艇毁灭者',
    'Improbable Again': '乌有再临',
    'Unstoppable': '不可阻挡',
    'Progresser': '继续推进',
    'Fifty Fifty': '五五开',
    'Actually Unbroken': '的确坚不可摧',
    'Lucky': '幸运',
    'Apt': '恰如其分',
    'The Unshocked': '不动如山',
    'Universalist': '博识大贤者',
    'Trimp Damage': '脆皮伤害值',
    'Lead Trimps': '领导脆皮',
    'Silver Trimps': '脆银脆皮',
    'Golden Trimps': '软金脆皮',
    'Copper Trimps': '黄铜脆皮',
    'Platinum Trimps': '白金脆皮',
    'Iron Trimps': '镔铁脆皮',
    'Steel Trimps': '精钢脆皮',
    'Obsidian Trimps': '黑曜石脆皮',
    'Cobalt Trimps': '钴制脆皮',
    'Topaz Trimps': '黄玉脆皮',
    'Diamond Trimps': '钻石脆皮',
    'Transcendental Trimps': '超越脆皮',
    'Trimps Owned': '脆皮总数',
    'Too Many Trimps': '脆皮过量',
    'Overcrowding': '人满为患',
    'This Is Trimp': '这是脆皮',
    'It Takes a Tribe': '部落之力',
    'It Takes a Town': '一镇之力',
    'It Takes a City': '一城之力',
    'A Milli Trimpi': '百万脆皮',
    'Trimpsponential Growth': '脆皮指数增长',
    'MMMEGATRIMPS': '百百万脆皮',
    'It Takes a Nation': '举国之力',
    'It Takes a Planet': '行星之力',
    'It Takes a Universe': '宇宙之力',
    'Real Estate': '不动产',
    'Build your first  Hut': '首次建造小屋',
    'Build your first  House': '首次建造宅院',
    'Build your first  Mansion': '首次建造豪宅',
    'Build your first  Hotel': '首次建造宾馆',
    'Build your first  Resort': '首次建造度假村',
    'Build your first  Gateway': '首次建造维度裂隙',
    'Build your first  Wormhole': '首次建造虫洞',
    'Build your first  Collector': '首次建造汲能设施',
    'Build your first  Warpstation': '首次建造跃迁核心',
    'Use the Dimensional Generator': '使用过维度发生器',
    'Tiny Homes': '小小的家',
    'Residential Development': '住宅开发',
    'Taste for Luxury': '品味奢华',
    'Fancy': '梦想成真',
    'The Skyline': '天际线',
    'Dimensional Drift': '维度漂移',
    'Too Cool For Helium': '氦太酷了',
    'Space From Stars': '星星空间',
    'To Infinity and Beyond': '飞向宇宙，浩瀚无垠',
    'Mass Generation': '质量发生',
    'Total Portals': '传送门总次数',
    'A Trimp Through Time': '穿越时空的一个脆皮',
    'When The Wild Things Are': '狂野时空',
    'A Time Like No Other': '独一无二的时空',
    'Venti Timeachino': '来一大杯时间奇诺',
    'Time of Your Life': '流金岁月',
    'Centennial Trimper': '百重脆皮',
    'Amnesia': '健忘症',
    'Dedicated Traveller': '专注的旅行者',
    'Total Zone Clears': '区域通过总数',
    'Pathfinder': '探路者',
    'Bushwhacker': '荒野旅者',
    'Pioneer': '拓荒者',
    'Seeker': '探求者',
    'Adventurer': '冒险者',
    'Lucky Resolve': '幸运数的信念',
    'GigaClearer': '千区踏破',
    'Globetrotter': '环球旅者',
    'Vanquisher': '审判者',
    'Conquistador': '征服者',
    'Total Map Clears': '地图通过总数',
    'Map Maker': '地图绘制者',
    'Map Runner': '地图运行者',
    'Map Destroyer': '地图毁灭者',
    'Map Annihilator': '地图歼灭者',
    'Map Slaughterer': '地图屠杀者',
    'Map Commander': '地图指挥官',
    'Maptain': '地图队长',
    'Cartographer': '制图宗师',
    'Helium Collection': '氦收集量',
    'Cool': '凉快',
    'Crisp': '凉爽',
    'Brisk': '清凉',
    'Chilly': '冰冷',
    'Frosty': '寒霜',
    'Frigid': '寒冷',
    'Frozen': '冻结',
    'Gelid': '冷冽',
    'Glacial': '冰川',
    'Freaking Cold': '酷寒',
    'Arctic': '极地',
    'Absolute Zero': '绝对零度',
    'Radon Collection': '氡收集量',
    'Radon Runner': '氡之运行者',
    'The Irradiated': '辐照',
    'Radonlicious': '优质氡',
    'Radon Quixote': '氡吉诃德',
    'Radon Racer': '氡之车手',
    'Raging Radon': '氡之暴怒',
    'Radon Wrangler': '氡之牧者',
    'Helium Per Hour': '氦每小时',
    'Row Finished! (Currently at': '此类成就全部完成！(目前为',
    'Coldlector': '汲冷者',
    'Centelium': '百氦长',
    'Frosty Tanker': '寒霜气罐',
    'Blimp Snatcher': '脆皮飞艇掠夺者',
    'Squeaky Dasher': '嘎吱冲锋',
    'Quick N Cool': '快速冷却',
    'Hour Bender': '小时狂欢',
    'Acquired Frost': '后天霜冻',
    'Vacuum': '真空',
    'Levitator': '飘浮者',
    'Soarer': '滑翔者',
    'Cool Runnings': '冰上轻驰',
    'Heirloom Collection': '传家宝收集量',
    'Finder': '发现者',
    'Gatherer': '采集者',
    'Accumulator': '积聚者',
    'Fancier': '爱好者',
    'Aficionado': '酷爱者',
    'Devotee': '狂热信徒',
    'Connoisseur': '鉴定大师',
    'Expert': '专家',
    'Curator': '主管',
    'Gem Collection': '宝石收集量',
    "What's This For?": '这是干什么用的？',
    'Collector of Shinies': '亮闪闪收藏家',
    'Dragimp Lover': '脆皮龙爱好者',
    'Expert of Shinies': '亮闪闪专家',
    'Jeweller': '珠宝商',
    'Gemaster': '宝石大师',
    'Daily Bonus': '日常奖励',
    'Daytermined': '日之决意',
    'Daydicated': '日之献身',
    'Daystiny': '日之命运',
    'Daylighted': '日之愉悦',
    'Daystroyer': '日之破坏',
    'Daylusional': '日之妄想',
    'Dayrailed': '日之脱轨',
    'Daypocalyptic': '日之灾变',
    'Humane Run': '仁慈的战斗',
    'Progress: You need to portal to become eligible': '进度：您需要使用传送门后才可以开始尝试成就',
    'Progress: You lost more than once on Z': '进度：您已经战败超过一次了，发生在区域',
    'Progress: You lost too many fights!': '进度：您输了太多次战斗了！',
    'Progress: You\'ve lost once this Zone, be careful!': '进度：此区域您已经战败了一次，请小心了！',
    'Progress: Still Earnable!': '进度：仍然可获得！',
    'Row Finished! (You need to portal to become eligible': '此类成就全部完成！(您需要使用传送门后才可以开始尝试成就',
    'Row Finished! (You lost more than once on Z': '此类成就全部完成！(您已经战败超过一次了，发生在区域',
    'Row Finished! (You lost too many fights!': '此类成就全部完成！(您输了太多次战斗了！',
    'Row Finished! (You\'ve lost once this Zone, be careful!': '此类成就全部完成！(此区域您已经战败了一次，请小心了！',
    'Row Finished! (Still Earnable!': '此类成就全部完成！(仍然可获得！',
    'Sitter': '护工',
    'Watchdog': '看门狗',
    'Nanny': '保姆',
    'Caretaker': '监护人',
    'Supervisor': '主管人',
    'Advocate': '拥护者',
    'Guardian': '守护者',
    'Coddler': '纵容者',
    'Savior': '拯救者',
    'Defender': '防御者', //包括两个成就名称
    'Trimp Lover': '脆皮爱人',
    'Righteous': '公平正义',
    'Mapless Drifter': '无图漂泊者',
    'Progress: You must be in Universe 2!': '进度：您需要在宇宙2中才可以尝试成就！',
    'Progress: You ran a Map on Z': '进度：您运行了地图，发生在区域',
    'Map Misser': '地图思念者',
    'Map Lacker': '地图缺乏者',
    'Mapophobia': '地图恐惧症',
    'GPS': '导航系统',
    'Undisoriented': '方位确定',
    'Need No Map': '无需地图',
    'The Efficient': '高效',
    'Bulldozer': '推土机',
    'Worldly': '世界之子',
    'Shielded': '护盾相关',
    'Progress: Already earned!': '进度：已经获得！',
    'Progress: Still Earnable! Lowest is': '进度：仍然可获得！最低为 ',
    'Crumb of Comfort': '聊可解忧',
    'Common Comfort': '普通慰藉',
    'Controlled Comfort': '可控慰藉',
    'Certain Comfort': '特定慰藉',
    'Copious Comfort': '充裕慰藉',
    'Critical Comfort': '关键慰藉',
    'Cosmic Comfort': '宇宙慰藉',
    'Speed: The Block': '最速: 障碍区',
    'Progress: Best run is': '进度：最快为',
    'Progress: Too slow! Best run is': '进度：因太慢失败了！最快为',
    'Row Finished! (Best run is': '此类成就全部完成！(最快为',
    'Block Hobbyist': '障碍业余爱好者',
    'Block Apprentice': '障碍学徒',
    'Block Professional': '障碍专家',
    'Block Rockstar': '障碍摇滚巨星',
    'Speed: The Wall': '最速: 高墙',
    'Wall Novice': '高墙萌新',
    'Wall Student': '高墙学生',
    'Wall Contender': '高墙争夺者',
    'Wall Scaler': '高墙攀登者',
    'Speed: Anger': '最速: 愤怒维度',
    'Angry Jogger': '愤怒慢跑者',
    'Angry Runner': '愤怒运行者',
    'Angry Sprinter': '愤怒冲刺者',
    'Angry Racer': '愤怒车手',
    'Angry Teleporter': '愤怒传送者',
    'Speed: Doom': '最速: 末日神殿',
    'Walk to Doom': '末日漫步',
    'Trot to Doom': '末日疾走',
    'Canter to Doom': '末日小跑',
    'Gallop to Doom': '末日疾驰',
    'Speed: The Prison': '最速: 监狱',
    'Prison Odyssey': '监狱跋涉',
    'Prison Expedition': '监狱远征',
    'Prison Adventure': '监狱冒险',
    'Prison Trek': '监狱远行',
    'Prison Tour': '监狱之旅',
    'Prison Road Trip': '监狱路途',
    'Prison Hike': '监狱远足',
    'Prison Jog': '监狱慢跑',
    'Prison Sprint': '监狱冲刺',
    'Speed: Bionic': '最速: 仿生仙境',
    'Lover of Bots': '机器人爱人',
    'Friend of Bots': '机器人之友',
    'Acquaintance of Bots': '机器人熟人',
    'Bot Disliker': '机器人厌恶者',
    'Bot Hater': '机器人憎恨者',
    'Bot Slayer': '机器人杀手',
    'Speed: Star': '最速: 爆炸之星',
    'Cosmic Curiosity': '宇宙求知欲',
    'Star Struck': '星际碰撞',
    'Space Speeder': '太空变速器',
    'Intense Inertia': '强大惯性',
    'Stellar Striker': '恒星大冲撞',
    'Insane Imploder': '疯狂爆炸',
    'Born Imploded': '生而爆炸',
    'Speed: Spire': '最速: 尖塔',
    'Spire Trialer': '尖塔试炼者',
    'Spire Rider': '尖塔骑手',
    'Spire Strider': '尖塔漫游者',
    'Spire Glider': '尖塔滑翔者',
    'Spire Flier': '尖塔飞行家',
    'Inspired': '尖塔启迪',
    'Spire Spirer': '尖塔螺旋者',
    'Speed: Spire II': '最速: 尖塔 II',
    'Toxic Treader': '毒之踏破者',
    'Toxic Trotter': '毒之疾走者',
    'Toxic Traveller': '毒之旅行者',
    'Toxic Tempo': '毒之节奏',
    'Toxic Teleporter': '毒之传送者',
    'Speed: Spire III': '最速: 尖塔 III',
    'Chillin': '冰冷刺骨',
    'Arctic Accelerator': '极地加速器',
    'Rimy Runner': '霜冻运行者',
    'Subzero Sprinter': '零下冲刺者',
    'Frigid and Furious': '寒冷之怒',
    'Speed: Spire IV': '最速: 尖塔 IV',
    'Windy Walker': '风之行者',
    'Gusty Gait': '阵风步法',
    'Breeze Breaker': '微风破坏者',
    'Zippy Zephyr': '迅捷微风',
    'Temporal Tempest': '暂时风暴',
    'Stratus Screamer': '卷云尖啸',
    'Tearin\' Tornado': '撕裂狂风',
    'Speed: Spire V': '最速: 尖塔 V',
    'actiVe': 'V激活',
    'resolVed': 'V决心',
    'traVeler': 'V旅者',
    'driVen': 'V驱动',
    'triVialized': 'V轻视',
    'U2 Speed: Big Wall': '宇宙2最速：巨墙',
    'Big Wall Crawler': '巨墙爬行者',
    'Big Wall Scholar': '巨墙学者',
    'Big Wall Mauler': '巨墙槌手',
    'Big Wall Baller': '巨墙土豪',
    'U2 Speed: Palace': '宇宙2最速：棱镜宫殿',
    'Peasant': '佃农',
    'Jester': '弄臣',
    'Advisor': '顾问',
    'Ruler': '支配者',
    'U2 Speed: Melting': '宇宙2最速：熔点',
    'Thawed': '解冻',
    'Tempered': '升温',
    'Melty': '熔化',
    'Molten': '熔融',
    'Feats': '壮举',
    'Forgot Something': '忘了件事',
    'Complete the Dimension of Anger before buying Bounty': '在购买赏金升级前通过愤怒维度地图',
    'Underachiever': '后进者',
    'Reach Z30 with no respec and 60 or less He spent': '在氦花费不超过60，且未在传送后进行特权洗点的前提下到达区域30',
    'Hoarder': '囤积者',
    'Needs Block': '需要格档',
    'Die 50 times to a single Voidsnimp': '在同一只脆皮虚空鹬上战败50次',
    'Underbalanced': '平衡不足',
    'Beat Balance, never having more than 100 stacks': '在平衡从未超过100层的前提下，完成平衡挑战',
    'Peacekeeper': '和平使者',
    'Reach Zone 10 with 5 or fewer dead Trimps': '在脆皮死亡数未超过5的前提下，到达区域10',
    'Elite Feat': '精英壮举',
    'Reach exactly 1337 He/Hr': '氦每小时正好达到1337',
    'Grounded': '踏实',
    'Attack 20 times without dying in Electricity': '在电流挑战中，连续攻击20次不死亡',
    'Maptastic': '有图有资源',
    'Create a perfect Map': '制作一张完美的地图',
    'Now What': '就这',
    'Use up all 7 Daily Challenges': '完成一周的7次日常挑战',
    'Swag': '有型',
    'Equip a magnificent or better Staff and Shield': '同时装备华丽及以上级别的权杖和盾牌',
    'Workplace Safety': '安全生产',
    'Reach Z60 with 1000 or fewer dead Trimps': '在脆皮死亡数未超过1000的前提下，到达区域60',
    'No Time for That': '没空理它',
    'Reach Z120 without using manual research': '在不使用手动研究的前提下，到达区域120',
    'Tent City': '帐篷城',
    'Reach Z75 without buying any housing': '在不建造任何住房的前提下，到达区域75',
    'Consolation Prize': '安慰奖',
    'Find an uncommon heirloom at Z146 or higher': '在区域146及以上获得一个罕见传家宝',
    'Holey': '多洞',
    'Shaggy': '长毛',
    'Reach Z60 with rank III or lower equipment': '在装备未超过III级的前提下，到达区域60',
    'One-Hit Wonder': '一鸣惊人',
    'Kill an Improbability in one hit': '一击杀死一个乌有者',
    'Survivor': '生还者',
    'Beat a Lv 60+ Destructive Void Map with no deaths': '在没有战败过的前提下，通过一张60级以上的破坏性虚空地图',
    'Thick Skinned': '皮糙肉厚',
    'Beat Crushed without being crit past Z': '在到达特定区域后未受到过敌人暴击的前提下，完成粉碎挑战。该区域为区域',
    'Great Host': '热情好客的主人',
    'Kill an enemy with 100 stacks of Nom': '杀死一个有100层美味的敌人',
    'Unbroken': '坚不可摧',
    'Break the Planet with 5 or fewer lost battles': '在战败不超过5次的前提下破碎行星',
    'Unemployment': '失业',
    'Reach Z60 without hiring a single Trimp': '在不雇佣脆皮工作的前提下，到达区域60',
    'Very Sneaky': '打枪的不要',
    'Complete a Zone above 99 without falling below 150 stacks on Life': '生命挑战中，在区域99以上的一个区域中从未低于150层亡灵化',
    'Extra Crispy': '嘎蹦脆',
    'Spend at least 10 minutes breeding an army with Geneticists': '利用基因学家，花费至少10分钟繁殖一队士兵',
    'Trimp is Poison': '脆皮有毒',
    'Beat Toxicity, never having more than 400 stacks': '在毒性从未超过400层的前提下，完成毒性挑战',
    'Realtor': '房产中介',
    'Own 100 of all housing buildings': '所有类型住房的数量都至少为100',
    'Gotta Go Fast': '抓紧时间',
    'Overkill every possible world cell before Z': '在到达特定区域之前，超杀世界上的每个格子。该区域为区域',
    'Grindless': '佛系玩家',
    'Complete Watch without entering maps or buying Nurseries': '在未进入过地图，也没有建造托儿所的前提下，完成守望挑战',
    'Leadership': '领导才能',
    'Complete Lead with 100 or fewer lost battles': '在战败不超过100次的前提下，完成领导挑战',
    'Build your 10th Spire Floor': '建造第10层尖塔',
    'Stoned': '上头了',
    'Swagmatic': '岩浆套装',
    'Equip a Magmatic Staff and Shield': '同时装备岩浆级别的权杖和盾牌',
    'Brr': '冷冷冷冷冷',
    'Bring a world enemy\'s attack below': '让世界上一名敌人的攻击力低于',
    'Unsatisfied Customer': '不满的顾客',
    'Complete Lead with 1 or fewer Gigastations': '在千兆核心不超过1个的前提下，完成领导挑战',
    'Organic Trimps': '有机脆皮',
    'Complete Corrupted without Geneticists': '在不使用基因学家的前提下，完成腐化挑战',
    'Fhtagn': '克总发糖',
    'Complete a Void Map at Z215 on Domination': '统治挑战中，在区域215通过一张虚空地图',
    'Invincible': '天下无敌',
    'Complete The Spire with 0 deaths': '在无战败的前提下通过尖塔',
    'Mighty': '非凡',
    'Overkill an Omnipotrimp': '超杀一名全能者',
    'Mother Lode': '肥羊',
    'Defeat a Healthy enemy with 200 stacks of wind': '击杀一名有200层风的健康敌人',
    'Infected': '感染者',
    'Build up a Poison debuff that\'s 1000x higher than your attack': '使您毒的效果达到您攻击力的1000倍',
    'Challenged': '挑战达人',
    'Earn a Challenge': '使挑战',
    'bonus of': '的加成达到',
    'Bionic Sniper': '仿生狙击手',
    'Complete a Bionic Wonderland map 45 levels higher than your Zone number': '通过一张地图等级高于您当前区域45级的仿生仙境地图',
    'Nerfed': '弱化',
    'Obliterate': '抹消',
    'Defeat an enemy on Obliterated': '抹杀挑战中，击杀一个敌人',
    'M\'Algamator': '初并者',
    'Find an Amalgamator on Z': '在初始区域就获得一个合并者，也就是在区域',
    'Critical Luck': '暴击豪运',
    'Get 10 Red Crits in a row': '连着10次红色暴击',
    'AntiScience': '科学无用',
    'Beat Z75 on the Scientist V challenge': '科学家 V挑战中，通过区域75',
    'HeMergency': '氦急情况',
    'Gain at least 01189998819991197253 He from one Bone Portal': '一次骨头传送门获得01189998819991197253氦(译者注：即科学计数法下的1.19e18)',
    'Eradicate': '杀绝',
    'Kill an Enemy on Eradicated': '灭绝挑战中，击杀一个敌人',
    'Invisible': '匿迹隐形',
    'Complete Spire V with no deaths': '在塔内没有战败过的前提下，通过尖塔 V',
    'Power Tower': '力量之塔',
    'Build your 20th Spire Floor': '建造第20层尖塔',
    'Bionic Nuker': '仿生暴发',
    'Complete a Bionic Wonderland map 200 levels higher than your Zone number': '通过一张地图等级高于您当前区域200级的仿生仙境地图',
    'Hypercoordinated': '超级协同',
    'Complete Spire II on the Coordinate challenge': '协同挑战中，通过尖塔 II',
    'Nerfeder': '超级弱化',
    'Imploderated': '抹杀爆星',
    'Beat Imploding Star on Obliterated': '抹杀挑战中，通过爆炸之星地图',
    'Wildfire': '野火',
    'Close 750 Nurseries at the same time': '一次性关闭750个托儿所',
    'Unessenceted': '究极精华',
    'Earn Dark Essence with no respec and 0 He spent': '在氦花费为0，且未在传送后进行特权洗点的前提下获得黑暗精华',
    'Melted': '岩杀',
    'Reach Magma on Obliterated': '抹杀挑战中，达到岩浆的区域',
    'Screwed': '万事皆休',
    'Break the Planet on Eradicated': '灭绝挑战中，破碎行星',
    'Eliter Feat': '超精英壮举',
    'Reach exactly 1337 Rn/Hr': '氡每小时正好达到1337',
    'Don\'t Need Luck': '无需运气',
    'One-shot a Dimension of Rage enemy on Unlucky while Unlucky': '不幸挑战中，当最低伤害数值第一位是奇数时，秒杀暴怒维度中的一个敌人',
    'Perfectly Balanced': '完全平衡',
    'Complete Downsize with an equal amount of Huts, Houses, Mansions, Hotels and Resorts': '在小屋、宅院、豪宅、宾馆和度假村数量完全相同的前提下，完成精简挑战',
    'Resourceyphobe': '资源恐惧症',
    'Complete Transmute without hiring a single Trimp': '在不雇佣脆皮工作的前提下，完成变形挑战',
    'Upsized': '增员',
    'Complete Unbalance with 500 stacks of Unbalance': '在拥有500层不平衡的前提下，完成不平衡挑战',
    'Unpoppable': '牢不可破',
    'Complete Bublé without using Prismal or respeccing Perks': '在未加点棱镜化，也未在传送后进行特权洗点的前提下，完成布累挑战',
    'Pwnd': '大获全胜',
    'Complete Duel without ever falling below 20 points': '在从未低于20决斗点数的前提下，完成决斗挑战',
    'Solid': '固体',
    'Complete Melt without ever having more than 150 stacks': '在从未高于150层熔化的前提下，完成熔化挑战',
    'Coastapalooza': '捕手道滑行达人',
    'Complete Trappapalooza without Trapping on or above Z': '在到达特定区域后未使用过陷阱的前提下，完成捕手道达人挑战。该区域为区域',
    'Witherproof': '防止凋零',
    'Close Call': '有惊无险',
    'Complete Revenge with exactly 19 stacks': '在正好拥有19层复仇的前提下，完成复仇挑战',
    'Level Up': '等级提升',
    'Complete 80/80 quests on Quest': '在任务挑战中，完成80次任务',
    'Unassisted': '一己之力',
    'Complete Archaeology without ever having more than 0 of one Relic': '在遗物数量没有超过0的前提下，完成考古学挑战',
    //游戏成就相关结束
    //游戏设置相关
    'Not Saving': '不自动保存',
    'AutoSaving': '自动保存',
    'Automatically save the game once per minute': '每分钟自动保存一次游戏',
    'Not Saving Online': '不在线保存',
    'Saving with PlayFab': '使用PlayFab在线保存',
    'When the game saves, every 30 minutes also back up a copy online with PlayFab. While using this setting, you will be asked if you want to download your online save if it is ever ahead of the version on your computer. You can also manually import your save from PlayFab through the Import menu.': '当游戏保存时，每半小时还会在线备份到PlayFab。如果在线备份存档较为新一些，那么在使用此设置时，系统会询问您是否要下载在线存档替换。您也可以通过“导入”菜单手动从PlayFab导入存档。',
    'Scientific Notation': '科学记数法',
    'Standard Formatting': '标准格式',
    'Engineering Notation': '工程记数法',
    'Alphabetic Notation': '字母计数法',
    'Hybrid Notation': '混合计数法',
    'Logarithmic Notation': '对数计数法',
    'Swap between Standard Formatting (12.7M, 540B), Engineering Notation (12.7e6, 540e9), Scientific Notation (1.27e7, 5.40e11), Alphabetic Notation (12.7b, 540c), Hybrid Notation (Standard up to e96, then Engineering. Mimics Standard pre 4.6), and Logarithmic Notation (10^7.10, 10^8.73). Hold Ctrl while clicking Logarithmic Notation to change the base.': '在标准格式(12.7M, 540B)，工程记数法(12.7e6, 540e9)，字母计数法(12.7b, 540c)，混合计数法(直到e96之前使用标准格式，之后使用工程记数法)，对数计数法(10^7.10, 10^8.73)，以及科学记数法(1.27e7, 5.40e11)之间切换。当使用对数计数法时，按下Ctrl键再点击可以切换底数。',
    'Shift for Tooltips': '按Shift键显示提示框',
    'Showing Tooltips': '显示提示框',
    'will ensure that all tooltips are shown when you mouse over them.': '可以在鼠标划过时显示所有提示框',
    'will hide most tooltips by default, unless you are holding your shift key. Keep this setting in mind when unlocking new things to do, as much of the game is explained in tooltips!': '将默认隐藏绝大部分提示框，除非按住Shift键。解锁新内容时最好注意一下这边的设置，因为大部分内容都在提示框里进行说明了！',
    'Top Right Tips': '提示框顶部靠右',
    'Center Bottom Tips': '提示框底部居中',
    'Center Top Tips': '提示框顶部居中',
    'Toggle the position of your tooltips between top right, centered above or centered below the mouse.': '切换提示框处于您的鼠标顶部靠右、底部居中还是顶部居中。',
    'No Queue Animation': '关闭队列动画',
    'Queue Animation': '开启队列动画',
    'Toggle on or off the building queue blue color animation.': '切换队列蓝色动画的开关。',
    'No Outline': '无进度条轮廓线',
    'Outline': '有进度条轮廓线',
    'Toggle on or off a black bar at the end of all progress bars. Can help discern where the progress bar ends.': '切换进度条末端是否有一条轮廓线。可以帮助辨识进度条的末端。',
    'No Menu Formatting': '不启用工作及建筑大数字',
    'Formatting Menu': '启用工作及建筑大数字',
    'Toggle on or off large number formatting for jobs and buildings on the left menu.': '切换是否启用左端菜单中工作及建筑的大数字格式。',
    'No Perk Formatting': '不启用特权等级大数字',
    'Formatting Perk Levels': '启用特权等级大数字',
    'Toggle on or off large number formatting for Perk levels.': '切换是否启用特权等级的大数字格式。',
    'Large Perk Buttons': '特权按钮布局：大',
    'Small Perk Buttons': '特权按钮布局：小',
    'Tiny Perk Buttons': '特权按钮布局：微小',
    'Shrink the size of perk buttons in the Portal and View Perks windows.': '修改传送门和查看特权界面中特权按钮的大小。',
    'is default and fits 5 buttons per row.': '为默认选项，一行可以容纳5个按钮。',
    'shrinks the size to fit 6 per row, and': '缩小了一些，一行可以容纳6个按钮，而 ',
    'fits 7 per row.': '一行可以容纳7个按钮。',
    'No Progress Bars': '关闭进度条',
    'Progress Bars': '开启进度条',
    'Performance Bars': '开启性能进度条',
    'Toggle progress bars to on, off, or performance. Performance and off will reduce CPU usage.': '切换进度条的开关。性能进度条或关闭进度条可以减少CPU占用。',
    'Not Confirming': '虫洞建造不弹出确认框',
    'Confirming': '虫洞建造弹出确认框',
    'Toggles on or off the confirmation popup on scary purchases like Wormholes.': '切换是否在建造虫洞时弹出确认框。',
    'Not Locking': '解锁后不锁定队列',
    'Locking': '解锁后锁定队列',
    'Enables/disables the locking of buildings, jobs, upgrades, and equipment for 1 second after unlocking something new. Useful to prevent accidental purchases.': '切换解锁新建筑、工作、升级和装备后是否在1秒内锁定队列。可以有效避免误操作。',
    'No Achieve Popup': '不弹出获得成就提示框',
    'Popup Achievements': '弹出获得成就提示框',
    'Decide whether or not you want popups on completing an achievement.': '切换是否在获得成就以后弹出提示框。',
    'Tier First': '级别优先',
    'Equip First': '装备优先',
    'Choose which upgrades you want first if it has been a while since you last ran maps.': '选择想要在地图中先获得的升级。',
    'Tier first': '级别优先',
    'will cause maps to drop all items for the lowest tier before moving to the next. (Greatsword II -> Breastplate II -> Shield III': '地图在掉落更高级升级前会优先掉落所有更低级升级 (巨剑 II -> 胸铠 II -> 盾牌 III',
    'Equip first': '装备优先',
    'will start from Shield and drop all available Shield prestiges before continuing to Dagger and so on. (Shield III -> Shield IV -> Dagger III': '地图从盾牌的升级开始掉落，全部掉落完以后，再开始掉落匕首的升级，依此类推 (盾牌 III -> 盾牌 IV -> 匕首 III',
    'Repeat Forever': '永远重复',
    'Repeat to': '重复次数：',
    'Repeat for Any': '重复到全满',
    'Repeat for Items': '重复到无装备',
    'will cause the map to continually repeat if Repeat Maps is enabled.': '启用时，地图将不停重复运行。',
    'will repeat unless there are no more special items left for that level of map.': '启用时，只有在该地图已经获得全部装备以后才关闭重复。',
    'will repeat unless you have 10 Map Bonus stacks.': '启用时，只有在地图奖励层数达到10层后才关闭重复。',
    'will repeat unless there are no special items available AND you can not earn more Map Bonus stacks.': '启用时，只有在该地图已经获得全部装备，且地图奖励到达最大后才关闭重复。',
    'This setting only matters if Repeat is on. Toggling Repeat off will still leave the map when it is finished no matter what.': '只有在开启重复时此设置才会生效。如果关闭重复，那么通过地图以后将会离开。',
    'Exit to Maps': '退回选地图',
    'Exit to World': '退回世界',
    'Choose whether to go to the Maps Screen or World after completing a map.': '在通过地图以后切为选地图界面还是切为世界。',
    'One Void Map': '只运行一张虚空地图',
    'Finish All Voids': '运行所有虚空地图',
    'Decide if you want to continue running the rest of your Void Maps after finishing one.': '切换在通过一张虚空地图后，是否继续运行剩余的虚空地图。',
    'Not Confirming Rare': '不确认稀有资源使用',
    'Confirming Rare Stuff': '确认稀有资源使用',
    'Hide popup confirmation messages when spending rare resources in the Bone Trader or Heirlooms menus.': '切换在骨法商人或传家宝菜单花费稀有资源时，是否弹出提示框。',
    'Not Alerting': '关闭提醒',
    'Alerting': '开启提醒',
    'Toggle on or off the display of yellow alert icons when unlocking something new.': '切换是否在解锁新东西的时候显示黄色感叹号提醒。',
    'Less Breed Timer': '简略繁殖计时',
    'More Breed Timer': '详尽繁殖计时',
    'Display time to breed a full group of soldiers next to the current breed timer.': '切换是否在当前繁殖计时旁边显示一整队士兵繁殖所需的时间。',
    'Black Background': '黑色背景',
    'Default Theme': '默认主题',
    'Dark Theme': '黑暗主题',
    'Gradient Theme': '渐变主题',
    'Toggle between the default Trimps theme, a custom dark theme made by u/Grabarz19, a gradient theme by u/k1d_5h31d0n, and the default theme with a black background.': '在以下主题之间切换：默认脆皮主题，u/Grabarz19创作的黑暗主题，u/k1d_5h31d0n创作的渐变主题，以及黑色背景的默认主题。',
    'Not Fading': '关闭渐隐效果',
    'Fading': '开启渐隐效果',
    'Toggle on or off the fade in effect on elements.': '切换是否开启游戏元素的渐隐效果。',
    'Minimalist Maps': '关闭额外地图信息',
    'Extra Map Info': '开启额外地图信息',
    'Toggle on or off adding extra information to map items.': '切换是否在选地图界面显示额外的地图信息。',
    'Not Averaging': '不平均计算劫掠明细',
    'Averaging': '平均计算劫掠明细',
    'Toggle whether or not loot from maps and the world should be counted in the loot breakdown and tooltip calculations. Calculates a moving average of the loot. If you want to clear the average, try toggling it off and on again.': '切换是否在劫掠明细及相应提示框中平均计算地图和世界的战利品。根据当前情况进行计算。如果您想要重新计算，可以关闭再开启此项。',
    'No Heirloom Pop': '不弹出获得传家宝提示框',
    'Popping Heirlooms': '弹出获得传家宝提示框',
    'Decide whether or not you want popups on looting an Heirloom.': '切换是否在获得传家宝以后弹出提示框。',
    'Minimal Perk Info': '简单特权信息',
    'Extra Perk Info': '额外特权信息',
    'Decide whether or not to show extra information on Perk buttons': '切换是否在特权按钮上显示额外的信息。',
    'Wait to Travel': '等待士兵战死',
    'Auto Abandon': '自动放弃士兵',
    'Decide whether or not to wait for soldiers to die on switching between maps and world. Toggling this on will automatically abandon your soldiers.': '切换在从世界进入地图前等待士兵战死还是自动放弃士兵。',
    'Less Map Buttons': '关闭额外地图按钮',
    'Extra Map Buttons': '开启额外地图按钮',
    'Toggle the button menu to the right of the map grid': '切换是否开启地图区域右侧的按钮菜单。',
    'Geneticistassist Settings': '遗传学家助手设置',
    'Customize your three available Geneticistassist targets, choose options for firing and sending, and decide whether or not Geneticistassist should start automatically when unlocked each run.': '为您的遗传学家设置三个目标，设置解雇和雇佣的选项，以及设置是否在每轮解锁后立刻启用遗传学家助手。',
    'Liquification Off': '关闭液化',
    'Liquification On': '开启液化',
    'Enable or disable Liquification. Nothing in game should be impossible to complete with Liquification enabled, but if you just want to slow things down then you have every right to do so.': '开启或关闭液化。没有东西是在液化下无法完成的，不过是否关闭您说了算。',
    'No Overcolors': '无超杀效果颜色',
    'Normal Overkill Colors': '普通超杀效果颜色',
    'Connected Overkill Colors': '连带超杀效果颜色',
    'Choose if you would like to see a different cell color for cells that you overkilled.': '选择是否用特别的颜色标记超杀格子。',
    'will not change any colors based on Overkill.': '在超杀时不改变格子颜色。',
    'is the default setting, and shows a special color for cells that were Overkilled.': '为默认选项，会改变超杀格子的颜色。',
    'will show the Overkill cell colors for all cells while Overkilling.': '在超杀时改变所有格子的颜色。',
    'Not Forcing Queue': '不强制使用队列',
    'Forcing Queue': '强制使用队列',
    'Choose whether or not to force instant-craft buildings to use the queue. Currently applies  only to Warpstation. May be useful for double checking prices before building!': '切换是否强制让直接建造完成的建筑通过队列建造。目前只对跃迁核心生效。可能对于检查建筑成本会有帮助！',
    'Choose whether or not to force instant-craft buildings to use the queue. Currently applies  to Warpstation and AutoStorage. May be useful for double checking prices before building!': '切换是否强制让直接建造完成的建筑通过队列建造。目前对跃迁核心和自动存储生效。可能对于检查建筑成本会有帮助！',
    'Keep Fighting at Spires': '入塔：继续战斗',
    'Map at Spires': '入塔：进图',
    'Map at Top 2 Spires': '入塔：前2塔进图',
    'Map at Top Spire': '入塔：顶塔进图',
    'Choose whether you would like the game to pause combat by sending you to maps when you reach a Spire.': '切换是否在进入尖塔时停止战斗并切换到地图。',
    'will not interrupt you when reaching a Spire,': '不会切换到地图，',
    'will send you to maps on every Spire,': '在每次进入尖塔时都会切换到地图，',
    'will send you to maps at the highest and second highest level Spire reached, and': '在进入最高两个尖塔时切换到地图，而 ',
    'will switch to maps only on the single highest Spire reached.': '只在进入最高尖塔时切换到地图。',
    'No Map At Zone': '不自动进图',
    'Map At Zone': '自动进图',
    'Map At Z': '进图区域：',
    'Map At Zone (A': '自动进图(A',
    'Map At Zone (B': '自动进图(B',
    'When enabled, you will automatically abandon your Trimps in the World and enter the Map Chamber as soon as you hit your specified Zone number.': '切换是否在到达特定层数以后放弃士兵并立刻进入地图。',
    'Configure with hotkey Z': '可以使用快捷键：Z来快速设置',
    'Set Map At Zone': '进入特定区域后立刻进地图，预设区域必须为10以上，1000以下，且重复区域和预设区域、格子不可冲突，否则下方会有红字报错',
    'No Timestamps': '关闭时间戳',
    'Local Timestamps': '本地时间戳',
    'Run Timestamps': '自上次传送时间戳',
    'Choose whether or not to display timestamps in the message log.': '切换是否在消息框内显示时间戳。',
    'will log the current time according to your computer,': '根据您电脑本地的时间来记录时间，',
    'will log how long it has been since your run started. Note that toggling this setting will not add or remove timestamps from previous messages, but will add or remove them to or from any new ones.': '根据上次使用传送门开始已用的时间来记录时间。此设置只对新的消息生效。',
    'Limited GA Firing': '遗传学家限制解雇',
    'Geneticistassist Fire': '遗传学家解雇',
    'No GA Firing': '遗传学家不解雇',
    'Toggle between': '在以下三者中切换：',
    'and': ' 及 ',
    'will prevent Geneticistassist from firing Farmers, Lumberjacks, or Miners.': '限制遗传学家解雇农民、伐木工和矿工。',
    'is the default value, and allows Geneticistassist to fire anything.': '为默认选项，遗传学家可以解雇任何人。',
    'prevents your Geneticistassist from being able to fire anything at all, including other Geneticists.': '不允许遗传学家解雇任何人，哪怕是它们自己。',
    'Large Buttons': '大按钮',
    'Small Buttons': '小按钮',
    'Tiny Buttons': '微小按钮',
    'Shrink the buttons in the menu where you purchase Buildings, Upgrades, Jobs, and Equipment.': '修改购买建筑、升级、工作和装备菜单的按钮大小。',
    'is default and fits 4 buttons per row.': '为默认选项，一行可以容纳4个按钮。',
    'shrinks the size to fit 5 per row, and': '缩小了一些，一行可以容纳5个按钮，而 ',
    'fits 6 per row. Small and Tiny may not be readable on small screens.': '一行可以容纳6个按钮。小按钮和微小按钮在较小的屏幕上可能无法看清楚。',
    'No Mastery Info': '无专精信息',
    'Alert Mastery': '专精提醒',
    'Show Essence': '显示精华数',
    'Hybrid Alerts': '混合专精提醒',
    'Choose what you would like to see on your Mastery Tab!': '切换您想要在专精选项卡上看到的信息！',
    'will keep the tab clean and static.': '不会显示任何额外信息。',
    'will show an alert on the tab as soon as a new Mastery becomes affordable.': '将在黑暗精华足够升级新的专精时用感叹号进行提醒。',
    'will always show your total amount of unspent essence on the tab.': '在选项卡上一直显示未使用的黑暗精华数量。',
    'Hybrid Essence': '混合专精提醒',
    'will show your total amount of unspent essence on the tab, but will switch to the alert icon once you have enough essence for a new Mastery.': '在选项卡上显示未使用的黑暗精华数量，但当黑暗精华足够升级新的专精时切换为感叹号提醒。',
    'Block Big Popups': '禁止弹出大窗口',
    'Allow Big Popups': '允许弹出大窗口',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption, the popup at The Spire': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示，尖塔提示',
    'This setting applies to big popups that occur after hitting certain milestones each portal. This setting will currently block: the Improbability popup, the popup at Corruption, the popup at The Spire, and the popup on reaching Magma.': '切换是否在每次传送门到达特定区域后弹出大窗口。此设置目前禁止弹出以下窗口：乌有者提示，腐化提示，尖塔提示，岩浆提示。',
    'Note that this setting only blocks large popups once your Highest Zone Reached is 20 Zones past the location of the popup': '注意：此设置只在最高通过区域高于提示所在区域20层以上时禁止弹出大窗口',
    'Default Generator': '默认发生器',
    'Gain Fuel': '得燃料',
    'Gain Mi': '得岩浆岩',
    'Choose what mode the Dimensional Generator should start each run on.': '切换每轮游戏维度发生器的初始运行模式。',
    'will continue with whatever setting you were using at the end of your last run.': '将继续使用您上次传送前游戏的设置。',
    'The Rest of The Settings': '剩余的选项',
    'are named by what mode will be set to active at the start of each run.': '决定每轮游戏初始运行在哪个模式下。',
    'Hold Ctrl while clicking to open the Generator State Configuration menu': '按下Ctrl键再点击可以打开维度发生器状态设置菜单',
    'No Snow': '不显示雪',
    'Show Snow': '显示雪',
    'Disable the snow effect in the world.': '切换世界中雪的效果。',
    'This will take effect on the next Zone after this setting is changed': '切换选项后在下个区域才生效',
    '. This setting is temporary, and will melt when the snow does.': '。此设置为临时设置，雪融后将消失。',
    'No Pumpkimps': '无脆皮南瓜怪',
    'Show Pumpkimps': '显示脆皮南瓜怪',
    'Bordered Pumpkimps': '脆皮南瓜怪边框',
    'Choose between': '在以下三者中切换：',
    ', and': '，及 ',
    '. This setting applies only to the visual effect of Pumpkimp Zones in the world, does not apply to maps, and has no impact on how many Pumpkimps or Pumpkimp Zones actually spawn. This setting is temporary and will rot away after the Pumpkimp season!': '此设置只对世界上的脆皮南瓜怪区域显示效果生效，对地图无效，且不会影响脆皮南瓜怪的数量或区域。此设置为临时设置，在脆皮南瓜怪活动期满后将消失！',
    'is the default, and displays Pumpkimp Zones as normal.': '为默认选项，正常显示脆皮南瓜怪区域。',
    'displays Pumpkimp cells by changing the border color instead of the background color.': '不会改变脆皮南瓜怪区域的颜色，取而代之的是改变相应边框的颜色。',
    'will not show any indicator at all that a world Zone is a Pumpkimp Zone. Pumpkimps will still spawn at the same rate.': '不显示脆皮南瓜怪区域。但脆皮南瓜怪仍然正常生成。',
    'No Gene Sending': '无遗传行军',
    'Using Gene Send': '使用遗传行军',
    'Enforce Gene Send': '强制遗传行军',
    'Wait For Gene Send': '等待遗传行军',
    'When': '当 ',
    'is enabled, as long as you have one Geneticist, AutoFight will automatically send soldiers to fight if they have been breeding for longer than your Geneticistassist setting.': '时，只要您拥有遗传学家，就会在士兵繁殖时间超过遗传学家设置时间的情况下开始自动战斗。',
    'is enabled, as long as you have one Geneticist, AutoFight will never send a group of Trimps to fight unless you are at max population or you have reached your set Geneticistassist timer.': '时，如果您拥有遗传学家，那么只在人口到达最大或者士兵繁殖时间超过遗传学家设置时间的情况下开始自动战斗。',
    'Finally, if you choose': '最后，如果选择 ',
    'and have at least one Geneticist, AutoFight will only send Trimps to fight after they have been breeding long enough to reach your set Geneticistassist timer. This guarantees that Anticipation and Geneticist levels build up for as long as your set timer, but may result in no soldiers being sent for some time while you sit at full population.': '并拥有遗传学家，那么只在士兵繁殖时间超过遗传学家设置时间的情况下开始自动战斗。此选项可以保证预期特权和遗传学家尽可能的到达最大效果，但可能导致人口最大时一段时间不自动战斗。',
    'Not Firing For Jobs': '关闭为工作而解雇',
    'Firing For Jobs': '开启为工作而解雇',
    'When enabled, hiring Trimps for jobs with scaling price increases (Trainer, Explorer, etc) while you have no workspaces will attempt to fire Farmers, Lumberjacks and Miners until you have enough room.': '切换是否在没有人手分配给价格累积的工作(训练师，探险家等)时解雇农民、伐木工或矿工腾出人手。',
    'Dynamic Giga Ctrl': '千兆核心动态Ctrl',
    'Always Giga Ctrl': '千兆核心常时Ctrl',
    'When enabled, all Gigastation purchases will act as if the Ctrl key was held, regardless of whether or not it actually was held. When disabled, you will have to hold Ctrl to tell Gigastations to automatically purchase Warpstations (See Gigastation tooltip for more info).': '当开启常时Ctrl时，所有千兆核心视为按下Ctrl再进行升级。当开启动态Ctrl时，您将需要自己按下Ctrl才能自动购买跃迁核心(详情可查看千兆核心提示框)',
    'No Heirloom Animations': '关闭传家宝动画',
    'Heirloom Animations': '开启传家宝动画',
    'Enable/Disable animations on Heirlooms.': '切换传家宝动画的开关。',
    'Disable Hotkeys': '关闭快捷键',
    'Enable Hotkeys': '开启快捷键',
    'Enable or disable hotkeys.': '切换快捷键的开关。',
    'Don\'t Climb BW': '关闭仿生冲层',
    'Climb BW': '开启仿生冲层',
    'Decide whether or not you want your Trimps to automatically run the next Bionic Wonderland once they\'ve gotten all of the items from their current one. Repeat Maps must be toggled on for Climb BW to work.': '切换是否在通过当前仿生仙境地图后继续进入下一层仿生仙境地图。必须开启重复地图才能使此选项生效。',
    'No Offline Progress': '关闭离线进度',
    'Hybrid Offline': '混合离线',
    'Time Warp Only': '只使用时间跃迁',
    'Trustworthy Trimps Only': '只使用可信的脆皮',
    'will cause no extra resources to be earned and no time to be warped when you return to the game. The Portal and Zone timers will not advance while offline, and the game will be in the same state you left it when you come back. This can be useful for speedrun achievements or if you just really really don\'t trust your Trimps when you\'re gone.': '当返回游戏时不会获得任何额外资源，也不会触发时间跃迁。传送门和区域计时与离线前一致，游戏状态也保持不变。这在做最速系列成就时很有用，如果您真不信任脆皮的话也可以考虑使用。',
    'combines Time Warp and Trustworthy Trimps into the best offline experience that Science can buy. Time Warp caps at 24 hours, so using Hybrid Offline will grant Trustworthy Trimps at the beginning of your Time Warp for all offline time over 24 hours, and will also grant Trustworthy Trimps for any extra time should you choose to end Time Warp early. Note that the Portal Time and Time in Zone clocks will advance for all time granted by Trustworthy Trimps and by Time Warp.': '把时间跃迁和可信的脆皮结合起来使用。时间跃迁最多可以持续24小时，因此对于超过24小时的部分将启用可信的脆皮，如果中断了时间跃迁，剩余的时间将仍然触发可信的脆皮。传送门计时和区域计时将依照时间跃迁和可信的脆皮生效的时间增加相应数值。',
    'will grant up to 24 hours of your offline progress as Time Warp without granting any extra resources from Trustworthy Trimps at the beginning (for time over 24 hours), or at the end (for canceled Time Warp time). This can also be useful for timed runs or tracking stats, as the time added will be capped to however much time you spend in Time Warp.': '最多可以从时间跃迁中获得24小时的收益，并且不触发可信的脆皮。对于定时游戏或研究数据会很有用，因为游戏时间被时间跃迁限制了。',
    'will skip Time Warp when you come back and grant resources for all time offline from Trustworthy Trimps. For when you want to get back in the game as soon as possible!': '将跳过时间跃迁并从可信的脆皮获取全部离线收益。如果您想要尽快回到游戏中，可以选择这个。',
    'This setting can be changed from the Time Warp screen': '可以在时间跃迁画面中修改此设置',
    'or in Settings -> Other': '在设置的其它选项卡下也可以进行修改',
    'Archaeology Automator': '自动考古',
    'Customize the Archaeology Automator. Has no effect unless running the Archaeology Challenge.': '设置自动考古。只在考古学挑战中有效。',
    'Not Paused': '未暂停',
    'Paused': '已暂停',
    'Pause the game': '暂停游戏',
    'Pause your game. This will pause all resource gathering, offline progress, and timers. (Hotkey: Space': '暂停游戏。所有资源收益、离线进度和计时器都将暂停。(快捷键：空格',
    'Disable Pausing': '禁用暂停键',
    'Enable Pausing': '启用暂停键',
    'You can pause the game by clicking the run timer in the bottom right of the screen. This setting allows you to remove that ability!': '您可以点击右下角的计时器来暂停游戏。此设置决定是否关闭此功能！',
    'Delete Save': '删除存档',
    'Delete your save and start fresh. Your Trimps will not be happy.': '删除存档重新开始。您的脆皮可能不会对这个决定高兴的。',
    //游戏设置相关结束
    //骨头相关
    'Golden Maps (20 bones': '金色地图 (20骨头',
    'You are about to purchase Golden Maps for 20 bones. All of your current and future maps will gain +100% loot added to their normal loot roll': '您将花费20骨头购买金色地图。购买后，所有当前和之后的地图中获取资源加倍，',
    'until your next Portal': '直到您使用传送门为止',
    '. Is this what you wanted to do?': '。您确定要购买吗？',
    'Quick Trimps (20 bones': '快枪手脆皮 (20骨头',
    'You are about to purchase Quick Trimps for 20 bones. This will cause your Trimps to breed twice as fast': '您将花费20骨头购买快枪手脆皮。购买后，脆皮繁殖速度将加倍，',
    'Sharp Trimps (25 bones': '迅捷脆皮 (25骨头',
    'You are about to purchase Sharp Trimps for 25 bones. This will cause your Trimps to deal 50% more damage': '您将花费25骨头购买迅捷脆皮。购买后，脆皮造成的伤害将增加50%，',
    'Heliumy (100 bones': '氦奇 (100骨头',
    'Radonculous (100 bones': '氡丰 (100骨头',
    'You are about to purchase Heliumy for 100 bones. This will cause you to earn 25% more Helium from all sources': '您将花费100骨头购买氦奇。购买后，所有获取的氦将增加25%，',
    'You are about to purchase Radonculous for 100 bones. This will cause you to earn 25% more Radon from all sources': '您将花费100骨头购买氡丰。购买后，所有获取的氡将增加25%，',
    '': '',
    '': '',
    //骨头相关结束
    //传家宝相关
    'Common Core': '普通核心',
    'Common Shield': '普通之盾',
    'Common Staff': '普通权杖',
    'Uncommon Core': '罕见核心',
    'Uncommon Shield': '罕见之盾',
    'Uncommon Staff': '罕见权杖',
    'Rare Core': '稀有核心',
    'Rare Shield': '稀有之盾',
    'Rare Staff': '稀有权杖',
    'Epic Core': '史诗核心',
    'Epic Shield': '史诗之盾',
    'Epic Staff': '史诗权杖',
    'Legendary Core': '传奇核心',
    'Legendary Shield': '传奇之盾',
    'Legendary Staff': '传奇权杖',
    'Magnificent Core': '华丽核心',
    'Magnificent Shield': '华丽之盾',
    'Magnificent Staff': '华丽权杖',
    'Ethereal Core': '超凡核心',
    'Ethereal Shield': '超凡之盾',
    'Ethereal Staff': '超凡权杖',
    'Magmatic Shield': '岩浆之盾',
    'Magmatic Staff': '岩浆权杖',
    'Plagued Shield': '天灾之盾',
    'Plagued Staff': '天灾权杖',
    'Radiating Shield': '辐射之盾',
    'Radiating Staff': '辐射权杖',
    'Empty': '空',
    'ADDS this amount on to your total Prismatic Shield. This modifier can only function in the Radon Universe.': '将此数值加算到棱镜护盾数值中。只在宇宙2内有效。',
    'Charging': '蓄能',
    //传家宝相关结束
    //挑战相关
    'You will unlock this challenge once you reach Zone': '欲解锁此挑战，您需要到达区域',
    'You will unlock this challenge once you  reach Zone': '欲解锁此挑战，您需要到达区域',
	'Daily': '日常',
    'Discipline': '纪律',
    'Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Completing The Dimension Of Anger will cause Trimp damage to return to normal.': '调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher.': '调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。',
    'Discipline Challenge!': '纪律挑战！',
    'You have unlocked a new perk, and your Trimps have regained their Discipline.': '您解锁了一个新的特权，并且您的脆皮们又重新变得有纪律了。',
    'You have the Discipline challenge active. Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Completing The Dimension Of Anger will cause Trimp damage to return to normal.': '您目前正在进行纪律挑战。调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'You have the Discipline challenge active. "Tweak the portal to bring you back to a universe where Trimps are less disciplined, in order to teach you how to be a better Trimp trainer. Your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher."': '您目前正在进行纪律挑战。调节传送门，将您带到一个脆皮不那么有纪律的宇宙。在那里可以学习如何成为一个更好的脆皮训练师。您的脆皮最低伤害将大大降低，但最高伤害也会大大增加。通过愤怒维度地图后，脆皮的伤害将恢复正常。',
    'You will unlock this challenge once you have 30 total Helium': '欲解锁此挑战，您需要一共获得30氦',
    'Metal': '金属',
    'Tweak the portal to bring you to an alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies. If you complete The Dimension Of Anger without disabling the challenge, miners will re-unlock.': '调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'Tweak the portal to bring you to alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies.': '调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。',
    'Metal Challenge!': '金属挑战！',
    'You have unlocked a new perk, and Miners have returned to your game.': '您解锁了一个新的特权，并且矿工们又回到了游戏中。',
    'You have the Metal challenge active. Tweak the portal to bring you to an alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies. If you complete The Dimension Of Anger without disabling the challenge, miners will re-unlock.': '您目前正在进行金属挑战。调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'You have the Metal challenge active. "Tweak the portal to bring you to alternate reality, where the concept of Miners does not exist, to force yourself to become frugal with equipment crafting strategies."': '您目前正在进行金属挑战。调节传送门，将您带到一个不存在矿工这个概念的异世界中。在那里可以学习在锻造装备时如何更勤俭节约。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么矿工将重新解锁。',
    'Size': '尺寸',
    'Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps. If you complete The Dimension of Anger without disabling the challenge, your stats will return to normal.': '调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么一切将恢复正常。',
    'Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps.': '调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。',
    'Size Challenge!': '尺寸挑战！',
    'You have unlocked a new perk, and your Trimps have been reduced down to their normal size.': '您解锁了一个新的特权，并且脆皮又回到了正常尺寸。',
    'You have the Size challenge active. Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps. If you complete The Dimension of Anger without disabling the challenge, your stats will return to normal.': '您目前正在进行尺寸挑战。调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。如果您在没有放弃挑战的情况下通过了愤怒维度地图，那么一切将恢复正常。',
    'You have the Size challenge active. "Tweak the portal to bring you to an alternate reality, where Trimps are bigger and stronger, to force yourself to figure out a way to build larger housing. Your Trimps will gather 50% more resources, but your housing will fit 50% fewer Trimps."': '您目前正在进行尺寸挑战。调节传送门，将您带到一个脆皮更大更强壮的异世界中。在那里可以学习如何建造更大的房屋。脆皮可以多获取50%的资源，但住房少容纳50%的脆皮。',
    'Balance': '平衡',
    'Your scientists have discovered a chaotic dimension filled with helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250. Completing': '您的科学家发现了一个充满氦的混沌维度。所有敌人生命值增加100%，多造成17%伤害，并且地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。在此挑战激活的前提下通过 ',
	'Zone': '区域',
    'with this challenge active will grant an additional 100% of all helium earned up to that point. This challenge is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的100%。此挑战可重复完成！',
    'Your scientists have discovered a chaotic dimension filled with unharvestable but pretty helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250.': '您的科学家发现了一个充满了氦的混沌维度，这个维度中的氦虽然量很大，但无法收集。所有敌人生命值增加100%，多造成17%伤害，并且地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。',
    'You have the Balance challenge active. Your scientists have discovered a chaotic dimension filled with helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250. Completing': '您目前正在进行平衡挑战。您的科学家发现了一个充满氦的混沌维度。所有敌人生命值增加100%，多造成17%伤害，并且地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。在此挑战激活的前提下通过 ',
    'You have the Balance challenge active. "Your scientists have discovered a chaotic dimension filled with unharvestable but pretty helium. All enemies have 100% more health, enemies in world deal 17% more damage, and enemies in maps deal 135% more damage. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your health by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can only stack to 250."': '您目前正在进行平衡挑战。您的科学家发现了一个充满了氦的混沌维度，这个维度中的氦虽然量很大，但无法收集。所有敌人生命值增加100%，多造成17%伤害，并且地图中的敌人增加135%伤害。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%生命值，但增加脆皮1%资源获取速度。不平衡最高叠加到250层。',
    'Scientist': '科学家',
    'Scientist II': '科学家 II',
    'Scientist III': '科学家 III',
    'Scientist IV': '科学家 IV',
    'Scientist V': '科学家 V',
    'Attempt modifying the portal to retain positive qualities from previous dimensions. Until you perfect the technique, you will start with': '尝试调节传送门来保持之前维度的正面效果。直到您对这项技艺足够精进之前，您将从 ',
    'Attempt modifying the portal to harvest resources when travelling. Until you perfect the technique, you will start with': '尝试调节传送门来在旅途中获取资源。直到您对这项技艺足够精进之前，您将从 ',
    'science but will be unable to research or hire scientists and': '科学点开始，但无法研究或者雇佣科学家。并且',
    'all enemy damage will be 10X higher': '所有敌人的攻击力变为10倍',
    '. Choose your upgrades wisely! Clearing': '。仔细选择您的研究！通过 ',
    'science but will be unable to research or hire scientists. Choose your upgrades wisely! Clearing': '科学点开始，但无法研究或者雇佣科学家。仔细选择您的研究！在此挑战激活的前提下通过 ',
	'\'The Block\' (': '障碍区地图(',
    'with this challenge active will cause you to start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman each time you use your portal.': '将使您每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏。',
    'with this challenge active will cause you to start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked each time you use your portal.': '将使您每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏。',
    'with this challenge active will cause you to start with full Trimps and 200% player efficiency each time you use your portal.': '将使您每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏。',
    'with this challenge active will cause you to earn two levels of each prestige upgrade per map, unlock AutoPrestiges, and your Warpstations will build instantly, skipping the queue. This bonus will apply each time you use your portal.': '将使您每次使用传送门后，每张地图可以获得两级装备重铸升级，并解锁自动重铸，而且跃迁核心可以跳过队列直接建造完成。',
    'with this challenge active will cause you to earn two levels of each prestige upgrade per map. This bonus will apply each time you use your portal.': '将使您每次使用传送门后，每张地图可以获得两级装备重铸升级。',
    'with this challenge active will cause you to permanently increase all Helium found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges each time you use your portal.': '将使您的氦获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。',
    'with this challenge active will cause you to permanently increase all Radon found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges each time you use your portal.': '将使您的氡获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。',
    'Scientist Challenge!': '科学家挑战！',
    'From now on, you\'ll start with 5000 Science, 100 Food, 100 Wood, 10 Traps, and 1 Foreman every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以5000科学点，100食物，100木头，10陷阱，以及1工头的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll start with 5 Barns, 5 Sheds, 5 Forges, and T2 Equipment unlocked every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以5谷仓、5窝棚、5锻造厂，且解锁2级装备的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll start with full Trimps and 200% player efficiency every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，以满人口脆皮，200%玩家效率的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll earn two levels of each prestige upgrade per map, unlock AutoPrestiges, and your Warpstations will build instantly, skipping the queue. This bonus will apply every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，每张地图可以获得两级装备重铸升级，并解锁自动重铸，而且跃迁核心可以跳过队列直接建造完成。您也重新解锁了科学家，并且',
    'From now on, you\'ll earn two levels of each prestige upgrade per map. This bonus will apply every time you portal. You\'ve unlocked Scientists, and': '从现在起，您每次使用传送门后，每张地图可以获得两级装备重铸升级。您也重新解锁了科学家，并且',
    'From now on, you\'ll permanently increase all Helium found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges every time you portal. You\'ve unlocked Scientists, and': '从现在起，您的氦获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。您也重新解锁了科学家，并且',
    'From now on, you\'ll permanently increase all Radon found by 0.5% to the power of your current Zone number. You\'ll also start with 1000% player efficiency and 50 Barns, Sheds, and Forges every time you portal. You\'ve unlocked Scientists, and': '从现在起，您的氡获取量每层区域永久比上一层区域多0.5%。且每次使用传送门后，以1000%玩家效率，50谷仓、50窝棚、50锻造厂的状态开始游戏。您也重新解锁了科学家，并且',
    'Don\'t forget that you can click Research on your Science again!': '不要忘了您又可以进行科学研究了！',
    'You have the Scientist challenge active. Attempt modifying the portal to retain positive qualities from previous dimensions. Until you perfect the technique, you will start with': '您目前正在进行科学家挑战。尝试调节传送门来保持之前维度的正面效果。直到您对这项技艺足够精进之前，您将从 ',
    'You have the Scientist challenge active. Attempt modifying the portal to harvest resources when travelling. Until you perfect the technique, you will start with': '您目前正在进行科学家挑战。尝试调节传送门来在旅途中获取资源。直到您对这项技艺足够精进之前，您将从 ',
    'Meditate': '冥想',
    'Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster. Completing': '进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。通过 ',
    '\'Trimple of Doom\' (': '末日神殿地图(',
	'will return the world to normal.': '后世界将回归正常。',
    'Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster.': '进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。',
    'You have the Meditate challenge active. Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster. Completing': '您目前正在进行冥想挑战。进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。通过 ',
    'You have the Meditate challenge active. Visit a dimension where everything is stronger, in an attempt to learn how to better train your Trimps. All enemies will have +100% health and +50% attack, but your Trimps will gather 25% faster.': '您目前正在进行冥想挑战。进入一个敌人更加强大的维度来学习如何更好地训练脆皮。所有的敌人生命值增加100%，攻击力增加50%，但脆皮的资源获取速度也会提高25%。',
    'Decay': '衰变',
    'Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing': '调节传送门，将您带到一个更混乱的异世界中。在那里可以学习如何创造一个更安宁的环境。您的战利品获取量变为10倍(氦除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“衰变”。每层衰变将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的0.5%。当杀死每个区域最后的脆皮飞艇时层数重置，层数最高为999。在此挑战激活的前提下通过 ',
	'with this challenge active will allow you to select the Gardens biome when creating maps, and all future Gardens maps created will gain +25% loot.': '将使您可以在制造地图时选择花园生物群落，且后续所有花园地图战利品获取量增加25%。',
    'You have the Decay challenge active. Tweak the portal to bring you to an alternate reality, where added chaos will help you learn to create a peaceful place. You will gain 10x loot (excluding helium), 10x gathering, and 5x Trimp attack, but a stack of Decay will accumulate every second. Each stack of Decay reduces loot, gathering, and Trimp attack by 0.5% of the current amount. These stacks reset each time a Blimp is killed and cap at 999. Completing': '您目前正在进行衰变挑战。调节传送门，将您带到一个更混乱的异世界中。在那里可以学习如何创造一个更安宁的环境。您的战利品获取量变为10倍(氦除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“衰变”。每层衰变将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的0.5%。当杀死每个区域最后的脆皮飞艇时层数重置，衰变最高为999层。在此挑战激活的前提下通过 ',
    'Trimp': '脆皮',
    'Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination, but completing': '调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作，但通过 ',
	'will teach you how to keep your Trimps alive for much longer.': '后可以学会如何让脆皮存活更久。',
    'Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination.': '调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作。',
    'Trimp Challenge!': '脆皮挑战！',
    'You have unlocked the \'Resilience\' perk, and your Trimps can fight together again.': '您解锁了“弹性”特权，并且脆皮又可以共同作战了。',
    'You have the Trimp challenge active. Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination, but completing': '您目前正在进行脆皮挑战。调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作，但通过 ',
    'You have the Trimp challenge active. "Tweak the portal to bring you to a dimension where Trimps explode if more than 1 fights at a time. You will not be able to learn Coordination."': '您目前正在进行脆皮挑战。调节传送门，将您带到一个脆皮只能单打独斗的维度中。您将无法研究协作。',
    'Trapper': '捕手',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching yourself new ways to take advantage of situations where breed rate is low. Clearing': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以学习如何利用低繁殖率做些什么。在此挑战激活的前提下通过 ',
	'\'Trimple Of Doom\' (': '末日神殿地图(',
    'with this challenge active will return your breeding rate to normal. Note that any bonuses that cause housing to come prefilled with Trimps will not work in a dimension where Trimps cannot breed.': '后繁殖率将恢复正常。注意，在脆皮无法繁殖的维度中，任何在住房建造完立刻使其获得满人口的加成均无效。',
    'Travel to a dimension where Trimps refuse to breed in captivity, good luck!': '前往一个被抓住的脆皮拒绝繁殖的维度，祝您好运！',
    'bored': '无所事事',
    'breeding': '繁殖中',
    'You have the Trapper challenge active. Travel to a dimension where Trimps refuse to breed in captivity, teaching yourself new ways to take advantage of situations where breed rate is low. Clearing': '您目前正在进行捕手挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以学习如何利用低繁殖率做些什么。在此挑战激活的前提下通过 ',
    'You have the Trapper challenge active. "Travel to a dimension where Trimps refuse to breed in captivity, good luck!"': '您目前正在进行捕手挑战。前往一个被抓住的脆皮拒绝繁殖的维度，祝您好运！',
    'Electricity': '电流',
	'Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing': '使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。通过 ',
	'\'The Prison\' (': '监狱地图 (',
	'will reward you with an additional 200% of all helium earned up to but not including Zone 80. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%(不包含区域80获取的)。此挑战可重复完成！',
    'Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack.': '使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。',
    'You will unlock this challenge once you clear \'The Prison\' at Zone': '欲解锁此挑战，您需要通过监狱地图，它在区域',
    'You have the Electricity challenge active. Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack. Clearing': '您目前正在进行电流挑战。使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。通过 ',
    'You have the Electricity challenge active. "Use the keys you found in the Prison to bring your portal to an extremely dangerous dimension. In this dimension enemies will electrocute your Trimps, stacking a debuff with each attack that damages Trimps for 10% of total health per turn per stack, and reduces Trimp attack by 10% per stack."': '您目前正在进行电流挑战。使用监狱地图中找到的钥匙，可以将您的传送门导向一个极端危险的维度。此维度中，敌人会电击您的脆皮，每次攻击给它们叠加一层“触电”。每层触电每轮对脆皮造成生命值上限10%的伤害，并且降低脆皮10%攻击力。',
    'Frugal': '节俭',
    'Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing': '将您带到一个装备更便宜但无法重铸的维度。在那里可以学习如何更好管理资源和装备。在此挑战激活的前提下通过 ',
	'\'Dimension of Anger\' (': '愤怒维度地图 (',
	'with this challenge active will return missing books to maps, and your new skills in Frugality will permanently cause MegaBooks to increase gather speed by 60% instead of 50%.': '后可重新获得重铸升级，且您新学会的节俭能力可以永久将超级升级由原来的资源获取速度提升50%变为资源获取速度提升60%。',
    'You have the Frugal challenge active. Bring yourself to a dimension where Equipment is cheap but unable to be prestiged, in order to teach yourself better resource and equipment management. Completing': '您目前正在进行节俭挑战。将您带到一个装备更便宜但无法重铸的维度。在那里可以学习如何更好管理资源和装备。在此挑战激活的前提下通过 ',
    'Life': '生命',
	'Explore a dimension that is normally populated by the Undead, but is currently plagued by a quickly moving virus that can bring things back to life. All enemies in this dimension have 500% extra attack and 1000% extra health. Attacking a normal undead enemy gives your Trimps 1 stack of Unliving, which increases Trimp attack and health by 10% (additive) per stack. Trimps can have a maximum of 150 stacks of Unliving, and attacking a Living enemy will remove 5 stacks of Unliving. Completing': '探索一个亡灵盘据的维度，最近此维度一种能够令亡灵复生的病毒正快速传播中。此维度中的所有敌人生命值增加1000%，攻击力增加500%。攻击一个普通的亡灵敌人可以使您的脆皮获得一层“亡灵化”，每层可以使脆皮的攻击力和生命值增加10%(相互叠加)。亡灵化最高为150层。攻击一个非亡灵的敌人将失去5层“亡灵化”。通过 ',
	'will reward you with an additional 400% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%。此挑战可重复完成！',
    'You have the Life challenge active. Explore a dimension that is normally populated by the Undead, but is currently plagued by a quickly moving virus that can bring things back to life. All enemies in this dimension have 500% extra attack and 1000% extra health. Attacking a normal undead enemy gives your Trimps 1 stack of Unliving, which increases Trimp attack and health by 10% (additive) per stack. Trimps can have a maximum of 150 stacks of Unliving, and attacking a Living enemy will remove 5 stacks of Unliving. Completing': '您目前正在进行生命挑战。探索一个亡灵盘据的维度，最近此维度一种能够令亡灵复生的病毒正快速传播中。此维度中的所有敌人生命值增加1000%，攻击力增加500%。攻击一个普通的亡灵敌人可以使您的脆皮获得一层“亡灵化”，每层可以使脆皮的攻击力和生命值增加10%(相互叠加)。亡灵化最高为150层。攻击一个非亡灵的敌人将失去5层“亡灵化”。通过 ',
    'Mapocalypse': '天启地图',
    'Experience a slightly distorted version of the \'Electricity\' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing': '体验一个轻微扭曲的“电流”维度。在那里可以更好理解地图与世界之间的关系。除了所有地图难度增加300%以外，大部分规则与电流挑战相同。通过 ',
	'will cause the world to return to normal. You': '后世界将恢复原样。您同时 ',
	'will': '可以',
	'receive the Helium reward from Electricity.': '获得电流挑战中的氦奖励。',
    'You have the Mapocalypse challenge active. Experience a slightly distorted version of the \'Electricity\' dimension, to help understand the relationship between maps and the world. Everything will work exactly the same as Electricity, but all maps will have an extra 300% difficulty. Clearing': '您目前正在进行天启地图挑战。体验一个轻微扭曲的“电流”维度。在那里可以更好理解地图与世界之间的关系。除了所有地图难度增加300%以外，大部分规则与电流挑战相同。通过 ',
    'Coordinate': '协同',
	'Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing': '造访一个敌人协同作战但没有快速效果的维度。在那里可以研究自然进化出的协作是什么样的。在此挑战激活的前提下通过 ',
	'with this challenge active will cause all enemies to lose their Coordination.': '后，敌人将失去协作效果。',
    'Visit a dimension where Bad Guys are Coordinated but never fast, chip \'em down!': '造访一个敌人协同作战但没有快速效果的维度。嫩死他们！',
    'You have the Coordinate challenge active. Visit a dimension where Bad Guys are Coordinated but never fast, to allow you to study naturally evolved Coordination. Completing': '您目前正在进行协同挑战。造访一个敌人协同作战但没有快速效果的维度。在那里可以研究自然进化出的协作是什么样的。在此挑战激活的前提下通过 ',
    'You have the Coordinate challenge active. "Visit a dimension where Bad Guys are Coordinated but never fast, chip \'em down!"': '您目前正在进行协同挑战。造访一个敌人协同作战但没有快速效果的维度。嫩死他们！',
    'Crushed': '粉碎',
    'Journey to a dimension where the atmosphere is rich in helium, but Bad Guys have a 50% chance to Critical Strike for +400% damage unless your Block is as high as your current Health. Clearing': '前往一个大气中富含氦的维度，此维度中除非您的格挡达到当前生命值，否则敌人有50%概率暴击，多造成400%伤害。通过 ',
    'will reward you with an additional 400% of all helium earned up to but not including Z125. This challenge is repeatable.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%(不包含区域125获取的)。此挑战可重复完成。',
    'You have the Crushed challenge active. Journey to a dimension where the atmosphere is rich in helium, but Bad Guys have a 50% chance to Critical Strike for +400% damage unless your Block is as high as your current Health. Clearing': '您目前正在进行粉碎挑战。前往一个大气中富含氦的维度，此维度中除非您的格挡达到当前生命值，否则敌人有50%概率暴击，多造成400%伤害。通过 ',
    'Slow': '迟缓',
    'Legends tell of a dimension inhabited by incredibly fast Bad Guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All Bad Guys will attack first in this dimension, but clearing': '传说这个维度被极其迅捷的敌人占据了，另外这里还有着强大的武器及护甲的蓝图，就等着您来让它们重见天日了。此维度中，所有敌人都会抢先攻击，但在此挑战激活的前提下通过 ',
    'with this challenge active will forever-after allow you to create these new pieces of equipment.': '后，您可以永久解锁这些新装备。',
    'Legends tell of a dimension inhabited by incredibly fast Bad Guys, and you seem to want to go there to prove something. All Bad Guys will attack first in this dimension, watch your health!': '传说这个维度被极其迅捷的敌人占据了，您看起来也想要证明自己。此维度中，所有敌人都会抢先攻击，注意您的生命值！',
    'You have the Slow challenge active. Legends tell of a dimension inhabited by incredibly fast Bad Guys, where blueprints exist for a powerful yet long forgotten weapon and piece of armor. All Bad Guys will attack first in this dimension, but clearing': '您目前正在进行迟缓挑战。传说这个维度被极其迅捷的敌人占据了，另外这里还有着强大的武器及护甲的蓝图，就等着您来让它们重见天日了。此维度中，所有敌人都会抢先攻击，但在此挑战激活的前提下通过 ',
    'You have the Slow challenge active. "Legends tell of a dimension inhabited by incredibly fast Bad Guys, and you seem to want to go there to prove something. All Bad Guys will attack first in this dimension, watch your health!"': '您目前正在进行迟缓挑战。传说这个维度被极其迅捷的敌人占据了，您看起来也想要证明自己。此维度中，所有敌人都会抢先攻击，注意您的生命值！',
    'Nom': '美味',
    'Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first. Clearing': '前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。通过 ',
    'will reward you with an additional 450% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的450%。此挑战可重复完成！',
    'Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first.': '前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。',
    'You have the Nom challenge active. Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first. Clearing': '您目前正在进行美味挑战。前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。通过 ',
    'You have the Nom challenge active. "Travel to a dimension where Bad Guys enjoy the taste of Trimp. Whenever a group of Trimps dies, the Bad Guy will eat them, gaining 25% (compounding) more attack damage and healing for 5% of their maximum health. The methane-rich atmosphere causes your Trimps to lose 5% of their total health after each attack, but the Bad Guys are too big and slow to attack first."': '您目前正在进行美味挑战。前往一个敌人垂涎于脆皮美味的维度。当一队脆皮死亡后，敌人会将它们吃掉，攻击力增加25%(叠乘)，且恢复上限5%的生命值。另外，此维度富含甲烷的大气还会使脆皮在每次攻击后失去上限5%的生命值。不过，敌人体型太大，行动太迟缓，因此它们无法抢先攻击。',
    'Mapology': '地图学',
    'Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing': '前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。在此挑战激活的前提下通过 ',
    'with this challenge active will return you to your original dimension. Double prestige from Scientist IV will not work during this challenge.': '可以将您送回原来的维度。科学家 IV 的双倍锻造升级加成在此挑战期间无效。',
    'Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map.': '前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。',
    'Double prestige from Scientist IV and the Blacksmithery mastery will not function while this challenge is active.': '科学家 IV 的双倍锻造升级加成和锻铁术系列精通在此挑战期间无效。',
    'You have the Mapology challenge active. Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map. Completing': '您目前正在进行地图学挑战。前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。在此挑战激活的前提下通过 ',
    'You have the Mapology challenge active. "Travel to a dimension where maps are scarce, in an attempt to learn to be more resourceful. You will earn one map Credit for each World Zone you clear, and it costs 1 credit to run 1 map.': '您目前正在进行地图学挑战。前往一个地图稀缺的维度，在那里可以学习如何变得更足智多谋。每通过一个区域，您可以获得一个地图代币，每次开始进入地图后消耗一个地图代币。',
    'Toxicity': '毒性',
    'Travel to a dimension rich in helium, but also rich in toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all resources obtained by 0.15% (including Helium), stacking up to 1500 times. These stacks will reset when you clear a Zone. Completing': '前往一个富含氦，但也富含大量毒性敌人的维度。所有敌人攻击力为5倍，生命值为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 400% of all helium earned up to that point. This is repeatable!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的400%。此挑战可重复完成！',
    'Travel to a dimension filled with the glory that comes from killing toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a Zone.': '前往一个以击杀毒性敌人为荣的维度。所有敌人攻击力为5倍，生命值为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。',
    'You have the Toxicity challenge active. Travel to a dimension rich in helium, but also rich in toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all resources obtained by 0.15% (including Helium), stacking up to 1500 times. These stacks will reset when you clear a Zone. Completing': '您目前正在进行毒性挑战。前往一个富含氦，但也富含大量毒性敌人的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。在此挑战激活的前提下通过 ',
    'You have the Toxicity challenge active. "Travel to a dimension filled with the glory that comes from killing toxic Bad Guys. All Bad Guys have 5x attack and 2x health. Each time you attack a Bad Guy, your Trimps lose 5% of their health, and toxins are released into the air which reduce the breeding speed of your Trimps by 0.3% (of the current amount), but also increase all loot found by 0.15%, stacking up to 1500 times. These stacks will reset when you clear a Zone."': '您目前正在进行毒性挑战。前往一个以击杀毒性敌人为荣的维度。所有敌人攻击力变为5倍，生命值变为2倍。每次攻击一个毒性敌人后，脆皮失去5%的生命值，同时毒气排入大气后脆皮繁殖速度会比之前的速度慢0.3%，但资源获取量也会增加0.15%(包括氦)，此效果最高为1500层。在通过一个区域后层数重置。',
    'Devastation': '破坏',
    'Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing': '前往一个脆皮要为前辈们错误买单的严苛维度。如果军队被敌人击杀，下一队脆皮将受到超杀伤害750%的伤害。通过 ',
    'Imploding Star (Zone': '爆炸之星地图 (区域',
    'You have the Devastation challenge active. Travel to a harsh dimension where Trimps are penalized for the mistakes of previous generations. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Completing': '您目前正在进行破坏挑战。前往一个脆皮要为前辈们错误买单的严苛维度。如果军队被敌人击杀，下一队脆皮将受到超杀伤害750%的伤害。通过 ',
    'Watch': '守望',
    'Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing': '前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 200% of all helium earned up to that point.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%。',
    'Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Relax and let the Trimps figure it out for themselves, you know you want to.': '前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。您知道您本来就想着打打酱油，看着脆皮们自己来就好了。',
    'You have the Watch challenge active. Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Completing': '您目前正在进行守望挑战。前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。在此挑战激活的前提下通过 ',
    'You have the Watch challenge active. "Travel to a strange dimension where life is easier but harder at the same time. At the end of each World Zone any available equipment upgrades will drop, and any unassigned Trimps will be split evenly amongst Farmer, Lumberjack, and Miner. However, resource production and drops from all sources will be halved, and all enemies will deal 25% more damage. Relax and let the Trimps figure it out for themselves, you know you want to."': '您目前正在进行守望挑战。前往一个生活既轻松又艰难的奇怪维度。通过每个区域后，自动获得所有可用的装备重铸升级，且所有未分配工作的脆皮自动平均分配到农民、伐木工和矿工。但是，所有资源获取速度减半，且敌人造成的伤害增加25%。您知道您本来就想着打打酱油，看着脆皮们自己来就好了。',
    'Lead': '领导',
    'Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    'Momentum': '动量',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack. Completing': ' 。在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且防御穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。在此挑战激活的前提下通过 ',
    'with this challenge active will reward you with an additional 300% of all helium earned up to that point.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的300%。',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack.': ' 。在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且防御穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。',
    'You have the Lead challenge active. Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '您目前正在进行领导挑战。前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    'You have the Lead challenge active. "Travel to a dimension where life is easier or harder depending on the time. Odd numbered Zones will cause double resources to be earned from all sources, and will give your Trimps 50% extra attack. Starting an even numbered Zone will cause all enemies to gain 200 stacks of': '您目前正在进行领导挑战。前往一个难度由时间决定的维度。在奇数区域中，脆皮资源获取量翻倍，且攻击力提高50%。在偶数区域中，所有敌人获得200层 ',
    '. Clearing a World cell will cause 1 stack to be lost, and each stack will increase the enemy\'s damage and health by 4%, and block pierce by 0.1%. If your Trimps attack without killing their target, they will lose 0.03% of their health per enemy stack."': ' 。在世界中通过一个格子后敌人失去一层动量，每层动量增加敌人4%的伤害和生命值，并且防御穿透增加0.1%。如果脆皮攻击后没能击杀敌人，它们将根据动量层数，每层受到0.03%生命值的伤害。',
    'Corrupted': '腐化',
    'with this challenge active will reward you with an extra 200% helium earned from any source up to that point, and will instantly transport you back to your normal dimension.': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的200%，并立刻将您送回原来的维度。',
    'Domination': '统治',
    'Travel to a dimension where the strongest Bad Guys gain strength from those weaker than them. Most Bad Guys have 90% less health and attack, but the final Bad Guy in every World Zone and Map has 2.5x more damage, 7.5x more health, and heals for 5% every time they attack your Trimps. But they also drop three times as much Helium! Clearing': '前往一个最强的敌人从比它们弱小的敌人处吸收力量的维度。大部分敌人的生命值和攻击力减少90%，但每个区域最后一个敌人的伤害变为2.5倍，生命值变为7.5倍，且每次攻击的时候恢复5%的生命值。虽然如此，它们也会掉落三倍的氦！通过 ',
    'will also reward you with an extra 100% of helium earned from any source up to that point, and will instantly teleport you back to your normal dimension!': '后，可额外获得氦，数值等于本次挑战完成前氦获取量的100%，并立刻将您送回原来的维度！',
    'You have the Domination challenge active. Travel to a dimension where the strongest Bad Guys gain strength from those weaker than them. Most Bad Guys have 90% less health and attack, but the final Bad Guy in every World Zone and Map has 2.5x more damage, 7.5x more health, and heals for 5% every time they attack your Trimps. But they also drop three times as much Helium! Clearing': '您目前正在进行统治挑战。前往一个最强的敌人从比它们弱小的敌人处吸收力量的维度。大部分敌人的生命值和攻击力减少90%，但每个区域最后一个敌人的伤害变为2.5倍，生命值变为7.5倍，且每次攻击的时候恢复5%的生命值。虽然如此，它们也会掉落三倍的氦！通过 ',
    'Obliterated': '抹杀',
    'Eradicated': '灭绝',
    'However, you\'ll earn 1 extra Coordination per Zone you clear! Oh and Magma, Corruption, and Nature start at Z1.': '但是，您每通过一个区域，可以多获得一个协作升级！另外，岩浆、腐化和自然赋能均从区域1开始出现。',
    'You will unlock this challenge once you reach 4500% Challenge': '欲解锁此挑战，您需要到达4500%的挑战',
    'bonus': '加成',
    'Unlucky': '不幸', //U2挑战
    'Your Trimps will never get far in this harsh Universe without learning how to control their luck. Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality. Clearing the': '在这个严苛的宇宙中，脆皮如果没有学会控制运气，就走不远。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。通过 ',
    'Dimension of Rage (Zone': '暴怒维度 (区域',
    'will complete this Challenge!': '后可以完成此挑战！',
    'Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality.': '调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。',
    'Unlucky Challenge!': '不幸挑战！',
    'You have unlocked a new perk, and your Trimps\' damage has normalized.': '您解锁了一个新的特权，并且脆皮的伤害又回归正常了。',
    'You have the Unlucky challenge active. Your Trimps will never get far in this harsh Universe without learning how to control their luck. Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality. Clearing the': '您目前正在进行不幸挑战。在这个严苛的宇宙中，脆皮如果没有学会控制运气，就走不远。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。通过 ',
    'You have the Unlucky challenge active. "Tweak your Portal to bring you to a an alternate reality where your Trimps\' minimum damage will be drastically lower, but their high end damage will be considerably higher. Each time your Trimps attack, 5 alternate timelines will open up. If the first digit of your Trimps\' minimum attack is even, the timeline where your Trimps did the most damage will become reality. If the first digit is odd, the timeline where your Trimps did the least amount of damage will instead become reality."': '您目前正在进行不幸挑战。调节传送门，将您带到一个脆皮最低伤害大大降低，但最高伤害也会大大增加的异世界。每次脆皮攻击时，产生5条世界线。如果您的最低伤害数值第一位是偶数，那么最终伤害最高的那条世界线会成为现实。如果您的最低伤害数值第一位是奇数，那么最终伤害最低的那条世界线会成为现实。',
    'Downsize': '精简',
    'Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second. Clearing': '调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。通过 ',
    'Prismatic Palace (Zone': '棱镜宫殿 (区域',
    'Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second.': '调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。',
    'Downsize Challenge!': '精简挑战！',
    'You have unlocked a new perk, and your Trimps are once again willing to share houses.': '您解锁了一个新的特权，并且脆皮又愿意分享住房了。',
    'You have the Downsize challenge active. Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second. Clearing': '您目前正在进行精简挑战。调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。通过 ',
    'You have the Downsize challenge active. "Tweak the portal to bring you to an alternate reality, where Trimps are incredibly antisocial and refuse to share a house with any other Trimps. Each housing building will only provide 1 Trimp, but the morale boost and smaller society causes all Trimps to gather 5x as many resources per second."': '您目前正在进行精简挑战。调节传送门，将您带到一个脆皮极度孤僻，无法与其他脆皮分享住房的异世界。每个住房只能容纳1个脆皮，但士气和小族群的加成使脆皮的资源获取速度变为5倍。',
    'Transmute': '变形',
    'Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal. Clearing': '调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。通过 ',
    'Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal.': '调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。',
    'Transmute Challenge!': '变形挑战！',
    'You have the Transmute challenge active. Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal. Clearing': '您目前正在进行变形挑战。调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。通过 ',
    'You have the Transmute challenge active. "Tweak the portal to bring you to an alternate reality where Metal cannot drop or be gathered at all. At the end of each Zone, your Food, Wood, and Science are completely consumed and 75% of the net amount of consumed resources become Metal."': '您目前正在进行变形挑战。调节传送门，将您带到一个金属完全无法通过掉落或者采集获得的异世界。通过每个区域时，木头、食物和科学点会被完全消耗，并以75%的转换率转换为金属。',
    'Unbalance': '不平衡',
    'Your scientists have discovered a new chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can stack to 500. Clearing': '科学家发现了一个新的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。通过 ',
    'Travel to a fun chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%.': '前往一个有趣的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。',
    'You have the Unbalance challenge active. Your scientists have discovered a new chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%. Unbalance can stack to 500. Clearing': '您目前正在进行不平衡挑战。科学家发现了一个新的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。通过 ',
    'You have the Unbalance challenge active. "Travel to a fun chaotic dimension! All enemies have 50% more attack, enemies in world have 100% more health, and enemies in maps have 200% more health. Starting at Zone 6, every time an enemy in the world is slain you will gain a stack of \'Unbalance\'. Every time an enemy in a map is slain, you will lose a stack of Unbalance. Each stack of Unbalance reduces your attack by 1%, but increases your Trimps\' gathering speed by 1%."': '您目前正在进行不平衡挑战。前往一个有趣的混沌维度！所有敌人的攻击力增加50%，世界上敌人的生命值增加100%，并且地图中敌人的生命值增加200%。从区域6开始，每在世界上杀死一名敌人，您获得一层“不平衡”。而每在地图中杀死一名敌人，您失去一层“不平衡”。每层不平衡减少1%攻击力，但增加脆皮1%资源获取速度。不平衡最高叠加到500层。',
    'Bublé': '布累',
    'Tweak the portal to bring you to an alternate reality where Trimps really really don\'t like taking damage. Your Trimps start in this reality with an extra 250% Prismatic Shield, but as soon as they take any damage to health at all, they will refuse to fight again and the challenge will end. Clearing': '调节传送门，将您带到一个脆皮真的真的不喜欢受伤的异世界。脆皮初始拥有250%的额外棱镜护盾，但只要他们的生命值减少了，他们就将拒绝继续战斗，挑战也将以失败告终。在未失败过的前提下通过 ',
    'without failing will complete this Challenge - granting an additional 300% of all Radon earned up to that point. Failing this Challenge will grant an additional 100% of all Radon earned up to the spot where you failed.': '后可以完成此挑战并额外获得氡，数值等于本次挑战完成前氡获取量的300%。挑战失败的话，可额外获得氡，数值等于本次挑战失败前氡获取量的100%。',
    'You have the Bublé challenge active. Tweak the portal to bring you to an alternate reality where Trimps really really don\'t like taking damage. Your Trimps start in this reality with an extra 250% Prismatic Shield, but as soon as they take any damage to health at all, they will refuse to fight again and the challenge will end. Clearing': '您目前正在进行布累挑战。调节传送门，将您带到一个脆皮真的真的不喜欢受伤的异世界。脆皮初始拥有250%的额外棱镜护盾，但只要他们的生命值减少了，他们就将拒绝继续战斗，挑战也将以失败告终。在未失败过的前提下通过 ',
    'Duel': '决斗',
    'It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, any team below 10 points always attacks first, and any team above 50 points gains 3x damage. Clearing': '这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，决斗点数小于10的一方永远抢先攻击，而决斗点数大于50的一方造成3倍伤害。通过 ',
    'It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, Enemies attack first when less than 10 points (': '这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，当敌人决斗点数低于10的时候，它们永远抢先攻击 (',
    'Duel Points': '决斗点数',
    'Trimps cannot become Fast on this Challenge in Challenge': '脆皮无法抢先攻击，因为它们在挑战',
    'mode!': '模式！',
    '), and any team above 50 points gains 3x damage.': ')，而决斗点数大于50的一方造成3倍伤害。',
    'You have the Duel challenge active. It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, any team below 10 points always attacks first, and any team above 50 points gains 3x damage. Clearing': '您目前正在进行决斗挑战。这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，决斗点数小于10的一方永远抢先攻击，而决斗点数大于50的一方造成3倍伤害。通过 ',
    'You have the Duel challenge active. "It\'s your Trimps vs the Bad Guys! Both teams start with 50 points, and both teams\' Crit Chance is locked to the amount of points the OTHER team has. Getting a Critical Strike steals 1 point from the other team, winning a battle steals 2 points, and winning a battle in one hit steals 5 points. Any team below 20 points gains 10x health, Enemies attack first when less than 10 points (': '您目前正在进行决斗挑战。这是脆皮与敌人之间的对决！双方分别以50点决斗点数开始，双方的暴击概率最高为对面的决斗点数。受到暴击的一方从另一方获得1点决斗点数，赢得战斗的一方从另一方获得2点决斗点数，一击赢得战斗的一方从另一方获得5点决斗点数。决斗点数小于20的一方获得10倍生命值，当敌人决斗点数低于10的时候，它们永远抢先攻击 (',
    '), and any team above 50 points gains 3x damage."': ')，而决斗点数大于50的一方造成3倍伤害。',
    'Melt': '熔化',
    'Tweak the portal to bring you to an alternate reality, where there\'s plenty of risk and Radon. You will gain 10x loot (excluding Radon), 10x gathering, and 5x Trimp attack, but a stack of Melt will accumulate every second. Each stack of Melt reduces loot, gathering, and Trimp attack by 1% of the current amount. These stacks reset each time a Zone is cleared and cap at 500. Clearing': '调节传送门，将您带到一个充满危机，也充满氡的异世界中。您的战利品获取量变为10倍(氡除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“熔化”。每层熔化将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的1%。当通过每个区域时层数重置，层数最高为500。通过 ',
    'Melting Point (Zone': '熔点 (区域',
    'or': ' 或者',
    'will complete this Challenge - granting an additional 400% of all Radon collected through Z50. This Challenge is repeatable!': '后可以完成此挑战并额外获得氡，数值等于本次挑战到区域50为止氡获取量的400%。此挑战可重复完成！',
    'You have the Melt challenge active. Tweak the portal to bring you to an alternate reality, where there\'s plenty of risk and Radon. You will gain 10x loot (excluding Radon), 10x gathering, and 5x Trimp attack, but a stack of Melt will accumulate every second. Each stack of Melt reduces loot, gathering, and Trimp attack by 1% of the current amount. These stacks reset each time a Zone is cleared and cap at 500. Clearing': '您目前正在进行熔化挑战。调节传送门，将您带到一个充满危机，也充满氡的异世界中。您的战利品获取量变为10倍(氡除外)，资源获取速度变为10倍，且脆皮的攻击力变为5倍，但每秒都会增加一层“熔化”。每层熔化将战利品获取量、资源获取速度和脆皮攻击力减少当前数量的1%。当通过每个区域时层数重置，层数最高为500。通过 ',
    'Trappapalooza': '捕手道达人',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also seem to release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. So like, be careful of that. Clearing': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。所以，请小心这点。通过 ',
    'Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. But you know to be careful of that.': '前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。您知道的，要小心这点。',
    'You have the Trappapalooza challenge active. Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also seem to release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. So like, be careful of that. Clearing': '您目前正在进行捕手道达人挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。所以，请小心这点。通过 ',
    'You have the Trappapalooza challenge active. "Travel to a dimension where Trimps refuse to breed in captivity, teaching you to stop breeding such weak Trimps. Trimps also release an unfortunate burst of radiation when Trapped in this reality, instantly destroying 10% of your stored Food, Wood, Metal, and Science. But you know to be careful of that."': '您目前正在进行捕手道达人挑战。前往一个被抓住的脆皮拒绝繁殖的维度。在那里可以让您学会停止繁殖这些弱鸡脆皮。另外，在此异世界中脆皮被抓住时，会释放出一种不幸念波，将当前10%的食物、木头、金属和科学点立刻摧毁。您知道的，要小心这点。',
    'Quagmire': '泥淖',
    'Travel to an extremely muddy dimension. It\'s hard to walk out here, making Overkill useless and Agility difficult. Your Trimps start each run with 100 stacks of Motivated, increasing all Loot gained by 40% per stack (including Radon). After each Zone, your Trimps gain 1 stack of Exhausted, reducing Trimp damage and breed speed by 10% per stack in the World, and 5% per stack in maps (compounding). For every 10 stacks of Exhausted, your Trimps will also attack 100ms slower. You\'ll also have access to run a special map called \'The Black Bog\', which will always scale to Zone level and is such a terrifying map that Exotic Imp-orts are unable to spawn there. Completing \'The Black Bog\' will reduce your Trimps\' Exhausted by 1 stack, but will also reduce their Motivated by 1 stack. Exhausted stacks can be negative, and will increase damage and breed speed. Completing Z70 or reaching 0 Motivated stacks with this Challenge active will end the Challenge, returning the World to normal. If the Challenge is ended by completing Z70, you will gain an additional 150% of all Radon earned.': '前往一个异常泥泞的维度。此维度极难行走，所以超杀无法触发，且敏捷变得更加困难。脆皮初始拥有100层“积极前进”，每层增加40%的资源获取量(包括氡)。通过每个区域以后，脆皮获得1层“疲惫不堪”，每层使脆皮的伤害和繁殖速度在世界中减少10%，在地图中减少5%(效果叠乘)。且每有10层疲惫不堪，脆皮攻击就减慢100ms。但同时，您可以进入一张叫做“黑色沼泽”的地图，此地图等级永远等于区域层数，且无法生成奇异外皮。通过一次黑色沼泽将同时减少1层疲惫不堪和1层积极前进。疲惫不堪层数可以为负数，此时它将提高脆皮伤害及繁殖速度。通过区域70或者积极前进层数到达0后，挑战结束，世界将恢复正常。如果挑战以通过区域70结束的话，那么您还可以额外获得氡，数值等于本次挑战完成前氡获取量的150%。',
    'The Black Bog': '黑色沼泽',
    'Motivated': '积极前进', //包括成就描述
    'Exhausted': '疲惫不堪',
    'You have the Quagmire challenge active. Travel to an extremely muddy dimension. It\'s hard to walk out here, making Overkill useless and Agility difficult. Your Trimps start each run with 100 stacks of Motivated, increasing all Loot gained by 40% per stack (including Radon). After each Zone, your Trimps gain 1 stack of Exhausted, reducing Trimp damage and breed speed by 10% per stack in the World, and 5% per stack in maps (compounding). For every 10 stacks of Exhausted, your Trimps will also attack 100ms slower. You\'ll also have access to run a special map called \'The Black Bog\', which will always scale to Zone level and is such a terrifying map that Exotic Imp-orts are unable to spawn there. Completing \'The Black Bog\' will reduce your Trimps\' Exhausted by 1 stack, but will also reduce their Motivated by 1 stack. Exhausted stacks can be negative, and will increase damage and breed speed. Completing Z70 or reaching 0 Motivated stacks with this Challenge active will end the Challenge, returning the World to normal. If the Challenge is ended by completing Z70, you will gain an additional 150% of all Radon earned.': '您目前正在进行泥淖挑战。前往一个异常泥泞的维度。此维度极难行走，所以超杀无法触发，且敏捷更加困难。脆皮初始拥有100层“积极前进”，每层增加40%的资源获取量(包括氡)。通过每个区域以后，脆皮获得1层“疲惫不堪”，每层使脆皮的伤害和繁殖速度在世界中减少10%，在地图中减少5%(效果叠乘)。且每有10层疲惫不堪，脆皮攻击就减慢100ms。但同时，您可以进入一张叫做“黑色沼泽”的地图，此地图等级永远等于区域层数，且无法生成奇异外皮。通过一次黑色沼泽将同时减少1层疲惫不堪和1层积极前进。疲惫不堪层数可以为负数，此时它将提高脆皮伤害及繁殖速度。通过区域70或者积极前进层数到达0层后，挑战结束，世界将恢复正常。如果挑战以通过区域70结束的话，那么您还可以额外获得氡，数值等于本次挑战完成前氡获取量的150%。',
    'Wither': '凋零',
    'Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Clearing': '前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。通过 ',
    'will complete this Challenge.': '后可以完成此挑战。',
    'Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost.': '前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。',
    'Hardened': '硬化',
    'Horror': '恐惧',
    'Wither Immunity': '免疫凋零',
    'Enemies cannot heal or inflict Wither while your Trimps have Wither Immunity.': '当脆皮免疫凋零时，敌人无法恢复生命值，也无法触发凋零。',
    'You have the Wither challenge active. Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost. Clearing': '您目前正在进行凋零挑战。前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。通过 ',
    'You have the Wither challenge active. "Travel to an ultra scary alternate reality with horrific Bad Guys. Enemies heal for 25% of their maximum health before each attack. If an enemy ever heals itself back to 100% health, your army will fall to despair and instantly wither away. Every enemy slain by your Trimps in the World or World-level Maps grants 1 stack of Hardness to your Trimps (stacking up to 10,000 and increasing Health by 0.1% per stack) and 1 stack of Horror to all enemies (increasing Attack by 0.05% per stack). Whenever a group of Trimps is killed by Wither, Trimps lose half of their stacks of Hardness and block the enemy\'s ability to heal and Wither for an amount of cells equal to 10% of the Hardness stacks lost."': '您目前正在进行凋零挑战。前往一个充满了极度可怕敌人的异世界。敌人在每次攻击前恢复最大生命值25%的生命值。如果敌人将生命值恢复到了100%，那么军队将因绝望而直接凋零灭绝。在世界上或者是等同于当前区域数等级的地图中杀死1名敌人后，您可以获得一层“硬化”(最高10000层，每层增加0.1%生命值)，并且使所有敌人获得一层“恐惧”(每层增加0.05%攻击力)。如果脆皮死于凋零，那么脆皮将失去一半的硬化层数，并且在失去的层数数值10%的格子内，敌人无法恢复生命值，也无法触发凋零。',
    'Revenge': '复仇',
    'Travel to an exceptionally harsh dimension filled with vengeful creatures, including the Trimps. Enemies have 10x health on even zone numbers. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Any time a group of Trimps is killed by this Overkill damage, your Trimps gain a stack of \'Revenge\', increasing their Attack and Health by 20% (additive). However if your Trimps ever reach 20 stacks of Revenge, you will instantly fail the Challenge. Clearing': '前往一个包括脆皮在内所有生物睚眦必报的极端严苛维度。在偶数区域内敌人生命值变为10倍。如果军队被敌人击杀，下一队脆皮将受到超杀伤害750%的伤害。每有一队脆皮死于超杀伤害，脆皮将获得1层“复仇”，每层复仇增加20%攻击力和生命值(相互叠加)。但如果脆皮复仇层数到达了20层，挑战将失败。在复仇层数小于20的前提下通过 ',
    'with less than 20 stacks of Revenge will complete this Challenge.': '后可以完成此挑战。',
    'You have the Revenge challenge active. Travel to an exceptionally harsh dimension filled with vengeful creatures, including the Trimps. Enemies have 10x health on even zone numbers. If your army is killed at any point, any overkill damage will be applied 750% to the next group of Trimps to fight. Any time a group of Trimps is killed by this Overkill damage, your Trimps gain a stack of \'Revenge\', increasing their Attack and Health by 20% (additive). However if your Trimps ever reach 20 stacks of Revenge, you will instantly fail the Challenge. Clearing': '您目前正在进行复仇挑战。前往一个包括脆皮在内所有生物睚眦必报的极端严苛维度。在偶数区域内敌人生命值变为10倍。如果军队被敌人击杀，下一队脆皮将受到超杀伤害750%的伤害。每有一队脆皮死于超杀伤害，脆皮将获得1层“复仇”，每层复仇增加20%攻击力和生命值(相互叠加)。但如果脆皮复仇层数到达了20层，挑战将失败。在复仇层数小于20的前提下通过 ',
    'Quest': '任务',
    'Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest progress. Clearing': '前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。通过 ',
    'will complete this Challenge, returning Trimp Attack and Enemy Health to normal.': '后可以完成此挑战，并使脆皮攻击力和敌人生命值恢复正常。',
    'Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest prorgress.': '前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。',
    'Quintuple (x5) your food': '将食物变为5倍',
    'Quintuple (x5) your wood': '将木头变为5倍',
    'Quintuple (x5) your metal': '将金属变为5倍',
    'Quintuple (x5) your gems': '将宝石变为5倍',
    'Quintuple (x5) your science': '将科学点变为5倍',
    'Double your food': '将食物变为2倍',
    'Double your wood': '将木头变为2倍',
    'Double your metal': '将金属变为2倍',
    'Double your gems': '将宝石变为2倍',
    'Double your science': '将科学点变为2倍',
    'Complete 5 Maps at Zone level': '通过5张等级为区域层数的地图',
    'One-shot 5 world enemies (Overkill is disabled in World until complete)': '秒杀世界上的5名敌人(直到任务完成为止，超杀在世界上暂时失效)',
    'Don\'t let your shield break before Cell': '护盾不可破碎，直到到达格子',
    'Don\'t run a map before Cell': '不进入地图，直到到达格子',
    'Buy a Smithy': '建造一个铁匠铺',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Quest Complete!': '任务内容：护盾不可破碎，直到到达格子100。进度：任务完成！',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Failed!': '任务内容：护盾不可破碎，直到到达格子100。进度：任务失败！',
    'Quest: Don\'t let your shield break before Cell 100. Progress: Still Earnable!': '任务内容：护盾不可破碎，直到到达格子100。进度：仍然可获得！',
    'Quest: Don\'t run a map before Cell 100. Progress: Quest Complete!': '任务内容：不进入地图，直到到达格子100。进度：任务完成！',
    'Quest: Don\'t run a map before Cell 100. Progress: Failed!': '任务内容：不进入地图，直到到达格子100。进度：任务失败！',
    'Quest: Don\'t run a map before Cell 100. Progress: Still Earnable!': '任务内容：不进入地图，直到到达格子100。进度：仍然可获得！',
    'Quest: Buy a Smithy. Progress: Quest Complete!': '任务内容：建造一个铁匠铺。进度：任务完成！',
    'Quest: Buy a Smithy. Progress: 0 / 1': '任务内容：建造一个铁匠铺。进度： 0 / 1',
    '. Good luck!': ' 。祝您好运！',
    'You have the Quest challenge active. Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest progress. Clearing': '您目前正在进行任务挑战。前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。通过 ',
    'You have the Quest challenge active. "Travel to an alternate reality where Trimps really love questing. Enemies in this reality gain 10% extra health each zone starting at Z6 (compounding). However, you\'ll also get a random Quest each Zone starting at 6. Completing this quest will grant a 2x Radon multiplier for the rest of the Zone (does not stack), and will increase your Trimps\' attack by 10% for the rest of the Challenge (compounding). Check messages or the Zone info tooltip for quest prorgress."': '您目前正在进行任务挑战。前往一个脆皮喜欢任务的异世界。此异世界中敌人从区域6开始，每层增加10%生命值(相互叠乘)。但同样从区域6开始，您每层也会获得一个随机任务。完成一个任务后，在此区域剩下的格子内氡获取量变为2倍(不叠加)，且脆皮攻击力在挑战期间增加10%(相互叠乘)。任务进度可以在消息框或区域信息提示框处查看。',
    'Archaeology': '考古学',
    'Travel to a dimension with lots of buried Relics. When starting this challenge, you\'ll be granted access to 5 special new upgrades called Relics that grant a compounding increase to your Attack, Breed Speed, Radon, Resource Gain (Food, Wood, Metal, Science and Gems), and one that decreases Enemy Attack. These upgrades all cost science and increase in cost whenever any of them are purchased. However, your Attack, Breed Speed, Radon, Resource Gain, and Enemy Health Relics all decrease by 1 Relic level every Zone and can go negative. All Radon drops have a base increase of +200% in this dimension, but taking the time to find the relics and extra Radon disables the possibility of using Overkill in the World. Completing': '前往一个埋藏了大量遗物的维度。开始此挑战后，您可以获得5个特殊的遗物升级。遗物升级分别可以提升脆皮攻击力、繁殖速度、氡获取量、非氡资源获取量(食物、木头、金属、科学点和宝石)，另外还有一个减少敌人攻击力的遗物升级。这些升级消耗科学点，且在购买了其中任何一个升级以后，所有的升级花费都会增加。不过，您的攻击力、繁殖速度、氡获取量、非氡资源获取量、敌人攻击力遗物每通过1个区域就降低1级，而且等级可以为负数。此维度中氡基础获取量增加200%，但由于需要花费时间去搜寻遗物和额外的氡，因此无法在世界上触发超杀。在此挑战激活的前提下通过区域 ',
    'with this Challenge active will grant an additional +500% of all Radon earned. After the first time you complete this Challenge, you\'ll gain the ability to create maps with Small and Large Research Caches!': '后，可额外获得氡，数值等于本次挑战完成前氡获取量的500%。并且首次完成此挑战以后，您就可以制造前缀为小研究储藏箱和大研究储藏箱的地图了。',
    'The Archaeology Automator is any Archaeologist\'s best friend (once they figure out how to use it)! Below you\'ll need to enter a string for the Automator to parse. Your string should be separated by commas, and will indicate priority for Relic purchases.': '自动考古是考古学家们最好的朋友(只要他们明白了使用方法)！最下方的输入框中，您可以输入一串字符，让自动考古进行分析。您输入的字符需要用英文逗号来分隔，并且将决定遗物升级的顺序。',
    'An example of a viable string would be \'-10a,5s,5r,10s,10r,5a\'.': '可行的字符串可举例如下：“-10a,5s,5r,10s,10r,5a”。',
    'Use \'a\' for trimp Attack, \'e\' for Enemy attack, \'r\' for Radon, \'s\' for reSource, and \'b\' for Breed speed.': 'a代表脆皮攻击力，e代表敌人攻击力，r代表氡获得量，s代表非氡资源获取量，b代表繁殖速度。',
    'As previously stated, each rule (separated by commas) in this string dictates the priority of that particular upgrade. With the given example string, the Automator will first buy Trimp Attack Relics until they\'re at or above -10, then will attempt to get the Resource Relic up to positive 5 points, then it will do the same with Radon. Once all of these Relics lose a point, the Automator will go back and fill Attack back up to -10 first, then Resource back up to 5, then Radon back to 5, then will move on to trying to get Resource to 10. Each time points are lost in a Relic, or if the Automator string is modified, the Automator will start back at the first rule and work its way back up.': '如上所述，字符串中每一条规则(由逗号分隔开来的)决定了特定升级的顺序。如果输入上面举例的字符串，那么自动考古将会先购买脆皮攻击力遗物，直到它达到或者超过-10级，接下来它将会购买非氡资源获取量遗物，直到5级，最后再购买氡获取量遗物。之后以此类推。当所有遗物等级减少1级以后，或者自动考古字符串变更了以后，自动考古将从头读取字符串，重新按照字符串的顺序从头开始升级，直到字符串末尾。注意：请正确输入字符串(只使用上述五个字母，字母前后正确使用数字和逗号，并且数字不可超过50，规则不可超过25条)，否则上方会有红字报错。',
    'Purchase when the Relic cost is less than or equal to': '当遗物的花费小于或等于总科学点数的',
    'of your total Science': '时，购买遗物升级',
    'Hold Ctrl while clicking any relic upgrade to access the Relic Automator!': '按下Ctrl键再点击任意遗物升级，可进入自动考古设置！',
    'Attack Relic': '脆皮攻击力遗物',
    'Enemy Attack Relic': '敌人攻击力遗物',
    'Radon Relic': '氡获取量遗物',
    'Resource Relic': '非氡资源获取量遗物',
    'Breed Relic': '繁殖速度遗物',
    'You have the Archaeology challenge active. Travel to a dimension with lots of buried Relics. When starting this challenge, you\'ll be granted access to 5 special new upgrades called Relics that grant a compounding increase to your Attack, Breed Speed, Radon, Resource Gain (Food, Wood, Metal, Science and Gems), and one that decreases Enemy Attack. These upgrades all cost science and increase in cost whenever any of them are purchased. However, your Attack, Breed Speed, Radon, Resource Gain, and Enemy Health Relics all decrease by 1 Relic level every Zone and can go negative. All Radon drops have a base increase of +200% in this dimension, but taking the time to find the relics and extra Radon disables the possibility of using Overkill in the World. Completing': '您目前正在进行考古学挑战。前往一个埋藏了大量遗物的维度。开始此挑战后，您可以获得5个特殊的遗物升级。遗物升级分别可以提升脆皮攻击力、繁殖速度、氡获取量、非氡资源获取量(食物、木头、金属、科学点和宝石)，另外还有一个减少敌人攻击力的遗物升级。这些升级消耗科学点，且在购买了其中任何一个升级以后，所有的升级花费都会增加。不过，您的攻击力、繁殖速度、氡获取量、非氡资源获取量、敌人攻击力遗物每通过1个区域就降低1级，而且等级可以为负数。此维度中氡基础获取量增加200%，但由于需要花费时间去搜寻遗物和额外的氡，因此无法在世界上触发超杀。在此挑战激活的前提下通过区域 ',
    'Mayhem': '暴乱',
    'Travel to a very hectic dimension. The final Cell of each Zone is a Poisonous boss enemy, and all Map enemies are also Poisonous. Poisonous Enemies stack 20% of their damage on your Trimps as poison, which is taken as damage after each attack until your Trimps die. Each Zone starts with 1000 stacks of Mayhem, and each stack increases the damage and health of the final Cell Boss Enemy for that Zone by 10%. Completing a map reduces the Mayhem stacks for that Zone by 1 and an additional 1 for each level of the Map above the Zone\'s level (For example, a level 15 map will remove 3 stacks per completion when at Z13). Completing': '前往一个非常狂热的维度。每个区域最后一格的首领敌人是带毒的，地图中的所有敌人同样带毒。带毒的敌人每次攻击后，将它们攻击力的20%累积为毒伤害，脆皮每次攻击后，都会受到相应的毒伤害，直到脆皮死亡后毒伤害清零。您进入每个区域时获得1000层“暴乱”，每层暴乱提升区域最后一格首领10%的攻击力和生命值。完成地图可以减少1层暴乱，且该地图每高于当前区域1级，就可以额外减少1层暴乱(例如：在区域13完成一张15级的地图以后，可以减少3层暴乱)。在此挑战激活的前提下通过区域 ',
    'with this Challenge active will grant your Trimps a permanent, stacking, additive': '后，宇宙2中的氡，及宇宙1和宇宙2中的脆皮攻击力和生命值永久增加 ',
    'bonus to Radon in U2 and to Trimp Attack and Health in Universes 1 and 2. Each time Mayhem is completed, the reward for next time increases by an additional 10% and Enemies gain 3x damage and health for all future runs of Mayhem.': '(相互叠加)。且每完成一次暴乱挑战，下次挑战的奖励就增加20%，但后续暴乱挑战中，敌人也会增加3倍攻击力和生命值。',
    'Your Trimps are Poisoned! They take': '脆皮中毒了！每次攻击后受到 ',
    'damage after each attack. Poison bypasses Prismatic Shield!': '点伤害。毒伤害可以穿透棱镜护盾！',
    'You have the Mayhem challenge active. Travel to a very hectic dimension. The final Cell of each Zone is a Poisonous boss enemy, and all Map enemies are also Poisonous. Poisonous Enemies stack 20% of their damage on your Trimps as poison, which is taken as damage after each attack until your Trimps die. Each Zone starts with 1000 stacks of Mayhem, and each stack increases the damage and health of the final Cell Boss Enemy for that Zone by 10%. Completing a map reduces the Mayhem stacks for that Zone by 1 and an additional 1 for each level of the Map above the Zone\'s level (For example, a level 15 map will remove 3 stacks per completion when at Z13). Completing': '您目前正在进行暴乱挑战。前往一个非常狂热的维度。每个区域最后一格的首领敌人是带毒的，地图中的所有敌人同样带毒。带毒的敌人每次攻击后，将它们攻击力的20%累积为毒伤害，脆皮每次攻击后，都会受到相应的毒伤害，直到脆皮死亡后毒伤害清零。您进入每个区域时获得1000层“暴乱”，每层暴乱提升区域最后一格首领10%的攻击力和生命值。完成地图可以减少1层暴乱，且该地图每高于当前区域1级，就可以额外减少1层暴乱(例如：在区域13完成一张15级的地图以后，可以减少3层暴乱)。在此挑战激活的前提下通过区域 ',
    //挑战相关结束
    //特权相关
    'Looting II': '劫掠 II',
    'Apply your skills at salvaging things from the Spire to increase all loot gained by 0.25% per level. The price for this perk increases additively, and each level will cost exactly 10000 more than the previous level.': '将您搜刮尖塔的本事用在劫掠上，每级提升0.25%劫掠效果。此特权的价格线性增加，每级都比上一级贵10000。',
    'Carpentry II': '木工 II',
    'You\'ve learned to look more objectively at the no longer mysterious building designs, allowing you to increase housing space by 0.25% per level. This multiplies on top of Carpentry I, but the bonus stacks additively. The price for this perk also increases additively, and each level will cost exactly 10000 more than the previous level.': '那些建筑图纸对您来说已经不再神秘了，您也学会了如何更客观地看待它们，每级可以增加0.25%居住空间。此加成与木工的效果叠乘，但加成是线性的。此特权的价格也是线性增加的，每级都比上一级贵10000。',
    'Motivation II': '鼓舞 II',
    'Corruption and impending doom are great motivators to work a bit harder! Increases Trimp gather speed by 1% per level. The price for this perk increases additively, and each level will cost exactly 1000 more than the previous level.': '腐化与死亡威胁可以更好地鼓舞脆皮们工作！每级提升脆皮1%的资源获取速度。此特权的价格线性增加，每级都比上一级贵1000。',
    'Power II': '力量 II',
    'You find strength in the desire to some day return home. Anger your Trimps by making them listen to you talk about it all the time, increasing their damage by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.': '回家的渴望给了您力量。对着脆皮一直不停地说，以此激怒它们从而每级增加1%攻击力。此特权的价格线性增加，每级都比上一级贵500。',
    'Toughness II': '坚韧 II',
    'You feel more grounded as you remember where you came from. Spread your toughness to your Trimps, increasing health by 1% per level. The price for this perk increases additively, and each level will cost exactly 500 more than the previous level.': '想起故乡在何方以后，您感觉更踏实了。用这些教会脆皮何为坚韧，每级增加1%生命值。此特权的价格线性增加，每级都比上一级贵500。',
    'Capable': '能力',
    'You can sense great power within Fluffy, but he\'ll need some training. Each level of Capable allows Fluffy to gain 1 level of Experience. Respeccing to remove Capable will temporarily remove any bonuses associated with Fluffy\'s level and Experience, but all Exp will be saved until you add points back. Each level of Capable is 10x more expensive than the last, and buying the first level will allow Fluffy to take Portals with you.': '绒绒潜力巨大，但它需要接受训练。每级能力特权都可以让绒绒多获得1级经验值。此特权洗点后，绒绒相应的等级和经验值加成会暂时失效，但重新加点后一切就会恢复。每级能力特权都比上一级贵10倍，购买1级以后，绒绒可以跟您一起通过传送门。',
    'Cunning': '灵巧',
    'Fluffy demands more helium! Each level of Cunning will increase the final amount of Experience Fluffy gains from each Zone by 25% (additive).': '绒绒想要更多的氦！每级灵巧将绒绒每个区域获得的经验值增加25%(相互叠加)。',
    'Curious': '好奇',
    'Fluffy is coming along, but he\'s coming along slowly. Each point of Curious will speed up Fluffy\'s progression by adding 60 Exp to the base amount he gains per Zone clear.': '绒绒在进步, 但还不够快。每级好奇可以将通过区域的基础经验奖励增加60。',
    'Classy': '上等',
    'Overkill': '超杀',
    'You have overcome the otherworldly objective of obtaining Overkill, outstanding! Each level of this perk will allow 0.5% of your overkill damage to harm the next enemy. If this damage kills the next enemy, you will lose no time moving through that cell. Maximum of 30 levels.': '您已经获得了超凡脱俗的超杀升级，非常出色！每级可以将0.5%的超杀伤害用来攻击下个敌人。如果下个敌人被此伤害击杀，那么您就可以直接通过该格子了。最高30级。',
    'Resourceful': '足智多谋',
    'Spending time with limited maps has taught you how to be more resourceful. Each level will allow you to spend 5% fewer resources': '经历过只能制作有限的地图以后，您学会了如何变得更加足智多谋。每级可以让所有建筑 ',
	'per level on all structures.': '少花费5%的资源。',
    'Coordinated': '协同', //包括成就描述
    'Use knowledge gained while studying Coordinated Bad Guys to reduce the amount of Trimps required per level of Coordination by': '通过研究协同作战的敌人，您明白了如何减少协作升级所需的脆皮。每级可以将协作升级所需的脆皮数量减少',
	'of current amount (compounding': '(叠乘',
	'while keeping the stat bonus the same.': '同时协作的加成不变。',
	'Siphonology': '虹吸学',
    'Use strategies discovered in alternate dimensions to siphon Map Bonus Damage stacks from lower level maps. For each level of Siphonology, you will earn stacks from maps one level lower than your current Zone number. Maximum of 3 levels.': '在其他维度中，您找到了从更低级的地图中虹吸地图奖励的方法。每级虹吸学可以从比当前区域低1级的地图中获取地图奖励。最高3级。',
    'Anticipation': '预期',
	'Resilience': '弹性',
    'Use your acquired skills in Trimp strengthening to gain a': '利用您的脆皮强化技能，使脆皮生命值每级增加',
	'compounding': '(效果叠乘)',
	'increase to total Trimp health.': '。',
	'Meditation': '冥想',
    'Your experiences in the Dimension of Strong Things have taught you the value of taking your time. Every level of Meditation will increase your Trimps\' gather speed by 1% for every 10 minutes spent on the same Zone, up to 1 hour, even when offline. This bonus is reset after clearing the current Zone. Maximum of 7 levels.': '经历过那个敌人强化的维度后，您明白了慢条斯理的价值。每在同一个区域停留10分钟，每级冥想就可以使脆皮的资源获取速度增加1%。此加成时间上限1小时，离线生效。通过当前区域后此加成重置。最高7级。',
    'Relentlessness': '无情',
    'You\'ve seen too many Trimps fall, it\'s time for more aggressive training. Bringing back these memories will cause your Trimps to gain a 5% chance to critically strike for +130% damage at level 1, and they will gain an additional 5% crit chance and 30% crit damage per level. Maximum of 10 levels.': '脆皮死的太多，该让它们进行更积极的训练了。带回这些记忆后，脆皮在第1级可以获得5%暴击率，暴击伤害增加130%，且此后每级增加5%暴击率，暴击伤害30%。最高10级。',
    'Greed': '贪婪',
    'Feeling poor? Just get more resources! Each level increases all loot gained by 2.5% (compounding). Starting once you have 600 Tributes, every Tribute you purchase (up to 1250) will': '感觉太穷了？那就想办法多搞点资源！每级可以使所有战利品获取量增加2.5%(相互叠乘)。而且当拥有600贡品后(效果上限1250贡品)，每个贡品还可以使该加成的数值 ',
    'add': '增加',
    '0.015% to the compounding bonus. Every 25th Tribute you purchase will also add an additional 0.35% to the compounding bonus. For example: If you have 750 Tributes, you\'ll earn a 6.8% compounding Loot bonus for each level of Greed.': '0.015%。另外每25个贡品还会使此数值额外再增加0.35%。举个例子：如果您有750个贡品，那么每级贪婪的叠乘加成为6.8%。',
    'Tenacity': '坚持', //包括成就描述
    'If things seem tough, just try hitting them harder. Each level increases your Trimps\' Attack by 10% (compounding). For every 4 minutes you spend on one Zone, 1% is': '如果敌人皮糙肉厚的话，只需要更用力就行了。每级提升脆皮10%的攻击力(相互叠乘)。并且每在一个区域停留4分钟，该加成的数值再 ',
    'added': '增加',
    'to the compounding bonus, with a max of 2 hours and resetting back to 10% at the start of each new Zone. For example: If you have spent an hour on one Zone, you\'ll earn a 25% compounding Attack bonus for each level of Tenacity.': '1%，此加成时间上限为2小时，进入新区域以后重置回10%。举个例子：如果您在一个区域停留了1个小时，那么每级坚持的叠乘加成为25%。',
    'Criticality': '暴击限界',
    'When your Critical Strikes just aren\'t doing enough, try Criticality! Each level increases your Trimps\' Critical Strike Damage by 10% (additive).': '觉得暴击伤害不够看？试试暴击限界吧！每级提升脆皮10%的暴击伤害(相互叠加)。',
    'Equality': '平等',
    'Produce a Calming Aura from your Portal Device, reducing the Attack of Bad Guys AND Trimps by 10% (compounding). You can enable Equality Scaling, which causes Equality to start inactive and gain one level each time your Trimps die up to your purchased Perk level.': '用传送门装置发出一个镇静力场，同时减少脆皮和敌人10%的攻击力(相互叠乘)。您也可以激活平等缩放，激活后，平等在一开始不生效，而脆皮每阵亡一次，平等效果增加一级，最高等于您的平等特权等级。',
	'Carpentry': '木工',
    'You\'ve built quite a few houses and you\'re getting pretty good at it. Bringing your expertise in construction back through the portal will allow you to house 10% more Trimps per level': '您已经建了很多房子，干这事您已经很熟练了。之前建造的心得使您每级可以比上一级多容纳10%的脆皮',
	'than the current amount (compounds': '(相互叠乘',
    'Artisanistry': '手艺娴熟',
    'You\'re beginning to notice ways to make equally powerful equipment with considerably fewer resources. Bringing back these new ideas will allow you to spend 5% fewer resources': '对于如何用更少的资源制造同样强度的装备，您已经有了头绪。每级可以使您在制造装备时 ',
    'than the current cost': '比上一级',
    'per level on all equipment.': '少花费5%的资源。',
	'Range': '范围',
    'Use your new-found leadership skills in order to increase the minimum damage your Trimps deal by 2% per level. Stacks up to 10 times, doesn\'t affect max damage. At 10 levels, you will get a minimum of 100% benefit from all attack damage per strike.': '您新发现的领导技艺可以帮助提高脆皮的最低伤害。每级提高2%脆皮的最低伤害。最高10级，且不会影响最高伤害。10级时，每次攻击至少造成100%的伤害。',
    'Agility': '敏捷',
    'Crank your portal into overdrive, increasing the clock speed of the Universe. Each level reduces the time between Trimp and Bad Guy attacks by': '把您的传送门调成超速，增加宇宙中的时间流速。每级可使脆皮和敌人的攻击间隔比上一级减少',
	'of the current time (compounds': '(相互叠乘',
	'. Maximum of 20 levels.': '。最高20级。',
    'Bait': '诱饵',
    'A few of these in your traps are sure to bring in extra Trimps. Each level allows traps to catch 1 extra Trimp.': '放点这些东西在陷阱里，就肯定能多抓到一些脆皮。每级使陷阱多抓1个脆皮。',
    'Trumps': '王牌',
    'Practicing aggressive strategizing allows you to earn 1 extra max population from each battle territory bonus.': '实施激进的战略以后，每个战斗领土加成可以额外获得1点人口上限。',
    'Pheromones': '信息素',
    'Bring some pheromones with you to ensure that your Trimps will permanently breed 10% faster.': '带上一些信息素，可以确保脆皮繁殖速度永久增加10%。',
    'Packrat': '囤积成瘾',
    'Study the ancient, secret Trimp methods of hoarding. Each level increases the amount of stuff you can shove in each Barn, Shed, and Forge by 20%.': '研究古老神秘的贮藏方法。谷仓、窝棚和锻造厂每级增加20%存储上限。',
    'Motivation': '鼓舞',
    'Practice public speaking with your Trimps. Each level increases the amount of resources that workers produce by 5%.': '练习在脆皮面前进行演讲。每级增加5%工人的资源获取量。',
    'Power': '力量',
    'Trimps learn through example. Spending some time bench pressing dead Elephimps should inspire any future Trimps to become stronger too. Adds 5% attack permanently to your Trimps.': '脆皮通过实例来学习。花点时间用死去的脆皮象练习卧推可以让它们变得更加强大。永久增加脆皮5%攻击力。',
    'Toughness': '坚韧',
    'Pay your Trimps to knock you around a little bit. By learning to not be such a wuss, your Trimps will be less wussy as well. Adds 5% health permanently to your Trimps.': '让您的脆皮跟您对着比划几下，好好学学什么是纯爷们。永久增加脆皮5%生命值。',
    'Looting': '劫掠',
    'Walk back through the empty Zones, learning how to milk them for every last drop. Each level permanently increases the amount of resources gained from battle by 5%.': '回到之前的区域，学会如何榨干敌人身上的每一个铜板。每级永久增加5%战利品获取量。',
    'Prismal': '棱镜化',
    'Crystallize some Radon, creating an interdimensional Prism that you can carry back through Portals. Each level adds 1% to your Trimps\' Prismatic Shield and makes your Trimps feel 5% more comfortable in battle. Once you have 20 or more points of Prismal, you will automatically collect Prismalicious from the Prismatic Palace after completing Z20.': '将一些氡晶化，制造一个超次元的棱镜，这样就可以带着它通过传送门了。每级增加1%的棱镜护盾，并且可以使脆皮在战斗中舒适度增加5%（译者注：后半句无实际效果）。当棱镜化特权等级到达20级以上后，您就可以在通过区域20后自动获得棱镜宫殿的优质棱镜升级。',
    //特权相关结束
    //专精相关
    'Portal Generator': '传送门生成器',
    'Unlock Portal immediately after clearing Z20.': '通过区域20以后立刻解锁传送门。',
    'Bionic Magnet I': '仿生磁铁 I',
    'Automatically pick up each level of Bionic Wonderland (BW) as you pass a BW Zone. Will not work if you have already missed any BWs this run, or if you reach a Zone higher than any BW you have ever cleared before.': '自动通过仿生仙境，如果之前已经错过仿生仙境，或者之前未手动通过该层仿生仙境，则无效。',
    'In addition, give all current and future copies of Bionic Wonderland the \'Fast Attacks\' special modifier.': '另外，所有仿生仙境地图视为具有“快速进攻”特殊修饰符。',
    'Turkimp Tamer I': '脆皮火鸡饲主 I',
    'Increases the chance of finding a Turkimp by 33%, the bonus time from each Turkimp by 5 minutes, and increases the time cap by 10 minutes.': '脆皮火鸡出现率增加33%，加成持续时间增加5分钟，加成上限时间增加10分钟。',
    'Home Detector': '家园探测器',
    'Unlock Mansion, Hotel, Nursery, Resort, Gateway, Wormhole, and Collector automatically when passing the Zone they drop at.': '通过对应区域后立刻解锁豪宅、宾馆、托儿所、度假村、维度裂隙、虫洞和汲能设施。',
    'Bounty Hunter': '赏金猎人',
    'Unlock Bounty immediately after clearing Z15.': '通过区域15后立刻解锁赏金升级。',
    'Explorer Aura I': '探险家光环 I',
    'Automatically picks up SpeedExplorer books when you pass their Zone.': '通过对应区域后立刻解锁探险家加速升级。',
    'Void Power I': '虚空力量 I',
    'Your Trimps gain 15% attack and health inside Void Maps.': '虚空地图中脆皮增加15%攻击力和生命值。',
    'Metallic Coat': '金属外套',
    'Reduce the amount of enemy damage that can pierce block by 25%.': '降低敌人25%的防御穿透。',
    'Heirnuum I': '传家虚物 I',
    'You can spend an extra 10% of your Nu on your Heirlooms, bringing the total to 60%.': '每个传家宝的可使用虚空物质上限额外增加10%，总计可达到虚空物质总量的60%。',
    'Herbalist': '神农',
    'Headstart I': '先声夺人 I',
    'Corruption begins 5 levels earlier, at Zone 176.': '腐化提前5个区域，在区域176出现。',
    'Scryhard I': '努力占卜 I',
    'When fighting Corrupted or Healthy cells in Scryer Formation, grants 50% more Dark Essence and doubles your attack.': '当使用占卜者阵型与腐化或健康敌人作战时，黑暗精华获取量额外增加50%，攻击力翻倍。',
    'When fighting Corrupted cells in Scryer Formation, grants 50% more Dark Essence and doubles your attack.': '当使用占卜者阵型与腐化敌人作战时，黑暗精华获取量额外增加50%，攻击力翻倍。',
    'Void Power II': '虚空力量 II',
    'Your Trimps gain an additional 20% attack and health inside Void Maps.': '虚空地图中脆皮再度增加20%攻击力和生命值。',
    'Map Reducer I': '地图减压 I',
    'Reduces the starting point of the Low Map Level Loot Penalty by 1 level. This allows you to earn the same amount of loot by doing a map at your current Zone number, or at your current Zone number minus 1.': '将地图中劫掠的减成起始点降低1层。在跟区域相同层地图或比区域低1层的地图中劫掠的资源量相等。',
    'King of Bones I': '骨头之王 I',
    'Double the chance for a Megaskeletimp to appear instead of a Skeletimp.': '脆皮超级骷髅取代脆皮骷髅出现的概率翻倍。',
    'Safe Mapping': '安全绘图',
    'Your Trimps gain +100% health in maps.': '脆皮在地图中生命值翻倍。',
    'Headstart II': '先声夺人 II',
    'Corruption begins an additional 10 levels earlier, at Zone 166.': '腐化再提前10个区域, 在区域166出现。',
    'Legs for Days': '日残腿法',
    'Gain +50% attack when running a Daily Challenge.': '进行日常挑战时攻击力增加50%。',
    'Hyperspeed I': '风驰电掣 I',
    'Reduce the time in between fights and attacks by 100ms.': '将战斗间隔和攻击间隔减少100ms。',
    'Blacksmithery I': '锻铁术 I',
    'Turkimp Tamer II': '脆皮火鸡饲主 II',
    'Learn to grow your own Turkimp, increasing the bonus from +50% to +100%, and making the Turkimp bonus available permanently.': '学习如何自己饲养脆皮火鸡，加成从50%变为100%，且永久持续。',
    'Grants a 2% chance to find a Randimp in World and Maps. Randimps will grant the bonus of a random World or Map Exotic Import (based on current location) on death.': '脆皮百变怪有2%的概率出现在世界或地图中。脆皮百变怪死亡时随机给予世界或地图(根据当前所在的位置而定)中一个奇异外皮的效果。',
    'Headstart III': '先声夺人 III',
    'Corruption begins an additional 15 levels earlier, at Zone 151.': '腐化再提前15个区域，在区域151出现。',
    'Map Battery': '地图电池',
    'Doubles the Zone bonus for completing maps once you reach 10 stacks.': '当完成十次地图后，地图奖励翻倍。',
    'Hyperspeed II': '风驰电掣 II',
    'Blacksmithery II': '锻铁术 II',
    'King of Bones II': '骨头之王 II',
    'Reduce the minimum time between Skeletimp spawns by 10 minutes.': '将脆皮骷髅的最小生成时间减少10分钟。',
    'Expert Gen': '发生器专家',
    'Increase the amount of speed that the Dimensional Generator gains per Zone by 50%. In addition, completing a Void Map at or above Z230 grants +10 Magmite.': '将每个区域维度发生器获取速度增加50%。另外，区域230以上的区域完成虚空地图可以获得10岩浆岩。',
    'Magma Flow': '岩浆流',
    'Cause two extra Magma cells to appear on any Zone that already has Magma.': '有岩浆的区域额外生成两个岩浆格子。',
    'Explorer Aura II': '探险家光环 II',
    'Start with an extra SpeedExplorer book after each Portal.': '每次使用传送门后起始额外获得1级探险家加速升级。',
    'Void Power III': '虚空力量 III',
    'Your Trimps gain an additional 30% attack and health inside Void Maps, and all current and future Void Maps gain the \'Fast Attacks\' special modifier.': '虚空地图中脆皮再度增加30%攻击力和生命值，且所有虚空地图视为具有“快速进攻”特殊修饰符。',
    'Blacksmithery III': '锻铁术 III',
    'Heirnuum II': '传家虚物 II',
    'You can spend another extra 10% of your Nu on your Heirlooms, bringing the total to 70%.': '每个传家宝的可使用虚空物质上限再额外增加10%，总计可达到虚空物质总量的70%。',
    'Liquification I': '液化 I',
    'This Mastery is currently disabled in Universe': '此专精无法生效，因为目前处于宇宙',
    'Map at Zonier': '自动进图员',
    'Unlock a second preset to use with Map At Zone!': '自动进图可以使用第二套预设！',
    'Scryhard II': '努力占卜 II',
    'Complete an entire Void Map in Scryer Formation to earn an additional 50% Helium.': '全程使用占卜者阵型完成一张虚空地图可以额外获得50%氦。',
    'Magmamancermancy': '岩浆巫师学',
    'Magmamancers will now increase Trimp Attack by the same amount that they increase Metal. In addition, start every post-magma Zone with 5 minutes of credit already applied to your Magmamancers.': '岩浆巫师不仅提高金属获取量，还同时提高脆皮攻击力，二者加成数值相等。另外，进入岩浆以后的区域时，岩浆巫师视为已经获得5分钟的加成。',
    'Map Reducer II': '地图减压 II',
    'Reduces the min and max number of cells by 5 when creating maps.': '制造地图时最大格子和最小格子数均减少5。',
    'Natural Diplomacy I': '自然斡旋 I',
    'Increase your token trading ratio from 10:5 to 10:8.': '将符记的转换比率由10:5提高到10:8。',
    'Deca Build': '十重建造',
    'Buildings in the queue are constructed 10 at a time. In addition, buildings added to the queue via AutoStructure are added 10 at a time if needed.': '可以同时建造十个建筑。另外，建筑能以10为单位加入队列。',
    'Still Rowing I': '尖塔排行 I',
    'Increase the looting bonus for completing a full row in a Spire by 50%, from 2% extra loot to 3%.': '完成尖塔一行的劫掠加成增加50%，从2%增加为3%。',
    'Patience': '耐心',
    'Anticipation can now reach 45 stacks.': '预期特权时间上限提高为45秒。',
    'Void Specialization I': '虚空特化 I',
    'Receive 1 free Void Map after using your Portal for each 100 Zones cleared last run. Helium from Void Maps is also increased by 0.25% for each Zone cleared last run.': '上次传送前每通过100个区域，传送后就多获得一张虚空地图。上次传送前每通过1个区域，虚空地图中获得的氦就增加0.25%。',
    'Receive 1 free Void Map after using your Portal for each 100 Zones cleared last run. Radon from Void Maps is also increased by 0.25% for each Zone cleared last run.': '上次传送前每通过100个区域，传送后就多获得一张虚空地图。上次传送前每通过1个区域，虚空地图中获得的氡就增加0.25%。',
    'You reached': '您上次传送前最高到达了区域 ',
    'Your value for "Last Portal Zone" only changes if you Portal after Z99 or collect an Heirloom, meaning it won\'t be reset by early restarts.': '上次传送前通过的区域只在上次传送前到达区域99或获得一个传家宝后才会开始计算，早早使用传送门不会对这个数值造成影响。',
    'Strength in Health I': '健康之力 I',
    'Your Trimps gain 15% additive damage per Healthy cell in your current Zone.': '当前区域中每有一个健康的格子，您的脆皮就获得15%额外伤害，伤害叠加。',
    'Natural Diplomacy II': '自然斡旋 II',
    'Add 5 levels to the Upgrade and Stack Transfer of all 3 Empowerments of Nature, without increasing the costs.': '将全部3种自然赋能的赋能等级和层数传递率等级提高5级，且不增加成本。',
    'Liquification II': '液化 II',
    'Still Rowing II': '尖塔排行 II',
    'Your Trimps will now gain attack equal to 2x their looting bonus from each Spire row cleared.': '完成尖塔一行的劫掠加成现在还可以增加脆皮的攻击力，数值为劫掠加成的2倍。',
    'Amalgagreater': '超级合并者',
    'Causes the 50% damage bonus from each Amalgamator to be compounding rather than additive.': '合并者的50%伤害加成从叠加变为叠乘。',
    'Void Specialization II': '虚空特化 II',
    'Gain a second Void Map per 100 Zones cleared last run, but the first one is earned at Z50 (then 150, 250 etc). In addition, if Fluffy\'s level 6 bonus is active, this allows Fluffy to stack 1 additional Void Map, adding another 50% Helium bonus to the stack.': '在虚空特化 I的基础上，从区域50开始，上次传送前每通过100个区域，传送后就多获得一张虚空地图。另外，绒绒的6级加成如果激活，则绒绒的虚空地图融合上限再增加1。',
    'Bionic Magnet II': '仿生磁铁 II',
    'Adds Prestigious to Bionic Wonderland maps. This will make every Bionic Wonderland have two Prestige upgrades, including your first run that normally just has a RoboTrimp upgrade. In addition, gain +50% attack whenever you\'re in a map that is higher than your current World.': '重铸仿生仙境地图，使每张仿生仙境地图都可以获得两个升级，一个是正常的脆皮机器人升级，另一个是当您进入大于当前区域等级的地图时，攻击力增加50%。',
    'Flufffocus': '绒绒专注',
    'Scrufffocus': '污污专注',
    'Flufffinity': '绒绒限界',
    'Scrufffinity': '污污限界',
    'Gain one extra Fluffy ability. This works as if Fluffy Evolved, but doesn\'t increase Fluffy\'s damage bonus.': '绒绒获得一个额外的能力。效果与多进化了一次类似，不同的是没有伤害加成。',
    'Gain one extra Scruffy ability. This works as if Scruffy Evolved, but doesn\'t increase Scruffy\'s damage bonus.': '污污获得一个额外的能力。效果与多进化了一次类似，不同的是没有伤害加成。',
    'Excessive': '超超杀',
    'Allows you to Overkill yet another cell.': '超杀格子上限增加1个。',
    'Charged Crits': '蓄力暴击',
    'Adds +1 to your MegaCrit modifier, and adds 50% of your Shield Heirloom\'s Crit Chance to your Crit Chance again.': '超暴击倍率加1，并且暴击率增加您盾牌暴击率的50%。',
    'However, you do not currently have Crit Chance on your Shield.': '但目前您的盾牌并没有暴击率的加成。',
    'Master of the Void': '虚空大师',
    'Grants 3 spectacular bonuses to your Void Maps, though the first two are incompatible with Scruffy. Scruffy tries but seriously just can\'t figure out the whole stacking thing yet.': '虚空地图获得以下三个强大的加成，但前两个对污污无效。污污很努力了，但是它真的搞不明白地图融合之类的事。',
    'Grants 3 spectacular bonuses to your Void Maps!': '虚空地图获得以下三个强大的加成！',
    '1. The Fluffy bonus for stacked Void Maps calculates with compounding gains, rather than additive. Each Void Map in the stack increases the Helium gain from the stack by x1.5 rather than +50%.': '1. 绒绒的融合虚空地图加成从叠加变为叠乘。融合每张虚空地图的氦加成从增加50%变为乘以1.5倍。',
    '3. Your Trimps gain 5x damage inside Void Maps': '3. 您的脆皮在虚空地图中获得5倍攻击力。',
    'Strength in Health II': '健康之力 II',
    'Adds 1 extra Healthy cell for every Spire completed this run. Healthy cells will also drop an additional 20% of the Zone\'s value in Helium, bringing the total up to 65%. Spire I will count for 1 Healthy cell once Healthy cells begin to appear in the World, but does not cause them to start spawning earlier.': '自上次传送后每通过1个尖塔，就额外生成1个健康格子。健康格子额外掉落本区域氦数量的20%，将该掉落量总和提升到65%。当健康格子开始出现在世界中以后，尖塔就开始生成健康格子，但健康格子不会提前出现。',
    'On your current run, you have cleared no Spires, so this Mastery is granting 0 extra Healthy cells. On your current Zone, you\'re finding 0 Healthy cells.': '自上次传送后您还没有通过尖塔，此专精可获得 0 个额外健康格子。目前区域中有 0 个健康格子。',
    'Still Magmamancing': '尖塔岩浆巫术',
    'Start every post-magma Zone with an additional 60 seconds of credit already applied to your Magmamancers per Spire row completed this run. In addition, every 2 Spires you complete this run increases the maximum time that Magmamancers can stack by 10 minutes!': '自上次传送后每通过1行尖塔，进入岩浆以后的区域时岩浆巫师就额外获得60秒的加成。另外，自上次传送后每完成2个尖塔，岩浆巫师的时间上限就增加10分钟。',
    'Liquification III': '液化 III',
    'Liquification is disabled in Universe 2, but': '液化在宇宙2中无法生效，但',
    'Increase your Liquification bonus by': '增加液化效果 ',
    'as if you had completed': '等同于额外完成了',
    '2 extra Spires': '2个尖塔',
    '. In addition,': '。另外，',
    'Mesmer': '梅斯梅尔',
    'Triples the Challenge': '将所有 挑战',
    'bonus for all Challenge': '的加成变为三倍，但只对挑战',
    's that have normal reward scaling (Does not include Trappapalooza, Trapper, Coordinate, Trimp, Obliterated or Eradicated).': '中奖励递增正常的生效(不包括捕手道达人、捕手、协同、脆皮、抹杀、灭绝)。',
    's that have normal reward scaling (Does not include Trapper, Coordinate, Trimp, Obliterated or Eradicated).': '中奖励递增正常的生效(不包括捕手、协同、脆皮、抹杀、灭绝)。',
    'You currently have a C': '您目前 挑战',
    'Angelic': '天之赐福',
    'Your Trimps heal for 50% of their remaining health immediately before each attack. Due to the intense amount of evil present, Trimps cannot heal in never-before-cleared Spires.': '每次脆皮被攻击前恢复剩余生命值的50%。由于尖塔中邪恶存在过多，脆皮无法在未通过的尖塔中恢复生命值。',
    //专精相关结束
    //维度发生器相关
    'Efficiency': '效率',
    'Capacity': '容量',
    'Supply': '供给',
    'taking advantage of': '意味着您可以完全获取',
    '2 extra Zones': '额外2个区域的燃料',
    'Overclocker': '超频',
    'Requires Hybridization and Storage.': '需要下方的混合和存储升级。',
    'The first level of this upgrade will cause the Dimensional Generator to overclock instead of wasting fuel whenever you find more fuel than you can store. Overclocking will cause an instant Generator tick at a base of 50% effectiveness.': '首次升级此项后，当您获取了超过上限的燃料时，维度发生器不会将多余的燃料浪费掉，而是会进入超频状态。超频状态将立刻让维度发生器产生一次住房，但效果为正常的50%。',
    'Every upgrade purchased after the first will reduce the Overclocking penalty by 1%, compounding.': '首次升级之后的每次升级都将减少1%的效果惩罚，数值叠乘。',
    'Hybridization': '混合',
    'Unlock the ability to switch your Dimensional Generator to Hybrid mode. Hybrid mode will automatically switch to Gain Fuel when fuel is below max, and Gain Mi when fuel is full.': '解锁维度发生器的混合模式。混合模式下，维度发生器在燃料未满之前得燃料，而燃料满了以后得岩浆岩。',
    'Storage': '存储',
    'Unlock extra fuel storage. This storage will always be equal to your normal fuel cap and will only store extra fuel above your normal cap. Fuel in this extra storage does not increase generator Trimps/tick, but acts as nice padding to help prevent wasted fuel. Hybrid mode will attempt to fill your extra storage halfway.': '解锁额外的燃料存储空间。此空间存储上限总是等于正常燃料上限，只会存储超过正常上限部分的燃料。额外空间中的燃料不会增加产生的住房，只是可以防止浪费燃料。混合模式会先将额外存储空间填充一半，然后再进行切换。',
    'Shielding': '防护',
    'Reduce the amount of Magmite that decays after each portal by 10% (additive': '将每次通过传送门后衰变的岩浆岩数量减少10%(叠减',
    'Slowburn': '慢烧',
    'Reduce the rate of fuel consumption per tick by 0.1, from 0.5 to': '将每次产生住房消耗的燃料减少0.1，从0.5减少为',
    'Supervision': '管理',
    'Gain 3 Automation/Micromanagement tools for your Generator!': '获得3个维度发生器的自动管理工具！',
    'Gain the ability to pause the Dimensional Generator by clicking the clock.': '获得暂停维度发生器的能力，方法是在维度发生器的倒计时上点击。',
    'Get a sweet button to configure specific Zones to switch Generator states at. You\'ll also gain the ability to Ctrl + Click the Generator Start setting in the Settings menu to open up the same interface.': '增加一个很好用的按钮，可以用来设置在特定区域切换模式。在设置菜单中按下Ctrl键再点击维度发生器初始运行模式按钮，也可以进入同样的界面。',
    'Add a Slider to your Generator window, allowing you to lower your maximum fuel capacity and gain greater control over Overclocker. Lowering your capacity below your stored amount of fuel will not waste any fuel, but the first time Overclocker is triggered, all extra fuel will be consumed.': '在维度发生器的方框下方增加一个滑块，可以用于调节燃料存储上限，更好的控制超频。将存储上限降到低于当前燃料数量时，不会有燃料被浪费掉，但当之后触发超频触发时，所有额外的燃料都会被消耗掉。',
    'Simulacrum': '复制',
    'All new generated dimensions now come with copies of your Trimps inside them. Gone are the days of ramping up breeding to fill your dimensions with Trimps!': '维度发生器产生住房的同时，也会产生相同数量的脆皮。费尽心思让脆皮繁殖填满上限的日子过去了！',
    //维度发生器相关结束
    //自然赋能相关
    'When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing it to take': '当此赋能激活时，每次脆皮的攻击都可以使敌人获得一层减益，每次攻击时，敌人受到的伤害增加 ',
    'of the damage you dealt every attack until it dies. Each attack by your Trimps will further add to the poison effect.': '，直到敌人死亡。脆皮每次攻击可以叠加此毒效果。',
    'Increases the percentage of damage that sticks to enemies as poison during the Empowerment of Poison by': '毒赋能生效期间增加敌人 ',
    '. You currently poison for': ' 受到的伤害。您目前的毒赋能效果为 ',
    'and next level will cause you to poison for': '下一级毒赋能效果为 ',
    'While Enlightened, your Trimps deal 3x damage, and Poison Nature stacks deal 2x damage.': '当获得启迪时，您的脆皮伤害变为3倍，毒赋能伤害加倍。',
    'When this Empowerment is active, each successful attack by your Trimps stacks a debuff on the enemy, causing winds to swell and knock extra resources into your reach. Each stack increases Helium gained from the World by': '当此赋能激活时，每次脆皮的攻击都可以使敌人获得一层减益，鼓起大风，将更多的资源吹入您怀中。每层提高 ',
    'and increases all other basic resources gained from all sources by': '世界上获得的氦数量，并将所有基本资源获取量提高 ',
    'until that enemy dies (maximum of 200 stacks). This bonus does not apply to Fragments, and the helium bonus does not apply to maps.': ' ，直到敌人死亡(最高200层)。碎片不受加成，地图中的氦也一样不受加成。',
    'until that enemy dies (maximum of 300 stacks). This bonus does not apply to Fragments, and the helium bonus does not apply to maps.': ' ，直到敌人死亡(最高300层)。碎片不受加成，地图中的氦也一样不受加成。',
    'Increases the amount of extra Helium you find in the World by': '当风赋能激活时，每层提高 ',
    'and non-Helium basic resources from all sources by': '世界上获得的氦数量，并将其他非氦基本资源获取量提高 ',
    'per stack when the Empowerment of Wind is active. Your current bonus is': '。您当前的加成为 ',
    'Helium, and next level will bring your bonus to': '氦，下一级加成变为 ',
    'extra helium. Non-Helium resource gain is always double that of Helium, and the Helium bonus does not apply in maps.': '氦。非氦资源获取量总是氦的两倍，地图中的氦不受加成。',
    'extra helium. Non-Helium resource gain is always 10x that of Helium, and the Helium bonus does not apply in maps.': '氦。非氦资源获取量总是氦的十倍，地图中的氦不受加成。',
    'While Enlightened, you gain a 10x increase in all non-Helium loot, Wind stacks accumulate twice as fast, Wind can stack to 300, Wind gains an additional 5% stack transfer rate, and your Trimps gain access to the Wind Formation. This new Formation prevents any enemies in Wind Zones from falling below 1HP before they have 300 stacks of Wind. Wind Formation also grants all bonuses of Scrying Formation and allows collection of Dark Essence with no Trimp stat penalty.': '当获得启迪时，所有非氦资源获取量变为10倍，风层数叠加速度加倍，并可以叠加到300层，层数传递率增加5%，脆皮可以使用风阵型。此阵型可以使风区域中的敌人在达到300层风之前生命值不会小于1。风阵型可以获得占卜者阵型的全部加成，并允许在无属性惩罚的前提下收集黑暗精华。',
    'You have been Enlightened by Wind! While in this Formation in a Wind Zone, enemies will never fall below 1HP before they have 300 stacks of Wind.': '您已获得风之启迪！当在风区域使用此阵型时，敌人在达到300层风之前生命值不会小于1。',
    'This Formation also allows collection of Dark Essence, and grants all bonuses of the Scryer Formation.': '此阵型可以收集黑暗精华，并拥有占卜者阵型的全部加成。',
    'When this Empowerment is active, enemies will be Chilled each time your Trimps attack. The Chill debuff stacks, reduces the damage that enemy deals by': '当此赋能激活时，每次脆皮的攻击都可以冻结敌人。每层冻结减少 ',
    '(compounding) per stack, and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%) until it dies.': '敌人的伤害(叠乘)，并且您的脆皮会增加等量的攻击力(效果递减，直到100%)，直到敌人死亡。',
    '(compounding) per stack, and increases the damage your Trimps deal to that enemy by  twice that amount (with diminishing returns, max of +200% attack) until it dies.': '敌人的伤害(叠乘)，并且您的脆皮会增加该数值两倍的攻击力(效果递减，直到200%)，直到敌人死亡。',
    'Reduces the enemy\'s damage dealt from each stack of Chilled when the Empowerment of Ice is active by': '当冰赋能激活时，每层冻结减少 ',
    '(compounding), and increases the damage your Trimps deal to that enemy by the same amount (with diminishing returns, max of 100%). Your current bonus is': '敌人的伤害(叠乘)，并且您的脆皮会增加等量的攻击力(效果递减，直到100%)，您当前的加成为 ',
    '(compounding), and increases the damage your Trimps deal to that enemy by  twice that amount (with diminishing returns, max of +200% attack). Your current bonus is': '敌人的伤害(叠乘)，并且您的脆皮会增加该数值两倍的攻击力(效果递减，直到200%)，您当前的加成为 ',
    'and next level will bring your bonus to': '下一级加成变为 ',
    'You will earn +1 Overkill during Ice Zones once you reach Level 50, and a second Overkill cell at Level 100!': '当您到达50级后在冰区域超杀格子加1，到达100级后超杀格子再加1！',
    'You are earning +1 Overkill during Ice Zones! Earn another at Level 100!': '您已经在冰区域获得了超杀格子加1！到达100级后超杀格子可以再加1！',
    'Your Ice level is over 100, and you are gaining an additional 2 cells of Overkill during Ice Zones!': '您的冰赋能等级超过了100，冰区域中您获得了超杀格子加2！',
    'Your Ice level is 100, and you are gaining an additional 2 cells of Overkill during Ice Zones!': '您的冰赋能等级达到了100，冰区域中您获得了超杀格子加2！',
    'While Enlightened, your Trimps gain +2 maximum Overkill cells  and +0.25% increased Fluffy Exp per Ice level': '当获得启迪时，直到下次传送前超杀格子上限加2，且每级冰赋能增加0.25%绒绒经验 ',
    'currently': '目前',
    'for your entire run. In Ice Zones, Ice stacks accumulate twice as fast, and if an enemy is hit by your Trimps while it has 20 or more stacks of Ice and is below 50% health, it will instantly shatter! The shards of Ice from the shattered enemy destroy everything in their path, triggering your maximum Overkill regardless of your damage.': '。在冰区域中，冰层数叠加速度加倍，攻击一个有20层以上冰，生命值低于50%的敌人将立刻将它打碎。且无论对该敌人造成了多少伤害，该伤害都会触发最大格子数的超杀。',
    'While Enlightened, your Trimps gain +2 maximum Overkill cells  for your entire run. In Ice Zones, Ice stacks accumulate twice as fast, and if an enemy is hit by your Trimps while it has 20 or more stacks of Ice and is below 50% health, it will instantly shatter! The shards of Ice from the shattered enemy destroy everything in their path, triggering your maximum Overkill regardless of your damage.': '当获得启迪时，直到下次传送前超杀格子上限加2。在冰区域中，冰层数叠加速度加倍，攻击一个有20层以上冰，生命值低于50%的敌人将立刻将它打碎。且无论对该敌人造成了多少伤害，该伤害都会触发最大格子数的超杀。',
    '': '',
    '': '',
    //自然赋能相关结束
    //脚本3相关
    'Various bug fixes.': '多个BUG修复。',
    'CHANGED THE WAY TF GATHER WORKS! CHECK TF SETTINGS!': '修改定时刷图的工作机制！详见定时刷图设置！',
    'CHANGED THE WAY MELTING POINT SETTING WORKS PLEASE CHECK SETTING IN MAPS!': '修改熔点设置的工作机制，详见地图设置！',
    'Added Arch. Automated Quest. Fixed bugs. Updated calc.': '增加考古学。增加自动任务。修复BUG。升级计算器。',
    'Added Quagmire functionality. Added time and tribute farming. Added option to run Dailies in either universe. Added check to c2runner to not run a challenge if you have not unlocked it. Autoallocation sort of fixed. Added Greed to loot dumping. Graphs are still bad when moving between universes. Removed autonu due to being broken.': '增加泥淖挑战相关设置。增加定时刷图和刷祭品。增加在两个宇宙刷日常的选项。增加一个判断条件，如果还没有解锁一个挑战，自动C2挑战将不会尝试它。自动分配修复一些问题。将贪婪加入主加特权列表。切换宇宙时，图表还是会有问题。移除了自动分配虚空物质，因为它无法正常工作。',
    'CHECK COMBAT FOR BETTERAUTOFIGHT, IF MIGHT BE A BLACK BAR, CLICK IT!': '检查战斗选项下的改良自动战斗选项，它可能变成一个黑条，记得点一下！',
    'A bunch of U2 stuff added, offline progress still being worked on.': '添加了许多宇宙2相关内容，离线进度仍需要完善。',
    'Report any bugs/problems please': '如果发现BUG或问题，请向我反馈',
    'Talk with the dev': '欲联系开发者，可以联系',
    'Zeks Discord Channel': 'Zeks Discord 频道',
    'See': '查阅 ',
    'ReadMe': '自述文件',
    'Or check': '或者查看 ',
    'the commit history': '提交记录',
    '(if you want).': '(如果你想要的话)。',
    'Script Update Notice': '脚本更新公告',
    'Thank you for playing AutoTrimps. Accept and Continue.': '感谢您使用自动脆皮脚本。点此开始使用。',
    'Helium - He/Hr': '氦 - 氦/小时',
    'Helium - Total': '氦 - 总计',
    'HeHr % / LifetimeHe': '氦小时 % / 氦总量',
    'He % / LifetimeHe': '氦 % / 氦总量',
    'Radon - Rn/Hr': '氡 - 氡/小时',
    'Radon - Total': '氡 - 总计',
    'RnHr % / LifetimeRn': '氡小时 % / 氡总量',
    'Rn % / LifetimeRn': '氡 % / 氡总量',
    'Radon - Rn/Hr Instant': '氡 - 氡/小时 瞬时值',
    'Clear Time': '通过时间',
    'Cumulative Clear Time': '累计通过时间',
    'Run Time': '本轮时间',
    'Map Bonus': '地图奖励',
    'Void Maps': '虚空地图',
    'Void Map History': '虚空地图历史',
    'Loot Sources': '战利品来源',
    'Coordinations': '协作等级',
    'Nullifium Gained': '虚空物质获取量',
    'Dark Essence PerHour': '每小时黑暗精华',
    'OverkillCells': '超杀格子数',
    'Magmite': '岩浆岩',
    'Magmamancers': '岩浆巫师',
    'Fluffy XP': '绒绒经验',
    'Fluffy XP PerHour': '每小时绒绒经验',
    'Scruffy XP': '污污经验',
    'Scruffy XP PerHour': '每小时污污经验',
    'Nurseries': '托儿所',
    'Amalgamators': '合并者',
    'Refresh': '刷新',
    'Clear All Previous Data': '清除全部数据',
    'Delete Specific Portal': '删除特定传送门数据',
    'Tips': '提示',
    'Export Graph Database will make a backup of all the graph data to a text string.': '导出图表数据将您的图表数据备份为一串字符。',
    'DISCLAIMER': '免责声明',
    'Takes quite a long time to generate.': '需要花费很长的时间。',
    'Export your Graph Database': '导出图表数据',
    'Add Note/Label': '添加注释/标签',
    'Invert Selection': '选择项反转',
    'All Off/On': '全部关闭/开启',
    'You can zoom by dragging a box around an area. You can turn portals off by clicking them on the legend. Quickly view the last portal by clicking it off, then Invert Selection. Or by clicking All Off, then clicking the portal on. To delete a portal, Type its portal number in the box and press Delete Specific. Using negative numbers in the Delete Specific box will KEEP that many portals (starting counting backwards from the current one), ie: if you have Portals 1000-1015, typing -10 will keep 1005-1015. There is a browser data storage limitation of 10MB, so do not exceed 20 portals-worth of data.': '您可以用鼠标圈选特定区域来放大。在图例上点击后可以关闭特定传送门数据。您可以点击最近一个传送门，然后点击下方的选择项反转来快速单独浏览。您也可以点全部关闭后，再点击它。如果想要删除特定传送门的数据，请在右方输入框内输入编号后，点击删除特定传送门数据。如果在输入框内输入负数再点击删除，那么会保留最近一个传送门之前相应数量的数据。举例：如果您目前图表中有传送门1000至传送门1015的数据，输入-10再点击删除后，剩下的是传送门1005至传送门1015的数据。浏览器数据存储上限为10MB，所以数据条目数不可超过20条。',
    'Tips: Hover for usage tips.': '提示：鼠标停留此处可看到有用的提示。',
    'Try to Remember Which Portals are Selected when switching between Graphs': '切换图表类型时记忆传送门选择状态',
    'Black Graphs': '黑色图表',
    'ExportGraphs': '导出图表',
    'This is your GRAPH DATABASE save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '以下是您的图表数据字符串。只属于您，独一无二。保存好它，这样下次就能省不少事了。',
    'Got it': '知道了',
    'Copy to Clipboard': '复制到剪贴板',
    'Void Maps (completed': '虚空地图 (通过数',
    'Portal': '传送门',
    'Number of Void Maps': '虚空地图数量',
    'Nullifium Gained Per Portal': '每次传送门获得的虚空物质',
    'Average Nullifium Gained Per Portal =': '平均每次传送门获得的虚空物质 =',
    'Metal': '金属',
    'Wood': '木头',
    'Food': '食物',
    'Gems': '宝石',
    'Fragments': '碎片',
    'Current Loot Sources (of all resources gained) - for the last 15 minutes': '目前战利品来源(所有资源) - 过去的15分钟内',
    'Time (every 15 seconds': '时间点(每15秒一次',
    'Ratio of looted to gathered': '战利品与采集的比例(单位%)',
    'Time to clear zone': '区域通过时间',
    'Cumulative Time (at END of zone#': '累计时间(在区域末尾',
    'Total Run Time': '所有轮时间',
    'Time': '时间',
    'Helium/Hour (Cumulative': '氦/小时 (累计',
    'Helium/Hour': '氦/小时',
    'Helium (Lifetime Total': '氦(总量',
    'Helium': '氦',
    'He/Hr % of LifetimeHe': '氦小时 % / 氦总量',
    'He % of LifetimeHe': '氦 % / 氦总量',
    'Radon/Hour (Cumulative': '氡/小时 (累计',
    'Radon/Hour': '氡/小时',
    'Radon (Lifetime Total': '氡(总量',
    'Radon': '氡',
    'Rn/Hr % of LifetimeHe': '氡小时 % / 氡总量',
    'Rn % of LifetimeRn': '氡 % / 氡总量',
    'Radon/Hour Instantaneous - between current and last zone.': '氡/小时 瞬时值 - 在当前区域和上一个区域之间。',
    'Radon/Hour per each zone': '氡/小时 每区域',
    'Void Map History (voids finished during the same level acquired (with RunNewVoids) are not counted/tracked': '虚空地图历史 (在获取的同一层通过的虚空地图无法被记录在内',
    'Map Bonus History': '地图奖励历史',
    'Map Bonus Stacks': '地图奖励层数',
    'Coordination History': '协作等级历史',
    'Coordination': '协作',
    'Total Magmite Owned': '岩浆岩总拥有量',
    'Zone (starting at': '区域 (开始于',
    'Total Magmamancers Owned': '岩浆巫师总拥有量',
    'Dark Essence/Hour (Cumulative': '黑暗精华/小时 (累计',
    'Dark Essence/Hour': '黑暗精华/小时',
    'Nurseries Bought (Total': '托儿所建造数 (总量',
    'Nursery': '托儿所',
    'Fluffy XP (Lifetime Total': '绒绒经验 (总量',
    'Zone (starts at': '区域 (开始于',
    'Fluffy XP/Hour (Cumulative': '绒绒经验/小时 (总量',
    'Fluffy XP/Hour': '绒绒经验/小时',
    'Scruffy XP (Lifetime Total': '污污经验 (总量',
    'Scruffy XP/Hour (Cumulative': '污污经验/小时 (总量',
    'Scruffy XP/Hour': '污污经验/小时',
    'Overkilled Cells': '超杀格子数',
    'Toggle Automapping': '切换自动地图开关',
    'Toggle automapping on and off.': '切换自动地图是打开还是关闭。',
    'Health to Damage ratio': '生命伤害比',
    'This status box displays the current mode Automaps is in. The number usually shown here during Farming or Want more Damage modes is the \'HDratio\' meaning EnemyHealth to YourDamage Ratio (in X stance). Above 16 will trigger farming, above 4 will trigger going for Map bonus up to 10 stacks.': '此状态框内显示目前自动地图的模式。在刷资源模式或者需要更多伤害模式下，此处会显示生命伤害比，意思是敌人生命值与您伤害的比值。此数值高于16时，会触发刷资源模式，高于4时，会进入地图获得10层地图奖励。',
    'enoughHealth': '生命值足够',
    'enoughDamage': '伤害足够',
    'shouldFarm': '应该刷资源',
    'H:D ratio =': '生命伤害比 =',
    'true': '条件为真',
    'false': '条件为假',
    'Helium/Hr Info': '氦/小时 信息',
    '1st is Current He/hr % out of Lifetime He(not including current+unspent).': '第1行为目前氦/小时与氦总量的百分比(不包含本轮的和未花费的)。',
    '0.5% is an ideal peak target. This can tell you when to portal...': '0.5%是一个比较理想的目标。在这个数字附近使用传送门会较好…………',
    '2nd is Current run Total He earned / Lifetime He(not including current': '第2行为本轮氦获取量与氦总量的比值(不包含本轮的',
    'Radon/Hr Info': '氡/小时 信息',
    '1st is Current Rn/hr % out of Lifetime Rn(not including current+unspent).': '第一行为目前氡/小时与氡总量的百分比(不包含本轮的和未花费的)。',
    '2nd is Current run Total Rn earned / Lifetime Rn(not including current': '第2行为本轮氡获取量与氡总量的比值(不包含本轮的',
    'Core': '核心',
    'Core - Main Controls for the script': '核心 - 脚本主要内容的控制',
    'Buildings': '建筑',
    'Building Settings': '建筑设置',
    'Jobs': '工作',
    'Jobs - Worker Settings': '工作 - 工人设置',
    'Gear': '装备',
    'Gear - Equipment Settings': '装备 - 装备设置',
    'Maps': '地图',
    'Maps - AutoMaps & VoidMaps Settings': '地图 - 自动地图及虚空地图设置',
    'Spire': '尖塔',
    'Spire - Settings for Spires': '尖塔 - 尖塔相关设置',
    'Raiding': '突袭',
    'Raiding - Settings for Raiding': '突袭 - 突袭相关设置',
    'Dailies - Settings for Dailies': '日常 - 日常相关设置',
    'C2': 'C2',
    'C2 - Settings for C': 'C2 - 相关设置：C',
    'Challenges': '挑战',
    'Challenges - Settings for Specific Challenges': '挑战 - 特定挑战相关设置',
    'Combat': '战斗',
    'Combat & Stance Settings': '战斗及阵型设置',
    'Windstacking': '风层数叠加',
    'Windstacking Settings': '风层数叠加设置',
    'ATGA': '自动基因学家',
    'Geneticassist Settings': '基因学家设置',
    'Scryer': '占卜阵型',
    'Scryer Settings': '占卜阵型设置',
    'Magma': '岩浆',
    'Dimensional Generator & Magmite Settings': '维度发生器及岩浆岩设置',
    'Heirlooms': '传家宝',
    'Heirloom Settings': '传家宝设置',
    'Golden': '金色',
    'Golden Upgrade Settings': '金色升级设置',
    'Nature': '自然',
    'Nature Settings': '自然设置',
    'Display': '显示',
    'Display & Spam Settings': '显示及屏蔽设置',
    'Import Export': '导入导出',
    'Import & Export Settings': '导入及导出设置',
    'Minimize all tabs': '最小化所有选项卡',
    'Minimize all AT settings tabs.': '最小化所有脚本设置选项卡。',
    'Maximize all tabs': '最大化所有选项卡',
    'Maximize all AT settings tabs.': '最大化所有脚本设置选项卡。',
    'Exit (duplicate': '退出 (界面',
    'Closes/toggles/hides AutoTrimps (just a UI shortcut': '关闭脚本界面 (只是快捷按钮',
    'Manual Gather/Build': '手动采集和建造',
    'Auto Gather/Build': '自动采集和建造',
    'Mining/Building Only': '只采矿和建造',
    'Science Research OFF': '不进行科学研究',
    'Manual Gather/Build / Auto Gather/Build / Mining/Building Only / Science Research OFF': '手动采集和建造 / 自动采集和建造 / 只采矿和建造 / 不进行科学研究',
    'Controls what you gather/build do. Manual does nothing': '控制您自己资源采集和建造。手动采集和建造不会做任何事。',
    'Auto Gathering of Food,Wood,Metal(w/turkimp) & Science. Auto speed-Builds your build queue.': '自动采集会采集食物，木头，金属(有脆皮火鸡效果的时候)及科学点。自动建造会加速建造队列。',
    'Mining/Building only does exactly what it says. Only use if you are passed the early stages of the game and have the mastery foremany unlocked (No longer need to trap, food and wood are useless).': '只采矿和建造的效果与它的称呼完全一致。建议只在您渡过游戏前期阶段获得50000工头后开启。',
    'You can disable science researching for the achievement: Reach Z120 without using manual research.': '您可以关闭科学研究，以获得成就：在不使用手动研究的前提下，到达区域120。',
    'Metal Only': '只采矿',
    'For use with Mining/Gather Only. Only gathers Metal if you have foremany unlocked.': '用于 只采矿和建造 选项。当有工头以后，只进行采矿。',
    'Manual Upgrades': '手动升级',
    'Buy All Upgrades': '购买所有升级',
    'Upgrades no Coords': '不升级协作',
    'Manual Upgrades / Buy All Upgrades / Upgrades no Coords': '手动升级 / 购买所有升级 / 不升级协作',
    'Autobuys non-equipment upgrades (equipment is controlled in the Gear tab). The second option does NOT buy coordination (use this': '自动购买装备以外的升级(装备升级在装备选项卡下)。最后一个选项不会购买协作升级( ',
    'ONLY': '只',
    'if you know what you\'re doing).': '在您知道这个用途时才选择)。',
    'Amal Boost': '合并者提升',
    'Boost your Amal count for more Mi. Will not buy coords until your H:D ratio is below a certain value. This means that you will get amals quicker. Will not activate higher than your Amal Boost End Zone Setting!': '提升合并者数量，以获得更多的岩浆岩。只在生命伤害比低于特定的值以后才会购买协作。这意味着您可以更快获得合并者。超过您的合并者提升结束区域后不会激活！',
    'Amal Target': '合并者目标',
    'Set the amount of Amals you wish to aim for. Once this target is reached, it will buy coords below your Amal ratio regardless of your H:D, just enough to keep the Amal. -1 to disable and use H:D for entire boost.': '设置合并者的数量目标。当达到目标数量时，将只考虑在保持数量的前提下购买协作升级，忽略掉生命伤害比。设为-1则全程只考虑生命伤害比。',
    'Amal Boost H:D': '合并者提升生命伤害比',
    'Set your H:D for Amal Boost here. The higher it is the less coords AT will buy. 0.0000025 is the default.': '设置合并者提升的生命伤害比。数值越高，脚本购买的协作升级就越少。0.0000025为默认值。',
    'Amal Boost End Z': '合并者提升结束区域',
    'Amal Boost End Zone. Set the zone you want to stop Amal Boosting. -1 to do it infinitely.': '合并者提升结束区域。设置停止使用合并者提升的区域。设为-1则无限持续不会停止。',
    'Auto Allocate Off': '关闭自动分配特权',
    'Auto Allocate On': '打开自动分配特权',
    'Dump into Looting II': '主加劫掠 II',
    'Auto Allocate Off / Auto Allocate On / Dump into Looting II': '关闭自动分配特权 / 打开自动分配特权 / 主加劫掠 II',
    'Uses the AutoPerks ratio based preset system to automatically allocate your perks to spend whatever helium you have when you AutoPortal. Does not change Fixed Perks: siphonology, anticipation, meditation, relentlessness, range, agility, bait, trumps, packrat, capable. NEW: Dump into Looting II, dumps all loot gained from previous portal at specified zone': '自动使用传送门时，根据当前的氦数量自动分配特权。不会修改特定特权的等级：虹吸学，预期，冥想，无情，范围，敏捷，诱饵，王牌，囤积成瘾，能力。新功能：主加劫掠 II，在特定区域将上次传送门获得的资源主加到劫掠 II上。',
    'Fast Allocate': '快速分配',
    'Turn on if your helium is above 500Qa. Not recommended for low amounts of helium.': '当氦超过500Qa(译者注：即5e17)后建议启用。低氦数量时不建议启用。',
    'Trap Trimps': '陷阱捕捉脆皮',
    'Automatically trap trimps when needed, including building traps. (when you turn this off, you may aswell turn off the in-game autotraps button, think of the starving trimps that could eat that food!': '如果有需要，自动捕捉脆皮，也会自动建造陷阱。(关闭此项时，为了保险起见，您最好也同时关闭游戏自带的自动陷阱捕捉功能',
    'AutoEggs': '自动获取彩蛋',
    'Click easter egg if it exists, upon entering a new zone. Warning: Quite overpowered. Please solemnly swear that you are up to no good.': '如果区域内存在彩蛋，在进入新区域前将自动获取它。注意：效果过于强大。请庄严宣誓您没干好事。',
    'Manual Gather/Build / Auto Gather/Build / Mining/Building Only': '手动采集和建造 / 自动采集和建造 / 只采矿和建造',
    'Dump into Looting': '主加劫掠',
    'Auto Allocate Off / Auto Allocate On / Dump into Looting': '关闭自动分配特权 / 打开自动分配特权 / 主加劫掠',
    'Uses the AutoPerks ratio based preset system to automatically allocate your perks to spend whatever helium you have when you AutoPortal. Does not change Fixed Perks: siphonology, anticipation, meditation, relentlessness, range, agility, bait, trumps, packrat, capable. NEW: Dump into Looting, dumps all loot gained from previous portal at specified zone': '自动使用传送门时，根据当前的氡数量自动分配特权。不会修改特定特权的等级：虹吸学，预期，冥想，无情，范围，敏捷，诱饵，王牌，囤积成瘾，能力。新功能：主加劫掠，在特定区域将上次传送门获得的资源主加到劫掠上。',
    'Greed Dump': '主加贪婪',
    'Dump Radon into Greed instead.': '分配氡时改为主加贪婪。',
    'AutoPortal': '自动传送门',
    'Automatically portal. Will NOT auto-portal if you have a challenge active, the challenge setting dictates which challenge it will select for the next run. All challenge settings will portal right after the challenge ends, regardless. Helium Per Hour only': '自动使用传送门。当您还有挑战未完成的时候，不会使用传送门。下拉菜单中的选项表明使用传送门后自动选择的挑战。所有的挑战设置都会在完成相应挑战后立刻使用传送门。选择氦每小时，则只会在氦每小时低于本轮最大值的首个区域时， ',
    'portals at cell': '使用传送门于格子',
    'of the first level where your He/Hr went down even slightly compared to the current runs Best He/Hr. Take note, there is a Buffer option, which is like a grace percentage of how low it can dip without triggering. Setting a buffer will portal mid-zone if you exceed 5x of the buffer.  CAUTION: Selecting He/hr may immediately portal you if its lower-(use Pause AutoTrimps button to pause the script first to avoid this': '。请注意，右侧有一个缓冲值选项，意味着氦每小时可以暂时低于本轮最大值，而不使用传送门。设置缓冲值后，您将在氦每小时低于缓冲值5倍以后，无论当前在区域内何处，自动使用传送门。注意：选择氦每小时选项可能会立刻使用传送门(建议先使用暂停自动脆皮脚本按钮再进行设置',
    'Portal Challenge': '传送后选择挑战',
    'Automatically portal into this challenge when using helium per hour or custom autoportal. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '当使用氦每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Custom Portal': '自定义传送门',
    'Automatically portal AFTER clearing this level.(ie: setting to 200 would portal when you first reach level': '在通过对应区域后，自动使用传送门。(例：设置为200后，将在此之后使用传送门：首次到达区域',
    'Don\'t Portal Before': '自动传送区域',
    'Do NOT allow Helium per Hour AutoPortal setting to portal BEFORE this level is reached. It is an additional check that prevents drops in helium/hr from triggering autoportal. Set to 0 or -1 to completely disable this check. (only shows up with Helium per Hour set': '到达相应区域之前，不自动使用传送门。此选项是为了防止氦每小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在氦每小时选项下出现',
    'He/Hr Portal Buffer ': '氦每小时缓冲值 ',
    'He/Hr Portal Buffer %': '氦每小时缓冲值 %',
    'IMPORTANT SETTING. When using the He/Hr Autoportal, it will portal if your He/Hr drops by this amount of % lower than your best for current run, default is 0% (ie: set to 5 to portal at 95% of your best). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用氦每小时选项时，通过一个区域后，氦每小时低于本轮最高值相应百分比后，才会自动使用传送门，默认值为0%(例：设置为5后，将在氦每小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氦每小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在将在氦每小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Automatically portal. Will NOT auto-portal if you have a challenge active, the challenge setting dictates which challenge it will select for the next run. All challenge settings will portal right after the challenge ends, regardless. Radon Per Hour only': '自动使用传送门。当您还有挑战未完成的时候，不会使用传送门。下拉菜单中的选项表明使用传送门后自动选择的挑战。所有的挑战设置都会在完成相应挑战后立刻使用传送门。选择氡每小时，则只会在氡每小时低于本轮最大值的首个区域时， ',
    'of the first level where your Rn/Hr went down even slightly compared to the current runs Best Rn/Hr. Take note, there is a Buffer option, which is like a grace percentage of how low it can dip without triggering. Setting a buffer will portal mid-zone if you exceed 5x of the buffer.  CAUTION: Selecting Rn/hr may immediately portal you if its lower-(use Pause AutoTrimps button to pause the script first to avoid this': '。请注意，右侧有一个缓冲值选项，意味着氡每小时可以暂时低于本轮最大值，而不使用传送门。设置缓冲值后，您将在氡每小时低于缓冲值5倍以后，无论当前在区域内何处，自动使用传送门。注意：选择氡每小时选项可能会立刻使用传送门(建议先使用暂停自动脆皮脚本按钮再进行设置',
    'Automatically portal into this challenge when using radon per hour or custom autoportal. Custom portals after cell 100 of the zone specified. Do not choose a challenge if you havent unlocked it.': '当使用氡每小时或自定义选项时，使用传送门后自动进入相应挑战。完成相应挑战后自动使用传送门。请不要选择还没解锁的挑战。',
    'Do NOT allow Radon per Hour AutoPortal setting to portal BEFORE this level is reached. It is an additional check that prevents drops in radon/hr from triggering autoportal. Set to 0 or -1 to completely disable this check. (only shows up with Radon per Hour set': '到达相应区域之前，不自动使用传送门。此选项是为了防止氡每小时的微小波动触发自动传送门。将数值设置为0或者-1可以关闭此选项。(只在氡每小时选项下出现',
    'Rn/Hr Portal Buffer ': '氡每小时缓冲值 ',
    'Rn/Hr Portal Buffer %': '氡每小时缓冲值 %',
    'IMPORTANT SETTING. When using the Rn/Hr Autoportal, it will portal if your Rn/Hr drops by this amount of % lower than your best for current run, default is 0% (ie: set to 5 to portal at 95% of your best). Now with stuck protection - Allows portaling midzone if we exceed set buffer amount by 5x. (ie a normal 2% buffer setting would now portal mid-zone you fall below 10% buffer).': '重要选项。当使用氡每小时选项时，通过一个区域后，氡每小时低于本轮最高值相应百分比后，才会自动使用传送门，默认值为0%(例：设置为5后，将在氡每小时低于最高值的95%后才自动使用传送门)。另外，此项还有防卡进度的功能 - 当氡每小时低于本轮最高值5倍相应百分比时，无论当前在区域内何处，自动使用传送门。(例：缓冲值设置为2%后，将在将在氡每小时低于最高值的90%时，无论当前在区域内何处，自动使用传送门)。',
    'Pause AutoTrimps': '暂停自动脆皮脚本',
    'Pause AutoTrimps Script (not including the graphs module': '暂停自动脆皮脚本 (不包括图表部分',
    'Helium / Radon': '氦 / 氡',
    'Switch between Helium (U1) and Radon (U2) settings.': '切换氦相关(宇宙1)和氡相关(宇宙2)的设置。',
    'Buy Heliumy ': '氦奇购买 ',
    'Buy Heliumy %': '氦奇购买 %',
    'Buys the Heliumy bonus for': '当日常加成高于此选项中的数值时，使用 ',
    '100 bones': '100骨头',
    'when Daily bonus is above the value set in this setting. Recommend anything above 475. Will not buy if you cant afford to, or value is -1.': '购买氦奇加成。建议设置为475以上的值。如果您骨头不够，或者是此选项数值为-1，则不会购买。',
    'DFA: Off': '日常常时战斗：关闭',
    'DFA: Non-Empowered': '日常常时战斗：非赋能',
    'DFA: All Dailies': '日常常时战斗：所有',
    'DFA: Off / DFA: Non-Empowered / DFA: All Dailies': '日常常时战斗：关闭 / 日常常时战斗：非强化 / 日常常时战斗：所有',
    'Daily Fight Always. Sends trimps to fight if they\'re not fighting in Daily challenges similar to Toxicity/Nom but not on Bloodthirst/Plagued/Bogged Dailies, regardless of BAF. Non-Empowered will only send to fight if the Daily is not Empowered. Essenitally the same as the one in combat, can use either if you wish, except this will only activate in these daily challenges (duh': '设置日常常时战斗。在日常挑战中，当脆皮没有在战斗时，自动让它们开始战斗。设置类似于毒性/美味常时战斗，无视更好自动战斗的设置，但不会在有嗜血(脆皮死亡时敌人恢复全部生命值并增加攻击力)/天灾(敌人每次攻击后使脆皮获得减成，每次攻击减少生命值上限一定比例的生命值)/泥淖(每次脆皮攻击后失去生命值)敌人的日常挑战中激活。非赋能只在日常挑战没有赋能敌人时自动让脆皮开始战斗。实际上跟战斗选项卡下的常时战斗效果类似，日常挑战中启用任意一个均可，但此选项只在日常挑战中生效。',
    'Avoid Empower': '避免赋能敌人变强',
    'Tries to avoid Empower stacks in Empower Dailies. No harm in this being on, so default is On.': '在赋能日常挑战中，尽量避免敌人获得赋能层数。开着没什么坏处，因此该选项默认为开启。',
    'Daily Armor Magic Off': '日常护甲：关闭',
    'DAM: Above': '日常护甲：超过',
    'DAM: H:D': '日常护甲：生命伤害比',
    'DAM: Always': '日常护甲：常时',
    'Daily Armor Magic Off / DAM: Above 80% / DAM: H:D / DAM: Always': '日常护甲：关闭 / 日常护甲：八成 / 日常护甲：生命伤害比 / 日常护甲：常时',
    'Will buy Armor to try and prevent death on Bleed/Plague/Bogged Dailies under the 3 conditions.': '在嗜血/天灾/泥淖挑战中，在以下条件时自动购买护甲以尝试生存下来。',
    'Above': '超过',
    'Will activate at and above 80% of your HZE.': '当到达最高通过区域的80%时，激活日常护甲。',
    'H:D:': '生命伤害比：',
    'Will activate at and above the H:D you have defined in maps.': '当生命伤害比超过地图选项卡下相关设置的数值时，激活日常护甲。',
    'Always': '常时',
    'Will activate always.': '将常时激活。',
    'All options will activate at or': '所有的选项当',
    'below 25% of your health.': '生命值不超过25%时自动激活。',
    'Daily VM Scryer': '日常虚空地图占卜阵型',
    'Only use in Dailies if you have Scryhard II, for er, obvious reasons. Works without the scryer options.': '请只在拥有努力占卜 II精通时开启，原因不用多说。当未开启占卜阵型相关设置时无效。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //脚本3相关结束
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    'Researching': '研究中',
    'Are you sure you want to reset? This will really actually reset your game. You won\'t get anything cool. It will be gone.': '确定要重置吗？这真的会重置你的游戏。你不会因此得到任何酷酷的东西。你的存档会消失的。',
    'This is not the soft-reset you\'re looking for. This will delete your save.': '这不是你要找的软重置。这将删除您的所有存档。',
    'Maybe there\'s something meaty and delicious here to Trap.': '也许可以用陷阱抓到一些嘎嘣脆肉味的东西。',
    'Activate firing mode, turning the job buttons red, and forcing them to fire trimps rather than hire them. The newly unemployed Trimps will start breeding instead of working, but you will not receive a refund on resources.': '激活解雇模式，工作类目下的按钮将变为红色，点击按钮将解雇脆皮，而不是雇佣它们。新失业的脆皮将开始繁殖，你也不会获得任何资源返还。',
    'Apparently the Trimps breed if they\'re not working. Doesn\'t look pleasant.': '显然如果脆皮不工作，它们就会开始繁殖，看起来可不大舒服。',
    'Max wood': '木头上限',
    'Science Per Second': '每秒获得科学点',
    'Farmers': '农民',
    'Lumberjacks': '伐木工',
    'Item Block': '物品格挡',
    'Breeding': '繁殖中',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'You': '你',
    'Food Per Second': '每秒获得食物',
    'Disable firing mode': '关闭解雇模式',
    'Firing': '解雇模式',
    'Figure out how to teach these Trimps to kill some Bad Guys.': '找出教这些脆皮干掉坏蛋的方法。',
    'DMG': '攻击力',
    'Soldiers': '士兵',
    'Item Attack': '物品攻击',
    'Min': '最小',
    'A nice Shed would allow you to keep more wood on hand.': '一个好的窝棚可以让你保留更多的木材。',
    'The food stores are getting pretty full, maybe you should start thinking about a Barn.': '食物似乎快装不下了，也许你应该开始考虑谷仓。',
    'This book will teach your Trimps to Battle on their own.': '这本书可以教会你的脆皮如何自己进行战斗。',
    'Polish the strange Prism you found. When your Trimps bring the polished Prism to Battle': '抛光你发现的奇怪棱镜，你的脆皮将会把抛光棱镜带到战斗中。',
    'This book will increase the block gained from each Gym by 50%.': '这本书使每个健身房增加50%格挡',
    'This book details the fine art of teaching your foremen to actually do stuff instead of just sitting around. When asked, your foremen will start construction on a new Trap if the queue is empty.': '这本书详细介绍了如何教导工头干活，而不是让他们无所事事的技术。队列为空的时候，你的工头会一直建造陷阱。',
    'This book explains methods of using a shield to actually block damage. The current shield will need to be completely destroyed and rebuilt, but it will give block instead of health. <b>This is permanent</b>. $Your Shield Must be Prestige III or higher$': '这本书解释了使用盾牌来格挡伤害的方法。 当前的盾牌将被彻底摧毁并需要重建，但它会给予格挡而不是生命值。 <b>这是永久的</b>。 $你的盾牌必须是重铸 III或更高才行$',
    'This book will teach your Farmers, Lumberjacks, Miners, Scientists, and Explorers to all be twice as productive.': '这本书将让你的农民，伐木工，矿工，科学家和探险家生产力提升为两倍。',
    'Your top scientists are pretty sure this is a Dragimp egg. They know Dragimps love shiny things, maybe it\'ll come out for some gems.': '你的顶尖科学家非常肯定这是一个脆皮龙蛋。他们知道脆皮龙喜欢闪亮的东西，也许它可以帮忙寻找宝石。',
    'Once again, this Prism will need to be polished before it can offer your Trimps any protection. After it\'s polished, this Prism will grant an additional 50% Prismatic Shield to your Trimps!': '这个棱镜需要经过再次抛光才能为你的脆皮提供保护。 经过抛光后，棱镜将为你的脆皮增加50％的棱镜护盾！',
    'Prismalicious': '优质棱镜',
    'Prismatic': '棱镜护盾',
    'Your scientists are pissed. Not because of anything you did, but this gem seems to be making them mad. It\'ll take some research, but you think you can create a map to the place the gem originated from.': '你的科学家很生气。不是因为你做了什么，而是这颗宝石让他们发疯了。这需要点时间来研究，你觉得你可以创建一张地图，从而到达宝石起源地。',
    'You just made a map to the Dimension of Anger! Should be fun!': '你刚制造了一张愤怒维度的地图！应该很有趣！',
    'Anger': '愤怒',
    'Unsurprisingly, that Rage Gem you brought back has everyone up the walls. You should probably hurry up and figure out a way to extract the map from inside before your Scientists end up killing eachother.': '不出所料，你带回的那颗愤怒宝石让所有人都抓狂了。你应该尽快从中提取出地图，否则你们的科学家们要自相残杀完了。',
    'This book will cause each gym you purchase to increase the block provided by all Gyms by 5%. Each consecutive level of this upgrade will increase the block provided by an additional 1%. <b>The extra block provided compounds per Gym.</b>': '这本书将使你购买的每一个健身房增加所有健身房提供的5%格挡。此升级的每个连续级别将增加1%的格挡。<b>每个健身房获得的额外的格挡之间相互叠乘。</b>',
    'This book will teach your Robotrimp how to do a much better job of shrieking, allowing MagnetoShriek to be used on multiple Corrupted cells in addition to Improbabilities. Upgraded MagnetoShriek starts off only being able to affect 1 cell at a time, but each use after purchasing this upgrade will extend the bonus by one additional cell, up to a max of 5 cells (resets on portal). <br/><br/> Each new Bionic Wonderland clear starting at Z185 will permanently increase the cell count cap by 1.': '这本书将教你的脆皮机器人如何更好地尖啸，除了乌有者以外还允许电磁尖啸在多个腐化格子上使用。升级后的电磁尖啸初始一次只能影响一个格子，但每次购买此升级后都将额外增加一个格子，最多5个格子（传送后重置）。<br/><br/>从区域185开始，每通过一个新的仿生仙境，格子上限就永久增加1。',
    'The air may be filled with pollution, but your Trimps seem to be getting smarter and a battle technique from what could only be a past life has crept into your memory. This would probably be a good opportunity to teach it to your Trimps. Once researched, you will be able to enter the \'Heap Formation\'. This can be toggled to increase your Trimps\' health by 4x, but reduce block and attack by half.': '在污染的空气中你的脆皮却似乎变得更聪明了，一种战技悄悄地在你的记忆中浮现，很显然它只可能来自于你的前世。现在可能也是教会脆皮这个战技的好时机。研究后你可以使用"堆叠阵型"。切换到此阵型将把你的脆皮生命值变为4倍，但减少一半的格挡和攻击力。',
    'Another formation has crept back into your memory. Where are these coming from? Who are you? Who cares, this one will allow your Trimps to deal 4x damage at the cost of half health and block.': '另一个阵型又悄悄地在你的记忆中浮现了。是从哪来的？你又是谁？管他呢，此阵型将让你的脆皮攻击力变为4倍，代价是一半的生命值和格挡。',
    'Woah, you just remembered that all Trimps lifting their shields in the same direction at the same time can produce a nice protecting wall. Seems like common sense now that you thought of it. This formation increases block by 4x and cuts the amount of block that enemies can pierce by 50%, at the cost of half attack and health.': '哇哦，你想起来了，所有的脆皮同时同方向举起盾牌能产生一个很好的防护墙。现在看来这就跟常识一样。此阵型将让格挡变为4倍，并且敌人穿透格挡的伤害减少50%，但代价是减少一半的攻击力和生命值。',
    'You really don\'t like reading books, but it seems better than mining yourself.': '你真的不喜欢看书，但这总比自己挖矿更好。',
    'You really don\'t believe it, but that book indicates that Trimps can be smart. Better read it and find out how.': '你虽然不信，但那本书表明脆皮可以很聪明。最好读一读，看看怎么做。',
    'This book holds all of the secrets of upper management. Train your Trimps to train other Trimps.': '这本书包含了高层管理的所有秘密。教会你的脆皮如何训练其他脆皮。',
    'Your scientists think they can study this book to figure out how to train Trimps as Magmamancers. According to your scientists, according to legend, Magmamancers require gems instead of food as sustainance and can increase the rate of Metal gathering more and more as they stay on the same Zone.': '你的科学家认为通过研究这本书可以弄明白如何将脆皮训练为岩浆巫师。据科学家们称，传闻岩浆巫师需要宝石而不是食物来维持，并且当它们在同一区域时，可以越来越多地提高金属采矿的速度。',
    'This book will increase the space gained from each Hut by 100%.': '这本书将使每个小屋的空间增加100%。',
    'This book will increase the space gained from each House by 100%.': '这本书将使每个宅院的空间增加100%。',
    'This book will increase the space gained from each Mansion by 100%.': '这本书将使每个豪宅的空间增加100%。',
    'This book will increase the space gained from each Hotel by 100%.': '这本书将使每个宾馆的空间增加100%。',
    'This book will increase the space gained from each Resort by 100%.': '这本书将使每个度假村的空间增加100%。',
    'Researching this will prestige your shield. This will bring your shield to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of stats given. @': '这个升级将重铸你的盾牌。你的盾牌将回到1级，升级成本大增，但效果也大增。@',
    'Researching this will prestige your dagger. This will bring your dagger to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given. @': '这个升级将重铸你的匕首。你的匕首将回到1级，升级成本大增，但攻击力也大增。@',
    'Researching this will prestige your boots. This will bring your boots to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given. @': '这个升级将重铸你的靴子。你的靴子将回到1级，升级成本大增，但生命值也大增。@',
    'Researching this will prestige your mace. This will bring your mace to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given. @': '这个升级将重铸你的狼牙棒。你的狼牙棒将回到1级，升级成本大增，但攻击力也大增。@',
    'Researching this will prestige your helmet. This will bring your helmet to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given. @': '这个升级将重铸你的头盔。你的头盔将回到1级，升级成本大增，但生命值也大增。@',
    'Researching this will prestige your polearm. This will bring your polearm to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given. @': '这个升级将重铸你的战戟。你的战戟将回到1级，升级成本大增，但攻击力也大增。@',
    'Researching this will prestige your pants. This will bring your pants to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given. @': '这个升级将重铸你的裤子。你的裤子将回到1级，升级成本大增，但生命值也大增。@',
    'Researching this will prestige your axe. This will bring your axe to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given. @': '这个升级将重铸你的战斧。你的战斧将回到1级，升级成本大增，但攻击力也大增。@',
    'Researching this will prestige your shoulderguards. This will bring your shoulderguards to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given. @': '这个升级将重铸你的护肩。你的护肩将回到1级，升级成本大增，但生命值也大增。@',
    'Researching this will prestige your greatsword. This will bring your greatsword to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given. @': '这个升级将重铸你的巨剑。你的巨剑将回到1级，升级成本大增，但攻击力也大增。@',
    'Researching this will prestige your breastplate. This will bring your breastplate to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given. @': '这个升级将重铸你的胸铠。你的胸铠将回到1级，升级成本大增，但生命值也大增。@',
    'Researching this will prestige your arbalest. This will bring your arbalest to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of attack given. @': '这个升级将重铸你的强弩。你的强弩将回到1级，升级成本大增，但攻击力也大增。@',
    'Researching this will prestige your gambeson. This will bring your gambeson to level 1 and vastly increase the cost of further upgrades, but will vastly increase the amount of health given. @': '这个升级将重铸你的棉甲。你的棉甲将回到1级，升级成本大增，但生命值也大增。@',
    'This book will teach your trimps how to be 10% more efficient at making baby Trimps!': '这本书将教会你的脆皮更好的繁殖，提高10%的繁殖效率！',
    'This book will teach your Trainers to increase block by an additional 5%!': '这本书将教会你的训练师额外增加5%的格挡！',
    'This book will teach you how to be twice as productive in everything you do! Hurray!': '这本书将教会你在你自己做的每件事上效率翻倍！万岁！',
    'Note that this applies only to your productivity, not workers.': '请注意，这个升级只对你自己生效，对工人无效。',
    'This book will teach your Trimps how to mine 25% faster!': '这本书将教会你的脆皮增加25%的采矿速度！',
    'This book will teach your Trimps how to cut wood 25% faster!': '这本书将教会你的脆皮增加25%的伐木速度！',
    'This book will teach your Trimps how to farm 25% faster!': '这本书将教会你的脆皮增加25%的耕作速度！',
    'This book will teach your Trimps how to science things 25% faster!': '这本书将教会你的脆皮增加25%的研究速度！',
    'This book will teach your Trimps how to explore 300% more efficiently!': '这本书将教会你的脆皮提升300%探险效率！',
    'This book will teach your Trimps how to mine ?% faster!': '',
    'This book will teach your Trimps how to chop wood ?% faster!': '',
    'This book will teach your Trimps how to farm ?% faster!': '',
    'This book will teach your Trimps how to science things ?% faster!': '',
    'It\'s time to get some Trimps up in here.': '是时候获取一些脆皮了。',
    'Ah wood, the building material of kings. The building material of everyone else too, but still.': '啊，木头，建筑材料之王（译者注：同时也可以指国王的建筑材料）。当然也是其他人的建筑材料，就这样吧。',
    'Wet wood won\'t work! Better get a Shed going.': '湿木头是没法拿来用的！ 最好弄起一个窝棚来。',
    'You caught your very first Trimp in this new dimension! It can smell other Trimps on you and looks confused. You promptly send him off to work!': '你在新的维度中抓住了第一个脆皮！它闻到了其他脆皮的气息，看起来一脸懵逼。你赶紧把它派去干活了。',
    'Where would you be in life without Science? Not this dimension, that\'s for sure.': '如果没有科学，生活会变得怎么样？至少，你不会在这个维度，这点可以肯定。',
    'You\'ll need some wood to build stuff...': '你需要木头来造东西。',
    'There\'s a weird impish little creature in the trap. A Trimp, you decide to call it. Since you\'re so creative, you could probably train this Trimp to help out.': '陷阱里有一个看起来很皮的脆弱小动物，你决定叫它 脆皮 。既然你这么有创造力，或许可以考虑训练它帮你干活。',
    'Building': '建造中',
    'Mining': '挖矿中',
    'BLK': '格挡',
    'This planet feels so familiar, yet so foreign. Maybe it\'s time to start sciencing things.': '这颗行星看起来很熟悉，却又很陌生。或许是时候研究点什么了。',
    'War... what is it good for? Exploration, or something.': '战争...有什么好处？帮助继续探索，或者什么的。',
    'As you finally step out into the Battle Zones, the first thing you notice is that your Heirlooms feel weaker here. Oh well, 1000 more times into the fray... "': '当你最终离开战斗区域时，你马上注意到传家宝感觉弱了很多。好吧，又要1000多次上战场了...“',
    'The newly established Trimp zoning committee is too busy drooling to approve anything, so you take it on yourself to start building some Huts.': '新成立的脆皮区委会忙着流口水，没空审批，所以你决定自己建造一些小屋。',
    'Doesn\'t seem like all of these little guys will fit in your ship. Luckily, you remember how to make small huts for shelter.': '似乎没法把所有的小家伙们都弄上你的船。还好你还记得如何建造小屋来给它们一个容身之地。',
    'The TZC has finally approved a House blueprint. To your surprise, it looks fairly decent! You decide to immediately build some.': '脆皮区委会最终通过了宅院的蓝图。你很吃惊，因为它看起来相当棒。于是你决定立即开始建造。',
    'Your Trimps look really bored.': '你的脆皮看起来相当无聊。',
    'Better hurry up to the fighting Zones so you don\'t have to sit around here all day watching Trimps breed.': '最好快点到战斗区域，这样就不必整天无所事事只能看着脆皮繁殖。',
    'Prestige your Warpstation, increasing the amount of Trimps it can house by 20% and the base cost by 75%. There\'s no turning back, learning these blueprints will make your previous model of Warpstation obsolete but functional, and you will keep all Trimps housed there. Learning this will build one new Warpstation. ': '重铸你的跃迁核心，使它可以多容纳20％的脆皮，但基本成本增加75％。一旦重铸就没有回头路了，重铸后，你之前的跃迁核心蓝图将被废弃，但已经建造好的跃迁核心仍然可以运作，容纳的脆皮也将完整保留。学习它会直接建造一个新的跃迁核心。',
    'Holding Ctrl will cause as many Warpstations as you currently own to be purchased immediately after Gigastation, if you can afford them.': '按住Ctrl键再点击，将在购买千兆核心后尽可能多的购买跃迁核心，直到建造不起为止。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //未分类：
    'primary': '主要',
    'secondary': '次要',
    'exotic': '奇异',
    'helium': '氦',
    'essence': '精华',
    'token': '符记',
    'magma': '岩浆',
    'events': '事件',
    'repeated': '重复',
    'unique': '独特',
    'trimp': '脆皮',
    'enemy': '敌人',
    'food': '食物',
    'wood': '木头',
    'metal': '金属',
    'fragments': '碎片',
    'gems': '宝石',
    'science': '科学',
    'Science': '科学',
    'Fire': '解雇',
    'Frost': '冰霜',
    'Wind': '风',
    'Ice': '冰',
    //传家宝
    'miner': '矿工',
    'lumber': '木材',
    'farming': '农业',
    'Poison': '毒',
    'Knowledge': '知识',
    'Condenser': '冷凝',
    'Strength': '力量',
    'Lightning': '闪电',
    'Monday': '周一',
    'Tuesday': '周二',
    'Wednesday': '周三',
    'Thursday': '周四',
    'Friday': '周五',
    'Saturday': '周六',
    'Sunday': '周日',
    'Corrupt': '腐化',
    'Healthy': '健康的',
    'Nullifium': '虚空物质',
    'Nu': '虚空物质',
    ' and': '和',
    '': '',
    //传家宝效果
    'Ss': '尖塔石头',
    '': '',
    '': '',
    '': '',
    '': '',
    //特权
    'Food/Wood/Metal': '食物/木头/金属',
    'cache': '储藏箱',
    'bone': '骨头',
    'Trap': '陷阱',
    'Barn': '谷仓',
    'Shed': '窝棚',
    'Forge': '锻造厂',
    'Hut': '小屋',
    'House': '宅院',
    'Mansion': '豪宅',
    'Hotel': '宾馆',
    'Resort': '度假村',
    'Gateway': '维度裂隙',
    'Wormhole': '虫洞',
    'Collector': '汲能设施',
    'Warpstation': '跃迁核心',
    'Gym': '健身房',
    'Tribute': '贡品',
    'Tribute X': '贡品 X',
    'Loot': '战利品',
    'Unlocks': '解锁',
    'enabled': '启用',
    //修饰符
    'Fast Attacks': '快速攻击',
    'Large Cache': '大储藏箱',
    'Huge Cache': '巨大储藏箱',
    'Small Savory Cache': '小美味储藏箱',
    'Small Wooden Cache': '小木制储藏箱',
    'Small Metal Cache': '小金属储藏箱',
    'Small Research Cache': '小研究储藏箱',
    'Large Savory Cache': '大美味储藏箱',
    'Large Wooden Cache': '大木制储藏箱',
    'Large Metal Cache': '大金属储藏箱',
    'Large Research Cache': '大研究储藏箱',
    'Fast Attacks (FA': '快速攻击 (FA',
    'Large Cache (LC': '大储藏箱 (LC',
    'Huge Cache': '巨大储藏箱',
    'Huge Cache (HC': '巨大储藏箱 (HC',
    'Small Savory Cache (SSC': '小美味储藏箱 (SSC',
    'Small Wooden Cache (SWC': '小木制储藏箱 (SWC',
    'Small Metal Cache (SMC': '小金属储藏箱 (SMC',
    'Small Research Cache (SRC': '小研究储藏箱 (SRC',
    'Large Savory Cache (LSC': '大美味储藏箱 (LSC',
    'Large Wooden Cache (LWC': '大木制储藏箱 (LWC',
    'Large Metal Cache (LMC': '大金属储藏箱 (LMC',
    'Large Research Cache (LRC': '大研究储藏箱 (LRC',
    'Prestigious': '声望',
    'Legendary': '传奇',
    'Magnificent': '华丽',
    'Magmatic': '岩浆',
    'Ethereal': '超凡',
    'Story': '故事',
    '- Earn 10 seconds of food production each time you complete this map.': '- 每次完成地图时获得10秒的食物产量',
    '- Earn 10 seconds of metal production each time you complete this map.': '- 每次完成地图时获得10秒的金属产量',
    '- Earn 10 seconds of wood production each time you complete this map.': '- 每次完成地图时获得10秒的木材产量',
    '- Earn 20 seconds of food production each time you complete this map.': '- 每次完成地图时获得20秒的食物产量',
    '- Earn 20 seconds of metal production each time you complete this map.': '- 每次完成地图时获得20秒的金属产量',
    '- Earn 20 seconds of wood production each time you complete this map.': '- 每次完成地图时获得20秒的木材产量',
    'Abandon Soldiers': '放弃士兵',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //1.2.标题
    'Trap': '陷阱',
    'Trap X': '陷阱 X',
    'Barn': '谷仓',
    'Barn X': '谷仓 X',
    'Shed': '窝棚',
    'Shed X': '窝棚 X',
    'Forge': '锻造厂',
    'Forge X': '锻造厂 X',
    'Hut': '小屋',
    'Hut X': '小屋 X',
    'House': '宅院',
    'House X': '宅院 X',
    'Mansion': '豪宅',
    'Mansion X': '豪宅 X',
    'Hotel': '宾馆',
    'Hotel X': '宾馆 X',
    'Resort': '度假村',
    'Resort X': '度假村 X',
    'Gateway': '维度裂隙',
    'Wormhole': '虫洞',
    'Collector': '汲能设施',
    'Warpstation': '跃迁核心',
    'Gym': '健身房',
    'Gym X': '健身房 X',
    'Tribute': '贡品',
    'Nursery': '托儿所',
    'Nursery X': '托儿所 X',
    'Farmer': '农民',
    'Farmer X': '农民 X',
    'Lumberjack': '伐木工',
    'Lumberjack X': '伐木工 X',
    'Miner': '矿工',
    'Miner X': '矿工 X',
    'Scientist': '科学家',
    'Scientist X': '科学家 X',
    'Scientists': '科学家',
    'Trainer': '训练师',
    'Trainer X': '训练师 X',
    'Trainers': '训练师',
    'Explorer': '探险家',
    'Explorer X': '探险家 X',
    'Magmamancer': '岩浆巫师',
    'Magmamancer X': '岩浆巫师 X',
    'Amalgamator': '合并者',
    'Amalgamator X': '合并者 X',
    'Fire Trimps': '解雇脆皮',
    'Gigastation': '千兆核心',
    'Geneticistassist': '遗传学家助手',
    'Geneticist': '遗传学家',
    'Custom': '自定义',
    'Confirm Purchase': '确认购买',
    'Battle': '战斗',
    'Carpentry': '木工',
    'Artisanistry': '手艺娴熟',
    'Range': '范围',
    'Bloodlust': '嗜血',
    'Miners': '矿工',
    'Speedminer': '采矿加速',
    'Speedlumber': '砍伐加速',
    'Speedfarming': '耕作加速',
    'Speedscience': '研究加速',
    'Efficiency': '生产效率',
    'Megamace': '巨型狼牙棒',
    'Hellishmet': '地狱头盔',
    'Supershield': '超级盾牌',
    'Dagadder': '诗歌匕首',
    'Bootboost': '增速靴',
    'Polierarm': '画戟',
    'Pantastic': '护腿',
    'Axeidic': '强酸战斧',
    'Smoldershoulder': '闷火护肩',
    'Greatersword': '双手巨剑',
    'Bestplate': '精良胸铠',
    'Speedexplorer': '探险家加速',
    'Gigastation': '千兆核心',
    'TrainTacular': '格挡提升',
    'Potency': '繁殖效率',
    'Max': '最大',
    'AutoStorage': '自动存储',
    'AutoStructure': '自动建造',
    'Configure AutoStructure': '自动建造配置',
    'AutoUpgrade': '自动升级',
    'AutoPrestige': '自动重铸装备',
    'AutoGolden': '自动黄金升级',
    'Harmbalest': '高强弩',
    'GambesOP': '强棉甲',
    'Rename Preset': '重命名预设',
    'Pierce': '穿透',
    'Fast': '快速',
    'Save Map Settings': '保存地图设置',
    'Reset Map Settings': '重置地图设置',
    'Recycle All': '回收所有',
    'Map Preset': '地图预设',
    'Gymystic': '健身学',
    'Shieldblock': '盾牌格挡',
    'Trapstorm': '自动陷阱',
    'Blockmaster': '格挡大师',
    'Decay': '衰变',
    'Show/Hide Map Config': '显示/隐藏地图设置',
    'Mastery': '专精',
    'Empowerments of Nature': '自然赋能',
    'Switch Daily': '选择日常挑战',
    'Empower': '赋能',
    'Pressure': '压力',
    'MagnetoShriek': '电磁尖啸',
    'Unliving': '亡灵化',
    'Bloodthirst': '嗜血',
    'Scryer Formation': '占卜者阵型',
    'Fire Trap': '火焰陷阱',
    'Frost Trap': '冰霜陷阱',
    'Shift Up': '上移',
    'Shift Down': '下移',
    'Sell Trap/Tower': '出售陷阱/塔',
    'Queue': '队列',
    'Biome': '生物群落',
    'Size': '尺寸',
    'Loot': '劫掠',
    'Special Modifier': '特殊修饰符',
    'Extra Zones': '额外区域',
    'Difficulty': '难度',
    'Perfect Sliders': '完美滑块',
    'Enchanted Gardens': '魔法花园',
    'Repeat Map': '重复地图',
    'Heirloom': '传家宝',
    'Trustworthy Trimps': '可信的脆皮',
    'World Info': '世界信息',
    'AutoGold': '自动黄金升级',
    'Threat': '威胁',
    'Enemies': '敌人',
    'Runestones': '符石',
    'Spirestones': '尖塔石头',
    'Trimps Per Second': '每秒脆皮',
    'Max Trimps': '脆皮上限',
    'AutoJobs': '自动工作',
    'Respec Masteries': '专精洗点',
    'Configure Maps': '配置地图',
    'Import Perk Preset': '导入特权预设',
    'Export Perk Setup': '导出特权设置',
    //专精
    'Foremany': '大群工头',
    'Quick Gen': '快速发生',
    'AutoStructure': '自动建造',
    'Natural Diplomacy III': '自然斡旋 III',
    'Megascience': '超级研究',
    'Megafarming': '超级耕作',
    'Condenser Tower': '冷凝塔',
    'Condenser Tower II': '冷凝塔 II',
    'Knowledge Tower': '知识塔',
    'Knowledge Tower II': '知识塔 II',
    'Poison Trap': '剧毒陷阱',
    'Poison Trap II': '剧毒陷阱 II',
    'Megaminer': '超级矿工',
    'Lightning Trap': '闪电陷阱',
    'Lightning Trap II': '闪电陷阱 II',
    'Frost Trap IV': '冰霜陷阱 IV',
    'Strength Tower': '力量塔',
    'Strength Tower II': '力量塔 II',
    'Strength Tower III': '力量塔 III',
    'Fire Trap III': '火焰陷阱 III',
    'Trap Layout 1': '陷阱布局 1',
    'Trap Layout 2': '陷阱布局 2',
    'Configure AutoJobs': '配置自动工作',
    'Configure Generator State': '配置生成器状态',
    'Spire Settings': '尖塔设置',
    'Well Fed': '营养充足',
    'Fluffy': '绒绒',
    'Scruffy': '污污',
    'UberHotel': '超级宾馆',
    'UberMansion': '超级豪宅',
    'UberResort': '超级度假村',
    'UberHouse': '超级宅院',
    'UberHut': '超级小屋',
    'Map Corruption': '地图腐化',
    'Food/Wood/Metal Loot Breakdown': '食物/木头/金属 劫掠明细',
    'Breezy': '微风',
    'Confirm Respec Masteries': '确认专精洗点',
    //成就
    'Void': '虚空',
    'Gym X10': '健身房 X10',
    'Your Email': '你的电子邮箱',
    'Not AutoSaving': '不自动保存',
    'Register a PlayFab Account': '注册一个PlayFab账号',
    'Can only be run once!': '只能运行一次!',
    'Reward does not count toward Bone Portals or affect best He/Hr stat.': '奖赏不计入骨头购买传送门数据，也不计入最好的氦/小时统计。',
    'This book will help your Trimps make more Trimps!': '这本书将帮助你的脆皮产生更多的脆皮！',
    'This book will teach your Trimps how to chop wood 60% faster!': '这本书将教你如何让脆皮伐木加速60%',
    'This book will teach your Trimps how to farm 60% faster!': '这本书将教你如何让脆皮耕作加速60%',
    'This book will teach your Trimps how to mine 60% faster!': '这本书将教你如何让脆皮挖矿加速60%',
    'This book will teach your Trimps how to science things 60% faster!': '这本书将教你如何让脆皮研究科学加速60%',
    'You will not earn a new perk.': '你不会赚到一个新的额外奖励。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    //成就结束
    'Toxic': '毒性',
    'Block': '格挡',
    'Message Config': '消息设置',
    'Buy Max': '购买最大数量',
    'Save Perk Preset': '保存额外特权预设',
    'Rename Perk Preset': '重命名额外特权预设',
    'Load Perk Preset': '加载额外特权预设',
    'Respec': '修改',
    'Health': '生命值',
    'Attack': '攻击力',
    'Megalumber': '超级砍伐',
    'Void Map': '虚空地图',
    'Corruption': '腐败',
    'The Magma': '岩浆',
    'Error': '出错啦',
    '': '',
    '': '',
    '': '',
    //1.3.地图
    'Prismatic Palace': '棱镜宫殿',
    'Dimension of Rage': '暴怒维度',
    'Dimension of Anger': '愤怒维度',
    'The Prison': '监狱',
    'Melting Point': '熔点',
    'Bionic Wonderland': '仿生仙境',
    'Bionic Wonderland X': '仿生仙境X',
    'Bionic Wonderland IX': '仿生仙境IX',
    'Bionic Wonderland XI': '仿生仙境XI',
    'The Block': '障碍区',
    'The Wall': '高墙',
    'Big Wall': '巨墙',
    'Trimple Of Doom': '末日神殿',
    'Imploding Star': '爆炸之星',
    'Tricky Paradise': '整蛊天堂',
    'Haunted Gardens': '闹鬼花园',
    'Whispering Gardens': '耳语花园',
    'Abandoned Gardens': '被遗弃的花园',
    'Bewitched Gardens': '迷人的花园',
    'Terrible Gardens': '可怕的花园',
    'Dark Gardens': '黑暗花园',
    'Blighted Gardens': '枯萎的花园',
    'Sacred Gardens': '神圣花园',
    'Weird Gardens': '怪异的花园',
    'Steamy Gardens': '蒸汽花园',
    'Red Gardens': '红色花园',
    'Calm Gardens': '平静的花园',
    'Evil Gardens': '邪恶花园',
    'Dry Gardens': '干燥的花园',
    'Enchanted Gardens': '魔法花园',
    'Light Gardens': '光明花园',
    'Dirty Gardens': '肮脏的花园',
    'Fiery Gardens': '火热的花园',
    'Deadly Void': '致命的虚空',
    'Heinous Void': '令人发指的虚空',
    'Heinous Pit': '令人发指的坑',
    'Heinous Nightmare': '令人发指的梦魇',
    'Heinous Descent': '令人发指的血统',
    'Poisonous Void': '有毒虚空',
    'Poisonous Pit': '毒坑',
    'Poisonous Nightmare': '有毒的噩梦',
    'Poisonous Descent': '有毒的血统',
    'Deadly Pit': '致命的坑',
    'Deadly Descent': '致命的血统',
    'Deadly Void': '致命的虚空',
    'Deadly Nightmare': '致命的梦魇',
    'Destructive Descent': '破坏性的血统',
    'Destructive Nightmare': '破坏性的噩梦',
    'Destructive Void': '破坏性虚空',
    'Destructive Pit': '破坏性虚坑',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //自动脚本3汉化文本
    'Allocate Perks': '分配特权',
    'Always Level': '始终等级',
    'AM Portal': 'AM 传送门',
    'Any': '任何',
    'Black Bog': '黑色沼泽',
    'Battle Radon': '战斗氡',
    'AutoTrimps': '自动脆皮',
    'AutoRoboTrimp': '自动脆皮机器人',
    'Auto Worker Ratios': '自动工人比率',
    'Auto Stance': '自动姿态',
    'Auto Maps': '自动地图',
    'Auto Maps On': '自动地图 开启',
    'Auto Maps Off': '自动地图 关闭',
    'Third String': '第三个字符串',
    'Throttle Supply (or Capacity': '抑制供给(或容量',
    'Void + Battle': '虚空 + 战斗',
    'Void Battle': '虚空战斗',
    'voidMaps': '虚空地图',
    'VoidMaps: NEVER': '虚空地图: 从不',
    'Voids Cell': '虚空格子',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

    //未分类20190806
    'Smithy': '铁匠铺',
    'Items': '物品',
    'Layout': '布局',
    'Load': '加载',
    'Mine': '采矿',
    'New': '新',
    'Nothing in queue...': '队列中什么都没有......',
    'Other': '其它',
    'Perks': '特权',
    'Portals Used': '使用的传送门',
    'Preset': '预设',
    'Rename': '重命名',
    'Recycle': '回收',
    'Recycle Map': '回收地图',
    'Replace': '替换',
    'Research': '研究',
    'Research first': '研究优先',
    'Resource': '资源',
    'Statistics!': '统计!',
    'Unequip': '卸下',
    'Upgrades': '升级',
    'Upgrade': '升级',
    'Achievements': '成就',
    'Abandon Challenge': '放弃挑战',
    'All': '全部',
    'Achieves': '成就',
    'AutoTraps Off': '自动陷阱捕捉 关闭',
    'AutoUpgrade Off': '自动升级 关闭',
    'Back to Search': '返回搜索',
    'Barns Auto-purchased': '谷仓自动购买',
    'Bone Trader': '骨法商人',
    'Trade': '交易',
    'Build': '建造',
    'Game Saved!': '游戏已保存！',
    'Gather': '收集',
    'Equip': '装备',
    'Export': '导出',
    'Forest': '森林',
    'Import': '导入',
    'Help': '帮助',
    'More Info': '更多信息',
    'Chop': '伐木',
    'Continue': '继续',
    'Close': '关闭',
    'Earned All Time': '一直赚的',
    'Equipment': '装备',
    'Challenge': '挑战',
    'Cancel': '取消',
    'Gathering': '收集中',
    'Chopping': '伐木中',
    'Clear All Perks': '清除所有特权',
    'Random': '随机',
    'Remove': '移除',
    'Repeat Off': '重复 关闭',
    'Quality of Life': '生活质量',
    'Stop Carrying': '停止携带',
    'Stats': '统计',
    'Trimps': '脆皮',
    'Trimps Info': '脆皮信息',
    'Trapping (': '陷阱 (',
    'Auto Saving': '自动保存',
    'AutoEquip': '自动装备',
    'AutoFight Off': '自动战斗 关闭',
    'Save': '保存',
    'Settings': '设置',
    'Sea': '海洋',
    'Heirlooms - Gifts to past you from future you': '传家宝-来自于未来，生效于过去',
    'Activate Portal': '激活传送门',
    'Boosts': '提升',
    'Depths': '深渊',
    'General': '常规',
    'You have': '你有',
    'Your next mastery costs': '你的下一个专精成本',
    'Void Maps (': '虚空地图 (',
    'AutoPrestige Off': '自动声望 关闭',
    'Browse All': '浏览所有',
    'Change Universe': '更改宇宙',
    'Choose a Category Below, or Search for a Setting/Keyword': '选择下面的类别，或者搜索设置/关键字',
    'Each Trap allows you to catch 1 thing.': '每个陷阱允许您捕获一样东西。',
    'This is a building in your queue, you\'ll need to click "Build" to build it. Clicking an item in the queue will cancel it for a full refund.': '这是您队列中的一个建筑物，您需要单击“建造”来构建它。 单击队列中的项目将取消它以获得全额退款。',
    'Spawns in Maps': '在地图中出现',
    'Spawns in World': '在世界中出现',
    'Spent on Perks': '花在特权上',
    '% bonus': '% 奖励',
    '% extra damage': '% 额外伤害',
    'You are dealing': '你获得',
    'View Current Challenge': '查看当前的挑战',
    'Exotic Imp-orts': '奇异外皮',
    'Download as File': '下载为文件',
    'Import your save string! It\'ll be fun, I promise.': '导入存档字符串！ 我保证，这会很有趣。',
    'You do not currently have an active challenge.': '您目前没有进行中的挑战。',
    'You can upgrade any Staff and Shield to HALF the value of your total earned Nu. Nu is not spent, but dictates how powerful your Heirlooms can be!': '您可以将任何棍棒和盾牌升级为HALF，即您获得的总Nu值。 Nu不会花掉，但决定你的传家宝有多强大！',
    'Unlock at Z': '解锁于区域',
    'Trimps Official Discord': '脆皮官方Discord',
    'The currency to upgrade and replace stats,': '用于升级和替换统计数据的货币，',
    'Other Goodies': '其他好东西',
    'Mountain': '山峰',
    'Helium Canisters': '氦罐',
    'Loot off': '劫掠 关闭',
    'Combat off': '战斗 关闭',
    'Unlocks off': '解锁 关闭',
    'Story off': '故事 关闭',
    'Nullifium, or Nu,': '虚空物质，或者Nu',
    'Performance': '性能',
    'Pop-ups and Alerts': '弹出窗口和警报',
    'Sheds Auto-purchased': '窝棚自动购买',
    'Offline Progress': '离线进度',
    'You can click a stat to upgrade or replace it.': '您可以单击统计信息以升级或替换它。',
    'You can also choose to activate a challenge before using your portal. Completing a challenge will earn you a permanent reward. You can abandon or view an active challenge at any time by clicking the "View Perks" button.': '您还可以选择在使用传送门之前激活挑战。 完成挑战将获得永久奖励。 您可以通过单击“查看特权”按钮随时放弃或查看活动挑战。',
    'Carry': '携带',
    'Automatically gain helium equal to the amount you earned on your best run': '自动获得氦，等于您在最佳运行中获得的数量',
    'Locked': '未解锁',
    'Reward': '奖励',
    'can only be gathered by recycling an Heirloom. You can also click on the Heirloom\'s name on this menu to rename it.': '只能通过回收传家宝来收集。 您还可以单击此菜单上的传家宝名称进行重命名。',
    'Any Heirlooms in the "Temporary" section will be recycled for Nullifium on portal.': '“临时”部分中的任何传家宝将在传送门上回收虚空物质。',
    'better get some more achievements': '更好地获得更多的成就',
    'Level': '等级',
    'A green shimmer erupts then disappears, and you hit the ground. You look pretty hungry...': '绿色微光爆发后消失，你撞到地面。 你看起来很饿...',
    'Sweet, thanks.': '甜蜜，谢谢。',
    'Total': '总计',
    'Base': '基础',
    'Click twice to customize.': '单击两次以自定义。',
    'Fight': '战斗',
    'Item Health': '物品生命',
    'Found a Skeletimp!': '找到了一个Skeletimp！',
    'AutoStructure Off': '自动建造 关闭',
    'AutoJobs Off': '自动工作 关闭',
    'AutoFight': '自动战斗',
    'AutoFight On': '自动战斗 开启',
    'AutoStorage On': '自动存储 开启',
    'AutoUpgrade On': '自动升级 开启',
    'No Modifier': '没有变化',
    'Producing': '生产',
    'Repeat On': '重复 开启',
    'If you abandon this challenge, the portal will become unstable and the world will restart (you\'ll keep permanent bonuses like helium': '如果你放弃这个挑战，传送门将变得不稳定，世界将重新开始（你将获得永久奖励，如氦',
    'Instantly earn the next 12 or 36 hours worth of resources! If you don\'t have enough storage, storage will be purchased (and the cost deducted) automatically.': '立即获得下一个12或36小时的资源！ 如果您没有足够的存储空间，将自动购买存储空间（并扣除成本）。',
    'Hybrid': '混合型',
    'Housing/Tick': '房屋/Tick',
    'Dimensional Generator': '维度发生器',
    'Weapons First': '武器优先',
    'Forges Auto-purchased': '锻造厂自动购买',
    'Runestones per Second': '符石每秒',
    'Sell All': '全部出售',
    'Upgrade (': '升级 (',
    'View Perks': '查看特权',
    'Pause Spire': '暂停尖塔',
    'Fuel': '燃料',
    'Clear Spire III to unlock the Lightning Trap and Knowledge Tower, then raise your Spire\'s Threat to 1100 and build your eleventh Floor.': '清除尖塔 III去解锁闪电陷阱和知识塔，然后将尖塔的威胁提高到1100并建立你的第11层。',
    'Exotic Imp-orts will be unlocked permanently once purchased, and will stick around through portals. Each has a 3% chance to spawn per square and better loot than normal enemies. Collect them all!': '一旦购买，奇异外皮将永久解锁，并将通过传送门保持不变。 每个方块产生3％的几率和比普通敌人更好的战利品。 全部收集它们！',
    'You\'ve got a new Trap and Tower, your Spire is still growing, and your power is growing with it! Your Trimps are slightly annoyed that they have to clean up the occasional Bad Guy that makes it through the Spire and into the town, but they can handle it. They all agree that life in general is just more fun when there\'s a giant Spire grinding Bad Guys at the entrance to their town.': '你有一个新的陷阱和塔，你的尖塔仍在增长，你的力量正在增长！ 你的脆皮有点恼火，他们不得不清理偶尔通过尖塔并进入城镇的坏家伙，但他们可以处理它。 他们都同意，当他们的城镇入口处有一个巨大的尖塔磨坏人们时，生活总体上会更有趣。',
    'While you\'re feeling comfortable maintaining your Spire\'s defenses with the tools you have, you still feel like there\'s something missing. Your Scientists say that they could perhaps create one more Trap and Tower, but again they\'ll need to study a Core from an even higher Spire.': '虽然你觉得使用你拥有的工具来维持尖塔的格挡感觉很舒服，但你仍然觉得有些东西缺失了。 你的科学家说，他们或许可以创造一个更多的陷阱和塔，但他们再次需要从更高的尖塔学习核心。',
    'Sell a Trap/Tower': '出售一个陷阱/塔',
    'Shrink Window': '收缩窗口',
    ' Lv': ' 等级',
    'Back to World': '返回世界',
    'can only be gathered by recycling an Heirloom.': '只能通过回收传家宝来收集。',
    'Cell': '格子',
    'Chrome and Firefox are currently the only fully supported browsers.': 'Chrome和Firefox当前是唯一受完全支持的浏览器。',
    'Click on an Achievement on this screen to track it!': '单击此屏幕上的成就进行跟踪！',
    'Starting...': '开始...',
    'Stop Here': '停在这里',
    'Wanna run a map?': '想运行地图吗？',
    'What is This?!': '这是什么？！',
    'World Level Map': '世界等级地图',
    'You can also click on the Heirloom\'s name on this menu to rename it, or click on the icon to change it!': '您也可以在此菜单上单击传家宝的名称来重命名，或单击图标进行更改！',
    'Exotic Imp-orts will be unlocked permanently once purchased, and will stick around through portals. Each has a 3% chance to spawn per cell and better loot than normal enemies. Collect them all!': '购买后，奇异外皮将会永久解锁，并将通过传送门持续存在。 每个单元格有3％的几率产生一个外来物种，并且比普通敌人有更好的战利品。 全部收集！',
    'click here to send a message on Reddit': '单击此处在Reddit上发送消息',
    'community-created Trimps Wiki!': '社区创建的脆皮 Wiki！',
    'If you need to contact the developer for any reason,': '如果出于任何原因需要与开发人员联系，',
    'If you want to read about or discuss the finer details of Trimps mechanics, check out the': '如果您想阅读或讨论脆皮力学的更多细节，请查看',
    'Need help, found a bug or just want to talk about Trimps? Check out the': '需要帮助，发现错误或只是想谈论脆皮？ 看看',
    'or come hang out in the new': '或参加新的功能',
    'or find Greensatellite in the Trimps Discord.': '或在脆皮 Discord中找到Greensatellite。',
    'If you would like to make a donation to help support the development of Trimps, you can now do so with PayPal! If you want to contribute but can\'t afford a donation, you can still give back by joining the community and sharing your feedback or helping others. Thank you either way, you\'re awesome!': '如果您想捐款以支持脆皮的开发，现在就可以使用PayPal！ 如果您想捐款但负担不起，您仍然可以通过加入社区，分享您的反馈或帮助他人来回馈社会。 无论哪种方式，谢谢你，你真棒！',
    'This is your save string. There are many like it but this one is yours. Save this save somewhere safe so you can save time next time.': '这是您的存档字符串。 有很多类似的东西，但这是你的。 将此保存到安全的地方，以便下次节省时间继续玩。',
    'Increases your maximum food by 100%.': '增加你的食物上限100%。',
    'Increases your maximum wood by 100%.': '增加你的木头上限100%。',
    'Switching to this option will spend the majority of your resources with each purchase.': '转换到这个选项将花费你的大部分资源在每次购买。',
    'Send your poor Trimps to certain doom in the battlefield. You\'ll get cool stuff though, they\'ll understand. (Hotkey: F': '将您可怜的脆皮带到战场上的某些厄运。 他们会明白，但是您会得到很棒的东西。 （热键：F',
    'You have been in this Zone ': '你一直在这个区域',
    'Amount': '数量',
    'Line Total': '总行数',
    'You found plans for a shield! It even tells you how to upgrade it, if you have enough wood. That was nice of that Bad Guy.': '您已经找到了盾牌的计划！ 如果您有足够的木材，它甚至会告诉您如何升级。 那个坏家伙真好。',
    'You found an ancient book titled Bloodlust. You should look at it or something.': '您发现一本古老的书，名为《嗜血》。 您应该看一下它。',
    'Allow the Trimps to start fighting on their own whenever their town gets overcrowded (Hotkey: A': '每当镇上人满为患时，让脆皮自己开始战斗（热键：A',
    'You found plans for a Dagger! Fancy!': '你找到匕首的设计图了!真想不到!',
    'You found plans for Boots! Swell!': '您找到了靴子的计划！ 隆起！',
    'You found a book called Speedminer!': '您发现了一本书叫做采矿加速！',
    'You found a book about Einstrimp!': '你找到一本关于爱因斯坦脆皮的书。!',
    'You found a book called Speedlumber! It looks long.': '您找到了一本叫做砍伐加速的书！ 看起来很长。',
    'Your Trimps threw a party while you were out': '你不在家时，你的脆皮开了个聚会',
    'Starting Offline Progress... (Updates every 2000 processed loops': '开始同步离线进度……(每处理2000个循环更新一次',
    'Estimated completion in': '估计完成时间',
    'our Trimps were a few minutes away from burning the place down': '我们的脆皮距离烧毁这个地方只有几分钟的路程',
    'Some Trimps toilet papered your ship': '一些脆皮用掉了你船上的卫生纸',
    'Wow, such speed': '哇，这么快',
    'Progress has slowed to a crawl!': '进展慢如蜗牛!',
    'Your Trimps didn\'t do dishes while you were gone': '你不在的时候，你的脆皮们不洗碗',
    'Your Trimps really missed you': '你的脆皮们真的很想你',
    'A Scientist has been locked outside all night': '一位科学家整夜都被锁在外面',
    'If your Trimps look stuck, you can always': '如果您的脆皮看起来卡住了，您可以随时',
    'Lost Time': '失去的时间',
    'Neat': '利落',
    'to regain full control of your Trimps, and you\'ll still receieve resources from Trustworthy Trimps for any unused Time Warp time!': '恢复对脆皮的完全控制权，并且在任何未使用的时间扭曲的时间内，您仍然会从可信的脆皮那里获得资源！',
    'While you were out, your Trimps didn\'t get much done - unless you count destruction of property. Luckily you have a Time Portal! While you can\'t go forward in time, you can go back to keep the Trimps in line and I\'ll wait here for you': '当您出门在外时，您的脆皮并没有完成太多工作-除非您算出财产损失。 幸运的是您有一个时间传送门！ 虽然您无法及时前进，但可以返回以使脆皮保持一致，我将在这里等您',
    'While you\'re in the past, everything will progress like normal, just much faster. The temporal displacement effects give you blurry vision and a headache (making fine control impossible), but you can force your Trimps to stop and run 1 map whenever you want for each 8 hours spent offline! Maps created this way will use your first preset settings at your selected level with Repeat for Items and Exit to World.': '过去，一切都会像往常一样进展，只是速度更快。 暂时的位移效果使您视力模糊和头痛（无法进行精细控制），但是只要您希望每8小时离线花费一次，就可以强制Trimps停止并运行1张地图！ 以这种方式创建的地图将在您选择的级别上使用您的第一个预设设置，并重复项目和退出世界。',
    'You can change your Offline Progress setting to suit your needs!': '您可以更改脱机进度设置以适合您的需求！',
    'You can Time Warp for 100% of the time you spent offline, up to a maximum of 24 hours.': '您可以将离线时间的100％时间扭曲，最多24小时。',
    'A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by 4.': '一个你可以锻炼脆皮的建筑。每个健身房增加每个脆皮可以阻挡的伤害4。',
    'Increases your maximum metal by 100%.': '增加你的金属上限100%。',
    'It\'s kind of heavy for your Trimps, but they\'ll manage. Adds 3 attack to each soldier per level': '这对你的脆皮来说有点重，但他们会处理的。每升一级增加3个攻击',
    '- Bone': '- 骨头',
    '- Enemy': '- 敌人',
    '- Events': '- 事件',
    '- Exotic': '- 奇异',
    '- Primary': '- 主要',
    '- Repeated': '- 重复',
    '- Secondary': '- 次要的',
    '- Unique': '- 独特',
    'Here you can finely tune your message settings, to see only what you want from each category. Mouse over the name of a filter for more info.': '在这里，你可以微调你的消息设置，只看到你想从每个类别。鼠标移到过滤器的名称上以获取更多信息。',
    'Repeated': '重复的',
    'Unique': '独特的',
    'Confirm': '确认',
    'Bone': '骨头',
    'Enemy': '敌人',
    'Events': '事件',
    'Exotic': '奇异',
    'Primary': '主要',
    'Secondary': '次要的',
    '- Log all unlocks that only drop once per portal, such as Gyms or Miners.': '- 记录每个传送门仅释放一次的所有解锁，如健身房或矿工。',
    '- Log all unlocks that drop more than once per run, such as Speedfarming or Coordination.': '- 记录每次运行多次下降的所有解锁，例如耕作加速或协作。',
    '- Log all combat messages involving the enemy.': '- 记录所有与敌人有关的战斗信息。',
    '- Log all combat messages involving your Trimps.': '-记录所有涉及脆皮的战斗消息。',
    '- Log Bone drops from Skeletimps.': '- 记录来自骷髅脆皮的骨头掉落',
    '- Log drops and messages from temporary events, such as holidays.': '- 记录掉落和来自临时事件（例如假期）的消息。',
    '- Log Helium rewards.': '- 记录氦奖励。',
    '- Log the common loot items: Food, Wood, and Metal.': '- 记录常见的战利品：食物，木材和金属。',
    '- Log the less common loot items: Gems, Fragments, Territory Bonus, and others.': '-记录不太常见的战利品：宝石，碎片，领土奖金等。',
    '- Log the rewards granted by Exotic Imports.': '-记录奇异外皮授予的奖励。',
    'Each trainer will increase the base amount your soldiers can block by 20%.': '每位训练师都会将您的士兵可以格挡的基础伤害数量提高20％。',
    'This Bad Guy is fast and attacks first': '这个坏家伙速度快并且首先攻击',
    'Automatically gain Helium equal to the amount you earned on your best run.': '自动获得等于您在最佳运行中获得的氦气量。',
    'Buy Chronoimp (50 bones': '购买 脆皮时者（50骨头',
    'Buy Feyimp (50 bones': '购买 脆皮小妖（50骨头',
    'Buy Flutimp (50 bones': '购买 脆皮飘兽（50骨头',
    'Buy Jestimp (50 bones': '购买 脆皮弄臣（50骨头',
    'Buy Magnimp (50 bones': '购买 脆皮磁王（50骨头',
    'Buy Tauntimp (50 bones': '购买 脆皮咚咚（50骨头',
    'Buy Titimp (50 bones': '购买 脆皮泰坦（50骨头',
    'Buy Venimp (50 bones': '购买 脆皮爱神（50骨头',
    'Buy Whipimp (50 bones': '购买 脆皮鞭者（50骨头',
    'Buy Goblimp (50 bones': '购买 脆皮地精（50骨头',
    'First, select an Imp (50 bones': '首先，选择一个小鬼（50骨头',
    'Grants an extra 0.3% of current 脆皮': '额外捐赠当前脆皮的0.3％',
    'Single Run Bonuses': '一次性奖金',
    'These all last until your next soft reset. Use them wisely!': '这些全部持续到下一次软重置。 明智地使用它们！',
    'Gain 1 map for each 8 hours away': '每8个小时可获得1张地图',
    'No maps available': '没有可用的地图',
    'Send your misbehaving Trimps to the mines for some therapeutic work. Each Miner can find and smelt 0.78 bars of metal per second.': '',
    'Wood Per Second': '木头每秒产量',
    'Metal Per Second': '金属每秒产量',
    'You found a book called Speedfarming! It looks delicious!': '您发现了一本书叫做耕作加速！ 看起来很好吃！',
    'Max Food': '食物上限',
    'Max Metal': '金属上限',
    'Max Wood': '木头上限',
    'Apparently your scientists are vegetarians. Hurray, more Turkimp for you!': '显然，您的科学家是素食主义者。 祝您好运！',
    'That Turkimp was delicious, and you have leftovers. If you set yourself to gather Food, Wood, or Metal while this buff is active, you can share with your workers to increase their gather speed by': 'Turkimp真好吃，而且剩饭剩菜了。如果您在这种抛光状态下设置自己收集食物，木材或金属，则可以与您的工人分享以提高他们的收集速度。',
    'You found a book called Speedscience! What do you think it could possibly do?!': '您发现了一本书叫做研究加速！ 您认为它可能会做什么？',
    'You found a book discussing tactics for better blocking!': '您发现了一本书，讨论了更好的封锁策略！',
    'You found plans for Shoulderguards!': '您找到了护肩设计图！',
    'A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by 6.': '您的脆皮可以锻炼的建筑物。 每个健身房都会使每个修剪可以阻止的伤害增加6点。',
    'You can only purchase 1 Barn at a time.': '您一次只能购买1个谷仓。',
    'You can only purchase 1 Forge at a time.': '您一次只能购买1个锻造厂。',
    'You can only purchase 1 Shed at a time.': '您一次只能购买1个窝棚。',
    'but you wish you had a few more achievements': '但你希望自己能再有一些成就',
    'you\'d do fine with a few more achievements': '您会再取得一些成就',
    'building,': '建筑,',
    'CRIT!!': '暴击!!',
    'CRIT!': '暴击!',
    'Crit!': '暴击!',
    'Got it!': '得到它！',
    'Use them wisely...': '明智地使用它们...',
    'What\'s New': '最新消息',
    'You stumble across a large locked chest, unlike anything you\'ve ever seen. The lock looks rusty, you smack it with a rock, and it falls right off. Immediately the ground shakes and cracks beneath your feet, intense heat hits your face, and Magma boils up from the core.': '您偶然发现了一个巨大的上锁的胸部，这与您见过的任何东西都不一样。 锁看上去生锈了，用石头砸了一下，马上就掉了。 地面立即在您的脚下震动并破裂，强烈的热量击中您的脸，岩浆从核心沸腾。',
    'You can run': '你可以运行',
    'while you wait!': '当你等待时！',
    'Where one minute ago there was dirt, grass, and noxious fog, there are now rivers of molten rock (and noxious fog). You\'d really like to try and repair the planet somehow, so you decide to keep pushing on. It\'s been working out well so far, there was some useful stuff in that chest!': '一分钟前有泥土，草丛和有害雾气的地方，现在有熔岩河（有毒雾气）。 您真的很想尝试以某种方式修复地球，因此您决定继续前进。 到目前为止，效果一直很好，那个箱子里有一些有用的东西！',
    'The heat is tough on your Trimps, causing each Zone to reduce their attack and health by 20% more than the last. 10% of your Nurseries will permanently close after each Zone to avoid Magma flows, and Corruption has seeped into both Void and regular Maps, further increasing their difficulty.': '热浪对您的脆皮不利，导致每个区域的攻击力和生命值都比上一个区域减少20％。 每个区域结束后，您的苗圃中有10％将永久关闭，以避免岩浆流动，并且腐败渗透到了虚空地图和常规地图中，进一步增加了难度。',
    'Though you\'ve seen the Corruption grow since the planet broke, you can now see a giant spire pumping out tons of the purple goo. Things seem to be absorbing it at a higher rate now.': '尽管自从行星破裂以来您已经看到了腐败的增长，但是现在您可以看到一个巨大的尖顶抽出大量的紫色粘胶。 现在看来，事物正在以更高的速度吸收它。',
    'For your past completions of 50 unique Bionic Wonderland Tiers, you have unlocked the following permanent special bonuses: Foremany (Permanently adds 50000 Foreman to your town to aid in construction), AutoJobs, AutoStructure, and Double Build (Stacked items in the Building Queue will be constructed two at a time). As these bonuses were previously Masteries and are now not, new Masteries have been added to replace these!': '对于你过去完成的50个独特的仿生仙境层，你已经解锁了以下永久的特殊奖励:大群工头(永久增加50000工头到你的城市，以协助建设)，自动工作, 自动建造，和双重建造(堆叠项目的建造队列将建设两个一次)。由于这些加值以前是高精而现在不是，新的高精被添加来代替!',
    'A lot of other new stuff has just been added to Trimps as well, click': '脆皮刚刚添加了许多其他新内容，请点击',
    'Bring it on': '来吧',
    'Improbabilities and Void Maps are now more difficult.': '乌有者发生虚空地图现在都比较困难。',
    'Improbabilities and Void Maps now drop 2x helium.': '乌有者和虚空图现在会掉落2倍的氦气。',
    'in the bottom right of your game window to see the full patch notes!': '在游戏窗口的右下角，查看完整的补丁说明！',
    'However, the chest contained plans and materials for the': '然而，箱子里装着的计划和材料',
    'The Turkimps escaped again': 'Turkimps又逃跑了',
    'Travel to the Map Chamber. Maps are filled with goodies, and for each max level map you clear you will gain a 20% stacking damage bonus for that Zone (stacks up to 10 times). (Hotkey: M': '去地图室。地图充满了好东西，每清除一张最高等级地图，你将获得该区域20%的堆叠伤害加成(堆叠最多10次)。(热键:M',
    'There\'s a Snimp in the pantry': '储藏室中有一个Snimp',
    'You found 1 map fragments!': '您找到1个地图碎片！',
    'Fluffy wrote a novel while you were gone': '当你不在的时候，绒绒写了一本小说',
    'Your Spire Traps and Towers have also produced': '您的尖顶陷阱和防御塔也已产生',
    '! In addition, all Zones are now wort': '!此外，所有的区域现在都是wort',
    'Runestones while you were away!': '符石在你离开时！',
    'Spire II': '尖塔 II',
    'if your Trimps have a tendency to slack off when you turn your back.': '如果您的脆皮在转身时有放松的趋势。',
    'Hotkeys: S or': '热键：S 或',
    'In addition, having at least one Amalgamator will cause Anticipation stacks to increase based on when the last soldiers were sent, rather than being based on time spent actually breeding.': '此外，至少有一个合并者时，预期效果将基于最后一次士兵被派遣的时间，而不是基于实际繁殖的时间。',
    'MagnetoShriek is NOT active and will not fire.': '电磁尖啸未激活，将不会发射。',
    'No Formation': '没有阵型',
    'Gardens': '花园',
    'FluffyExp': '绒绒经验',
    'AutoEquip On': '自动装备 开启',
    'AutoEquip Off': '自动装备 关闭',
    'AutoGold Off': '自动金色 关闭',
    'AutoPrestige All': '自动重铸 全部',
    'Maps (': '地图 (',
    'Welcome': '欢迎',
    "Welcome to Trimps! This game saves using Local Storage in your browser. Clearing your cookies or browser settings will cause your save to disappear! Please make sure you regularly back up your save file by either using the 'Export' button in the bar below or the 'Online Saving' option under 'Settings'.": '欢迎来到脆皮！此游戏存档位于浏览器的本地存储(Local Storage)。清除浏览器数据会丢失存档！请注意备份存档，点击下方"导出"按钮或在"设置"里开启在线存档。',
    'Would you like to enable online saving before you start?': '在开始前，你是否打算开启在线存档？',
    'Enable Online Saving': '开启在线存档',
    'Don\'t Enable': '不开启',
    'Login': '登录',
    'PlayFab Login': 'PlayFab 登录',
    'PlayFab Username': 'PlayFab 用户名',
    'Login to PlayFab': '登录到PlayFab',
    'Password': '密码',
    'Remember Account Info': '记住账号信息',
    '6-30 Chars': '6-30 字符',
    'Recover Account Info': '找回账号信息',
    'Register Playfab Account': '注册Playfab账号',
    'While connected to PlayFab, every time you manually save and': '当连接到PlayFab时，每次手动保存和',
    'once per 30 minutes when auto-saving': '每隔30分钟自动保存时',
    'your file will also be sent to PlayFab\'s servers.': '你的存档也会同步发送到PlayFab的服务器。',
    "Data will be cleared from PlayFab's servers after 3 months of inactivity, this is not a permanent save!": 'PlayFab服务器会清除3个月不活跃的数据，这不是永久性的保存！',
    'Confirm Password': '重复密码',
    'Register': '注册',
    'For recovery, not required': '找回账号用，非必需',
    "You found an ancient book about mining. With some research you should be able to teach the Trimps to mine!": '你发现了一本关于采矿的古老书籍。通过研究你可以教会脆皮们采矿了',
    'Housing': '房屋',
    'Territory Bonus': '领土奖励',
    'Select a Mod': '选择一个模式',
    'Don\'t forget to bring a challenge': '别忘了带一个挑战',
    'Click a challenge below to learn more about and/or run it!': '点击下面的挑战来了解更多和/或运行它！',
    'None': '无',
    'Level: ': '等级: ',
    'Price': '价格',
    'Spent': '花费',
    'Challenge has no end point, and grants an': '挑战没有终点，并在完成时获得',
    'additional': '额外的',
    'This building costs helium to create.': '这座建筑需要耗费氦气来创造。',
    'which cost helium': '需要消耗氦',
    '. Make sure you can earn back what you spend!': '。请确保你有能力去赚回你花费的氦气!',
    'Make Purchase': '购买',
    'Cores': '核心',
    'critChance': '暴击率',
    'critDamage': '暴击伤害',
    'empty': '空',
    'trimpAttack': '脆皮攻击',
    'trimpBlock': '脆皮防御',
    'trimpHealth': '脆皮生命',
    'Shields': '盾牌',
    'AutoTraps On': '自动陷阱捕捉开启',
    'breedSpeed': '繁殖速度',
    'Buy Shield Block': '购买盾牌防御',
    'Current': '当前',
    'Run Map': '运行地图',
    'Customize your settings for running maps!': '自定义你的地图运行设置！',
    'Back': '后退',
    'Electrified': '触电',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '\n								Get one Heirloom at the chances above, based on highest zone\n							': '根据最高区域，在上述机会中获得一件传家宝',
    '\n					You can earn achievements by doing stuff. Each achievement will boost the amount of damage your Trimps can deal, and later achievements grant a larger bonus. You can learn more about an achievement by hovering your mouse over it.': '你可以通过做事来获得成就。每一个成就都将增加你的脆皮所能造成的伤害，之后的成就会给予更多的奖励。你可以通过把鼠标悬停在某项成就上来了解它的更多信息。',
    '\n				Making up lost time...\n			': '弥补失去的时间…',
    '\n								Get one Heirloom at the chances above, based on highest zone\n							': '根据最高区域获得一个传家宝的机会',
    '\n			Heirlooms are powerful items that can drop with a variety of bonuses and a variety of rarities. You will earn one Heirloom every time a Void Map is completed, and you have a better chance to get higher rarities if you complete the Void Map at higher zones. Once you have an Heirloom, you can click the icon below to select it.': '传家宝是强大的物品，可以随着各种奖金和各种稀有物质下降。 每次完成虚空地图时，您将获得一个传家宝，如果您在更高的区域完成虚空地图，您将有更好的机会获得更高的稀有度。 有了传家宝后，您可以点击下面的图标将其选中。',
    '\n			You can only carry a few Heirlooms (other than the two you have equipped) back through the Portal with you when you use it.': '当你使用传送门时，你只能随身携带几个传家宝（你装备的两个传家宝除外）。',
    'employed\n					': '就业',
    '\n			Once you\'ve selected an Heirloom, you can see all of its stats on the right side of this screen.': '一旦你选中了传家宝，你可以在这个屏幕的右侧看到它的所有统计数据。',
    '\n			You Found an Heirloom!\n\n			': '你找到一件传家宝！',
    '\n				Current Run\n			': '当前游戏',
    '\n				Total\n			': '总计',
    '| What\'s New \n					': '新东西',
    'Dark Essence\n										': '黑暗精华',
    '\n													Wind\n											': '风',
    '\n												Ice\n											': '冰',
    '\n												Poison									\n											': '毒',
    '\n											Extra Zones\n										': '额外区域',
    '\n											Perfect Sliders\n										': '完美的滑块',
    '\n											Tokens': '符记',
    '\n											Unlock at Z': '解锁于区域',
    '\n										Biome\n									': '生物群落',
    '\n										Difficulty\n									': '困难',
    '\n										Loot\n									': '劫掠',
    '\n										Recycle Map\n									': '回收地图',
    '\n										Run Map\n									': '运行地图',
    '\n										Size\n									': '大小',
    '\n										Special Modifier\n									': '特殊修饰符',
    '\n									AutoFight Off\n								': '自动战斗 关闭',
    '\n									Create\n								': '创建',
    '\n									Exit Spire\n								': '退出尖塔',
    '\n									Fight\n								': '战斗',
    '\n									Finish Daily\n								': '完成日常',
    '\n									Level': '等级',
    '\n									Portal\n								': '传送门',
    '\n									Repeat Off\n								': '重复 关闭',
    '\n									Void Maps\n								': '虚空地图',
    '\n								Buy Bone Portal (100 bones)\n							': '购买骨头传送门 (100 骨头)',
    '\n								Buy Heirloom (30 bones)\n							': '购买传家宝 (30 骨头)',
    '\n								Get one Heirloom at the chances above, based on highest zone\n							': '在上面的机会得到一个传家宝，基于最高区域',
    '\n							Equipped Core': '装备核心',
    '\n							Equipped Shield': '装备盾牌',
    '\n							Equipped Staff': '装备棍棒',
    '\n							One of your storage structures will be more expensive than the amount you can receive from this boost. Spend some resources first to get the most benefit!\n						': '您的一个存储结构将比您从此增强中获得的数量更昂贵。 先花一些资源才能获得最大收益！',
    '\n						Bone Trader\n					': '骨法商人',
    '\n						Close\n					': '关闭',
    '\n						Save': '保存',
    '\n						The Bone Trader trades bones for... bonuses\n					': '用骨头与骨法商人换点...“骨”利',
    '\n						You can earn bones as you progress through the world by killing Skeletimps and Megaskeletimps.\n					': '通过杀死脆皮骷髅和脆皮超级骷髅，你可以在世界进步的过程中获得骨骼。',
    '\n						You have': '你有',
    '\n					Carried': '携带的',
    '\n					Temporary': '临时',
    'You found a book that will teach you how to upgrade your Shield!': '你发现这本书会教你如何升级你的盾牌！',
    'You found a book that will teach you how to upgrade your Dagger!': '你发现这本书会教你如何升级你的匕首!',
    'You found a book that will teach you how to upgrade your Boots!': '你发现这本书会教你如何升级你的靴子!',
	"You found a book that will teach you how to upgrade your Mace!": "你发现这本书会教你如何升级你的狼牙棒!",
	"You found a book that will teach you how to upgrade your Helmet!": "你发现这本书会教你如何升级你的头盔!",
	"You found a book that will teach you how to upgrade your Polearm!": "你发现这本书会教你如何升级你的战戟!",
	"You found a book that will teach you how to upgrade your Pants!": "你发现这本书会教你如何升级你的裤子!",
	"You found a book that will teach you how to upgrade your Battleaxe!": "你发现这本书会教你如何升级你的战斧!",
	"You found a book that will teach you how to upgrade your Shoulderguards!": "你发现这本书会教你如何升级你的护肩!",
	"You found a book that will teach you how to upgrade your Greatsword!": "你发现这本书会教你如何升级你的巨剑!",
	"You found a book that will teach you how to upgrade your Breastplate!": "你发现这本书会教你如何升级你的胸铠!",
	"You find an ancient book titled Coordination. Exciting.": "你发现了一本名为“协作”的古书。令人兴奋的。",
	"A nice Forge would allow you to store more metal.": "一个锻造厂能让你存储更多的金属。",
	"You found a crafting foreman! He will build buildings automatically for you!": "你找到了一个工头，他会帮你建造建筑",
	"Your Trimps killed a lot of Bad Guys back there. It seems like you're getting the hang of this. However, the world is large, and there are many more Zones to explore. Chop chop.": "你的脆皮在那里杀死了很多坏人。 看起来你似乎已经弄清楚这是怎么一回事了。 然而这个世界很大，依然有去多区域需要探索，“砍”“砍”...",
	"Hey look, plans for a new Gym!": "嗨，瞧，一个新的健身房设计图!",
	"Hey, this book might be for you!": "嘿，这本书可能适合你!",
	"You found plans for a mace!": "你找到了一个狼牙棒的图纸!",
	"You found plans for a helmet!": "你找到了一个头盔的图纸！",
	"You found plans for a Battleaxe!": "你找到了一个战斧的图纸！",
	"You found plans for Shoulderguards!": "你找到了护肩的图纸！",
	"You found plans for a Greatsword!": "你找到了巨剑的图纸！",
	"You found plans for a Breastplate!": "你找到了胸铠的图纸！",
	"You found a book about proper physical training!": "你找到了一本关于适当的体能训练的书！",
	"By your orders, your scientists have begun to try and figure out how large this planet is.": "根据您的命令，您的科学家们已经开始尝试了解这个星球有多大。",
	"You found plans for a Polearm!": "你找到了一个战戟的图纸！",
	"You found plans for Pants!": "你找到了一个裤子的图纸！",
	"You order your Trimps to search the area for the keys to your ship, but nobody finds anything. Bummer.": "您命令脆皮在该地区搜索您的船只的钥匙，但没有人找到任何东西。真令人失望。",
	"Do you see that thing at the end of this zone? It's huge! It's terrifying! You've never seen anything like it before, but you know that it is a Blimp. How did you know that? Stop knowing things and go kill it.": "你看到尽头的那个东西了吗？多么的巨大！多么的可怕！ 你以前从未见过这样的东西,但是你知道这是一个脆皮飞艇。你是怎么知道的？别问为什么了，去杀死它！",
	"Slow and steady wins the race. Unless you're racing someone who is actually trying.": "慢而稳事必成， 除非跟你竞争的人比你更努力。",
	"You can't shake the feeling that you've been here before. Déjà-vu?": "你不能排除那种你以前来过这里的感觉，似曾相识。",
	"Looks like another Blimp up ahead. Hard to tell from far away, but it looks like it has more heads than the last one.": "看起来像另一个脆皮飞艇。但很难说，特别是从这么远的地方，不过它看起来比上次那个多了一个头。",
	"You're unstoppable as long as nothing stops you. Unfortunately, it seems like something really wants to stop you.": "你不可阻挡，只要没人阻拦你。 不幸的是，看起来有些东西像是真的想阻止你。",
	"Did you see that green light flash by? Weird. Oh well.": "你看到绿光一闪而过吗？奇怪。噢，好吧。",
	"Another day, another Blimp at the end of the zone": "另一天,又是一个脆皮飞艇在区域的尽头。",
	"Seriously? Another Blimp so soon?": "你是认真的吗？又一个脆皮飞艇！",
	"You climb a large cliff and look out over the new zone. Red dirt, scorched ground, and devastation. Is that a Dragimp flying around out there?!": "你爬上一个巨大的悬崖，俯瞰着一片新的区域。红色的泥土，烧焦的地面，一片荒芜。 那是一头龙在飞来飞去吗？！",
	"There seems to be a strange force urging you to keep going. The atmosphere is becoming... angrier. Part of you wants to turn around and go back, but most of you wants to keep going.": "似乎有一种奇怪的力量鼓励你继续前行。气氛变得有点，愤怒的感觉。 你的身体的一部分想转身回去,但其他大部分想继续前行。",
	"You look behind and see your kingdom. You have gems, a colony, and territory. You wonder if enough Trimps have already fallen in battle. After contemplation, one word falls out of your mouth as you begin to move forward. 'Nah'": "你回头看看你的王国，你拥有宝石、殖民地和领土。 你在想你的脆皮是不是已经在战斗中牺牲了。 沉思之后， 两个字从你的嘴里蹦了出来 “算了”",
	"You can sense that you're close to your goal.": "你感觉到你离你的目标已经不远了。",
	"The portal device you found shines green in the lab. Such a familiar shade...": "你找到的传送门装置在实验室里闪着绿光。 多么熟悉的画面...",
	"Helium goes in, victory comes out": "氦进去了，胜利就出来了",
	"Less Info": "更少信息",
	"You have already attempted this Daily Challenge!": "你已经尝试过这个日常挑战！",
	"Done": "完成",
	"Pay a tribute of food to your Dragimp, increasing his appetite and his speed. He will gather gems 5% faster (compounding).": "向您的Dragimp进贡，增加他的胃口和速度。 他将更快地收集宝石5%（复合）。",
	"World": "世界",
	"A green background indicates that you could afford a map at this Extra Zone amount with your selected Special Modifier and Perfect Sliders. A gold background indicates that you could afford that map with your selected Special Modifier and some combination of non-perfect sliders.": "绿色背景表示您可以使用所选的特殊修饰符和“完美滑块”以该“额外区域”数量购买地图。 金色背景表示您可以使用所选的特殊修改器和一些不完美的滑块组合来负担该地图。",
	"A huge storm has formed and daylight has become a luxury you have mostly forgotten about. Your Trimps seem to want to go back home, but you're pretty sure you're supposed to keep going this way, so you do. You're very close to the anomaly.": "一场巨大的风暴已经形成，白昼已经成为一种你几乎忘记的奢侈品。你的脆皮似乎想回家，但你很确定你们应该继续向前走，所以你们继续前行。你已经离异常现象非常近了。",
	"There it is. The anomaly is at the end of the zone. You can see it but you don't know what you're seeing. Where did that... thing... come from?! This is highly Improbable.": "它……就在那里。那个异常现象，就在这个区域的尽头。你能看得见它，但是你不知道你正在看的这个东西究竟是什么。这个……东西……是从哪来的？！这个东西太无序了。",
	"A loud boom echoes in the distance, and one of your Trimps runs up to you with outstretched arms, looking quite frightened. He probably just wants some armor and weapons! You hand him some gear, and he accepts it with excitement.": "远处传来一阵响亮的隆隆声，然后一只脆皮伸出双手向你跑来，看起来他有些害怕。他可能只是想要一些武器和护甲！你递给他一些装备，他兴奋地接受了。",
	"Do you see that thing at the end of this Zone? It's huge! It's terrifying! You've never seen anything like it before, but you know that it is a Blimp. How did you know that? Stop knowing things and go kill it.": "你看到尽头的那个东西了吗？多么的巨大！多么的可怕！ 你以前从未见过这样的东西,但是你知道这是一个脆皮飞艇。你是怎么知道的？别问为什么了，去杀死它！",
	"You step over the corpse of the Blimp as it rapidly deflates, and one of your Trimps chuckles at the sound produced. You all cross the sulfuric river to the next Zone, and can feel the presence of an ancient knowledge. Better explore.": "你踩过了脆皮飞艇的尸体，它迅速的瘪了下去。你的其中一个脆皮听到这个声音，顿时咯咯地笑了起来。你们穿过了含硫的河流，来到了下一个区域，在这里你们感受到古代知识的存在。进行更好的探索吧。",
	"Your settlement is getting crowded, there's Trimps in the streets, and you're taking heat. You feel a sudden strong desire to create a map, though you're not quite sure how that would help.": "你住的地方变得越来越拥挤，街道上到处都是脆皮，你感觉自己越来越热。你突然有强烈的愿望想要创建一个地图，尽管你不太确定这会有什么帮助。",
	"Your scientists have finally concluded their report on the analysis of the size of the world. According to the report, they're pretty sure it's infinitely large, but you're pretty sure they just got bored of checking.": "你的科学家们终于完成了他们关于这世界大小的分析报告。根据报告，它们很确信这个世界是无限大的，但你也很确信它们只是对这项检查厌倦了。",
	"You were trying to help bring back some of the Equipment your Trimps left on the ground in that last Zone, and you got a splinter. This planet is getting dangerous, stay alert.": "你试图帮助带回脆皮在上一个区域留在地上的一些装备，并且你得到了一个碎片。这个星球正在变得危险起来，保持警惕。",
	"Another day, another Blimp at the end of the Zone.": "另一天,又是一个脆皮飞艇在区域的尽头。",
	"You climb a large cliff and look out over the new Zone. Red dirt, scorched ground, and devastation. Is that a Dragimp flying around out there?!": "你爬上一个巨大的悬崖，俯瞰着一片新的区域。红色的泥土，烧焦的地面，一片荒芜。 那是一头龙在飞来飞去吗？！",
	"The world feels a little bit less angry as you fire off your handy Portal Generator. You can tell that somewhere in some dimension, a Megablimp is no more. In front of you, 45 Helium and a green, shining box appear on the ground. In tiny writing on the box, you can make out the words 'Time portal. THIS SIDE UP'.": "当你启动你的传送门时，这个世界就不会那么愤怒了。你明白，在某个维度的某个地方，脆皮超级飞艇已经不复存在。在你面前,45 氦以及一个绿色闪耀的盒子出现在地面上。盒子上有一行小字，你可以认清那行字是“时间传送门。此面向上”。",
	"Strange, the sky seems to be getting darker. You ask one of your Trimps for the time, but he doesn't know what a clock is.": "奇怪，天空看起来变的更黑了。你询问其中一只脆皮现在是什么时间，但是它都不知道什么是时钟。",
	"You're a rebel. The universe pointed you into that portal, but you kept pushing forward. You feel... less like you've been here before.": "你是个叛逆者。宇宙指引你进入那个传送门，但是你执意向前推进。你感觉……自己好像没有来过这里。",
	"It seems like the further you press on, the less you know. You still feel an urge to use the portal, though the urge has begun to dwindle.": "似乎你越向前进，你知道的就越少。你仍然有使用传送门的冲动，但是这冲动已经开始减少了。",
	"Your Trimps came up with a pretty catchy battle song that got stuck in your head. None of them survived the next fight though, and you can't remember most of it. Life's tough.": "你的脆皮创造了一首非常吸引人的战歌，这首歌一直萦绕在你的脑海中。但是他们没有一人在下一场战斗中活下来，而且其中大部分的脆皮你也记不得了。生活是真的艰难。",
	"You climb over a large hill that was separating this Zone from the last. The sky is pitch black and lightning crackles in the distance. This is a site of heavy corruption.": "你爬过一座将两个地区分开的大山。天空一片漆黑，远处有闪电划过。这里是一个腐化严重的地方。",
	"You start to wonder how long you've been doing the same thing over and over. There must be something you can do to start to break the cycle. Perhaps you could alter the portal...": "想知道自己一遍遍地重复同样的事情已经多久了。你一定能做些什么来打破这个循环。或许你能对传送门做些修改……",
	"You can't help but notice that the Trimps seem to be the only creatures on this planet not immediately hostile towards outsiders. You ask a nearby Trimp soldier what he thinks you are, and he drools a bit.": "你不禁注意到，脆皮可能是这个星球上唯一不会立刻对外界敌对的生物。你询问附近的一个脆皮士兵，他认为你是什么？然后他有点流口水(迷恋？)。",
	"The world seems so barren out this far. You feel like you're finally starting to get ahead of the curve, but you know by now not to get comfortable.": "这个世界看起来如此贫瘠。你觉得自己终于开始走在前面了，但你现在知道，这并不能让你感到舒服。",
	"Each day and night seems to grow longer than the one before. Is time slowing down? Argh! You fall to your knees with a splitting headache and a strong desire to use the portal. After a few minutes, it passes and you forget what happened. What are we talking about?": "白天和黑夜似乎都比以前更长了。是时间变慢了吗？啊！你跪倒在地，头痛欲裂，并有一种强烈的想使用传送门的渴望。几分钟后，这个感觉消退了，你也忘记了刚才发生了什么。我们刚才在讨论什么来着？",
	"All traces of hills and mountains have long since been trudged past. The world is flat and hostile. You wish your Trimps were better conversationalists.": "回头望去，越过的山的痕迹越来越长。这个世界是平的，并充满了敌意。你希望你的脆皮们能更健谈一些。",
	"As your Trimps scavenge every last bit of helium from that Blimp, one of them begins freaking out. He runs around waving his little arms and making funny noises for a while, eats some dirt, then takes a little nap. You wonder if that's normal. Yeah... probably fine.": "当脆皮们从脆皮飞艇身上提取最后一点氦时，其中一只开始发狂。他跑来跑去，挥舞着他的小胳膊，其中一段时间发出了有趣的声音，吃了一些泥土，然后就开始小睡。你很好奇他是否还正常。是的……可能他还算不错。.",
	"It's been a long time since you've found any blueprints in the maps. You start to wonder where those things even come from.": "你很久没有在地图上找到蓝图了。你开始怀疑这些东西是从哪里来的。",
	"Bounty": "赏金",
	"Egg": "蛋",
	"": "",
	"": "",
	"": "",
	"": "",
	



    //阻止页面打印

    '': '',

    //原样
    '': '',
    'Auto Heirlooms': '自动传家宝',
    'Auto Magmamancers': '自动岩浆巫师',
    'AutoAbandon': '自动放弃',
    'AutoGoldenUpgrades': '自动金色升级',
    'Buy Buildings & Storage': '购买建筑和仓库',
    'Buy Armor on Death': '死亡时购买护甲',
    'Graphs': '图表',
    'Ignore Spires Until': '忽略尖塔直到',
    'LumberjackSpeed': '伐木工速度',
    'Lumberjack Ratio': '伐木工比率',
    'Max Zone': '最大区域',
    'Min Zone': '最小区域',
    'Off': '关闭',
    'Radon Per Hour': '每小时氡',
    'Select a Map!': '选择一个地图！',
    'Maps: MAYBE': '地图：可能',
    'Click to toggle a challenge mode for your challenges!': '单击以切换到挑战模式，迎接您的挑战!',
    'In Challenge': '在挑战',
    'mode, you can re-run some challenges in order to earn a permanent attack, health, and Helium bonus for your Trimps. MOST Challenge': '模式中, 你可以重新进行一些挑战来为你的脆皮获得永久的攻击、生命和氦气加成。大多数挑战',
    's will grant': '将给予',
    '1% attack and health and 0.10% increased Helium for every 10 Zones reached. Every 100 Zones, the attack and health bonus will increase by an additional 1%, and the Helium bonus will increase by': '每达到10区域获得1%攻击和生命和0.10%氦气增加。每100区域，攻击和生命奖励将递增1%，氦气奖励递增',
    'Clear your formations, return to normal stats, and derp around the battlefield. (Hotkeys: X or': '清除阵型，恢复正常状态，并从战场上撤退. (热键: X 或',
    'Trimps gain 4x attack but lose half of their health and block. (Hotkeys: D or': '脆皮获得 4 倍攻击但是失去一半的生命和防御。 (热键: D 或',
    'Trimps gain 4x block and 50% block pierce reduction but lose half of their health and attack. (Hotkeys: B or': '脆皮获得 4 倍防御，并降低 50% 防御穿透效果，但是失去一半的生命和攻击。 (热键: B 或',
    'Trimps gain 4x health but lose half of their attack and block. (Hotkeys: H or': '脆皮获得 4 倍生命但是失去一半的攻击和防御. (热键: H 或',
    'Trimps lose half of their attack, health and block but gain 2x resources from loot (not including Helium) and have a chance to find Dark Essence above Z180 in the world. This formation must be active for the entire fight to receive any bonus from enemies, and must be active for the entire map to earn a bonus from a Cache.': '脆皮失去一半的生命、攻击和防御，但是获得 2 倍资源掉落(不包括氦)。在区域180之后的世界里，有机会获得黑暗精华。 这个阵型必须在整个战斗中保持活跃，掉落奖励加成才能生效；同样，必须在整个地图保持活跃，奖励加成才能对地图修饰符的奖励生效',
    'You will earn a bonus from this enemy!': '你将会从这个敌人处获得奖励加成!',
    'You recently switched to Scryer Formation and will': '你刚刚切换到占卜者阵型，',
    'not': '不',
    'earn a bonus from this enemy.': '会从这个敌人处获得奖励加成',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "food:": "食物:",
    "wood:": "木头:",
    "metal:": "金属:",
    "science:": "科学点:",
	"fragments:": '碎片:',
    "gems:": '宝石:',
    "helium:": '氦:',
	", ": "，",
	", and ": "，",
    "Enemy attack increased by ": '敌人攻击力增加',
    "Enemy health in maps increased by ": '地图上的敌人生命值增加',
    "Enemy attack in maps increased by ": '地图上的敌人攻击力增加 ',
	'of all Helium, ': '所有的氦，',
	' Nu from Heirlooms earned during the run': '上次传送后传家宝回收的虚空物质',
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    "/hr": "/时",
    ")": ")",
    "%": "%",
    "Bone": "骨头",
    "Bones": "骨头",
    "Liquimp!": "液化者！", //击杀消息末尾
    "Liquimp group!": "液化者集团！", //击杀消息末尾
    "Presimpt!": "脆皮小礼！", //击杀消息末尾
    "Presimpt group!": "脆皮小礼集团！", //击杀消息末尾
    "Turkimp!": "脆皮火鸡！", //击杀消息末尾
    "Turkimp group!": "脆皮火鸡集团！", //击杀消息末尾
    "Randimp!": "脆皮百变怪！", //击杀消息末尾
    "Randimp group!": "脆皮百变怪集团！", //击杀消息末尾
    "Squimp!": "脆皮乌贼！", //击杀消息末尾
    "Squimp group!": "脆皮乌贼集团！", //击杀消息末尾
    "Elephimp!": "脆皮象！", //击杀消息末尾
    "Elephimp group!": "脆皮象集团！", //击杀消息末尾
    "Turtlimp!": "脆皮龟！", //击杀消息末尾
    "Turtlimp group!": "脆皮龟集团！", //击杀消息末尾
    "Chimp!": "脆皮黑猩猩！", //击杀消息末尾
    "Chimp group!": "脆皮黑猩猩集团！", //击杀消息末尾
    "Penguimp!": "脆皮企鹅！", //击杀消息末尾
    "Penguimp group!": "脆皮企鹅集团！", //击杀消息末尾
    "Snimp!": "脆皮鹬！", //击杀消息末尾
    "Snimp group!": "脆皮鹬集团！", //击杀消息末尾
    "Gorillimp!": "脆皮大猩猩！", //击杀消息末尾
    "Gorillimp group!": "脆皮大猩猩集团！", //击杀消息末尾
    "Blimp!": "脆皮飞艇！", //击杀消息末尾
    "Blimp group!": "脆皮飞艇集团！", //击杀消息末尾
    "Dragimp!": "脆皮龙！", //击杀消息末尾
    "Dragimp group!": "脆皮龙集团！", //击杀消息末尾
    "Improbability!": "乌有者！", //击杀消息末尾
    "Improbability group!": "乌有者集团！", //击杀消息末尾
    "Omnipotrimp!": "全能者！", //击杀消息末尾
    "Omnipotrimp group!": "全能者集团！", //击杀消息末尾
    "Mutimp!": "脆皮变异者！", //击杀消息末尾
    "Mutimp group!": "脆皮变异者集团！", //击杀消息末尾
    "Hulking Mutimp!": "脆皮大型变异者！", //击杀消息末尾
    "Hulking Mutimp group!": "脆皮大型变异者集团！", //击杀消息末尾
    "Feyimp!": "脆皮小妖！", //击杀消息末尾
    "Feyimp group!": "脆皮小妖集团！", //击杀消息末尾
    "Tauntimp!": "脆皮咚咚！", //击杀消息末尾
    "Tauntimp group!": "脆皮咚咚集团！", //击杀消息末尾
    "Whipimp!": "脆皮鞭者！", //击杀消息末尾
    "Whipimp group!": "脆皮鞭者集团！", //击杀消息末尾
    "Venimp!": "脆皮爱神！", //击杀消息末尾
    "Venimp group!": "脆皮爱神集团！", //击杀消息末尾
    "Magnimp!": "脆皮磁王！", //击杀消息末尾
    "Magnimp group!": "脆皮磁王集团！", //击杀消息末尾
    "Skeletimp!": "脆皮骷髅！", //击杀消息末尾
    "Skeletimp group!": "脆皮骷髅集团！", //击杀消息末尾
    "Megaskeletimp!": "脆皮超级骷髅！", //击杀消息末尾
    "Megaskeletimp group!": "脆皮超级骷髅集团！", //击杀消息末尾
    "Pumpkimp!": "脆皮南瓜怪！", //击杀消息末尾
    "Pumpkimp group!": "脆皮南瓜怪集团！", //击杀消息末尾
    "Shrimp!": "脆皮虾！", //击杀消息末尾
    "Shrimp group!": "脆皮虾集团！", //击杀消息末尾
    "Mountimp!": "脆皮山怪！", //击杀消息末尾
    "Mountimp group!": "脆皮山怪集团！", //击杀消息末尾
    "Frimp!": "脆皮森精！", //击杀消息末尾
    "Frimp group!": "脆皮森精集团！", //击杀消息末尾
    "Chickimp!": "脆皮小鸡！", //击杀消息末尾
    "Chickimp group!": "脆皮小鸡集团！", //击杀消息末尾
    "Hippopotamimp!": "脆皮河马！", //击杀消息末尾
    "Hippopotamimp group!": "脆皮河马集团！", //击杀消息末尾
    "Onoudidimp!": "脆皮蜗牛！", //击杀消息末尾
    "Onoudidimp group!": "脆皮蜗牛集团！", //击杀消息末尾
    "Kittimp!": "脆皮小猫！", //击杀消息末尾
    "Kittimp group!": "脆皮小猫集团！", //击杀消息末尾
    "Grimp!": "脆皮护林者！", //击杀消息末尾
    "Grimp group!": "脆皮护林者集团！", //击杀消息末尾
    "Golimp!": "脆皮魔像！", //击杀消息末尾
    "Golimp group!": "脆皮魔像集团！", //击杀消息末尾
    "Seirimp!": "脆皮矿精！", //击杀消息末尾
    "Seirimp group!": "脆皮矿精集团！", //击杀消息末尾
    "Slagimp!": "脆皮炉渣怪！", //击杀消息末尾
    "Slagimp group!": "脆皮炉渣怪集团！", //击杀消息末尾
    "Moltimp!": "脆皮熔金怪！", //击杀消息末尾
    "Moltimp group!": "脆皮熔金怪集团！", //击杀消息末尾
    "Lavimp!": "脆皮火岩怪！", //击杀消息末尾
    "Lavimp group!": "脆皮火岩怪集团！", //击杀消息末尾
    "Flowimp!": "脆皮花妖！", //击杀消息末尾
    "Flowimp group!": "脆皮花妖集团！", //击杀消息末尾
    "Kangarimp!": "脆皮袋鼠！", //击杀消息末尾
    "Kangarimp group!": "脆皮袋鼠集团！", //击杀消息末尾
    "Gnomimp!": "脆皮侏儒！", //击杀消息末尾
    "Gnomimp group!": "脆皮侏儒集团！", //击杀消息末尾
    "Slosnimp!": "脆皮慢鹬！", //击杀消息末尾
    "Slosnimp group!": "脆皮慢鹬集团！", //击杀消息末尾
    "Entimp!": "脆皮树人！", //击杀消息末尾
    "Entimp group!": "脆皮树人集团！", //击杀消息末尾
    "Squirrimp!": "脆皮松鼠！", //击杀消息末尾
    "Squirrimp group!": "脆皮松鼠集团！", //击杀消息末尾
    "Gravelimp!": "脆皮碎石怪！", //击杀消息末尾
    "Gravelimp group!": "脆皮碎石怪集团！", //击杀消息末尾
    "Cthulimp!": "脆皮克苏鲁！", //击杀消息末尾
    "Cthulimp group!": "脆皮克苏鲁集团！", //击杀消息末尾
    "Shadimp!": "脆皮暗影怪！", //击杀消息末尾
    "Shadimp group!": "脆皮暗影怪集团！", //击杀消息末尾
    "Voidsnimp!": "脆皮虚空鹬！", //击杀消息末尾
    "Voidsnimp group!": "脆皮虚空鹬集团！", //击杀消息末尾
    "Goblimp!": "脆皮地精！", //击杀消息末尾
    "Goblimp group!": "脆皮地精集团！", //击杀消息末尾
    "Flutimp!": "脆皮飘兽！", //击杀消息末尾
    "Flutimp group!": "脆皮飘兽集团！", //击杀消息末尾
    "Jestimp!": "脆皮弄臣！", //击杀消息末尾
    "Jestimp group!": "脆皮弄臣集团！", //击杀消息末尾
    "Titimp!": "脆皮泰坦！", //击杀消息末尾
    "Titimp group!": "脆皮泰坦集团！", //击杀消息末尾
    "Chronoimp!": "脆皮时者！", //击杀消息末尾
    "Chronoimp group!": "脆皮时者集团！", //击杀消息末尾
    "Megablimp!": "脆皮超级飞艇！", //击杀消息末尾
    "Megablimp group!": "脆皮超级飞艇集团！", //击杀消息末尾
    "Mitschimp!": "脆皮巨猩猩！", //击杀消息末尾
    "Mitschimp group!": "脆皮巨猩猩集团！", //击杀消息末尾
    "Brickimp!": "脆皮砖汉！", //击杀消息末尾
    "Brickimp group!": "脆皮砖汉集团！", //击杀消息末尾
    "Indianimp!": "脆皮印第安人！", //击杀消息末尾
    "Indianimp group!": "脆皮印第安人集团！", //击杀消息末尾
    "Warden!": "典狱长！", //击杀消息末尾
    "Warden group!": "典狱长集团！", //击杀消息末尾
    "Robotrimp!": "脆皮机器人！", //击杀消息末尾
    "Robotrimp group!": "脆皮机器人集团！", //击杀消息末尾
    "Mechimp!": "脆皮机甲！", //击杀消息末尾
    "Mechimp group!": "脆皮机甲集团！", //击杀消息末尾
    "Destructimp!": "脆皮破灭者！", //击杀消息末尾
    "Destructimp group!": "脆皮破灭者集团！", //击杀消息末尾
    "Terminatimp!": "脆皮终结者！", //击杀消息末尾
    "Terminatimp group!": "脆皮终结者集团！", //击杀消息末尾
    "Autoimp!": "脆皮汽车！", //击杀消息末尾
    "Autoimp group!": "脆皮汽车集团！", //击杀消息末尾
    "Artimp!": "脆皮机器艺术家！", //击杀消息末尾
    "Artimp group!": "脆皮机器艺术家集团！", //击杀消息末尾
    "Neutrimp!": "脆皮中子怪！", //击杀消息末尾
    "Neutrimp group!": "脆皮中子怪集团！", //击杀消息末尾
    "Fusimp!": "脆皮聚变怪！", //击杀消息末尾
    "Fusimp group!": "脆皮聚变怪集团！", //击杀消息末尾
    "Hydrogimp!": "脆皮氢怪！", //击杀消息末尾
    "Hydrogimp group!": "脆皮氢怪集团！", //击杀消息末尾
    "Carbimp!": "脆皮碳怪！", //击杀消息末尾
    "Carbimp group!": "脆皮碳怪集团！", //击杀消息末尾
    "Prismimp!": "脆皮棱镜怪！", //击杀消息末尾
    "Prismimp group!": "脆皮棱镜怪集团！", //击杀消息末尾
    "Rainbimp!": "脆皮彩虹兽！", //击杀消息末尾
    "Rainbimp group!": "脆皮彩虹兽集团！", //击杀消息末尾
    "Lightimp!": "脆皮光怪！", //击杀消息末尾
    "Lightimp group!": "脆皮光怪集团！", //击杀消息末尾
    "Meltimp!": "脆皮熔怪！", //击杀消息末尾
    "Meltimp group!": "脆皮熔怪集团！", //击杀消息末尾
    "Sweltimp!": "脆皮酷热者！", //击杀消息末尾
    "Sweltimp group!": "脆皮酷热者集团！", //击杀消息末尾
    "Darknimp!": "脆皮暗罪者！", //击杀消息末尾
    "Darknimp group!": "脆皮暗罪者集团！", //击杀消息末尾
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*\-?$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\s*[A-Za-z]\s*$/, //带单字母的纯空格
	/^[e\s\d\(]+$/,
	/^\d+(\.\d+)?(e[+\-]?\d+)?\s*工作空间$/,
	/^\d+(\.\d+)?(e[+\-]?\d+)?\s*\/秒$/,
	/^\d+\s*工头$/,
	/^\d+\s*级地图$/,
	/^\d+\s*岩浆岩$/,
	/^\d+\s*Mi$/,
	/^(\d+\s*分\s*)?\d+\s*秒$/,
	/^(\d+\s*时\s*)?\d+\s*分$/,
	/^(\d+\s*天\s*)?\d+\s*时$/,
];

var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^(.*)That Chickimp dropped (.*) food!$/, '$1脆皮小鸡掉落了 $2 食物！'], //特定敌人
    [/^(.*)You hear nearby Kittimps running away in fear and decide to check out their former home. There, you find a prey pile with (.*) food!$/, '$1附近的脆皮小猫害怕地跑开了，您决定去它们的窝里看看。接着您在那发现了 $2 食物！'], //特定敌人
    [/^(.*)That Grimp dropped (.*) wood!$/, '$1脆皮护林者掉落了 $2 木头！'], //特定敌人
    [/^(.*)The Golimp fell to pieces! You manage to grab (.*) fragments before it begins pulling itself together.$/, '$1脆皮魔像被打碎了！在它重新凝聚成形之前，您拿走了 $2 碎片。'], //特定敌人
    [/^(.*)The Golimp fell to pieces! You manage to grab (.*) bars of metal before it begins pulling itself together.$/, '$1脆皮魔像被打碎了！在它重新凝聚成形之前，您拿走了 $2 金属。'], //特定敌人
    [/^(.*)That Seirimp dropped (.*) metal! Neat-O.$/, '$1脆皮矿精掉落了 $2 金属！真棒。'], //特定敌人
    [/^(.*)That Slagimp fell over, and (.*) gems popped out! How about that\?!$/, '$1脆皮炉渣怪倒下了， $2 宝石冒了出来！什么情况？！'], //特定敌人
    [/^(.*)The Moltimp thanked you for the combat, and handed you (.*) bars of metal! Then he died.$/, '$1脆皮熔金怪感谢您与它作战，并交给您 $2 金属！然后它就凉了。'], //特定敌人
    [/^(.*)The Entimp is no more. You manage to salvage (.*) logs of wood from his trunk!$/, '$1脆皮树人再也不会动了。您从它的树干上获取了 $2 木头！'], //特定敌人
    [/^(.*)Time for some stew! You scored (.*) food from that Squirrimp!$/, '$1该炖点什么吃了！您将脆皮松鼠烹饪后获得了 $2 食物！'], //特定敌人
    [/^(.*)You sift through the Gravelimp, and manage to find (.*) bars of metal! Good on you!$/, '$1您筛了一下碎石怪留下的东西，找到了 $2 金属！真不错！'], //特定敌人
    [/^(.*)That Blimp dropped (.*) Food, Wood and Metal! That should be useful.$/, '$1脆皮飞艇掉落了 $2 食物，木头和金属！一定能用得上的。'], //特定敌人
    [/^(.*)You were able to extract (.*) Helium Canisters from that Blimp!$/, '$1您从脆皮飞艇上提取了 $2 氦。'], //特定敌人
    [/^(.*)You were able to extract (.*) Radon Vials from that Blimp!$/, '$1您从脆皮飞艇上提取了 $2 氡。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map.$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送到了下一张虚空地图。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map with an extra (.*) Helium!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送到了下一张虚空地图，并额外获取了 $2 氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the next Void map with an extra (.*) Radon!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送到了下一张虚空地图，并额外获取了 $2 氡！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world .$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回世界。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world  with an extra (.*) Helium!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回世界，并额外获取了 $2 氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to the world  with an extra (.*) Radon!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回世界，并额外获取了 $2 氡！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber.$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回地图界面。'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber with an extra (.*) Helium!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回地图界面，并额外获取了 $2 氦！'], //特定敌人
    [/^(.*)Cthulimp and the map it came from crumble into the darkness. You find yourself instantly teleported to your map chamber with an extra (.*) Radon!$/, '$1脆皮克苏鲁及它藏身的地图遁入了黑暗。您被传送回地图界面，并额外获取了 $2 氡！'], //特定敌人
    [/^(.*)Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot.$/, '$1在您刚发现进入了新的虚空地图时，绒绒已经悄悄地把所有东西都顺走了。'], //特定敌人
    [/^(.*)Before you even realized you were in a new Void Map, Fluffy snuck to the end and quickly stole all the loot. You gained another (.*) Helium!$/, '$1在您刚发现进入了新的虚空地图时，绒绒已经悄悄地把所有东西都顺走了。您额外获得了 $2 氦！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Fluffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot!$/, '$1在您还没搞清楚情况的时候，绒绒已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Scruffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot!$/, '$1在您还没搞清楚情况的时候，污污已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Fluffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot! After earning a bonus on each of +(.*)% Helium, you've earned an additional (.*) Helium!$/, '$1在您还没搞清楚情况的时候，绒绒已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！由于每张地图可以额外获得 $3% 氦，您最后额外获得了 $4 氦！'], //特定敌人
    [/^(.*)Before you even realize what's happening, Scruffy has entered and cleared the remaining (.*) Void Maps and quickly stole all the loot! After earning a bonus on each of +(.*)% Radon, you've earned an additional (.*) Radon!$/, '$1在您还没搞清楚情况的时候，污污已经通过了剩下的 $2 张虚空地图，并迅速把所有东西都顺走了！由于每张地图可以额外获得 $3% 氡，您最后额外获得了 $4 氡！'], //特定敌人
    [/^(.*)That Dragimp dropped (.*) gems!$/, '$1脆皮龙掉落了 $2 宝石！'], //特定敌人
    [/^(.*)Mitschimp dropped (.*) wood!$/, '$1脆皮巨猩猩掉落了 $2 木头！'], //特定敌人
    [/^(.*)That Prismimp dropped (.*) gems, how sweet of it!$/, '$1脆皮棱镜怪掉落了 $2 宝石，多可爱！'], //特定敌人
    [/^(.*)You feel bad about slaying an incredibly rare Rainbimp, but at least he dropped (.*) gems! Totally worth.$/, '$1杀掉稀有的脆皮彩虹兽让人感觉不太好，但它掉落了 $2 宝石！还是值得的。'], //特定敌人
    [/^(.*)The Lightimp's light floats up and away, unbothered by the fact that you just killed its body. Since it doesn't want the body anymore, you break it down in to (.*) gems!$/, '$1脆皮光怪的光亮向上飘走了，看起来一点也没有被失去身体的事实打扰到。既然它自己也不在乎，您索性将它的身体打碎，获得了 $2 宝石！'], //特定敌人
    [/^(.*)What a surprise, the Meltimp is melting! You find a healthy stack of (.*) metal where it used to be!$/, '$1真意外，脆皮熔怪熔化了！您在它熔化的地方发现了 $2 金属！'], //特定敌人
    [/^(.*)That Sweltimp chucked (.*) bars of metal right at your head! You'll take it though, thanks guy!$/, '$1脆皮酷热者把 $2 金属扔向了您的头！您将这些带走了，谢了伙计！'], //特定敌人
    [/^(.*)Indianimp dropped (.*) metal!$/, '$1脆皮印第安人掉落了 $2 金属！'], //特定敌人
    [/^(.*)Robotrimp discombobulated. Loot inspection reveals: (.*) wood and (.*) food. Splendiferous.$/, '$1脆皮机器人，思维，混乱。战利品，检查，发现： $2 木头， $3 食物。极好。'], //特定敌人
    [/^(.*)Mechimp disengaged. Reward encountered: (.*) bars of metal. Huzzah.$/, '$1脆皮机甲，脱离，战斗。奖励： $2 金属。撒花。'], //特定敌人
    [/^(.*)Destructimp shorted out. Salvage results: (.*) bars of metal. Acceptable.$/, '$1脆皮破灭者，已短路。修复，结果： $2 金属。差强，人意。'], //特定敌人
    [/^(.*)Terminatimp Terminated. Findings: (.*) bars of metal. Hasta la Vista.$/, '$1脆皮终结者，已终结。发现： $2 金属。后会，有期。'], //特定敌人
    [/^(.*)Autoimp force quit. Memory dump provides (.*) bars of metal and no clues. It's a feature!$/, '$1脆皮汽车，强制，关闭。内存，转存，获得， $2 金属。但没有，线索。这是，特性。'], //特定敌人
    [/^(.*)The Artimp wordlessly sputters, whirrs, beeps, then drops (.*) perfect cubes of metal on the ground. Cubist art is your favorite!$/, '$1脆皮机器艺术家发出了噼啪、嗡嗡、嘟嘟的声音，最后在地上留下了一个完美的立方，里面装着 $2 金属。立方主义是您的最爱！'], //特定敌人
    [/^(.*)The Neutrimp gasps, shimmers, squeaks, then poofs into a quickly dispersing purple cloud. You spend a few moments trying to make sense of what you've just seen, but look around and find (.*) wood and (.*) metal instead!$/, '$1脆皮中子怪气喘吁吁，微微闪光，嘎吱作响，然后噗的一声变成了一团迅速分散的紫色烟雾。您半天没搞明白到底发生了什么，最后您放弃了，而在旁边发现了 $2 木头和 $3 金属！'], //特定敌人
    [/^(.*)The Fusimp explodes, leaving behind (.*) bars of metal and a nice dose of radiation.$/, '$1脆皮聚变怪爆炸了，留下了 $2 金属，和大量辐射。'], //特定敌人
    [/^(.*)Before you can blink, the Hydrogimp vaporizes. That's fine though, it left (.*) food for you!$/, '$1脆皮氢怪在您眨眼前就漏光了气。好在它还为您留下了 $2 食物！'], //特定敌人
    [/^(.*)The Carbimp begins to crackle and shrink. Within a few seconds, all that's left is (.*) wood.$/, '$1脆皮碳怪噼啪作响，迅速缩小。不一会儿，只剩下了 $2 木头。'], //特定敌人
    [/^(.*)You managed to steal (.*) Helium Canisters from that Improbability. That'll teach it.$/, '$1您从乌有者身上顺走了 $2 氦。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Radon Vials from that Improbability. That'll teach it.$/, '$1您从乌有者身上顺走了 $2 氡。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Helium Canister from that Omnipotrimp. That'll teach it.$/, '$1您从全能者身上顺走了 $2 氦。让它长长记性。'], //特定敌人
    [/^(.*)You managed to steal (.*) Radon Vial from that Omnipotrimp. That'll teach it.$/, '$1您从全能者身上顺走了 $2 氡。让它长长记性。'], //特定敌人
    [/^(.*)The Omnipotrimp explodes, killing all of your soldiers!$/, '$1全能者爆炸了，杀死了所有士兵！'], //特定敌人
    [/^(.*)Radioactive waste spills to the ground as the Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being (.*) bars of metal!$/, '$1脆皮变异者倒下后，体内的核废料溅得到处都是。您让一些脆皮去收集那堆有毒烂泥里面闪闪发光的东西，最后获得了 $2 金属！'], //特定敌人
    [/^(.*)Radioactive waste spills to the ground as the Hulking Mutimp falls. You send a few Trimps to grab the shiny stuff in the toxic sludge, which ends up being (.*) bars of metal!$/, '$1脆皮大型变异者倒下后，体内的核废料溅得到处都是。您让一些脆皮去收集那堆有毒烂泥里面闪闪发光的东西，最后获得了 $2 金属！'], //特定敌人
    [/^(.*)You have completed The Black Bog! 1 stack of Exhausted and Motivated have been removed from your Trimps.$/, '$1您通过了黑色沼泽！脆皮同时减少了1层疲惫不堪和1层积极前进。'], //特定敌人
    [/^(.*)That Randimp dropped (.*) gems! What a bro!$/, '$1脆皮百变怪掉落了 $2 宝石！真是好兄弟！'], //特定敌人
    [/^(.*)That Goblimp dropped (.*) gems! What a bro!$/, '$1脆皮地精掉落了 $2 宝石！真是好兄弟！'], //特定敌人
    [/^Drops (.*)x Gems$/, '掉落 $1 倍的宝石'], //特定敌人
    [/^(.*)That Randimp gave you (.*) gems! Thanks Randimp!$/, '$1脆皮百变怪交给您 $2 宝石！谢了！'], //特定敌人
    [/^(.*)That Feyimp gave you (.*) gems! Thanks Feyimp!$/, '$1脆皮小妖交给您 $2 宝石！谢了！'], //特定敌人
    [/^(.*)You stole (.*) fragments from that Randimp! It really didn't look like she needed them though, don't feel bad.$/, '$1您从脆皮百变怪那顺走了 $2 碎片！反正她看起来也不需要，别有负罪感。'], //特定敌人
    [/^(.*)You stole (.*) fragments from that Flutimp! It really didn't look like she needed them though, don't feel bad.$/, '$1您从脆皮飘兽那顺走了 $2 碎片！反正她看起来也不需要，别有负罪感。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp. You found (.*) Trimp inside, and it looks hella bored.$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它看起来很无聊。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp. You found (.*) Trimps inside, and they all seem content to stay living there!$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它们看起来很乐意继续在里面生活下去！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp.  There's enough room for (.*) Trimp to live inside, though it will be quite lonely.$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮，不过这样它会很孤单。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Randimp.  There's enough room for (.*) Trimps to live inside!$/, '$1死去的脆皮百变怪体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp. You found (.*) Trimp inside, and it looks hella bored.$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它看起来很无聊。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp. You found (.*) Trimps inside, and they all seem content to stay living there!$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。您在里面发现了 $2 个脆皮，它们看起来很乐意继续在里面生活下去！'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp.  There's enough room for (.*) Trimp to live inside, though it will be quite lonely.$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮，不过这样它会很孤单。'], //特定敌人
    [/^(.*)It's nice, warm, and roomy in that dead Tauntimp.  There's enough room for (.*) Trimps to live inside!$/, '$1死去的脆皮咚咚体内环境舒适，温暖，而且宽敞。里面可以住下 $2 个脆皮！'], //特定敌人
    [/^(.*)Seeing the Randimp(s*) fall is causing all of your Trimps to work (.*)% harder!$/, '$1看着脆皮百变怪挂掉，脆皮们工作努力程度增加了 $3% ！'], //特定敌人
    [/^(.*)Seeing the Whipimp(s*) fall is causing all of your Trimps to work (.*)% harder!$/, '$1看着脆皮鞭者挂掉，脆皮们工作努力程度增加了 $3% ！'], //特定敌人
    [/^(.*)The ground up Randimp now increases your Trimps' breed speed by (.*)%!$/, '$1脆皮百变怪倒下了，但它可以让脆皮繁殖速度增加 $2% ！'], //特定敌人
    [/^(.*)The ground up Venimp now increases your Trimps' breed speed by (.*)%!$/, '$1脆皮爱神倒下了，但它可以让脆皮繁殖速度增加 $2% ！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) food!$/, '$1从脆皮百变怪那获得 $2 食物！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) wood!$/, '$1从脆皮百变怪那获得 $2 木头！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) metal!$/, '$1从脆皮百变怪那获得 $2 金属！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) science!$/, '$1从脆皮百变怪那获得 $2 科学点！'], //特定敌人
    [/^(.*)That Randimp gave you (.*) gems!$/, '$1从脆皮百变怪那获得 $2 宝石！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) food!$/, '$1从脆皮弄臣那获得 $2 食物！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) wood!$/, '$1从脆皮弄臣那获得 $2 木头！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) metal!$/, '$1从脆皮弄臣那获得 $2 金属！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) science!$/, '$1从脆皮弄臣那获得 $2 科学点！'], //特定敌人
    [/^(.*)That Jestimp gave you (.*) gems!$/, '$1从脆皮弄臣那获得 $2 宝石！'], //特定敌人
    [/^(.*)That Randimp made your Trimps super strong!$/, '$1脆皮百变怪使脆皮们变得更强！'], //特定敌人
    [/^(.*)That Titimp made your Trimps super strong!$/, '$1脆皮泰坦使脆皮们变得更强！'], //特定敌人
    [/^(.*)That Titimp made your Trimps super strong!\(Titimp wishes to remind you that his name is pronounced "Tie Timp"$/, '$1脆皮泰坦使脆皮们变得更强！(脆皮泰坦提醒您，它的名字不是“太躺”，跟“躺赢”也没有关系'], //特定敌人
    [/^(.*)That Randimp dropped (.*) food, (.*) wood, (.*) metal, and (.*) science!$/, '$1脆皮百变怪掉落了 $2 食物， $3 木头， $4 金属，和 $5 科学点！'], //特定敌人
    [/^(.*)That Randimp dropped (.*) food, (.*) wood, (.*) metal, (.*) science, and (.*) gems!$/, '$1脆皮百变怪掉落了 $2 食物， $3 木头， $4 金属， $5 科学点，和 $6 宝石！'], //特定敌人
    [/^(.*)That Chronoimp dropped (.*) food, (.*) wood, (.*) metal, and (.*) science!$/, '$1脆皮时者掉落了 $2 食物， $3 木头， $4 金属，和 $5 科学点！'], //特定敌人
    [/^(.*)That Chronoimp dropped (.*) food, (.*) wood, (.*) metal, (.*) science, and (.*) gems!$/, '$1脆皮时者掉落了 $2 食物， $3 木头， $4 金属， $5 科学点，和 $6 宝石！'], //特定敌人
    [/^(.*)You killed a Randimp! The strong magnetic forces now increase your loot by (.*)%!$/, '$1您击杀了一个脆皮百变怪！它的强大磁力使您战利品数量增加 $2% ！'], //特定敌人
    [/^(.*)You killed a Magnimp! The strong magnetic forces now increase your loot by (.*)%!$/, '$1您击杀了一个脆皮磁王！它的强大磁力使您战利品数量增加 $2% ！'], //特定敌人
    [/^(.*)Your Trimps managed to pull 1 perfectly preserved bone from that Skeletimp!$/, '$1脆皮们从脆皮骷髅身上取得了1块保存完好的骨头！'], //特定敌人
    [/^(.*)That was a pretty big Skeletimp. Your Trimps scavenged the remains and found 2 perfectly preserved bones!$/, '$1这个脆皮骷髅相当巨大。脆皮们搜寻了残骸，找到了2块保存完好的骨头！'], //特定敌人
    [/^A big, wooden shield. Adds (.*) health to each soldier per level.$/, '一面大木盾，每级增加每名士兵 $1 生命值。'], //装备
    [/^A big, wooden shield. Adds (.*) block to each soldier per level.$/, '一面大木盾，每级增加每名士兵 $1 格挡。'], //装备
	[/^Better than nothing. Adds (.*) attack to each soldier per level$/, '聊胜于无。每级增加每名士兵 $1 攻击力'], //装备
    [/^At least their feet will be safe. Adds (.*) health to each soldier per level$/, '至少能保护到脚。每级增加每名士兵 $1 生命值'], //装备
    [/^It's kind of heavy for your Trimps, but they'll manage. Adds (.*) attack to each soldier per level$/, '对脆皮来说有点重，但它们能搞定。每级增加每名士兵 $1 攻击力'], //装备
    [/^Provides a decent amount of protection to the Trimps' heads, adding (.*) health to each soldier per level.$/, '为脆皮头部提供不错的防护，每级增加每名士兵 $1 生命值。'], //装备
    [/^This thing is big and pointy. It adds (.*) attack to each soldier per level$/, '这玩意又大又尖。每级增加每名士兵 $1 攻击力'], //装备
    [/^Pants designed specificially for the little Trimps! Adds (.*) health to each soldier per level.$/, '专为脆皮的小身板设计的裤子！每级增加每名士兵 $1 生命值。'], //装备
    [/^This weapon is pretty intimidating, but your Trimps think they can handle it. Adds (.*) attack to each soldier per level$/, '这武器相当吓人，但脆皮觉得它们能用得好。每级增加每名士兵 $1 攻击力'], //装备
    [/^These shoulderguards will help keep your Trimps' necks and shoulders safe, and they look cool too. Adds (.*) health to each soldier per level$/, '这些护肩可以保护脆皮的脖子和肩膀，而且看起来挺酷的。每级增加每名士兵 $1 生命值'], //装备
    [/^This sword looks sweet. Seriously, if you could see it you'd think it looked sweet. Trust me. Adds (.*) attack to each soldier per level$/, '这把剑看起来真可爱。真的，要是您看得到的话，您也会这么觉得。相信我。每级增加每名士兵 $1 攻击力'], //装备
    [/^Some real, heavy duty armor. Everyone looks badass in heavy duty armor. Adds (.*) health to each soldier per level$/, '真正的重型护甲。穿上这些的脆皮看起来吊爆了。每级增加每名士兵 $1 生命值'], //装备
    [/^A powerful ranged weapon. Your Trimps can do some damage with this sucker. Adds (.*) attack to each soldier per level$/, '强大的远程武器。这玩意用来搞事情会很称手。每级增加每名士兵 $1 攻击力'], //装备
    [/^A cozy and thick padded jacket that goes under the breastplate. Your Trimps think they're great! Adds (.*) health to each soldier per level.$/, '一件穿戴舒适，可以穿戴在胸甲内的厚棉衣。脆皮们爱死它了！每级增加每名士兵 $1 生命值。'], //装备
    [/^(.*), Z$/, '$1，区域'], //统计等
    [/^Progress: (.*) \/$/, '进度：$1 /'], //成就等
    [/^Complete Zone (\d+) in Universe$/, '通过区域 $1 于宇宙'], //成就等
    [/^Reach (.*) displayed damage$/, '面板伤害值达到 $1'], //成就等
    [/^Have  (.*) total Trimps$/, '脆皮总数达到 $1'], //成就等
    [/^Use the Portal (.*) time(s*)$/, '使用 $1 次传送门'], //成就等
    [/^Row Finished! \((.*) total$/, '此类成就全部完成！(数量一共为 $1 '], //成就等
    [/^Clear  (.*) total Zones$/, '一共通过 $1 个区域'], //成就等
    [/^Clear  (.*) total Maps$/, '一共通过 $1 张地图'], //成就等
    [/^Gather (.*) total Helium$/, '一共获取了 $1 氦'], //成就等
    [/^Gather (.*) total Radon$/, '一共获取了 $1 氡'], //成就等
    [/^Reach (.*) Helium Per Hour$/, '氦每小时最高达到 $1 '], //成就等
    [/^Collect (.*) Heirloom(s*)$/, '一共收集了 $1 个传家宝'], //成就等
    [/^Collect (.*) Gem(s*)$/, '一共收集了 $1 宝石'], //成就等
    [/^Earn (.*) Helium from the Daily Challenge$/, '从日常挑战中获取 $1 氦'], //成就等
    [/^Reach Z(.*) after losing no more than one fight per Zone.$/, '在到达区域 $1 之前，每个区域至多只战败一次。'], //成就等
    [/^Reach U2 Z(.*) without ever entering a Map.$/, '不进入地图的前提下，通过宇宙2的区域 $1 。'], //成就等
    [/^Reach U2 Z(.*) without your Shield falling below (.*)%.$/, '棱镜护盾从未低于 $2% 的前提下，通过宇宙2的区域 $1 。'], //成就等
    [/^Progress: Your Shield has already hit (.*)% this run.$/, '进度：护盾曾经低至 $1% ，因此无法完成了。'], //成就等
    [/^Clear The Block in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过障碍区'], //成就等
    [/^Clear The Block in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过障碍区'], //成就等
    [/^Progress: Best run is (.*) min(s*)$/, '进度：最快为 $1 分钟'], //成就等
    [/^Progress: Too slow! Best run is (.*) min(s*)$/, '进度：因太慢失败了！最快为 $1 分钟'], //成就等
    [/^Row Finished! \(Best run is (.*) min(s*)$/, '此类成就全部完成！(最快为 $1 分钟'], //成就等
    [/^Progress: Best run is (.*) hour(s*)$/, '进度：最快为 $1 小时'], //成就等
    [/^Progress: Too slow! Best run is (.*) hour(s*)$/, '进度：因太慢失败了！最快为 $1 小时'], //成就等
    [/^Row Finished! \(Best run is (.*) hour(s*)$/, '此类成就全部完成！(最快为 $1 小时'], //成就等
    [/^Progress: Best run is (.*) minutes (.*) seconds$/, '进度：最快为 $1 分钟 $2 秒'], //成就等
    [/^Progress: Too slow! Best run is (.*) minutes (.*) seconds$/, '进度：因太慢失败了！最快为 $1 分钟 $2 秒'], //成就等
    [/^Row Finished! \(Best run is (.*) minutes (.*) seconds$/, '此类成就全部完成！(最快为 $1 分钟 $2 秒'], //成就等
    [/^Progress: Best run is (\d+)$/, '进度：最快为 $1'], //成就等
    [/^Progress: Too slow! Best run is (\d+)$/, '进度：因太慢失败了！最快为 $1'], //成就等
    [/^Row Finished! \(Best run is (\d+)$/, '此类成就全部完成！(最快为 $1'], //成就等
    [/^Progress: Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '进度：最快为 $1 小时 $3 分钟 $5 秒'], //成就等
    [/^Progress: Too slow! Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '进度：因太慢失败了！最快为 $1 小时 $3 分钟 $5 秒'], //成就等
    [/^Row Finished! \(Best run is (.*) hour(s*) (.*) minute(s*) (.*) second(s*)$/, '此类成就全部完成！(最快为 $1 小时 $3 分钟 $5 秒'], //成就等
    [/^Clear The Wall in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过高墙'], //成就等
    [/^Clear The Wall in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过高墙'], //成就等
    [/^Clear DoA in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过愤怒维度'], //成就等
    [/^Clear DoA in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过愤怒维度'], //成就等
    [/^Clear ToD in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过末日神殿'], //成就等
    [/^Clear ToD in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过末日神殿'], //成就等
    [/^Clear Prison in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过监狱'], //成就等
    [/^Clear Prison in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过监狱'], //成就等
    [/^Clear Prison in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过监狱'], //成就等
    [/^Clear Prison in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过监狱'], //成就等
    [/^Clear Bionic Wonderland in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过仿生仙境'], //成就等
    [/^Clear Bionic Wonderland in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过仿生仙境'], //成就等
    [/^Clear Imploding Star in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过爆炸之星'], //成就等
    [/^Clear Imploding Star in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过爆炸之星'], //成就等
    [/^Clear the Spire in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔'], //成就等
    [/^Clear the Spire in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔'], //成就等
    [/^Clear Spire II in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 II'], //成就等
    [/^Clear Spire II in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 II'], //成就等
    [/^Clear Spire III in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 III'], //成就等
    [/^Clear Spire III in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 III'], //成就等
    [/^Clear Spire IV in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 IV'], //成就等
    [/^Clear Spire IV in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 IV'], //成就等
    [/^Clear Spire V in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过尖塔 V'], //成就等
    [/^Clear Spire V in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过尖塔 V'], //成就等
    [/^Clear Big Wall in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过巨墙'], //成就等
    [/^Clear Big Wall in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过巨墙'], //成就等
    [/^Clear Prismatic Palace in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过棱镜宫殿'], //成就等
    [/^Clear Prismatic Palace in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过棱镜宫殿'], //成就等
    [/^Clear Melting Point in less than (.*) hour(s*) from start of run$/, '使用传送门后，在 $1 小时内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) min(s*) from start of run$/, '使用传送门后，在 $1 分钟内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*):(.*) from start of run$/, '使用传送门后，在 $1:$2 内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) hour(s*) (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 小时 $3 分钟 $5 秒内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*) minute(s*) (.*) second(s*) from start of run$/, '使用传送门后，在 $1 分钟 $3 秒内通过熔点'], //成就等
    [/^Clear Melting Point in less than (.*):(.*):(.*) from start of run$/, '使用传送门后，在 $1:$2:$3 内通过熔点'], //成就等
    [/^Have over (.*) traps at once$/, '同时拥有超过 $1 个陷阱'], //成就等
    [/^Spend over (.*) total He on Wormholes$/, '在虫洞上一共花费 $1 氦'], //成就等
    [/^Kill (.*) enemies in your Spire$/, '在尖塔中一共击杀 $1 敌人'], //成就等
    [/^Beat the Spire with no respec and (.*) or less He Spent$/, '在氦花费不超过 $1 ，且未在传送后进行特权洗点的前提下通过尖塔'], //成就等
    [/^Beat Spire II with no respec and (.*) or less He spent$/, '在氦花费不超过 $1 ，且未在传送后进行特权洗点的前提下通过尖塔 II'], //成就等
    [/^Complete Wither with (.*) stacks of Hardened$/, '在拥有 $1 层硬化的前提下，完成凋零挑战'], //成就等
    [/^Map At Z(\d+)\+$/, '进图区域：$1+'], //自动进图
    [/^Map At Z(\d+)(\+*) \((\D)$/, '区域$1$2进图($3'], //自动进图
    [/^([0-9a-zA-Z\.\%\s]*)Fire Trap Damage$/, '$1火焰陷阱伤害'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Poison Trap Damage$/, '$1剧毒陷阱伤害'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Lightning Trap Damage$/, '$1闪电陷阱伤害'], //传家宝
    [/^Increases the damage dealt by Lightning Trap, Shocked, and its column boost to Fire and Poison Traps by (.*)%.$/, '将闪电陷阱、震荡效果造成的伤害，及对同一列火焰陷阱和剧毒陷阱的加成增加 $1% 。'], //传家宝
    [/^Increases the damage dealt by Lightning Trap and Shocked by (.*)%.$/, '将闪电陷阱及震荡效果造成的伤害增加 $1% 。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Runestone Drop Rate$/, '$1符石掉率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Strength Tower Effect$/, '$1力量塔效果'], //传家宝
    [/^Increases the damage dealt by Fire Traps on the same Floor as a Strength Tower by (.*)%. Does not increase the world bonus to Trimps.$/, '将与力量塔同一行的火焰陷阱伤害增加 $1% 。对力量塔的世界加成无影响。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Condenser Effect$/, '$1冷凝塔效果'], //传家宝
    [/^Increases the amount of Poison damage compounded by the Condenser Tower by (.*)%. Does not increase the world bonus to Trimps.$/, '将冷凝塔复合的毒伤害增加 $1% 。对冷凝塔的世界加成无影响。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Metal Drop Rate$/, '$1金属掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Food Drop Rate$/, '$1食物掉落加成'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Wood Drop Rate$/, '$1木头掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Gem Drop Rate$/, '$1宝石掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Fragment Drop Rate$/, '$1碎片掉落加成'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Farmer Efficiency$/, '$1农民效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Lumberjack Efficiency$/, '$1伐木工效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Miner Efficiency$/, '$1矿工效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Dragimp Efficiency$/, '$1脆皮龙宝石效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Explorer Efficiency$/, '$1探险家碎片效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Scientist Efficiency$/, '$1科学家效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Pet \(Fluffy\) Exp$/, '$1绒绒经验值'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Pet \(Scruffy\) Exp$/, '$1污污经验值'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Player Efficiency$/, '$1玩家效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trainer Efficiency$/, '$1训练师效率'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Storage Size$/, '$1存储上限'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Breed Speed$/, '$1脆皮繁殖速度'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trimp Health$/, '$1脆皮生命值'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trimp Attack$/, '$1脆皮攻击力'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Trimp Block$/, '$1脆皮格挡'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Crit Damage, additive$/, '$1暴击伤害(效果叠加)'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Crit Chance, additive$/, '$1暴击率(效果叠加)'], //传家宝
	[/^([0-9a-zA-Z\.\%\s]*)Void Map Drop Chance$/, '$1虚空地图掉落概率'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Plaguebringer$/, '$1瘟疫使者效果'], //传家宝
    [/^(.*)% of all non-lethal damage and nature stacks you afflict on your current enemy are copied onto the next enemy. Plaguebringer damage cannot bring an enemy below 5% health, but nature stacks will continue to accumulate.$/, '将对目前敌人造成的所有非致命伤害及累积的三种自然层数的 $1% 对下一个敌人生效。瘟疫使者的伤害效果无法将敌人的生命值降到5%以下，但自然层数无限制。'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Prismatic Shield$/, '$1棱镜护盾'], //传家宝
    [/^([0-9a-zA-Z\.\%\s]*)Gamma Burst$/, '$1伽马暴发'], //传家宝
    [/^Each attack by your Trimps adds 1 stack of Charging. When Charging reaches 5 stacks, your Trimps will release a burst of energy, dealing (.*)% of their attack damage. Stacks reset after releasing a Burst or when your Trimps die.$/, '脆皮每次攻击时增加1层“蓄能”。当蓄能层数到达5层时，脆皮将释放积蓄的能量，对敌人造成 $1% 攻击力的伤害。当能量释放或者脆皮死亡后，层数重置。'], //传家宝
    [/^(.*)You have completed the$/, '$1您完成了 '], //通用挑战完成消息
    [/^(.*)You have completed the Balance challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了平衡挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //平衡挑战完成信息
	[/^(.*)You can research science again!$/, '$1您又可以进行科学研究了！'], //科学家挑战放弃消息
    [/^(.*)You have completed the 'Meditate' challenge! The dimension has returned to normal, and you have unlocked a new perk!$/, '$1您完成了 冥想 挑战！这个维度恢复到了正常，而且您解锁了一个新的特权！'], //冥想挑战完成消息
    [/^(.*)You have completed the Decay challenge! All stats have been returned to normal, and you can now create more powerful Gardens maps at will!$/, '$1您完成了 衰变 挑战！一切都恢复了正常，而且您可以随意制造更强大的花园地图了！'], //衰变挑战完成消息
    [/^(.*)You have completed the 'Trapper' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!$/, '$1您完成了 捕手 挑战！您的脆皮想起来如何繁殖了，而且您解锁了一个新的特权！'], //捕手挑战完成消息
    [/^(.*)You have completed the Electricity challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了电流挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //电流挑战完成信息
    [/^(.*)You have completed the 'Frugal' challenge! You can once again find equipment upgrades in maps, and Megabooks now increase gather rates by an extra 10%!$/, '$1您完成了 节俭 挑战！您又可以获得重铸升级了，而且超级升级的资源获取速度额外提升10%！'], //节俭挑战完成信息
    [/^(.*)You have completed the Life challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了生命挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //生命挑战完成信息
    [/^(.*)You have completed the Mapocalypse challenge! You have unlocked the 'Siphonology' Perk, and have been rewarded with (.*) Helium.$/, '$1您完成了天启地图挑战！您解锁了 虹吸学 特权，并且获取了 $2 氦。'], //天启地图挑战完成信息
    [/^(.*)You have completed the 'Coordinate' challenge! The Bad Guys on this world no longer fight together, and have regained their speed. You have unlocked the 'Coordinated' perk!$/, '$1您完成了 协同 挑战！世界上的敌人不再协同作战了，并且又可以获得快速效果了。您解锁了 协同 特权！'], //协同挑战完成信息
    [/^Bionic Wonderland (.*)$/, '仿生仙境 $1'], //粉碎挑战等
    [/^(.*)You have completed the Crushed challenge! You have been rewarded with (.*) Helium.$/, '$1您完成了粉碎挑战！您获取了 $2 氦。'], //粉碎挑战完成信息
    [/^(.*)You have completed the Slow challenge! You have found the patterns for the Gambeson and the Arbalest!$/, '$1您完成了迟缓挑战！您学会了制造棉甲和强弩！'], //迟缓挑战完成信息
    [/^(.*)You have completed the Nom challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了美味挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //美味挑战完成信息
    [/^(.*)You have completed the Mapology challenge! You have unlocked the 'Resourceful' Perk! Cheaper stuff!$/, '$1您完成了地图学挑战！您解锁了 足智多谋 特权！物美价廉！'], //地图学挑战完成信息
    [/^(.*)You have completed the Toxicity challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了毒性挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //毒性挑战完成信息
    [/^(.*)You have completed the Devastation challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!$/, '$1您完成了破坏挑战！世界恢复了正常，而且您解锁了 超杀 特权！'], //破坏挑战完成信息
    [/^(.*)You have completed the Watch challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了守望挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //守望挑战完成信息
    [/^(.*)You have completed the Lead challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了领导挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //领导挑战完成信息
    [/^Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z(\d+). Completing$/, '前往一个敌人攻击力为3倍，且腐化更加泛滥，从区域60就开始的维度。此维度中腐化格子给予氦，但只有正常维度的一半。乌有者及虚空地图直到区域$1之前，既不会因此变强，也不会有双倍奖励。在此挑战激活的前提下通过 '], //腐化挑战等
    [/^You have the Corrupted challenge active. Travel to a dimension where enemies have 3X attack and Corruption runs rampant, beginning at Z60. The Corruption in this dimension grants helium, but 50% less than normal. Improbabilities and Void Maps will still not gain strength or double reward until Z(\d+). Completing$/, '您目前正在进行腐化挑战。前往一个敌人攻击力为3倍，且腐化更加泛滥，从区域60就开始的维度。此维度中腐化格子给予氦，但只有正常维度的一半。乌有者及虚空地图直到区域$1之前，既不会因此变强，也不会有双倍奖励。在此挑战激活的前提下通过 '], //腐化挑战等
    [/^(.*)You have completed the Corrupted challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了腐化挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //腐化挑战完成信息
    [/^(.*)You have completed the Domination challenge! You have been rewarded with (.*) Helium, and you may repeat the challenge.$/, '$1您完成了统治挑战！您获取了 $2 氦，现在您又可以重新挑战了。'], //统治挑战完成信息
    [/^Against your better judgement, travel to a dimension that's simply just not very friendly. Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 10 Zones, enemy attack and health will increase by another 10x.$/, '前往一个对您完全不友好的维度，您知道的，这不是什么好主意。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过10层，敌人的攻击力和生命值还会再增加10倍。'], //抹杀挑战等
    [/^You have the Obliterated challenge active. "Against your better judgement, travel to a dimension that's simply just not very friendly. Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 10 Zones, enemy attack and health will increase by another 10x.$/, '您目前正在进行抹杀挑战。前往一个对您完全不友好的维度，您知道的，这不是什么好主意。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过10层，敌人的攻击力和生命值还会再增加10倍。'], //抹杀挑战等
    [/^If you thought Obliterated was not very friendly, wait until you see this dimension! Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 2 Zones, enemy attack and health will increase by another 3x.$/, '如果抹杀挑战已经让您感受到世界的恶意，那么这个挑战可能会让您怀疑人生。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过2层，敌人的攻击力和生命值还会再变为之前的3倍。'], //灭绝挑战等
    [/^You have the Eradicated challenge active. "If you thought Obliterated was not very friendly, wait until you see this dimension! Liquimps are unable to liquify, enemies have (.*)x attack and health, and equipment is (.*)x more expensive. Every 2 Zones, enemy attack and health will increase by another 3x.$/, '您目前正在进行灭绝挑战。如果抹杀挑战已经让您感受到世界的恶意，那么这个挑战可能会让您怀疑人生。此维度中无法进行液化，敌人的攻击力和生命值为正常的 $1 倍，装备成本为正常的 $2 倍。每通过2层，敌人的攻击力和生命值还会再变为之前的3倍。'], //灭绝挑战等
    [/^(.*)You have completed the Unbalance challenge! You have unlocked the Equality Perk!$/, '$1您完成了不平衡挑战！您解锁了 平等 特权！'], //不平衡挑战完成信息
    [/^(.*)Oh no, you failed the Bublé challenge! You have been rewarded with (.*) extra Radon, and you may try again.$/, '$1太糟了，布累挑战失败了！您获取了 $2 氡，现在您又可以重新挑战了。'], //布累挑战失败信息
    [/^(.*)You have completed the Bublé challenge! You're a hero among Trimps! You have been rewarded with (.*) extra Radon, and you may repeat the challenge.$/, '$1您完成了布累挑战！您是脆皮英雄！您获取了 $2 氡，现在您又可以重新挑战了。'], //布累挑战成功信息
    [/^Your Trimps have (\d+) Duel Points.$/, '脆皮有 $1 点决斗点数。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points.$/, '敌人有 $1 点决斗点数。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps have 3x attack for being over 50 points.$/, '脆皮有 $1 点决斗点数。因为脆皮决斗点数大于50，它们获得了3倍攻击力。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys have 3x attack for being over 50 points.$/, '敌人有 $1 点决斗点数。因为敌人决斗点数大于50，它们获得了3倍攻击力。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps always attack first and have 10x health for being below 10 points.$/, '脆皮有 $1 点决斗点数。因为脆皮决斗点数小于10，它们获得了抢先攻击的效果和10倍生命值。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys always attack first and have 10x health for being below 10 points.$/, '敌人有 $1 点决斗点数。因为敌人决斗点数小于10，它们获得了抢先攻击的效果和10倍生命值。'], //决斗挑战等
    [/^Your Trimps have (\d+) Duel Points. Your Trimps have 10x health for being below 20 points.$/, '脆皮有 $1 点决斗点数。因为脆皮决斗点数小于20，它们获得了10倍生命值。'], //决斗挑战等
    [/^The Bad Guys have (\d+) Duel Points. The Bad Guys have 10x health for being below 20 points.$/, '敌人有 $1 点决斗点数。因为敌人决斗点数小于20，它们获得了10倍生命值。'], //决斗挑战等
    [/^Your Trimps have (\d+)% Crit Chance based on enemy stacks.$/, '根据敌人的决斗点数，脆皮获得 $1 点暴击概率。'], //决斗挑战等
    [/^The Bad Guys have (\d+)% Crit Chance based on your stacks.$/, '根据脆皮的决斗点数，敌人获得 $1 点暴击概率。'], //决斗挑战等
    [/^(.*)You have completed the Duel challenge! You have unlocked the Criticality Perk!$/, '$1您完成了决斗挑战！您解锁了 暴击限界 特权！'], //决斗挑战完成信息
    [/^(.*)You have completed the Melt challenge! You have been rewarded with (.*) Radon, and you may repeat the challenge.$/, '$1您完成了熔化挑战！您获取了 $2 氡，现在您又可以重新挑战了。'], //熔化挑战完成信息
    [/^(.*)You have completed the 'Trappapalooza' challenge! Your Trimps now remember how to breed, and you have unlocked a new perk!$/, '$1您完成了捕手道达人挑战！您的脆皮想起来如何繁殖了，而且您解锁了一个新的特权！'], //捕手道达人挑战完成信息
    [/^(.*)You have completed the Quagmire challenge! You have gained an extra (.*) Radon, and your world has been returned to normal.$/, '$1您完成了泥淖挑战！您额外获取了 $2 氡，世界恢复了正常。'], //泥淖挑战完成信息
    [/^Your Trimps are Motivated, increasing all Loot gained \(including Radon\) by (.*)%.$/, '脆皮们积极前进，所有资源获取(包括氡)增加 $1% 。'], //泥淖挑战等
    [/^Your Trimps are exhausted, having only (.*)% of their normal damage and breed speed.$/, '脆皮们疲惫不堪，攻击力和繁殖速度只有正常的 $1%。'], //泥淖挑战等
    [/^Your Trimps are not at all exhausted, and have (.*)% more damage and breed speed.$/, '脆皮们完全不疲惫，攻击力和繁殖速度增加 $1%。'], //泥淖挑战等
    [/^(.*)You have completed the Wither challenge! Your world has been returned to normal, and you have unlocked the Tenacity perk!$/, '$1您完成了凋零挑战！世界恢复了正常，而且您解锁了 坚持 特权！'], //凋零挑战完成信息
    [/^Your Trimps have (\d+) stack(s*) of Hardened, increasing their Health by (.*)%.$/, '脆皮有 $1 层硬化，增加了 $3% 生命值。'], //凋零挑战等
    [/^The Bad Guys have (\d+) stack(s*) of Horror, increasing their Attack by (.*)%.$/, '敌人有 $1 层恐惧，增加了 $3% 攻击力。'], //凋零挑战等
    [/^(.*)You have completed the Revenge challenge! Your world has been returned to normal, and you have unlocked the Overkill perk!$/, '$1您完成了复仇挑战！世界恢复了正常，而且您解锁了 超杀 特权！'], //复仇挑战成功信息
    [/^(.*)You have failed the Revenge Challenge! Better luck next time!$/, '$1复仇挑战失败了！祝您下次好运！'], //复仇挑战失败信息
    [/^Your Trimps have been killed by enemy overkill damage (\d+) time(s*)$/, '脆皮因敌人超杀伤害而死亡了 $1 次'], //复仇挑战等
    [/^Your Trimps have (.*)x Attack and Health, but you will fail the challenge if they get (\d+) more stack(s*)!$/, '脆皮的攻击力和生命值变为 $1 倍，但如果再增加 $2 次，那么挑战将失败！'], //复仇挑战等
    [/^Quest: Quintuple \(x5\) your food. Progress: Quest Complete!$/, '任务内容：将食物变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your food. Progress: (.*) \/ (.*) food$/, '任务内容：将食物变为5倍。进度： $1 / $2 食物'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your wood. Progress: Quest Complete!$/, '任务内容：将木头变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your wood. Progress: (.*) \/ (.*) wood$/, '任务内容：将木头变为5倍。进度： $1 / $2 木头'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your metal. Progress: Quest Complete!$/, '任务内容：将金属变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your metal. Progress: (.*) \/ (.*) metal$/, '任务内容：将金属变为5倍。进度： $1 / $2 金属'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your gems. Progress: Quest Complete!$/, '任务内容：将宝石变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your gems. Progress: (.*) \/ (.*) gems$/, '任务内容：将宝石变为5倍。进度： $1 / $2 宝石'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your science. Progress: Quest Complete!$/, '任务内容：将科学点变为5倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Quintuple \(x5\) your science. Progress: (.*) \/ (.*) science$/, '任务内容：将科学点变为5倍。进度： $1 / $2 科学点'], //任务挑战等
    [/^Quest: Double your food. Progress: Quest Complete!$/, '任务内容：将食物变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your food. Progress: (.*) \/ (.*) food$/, '任务内容：将食物变为2倍。进度： $1 / $2 食物'], //任务挑战等
    [/^Quest: Double your wood. Progress: Quest Complete!$/, '任务内容：将木头变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your wood. Progress: (.*) \/ (.*) wood$/, '任务内容：将木头变为2倍。进度： $1 / $2 木头'], //任务挑战等
    [/^Quest: Double your metal. Progress: Quest Complete!$/, '任务内容：将金属变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your metal. Progress: (.*) \/ (.*) metal$/, '任务内容：将金属变为2倍。进度： $1 / $2 金属'], //任务挑战等
    [/^Quest: Double your gems. Progress: Quest Complete!$/, '任务内容：将宝石变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your gems. Progress: (.*) \/ (.*) gems$/, '任务内容：将宝石变为2倍。进度： $1 / $2 宝石'], //任务挑战等
    [/^Quest: Double your science. Progress: Quest Complete!$/, '任务内容：将科学点变为2倍。进度：任务完成！'], //任务挑战等
    [/^Quest: Double your science. Progress: (.*) \/ (.*) science$/, '任务内容：将科学点变为2倍。进度： $1 / $2 科学点'], //任务挑战等
    [/^Quest: Complete 5 Maps at Zone level. Progress: Quest Complete!$/, '任务内容：通过5张等级为区域层数的地图。进度：任务完成！'], //任务挑战等
    [/^Quest: Complete 5 Maps at Zone level. Progress: (.*) \/$/, '任务内容：通过5张等级为区域层数的地图。进度： $1 /'], //任务挑战等
    [/^Quest: One-shot 5 world enemies \(Overkill is disabled in World until complete\). Progress: Quest Complete!$/, '任务内容：秒杀世界上的5名敌人(直到任务完成为止，超杀在世界上暂时失效)。进度：任务完成！'], //任务挑战等
    [/^Quest: One-shot 5 world enemies \(Overkill is disabled in World until complete\). Progress: (.*) \/$/, '任务内容：秒杀世界上的5名敌人(直到任务完成为止，超杀在世界上暂时失效)。进度： $1 /'], //任务挑战等
    [/^(.*)You have completed your quest! You've completed (.*) \/ (.*) quests.$/, '$1任务完成！您已经完成了 $2 / $3 个任务。'], //任务挑战等
    [/^(.*)Oh no, you failed your quest! You've completed (.*) \/ (.*) quests.$/, '$1任务失败，真糟糕！您已经完成了 $2 / $3 个任务。'], //任务挑战等
    [/^(.*)You have a new quest!$/, '$1新的任务来了！内容为 '], //任务挑战等
    [/^(.*)You have completed the Quest challenge! Your World has been returned to normal and you have unlocked the Greed Perk!$/, '$1您完成了任务挑战！世界恢复了正常，而且您解锁了 贪婪 特权！'], //任务挑战完成信息
    [/^Decreases all Enemy Attack by (.*)%. You currently have (.*)% to Enemy Attack.$/, '减少敌人 $1% 攻击力。您目前使敌人攻击力变化： $2% 。'], //考古学挑战等
    [/^Increases all Attack by (.*)%. You currently have (.*)% to Attack.$/, '增加脆皮 $1% 攻击力。您目前使脆皮攻击力变化： $2% 。'], //考古学挑战等
    [/^Increases all Radon by (.*)%. You currently have (.*)% to Radon.$/, '增加 $1% 氡获取量。您目前使氡获取量变化： $2% 。'], //考古学挑战等
    [/^Increases all Resource Gain \(Food, Wood, Metal, Science, and Gems\) by (.*)%. You currently have (.*)% to Resource Gain.$/, '增加 $1% 非氡资源获取量(食物、木头、金属、科学点和宝石)。您目前使非氡资源获取量变化： $2% 。'], //考古学挑战等
    [/^Increases all Breed Speed by (.*)%. You currently have (.*)% to Breed Speed.$/, '增加 $1% 繁殖速度。您目前使繁殖速度变化： $2% 。'], //考古学挑战等
    [/^You have discovered (\d+) of these Relics and (\d+) total Relics. Each Relic has a max of 50 positive levels at a time. Cost increases based on total purchased Relics.$/, '您一共发现了 $1 个此类型的遗物，总共发现了 $2 个遗物。每个遗物最大为50级，且花费随着遗物发现总数而上升。'], //考古学挑战等
    [/^(.*)You have completed the Archaeology challenge! You have gained an extra (.*) Radon, and your world has been returned to normal.$/, '$1您完成了考古学挑战！您额外获取了 $2 氡，世界恢复了正常。'], //考古学挑战完成信息
    [/^You have completed Mayhem (\d+) time(s*). Your Trimps have \+(.*)% Attack, Health, and Radon, and your next run of Mayhem will spawn Bad Guys with (.*)x Attack and Health.$/, '您共完成了 $1 次暴乱挑战。挑战总奖励为增加 $3% 脆皮攻击力、生命值、氡获取量，下轮的敌人攻击力和生命值将增加 $4 倍。'], //暴乱挑战等
    [/^The Final Enemy of this Zone has (\d+) stacks of Mayhem, granting \+(.*)% Damage and Health. Complete Maps to lower these stacks.$/, '此区域最后一格的敌人目前有 $1 层暴乱，增加 $2% 攻击力和生命值。通过地图来减少层数。'], //暴乱挑战等
    [/^(.*)You have completed the Mayhem Challenge! Your Trimps have gained \+(.*)% Radon in Universe 2 and Damage and Health in Universe 1 and 2, and future runs of this Challenge will be 3x more difficult. You have now completed Mayhem (\d+) time(s*). Your new total Mayhem bonus is \+$/, '$1您完成了暴乱挑战！宇宙2中的氡，及宇宙1和宇宙2中的脆皮攻击力和生命值增加了 $2% ，后续挑战的难度将变为现在的3倍。您共完成了 $3 次暴乱挑战。暴乱挑战总奖励为 '], //暴乱挑战完成信息
    [/^Your Trimps learn to harvest special Herbs while collecting Food! Increases Trimp Attack by a number based on your total stored food. Grants \+30% Attack at (.*) Food, or \+300% at (.*). At your current total of (.*) Food,$/, '您的脆皮现在可以在采集食物时同时采集百草！根据食物储存量增加攻击力。在 $1 食物时增加30%攻击力，在 $2 食物时增加300%攻击力。您当前共有 $3 食物，'], //神农专精
	[/^you are gaining \+([\d+\.]+)% Trimp Attack$/, '您获得了 +$1% 攻击力'], //神农专精
	[/^you would gain \+([\d+\.]+)% Trimp Attack$/, '您可获得 +$1% 攻击力'], //神农专精
	[/^Each cleared Zone through Z(\d+) \(half of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域 $1 (最高通过区域的一半)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 I专精
    [/^Reduce the time in between fights and attacks by an additional 100ms through Z(\d+) \((\d+)% of your highest Zone reached\).$/, '直到区域 $1 (最高通过区域的$2%)之前，将战斗间隔和攻击间隔减少100ms。'], //风驰电掣 II专精
	[/^Each cleared Zone through Z(\d+) \(75% of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域 $1 (最高通过区域的75%)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 II专精
	[/^Each cleared Zone through Z(\d+) \(90% of your highest Zone reached\) will drop all available equipment prestiges from maps.$/, '直到区域 $1 (最高通过区域的90%)之前，所有通过的区域都可以掉落地图中所有的装备重铸升级。'], //锻铁术 III专精
	[/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. You have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果 5% ，等同于额外完成了1个尖塔。您完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 I专精
	[/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. Counting your Fluffy bonus as half of a Spire, you have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果 5% ，等同于额外完成了1个尖塔。加上绒绒的半个尖塔额外加成，您完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 I专精
	[/^Increase your Liquification bonus by 5%, as if you had completed 1 extra Spire. Counting your two Fluffy bonuses as one Spire, you have completed ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '增加液化效果 5% ，等同于额外完成了1个尖塔。加上绒绒的1个尖塔额外加成，您完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 I专精
    [/^last Portal,  (earning you a bonus of|which would earn you a bonus of) (.*)% extra Helium and (\d+) Void Maps.$/, '，自上次传送后氦获得 $2% 额外的加成，并且获得 $3 张虚空地图。'], //虚空特化 I专精
    [/^last Portal,  (earning you a bonus of|which would earn you a bonus of) (.*)% extra Radon and (\d+) Void Maps.$/, '，自上次传送后氡获得 $2% 额外的加成，并且获得 $3 张虚空地图。'], //虚空特化 I专精
	[/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果 5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 II专精
	[/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire and your Fluffy bonus as half of a Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果 5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成和绒绒的半个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 II专精
	[/^Increase your Liquification bonus by another 5%, as if you had completed 1 extra Spire. Counting Liquification I as one Spire and your two Fluffy bonuses as another, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '再增加液化效果 5% ，等同于额外完成了1个尖塔。加上液化 I的1个尖塔额外加成和绒绒的1个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 II专精
    [/^last Portal, (earning you a bonus of|which would earn you a bonus of) (\d+) more Void Maps \((\d+) including Void Specialization I\).$/, '，自上次传送后获得 $2 张虚空地图(加上虚空特化 I的效果，共可获得 $3 张虚空地图)。'], //虚空特化 II专精
    [/^Fluffy gains \+25% more Exp per Zone for each completed Evolution. Fluffy has Evolved (\d+) time(s*), (earning|which would earn) you a bonus of \+(.*)% Exp.$/, '绒绒每进化一次，每区域就多获得25%经验值。绒绒目前进化了 $1 次，多获得 $4% 经验值。'], //绒绒专注专精
    [/^Scruffy gains \+25% more Exp per Zone for each completed Evolution. Scruffy has Evolved (\d+) time(s*), (earning|which would earn) you a bonus of \+(.*)% Exp.$/, '污污每进化一次，每区域就多获得25%经验值。污污目前进化了 $1 次，多获得 $4% 经验值。'], //污污专注专精
    [/^Your Shield currently has a bonus of ([\d+\.]+)%, so this Mastery (is giving you|would give you) \+([\d+\.]+)% additional Crit Chance.$/, '您的盾牌目前暴击率为 $1% ，因此该精通额外增加 $3% 暴击率。'], //蓄力暴击专精
    [/^2. If Fluffy's level 6 bonus is active, allows Void Maps to infinitely stack. HOWEVER, this requires  the bonus Helium does not increase past the amount that Fluffy can normally stack, which for you would cap the bonus to a (\d+) stack. To clarify, a 100 stack or a (\d+) stack map would both grant (.*)% bonus Helium to each map in the stack, but the entire stack will still be completed instantly and each map in the stack will receive the maximum bonus.$/, '2. 只要绒绒的6级加成激活了，虚空地图就可以无限融合。但前提条件是氦加成不能超过绒绒融合的上限。对您来说，这个上限为 $1 次。换句话说，融合100次的虚空地图或者融合 $2 次的虚空地图都给予每张虚空地图 $3% 的氦加成，不过，所有融合后的地图仍然可以一起完成，并且融合的每张地图都可以获得最大的加成。'], //虚空大师专精
    [/^2. If Fluffy's level 6 bonus is active, allows Void Maps to infinitely stack. HOWEVER, this requires  the bonus Radon does not increase past the amount that Fluffy can normally stack, which for you would cap the bonus to a (\d+) stack. To clarify, a 100 stack or a (\d+) stack map would both grant (.*)% bonus Radon to each map in the stack, but the entire stack will still be completed instantly and each map in the stack will receive the maximum bonus.$/, '2. 只要绒绒的6级加成激活了，虚空地图就可以无限融合。但前提条件是氡加成不能超过绒绒融合的上限。对您来说，这个上限为 $1 次。换句话说，融合100次的虚空地图或者融合 $2 次的虚空地图都给予每张虚空地图 $3% 的氡加成，不过，所有融合后的地图仍然可以一起完成，并且融合的每张地图都可以获得最大的加成。'], //虚空大师专精
    [/^On your current run, you have cleared through Spire (.*), so this Mastery is granting (\d+) extra Healthy cell(s*). On your current Zone, you're finding (\d+) Healthy cells.$/, '自上次传送后您通过了尖塔 $1 ，此专精可获得 $2 个额外健康格子。目前区域中有 $4 个健康格子。'], //健康之力 II专精
    [/^Hyperspeed II's bonus will now function up to 75% of your Highest Zone Reached \(through Z(\d+)\) rather than a measly$/, '风驰电掣 II专精的效果上限提升为最高通过区域(区域 $1 )的75%，而不是只有之前的'], //液化 III专精
    [/^Hyperspeed II's bonus will also now function up to 75% of your Highest Zone Reached \(through Z(\d+)\) rather than a measly$/, '风驰电掣 II专精的效果上限同时提升为最高通过区域(区域 $1 )的75%，而不是只有之前的'], //液化 III专精
	[/^Counting Liquification I and II as two Spires, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 III专精
	[/^Counting Liquification I and II as two Spires and your Fluffy bonus as half of a Spire, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成和绒绒的半个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 III专精
	[/^Counting Liquification I and II as two Spires and your two Fluffy bonuses as another, you have completed the equivalent of ([\d+\.]+) unique Spire(s*), giving you ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\). This mastery (is increasing|would increase)  your bonus to ([\d+\.]+)% of your highest Zone reached \(through Z(\d+)\).$/, '加上液化 I和液化 II的2个尖塔额外加成和绒绒的1个尖塔额外加成，您已相当于完成了 $1 个尖塔，液化效果持续到最高通过区域的 $3% (区域 $4 )，此专精将液化效果提高到最高通过区域的 $6% (区域 $7 )。'], //液化 III专精
    [/^bonus of (.*)%. Removing this Mastery would reduce your bonus by (.*)%, bringing your total Challenge$/, '的加成为 $1% 。去掉这个专精以后加成将减少 $2% ， 总挑战'], //梅斯梅尔专精
    [/^bonus down to (.*)%.$/, '加成减少为 $1% 。'], //梅斯梅尔专精
    [/^bonus of (.*)%. Purchasing this Mastery would increase your bonus by (.*)%, bringing your total Challenge$/, '的加成为 $1% 。购买这个专精以后加成将增加 $2% ， 总挑战'], //梅斯梅尔专精
    [/^bonus up to (.*)%.$/, '加成增加为 $1% 。'], //梅斯梅尔专精
    [/^Reduce the Zone that Fluffy can start earning Experience at by 3. With (\d+) level(s*) in Classy, Fluffy will start earning Experience at Z(\d+).$/, '绒绒提前3个区域开始获得经验值。上等特权提升 $1 级后，绒绒将从区域 $3 开始获得经验值。'], //上等特权
	[/^Use your experiences in understanding the attention span of Trimps to increase the damage dealt by all soldiers based on how long it took to get an army together. Increases damage by 2% per level per second up to (\d+) seconds. Maximum of 10 levels.$/, '脆皮的注意力持续时间您已了如指掌，所以您可以利用它增加脆皮的攻击力。军队每需要1秒进行繁殖，每级预期特权就可以使脆皮增加2%攻击力。繁殖时间上限为 $1 秒。最高10级。'], //预期特权
    [/^Your Generator currently grants (.*) Max Trimps per tick at (.*) fuel \(the amount of fuel needed to tick\). Purchase this to increase the Generator's efficiency by 10% \(additive$/, '您的维度发生器目前每次消耗 $2 燃料(每次消耗的燃料数量)，并可以获得 $1 脆皮上限。升级此项可以维度发生器的工作效率增加10%(叠加'], //维度发生器等
    [/^Your Generator can currently store (.*) fuel. Purchase this to increase the fuel capacity by (.*). The more fuel you have in storage, the more housing you'll create per tick!$/, '您的维度发生器目前可以存储 $1 燃料，升级后可以多存储 $2 。存储的燃料越多，每次产生的住房也就越多！'], //维度发生器等
    [/^The Magma at Zone (\d+) contains 0.2 fuel per cell, and each Zone after that can drop 0.01 more. Your generator can currently only harvest a max of (.*) per cell, meaning some fuel after Z(.*) will be unharvestable. Purchase this upgrade to increase the amount you can harvest per cell by$/, '岩浆从区域 $1 开始，每个格子有0.2燃料，且之后每多一个区域，就多0.01燃料。您的维度发生器目前在每个格子最多可以获得 $2 燃料，这意味着从区域 $3 开始，部分燃料会被浪费掉。升级此项后可以将每个格子获取燃料的上限增加 '], //维度发生器等
    [/^Your current Overclocker effectiveness is (.*)%. Next level, your Overclocker effectiveness will be (.*)%.$/, '您的超频效果目前为 $1% 。下一级的超频效果为 $2% 。'], //维度发生器等
    [/^(.*) Trimp(s*) just ceased to be.$/, '$1个脆皮去世了。'], //死亡消息
    [/^(.*) Trimp(s*) just bit the dust.$/, '$1个脆皮战死沙场了。'], //死亡消息
    [/^(.*) Trimp(s*) just took a dirt nap.$/, '$1个脆皮入土为安了。'], //死亡消息
    [/^(.*) Trimp(s*) just expired.$/, '$1个脆皮逝世了。'], //死亡消息
    [/^(.*) Trimp(s*) just kicked the bucket.$/, '$1个脆皮放弃了生命。'], //死亡消息
    [/^(.*) Trimp(s*) just evaporated.$/, '$1个脆皮消失了。'], //死亡消息
    [/^(.*) Trimp(s*) just needed more armor.$/, '$1个脆皮护甲不足，没了。'], //死亡消息
    [/^(.*) Trimp(s*) just exploded.$/, '$1个脆皮炸了。'], //死亡消息
    [/^(.*) Trimp(s*) just melted.$/, '$1个脆皮化了。'], //死亡消息
    [/^(.*) Trimp(s*) just fell over.$/, '$1个脆皮摔死了。'], //死亡消息
    [/^(.*) Trimp(s*) just swam the river Styx.$/, '$1个脆皮渡过了冥河。'], //死亡消息
    [/^(.*) Trimp(s*) just turned into jerky.$/, '$1个脆皮变成了脆皮干。'], //死亡消息
    [/^(.*) Trimp(s*) just forgot to put armor on.$/, '$1个脆皮忘记戴护甲，凉了。'], //死亡消息
    [/^(.*) Trimp(s*) just croaked.$/, '$1个脆皮咽下了最后一口气。'], //死亡消息
    [/^(.*) Trimp(s*) just flatlined.$/, '$1个脆皮心电图成了直线。'], //死亡消息
    [/^(.*) Trimp(s*) just won't follow you to battle again.$/, '$1个脆皮无法继续与您并肩作战了。'], //死亡消息
    [/^(.*) Trimp(s*) just died. Lame.$/, '$1个脆皮挂了。弱爆了。'], //死亡消息
    [/^(.*) Trimp(s*) just lagged out.$/, '$1个脆皮卡死了。'], //死亡消息
    [/^(.*) Trimp(s*) just imp-loded.$/, '$1个脆皮皮爆了。'], //死亡消息
    [/^(.*)You slew a(n*) $/, '$1您击杀了一个'], //击杀消息
    [/^(.*)You killed a(n*) $/, '$1您杀死了一个'], //击杀消息
    [/^(.*)You destroyed a(n*) $/, '$1您毁灭了一个'], //击杀消息
    [/^(.*)You extinguished a(n*) $/, '$1您消灭了一个'], //击杀消息
    [/^(.*)You liquidated a(n*) $/, '$1您清算了一个'], //击杀消息
    [/^(.*)You vaporized a(n*) $/, '$1您蒸发了一个'], //击杀消息
    [/^(.*)You demolished a(n*) $/, '$1您摧毁了一个'], //击杀消息
    [/^(.*)You ruined a(n*) $/, '$1您破坏了一个'], //击杀消息
    [/^(.*)You wrecked a(n*) $/, '$1您击毁了一个'], //击杀消息
    [/^(.*)You obliterated a(n*) $/, '$1您抹消了一个'], //击杀消息
    [/^(.*) Seconds$/, '$1 秒'], //脚本3图表
    [/^Portal (.*): Daily$/, '传送门 $1：日常'], //脚本3图表
    [/^Portal (.*): Discipline$/, '传送门 $1：纪律'], //脚本3图表
    [/^Portal (.*): Metal$/, '传送门 $1：金属'], //脚本3图表
    [/^Portal (.*): Size$/, '传送门 $1：尺寸'], //脚本3图表
    [/^Portal (.*): Balance$/, '传送门 $1：平衡'], //脚本3图表
    [/^Portal (.*): Scientist$/, '传送门 $1：科学家'], //脚本3图表
    [/^Portal (.*): Meditate$/, '传送门 $1：冥想'], //脚本3图表
    [/^Portal (.*): Decay$/, '传送门 $1：衰变'], //脚本3图表
    [/^Portal (.*): Trimp$/, '传送门 $1：脆皮'], //脚本3图表
    [/^Portal (.*): Trapper$/, '传送门 $1：捕手'], //脚本3图表
    [/^Portal (.*): Electricity$/, '传送门 $1：电流'], //脚本3图表
    [/^Portal (.*): Frugal$/, '传送门 $1：节俭'], //脚本3图表
    [/^Portal (.*): Life$/, '传送门 $1：生命'], //脚本3图表
    [/^Portal (.*): Mapocalypse$/, '传送门 $1：天启地图'], //脚本3图表
    [/^Portal (.*): Coordinate$/, '传送门 $1：协同'], //脚本3图表
    [/^Portal (.*): Crushed$/, '传送门 $1：粉碎'], //脚本3图表
    [/^Portal (.*): Slow$/, '传送门 $1：迟缓'], //脚本3图表
    [/^Portal (.*): Nom$/, '传送门 $1：美味'], //脚本3图表
    [/^Portal (.*): Mapology$/, '传送门 $1：地图学'], //脚本3图表
    [/^Portal (.*): Toxicity$/, '传送门 $1：毒性'], //脚本3图表
    [/^Portal (.*): Devastation$/, '传送门 $1：破坏'], //脚本3图表
    [/^Portal (.*): Watch$/, '传送门 $1：守望'], //脚本3图表
    [/^Portal (.*): Lead$/, '传送门 $1：领导'], //脚本3图表
    [/^Portal (.*): Corrupted$/, '传送门 $1：腐化'], //脚本3图表
    [/^Portal (.*): Domination$/, '传送门 $1：统治'], //脚本3图表
    [/^Portal (.*): Obliterated$/, '传送门 $1：抹杀'], //脚本3图表
    [/^Portal (.*): Eradicated$/, '传送门 $1：灭绝'], //脚本3图表
    [/^Portal (.*): Unlucky$/, '传送门 $1：不幸'], //脚本3图表
    [/^Portal (.*): Downsize$/, '传送门 $1：精简'], //脚本3图表
    [/^Portal (.*): Transmute$/, '传送门 $1：变形'], //脚本3图表
    [/^Portal (.*): Unbalance$/, '传送门 $1：不平衡'], //脚本3图表
    [/^Portal (.*): Bublé$/, '传送门 $1：布累'], //脚本3图表
    [/^Portal (.*): Duel$/, '传送门 $1：决斗'], //脚本3图表
    [/^Portal (.*): Melt$/, '传送门 $1：熔化'], //脚本3图表
    [/^Portal (.*): Trappapalooza$/, '传送门 $1：捕手道达人'], //脚本3图表
    [/^Portal (.*): Quagmire$/, '传送门 $1：泥淖'], //脚本3图表
    [/^Portal (.*): Wither$/, '传送门 $1：凋零'], //脚本3图表
    [/^Portal (.*): Revenge$/, '传送门 $1：复仇'], //脚本3图表
    [/^Portal (.*): Quest$/, '传送门 $1：任务'], //脚本3图表
    [/^Portal (.*): Archaeology$/, '传送门 $1：考古学'], //脚本3图表
    [/^Portal (.*): Mayhem$/, '传送门 $1：暴乱'], //脚本3图表










    [/^\n							([\d\.]+) hours\n						$/, '$1 小时'],
    [/^(\d+) Barns, (\d+) Sheds, and (\d+) Forges.$/, '$1个谷仓，$2个窝棚和$3个锻造厂。'],
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, (.+) gems, and (.+) fragments$/, '当您不在时，您的脆皮产生了$1的食物，$2的木材，$3的金属，$4的宝石和$5的碎片'],
    [/^Welcome to ([\d\.]+)$/, '欢迎来到 $1'],
    [/^Welcome to Patch ([\d\.]+)!$/, '欢迎使用$1补丁！'],
    [/^([\d\.]+) Secs$/, '$1 秒'],
    [/^([\d\.]+)\/hr$/, '$1 \/小时'],
    [/^([\d\.]+) Frags$/, '$1 碎片'],
    [/^(.+) copies of Coordination$/, '$1 份协调'],
    [/^Z (.+) map$/, '区域 $1 地图'],
    [/^You have (.+) Fragments.$/, '您有$1碎片。'],
    [/^(.+) Mins? (.+) Secs?$/, '$1 分 $2 秒'],
    [/^(.+) Days? (.+) Hours?$/, '$1 天 $2 小时'],
    [/^(.+) Years? (.+) Days?$/, '$1 年 $2 天'],
    [/^It takes some patience, but you can teach these Trimps to do some research for you. Each Scientist records (.+) units of pure science each second.$/, '这需要一些耐心，但是您可以教这些Trimps为您做一些研究。 每位科学家每秒记录$1单位纯科学。'],
    [/^Train one of your Trimps in the ancient art of farming. Each Farmer harvests (.+) food per second.$/, '在古老的耕作艺术中训练您的脆皮之一。 每个农民每秒收获$1粮食。'],
    [/^Show a Trimp how to cut one of those weird trees down. Each Lumberjack hauls back (.+) logs per second.$/, '向脆皮展示如何砍掉其中一棵怪异的树木。 每个伐木工人每秒钟可拖回$1根原木。'],
    [/^Send your misbehaving Trimps to the mines for some therapeutic work. Each Miner can find and smelt (.+) bars of metal per second.$/, '将行为不端的脆皮送到地雷进行一些治疗工作。 每个矿工每秒可以发现和冶炼$1金属条。'],
    [/^Each trainer will increase the base amount your soldiers can block by (.+).$/, '每个训练师增加你的战士 $1 防御'],
    [/^Each explorer will find an average of (.+) fragments each second.$/, '每个探险家每秒收集 $1 碎片'],
    [/^Welcome back! You were offline for (.+) days and (.+) hours.$/, '欢迎回来!你离线$1天$2小时。'],
    [/^Welcome back! You were offline for (.+) minutes and (.+) seconds.$/, '欢迎回来!你离线$1分$2秒。'],
    [/^Welcome back! You were offline for (.+) minutes.$/, '欢迎回来!你离线$1分钟。'],
    [/^(.+) Min (.+) Sec$/, '$1 分 $2 秒'],
    [/^(.+) Level map$/, '$1 级地图'],
    [/^(.+) Secs \/ (.+) Secs$/, '$1 秒 \/ $2 秒'],
    [/^Collect  (.+) Gem$/, '收集 $1 宝石'],
    [/^([\d\.]+) Trimp$/, '$1 脆皮'],
    [/^([\d\.]+) Trimps$/, '$1 脆皮'],
    [/^(.+) \/ (.+) ticks \($/, '$1 \/ $2 \('],
    [/^(.+) seconds processed in (.+) seconds \((.+) speed$/, '$2秒内处理了$1秒（$3 速度'],
    [/^You have cleared enough land to support (.+) more Trimps!$/, '您已经清理了足够的土地来容纳$1个以上的脆皮！'],
    [/^([\s\d]+)\((\d+) Secs?$/, '$1 \($2 秒'],
    [/^([\s\d]+)\((\d+) Mins? (\d+) Secs?$/, '$1 \($2 分 $3 秒'],
    [/^\n							Buy (\d+) Hours \((\d+) bones\)\n						$/, '购买 $1 小时 \($2 骨头\)'],
    [/^Min (.+) Max$/, '最小 $1，最高'],
    [/^Respec (.+) bones$/, '恢复 $1 骨头'],
	[/^Check\sTraps(.+)$/, '检查陷阱$1'],
    [/^While you were away, your Trimps were able to produce (.+) wood.$/, '当你离开时，你的脆皮生产了$1种木材。'],
    [/^While you were away, your Trimps were able to produce (.+) food, (.+) wood, (.+) metal, (.+) gems, and (.+) fragments.$/, '当你离开时，你的脆皮生产了$1食物，$2木材，$3金属，$4宝石和$5碎片。'],
    [/^You just found (.+) bars of metal! Convenient!$/, '你发现了$1金属棒!方便！'],
    [/^You just found (.+) wood! That's pretty neat!$/, '你发现了$1木头!这非常棒!'],
    [/^That guy just left (.+) food on the ground! Sweet!$/, '那家伙刚刚在地上留下了$1的食物！ 甜蜜！'],
    [/^(\d+) workspace$/, '$1 工作空间'],
    [/^(\d+) Mins (\d+) Secs$/, '$1 分 $2 秒'],
    [/^(\d+) Min (\d+) Secs$/, '$1 分 $2 秒'],
    [/^(\d+) Hours (\d+) Mins$/, '$1 时 $2 分'],
    [/^(\d+) Hour (\d+) Mins$/, '$1 时 $2 分'],
    [/^(\d+) Hours (\d+) Min$/, '$1 时 $2 分'],
    [/^(\d+) Hour (\d+) Min$/, '$1 时 $2 分'],
    [/^Spirestones: (.+) \/$/, '尖塔石头: $1 \/'],
    [/^You see (.+) canisters of Helium left on the ground and pick them up. Useful!$/, '你看到$1的氦气罐留在地上并捡起来。 很有用！'],
    [/^(.+) Foremen$/, '$1 工头'],
    [/^(\d+) Bones$/, '$1 骨头'],
    [/^(\d*\s)Tokens$/, '$1符记'],
    [/^(\d+\%) Map Loot$/, '$1 地图资源获取'],
    [/^(\d+\%) Trimp Damage$/, '$1 脆皮伤害'],
    [/^(\d+\%) Helium$/, '$1 氦'],
    [/^(\d+\%) Radon$/, '$1 氡'],
    [/^- (.+) Seconds$/, '- $1 秒'],
    [/^(.+) workspaces$/, '$1 工作台'],
    [/^\+([\d\.]+)\% Damage$/, '\+$1\% 伤害'],
    [/^Zone (\d+), Cell$/, '区域 $1, 格子'],
    [/^Golden Battle (.+)$/, '金色战斗 $1'],
    [/^Golden Helium (.+)$/, '金色氦 $1'],
    [/^Golden Void (.+)$/, '金色虚空 $1'],
    [/^Fire Trap ([I,V,X,L,C,D,M]+)$/, '火焰陷阱 $1'],
    [/^Frost Trap ([I,V,X,L,C,D,M]+)$/, '冰霜陷阱 $1'],
    [/^Strength Tower ([I,V,X,L,C,D,M]+)$/, '力量塔 $1'],
    [/^Poison Trap ([I,V,X,L,C,D,M]+)$/, '剧毒陷阱 $1'],
    [/^Lightning Trap ([I,V,X,L,C,D,M]+)$/, '闪电陷阱 $1'],
    [/^Condenser Tower ([I,V,X,L,C,D,M]+)$/, '冷凝塔 $1'],
    [/^Knowledge Tower ([I,V,X,L,C,D,M]+)$/, '知识塔 $1'],
    [/^(.+)\/sec$/, '$1\/秒'],
	[/^This book will teach your soldiers how to utilize the buddy system. Fighting will now require (.+) more Trimps \(rounded up\), but attack and health will grow for each new Trimp.$/, '这本书将教你的士兵如何利用伙伴系统。 战斗现在需要$1脆皮（四舍五入），但每个新脆皮的攻击和生命都会增长。'],
	[/^Has room for (.+) more lovely Trimps. All Trimp housing has enough workspaces for only half of the Trimps that can live there.$/, '有更多的空间容纳$1个可爱的脆皮。所有的脆皮住房有足够的工作空间，只有一半的脆皮可以住在那里。'],
	[/^A better house for your Trimps! Each house supports up to (.+) more Trimps.$/, '给您的脆皮更好的宅院！ 每个宅院最多可支持$1个脆皮。'],
	[/^A pretty sick mansion for your Trimps to live in. Each Mansion supports (.+) more Trimps.$/, '一个棒极了的豪宅，让你的脆皮住在里面。 每个可以住$1脆皮'],
	[/^Add \((.+) Nu$/, '添加 ($1虚空物质'],
	[/^Replace \((.+) Nu$/, '替换 ($1虚空物质'],
	[/^You have spent (.+) Helium on this Perk$/, '你已经花费 $1 氦在这个附带特权上'],
	[/^You have been in this Zone for (\d+) mins$/, '你已经在该区域待了$1分钟'],
	[/^You found (.+) Dark Essence!$/, '你找到了$1黑暗精华'],
	[/^You found (.+) Tokens of Poison!$/, '你找到了$1毒符记'],
	[/^You found (.+) Tokens of Ice!$/, '你找到了$1冰符记'],
	[/^You found (.+) Tokens of Wind!$/, '你找到了$1风符记'],
	[/^Trimps have (.+) more attack on even numbered Zones$/, '脆皮在偶数区域增加$1攻击'],
	[/^Trimps have (.+) less attack on odd numbered Zones$/, '脆皮在奇数区域减少$1攻击'],
	[/^Equipment is (.+) cheaper.$/, '装备的价格下降$1'],
	[/^Your Trimps have -(.+) Crit Chance.$/, '脆皮的暴击概率减少$1'],
	[/^Your Trimps have (\d.+) Crit Chance.$/, '脆皮的暴击概率增加$1'],
	[/^Your Trimps breed (.+) slower$/, '减少$1的脆皮繁殖速度'],
	[/^Gain a stack after killing an enemy, reducing breed speed by (.+) \(compounding\). Stacks cap at (.+), and reset after clearing a Zone.$/, '每杀死一个敌人叠一层减益效果,减少$1 (叠乘)的繁殖速度。最高叠$2层,每打通一个区域效果重置。'],
	[/^Gain (.+) less Metal, Food, Wood, and Gems from all sources$/, '所有来源的金属，食物，木材和宝石收益减少$1'],
	[/^Enemies instantly deal (.+) of their attack damage when killed.$/, '当敌人被杀死时，会瞬间造成相当于其攻击伤害$1的伤害'],
	[/^Enemies have a 25% chance to crit for (.+) of normal damage.$/, '敌人有25%的机率产生重击，为普通伤害的$1'],
	[/^Enemies instantly deal (.+) of their attack damage when killed unless your block is as high as your maximum health.$/, '当敌人被杀死时，会瞬间造成相当于其攻击伤害$1的伤害，除非你的防御和超过生命值上限'],
	[/^Enemies have a (.+) chance to reflect an attack, dealing (.+) of damage taken back to your Trimps.$/, '敌人有$1的概率反弹一次攻击，将此次伤害的$2返还给你的脆皮。'],
	[/^Enemies stack a debuff with each attack, reducing Trimp attack by (.+) per stack. Stacks cap at 9 and reset on Trimp death.$/, '敌人的每次攻击叠加一层负面效果，每层效果减少脆皮$1的攻击。最高叠加9次，直到脆皮死亡后重置。'],
	[/^Enemies stack a debuff with each attack, damaging Trimps for (.+) of total health per turn per stack, resets on Trimp death.$/, '敌人的每次攻击叠加一个负面效果，每层效果在每回合对脆皮造成$1总血量的伤害，直到脆皮死亡后重置。'],
	[/^Enemies have a (.+) chance to dodge your attacks on even Zones.$/, '在偶数层，敌人有$1的概率闪躲你的攻击，'],
	[/^Enemies have a (.+) chance to dodge your attacks on odd Zones.$/, '在奇数层，敌人有$1的概率闪躲你的攻击，'],
	[/^Trimp max damage increased by (.+) \(additive\).$/, '脆皮最大伤害增加$1(附加的)'],
	[/^Gain (.+) more resources from gathering$/, '收集获得的资源增加$1'],
	[/^(.+) of Bad Guys in the first (\d+) rows of the World will be mutated into Mutimps.$/, '世界前$2行的敌人有$1概率突变为Mutimps'],
	[/^A fancy hotel for many Trimps to live in. Complete with room service and a mini bar. Supports (.+) Trimps.$/, '看上去不错的宾馆，成为很多脆皮的住所。提供客房服务和一个迷你酒吧完成。 可以住 $1 脆皮。'],
	[/^A huge resort for your Trimps to live in. Sucks for the ones still stuck in huts. Supports (.+) Trimps.$/, '对于你的脆皮来说，这是一个巨大的度假村。只能住在小屋里的脆皮简直弱爆了。 可以住 $1 脆皮。'],
	[/^A Gateway to another dimension, where your Trimps can sleep and work. Supports (.+) Trimps.$/, '通往另一个维度的维度裂隙，你的脆皮可以睡觉和工作. 可以住 $1 脆皮。'],
	[/^Use your crazy, helium-cooled, easy-to-aim wormhole generator to create easy-to-travel links to other colonizable planets where your Trimps can sleep and work. Each supports (.+) Trimps.$/, '使用你疯狂的，氦冷却，容易瞄准的虫洞发生器创建易于旅行的链接到其他可定居的行星，在那里你的脆皮可以睡觉和工作。 每个可以住 $1 脆皮. '],
	[/^Each collector allows you to harvest more of the power of your home star, allowing your Trimps to colonize a larger chunk of your solar system. Each supports (.+) Trimps.$/, '每个汲能设施都可以让你收获更多的母星之力，让你的脆皮能够在你的太阳系中占据更大的比例。 每个可以住 $1 脆皮.'],
	[/^Each Trap allows you to catch (.+) things.$/, '每个陷阱都能让你抓住 $1 东西.'],
	[/^A building where your Trimps can work out. Each Gym increases the amount of damage each trimp can block by (.+) and increases the base block of all Gyms by 15% \(compounding\).$/, '一个你可以锻炼脆皮的建筑。每个健身房都可以增加每个脆皮$1格挡的伤害量，并且提高所有健身房15%(复合)基础格挡'],
	[/^(\d+)% Map Bonus$/, '$1% 地图奖励'],
	[/^(\d+) remaining enemy?(ies)? in your current Zone are holding Dark Essence. Your current enemy at this Zone would be worth (.+) Essence if it were holding any.$/, '当前区域剩余 $1 敌人拥有黑暗精华。如果当前敌人拥有黑暗精华，它会掉落 $3'],
]);
