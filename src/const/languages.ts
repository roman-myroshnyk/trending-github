import { ProgrammingLanguages as langCode } from "../api/interfaces.d";

export interface ILanguage {
  code?: langCode;
  language: string;
}

export const defaultLanguage: ILanguage = {
  code: undefined,
  language: "Any",
};

export const languages: ILanguage[] = [
  {
    code: langCode.cplusplus,
    language: "C++",
  },
  {
    code: langCode.html,
    language: "HTML",
  },
  {
    code: langCode.java,
    language: "Java",
  },
  {
    code: langCode.javascript,
    language: "JavaScript",
  },
  {
    code: langCode.php,
    language: "PHP",
  },
  {
    code: langCode.python,
    language: "Python",
  },
  {
    code: langCode.ruby,
    language: "Ruby",
  },
  {
    code: langCode.unknown,
    language: "Unknown languages",
  },
  {
    code: langCode.oneCEnterprise,
    language: "1C Enterprise",
  },
  {
    code: langCode.fourD,
    language: "4D",
  },
  {
    code: langCode.abap,
    language: "ABAP",
  },
  {
    code: langCode.abapCds,
    language: "ABAP CDS",
  },
  {
    code: langCode.abnf,
    language: "ABNF",
  },
  {
    code: langCode.actionscript,
    language: "ActionScript",
  },
  {
    code: langCode.ada,
    language: "Ada",
  },
  {
    code: langCode.adobeFontMetrics,
    language: "Adobe Font Metrics",
  },
  {
    code: langCode.agda,
    language: "Agda",
  },
  {
    code: langCode.agsScript,
    language: "AGS Script",
  },
  {
    code: langCode.al,
    language: "AL",
  },
  {
    code: langCode.alloy,
    language: "Alloy",
  },
  {
    code: langCode.alpineAbuild,
    language: "Alpine Abuild",
  },
  {
    code: langCode.altiumDesigner,
    language: "Altium Designer",
  },
  {
    code: langCode.ampl,
    language: "AMPL",
  },
  {
    code: langCode.angelscript,
    language: "AngelScript",
  },
  {
    code: langCode.antBuildSystem,
    language: "Ant Build System",
  },
  {
    code: langCode.antlr,
    language: "ANTLR",
  },
  {
    code: langCode.apacheconf,
    language: "ApacheConf",
  },
  {
    code: langCode.apex,
    language: "Apex",
  },
  {
    code: langCode.apiBlueprint,
    language: "API Blueprint",
  },
  {
    code: langCode.apl,
    language: "APL",
  },
  {
    code: langCode.apolloGuidanceComputer,
    language: "Apollo Guidance Computer",
  },
  {
    code: langCode.applescript,
    language: "AppleScript",
  },
  {
    code: langCode.arc,
    language: "Arc",
  },
  {
    code: langCode.asciidoc,
    language: "AsciiDoc",
  },
  {
    code: langCode.asl,
    language: "ASL",
  },
  {
    code: langCode.asn1,
    language: "ASN.1",
  },
  {
    code: langCode.aspNet,
    language: "ASP.NET",
  },
  {
    code: langCode.aspectj,
    language: "AspectJ",
  },
  {
    code: langCode.assembly,
    language: "Assembly",
  },
  {
    code: langCode.asymptote,
    language: "Asymptote",
  },
  {
    code: langCode.ats,
    language: "ATS",
  },
  {
    code: langCode.augeas,
    language: "Augeas",
  },
  {
    code: langCode.autohotkey,
    language: "AutoHotkey",
  },
  {
    code: langCode.autoit,
    language: "AutoIt",
  },
  {
    code: langCode.avroIdl,
    language: "Avro IDL",
  },
  {
    code: langCode.awk,
    language: "Awk",
  },
  {
    code: langCode.ballerina,
    language: "Ballerina",
  },
  {
    code: langCode.batchfile,
    language: "Batchfile",
  },
  {
    code: langCode.beef,
    language: "Beef",
  },
  {
    code: langCode.befunge,
    language: "Befunge",
  },
  {
    code: langCode.bibtex,
    language: "BibTeX",
  },
  {
    code: langCode.bison,
    language: "Bison",
  },
  {
    code: langCode.bitbake,
    language: "BitBake",
  },
  {
    code: langCode.blade,
    language: "Blade",
  },
  {
    code: langCode.blitzbasic,
    language: "BlitzBasic",
  },
  {
    code: langCode.blitzmax,
    language: "BlitzMax",
  },
  {
    code: langCode.bluespec,
    language: "Bluespec",
  },
  {
    code: langCode.boo,
    language: "Boo",
  },
  {
    code: langCode.boogie,
    language: "Boogie",
  },
  {
    code: langCode.brightscript,
    language: "Brightscript",
  },
  {
    code: langCode.zeek,
    language: "Zeek",
  },
  {
    code: langCode.c,
    language: "C",
  },
  {
    code: langCode.cHarp,
    language: "C#",
  },
  {
    code: langCode.cObjdump,
    language: "C-ObjDump",
  },
  {
    code: langCode.c2hsHaskell,
    language: "C2hs Haskell",
  },
  {
    code: langCode.cabalConfig,
    language: "Cabal Config",
  },
  {
    code: langCode.capnProto,
    language: "Cap'n Proto",
  },
  {
    code: langCode.cartocss,
    language: "CartoCSS",
  },
  {
    code: langCode.ceylon,
    language: "Ceylon",
  },
  {
    code: langCode.chapel,
    language: "Chapel",
  },
  {
    code: langCode.charity,
    language: "Charity",
  },
  {
    code: langCode.chuck,
    language: "ChucK",
  },
  {
    code: langCode.cirru,
    language: "Cirru",
  },
  {
    code: langCode.clarion,
    language: "Clarion",
  },
  {
    code: langCode.classicAsp,
    language: "Classic ASP",
  },
  {
    code: langCode.clean,
    language: "Clean",
  },
  {
    code: langCode.click,
    language: "Click",
  },
  {
    code: langCode.clips,
    language: "CLIPS",
  },
  {
    code: langCode.clojure,
    language: "Clojure",
  },
  {
    code: langCode.closureTemplates,
    language: "Closure Templates",
  },
  {
    code: langCode.cloudFirestoreSecurityRules,
    language: "Cloud Firestore Security Rules",
  },
  {
    code: langCode.cmake,
    language: "CMake",
  },
  {
    code: langCode.cobol,
    language: "COBOL",
  },
  {
    code: langCode.codeql,
    language: "CodeQL",
  },
  {
    code: langCode.coffeescript,
    language: "CoffeeScript",
  },
  {
    code: langCode.coldfusion,
    language: "ColdFusion",
  },
  {
    code: langCode.coldfusionCfc,
    language: "ColdFusion CFC",
  },
  {
    code: langCode.collada,
    language: "COLLADA",
  },
  {
    code: langCode.commonLisp,
    language: "Common Lisp",
  },
  {
    code: langCode.commonWorkflowLanguage,
    language: "Common Workflow Language",
  },
  {
    code: langCode.componentPascal,
    language: "Component Pascal",
  },
  {
    code: langCode.conllU,
    language: "CoNLL-U",
  },
  {
    code: langCode.cool,
    language: "Cool",
  },
  {
    code: langCode.coq,
    language: "Coq",
  },
  {
    code: langCode.cppObjdump,
    language: "Cpp-ObjDump",
  },
  {
    code: langCode.creole,
    language: "Creole",
  },
  {
    code: langCode.crystal,
    language: "Crystal",
  },
  {
    code: langCode.cson,
    language: "CSON",
  },
  {
    code: langCode.csoundDocument,
    language: "Csound Document",
  },
  {
    code: langCode.csoundScore,
    language: "Csound Score",
  },
  {
    code: langCode.css,
    language: "CSS",
  },
  {
    code: langCode.csv,
    language: "CSV",
  },
  {
    code: langCode.cuda,
    language: "Cuda",
  },
  {
    code: langCode.curlConfig,
    language: "cURL Config",
  },
  {
    code: langCode.cweb,
    language: "CWeb",
  },
  {
    code: langCode.cycript,
    language: "Cycript",
  },
  {
    code: langCode.cython,
    language: "Cython",
  },
  {
    code: langCode.d,
    language: "D",
  },
  {
    code: langCode.dObjdump,
    language: "D-ObjDump",
  },
  {
    code: langCode.dafny,
    language: "Dafny",
  },
  {
    code: langCode.darcsPatch,
    language: "Darcs Patch",
  },
  {
    code: langCode.dart,
    language: "Dart",
  },
  {
    code: langCode.dataweave,
    language: "DataWeave",
  },
  {
    code: langCode.desktop,
    language: "desktop",
  },
  {
    code: langCode.dhall,
    language: "Dhall",
  },
  {
    code: langCode.diff,
    language: "Diff",
  },
  {
    code: langCode.digitalCommandLanguage,
    language: "DIGITAL Command Language",
  },
  {
    code: langCode.dircolors,
    language: "dircolors",
  },
  {
    code: langCode.directx3dFile,
    language: "DirectX 3D File",
  },
  {
    code: langCode.dm,
    language: "DM",
  },
  {
    code: langCode.dnsZone,
    language: "DNS Zone",
  },
  {
    code: langCode.dockerfile,
    language: "Dockerfile",
  },
  {
    code: langCode.dogescript,
    language: "Dogescript",
  },
  {
    code: langCode.dtrace,
    language: "DTrace",
  },
  {
    code: langCode.dylan,
    language: "Dylan",
  },
  {
    code: langCode.e,
    language: "E",
  },
  {
    code: langCode.eagle,
    language: "Eagle",
  },
  {
    code: langCode.easybuild,
    language: "Easybuild",
  },
  {
    code: langCode.ebnf,
    language: "EBNF",
  },
  {
    code: langCode.ec,
    language: "eC",
  },
  {
    code: langCode.ecereProjects,
    language: "Ecere Projects",
  },
  {
    code: langCode.ecl,
    language: "ECL",
  },
  {
    code: langCode.eclipse,
    language: "ECLiPSe",
  },
  {
    code: langCode.editorconfig,
    language: "EditorConfig",
  },
  {
    code: langCode.edjeDataCollection,
    language: "Edje Data Collection",
  },
  {
    code: langCode.edn,
    language: "edn",
  },
  {
    code: langCode.eiffel,
    language: "Eiffel",
  },
  {
    code: langCode.ejs,
    language: "EJS",
  },
  {
    code: langCode.elixir,
    language: "Elixir",
  },
  {
    code: langCode.elm,
    language: "Elm",
  },
  {
    code: langCode.emacsLisp,
    language: "Emacs Lisp",
  },
  {
    code: langCode.emberscript,
    language: "EmberScript",
  },
  {
    code: langCode.eq,
    language: "EQ",
  },
  {
    code: langCode.erlang,
    language: "Erlang",
  },
  {
    code: langCode.fSharp,
    language: "F#",
  },
  {
    code: langCode.fStar,
    language: "F*",
  },
  {
    code: langCode.factor,
    language: "Factor",
  },
  {
    code: langCode.fancy,
    language: "Fancy",
  },
  {
    code: langCode.fantom,
    language: "Fantom",
  },
  {
    code: langCode.faust,
    language: "Faust",
  },
  {
    code: langCode.figletFont,
    language: "FIGlet Font",
  },
  {
    code: langCode.filebenchWml,
    language: "Filebench WML",
  },
  {
    code: langCode.filterscript,
    language: "Filterscript",
  },
  {
    code: langCode.fish,
    language: "fish",
  },
  {
    code: langCode.flux,
    language: "FLUX",
  },
  {
    code: langCode.formatted,
    language: "Formatted",
  },
  {
    code: langCode.forth,
    language: "Forth",
  },
  {
    code: langCode.fortran,
    language: "Fortran",
  },
  {
    code: langCode.fortranFreeForm,
    language: "Fortran Free Form",
  },
  {
    code: langCode.freemarker,
    language: "FreeMarker",
  },
  {
    code: langCode.frege,
    language: "Frege",
  },
  {
    code: langCode.futhark,
    language: "Futhark",
  },
  {
    code: langCode.gCode,
    language: "G-code",
  },
  {
    code: langCode.gameMakerLanguage,
    language: "Game Maker Language",
  },
  {
    code: langCode.gaml,
    language: "GAML",
  },
  {
    code: langCode.gams,
    language: "GAMS",
  },
  {
    code: langCode.gap,
    language: "GAP",
  },
  {
    code: langCode.gccMachineDescription,
    language: "GCC Machine Description",
  },
  {
    code: langCode.gdb,
    language: "GDB",
  },
  {
    code: langCode.gdscript,
    language: "GDScript",
  },
  {
    code: langCode.gedcom,
    language: "GEDCOM",
  },
  {
    code: langCode.genie,
    language: "Genie",
  },
  {
    code: langCode.genshi,
    language: "Genshi",
  },
  {
    code: langCode.gentooEbuild,
    language: "Gentoo Ebuild",
  },
  {
    code: langCode.gentooEclass,
    language: "Gentoo Eclass",
  },
  {
    code: langCode.gerberImage,
    language: "Gerber Image",
  },
  {
    code: langCode.gettextCatalog,
    language: "Gettext Catalog",
  },
  {
    code: langCode.gherkin,
    language: "Gherkin",
  },
  {
    code: langCode.gitAttributes,
    language: "Git Attributes",
  },
  {
    code: langCode.gitConfig,
    language: "Git Config",
  },
  {
    code: langCode.glsl,
    language: "GLSL",
  },
  {
    code: langCode.glyph,
    language: "Glyph",
  },
  {
    code: langCode.glyphBitmapDistributionFormat,
    language: "Glyph Bitmap Distribution Format",
  },
  {
    code: langCode.gn,
    language: "GN",
  },
  {
    code: langCode.gnuplot,
    language: "Gnuplot",
  },
  {
    code: langCode.go,
    language: "Go",
  },
  {
    code: langCode.golo,
    language: "Golo",
  },
  {
    code: langCode.gosu,
    language: "Gosu",
  },
  {
    code: langCode.grace,
    language: "Grace",
  },
  {
    code: langCode.gradle,
    language: "Gradle",
  },
  {
    code: langCode.grammaticalFramework,
    language: "Grammatical Framework",
  },
  {
    code: langCode.graphModelingLanguage,
    language: "Graph Modeling Language",
  },
  {
    code: langCode.graphql,
    language: "GraphQL",
  },
  {
    code: langCode.graphvizDot,
    language: "Graphviz (DOT)",
  },
  {
    code: langCode.groovy,
    language: "Groovy",
  },
  {
    code: langCode.groovyServerPages,
    language: "Groovy Server Pages",
  },
  {
    code: langCode.hack,
    language: "Hack",
  },
  {
    code: langCode.haml,
    language: "Haml",
  },
  {
    code: langCode.handlebars,
    language: "Handlebars",
  },
  {
    code: langCode.haproxy,
    language: "HAProxy",
  },
  {
    code: langCode.harbour,
    language: "Harbour",
  },
  {
    code: langCode.haskell,
    language: "Haskell",
  },
  {
    code: langCode.haxe,
    language: "Haxe",
  },
  {
    code: langCode.hcl,
    language: "HCL",
  },
  {
    code: langCode.hiveql,
    language: "HiveQL",
  },
  {
    code: langCode.hlsl,
    language: "HLSL",
  },
  {
    code: langCode.holyc,
    language: "HolyC",
  },
  {
    code: langCode.htmlPlusEcr,
    language: "HTML+ECR",
  },
  {
    code: langCode.htmlPlusEex,
    language: "HTML+EEX",
  },
  {
    code: langCode.htmlPlusErb,
    language: "HTML+ERB",
  },
  {
    code: langCode.htmlPlusPhp,
    language: "HTML+PHP",
  },
  {
    code: langCode.htmlPlusRazor,
    language: "HTML+Razor",
  },
  {
    code: langCode.http,
    language: "HTTP",
  },
  {
    code: langCode.hxml,
    language: "HXML",
  },
  {
    code: langCode.hy,
    language: "Hy",
  },
  {
    code: langCode.hyphy,
    language: "HyPhy",
  },
  {
    code: langCode.idl,
    language: "IDL",
  },
  {
    code: langCode.idris,
    language: "Idris",
  },
  {
    code: langCode.ignoreList,
    language: "Ignore List",
  },
  {
    code: langCode.igorPro,
    language: "IGOR Pro",
  },
  {
    code: langCode.imagejMacro,
    language: "ImageJ Macro",
  },
  {
    code: langCode.inform7,
    language: "Inform 7",
  },
  {
    code: langCode.ini,
    language: "INI",
  },
  {
    code: langCode.innoSetup,
    language: "Inno Setup",
  },
  {
    code: langCode.io,
    language: "Io",
  },
  {
    code: langCode.ioke,
    language: "Ioke",
  },
  {
    code: langCode.ircLog,
    language: "IRC log",
  },
  {
    code: langCode.isabelle,
    language: "Isabelle",
  },
  {
    code: langCode.isabelleRoot,
    language: "Isabelle ROOT",
  },
  {
    code: langCode.j,
    language: "J",
  },
  {
    code: langCode.jasmin,
    language: "Jasmin",
  },
  {
    code: langCode.javaProperties,
    language: "Java Properties",
  },
  {
    code: langCode.javaServerPages,
    language: "Java Server Pages",
  },
  {
    code: langCode.javascriptPlusErb,
    language: "JavaScript+ERB",
  },
  {
    code: langCode.jflex,
    language: "JFlex",
  },
  {
    code: langCode.jison,
    language: "Jison",
  },
  {
    code: langCode.jisonLex,
    language: "Jison Lex",
  },
  {
    code: langCode.jolie,
    language: "Jolie",
  },
  {
    code: langCode.json,
    language: "JSON",
  },
  {
    code: langCode.jsonWithComments,
    language: "JSON with Comments",
  },
  {
    code: langCode.json5,
    language: "JSON5",
  },
  {
    code: langCode.jsoniq,
    language: "JSONiq",
  },
  {
    code: langCode.jsonld,
    language: "JSONLD",
  },
  {
    code: langCode.jsonnet,
    language: "Jsonnet",
  },
  {
    code: langCode.julia,
    language: "Julia",
  },
  {
    code: langCode.jupyterNotebook,
    language: "Jupyter Notebook",
  },
  {
    code: langCode.kaitaiStruct,
    language: "Kaitai Struct",
  },
  {
    code: langCode.kicadLayout,
    language: "KiCad Layout",
  },
  {
    code: langCode.kicadLegacyLayout,
    language: "KiCad Legacy Layout",
  },
  {
    code: langCode.kicadSchematic,
    language: "KiCad Schematic",
  },
  {
    code: langCode.kit,
    language: "Kit",
  },
  {
    code: langCode.kotlin,
    language: "Kotlin",
  },
  {
    code: langCode.krl,
    language: "KRL",
  },
  {
    code: langCode.labview,
    language: "LabVIEW",
  },
  {
    code: langCode.lasso,
    language: "Lasso",
  },
  {
    code: langCode.latte,
    language: "Latte",
  },
  {
    code: langCode.lean,
    language: "Lean",
  },
  {
    code: langCode.less,
    language: "Less",
  },
  {
    code: langCode.lex,
    language: "Lex",
  },
  {
    code: langCode.lfe,
    language: "LFE",
  },
  {
    code: langCode.lilypond,
    language: "LilyPond",
  },
  {
    code: langCode.limbo,
    language: "Limbo",
  },
  {
    code: langCode.linkerScript,
    language: "Linker Script",
  },
  {
    code: langCode.linuxKernelModule,
    language: "Linux Kernel Module",
  },
  {
    code: langCode.liquid,
    language: "Liquid",
  },
  {
    code: langCode.literateAgda,
    language: "Literate Agda",
  },
  {
    code: langCode.literateCoffeescript,
    language: "Literate CoffeeScript",
  },
  {
    code: langCode.literateHaskell,
    language: "Literate Haskell",
  },
  {
    code: langCode.livescript,
    language: "LiveScript",
  },
  {
    code: langCode.llvm,
    language: "LLVM",
  },
  {
    code: langCode.logos,
    language: "Logos",
  },
  {
    code: langCode.logtalk,
    language: "Logtalk",
  },
  {
    code: langCode.lolcode,
    language: "LOLCODE",
  },
  {
    code: langCode.lookml,
    language: "LookML",
  },
  {
    code: langCode.loomscript,
    language: "LoomScript",
  },
  {
    code: langCode.lsl,
    language: "LSL",
  },
  {
    code: langCode.ltspiceSymbol,
    language: "LTspice Symbol",
  },
  {
    code: langCode.lua,
    language: "Lua",
  },
  {
    code: langCode.m,
    language: "M",
  },
  {
    code: langCode.m4,
    language: "M4",
  },
  {
    code: langCode.m4sugar,
    language: "M4Sugar",
  },
  {
    code: langCode.macaulay2,
    language: "Macaulay2",
  },
  {
    code: langCode.makefile,
    language: "Makefile",
  },
];
