import { useEffect, useState } from 'react';
import {
  Box,
  Link,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  Stack,
  Button,
  ButtonGroup,
  Container
} from '@material-ui/core';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Page from '../../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../../components/_dashboard/blog';
import {
  addJsonStringPropQuot,
  removeJsonStringPropQuot,
  jsonSort,
  compressJsonString,
  expandJsonString
} from '../../utils/formatJson';

import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
// 主题风格
import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import 'codemirror/theme/abbott.css';
import 'codemirror/theme/abcdef.css';
import 'codemirror/theme/ambiance.css';
import 'codemirror/theme/ayu-dark.css';
import 'codemirror/theme/ayu-mirage.css';
import 'codemirror/theme/base16-dark.css';
import 'codemirror/theme/bespin.css';
import 'codemirror/theme/base16-light.css';
import 'codemirror/theme/blackboard.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/colorforth.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/duotone-dark.css';
import 'codemirror/theme/duotone-light.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/elegant.css';
import 'codemirror/theme/erlang-dark.css';
import 'codemirror/theme/gruvbox-dark.css';
import 'codemirror/theme/hopscotch.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/lesser-dark.css';
import 'codemirror/theme/liquibyte.css';
import 'codemirror/theme/lucario.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/moxer.css';
import 'codemirror/theme/neat.css';
import 'codemirror/theme/neo.css';
import 'codemirror/theme/night.css';
import 'codemirror/theme/nord.css';
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/theme/panda-syntax.css';
import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/paraiso-light.css';
import 'codemirror/theme/pastel-on-dark.css';
import 'codemirror/theme/railscasts.css';
import 'codemirror/theme/rubyblue.css';
import 'codemirror/theme/seti.css';
import 'codemirror/theme/shadowfox.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/the-matrix.css';
import 'codemirror/theme/tomorrow-night-bright.css';
import 'codemirror/theme/tomorrow-night-eighties.css';
import 'codemirror/theme/ttcn.css';
import 'codemirror/theme/twilight.css';
import 'codemirror/theme/vibrant-ink.css';
import 'codemirror/theme/xq-dark.css';
import 'codemirror/theme/xq-light.css';
import 'codemirror/theme/yeti.css';
import 'codemirror/theme/idea.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/theme/yonce.css';
import 'codemirror/theme/zenburn.css';
// 代码模式，clike是包含java,c++等模式的
import 'codemirror/mode/apl/apl';
import 'codemirror/mode/asn.1/asn.1';
import 'codemirror/mode/asterisk/asterisk';
import 'codemirror/mode/brainfuck/brainfuck';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/clojure/clojure';
import 'codemirror/mode/cmake/cmake';
import 'codemirror/mode/cobol/cobol';
import 'codemirror/mode/coffeescript/coffeescript';
import 'codemirror/mode/commonlisp/commonlisp';
import 'codemirror/mode/crystal/crystal';
import 'codemirror/mode/css/css';
import 'codemirror/mode/cypher/cypher';
import 'codemirror/mode/d/d';
import 'codemirror/mode/dart/dart';
import 'codemirror/mode/diff/diff';
import 'codemirror/mode/django/django';
import 'codemirror/mode/dockerfile/dockerfile';
import 'codemirror/mode/dtd/dtd';
import 'codemirror/mode/dylan/dylan';
import 'codemirror/mode/ebnf/ebnf';
import 'codemirror/mode/ecl/ecl';
import 'codemirror/mode/eiffel/eiffel';
import 'codemirror/mode/elm/elm';
import 'codemirror/mode/erlang/erlang';
import 'codemirror/mode/factor/factor';
import 'codemirror/mode/fcl/fcl';
import 'codemirror/mode/forth/forth';
import 'codemirror/mode/fortran/fortran';
import 'codemirror/mode/gas/gas';
import 'codemirror/mode/gfm/gfm';
import 'codemirror/mode/gherkin/gherkin';
import 'codemirror/mode/go/go';
import 'codemirror/mode/groovy/groovy';
import 'codemirror/mode/haml/haml';
import 'codemirror/mode/haskell/haskell';
import 'codemirror/mode/haskell-literate/haskell-literate';
import 'codemirror/mode/haxe/haxe';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/http/http';
import 'codemirror/mode/idl/idl';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jinja2/jinja2';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/julia/julia';
import 'codemirror/mode/livescript/livescript';
import 'codemirror/mode/lua/lua';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/mathematica/mathematica';
import 'codemirror/mode/mbox/mbox';
import 'codemirror/mode/mirc/mirc';
import 'codemirror/mode/mllike/mllike';
import 'codemirror/mode/mscgen/mscgen';
import 'codemirror/mode/mumps/mumps';
import 'codemirror/mode/nginx/nginx';
import 'codemirror/mode/nsis/nsis';
import 'codemirror/mode/ntriples/ntriples';
import 'codemirror/mode/octave/octave';
import 'codemirror/mode/oz/oz';
import 'codemirror/mode/pascal/pascal';
import 'codemirror/mode/pegjs/pegjs';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/php/php';
import 'codemirror/mode/pig/pig';
import 'codemirror/mode/powershell/powershell';
import 'codemirror/mode/properties/properties';
import 'codemirror/mode/protobuf/protobuf';
import 'codemirror/mode/pug/pug';
import 'codemirror/mode/puppet/puppet';
import 'codemirror/mode/python/python';
import 'codemirror/mode/q/q';
import 'codemirror/mode/r/r';
import 'codemirror/mode/rpm/rpm';
import 'codemirror/mode/rst/rst';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/sas/sas';
import 'codemirror/mode/sass/sass';
import 'codemirror/mode/scheme/scheme';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/sieve/sieve';
import 'codemirror/mode/slim/slim';
import 'codemirror/mode/smalltalk/smalltalk';
import 'codemirror/mode/smarty/smarty';
import 'codemirror/mode/solr/solr';
import 'codemirror/mode/soy/soy';
import 'codemirror/mode/sparql/sparql';
import 'codemirror/mode/spreadsheet/spreadsheet';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/stex/stex';
import 'codemirror/mode/stylus/stylus';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/tcl/tcl';
import 'codemirror/mode/textile/textile';
import 'codemirror/mode/tiddlywiki/tiddlywiki';
import 'codemirror/mode/tiki/tiki';
import 'codemirror/mode/toml/toml';
import 'codemirror/mode/tornado/tornado';
import 'codemirror/mode/troff/troff';
import 'codemirror/mode/ttcn/ttcn';
import 'codemirror/mode/ttcn-cfg/ttcn-cfg';
import 'codemirror/mode/turtle/turtle';
import 'codemirror/mode/twig/twig';
import 'codemirror/mode/vb/vb';
import 'codemirror/mode/vbscript/vbscript';
import 'codemirror/mode/velocity/velocity';
import 'codemirror/mode/verilog/verilog';
import 'codemirror/mode/vhdl/vhdl';
import 'codemirror/mode/vue/vue';
import 'codemirror/mode/wast/wast';
import 'codemirror/mode/webidl/webidl';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/xquery/xquery';
import 'codemirror/mode/yacas/yacas';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/z80/z80';

// ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/xml-hint';
import 'codemirror/addon/hint/html-hint';
// 匹配
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
// 代码高亮
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/runmode/colorize';
// 折叠代码
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/edit/closebrackets';
// 注释
import 'codemirror/addon/comment/comment';
// 按键
import 'codemirror/keymap/sublime';

const themeOptions = [
  { value: 'monokai', label: 'default' },
  { value: '3024-day ', label: '3024-day' },
  { value: '3024-night ', label: '3024-night' },
  { value: 'abbott ', label: 'abbott' },
  { value: 'abcdef ', label: 'abcdef' },
  { value: 'ambiance ', label: 'ambiance' },
  { value: 'ayu-dark ', label: 'ayu-dark' },
  { value: 'ayu-mirage ', label: 'ayu-mirage' },
  { value: 'base16-dark ', label: 'base16-dark' },
  { value: 'base16-light ', label: 'base16-light' },
  { value: 'bespin ', label: 'bespin' },
  { value: 'blackboard ', label: 'blackboard' },
  { value: 'cobalt ', label: 'cobalt' },
  { value: 'colorforth ', label: 'colorforth' },
  { value: 'darcula ', label: 'darcula' },
  { value: 'dracula ', label: 'dracula' },
  { value: 'duotone-dark ', label: 'duotone-dark' },
  { value: 'duotone-light ', label: 'duotone-light' },
  { value: 'eclipse ', label: 'eclipse' },
  { value: 'elegant ', label: 'elegant' },
  { value: 'erlang-dark ', label: 'erlang-dark' },
  { value: 'gruvbox-dark ', label: 'gruvbox-dark' },
  { value: 'hopscotch ', label: 'hopscotch' },
  { value: 'icecoder ', label: 'icecoder' },
  { value: 'idea ', label: 'idea' },
  { value: 'isotope ', label: 'isotope' },
  { value: 'lesser-dark ', label: 'lesser-dark' },
  { value: 'liquibyte ', label: 'liquibyte' },
  { value: 'lucario ', label: 'lucario' },
  { value: 'material ', label: 'material' },
  { value: 'material-darker ', label: 'material-darker' },
  { value: 'material-palenight ', label: 'material-palenight' },
  { value: 'material-ocean ', label: 'material-ocean' },
  { value: 'mbo ', label: 'mbo' },
  { value: 'mdn-like ', label: 'mdn-like' },
  { value: 'midnight ', label: 'midnight' },
  { value: 'monokai ', label: 'monokai' },
  { value: 'moxer ', label: 'moxer' },
  { value: 'neat ', label: 'neat' },
  { value: 'neo ', label: 'neo' },
  { value: 'night ', label: 'night' },
  { value: 'nord ', label: 'nord' },
  { value: 'oceanic-next ', label: 'oceanic-next' },
  { value: 'panda-syntax ', label: 'panda-syntax' },
  { value: 'paraiso-dark ', label: 'paraiso-dark' },
  { value: 'paraiso-light ', label: 'paraiso-light' },
  { value: 'pastel-on-dark ', label: 'pastel-on-dark' },
  { value: 'railscasts ', label: 'railscasts' },
  { value: 'rubyblue ', label: 'rubyblue' },
  { value: 'seti ', label: 'seti' },
  { value: 'shadowfox ', label: 'shadowfox' },
  { value: 'solarized dark ', label: 'solarized dark' },
  { value: 'solarized light ', label: 'solarized light' },
  { value: 'the-matrix ', label: 'the-matrix' },
  { value: 'tomorrow-night-bright ', label: 'tomorrow-night-bright' },
  { value: 'tomorrow-night-eighties ', label: 'tomorrow-night-eighties' },
  { value: 'ttcn ', label: 'ttcn' },
  { value: 'twilight ', label: 'twilight' },
  { value: 'vibrant-ink ', label: 'vibrant-ink' },
  { value: 'xq-dark ', label: 'xq-dark' },
  { value: 'xq-light ', label: 'xq-light' },
  { value: 'yeti ', label: 'yeti' },
  { value: 'yonce ', label: 'yonce' },
  { value: 'zenburn ', label: 'zenburn' }
];

