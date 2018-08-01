'use strict';

// O6N - Sigmascape 2.0 Normal
[{
  zoneRegex: /^(Sigmascape \(V2\.0\)|Sigmascape 2\.0)$/,
  timelineFile: 'o6n.txt',
  triggers: [
    {
      id: 'O6N Demonic Shear',
      regex: / 14:282A:Demon Chadarnook starts using Demonic Shear on (\y{Name})/,
      regexDe: / 14:282A:Gefallener Chadarnook starts using Dämonische Schere on (\y{Name})/,
      regexFr: / 14:282A:Démon Chadarnouk starts using Cisailles Démoniaques on (\y{Name})/,
      alertText: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'Tank Buster on YOU',
            de: 'Tankbuster auf DIR',
            fr: 'Tank Buster sur VOUS',
          };
        }
        if (data.role == 'healer') {
          return {
            en: 'Buster on ' + data.ShortName(matches[1]),
            de: 'Buster auf ' + data.ShortName(matches[1]),
            fr: 'Buster sur ' + data.ShortName(matches[1]),
          };
        }
      },
      tts: function(data, matches) {
        if (matches[1] == data.me) {
          return {
            en: 'buster',
            de: 'basta',
            fr: 'tankbuster',
          };
        }
      },
    },
    {
      id: 'O6N Meteors',
      regex: /1B:........:(\y{Name}):....:....:0001:0000:0000:0000:/,
      condition: function(data, matches) {
        return matches[1] == data.me;
      },
      infoText: {
        en: 'Drop AOEs Away',
        de: 'AoEs weglocken',
        fr: 'Posez les AoE au loin',
      },
      tts: {
        en: 'aoes',
        de: 'Flächen',
        fr: 'aoe',
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Demon Chadarnook': 'Gefallener Chadarnook',
        'Easterly': 'Ostwind',
        'Goddess Chadarnook': 'Heilige Chadarnook',
        'Haunt': 'Böser Schatten',
        'Portrayal of Fire': 'Feuergemälde',
        'Portrayal of Wind': 'Windgemälde',
        'Portrayal of Earth': 'Erdgemälde',
        'Portrayal of Water': 'Wassergemälde',
        'The Storm\'s Grip': 'Sturmgebiet',
        'I have claimed the girl in the picture!': 'Das Mädchen in diesem Bildnis gehört mir!',
      },
      'replaceText': {
        '--targetable--': '--anvisierbar--',
        '--untargetable--': '--nich anvisierbar--',
        'Engage!': 'Start!',
        'Enrage': 'Finalangriff',

        'Demonic Howl': 'Dämonisches Heulen',
        'Demonic Pain': 'Dämonischer Schmerz',
        'Demonic Shear': 'Dämonische Schere',
        'Demonic Spout': 'Dämonischer Überschwang',
        'Demonic Stone': 'Dämonischer Stein',
        'Demonic Storm': 'Dämonischer Sturm',
        'Demonic Typhoon': 'Dämonischer Taifun',
        'Demonic Wave': 'Dämonische Welle',
        'Divine Lure': 'Göttliche Verlockung',
        'Downpour': 'Flutschwall',
        'Dull Pain': 'Dumpfer Schmerz',
        'Earthquake': 'Erdbeben',
        'Easterlies': 'Ostwinde',
        'Engage!': 'Start!',
        'Featherlance': 'Federlanze',
        'Flash Fire': 'Blitzfeuer',
        'Flash Gale': 'Blitzwind',
        'Flash Torrent': 'Blitzregen',
        'Last Kiss': 'Todeskuss',
        'Lullaby': 'Wiegenlied',
        'Materialize': 'Materialisierung',
        'Poltergeist': 'Poltergeist',
        'Possession': 'Besessenheit',
        'Release': 'Befreiung',
        'Rock Hard': 'Felsspalter',
        'Song Of Bravery': 'Lied Der Tapferkeit',
        'The Price': 'Tödliche Versuchung',
      },
      '~effectNames': {
        'Apathetic': 'Apathie',
        'Black Paint': 'Schwarze Farbe',
        'Blue Paint': 'Blaue Farbe',
        'Fire Resistance Up': 'Feuerresistenz +',
        'Invisible': 'Unsichtbar',
        'Knockback Penalty': 'Rückstoß Unwirksam',
        'Last Kiss': 'Letzter Kuss',
        'Red Paint': 'Rote Farbe',
        'Seduced': 'Versuchung',
        'Slippery Prey': 'Unmarkierbar',
        'Yellow Paint': 'Gelbe Farbe',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Demon Chadarnook': 'Démon Chadarnouk',
        'Easterly': 'Rafale ultime',
        'Goddess Chadarnook': 'Déesse Chadarnouk',
        'Haunt': 'Ombre maléfique',
        'Portrayal of Fire': 'Peinture du feu',
        'Portrayal of Wind': 'Peinture du vent',
        'Portrayal of Earth': 'Peinture de la terre',
        'Portrayal of Water': 'Peinture de l\'eau',
        'The Storm\'s Grip': 'Emprise De La Tempête',
        'I have claimed the girl in the picture!': 'Héhéhé... La fille du tableau m\'appartient',
      },
      'replaceText': {
        'Engage!': 'À l\'attaque',
        '--Reset--': '--Réinitialisation--',
        '--sync--': '--Synchronisation--',
        '--targetable--': '--Ciblable--',
        '--untargetable--': '--Impossible à cibler--',
        'Enrage': 'Enrage',

        'Demonic Howl': 'Hurlement Démoniaque',
        'Demonic Pain': 'Douleur Démoniaque',
        'Demonic Shear': 'Cisailles Démoniaques',
        'Demonic Spout': 'Jaillissement Démoniaque',
        'Demonic Stone': 'Pierre Démoniaque',
        'Demonic Storm': 'Tempête Démoniaque',
        'Demonic Typhoon': 'Typhon Démoniaque',
        'Demonic Wave': 'Vague Démoniaque',
        'Divine Lure': 'Séduction Divine',
        'Downpour': 'Déluge',
        'Dull Pain': 'Douleur Sourde',
        'Earthquake': 'Grand Séisme',
        'Engage!': 'À l\'attaque',
        'Featherlance': 'Lance De Plume',
        'Flash Fire': 'Flammes Subites',
        'Flash Gale': 'Vent Subit',
        'Flash Torrent': 'Pluie Subite',
        'Last Kiss': 'Baiser Fatal',
        'Lullaby': 'Berceuse',
        'Materialize': 'Matérialisation',
        'Poltergeist': 'Esprit Frappeur',
        'Possession': 'Possession',
        'Release': 'Libération',
        'Rock Hard': 'Brise-roc',
        'Song Of Bravery': 'Chant Du Courage',
        'The Price': 'Tentation Mortelle',
      },
      '~effectNames': {
        'Apathetic': 'Apathie',
        'Black Paint': 'Peinture Noire',
        'Blue Paint': 'Peinture Bleue',
        'Fire Resistance Up': 'Résistance Au Feu Accrue',
        'Invisible': 'Invisible',
        'Knockback Penalty': 'Résistance Aux Projections/attractions',
        'Last Kiss': 'Baiser Fatal',
        'Red Paint': 'Peinture Rouge',
        'Seduced': 'Séduction',
        'Slippery Prey': 'Marquage Impossible',
        'Yellow Paint': 'Peinture Jaune',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Demon Chadarnook': 'チャダルヌーク・デーモン',
        'Easterly': '極風',
        'Goddess Chadarnook': 'チャダルヌーク・ゴッデス',
        'Haunt': '悪霊の影',
        'Portrayal Of Fire': '火の絵画',
        'Portrayal Of Wind': '風の絵画',
        'Portrayal of Earth': '土の絵画',
        'Portrayal of Water': '水の絵画',
        'The Storm\'s Grip': '暴風域',
        'I have claimed the girl in the picture!': 'グフフフ……この絵の女は',
      },
      'replaceText': {
        'Demonic Howl': 'デモニックハウル',
        'Demonic Pain': 'デモニックペイン',
        'Demonic Shear': 'デモニックシアー',
        'Demonic Spout': 'デモニックスパウト',
        'Demonic Stone': 'デモニックストーン',
        'Demonic Storm': 'デモニックストーム',
        'Demonic Typhoon': 'デモニックタイフーン',
        'Demonic Wave': 'デモニックウェーブ',
        'Divine Lure': '女神の誘惑',
        'Downpour': '水責め',
        'Dull Pain': 'ダルペイン',
        'Earthquake': '大地震',
        'Easterlies': '極風',
        'Engage!': '戦闘開始！',
        'Featherlance': 'フェザーランス',
        'Flash Fire': 'フラッシュファイア',
        'Flash Gale': 'フラッシュウィンド',
        'Flash Torrent': 'フラッシュレイン',
        'Last Kiss': '死の口づけ',
        'Lullaby': '子守歌',
        'Materialize': '実体化',
        'Poltergeist': 'ポルターガイスト',
        'Possession': '絵画憑依',
        'Release': '憑依解除',
        'Rock Hard': 'ロッククラッシャー',
        'Song Of Bravery': '勇気の歌',
        'The Price': '死の誘い',
      },
      '~effectNames': {
        'Apathetic': '無気力',
        'Black Paint': '黒色の絵の具',
        'Blue Paint': '水色の絵の具',
        'Fire Resistance Up': '火属性耐性向上',
        'Invisible': 'インビジブル',
        'Knockback Penalty': 'ノックバック無効',
        'Last Kiss': '死の口づけ',
        'Red Paint': '赤色の絵の具',
        'Seduced': '誘惑',
        'Slippery Prey': 'マーキング対象外',
        'Yellow Paint': '黄色の絵の具',
      },
    },
  ],
}];
