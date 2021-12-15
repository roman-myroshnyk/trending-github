import { SpokenLanguagesCodes as Codes } from "../api/interfaces.d";

export interface ISpokenLanguage {
  code?: Codes;
  language: string;
}

export const defaultSpokenLanguage: ISpokenLanguage = {
  code: undefined,
  language: "Any",
};

export const spokenLanguages: ISpokenLanguage[] = [
  {
    code: Codes.ab,
    language: "Abkhazian",
  },
  {
    code: Codes.aa,
    language: "Afar",
  },
  {
    code: Codes.af,
    language: "Afrikaans",
  },
  {
    code: Codes.ak,
    language: "Akan",
  },
  {
    code: Codes.sq,
    language: "Albanian",
  },
  {
    code: Codes.am,
    language: "Amharic",
  },
  {
    code: Codes.ar,
    language: "Arabic",
  },
  {
    code: Codes.an,
    language: "Aragonese",
  },
  {
    code: Codes.hy,
    language: "Armenian",
  },
  {
    code: Codes.as,
    language: "Assamese",
  },
  {
    code: Codes.av,
    language: "Avaric",
  },
  {
    code: Codes.ae,
    language: "Avestan",
  },
  {
    code: Codes.ay,
    language: "Aymara",
  },
  {
    code: Codes.az,
    language: "Azerbaijani",
  },
  {
    code: Codes.bm,
    language: "Bambara",
  },
  {
    code: Codes.ba,
    language: "Bashkir",
  },
  {
    code: Codes.eu,
    language: "Basque",
  },
  {
    code: Codes.be,
    language: "Belarusian",
  },
  {
    code: Codes.bn,
    language: "Bengali",
  },
  {
    code: Codes.bh,
    language: "Bihari languages",
  },
  {
    code: Codes.bi,
    language: "Bislama",
  },
  {
    code: Codes.bs,
    language: "Bosnian",
  },
  {
    code: Codes.br,
    language: "Breton",
  },
  {
    code: Codes.bg,
    language: "Bulgarian",
  },
  {
    code: Codes.my,
    language: "Burmese",
  },
  {
    code: Codes.ca,
    language: "Catalan, Valencian",
  },
  {
    code: Codes.ch,
    language: "Chamorro",
  },
  {
    code: Codes.ce,
    language: "Chechen",
  },
  {
    code: Codes.ny,
    language: "Chichewa, Chewa, Nyanja",
  },
  {
    code: Codes.zh,
    language: "Chinese",
  },
  {
    code: Codes.cv,
    language: "Chuvash",
  },
  {
    code: Codes.kw,
    language: "Cornish",
  },
  {
    code: Codes.co,
    language: "Corsican",
  },
  {
    code: Codes.cr,
    language: "Cree",
  },
  {
    code: Codes.hr,
    language: "Croatian",
  },
  {
    code: Codes.cs,
    language: "Czech",
  },
  {
    code: Codes.da,
    language: "Danish",
  },
  {
    code: Codes.dv,
    language: "Divehi, Dhivehi, Maldivian",
  },
  {
    code: Codes.nl,
    language: "Dutch, Flemish",
  },
  {
    code: Codes.dz,
    language: "Dzongkha",
  },
  {
    code: Codes.en,
    language: "English",
  },
  {
    code: Codes.eo,
    language: "Esperanto",
  },
  {
    code: Codes.et,
    language: "Estonian",
  },
  {
    code: Codes.ee,
    language: "Ewe",
  },
  {
    code: Codes.fo,
    language: "Faroese",
  },
  {
    code: Codes.fj,
    language: "Fijian",
  },
  {
    code: Codes.fi,
    language: "Finnish",
  },
  {
    code: Codes.fr,
    language: "French",
  },
  {
    code: Codes.ff,
    language: "Fulah",
  },
  {
    code: Codes.gl,
    language: "Galician",
  },
  {
    code: Codes.ka,
    language: "Georgian",
  },
  {
    code: Codes.de,
    language: "German",
  },
  {
    code: Codes.el,
    language: "Greek, Modern",
  },
  {
    code: Codes.gn,
    language: "Guarani",
  },
  {
    code: Codes.gu,
    language: "Gujarati",
  },
  {
    code: Codes.ht,
    language: "Haitian, Haitian Creole",
  },
  {
    code: Codes.ha,
    language: "Hausa",
  },
  {
    code: Codes.he,
    language: "Hebrew",
  },
  {
    code: Codes.hz,
    language: "Herero",
  },
  {
    code: Codes.hi,
    language: "Hindi",
  },
  {
    code: Codes.ho,
    language: "Hiri Motu",
  },
  {
    code: Codes.hu,
    language: "Hungarian",
  },
  {
    code: Codes.ia,
    language: "Interlingua (International Auxil...",
  },
  {
    code: Codes.id,
    language: "Indonesian",
  },
  {
    code: Codes.ie,
    language: "Interlingue, Occidental",
  },
  {
    code: Codes.ga,
    language: "Irish",
  },
  {
    code: Codes.ig,
    language: "Igbo",
  },
  {
    code: Codes.ik,
    language: "Inupiaq",
  },
  {
    code: Codes.io,
    language: "Ido",
  },
  {
    code: Codes.is,
    language: "Icelandic",
  },
  {
    code: Codes.it,
    language: "Italian",
  },
  {
    code: Codes.iu,
    language: "Inuktitut",
  },
  {
    code: Codes.ja,
    language: "Japanese",
  },
  {
    code: Codes.jv,
    language: "Javanese",
  },
  {
    code: Codes.kl,
    language: "Kalaallisut, Greenlandic",
  },
  {
    code: Codes.kn,
    language: "Kannada",
  },
  {
    code: Codes.kr,
    language: "Kanuri",
  },
  {
    code: Codes.ks,
    language: "Kashmiri",
  },
  {
    code: Codes.kk,
    language: "Kazakh",
  },
  {
    code: Codes.km,
    language: "Central Khmer",
  },
  {
    code: Codes.ki,
    language: "Kikuyu, Gikuyu",
  },
  {
    code: Codes.rw,
    language: "Kinyarwanda",
  },
  {
    code: Codes.ky,
    language: "Kirghiz, Kyrgyz",
  },
  {
    code: Codes.kv,
    language: "Komi",
  },
  {
    code: Codes.kg,
    language: "Kongo",
  },
  {
    code: Codes.ko,
    language: "Korean",
  },
  {
    code: Codes.ku,
    language: "Kurdish",
  },
  {
    code: Codes.kj,
    language: "Kuanyama, Kwanyama",
  },
  {
    code: Codes.la,
    language: "Latin",
  },
  {
    code: Codes.lb,
    language: "Luxembourgish, Letzeburgesch",
  },
  {
    code: Codes.lg,
    language: "Ganda",
  },
  {
    code: Codes.li,
    language: "Limburgan, Limburger, Limburgish",
  },
  {
    code: Codes.ln,
    language: "Lingala",
  },
  {
    code: Codes.lo,
    language: "Lao",
  },
  {
    code: Codes.lt,
    language: "Lithuanian",
  },
  {
    code: Codes.lu,
    language: "Luba-Katanga",
  },
  {
    code: Codes.lv,
    language: "Latvian",
  },
  {
    code: Codes.gv,
    language: "Manx",
  },
  {
    code: Codes.mk,
    language: "Macedonian",
  },
  {
    code: Codes.mg,
    language: "Malagasy",
  },
  {
    code: Codes.ms,
    language: "Malay",
  },
  {
    code: Codes.ml,
    language: "Malayalam",
  },
  {
    code: Codes.mt,
    language: "Maltese",
  },
  {
    code: Codes.mi,
    language: "Maori",
  },
  {
    code: Codes.mr,
    language: "Marathi",
  },
  {
    code: Codes.mh,
    language: "Marshallese",
  },
  {
    code: Codes.mn,
    language: "Mongolian",
  },
  {
    code: Codes.na,
    language: "Nauru",
  },
  {
    code: Codes.nv,
    language: "Navajo, Navaho",
  },
  {
    code: Codes.nd,
    language: "North Ndebele",
  },
  {
    code: Codes.ne,
    language: "Nepali",
  },
  {
    code: Codes.ng,
    language: "Ndonga",
  },
  {
    code: Codes.nb,
    language: "Norwegian Bokmål",
  },
  {
    code: Codes.nn,
    language: "Norwegian Nynorsk",
  },
  {
    code: Codes.no,
    language: "Norwegian",
  },
  {
    code: Codes.ii,
    language: "Sichuan Yi, Nuosu",
  },
  {
    code: Codes.nr,
    language: "South Ndebele",
  },
  {
    code: Codes.oc,
    language: "Occitan",
  },
  {
    code: Codes.oj,
    language: "Ojibwa",
  },
  {
    code: Codes.cu,
    language: "Church Slavic, Old Slavonic, Chu...",
  },
  {
    code: Codes.om,
    language: "Oromo",
  },
  {
    code: Codes.or,
    language: "Oriya",
  },
  {
    code: Codes.os,
    language: "Ossetian, Ossetic",
  },
  {
    code: Codes.pa,
    language: "Punjabi, Panjabi",
  },
  {
    code: Codes.pi,
    language: "Pali",
  },
  {
    code: Codes.fa,
    language: "Persian",
  },
  {
    code: Codes.pl,
    language: "Polish",
  },
  {
    code: Codes.ps,
    language: "Pashto, Pushto",
  },
  {
    code: Codes.pt,
    language: "Portuguese",
  },
  {
    code: Codes.qu,
    language: "Quechua",
  },
  {
    code: Codes.rm,
    language: "Romansh",
  },
  {
    code: Codes.rn,
    language: "Rundi",
  },
  {
    code: Codes.ro,
    language: "Romanian, Moldavian, Moldovan",
  },
  {
    code: Codes.ru,
    language: "Russian",
  },
  {
    code: Codes.sa,
    language: "Sanskrit",
  },
  {
    code: Codes.sc,
    language: "Sardinian",
  },
  {
    code: Codes.sd,
    language: "Sindhi",
  },
  {
    code: Codes.se,
    language: "Northern Sami",
  },
  {
    code: Codes.sm,
    language: "Samoan",
  },
  {
    code: Codes.sg,
    language: "Sango",
  },
  {
    code: Codes.sr,
    language: "Serbian",
  },
  {
    code: Codes.gd,
    language: "Gaelic, Scottish Gaelic",
  },
  {
    code: Codes.sn,
    language: "Shona",
  },
  {
    code: Codes.si,
    language: "Sinhala, Sinhalese",
  },
  {
    code: Codes.sk,
    language: "Slovak",
  },
  {
    code: Codes.sl,
    language: "Slovenian",
  },
  {
    code: Codes.so,
    language: "Somali",
  },
  {
    code: Codes.st,
    language: "Southern Sotho",
  },
  {
    code: Codes.es,
    language: "Spanish, Castilian",
  },
  {
    code: Codes.su,
    language: "Sundanese",
  },
  {
    code: Codes.sw,
    language: "Swahili",
  },
  {
    code: Codes.ss,
    language: "Swati",
  },
  {
    code: Codes.sv,
    language: "Swedish",
  },
  {
    code: Codes.ta,
    language: "Tamil",
  },
  {
    code: Codes.te,
    language: "Telugu",
  },
  {
    code: Codes.tg,
    language: "Tajik",
  },
  {
    code: Codes.th,
    language: "Thai",
  },
  {
    code: Codes.ti,
    language: "Tigrinya",
  },
  {
    code: Codes.bo,
    language: "Tibetan",
  },
  {
    code: Codes.tk,
    language: "Turkmen",
  },
  {
    code: Codes.tl,
    language: "Tagalog",
  },
  {
    code: Codes.tn,
    language: "Tswana",
  },
  {
    code: Codes.to,
    language: "Tonga (Tonga Islands)",
  },
  {
    code: Codes.tr,
    language: "Turkish",
  },
  {
    code: Codes.ts,
    language: "Tsonga",
  },
  {
    code: Codes.tt,
    language: "Tatar",
  },
  {
    code: Codes.tw,
    language: "Twi",
  },
  {
    code: Codes.ty,
    language: "Tahitian",
  },
  {
    code: Codes.ug,
    language: "Uighur, Uyghur",
  },
  {
    code: Codes.uk,
    language: "Ukrainian",
  },
  {
    code: Codes.ur,
    language: "Urdu",
  },
  {
    code: Codes.uz,
    language: "Uzbek",
  },
  {
    code: Codes.ve,
    language: "Venda",
  },
  {
    code: Codes.vi,
    language: "Vietnamese",
  },
  {
    code: Codes.vo,
    language: "Volapük",
  },
  {
    code: Codes.wa,
    language: "Walloon",
  },
  {
    code: Codes.cy,
    language: "Welsh",
  },
  {
    code: Codes.wo,
    language: "Wolof",
  },
  {
    code: Codes.fy,
    language: "Western Frisian",
  },
  {
    code: Codes.xh,
    language: "Xhosa",
  },
  {
    code: Codes.yi,
    language: "Yiddish",
  },
  {
    code: Codes.yo,
    language: "Yoruba",
  },
  {
    code: Codes.za,
    language: "Zhuang, Chuang",
  },
  {
    code: Codes.zu,
    language: "Zulu",
  },
];