const modeOptions = [
  { name: 'APL', mime: 'text/apl', mode: 'apl', ext: ['dyalog', 'apl'] },
  {
    name: 'PGP',
    mimes: [
      'application/pgp',
      'application/pgp-encrypted',
      'application/pgp-keys',
      'application/pgp-signature'
    ],
    mode: 'asciiarmor',
    ext: ['asc', 'pgp', 'sig']
  },
  { name: 'ASN.1', mime: 'text/x-ttcn-asn', mode: 'asn.1', ext: ['asn', 'asn1'] },
  { name: 'Asterisk', mime: 'text/x-asterisk', mode: 'asterisk', file: /^extensions\.conf$/i },
  { name: 'Brainfuck', mime: 'text/x-brainfuck', mode: 'brainfuck', ext: ['b', 'bf'] },
  { name: 'C', mime: 'text/x-csrc', mode: 'clike', ext: ['c', 'h', 'ino'] },
  {
    name: 'C++',
    mime: 'text/x-c++src',
    mode: 'clike',
    ext: ['cpp', 'c++', 'cc', 'cxx', 'hpp', 'h++', 'hh', 'hxx'],
    alias: ['cpp']
  },
  { name: 'Cobol', mime: 'text/x-cobol', mode: 'cobol', ext: ['cob', 'cpy'] },
  { name: 'C#', mime: 'text/x-csharp', mode: 'clike', ext: ['cs'], alias: ['csharp', 'cs'] },
  { name: 'Clojure', mime: 'text/x-clojure', mode: 'clojure', ext: ['clj', 'cljc', 'cljx'] },
  { name: 'ClojureScript', mime: 'text/x-clojurescript', mode: 'clojure', ext: ['cljs'] },
  { name: 'Closure Stylesheets (GSS)', mime: 'text/x-gss', mode: 'css', ext: ['gss'] },
  {
    name: 'CMake',
    mime: 'text/x-cmake',
    mode: 'cmake',
    ext: ['cmake', 'cmake.in'],
    file: /^CMakeLists\.txt$/
  },
  {
    name: 'CoffeeScript',
    mimes: ['application/vnd.coffeescript', 'text/coffeescript', 'text/x-coffeescript'],
    mode: 'coffeescript',
    ext: ['coffee'],
    alias: ['coffee', 'coffee-script']
  },
  {
    name: 'Common Lisp',
    mime: 'text/x-common-lisp',
    mode: 'commonlisp',
    ext: ['cl', 'lisp', 'el'],
    alias: ['lisp']
  },
  { name: 'Cypher', mime: 'application/x-cypher-query', mode: 'cypher', ext: ['cyp', 'cypher'] },
  { name: 'Cython', mime: 'text/x-cython', mode: 'python', ext: ['pyx', 'pxd', 'pxi'] },
  { name: 'Crystal', mime: 'text/x-crystal', mode: 'crystal', ext: ['cr'] },
  { name: 'CSS', mime: 'text/css', mode: 'css', ext: ['css'] },
  { name: 'CQL', mime: 'text/x-cassandra', mode: 'sql', ext: ['cql'] },
  { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
  { name: 'Dart', mimes: ['application/dart', 'text/x-dart'], mode: 'dart', ext: ['dart'] },
  { name: 'diff', mime: 'text/x-diff', mode: 'diff', ext: ['diff', 'patch'] },
  { name: 'Django', mime: 'text/x-django', mode: 'django' },
  { name: 'Dockerfile', mime: 'text/x-dockerfile', mode: 'dockerfile', file: /^Dockerfile$/ },
  { name: 'DTD', mime: 'application/xml-dtd', mode: 'dtd', ext: ['dtd'] },
  { name: 'Dylan', mime: 'text/x-dylan', mode: 'dylan', ext: ['dylan', 'dyl', 'intr'] },
  { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
  { name: 'ECL', mime: 'text/x-ecl', mode: 'ecl', ext: ['ecl'] },
  { name: 'edn', mime: 'application/edn', mode: 'clojure', ext: ['edn'] },
  { name: 'Eiffel', mime: 'text/x-eiffel', mode: 'eiffel', ext: ['e'] },
  { name: 'Elm', mime: 'text/x-elm', mode: 'elm', ext: ['elm'] },
  { name: 'Embedded JavaScript', mime: 'application/x-ejs', mode: 'htmlembedded', ext: ['ejs'] },
  { name: 'Embedded Ruby', mime: 'application/x-erb', mode: 'htmlembedded', ext: ['erb'] },
  { name: 'Erlang', mime: 'text/x-erlang', mode: 'erlang', ext: ['erl'] },
  { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
  { name: 'Factor', mime: 'text/x-factor', mode: 'factor', ext: ['factor'] },
  { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
  { name: 'Forth', mime: 'text/x-forth', mode: 'forth', ext: ['forth', 'fth', '4th'] },
  {
    name: 'Fortran',
    mime: 'text/x-fortran',
    mode: 'fortran',
    ext: ['f', 'for', 'f77', 'f90', 'f95']
  },
  { name: 'F#', mime: 'text/x-fsharp', mode: 'mllike', ext: ['fs'], alias: ['fsharp'] },
  { name: 'Gas', mime: 'text/x-gas', mode: 'gas', ext: ['s'] },
  { name: 'Gherkin', mime: 'text/x-feature', mode: 'gherkin', ext: ['feature'] },
  {
    name: 'GitHub Flavored Markdown',
    mime: 'text/x-gfm',
    mode: 'gfm',
    file: /^(readme|contributing|history)\.md$/i
  },
  { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
  {
    name: 'Groovy',
    mime: 'text/x-groovy',
    mode: 'groovy',
    ext: ['groovy', 'gradle'],
    file: /^Jenkinsfile$/
  },
  { name: 'HAML', mime: 'text/x-haml', mode: 'haml', ext: ['haml'] },
  { name: 'Haskell', mime: 'text/x-haskell', mode: 'haskell', ext: ['hs'] },
  {
    name: 'Haskell (Literate)',
    mime: 'text/x-literate-haskell',
    mode: 'haskell-literate',
    ext: ['lhs']
  },
  { name: 'Haxe', mime: 'text/x-haxe', mode: 'haxe', ext: ['hx'] },
  { name: 'HXML', mime: 'text/x-hxml', mode: 'haxe', ext: ['hxml'] },
  {
    name: 'ASP.NET',
    mime: 'application/x-aspx',
    mode: 'htmlembedded',
    ext: ['aspx'],
    alias: ['asp', 'aspx']
  },
  {
    name: 'HTML',
    mime: 'text/html',
    mode: 'htmlmixed',
    ext: ['html', 'htm', 'handlebars', 'hbs'],
    alias: ['xhtml']
  },
  { name: 'HTTP', mime: 'message/http', mode: 'http' },
  { name: 'IDL', mime: 'text/x-idl', mode: 'idl', ext: ['pro'] },
  { name: 'Pug', mime: 'text/x-pug', mode: 'pug', ext: ['jade', 'pug'], alias: ['jade'] },
  { name: 'Java', mime: 'text/x-java', mode: 'clike', ext: ['java'] },
  {
    name: 'Java Server Pages',
    mime: 'application/x-jsp',
    mode: 'htmlembedded',
    ext: ['jsp'],
    alias: ['jsp']
  },
  {
    name: 'JavaScript',
    mimes: [
      'text/javascript',
      'text/ecmascript',
      'application/javascript',
      'application/x-javascript',
      'application/ecmascript'
    ],
    mode: 'javascript',
    ext: ['js'],
    alias: ['ecmascript', 'js', 'node']
  },
  {
    name: 'JSON',
    mimes: ['application/json', 'application/x-json'],
    mode: 'javascript',
    ext: ['json', 'map'],
    alias: ['json5']
  },
  {
    name: 'JSON-LD',
    mime: 'application/ld+json',
    mode: 'javascript',
    ext: ['jsonld'],
    alias: ['jsonld']
  },
  { name: 'JSX', mime: 'text/jsx', mode: 'jsx', ext: ['jsx'] },
  { name: 'Jinja2', mime: 'text/jinja2', mode: 'jinja2', ext: ['j2', 'jinja', 'jinja2'] },
  { name: 'Julia', mime: 'text/x-julia', mode: 'julia', ext: ['jl'], alias: ['jl'] },
  { name: 'Kotlin', mime: 'text/x-kotlin', mode: 'clike', ext: ['kt'] },
  { name: 'LESS', mime: 'text/x-less', mode: 'css', ext: ['less'] },
  { name: 'LiveScript', mime: 'text/x-livescript', mode: 'livescript', ext: ['ls'], alias: ['ls'] },
  { name: 'Lua', mime: 'text/x-lua', mode: 'lua', ext: ['lua'] },
  { name: 'Markdown', mime: 'text/x-markdown', mode: 'markdown', ext: ['markdown', 'md', 'mkd'] },
  { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
  { name: 'MariaDB SQL', mime: 'text/x-mariadb', mode: 'sql' },
  {
    name: 'Mathematica',
    mime: 'text/x-mathematica',
    mode: 'mathematica',
    ext: ['m', 'nb', 'wl', 'wls']
  },
  { name: 'Modelica', mime: 'text/x-modelica', mode: 'modelica', ext: ['mo'] },
  { name: 'MUMPS', mime: 'text/x-mumps', mode: 'mumps', ext: ['mps'] },
  { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
  { name: 'mbox', mime: 'application/mbox', mode: 'mbox', ext: ['mbox'] },
  { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
  { name: 'Nginx', mime: 'text/x-nginx-conf', mode: 'nginx', file: /nginx.*\.conf$/i },
  { name: 'NSIS', mime: 'text/x-nsis', mode: 'nsis', ext: ['nsh', 'nsi'] },
  {
    name: 'NTriples',
    mimes: ['application/n-triples', 'application/n-quads', 'text/n-triples'],
    mode: 'ntriples',
    ext: ['nt', 'nq']
  },
  {
    name: 'Objective-C',
    mime: 'text/x-objectivec',
    mode: 'clike',
    ext: ['m'],
    alias: ['objective-c', 'objc']
  },
  {
    name: 'Objective-C++',
    mime: 'text/x-objectivec++',
    mode: 'clike',
    ext: ['mm'],
    alias: ['objective-c++', 'objc++']
  },
  { name: 'OCaml', mime: 'text/x-ocaml', mode: 'mllike', ext: ['ml', 'mli', 'mll', 'mly'] },
  { name: 'Octave', mime: 'text/x-octave', mode: 'octave', ext: ['m'] },
  { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
  { name: 'Pascal', mime: 'text/x-pascal', mode: 'pascal', ext: ['p', 'pas'] },
  { name: 'PEG.js', mime: 'null', mode: 'pegjs', ext: ['jsonld'] },
  { name: 'Perl', mime: 'text/x-perl', mode: 'perl', ext: ['pl', 'pm'] },
  {
    name: 'PHP',
    mimes: ['text/x-php', 'application/x-httpd-php', 'application/x-httpd-php-open'],
    mode: 'php',
    ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml']
  },
  { name: 'Pig', mime: 'text/x-pig', mode: 'pig', ext: ['pig'] },
  {
    name: 'Plain Text',
    mime: 'text/plain',
    mode: 'null',
    ext: ['txt', 'text', 'conf', 'def', 'list', 'log']
  },
  { name: 'PLSQL', mime: 'text/x-plsql', mode: 'sql', ext: ['pls'] },
  { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
  {
    name: 'PowerShell',
    mime: 'application/x-powershell',
    mode: 'powershell',
    ext: ['ps1', 'psd1', 'psm1']
  },
  {
    name: 'Properties files',
    mime: 'text/x-properties',
    mode: 'properties',
    ext: ['properties', 'ini', 'in'],
    alias: ['ini', 'properties']
  },
  { name: 'ProtoBuf', mime: 'text/x-protobuf', mode: 'protobuf', ext: ['proto'] },
  {
    name: 'Python',
    mime: 'text/x-python',
    mode: 'python',
    ext: ['BUILD', 'bzl', 'py', 'pyw'],
    file: /^(BUCK|BUILD)$/
  },
  { name: 'Puppet', mime: 'text/x-puppet', mode: 'puppet', ext: ['pp'] },
  { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
  { name: 'R', mime: 'text/x-rsrc', mode: 'r', ext: ['r', 'R'], alias: ['rscript'] },
  { name: 'reStructuredText', mime: 'text/x-rst', mode: 'rst', ext: ['rst'], alias: ['rst'] },
  { name: 'RPM Changes', mime: 'text/x-rpm-changes', mode: 'rpm' },
  { name: 'RPM Spec', mime: 'text/x-rpm-spec', mode: 'rpm', ext: ['spec'] },
  {
    name: 'Ruby',
    mime: 'text/x-ruby',
    mode: 'ruby',
    ext: ['rb'],
    alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx']
  },
  { name: 'Rust', mime: 'text/x-rustsrc', mode: 'rust', ext: ['rs'] },
  { name: 'SAS', mime: 'text/x-sas', mode: 'sas', ext: ['sas'] },
  { name: 'Sass', mime: 'text/x-sass', mode: 'sass', ext: ['sass'] },
  { name: 'Scala', mime: 'text/x-scala', mode: 'clike', ext: ['scala'] },
  { name: 'Scheme', mime: 'text/x-scheme', mode: 'scheme', ext: ['scm', 'ss'] },
  { name: 'SCSS', mime: 'text/x-scss', mode: 'css', ext: ['scss'] },
  {
    name: 'Shell',
    mimes: ['text/x-sh', 'application/x-sh'],
    mode: 'shell',
    ext: ['sh', 'ksh', 'bash'],
    alias: ['bash', 'sh', 'zsh'],
    file: /^PKGBUILD$/
  },
  { name: 'Sieve', mime: 'application/sieve', mode: 'sieve', ext: ['siv', 'sieve'] },
  { name: 'Slim', mimes: ['text/x-slim', 'application/x-slim'], mode: 'slim', ext: ['slim'] },
  { name: 'Smalltalk', mime: 'text/x-stsrc', mode: 'smalltalk', ext: ['st'] },
  { name: 'Smarty', mime: 'text/x-smarty', mode: 'smarty', ext: ['tpl'] },
  { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
  { name: 'SML', mime: 'text/x-sml', mode: 'mllike', ext: ['sml', 'sig', 'fun', 'smackspec'] },
  { name: 'Soy', mime: 'text/x-soy', mode: 'soy', ext: ['soy'], alias: ['closure template'] },
  {
    name: 'SPARQL',
    mime: 'application/sparql-query',
    mode: 'sparql',
    ext: ['rq', 'sparql'],
    alias: ['sparul']
  },
  {
    name: 'Spreadsheet',
    mime: 'text/x-spreadsheet',
    mode: 'spreadsheet',
    alias: ['excel', 'formula']
  },
  { name: 'SQL', mime: 'text/x-sql', mode: 'sql', ext: ['sql'] },
  { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
  { name: 'Squirrel', mime: 'text/x-squirrel', mode: 'clike', ext: ['nut'] },
  { name: 'Stylus', mime: 'text/x-styl', mode: 'stylus', ext: ['styl'] },
  { name: 'Swift', mime: 'text/x-swift', mode: 'swift', ext: ['swift'] },
  { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
  {
    name: 'LaTeX',
    mime: 'text/x-latex',
    mode: 'stex',
    ext: ['text', 'ltx', 'tex'],
    alias: ['tex']
  },
  { name: 'SystemVerilog', mime: 'text/x-systemverilog', mode: 'verilog', ext: ['v', 'sv', 'svh'] },
  { name: 'Tcl', mime: 'text/x-tcl', mode: 'tcl', ext: ['tcl'] },
  { name: 'Textile', mime: 'text/x-textile', mode: 'textile', ext: ['textile'] },
  { name: 'TiddlyWiki', mime: 'text/x-tiddlywiki', mode: 'tiddlywiki' },
  { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
  { name: 'TOML', mime: 'text/x-toml', mode: 'toml', ext: ['toml'] },
  { name: 'Tornado', mime: 'text/x-tornado', mode: 'tornado' },
  {
    name: 'troff',
    mime: 'text/troff',
    mode: 'troff',
    ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  { name: 'TTCN', mime: 'text/x-ttcn', mode: 'ttcn', ext: ['ttcn', 'ttcn3', 'ttcnpp'] },
  { name: 'TTCN_CFG', mime: 'text/x-ttcn-cfg', mode: 'ttcn-cfg', ext: ['cfg'] },
  { name: 'Turtle', mime: 'text/turtle', mode: 'turtle', ext: ['ttl'] },
  {
    name: 'TypeScript',
    mime: 'application/typescript',
    mode: 'javascript',
    ext: ['ts'],
    alias: ['ts']
  },
  {
    name: 'TypeScript-JSX',
    mime: 'text/typescript-jsx',
    mode: 'jsx',
    ext: ['tsx'],
    alias: ['tsx']
  },
  { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
  { name: 'Web IDL', mime: 'text/x-webidl', mode: 'webidl', ext: ['webidl'] },
  { name: 'VB.NET', mime: 'text/x-vb', mode: 'vb', ext: ['vb'] },
  { name: 'VBScript', mime: 'text/vbscript', mode: 'vbscript', ext: ['vbs'] },
  { name: 'Velocity', mime: 'text/velocity', mode: 'velocity', ext: ['vtl'] },
  { name: 'Verilog', mime: 'text/x-verilog', mode: 'verilog', ext: ['v'] },
  { name: 'VHDL', mime: 'text/x-vhdl', mode: 'vhdl', ext: ['vhd', 'vhdl'] },
  { name: 'Vue.js Component', mimes: ['script/x-vue', 'text/x-vue'], mode: 'vue', ext: ['vue'] },
  {
    name: 'XML',
    mimes: ['application/xml', 'text/xml'],
    mode: 'xml',
    ext: ['xml', 'xsl', 'xsd', 'svg'],
    alias: ['rss', 'wsdl', 'xsd']
  },
  { name: 'XQuery', mime: 'application/xquery', mode: 'xquery', ext: ['xy', 'xquery'] },
  { name: 'Yacas', mime: 'text/x-yacas', mode: 'yacas', ext: ['ys'] },
  {
    name: 'YAML',
    mimes: ['text/x-yaml', 'text/yaml'],
    mode: 'yaml',
    ext: ['yaml', 'yml'],
    alias: ['yml']
  },
  { name: 'Z80', mime: 'text/x-z80', mode: 'z80', ext: ['z80'] },
  { name: 'mscgen', mime: 'text/x-mscgen', mode: 'mscgen', ext: ['mscgen', 'mscin', 'msc'] },
  { name: 'xu', mime: 'text/x-xu', mode: 'mscgen', ext: ['xu'] },
  { name: 'msgenny', mime: 'text/x-msgenny', mode: 'mscgen', ext: ['msgenny'] },
  { name: 'WebAssembly', mime: 'text/webassembly', mode: 'wast', ext: ['wat', 'wast'] }
].map((item) => ({
  label: item.name,
  value: item.name,
  mode: item.mode
}));
let desc = false;
let i = 0;
let j = 0;

export default function Test() {
  console.log('function-start');
  j += 1;
  console.log('j', j);
  const [content, SetContent] = useState('');
  const [curModeIndex, setCurModeIndex] = useState(0);
  const [curThemeIndex, setCurThemeIndex] = useState(0);
  const [initData, SetInitData] = useState('');
  const [testData, SetTestData] = useState('');
  // useEffect(() => {
  //   console.log('xxx');
  //   if (testData !== j) {
  //     SetTestData(j);
  //   }
  //   return () => {
  //     console.log('yyyy');
  //   };
  // });
  useEffect(() => {
    console.log('effect active');
    setCurThemeIndex(themeOptions.findIndex((item) => item.label === 'darcula'));
    setCurModeIndex(modeOptions.findIndex((item) => item.label === 'HTML'));
  }, []);
  const toggleConvert = () => {
    const jsonString = content;
    let isJson = true;
    //  判断是不是JSON
    try {
      JSON.parse(jsonString);
    } catch (error) {
      isJson = false;
      console.log('json', jsonString);
      console.log(error);
    }
    //  如果是Json，则返回JS对象
    if (isJson) {
      SetInitData(removeJsonStringPropQuot(jsonString));
    } else {
      SetInitData(addJsonStringPropQuot(jsonString));
    }
  };

  const handleSortJson = () => {
    console.log('sort', desc);
    i += 1;
    console.log(i);
    const jsonString = content;
    let isJson = true;
    try {
      const jsonObj = JSON.parse(jsonString);
      SetInitData(JSON.stringify(jsonSort(jsonObj, desc)));

      desc = !desc;
    } catch (error) {
      isJson = false;

      console.log(error);
    }
    console.log('result', desc);
  };
  const toggleExpand = () => {
    const jsonString = content;
    if (jsonString.includes('\n')) {
      SetInitData(compressJsonString(jsonString));
    } else {
      SetInitData(expandJsonString(jsonString));
    }
  };
  const handleChange = (editor, data, value) => {
    // console.log('change', editor, data, value);
    SetContent(value);
  };
  const handleThemeChange = (val, index) => {
    console.log(val, index);
    setCurThemeIndex(index);
  };
  const handleModeChange = (val, index) => {
    console.log(val, index);
    setCurModeIndex(index);
  };

  return (
    <Page title="code-test">
      <Container>
        <Grid container spacing={2}>
          <BlogPostsSort
            options={themeOptions}
            onSort={handleThemeChange}
            current={curThemeIndex}
          />
          <BlogPostsSort options={modeOptions} onSort={handleModeChange} current={curModeIndex} />

          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button onClick={toggleConvert}>Json Js</Button>
            <Button onClick={handleSortJson}>排序</Button>
            <Button onClick={toggleExpand}>展开/压缩</Button>
            <Button>{testData}</Button>
          </ButtonGroup>

          <Grid item xs={12}>
            <CodeMirror
              value={initData}
              options={{
                mode: {
                  name: modeOptions[curModeIndex].mode
                },
                // autofocus: true,
                autoCloseTags: true,
                styleActiveLine: true,
                // lineWrapping: true,
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
                theme: themeOptions[curThemeIndex].value,
                lineNumbers: true,
                smartIndent: true,
                keyMap: 'sublime',
                showHint: true
              }}
              onChange={(editor, data, value) => {
                handleChange(editor, data, value);
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
