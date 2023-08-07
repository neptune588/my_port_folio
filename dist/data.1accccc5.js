// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.data = void 0;
var data = {
  skill: [{
    name: "HTML5",
    type: "frontEnd",
    ment: ["시멘틱 태그를 작성하여 웹 페이지의 구조를 잡고 용도를 명확하게 표현 가능.", "폼 태그를 이용하여 로그인, 회원가입 기능 작성 가능."],
    src: ["./images/html.png"],
    color: ["orange"]
  }, {
    name: "CSS3",
    type: "frontEnd",
    ment: ["KEYFRAME을 이용하여 애니메이션 효과 구현 가능.", "HTML 태그 스타일링 및 미디어 쿼리를 이용한 반응형 사이트 구현 가능."],
    src: ["./images/css.png"],
    color: ["skyblue"]
  }, {
    name: "JAVASCRIPT",
    type: "frontEnd",
    ment: ["ES6문법을 사용하여 웹사이트 제작 가능.", "JS로 이벤트 제작/제어 및 DOM을 제어하여 다양한 동적 기능 부여 가능.", "JS기반 라이브러리 및 플러그인 사용 가능."],
    src: ["./images/js.png"],
    color: ["yellow"]
  }, {
    name: "JQUERY",
    type: "frontEnd",
    ment: ["JQUERY를 사용하여 이벤트 제작/제어 가능.", "JQUERY의 플러그인을 사용하여 스크롤 및 애니메이션 제작 가능."],
    src: ["./images/jquery.png"],
    color: ["skyblue"]
  }, {
    name: "SASS/SCSS",
    type: "frontEnd",
    ment: ["CSS전처리기인 SCSS를 활용하여 CSS문법을 보다 가독성 있게 작성 가능.", "SCSS에서 제공하는 기본적인 함수 문법 사용 가능."],
    src: ["./images/sass.png"],
    color: ["pink"]
  }, {
    name: "REACT",
    type: "frontEnd",
    ment: ["HOOKS을 이용하여 다양한 상태 관리 가능. (함수형 컴포넌트 작성 가능)", "STYLED COMPOMENTS 사용 가능", "ROUTER를 사용하여 SPA 제작 취지와 맞게 한 페이지 내에서 여러 페이지 연결 가능.", "REDUX TOOL KIT을 이용하여 전역 상태 관리 가능."],
    src: ["./images/react.png"],
    color: ["skyblue"]
  }, {
    name: "BOOTSTRAP(REACT)",
    type: "frontEnd",
    ment: ["REACT와 연계 하여 레이아웃 작성 가능."],
    src: ["./images/bootstrap.png"],
    color: ["purple"]
  }, {
    name: "PARCEL BUNDLER",
    type: "frontEnd",
    ment: ["PARCEL BUNDLER를 이용하여 모듈들을 번들, 정적 파일로 변환 가능.", "BUNDLER환경에서 사이트 배포 (GITHUB) 가능."],
    src: ["./images/parcel_bundler.png"],
    color: ["burlywood"]
  }, {
    name: "FIGMA",
    type: "tools",
    ment: ["FIGMA를 이용하여 프로토타입/시안 작성 가능.", "FIGMA를 이용하여 레이아웃 작성 가능."],
    src: ["./images/figma.png"],
    color: ["purple"]
  }, {
    name: "ADOBE XD",
    type: "tools",
    ment: ["ADOBE XD를 이용하여 프로토타입/시안 작성 가능.", "ADOBE XD를 이용하여 레이아웃 작성 가능."],
    src: ["./images/adobe_xd.png"],
    color: ["purple"]
  }, {
    name: "PHOTOSHOP",
    type: "tools",
    ment: ["PHOTOSHOP을 이용하여 사진/GIF 편집 및 제작 가능."],
    src: ["./images/ps.png"],
    color: ["skyblue"]
  }, {
    name: "GIT",
    type: "vesionControl",
    ment: ["형상관리도구(버전관리도구)인 GIT을 이용하여 GITHUB와 연동 가능.", "GIT의 각종 명령어 사용 가능. GIT BRANCHE 사용 가능."],
    src: ["./images/git.png"],
    color: ["orange"]
  }, {
    name: "GITHUB",
    type: "vesionControl",
    ment: ["GITHUB 레퍼지토리 작성하여 로컬 레퍼지토리와 연결 가능.", "GITHUB를 이용하여 사이트 DEPLOY(배포) 가능."],
    src: ["./images/github.png"],
    color: ["white"]
  }],
  //페이지를 하나의 객체로 생각하고
  //데이터를 구성해보자.
  //탭 메뉴는 배열 렝쓰에 맞게 생성이 되게 구현하자.
  //탭 메뉴를 클릭할시 해당 밸류값을 받아와서 객체 타입과 일치하는지 판단 -> 리스트를 뽑아내자.
  page: [{
    projectName: "CALHARTT WIP",
    menuKind: ["ALL", "MAIN", "SUB", "DETAIL", "SIGN IN/UP", "SEARCH"],
    hoverColor: ["FFBF00"],
    iconSrc: ["./images/calhartt_logo.png"],
    pageInfo: [{
      type: "ALL",
      makePeriod: "2023-05-01 ~ 2023-06-28",
      makeSkill: ["HTML5, ", "SCSS, ", "VANILLA JAVASCRIPT"],
      setting: ["NODE.JS, ", "PARCEL-BUNDLER"],
      people: ["기획: 4인, 제작: 1인(개별)"],
      thunmnailSrc: ["./images/calhartt_thumnail.jpg"]
    }, {
      type: "MAIN",
      pageContents: ["박스 무한 슬라이더", "LOOK_BOOK_BOX"],
      episode: ["자바스크립트 실력을 늘리고 싶어서 바닐라 자바스크립트로 만들어 보자고 계획을 세웠습니다.", "박스 슬라이더 부분은 JQUERY로는 어떻게 구현하는지 배웠지만 JS와 차이점이 있어 관련 강의를 찾아 보고", "공부하여 구현한다고 시간이 소요 됐었지만, 생각한대로 구현이 되어 뿌듯 했습니다."],
      videoSrc: ["./videos/calhartt/calhartt_main_video.mp4"]
    }, {
      type: "SUB",
      pageContents: ["다중 중첩 상품 필터", "정렬 및 동적 페이지네이션"],
      episode: ["Math.ceil 메서드를 이용하여 실시간으로 전달받은 배열의 갯수를 나누어 동적 페이지를 구현 하였으며", "중첩 필터의 경우에는 if문으로 구현 할 경우 말도 안되는 경우의 수가 생긴다고 판단,", "배열, VALUE, DATA-SET, closest메서드, for반복문 등으로 해당 기능을 구현 하였습니다."],
      videoSrc: ["./videos/calhartt/calhartt_sub_video.mp4"]
    }, {
      type: "DETAIL",
      pageContents: ["리스트 작성 및 페이지 네이션", "QNA 리스트 작성 및 답변 기능"],
      episode: ["리스트 기능에는 작성 갯수에 따른 페이지 생성과 삭제 기능, 별점 부여 기능 등이 있으며", "객체 및 배열을 활용하여 구현 했습니다.", "QNA는 질문글이 올라오면 해당 글을 답변 할 수 있게 답변이 달리면 답변 상태가 변화 됩니다."],
      videoSrc: ["./videos/calhartt/calhartt_detail_video.mp4"]
    }, {
      type: "SIGN IN/UP",
      pageContents: ["ID/PW찾기 기능", "회원가입 및 로그인 기능"],
      episode: ["자바스크립트를 처음으로 사용하여 구현한 페이지입니다.", "회원가입 페이지에서는 각 탭마다 해당되는 조건들을", "반복문, SWITCH CASE, 정규식 등으로 검사 할 수 있게 구현 하였으며", "FINDINDEX 메서드를 활용하여 아이디/비밀번호가 같은 정보에 속해있는지 판단했습니다.", "해당 프로젝트를 제작하면서 자바스크립트에 대한 이해도와 실력이 상승된것 같습니다."],
      videoSrc: ["./videos/calhartt/calhartt_sign_in_n_up_video.mp4"]
    }, {
      type: "SEARCH",
      pageContents: ["검색 기능"],
      episode: ["filter 메서드, include메서드, urlQuery 등을 활용하여 해당 기능을 구현 하였습니다.", "?앞뒤의 값을 키:밸류의 형태로 받아와 filter, includes를 활용하여 해당 기능을 구현 했습니다.", "소소하지만 검색한 키워드에 맞는 상품이 몇개 있는지/ 없는지 표기 하였습니다."],
      videoSrc: ["./videos/calhartt/calhartt_search_video.mp4"]
    }],
    link: [{
      url: "./code_view.html",
      ment: "코드 보기"
    }, {
      url: "https://neptune588.github.io/team_project_calhart/",
      ment: "사이트 보기"
    }, {
      url: "https://github.com/neptune588/team_project_calhart",
      ment: "GITHUB/README"
    }, {
      url: "#!",
      ment: "기획서 보기"
    }]
  }, {
    projectName: "NETMARBLE",
    menuKind: ["ALL", "MAIN", "SUB"],
    hoverColor: ["yellow"],
    iconSrc: ["./images/netmarble_logo.png"],
    pageInfo: [{
      type: "ALL",
      makePeriod: "2023-03-28 ~ 2023-04-28",
      makeSkill: ["HTML5, ", "CSS, ", "JQUERY"],
      setting: ["LIVE환경"],
      people: ["기획: 1인, 제작: 1인"],
      thunmnailSrc: ["./images/netmarble_thumnail.jpg"]
    }, {
      type: "MAIN",
      pageContents: ["DATA-SET을 이용한 정렬 기능", "SLICK SLIDER를 활용한 박스 슬라이더", "반응형", "아코디언 메뉴", "JQUERY를 활용한 박스 슬라이더"],
      episode: ["프론트엔드 과정을 배우면서 처음으로 진행한 프로젝트로,", "처음 제작했던 프로젝트라, 시행 착오를 정말 많이 겪은 프로젝트 입니다.", "MEDIAQUERY를 활용하여 반응형으로 제작 하였으며, JQUERY를 활용하여 정렬 및 슬라이더 기능등을 구현 하였습니다."],
      videoSrc: ["./videos/netmarble/netmarble_main_video.mp4"]
    }, {
      type: "SUB",
      pageContents: ["탭 메뉴", "메뉴 더보기 기능"],
      episode: ["탭 메뉴 버튼을 통해 해당하는 밸류를 가진 메뉴를 DISPLAY: NONE/BLOCK으로 구현 하였으며", "모바일, 테블릿, PC버전에서 표기되는 컨텐츠의 갯수가 달라집니다."],
      videoSrc: ["./videos/netmarble/netmarble_sub_video.mp4"]
    }],
    link: [{
      url: "./code_view.html",
      ment: "코드 보기"
    }, {
      url: "https://neptune588.github.io/personal-project-netmable-/",
      ment: "사이트 보기"
    }, {
      url: "https://github.com/neptune588/personal-project-netmable-",
      ment: "GITHUB/README"
    }, {
      url: "#!",
      ment: "기획서 보기"
    }]
  }, {
    projectName: "CALHARTT WIP REACT",
    menuKind: ["ALL", "MAIN", "SUB", "DETAIL", "CART", "SEARCH"],
    hoverColor: ["FFBF00"],
    iconSrc: ["./images/calhartt_react_logo.png"],
    pageInfo: [{
      type: "ALL",
      makePeriod: "2023-06-20 ~ 2023-07-04",
      makeSkill: ["REACT, ", "SCSS, ", "ROUTER, ", "REDUX TOOL KIT, ", "STYLED-COMPONENTS, ", "SWIPER, "],
      setting: ["NODE.JS, ", "REACT"],
      people: ["기획: 1인, 제작: 1인"],
      thunmnailSrc: ["./images/calhartt_react_thumnail.jpg"]
    }, {
      type: "MAIN",
      pageContents: ["박스 무한 슬라이더", "LOOK_BOOK_BOX"],
      episode: ["처음 리액트를 접했을때는 기존 제작 환경과 많이 달라 당황 했습니다.", "하지만 수업시간에 배운 내용과 복습을 통해 어느정도 이해하게 되었고", "MAP을 적극적으로 활용하여 링크 연결 및 PROPS들을 객체 속성 값에 맞게 동적으로 생성 하였습니다.", "JS로 제작했던 박스 슬라이더는 스와이퍼로 교체 하였으며, HOVER EVENT는 useState를 사용", "즉, 상태 변경을 이용하여 삼항 연산자로 해당 이벤트를 구현 하였습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_main_video.mp4"]
    }, {
      type: "SUB",
      pageContents: ["서브 메뉴에 따른 리스트 동적 생성", "장바구니 담기 기능", "상태 변경을 이용한 조건부 렌더링"],
      episode: ["HEADER 역시 MAP으로 객체 기반 동적 생성을 하였고, 링크 연결을 객체 속성 값으로 연결", "ROUTER를 이용해 해당 서브 페이지로 라우팅을 해준 뒤 PARAMS를 동적으로 받아와 Object.keys를 활용해 JSON데이터 파일과 비교, 일치하는 값을 뿌려 주었습니다.", "장바구니 같은 경우는 담기 버튼을 누르면 장바구니에 해당 상품이 담기게 되며 자식 컴포넌트에 상태 PROPS를 전달, 해당 상태를 기반으로 장바구니 담기 애니가 나오게 했습니다.", "fetch로 데이터 요청을 해 상태에 담고, 해당 상태가 변하기 전까지는 다른 컴포넌트가 렌더링이 되는 이른바 조건부 렌더링을 했습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_sub_video.mp4"]
    }, {
      type: "DETAIL",
      pageContents: ["JSON 데이터 렌더링", "리뷰 리스트 작성 및 별점/삭제 기능"],
      episode: ["30개의 리스트가 있으며 각 리스트 객체에 담겨있는 정보를 토대로", "디테일 페이지에 렌더링을 했습니다.", "또한 별점 기능은 반복문과 useState를 이용한 객체 속성 값 변화로 구현을 하였습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_detail_video.mp4"]
    }, {
      type: "CART",
      pageContents: ["총 갯수 및 가격 표시 기능", "상품 수량 변경 및 삭제 기능"],
      episode: ["리덕스 툴킷의 리듀서즈에 저장된 상태 변화 함수, useDispatch, useSelector를 활용하여", "해당 기능들을 구현 하였습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_cart_video.mp4"]
    }, {
      type: "SEARCH",
      pageContents: ["검색 기능"],
      episode: ["input밸류 값이 바뀔때마다 onChange이벤트를 통해 상태 배열에 value가 저장이 되고", "엔터 혹은 검색 버튼을 눌렸을시 해당 상태의 값이 링크에 전달", "useParams를 이용하여 해당 값을 받아와 filter, includes를 이용해 검색 기능을 구현 했습니다."],
      videoSrc: ["./videos/calhartt_react/calhartt_react_search_video.mp4"]
    }],
    link: [{
      url: "./code_view.html",
      ment: "코드 보기"
    }, {
      url: "#!",
      ment: "사이트 보기"
    }, {
      url: "https://github.com/neptune588/calhartt_React_Ver",
      ment: "GITHUB/README"
    }, {
      url: "#!",
      ment: "기획서 보기"
    }]
  }]
};
exports.data = data;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51110" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/data.js"], null)
//# sourceMappingURL=/data.1accccc5.js.map