import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, f as element, g as space, t as text, h as claim_element, j as children, k as claim_space, l as claim_text, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, q as append_dev, r as noop, u as _createClass, w as listen_dev, x as _slicedToArray, y as set_data_dev, z as validate_each_argument, A as create_component, B as claim_component, C as mount_component, D as transition_in, E as transition_out, F as destroy_component, G as set_style, H as group_outros, I as check_outros, J as destroy_each, K as _typeof, L as assign, M as get_spread_update, N as get_spread_object, O as query_selector_all } from './client.ab54aa45.js';

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$7 = "src/components/Home.svelte";

function create_fragment$8(ctx) {
  var div1;
  var article;
  var img;
  var img_src_value;
  var t0;
  var div0;
  var h2;
  var t1;
  var t2;
  var p;
  var span;
  var t3;
  var t4;
  var t5;
  var button;
  var t6;
  var block = {
    c: function create() {
      div1 = element("div");
      article = element("article");
      img = element("img");
      t0 = space();
      div0 = element("div");
      h2 = element("h2");
      t1 = text("¿Que hay mas alla del ruido y nuestras diferencias?");
      t2 = space();
      p = element("p");
      span = element("span");
      t3 = text("#");
      t4 = text("internetesnuestro y se nos esta llendo de las manos... \n\t\t\t\tvamos a construir un espacio virtual seguro en el que seamos libres y autonomos para compartir\n\t\t\t\tideas y lo que nos pasa.");
      t5 = space();
      button = element("button");
      t6 = text("¡Sumate!");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div1_nodes = children(div1);
      article = claim_element(div1_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      img = claim_element(article_nodes, "IMG", {
        width: true,
        src: true,
        alt: true
      });
      t0 = claim_space(article_nodes);
      div0 = claim_element(article_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "¿Que hay mas alla del ruido y nuestras diferencias?");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      span = claim_element(p_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t3 = claim_text(span_nodes, "#");
      span_nodes.forEach(detach_dev);
      t4 = claim_text(p_nodes, "internetesnuestro y se nos esta llendo de las manos... \n\t\t\t\tvamos a construir un espacio virtual seguro en el que seamos libres y autonomos para compartir\n\t\t\t\tideas y lo que nos pasa.");
      p_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      button = claim_element(div0_nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t6 = claim_text(button_nodes, "¡Sumate!");
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "width", "300");
      if (img.src !== (img_src_value = "logo-circular.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Conoce a tu mente para que tu mente no te domine");
      add_location(img, file$7, 2, 2, 139);
      attr_dev(h2, "class", "font-sans text-2xl bg-blue-300 rounded-sm  p-1 uppercase");
      add_location(h2, file$7, 4, 3, 247);
      attr_dev(span, "class", "text-xs");
      add_location(span, file$7, 7, 4, 426);
      attr_dev(p, "class", "font-semibold mt-6 uppercase");
      add_location(p, file$7, 6, 3, 381);
      attr_dev(button, "class", "bg-blue-400 border-2 border-black mt-5 font-semibold p-1");
      add_location(button, file$7, 11, 3, 651);
      add_location(div0, file$7, 3, 2, 238);
      attr_dev(article, "class", "grid grid-cols-1 md:grid-cols-2 items-center justify-items-center flex");
      add_location(article, file$7, 1, 1, 48);
      attr_dev(div1, "class", "container mx-auto p-10");
      attr_dev(div1, "id", "home");
      add_location(div1, file$7, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, article);
      append_dev(article, img);
      append_dev(article, t0);
      append_dev(article, div0);
      append_dev(div0, h2);
      append_dev(h2, t1);
      append_dev(div0, t2);
      append_dev(div0, p);
      append_dev(p, span);
      append_dev(span, t3);
      append_dev(p, t4);
      append_dev(div0, t5);
      append_dev(div0, button);
      append_dev(button, t6);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$8($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Home", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Home> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Home = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Home, _SvelteComponentDev);

  var _super = _createSuper$8(Home);

  function Home(options) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Home",
      options: options,
      id: create_fragment$8.name
    });
    return _this;
  }

  return Home;
}(SvelteComponentDev);

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$6 = "src/components/Todaladata.svelte";

function create_fragment$7(ctx) {
  var div3;
  var article;
  var div1;
  var img;
  var img_src_value;
  var t0;
  var div0;
  var h1;
  var span0;
  var t1;
  var t2;
  var span1;
  var t3;
  var t4;
  var t5;
  var h2;
  var span2;
  var t6;
  var t7;
  var t8;
  var p;
  var t9;
  var t10;
  var div2;
  var blockquote0;
  var section0;
  var t11;
  var script0;
  var script0_src_value;
  var t12;
  var blockquote1;
  var section1;
  var t13;
  var script1;
  var script1_src_value;
  var t14;
  var blockquote2;
  var section2;
  var t15;
  var script2;
  var script2_src_value;
  var block = {
    c: function create() {
      div3 = element("div");
      article = element("article");
      div1 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      h1 = element("h1");
      span0 = element("span");
      t1 = text("#");
      t2 = text("\n\t\t\t\t\t Toda \n\t\t\t\t\t");
      span1 = element("span");
      t3 = text("la");
      t4 = text("\n\t\t\t\t\t data");
      t5 = space();
      h2 = element("h2");
      span2 = element("span");
      t6 = text("+ info");
      t7 = text("\n\t\t\t\t\t para activar una convivencia digital positiva");
      t8 = space();
      p = element("p");
      t9 = text("Subi un video y mencionanos en @corazonesymentes");
      t10 = space();
      div2 = element("div");
      blockquote0 = element("blockquote");
      section0 = element("section");
      t11 = space();
      script0 = element("script");
      t12 = space();
      blockquote1 = element("blockquote");
      section1 = element("section");
      t13 = space();
      script1 = element("script");
      t14 = space();
      blockquote2 = element("blockquote");
      section2 = element("section");
      t15 = space();
      script2 = element("script");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div3_nodes = children(div3);
      article = claim_element(div3_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div1 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        width: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span0 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "#");
      span0_nodes.forEach(detach_dev);
      t2 = claim_text(h1_nodes, "\n\t\t\t\t\t Toda \n\t\t\t\t\t");
      span1 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "la");
      span1_nodes.forEach(detach_dev);
      t4 = claim_text(h1_nodes, "\n\t\t\t\t\t data");
      h1_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      span2 = claim_element(h2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t6 = claim_text(span2_nodes, "+ info");
      span2_nodes.forEach(detach_dev);
      t7 = claim_text(h2_nodes, "\n\t\t\t\t\t para activar una convivencia digital positiva");
      h2_nodes.forEach(detach_dev);
      t8 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t9 = claim_text(p_nodes, "Subi un video y mencionanos en @corazonesymentes");
      p_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t10 = claim_space(article_nodes);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      blockquote0 = claim_element(div2_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote0_nodes = children(blockquote0);
      section0 = claim_element(blockquote0_nodes, "SECTION", {});
      children(section0).forEach(detach_dev);
      blockquote0_nodes.forEach(detach_dev);
      t11 = claim_space(div2_nodes);
      script0 = claim_element(div2_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script0_nodes = children(script0);
      script0_nodes.forEach(detach_dev);
      t12 = claim_space(div2_nodes);
      blockquote1 = claim_element(div2_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote1_nodes = children(blockquote1);
      section1 = claim_element(blockquote1_nodes, "SECTION", {});
      var section1_nodes = children(section1);
      section1_nodes.forEach(detach_dev);
      blockquote1_nodes.forEach(detach_dev);
      t13 = claim_space(div2_nodes);
      script1 = claim_element(div2_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script1_nodes = children(script1);
      script1_nodes.forEach(detach_dev);
      t14 = claim_space(div2_nodes);
      blockquote2 = claim_element(div2_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote2_nodes = children(blockquote2);
      section2 = claim_element(blockquote2_nodes, "SECTION", {});
      children(section2).forEach(detach_dev);
      blockquote2_nodes.forEach(detach_dev);
      t15 = claim_space(div2_nodes);
      script2 = claim_element(div2_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script2_nodes = children(script2);
      script2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "width", "100");
      if (img.src !== (img_src_value = "excl_globo.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "importante");
      add_location(img, file$6, 3, 3, 142);
      attr_dev(span0, "class", "text-blue-100 text-sm ");
      add_location(span0, file$6, 6, 5, 275);
      attr_dev(span1, "class", "text-blue-100");
      add_location(span1, file$6, 8, 5, 338);
      attr_dev(h1, "class", "text-blue-300 text-3xl uppercase font-bold");
      add_location(h1, file$6, 5, 4, 214);
      attr_dev(span2, "class", "text-blue-100 ");
      add_location(span2, file$6, 10, 49, 441);
      attr_dev(h2, "class", "text-blue-300 uppercase text-xl");
      add_location(h2, file$6, 10, 4, 396);
      attr_dev(p, "class", "text-blue-100");
      add_location(p, file$6, 12, 4, 546);
      add_location(div0, file$6, 4, 3, 203);
      attr_dev(div1, "class", "flex items-center justify-items-center");
      add_location(div1, file$6, 2, 2, 86);
      add_location(section0, file$6, 21, 5, 861);
      attr_dev(blockquote0, "class", "tiktok-embed");
      attr_dev(blockquote0, "cite", "https://www.tiktok.com/@sofia05link/video/6935022195202706694");
      attr_dev(blockquote0, "data-video-id", "6935022195202706694");
      add_location(blockquote0, file$6, 17, 3, 703);
      script0.async = true;
      if (script0.src !== (script0_src_value = "https://www.tiktok.com/embed.js")) attr_dev(script0, "src", script0_src_value);
      add_location(script0, file$6, 23, 3, 901);
      add_location(section1, file$6, 28, 4, 1122);
      attr_dev(blockquote1, "class", "tiktok-embed");
      attr_dev(blockquote1, "cite", "https://www.tiktok.com/@galu.cocina/video/6910947615735663878");
      attr_dev(blockquote1, "data-video-id", "6910947615735663878");
      add_location(blockquote1, file$6, 25, 3, 968);
      script1.async = true;
      if (script1.src !== (script1_src_value = "https://www.tiktok.com/embed.js")) attr_dev(script1, "src", script1_src_value);
      add_location(script1, file$6, 31, 3, 1168);
      add_location(section2, file$6, 37, 5, 1395);
      attr_dev(blockquote2, "class", "tiktok-embed");
      attr_dev(blockquote2, "cite", "https://www.tiktok.com/@sofia05link/video/6935022195202706694");
      attr_dev(blockquote2, "data-video-id", "6935022195202706694");
      add_location(blockquote2, file$6, 33, 3, 1237);
      script2.async = true;
      if (script2.src !== (script2_src_value = "https://www.tiktok.com/embed.js")) attr_dev(script2, "src", script2_src_value);
      add_location(script2, file$6, 39, 3, 1435);
      attr_dev(div2, "class", "grid grid-cols-1 md:grid-cols-3 gap-1");
      add_location(div2, file$6, 16, 2, 648);
      attr_dev(article, "class", "container mx-auto ");
      add_location(article, file$6, 1, 1, 47);
      attr_dev(div3, "class", "bg-black p-10");
      attr_dev(div3, "id", "toda-la-data");
      add_location(div3, file$6, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, article);
      append_dev(article, div1);
      append_dev(div1, img);
      append_dev(div1, t0);
      append_dev(div1, div0);
      append_dev(div0, h1);
      append_dev(h1, span0);
      append_dev(span0, t1);
      append_dev(h1, t2);
      append_dev(h1, span1);
      append_dev(span1, t3);
      append_dev(h1, t4);
      append_dev(div0, t5);
      append_dev(div0, h2);
      append_dev(h2, span2);
      append_dev(span2, t6);
      append_dev(h2, t7);
      append_dev(div0, t8);
      append_dev(div0, p);
      append_dev(p, t9);
      append_dev(article, t10);
      append_dev(article, div2);
      append_dev(div2, blockquote0);
      append_dev(blockquote0, section0);
      append_dev(div2, t11);
      append_dev(div2, script0);
      append_dev(div2, t12);
      append_dev(div2, blockquote1);
      append_dev(blockquote1, section1);
      append_dev(div2, t13);
      append_dev(div2, script1);
      append_dev(div2, t14);
      append_dev(div2, blockquote2);
      append_dev(blockquote2, section2);
      append_dev(div2, t15);
      append_dev(div2, script2);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$7.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$7($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Todaladata", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Todaladata> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Todaladata = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Todaladata, _SvelteComponentDev);

  var _super = _createSuper$7(Todaladata);

  function Todaladata(options) {
    var _this;

    _classCallCheck(this, Todaladata);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Todaladata",
      options: options,
      id: create_fragment$7.name
    });
    return _this;
  }

  return Todaladata;
}(SvelteComponentDev);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$5 = "src/components/DocumentDownload.svelte";

function create_fragment$6(ctx) {
  var div1;
  var img;
  var img_src_value;
  var t0;
  var div0;
  var h5;
  var t1;
  var t2;
  var t3;
  var h3;
  var t4;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div1 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      h5 = element("h5");
      t1 = text("capitulo ");
      t2 = text(
      /*chapter*/
      ctx[0]);
      t3 = space();
      h3 = element("h3");
      t4 = text(
      /*title*/
      ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h5 = claim_element(div0_nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      t1 = claim_text(h5_nodes, "capitulo ");
      t2 = claim_text(h5_nodes,
      /*chapter*/
      ctx[0]);
      h5_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      h3 = claim_element(div0_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t4 = claim_text(h3_nodes,
      /*title*/
      ctx[1]);
      h3_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "/icons/icon-document.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "document-icon");
      attr_dev(img, "alt", "documento");
      add_location(img, file$5, 10, 2, 199);
      attr_dev(h5, "class", "text-xs uppercase font-bold");
      add_location(h5, file$5, 12, 4, 337);
      attr_dev(h3, "class", "uppercase font-bold text-md");
      add_location(h3, file$5, 13, 4, 405);
      attr_dev(div0, "class", "flex flex-col border-b border-black pb-3");
      add_location(div0, file$5, 11, 2, 278);
      attr_dev(div1, "class", "flex mt-5 mb-5");
      add_location(div1, file$5, 9, 0, 144);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, img);
      append_dev(div1, t0);
      append_dev(div1, div0);
      append_dev(div0, h5);
      append_dev(h5, t1);
      append_dev(h5, t2);
      append_dev(div0, t3);
      append_dev(div0, h3);
      append_dev(h3, t4);

      if (!mounted) {
        dispose = listen_dev(div1, "click",
        /*openDocument*/
        ctx[2], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*chapter*/
      1) set_data_dev(t2,
      /*chapter*/
      ctx[0]);
      if (dirty &
      /*title*/
      2) set_data_dev(t4,
      /*title*/
      ctx[1]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$6.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$6($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("DocumentDownload", slots, []);
  var chapter = $$props.chapter;
  var title = $$props.title;
  var url = $$props.url;

  var openDocument = function openDocument() {
    window.open(url, "_blank");
  };

  var writable_props = ["chapter", "title", "url"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<DocumentDownload> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("chapter" in $$props) $$invalidate(0, chapter = $$props.chapter);
    if ("title" in $$props) $$invalidate(1, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
  };

  $$self.$capture_state = function () {
    return {
      chapter: chapter,
      title: title,
      url: url,
      openDocument: openDocument
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("chapter" in $$props) $$invalidate(0, chapter = $$props.chapter);
    if ("title" in $$props) $$invalidate(1, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
    if ("openDocument" in $$props) $$invalidate(2, openDocument = $$props.openDocument);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [chapter, title, openDocument, url];
}

var DocumentDownload = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(DocumentDownload, _SvelteComponentDev);

  var _super = _createSuper$6(DocumentDownload);

  function DocumentDownload(options) {
    var _this;

    _classCallCheck(this, DocumentDownload);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
      chapter: 0,
      title: 1,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "DocumentDownload",
      options: options,
      id: create_fragment$6.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*chapter*/
    ctx[0] === undefined && !("chapter" in props)) {
      console.warn("<DocumentDownload> was created without expected prop 'chapter'");
    }

    if (
    /*title*/
    ctx[1] === undefined && !("title" in props)) {
      console.warn("<DocumentDownload> was created without expected prop 'title'");
    }

    if (
    /*url*/
    ctx[3] === undefined && !("url" in props)) {
      console.warn("<DocumentDownload> was created without expected prop 'url'");
    }

    return _this;
  }

  _createClass(DocumentDownload, [{
    key: "chapter",
    get: function get() {
      throw new Error("<DocumentDownload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<DocumentDownload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "title",
    get: function get() {
      throw new Error("<DocumentDownload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<DocumentDownload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<DocumentDownload>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<DocumentDownload>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return DocumentDownload;
}(SvelteComponentDev);

var documents = [{
  title: "Empatía: la base de la sociabilidad",
  url: "google.com"
}, {
  title: "Sesgo de confirmacion",
  url: "google.com"
}, {
  title: "Disonancia cognitiva",
  url: "google.com"
}, {
  title: "Sesgo de atribucion",
  url: "google.com"
}, {
  title: "Sesgo de atribucion",
  url: "google.com"
}, {
  title: "Privacidad y poder elegir",
  url: "google.com"
}, {
  title: "Sesgo de atribucion",
  url: "google.com"
}, {
  title: "Sesgo de atribucion",
  url: "google.com"
}, {
  title: "Privacidad y poder elegir",
  url: "google.com"
}];

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$4 = "src/components/Articulo.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
} // (22:3) {#each documents as item, index}


function create_each_block$1(ctx) {
  var document;
  var current;
  document = new DocumentDownload({
    props: {
      title:
      /*item*/
      ctx[0].title,
      url:
      /*item*/
      ctx[0].url,
      chapter:
      /*index*/
      ctx[2] + 1
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(document.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(document.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(document, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(document.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(document.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(document, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(22:3) {#each documents as item, index}",
    ctx: ctx
  });
  return block;
}

function create_fragment$5(ctx) {
  var div2;
  var article;
  var img;
  var img_src_value;
  var t0;
  var div0;
  var h3;
  var span2;
  var span0;
  var t1;
  var t2;
  var span1;
  var t3;
  var t4;
  var t5;
  var p;
  var span3;
  var t6;
  var br0;
  var t7;
  var br1;
  var t8;
  var t9;
  var div1;
  var current;
  var each_value = documents;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      div2 = element("div");
      article = element("article");
      img = element("img");
      t0 = space();
      div0 = element("div");
      h3 = element("h3");
      span2 = element("span");
      span0 = element("span");
      t1 = text("#");
      t2 = text("internet");
      span1 = element("span");
      t3 = text("es");
      t4 = text("nuestro");
      t5 = space();
      p = element("p");
      span3 = element("span");
      t6 = text("Creamos esta guía para que podamos contribuir ");
      br0 = element("br");
      t7 = text("\n\t\t\t\t\ta una nueva convivencia digital positiva y empatica.");
      br1 = element("br");
      t8 = text("\n\t\t\t\t\t¡No usamos internet, estamos en él!");
      t9 = space();
      div1 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true,
        style: true,
        id: true
      });
      var div2_nodes = children(div2);
      article = claim_element(div2_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      img = claim_element(article_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(article_nodes);
      div0 = claim_element(article_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h3 = claim_element(div0_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      span2 = claim_element(h3_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      span0 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "#");
      span0_nodes.forEach(detach_dev);
      t2 = claim_text(span2_nodes, "internet");
      span1 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "es");
      span1_nodes.forEach(detach_dev);
      t4 = claim_text(span2_nodes, "nuestro");
      span2_nodes.forEach(detach_dev);
      h3_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      span3 = claim_element(p_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t6 = claim_text(span3_nodes, "Creamos esta guía para que podamos contribuir ");
      br0 = claim_element(span3_nodes, "BR", {});
      t7 = claim_text(span3_nodes, "\n\t\t\t\t\ta una nueva convivencia digital positiva y empatica.");
      br1 = claim_element(span3_nodes, "BR", {});
      t8 = claim_text(span3_nodes, "\n\t\t\t\t\t¡No usamos internet, estamos en él!");
      span3_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t9 = claim_space(article_nodes);
      div1 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div1_nodes);
      }

      div1_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "w-full");
      if (img.src !== (img_src_value = "logo-horizontal.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Corazones y mentes");
      add_location(img, file$4, 6, 2, 266);
      attr_dev(span0, "class", "text-black");
      add_location(span0, file$4, 10, 5, 454);
      attr_dev(span1, "class", "text-black");
      add_location(span1, file$4, 10, 46, 495);
      attr_dev(span2, "class", "text-white bg-purple-400 tracking-tighter");
      add_location(span2, file$4, 9, 4, 392);
      attr_dev(h3, "class", "text-3xl mt-10 uppercase");
      add_location(h3, file$4, 8, 3, 350);
      add_location(br0, file$4, 14, 51, 660);
      add_location(br1, file$4, 15, 57, 722);
      attr_dev(span3, "class", "bg-white");
      add_location(span3, file$4, 13, 4, 585);
      attr_dev(p, "class", "mt-5 text-xl");
      add_location(p, file$4, 12, 3, 556);
      add_location(div0, file$4, 7, 2, 341);
      attr_dev(div1, "class", "grid grid-cols-1 md:grid-cols-3 mt-10");
      add_location(div1, file$4, 20, 2, 799);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$4, 5, 1, 228);
      attr_dev(div2, "class", "bg-blue-100 p-10 tech-back");
      set_style(div2, "background-image", "url(background-tech.png)");
      attr_dev(div2, "id", "articulo");
      add_location(div2, file$4, 4, 0, 122);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, article);
      append_dev(article, img);
      append_dev(article, t0);
      append_dev(article, div0);
      append_dev(div0, h3);
      append_dev(h3, span2);
      append_dev(span2, span0);
      append_dev(span0, t1);
      append_dev(span2, t2);
      append_dev(span2, span1);
      append_dev(span1, t3);
      append_dev(span2, t4);
      append_dev(div0, t5);
      append_dev(div0, p);
      append_dev(p, span3);
      append_dev(span3, t6);
      append_dev(span3, br0);
      append_dev(span3, t7);
      append_dev(span3, br1);
      append_dev(span3, t8);
      append_dev(article, t9);
      append_dev(article, div1);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div1, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*documents*/
      0) {
        each_value = documents;
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block$1(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div1, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$5($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Articulo", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Articulo> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Document: DocumentDownload,
      documents: documents
    };
  };

  return [];
}

var Articulo = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Articulo, _SvelteComponentDev);

  var _super = _createSuper$5(Articulo);

  function Articulo(options) {
    var _this;

    _classCallCheck(this, Articulo);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Articulo",
      options: options,
      id: create_fragment$5.name
    });
    return _this;
  }

  return Articulo;
}(SvelteComponentDev);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src/components/ForoDocente.svelte";

function create_fragment$4(ctx) {
  var div3;
  var article;
  var div1;
  var div0;
  var h1;
  var span;
  var t0;
  var t1;
  var t2;
  var img;
  var img_src_value;
  var t3;
  var p0;
  var t4;
  var t5;
  var div2;
  var t6;
  var script;
  var t7;
  var t8;
  var p1;
  var a;
  var t9;
  var block = {
    c: function create() {
      div3 = element("div");
      article = element("article");
      div1 = element("div");
      div0 = element("div");
      h1 = element("h1");
      span = element("span");
      t0 = text("FORO");
      t1 = text(" DOCENTE");
      t2 = space();
      img = element("img");
      t3 = space();
      p0 = element("p");
      t4 = text("Un espacio para intercambiar ideas, sugerir bibliografía,\n      dialogar y debatir sobre el uso de internet, las redes sociales\n       y la convivencia digital entre les jovenes y en las aulas");
      t5 = space();
      div2 = element("div");
      t6 = space();
      script = element("script");
      t7 = text("(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm\", b=\"https://embed.typeform.com/\"; if(!gi.call(d,id)) { js=ce.call(d,\"script\"); js.id=id; js.src=b+\"embed.js\"; q=gt.call(d,\"script\")[0]; q.parentNode.insertBefore(js,q) } })()");
      t8 = space();
      p1 = element("p");
      a = element("a");
      t9 = text("Descargá actividades para trabajar en clase");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div3_nodes = children(div3);
      article = claim_element(div3_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div1 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "FORO");
      span_nodes.forEach(detach_dev);
      t1 = claim_text(h1_nodes, " DOCENTE");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      img = claim_element(div1_nodes, "IMG", {
        src: true,
        alt: true
      });
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(article_nodes);
      p0 = claim_element(article_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "Un espacio para intercambiar ideas, sugerir bibliografía,\n      dialogar y debatir sobre el uso de internet, las redes sociales\n       y la convivencia digital entre les jovenes y en las aulas");
      p0_nodes.forEach(detach_dev);
      t5 = claim_space(article_nodes);
      div2 = claim_element(article_nodes, "DIV", {
        class: true,
        "data-url": true,
        style: true
      });
      children(div2).forEach(detach_dev);
      t6 = claim_space(article_nodes);
      script = claim_element(article_nodes, "SCRIPT", {});
      var script_nodes = children(script);
      t7 = claim_text(script_nodes, "(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id=\"typef_orm\", b=\"https://embed.typeform.com/\"; if(!gi.call(d,id)) { js=ce.call(d,\"script\"); js.id=id; js.src=b+\"embed.js\"; q=gt.call(d,\"script\")[0]; q.parentNode.insertBefore(js,q) } })()");
      script_nodes.forEach(detach_dev);
      t8 = claim_space(article_nodes);
      p1 = claim_element(article_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      a = claim_element(p1_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a_nodes = children(a);
      t9 = claim_text(a_nodes, "Descargá actividades para trabajar en clase");
      a_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-blue-300");
      add_location(span, file$3, 6, 10, 245);
      attr_dev(h1, "class", "uppercase bg-white text-black text-4xl p-2 text-bold");
      add_location(h1, file$3, 5, 8, 169);
      attr_dev(div0, "class", "mr-5");
      add_location(div0, file$3, 4, 6, 142);
      if (img.src !== (img_src_value = "dialog.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "icono de dialogo");
      add_location(img, file$3, 9, 6, 326);
      attr_dev(div1, "class", "flex items-center justify-center");
      add_location(div1, file$3, 3, 4, 89);
      attr_dev(p0, "class", "text-white");
      add_location(p0, file$3, 11, 4, 388);
      attr_dev(div2, "class", "typeform-widget mt-10");
      attr_dev(div2, "data-url", "https://form.typeform.com/to/abLtziWm?typeform-medium=embed-snippet");
      set_style(div2, "width", "100%");
      set_style(div2, "height", "500px");
      add_location(div2, file$3, 17, 4, 628);
      add_location(script, file$3, 17, 161, 785);
      attr_dev(a, "href", "http://google.com");
      attr_dev(a, "target", "_blank");
      attr_dev(a, "class", "bg-white uppercase mt-5 text-xl p-3 ");
      add_location(a, file$3, 19, 6, 1140);
      attr_dev(p1, "class", "text-center p-3");
      add_location(p1, file$3, 18, 4, 1106);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$3, 2, 2, 49);
      attr_dev(div3, "class", "bg-black p-10");
      attr_dev(div3, "id", "foro-docente");
      add_location(div3, file$3, 1, 0, 1);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, article);
      append_dev(article, div1);
      append_dev(div1, div0);
      append_dev(div0, h1);
      append_dev(h1, span);
      append_dev(span, t0);
      append_dev(h1, t1);
      append_dev(div1, t2);
      append_dev(div1, img);
      append_dev(article, t3);
      append_dev(article, p0);
      append_dev(p0, t4);
      append_dev(article, t5);
      append_dev(article, div2);
      append_dev(article, t6);
      append_dev(article, script);
      append_dev(script, t7);
      append_dev(article, t8);
      append_dev(article, p1);
      append_dev(p1, a);
      append_dev(a, t9);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$4($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("ForoDocente", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ForoDocente> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var ForoDocente = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ForoDocente, _SvelteComponentDev);

  var _super = _createSuper$4(ForoDocente);

  function ForoDocente(options) {
    var _this;

    _classCallCheck(this, ForoDocente);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ForoDocente",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return ForoDocente;
}(SvelteComponentDev);

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */


function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */


function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }

  return content;
}

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};

function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


var transformData = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

var enhanceError = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


var createError = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

var cookies = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

var isURLSameOrigin = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults;

/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults_1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = ['baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress', 'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }

    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
  var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, mergeDeepProperties);
  return config;
};

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
var Axios_1 = Axios;

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel_1(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

var isAxiosError = function isAxiosError(payload) {
  return _typeof(payload) === 'object' && payload.isAxiosError === true;
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios_1.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios$1 = createInstance(defaults_1); // Expose Axios class to allow class inheritance

axios$1.Axios = Axios_1; // Factory for creating new instances

axios$1.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios$1.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel; // Expose all/spread

axios$1.all = function all(promises) {
  return Promise.all(promises);
};

axios$1.spread = spread; // Expose isAxiosError

axios$1.isAxiosError = isAxiosError;
var axios_1 = axios$1; // Allow use of default import syntax in TypeScript

var _default = axios$1;
axios_1.default = _default;

var axios = axios_1;

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src/components/Kit.svelte"; // (51:2) {#if opened}

function create_if_block(ctx) {
  var p;
  var t0;
  var t1;
  var a;
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      p = element("p");
      t0 = text(
      /*description*/
      ctx[0]);
      t1 = space();
      a = element("a");
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes,
      /*description*/
      ctx[0]);
      p_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      a = claim_element(nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      img = claim_element(a_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "ml-10 text-left");
      add_location(p, file$2, 51, 4, 1150);
      attr_dev(img, "class", "float-right");
      if (img.src !== (img_src_value = "icons/download.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "descarga");
      add_location(img, file$2, 55, 6, 1253);
      attr_dev(a, "class", "download p-2");
      attr_dev(a, "href",
      /*url*/
      ctx[3]);
      add_location(a, file$2, 54, 4, 1211);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, a, anchor);
      append_dev(a, img);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*description*/
      1) set_data_dev(t0,
      /*description*/
      ctx[0]);

      if (dirty &
      /*url*/
      8) {
        attr_dev(a, "href",
        /*url*/
        ctx[3]);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(51:2) {#if opened}",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var div2;
  var div1;
  var img;
  var img_src_value;
  var t0;
  var div0;
  var h5;
  var t1;
  var t2;
  var h3;
  var t3;
  var t4;
  var span;
  var t5_value = (
  /*opened*/
  ctx[4] ? "-" : "+") + "";
  var t5;
  var t6;
  var mounted;
  var dispose;
  var if_block =
  /*opened*/
  ctx[4] && create_if_block(ctx);
  var block = {
    c: function create() {
      div2 = element("div");
      div1 = element("div");
      img = element("img");
      t0 = space();
      div0 = element("div");
      h5 = element("h5");
      t1 = text(
      /*type*/
      ctx[1]);
      t2 = space();
      h3 = element("h3");
      t3 = text(
      /*title*/
      ctx[2]);
      t4 = space();
      span = element("span");
      t5 = text(t5_value);
      t6 = space();
      if (if_block) if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img = claim_element(div1_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h5 = claim_element(div0_nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      t1 = claim_text(h5_nodes,
      /*type*/
      ctx[1]);
      h5_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      h3 = claim_element(div0_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t3 = claim_text(h3_nodes,
      /*title*/
      ctx[2]);
      h3_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      span = claim_element(div1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t5 = claim_text(span_nodes, t5_value);
      span_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      if (if_block) if_block.l(div2_nodes);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value =
      /*icon*/
      ctx[5])) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "document-icon svelte-x9ja20");
      attr_dev(img, "alt",
      /*type*/
      ctx[1]);
      add_location(img, file$2, 43, 4, 783);
      attr_dev(h5, "class", "text-xs uppercase font-bold");
      add_location(h5, file$2, 45, 6, 898);
      attr_dev(h3, "class", "uppercase font-bold text-md");
      add_location(h3, file$2, 46, 6, 956);
      attr_dev(div0, "class", "flex-grow text-left flex flex-col pb-1");
      add_location(div0, file$2, 44, 4, 839);
      attr_dev(span, "class", "text-right text-xl cursor-pointer p-1");
      add_location(span, file$2, 48, 4, 1024);
      attr_dev(div1, "class", "flex");
      add_location(div1, file$2, 42, 2, 760);
      attr_dev(div2, "class", "flex flex-col border-b border-black mt-5 mb-5 m-2");
      add_location(div2, file$2, 41, 0, 694);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div1);
      append_dev(div1, img);
      append_dev(div1, t0);
      append_dev(div1, div0);
      append_dev(div0, h5);
      append_dev(h5, t1);
      append_dev(div0, t2);
      append_dev(div0, h3);
      append_dev(h3, t3);
      append_dev(div1, t4);
      append_dev(div1, span);
      append_dev(span, t5);
      append_dev(div2, t6);
      if (if_block) if_block.m(div2, null);

      if (!mounted) {
        dispose = listen_dev(span, "click",
        /*toggle*/
        ctx[6], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*icon*/
      32 && img.src !== (img_src_value =
      /*icon*/
      ctx[5])) {
        attr_dev(img, "src", img_src_value);
      }

      if (dirty &
      /*type*/
      2) {
        attr_dev(img, "alt",
        /*type*/
        ctx[1]);
      }

      if (dirty &
      /*type*/
      2) set_data_dev(t1,
      /*type*/
      ctx[1]);
      if (dirty &
      /*title*/
      4) set_data_dev(t3,
      /*title*/
      ctx[2]);
      if (dirty &
      /*opened*/
      16 && t5_value !== (t5_value = (
      /*opened*/
      ctx[4] ? "-" : "+") + "")) set_data_dev(t5, t5_value);

      if (
      /*opened*/
      ctx[4]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div2, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);
      if (if_block) if_block.d();
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Kit", slots, []);
  var description = $$props.description;
  var type = $$props.type;
  var title = $$props.title;
  var url = $$props.url;
  var opened = false;

  var toggle = function toggle() {
    $$invalidate(4, opened = !opened);
  };

  var icon;

  switch (type) {
    case "GUÍA":
    case "ARTÍCULO":
      icon = "icons/article-icon.png";
      break;

    case "PODCAST":
      icon = "icons/podcast-icon.png";
      break;

    case "VIDEO":
    case "PELICULA":
      icon = "icons/video-icon.png";
      break;

    case "PLATAFORMA":
      icon = "icons/app.png";
      break;

    case "JUEGO":
      icon = "icons/puzzle.png";
      break;

    default:
      icon = "icons/article-icon.png";
      break;
  }

  var writable_props = ["description", "type", "title", "url"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Kit> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("description" in $$props) $$invalidate(0, description = $$props.description);
    if ("type" in $$props) $$invalidate(1, type = $$props.type);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
  };

  $$self.$capture_state = function () {
    return {
      description: description,
      type: type,
      title: title,
      url: url,
      opened: opened,
      toggle: toggle,
      icon: icon
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("description" in $$props) $$invalidate(0, description = $$props.description);
    if ("type" in $$props) $$invalidate(1, type = $$props.type);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
    if ("url" in $$props) $$invalidate(3, url = $$props.url);
    if ("opened" in $$props) $$invalidate(4, opened = $$props.opened);
    if ("toggle" in $$props) $$invalidate(6, toggle = $$props.toggle);
    if ("icon" in $$props) $$invalidate(5, icon = $$props.icon);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [description, type, title, url, opened, icon, toggle];
}

var Kit = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Kit, _SvelteComponentDev);

  var _super = _createSuper$3(Kit);

  function Kit(options) {
    var _this;

    _classCallCheck(this, Kit);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      description: 0,
      type: 1,
      title: 2,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Kit",
      options: options,
      id: create_fragment$3.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*description*/
    ctx[0] === undefined && !("description" in props)) {
      console.warn("<Kit> was created without expected prop 'description'");
    }

    if (
    /*type*/
    ctx[1] === undefined && !("type" in props)) {
      console.warn("<Kit> was created without expected prop 'type'");
    }

    if (
    /*title*/
    ctx[2] === undefined && !("title" in props)) {
      console.warn("<Kit> was created without expected prop 'title'");
    }

    if (
    /*url*/
    ctx[3] === undefined && !("url" in props)) {
      console.warn("<Kit> was created without expected prop 'url'");
    }

    return _this;
  }

  _createClass(Kit, [{
    key: "description",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "type",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "title",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<Kit>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Kit>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Kit;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/KitHerramientas.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (32:6) {#each kits as item}


function create_each_block(ctx) {
  var kit;
  var current;
  var kit_spread_levels = [
  /*item*/
  ctx[2]];
  var kit_props = {};

  for (var i = 0; i < kit_spread_levels.length; i += 1) {
    kit_props = assign(kit_props, kit_spread_levels[i]);
  }

  kit = new Kit({
    props: kit_props,
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(kit.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(kit.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(kit, target, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      var kit_changes = dirty &
      /*kits*/
      1 ? get_spread_update(kit_spread_levels, [get_spread_object(
      /*item*/
      ctx[2])]) : {};
      kit.$set(kit_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(kit.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(kit.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(kit, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(32:6) {#each kits as item}",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var div1;
  var article;
  var h1;
  var span0;
  var t0;
  var t1;
  var span1;
  var t2;
  var t3;
  var t4;
  var h2;
  var span2;
  var t5;
  var t6;
  var p;
  var t7;
  var t8;
  var div0;
  var current;
  var each_value =
  /*kits*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      div1 = element("div");
      article = element("article");
      h1 = element("h1");
      span0 = element("span");
      t0 = text("Kit");
      t1 = space();
      span1 = element("span");
      t2 = text("De");
      t3 = text("\n       Herramientas");
      t4 = space();
      h2 = element("h2");
      span2 = element("span");
      t5 = text("Articulos, podcast, reflexiones, videos y más.");
      t6 = space();
      p = element("p");
      t7 = text("Te compartimos este recursero con un poco de todo para habitar internet de forma segura, responsable y empática.");
      t8 = space();
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div1_nodes = children(div1);
      article = claim_element(div1_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      h1 = claim_element(article_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span0 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "Kit");
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(h1_nodes);
      span1 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t2 = claim_text(span1_nodes, "De");
      span1_nodes.forEach(detach_dev);
      t3 = claim_text(h1_nodes, "\n       Herramientas");
      h1_nodes.forEach(detach_dev);
      t4 = claim_space(article_nodes);
      h2 = claim_element(article_nodes, "H2", {});
      var h2_nodes = children(h2);
      span2 = claim_element(h2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t5 = claim_text(span2_nodes, "Articulos, podcast, reflexiones, videos y más.");
      span2_nodes.forEach(detach_dev);
      h2_nodes.forEach(detach_dev);
      t6 = claim_space(article_nodes);
      p = claim_element(article_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t7 = claim_text(p_nodes, "Te compartimos este recursero con un poco de todo para habitar internet de forma segura, responsable y empática.");
      p_nodes.forEach(detach_dev);
      t8 = claim_space(article_nodes);
      div0 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "text-black");
      add_location(span0, file$1, 23, 6, 770);
      attr_dev(span1, "class", "text-blue-200");
      add_location(span1, file$1, 24, 6, 812);
      attr_dev(h1, "class", "uppercase text-4xl text-purple-400 mb-3");
      add_location(h1, file$1, 22, 4, 711);
      attr_dev(span2, "class", "bg-purple-400 text-xl text-white p-2 uppercase text-bold");
      add_location(span2, file$1, 27, 6, 890);
      add_location(h2, file$1, 26, 4, 879);
      attr_dev(p, "class", "text-bold mt-10 uppercase");
      add_location(p, file$1, 29, 4, 1029);
      attr_dev(div0, "class", "grid grid-cols-1 md:grid-cols-2");
      add_location(div0, file$1, 30, 4, 1187);
      attr_dev(article, "class", "container mx-auto text-center");
      add_location(article, file$1, 21, 2, 659);
      attr_dev(div1, "class", "p-10");
      attr_dev(div1, "id", "kit-de-herramientas");
      add_location(div1, file$1, 20, 0, 613);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, article);
      append_dev(article, h1);
      append_dev(h1, span0);
      append_dev(span0, t0);
      append_dev(h1, t1);
      append_dev(h1, span1);
      append_dev(span1, t2);
      append_dev(h1, t3);
      append_dev(article, t4);
      append_dev(article, h2);
      append_dev(h2, span2);
      append_dev(span2, t5);
      append_dev(article, t6);
      append_dev(article, p);
      append_dev(p, t7);
      append_dev(article, t8);
      append_dev(article, div0);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*kits*/
      1) {
        each_value =
        /*kits*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div0, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var url = "https://spreadsheets.google.com/feeds/list/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/1/public/values?alt=json";

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("KitHerramientas", slots, []);
  var kits = [];
  axios.get(url).then(function (res) {
    $$invalidate(0, kits = formatSpreadsheet(res.data.feed.entry));
  });

  var formatSpreadsheet = function formatSpreadsheet(data) {
    var input = data.map(function (obj) {
      return {
        title: obj.title.$t,
        description: obj["gsx$descripción"].$t,
        url: obj.gsx$linkarchivo.$t,
        type: obj.gsx$aclaraciones.$t
      };
    });
    return input;
  };

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<KitHerramientas> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      axios: axios,
      Kit: Kit,
      kits: kits,
      url: url,
      formatSpreadsheet: formatSpreadsheet
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("kits" in $$props) $$invalidate(0, kits = $$props.kits);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [kits];
}

var KitHerramientas = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(KitHerramientas, _SvelteComponentDev);

  var _super = _createSuper$2(KitHerramientas);

  function KitHerramientas(options) {
    var _this;

    _classCallCheck(this, KitHerramientas);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "KitHerramientas",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return KitHerramientas;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Footer.svelte";

function create_fragment$1(ctx) {
  var div3;
  var div2;
  var div1;
  var img0;
  var img0_src_value;
  var t0;
  var div0;
  var small;
  var t1;
  var t2;
  var img1;
  var img1_src_value;
  var t3;
  var ul;
  var li0;
  var a0;
  var t4;
  var t5;
  var li1;
  var a1;
  var t6;
  var t7;
  var li2;
  var a2;
  var t8;
  var t9;
  var li3;
  var a3;
  var t10;
  var t11;
  var li4;
  var a4;
  var t12;
  var t13;
  var p;
  var t14;
  var block = {
    c: function create() {
      div3 = element("div");
      div2 = element("div");
      div1 = element("div");
      img0 = element("img");
      t0 = space();
      div0 = element("div");
      small = element("small");
      t1 = text("Desarrollado por:");
      t2 = space();
      img1 = element("img");
      t3 = space();
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t4 = text("Home");
      t5 = space();
      li1 = element("li");
      a1 = element("a");
      t6 = text("#todaladata");
      t7 = space();
      li2 = element("li");
      a2 = element("a");
      t8 = text("Artículo");
      t9 = space();
      li3 = element("li");
      a3 = element("a");
      t10 = text("foro docente");
      t11 = space();
      li4 = element("li");
      a4 = element("a");
      t12 = text("kit de herramientas");
      t13 = space();
      p = element("p");
      t14 = text("Corazones y Mentes 2021. Todos los derechos reservados");
      this.h();
    },
    l: function claim(nodes) {
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img0 = claim_element(div1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      small = claim_element(div0_nodes, "SMALL", {
        class: true
      });
      var small_nodes = children(small);
      t1 = claim_text(small_nodes, "Desarrollado por:");
      small_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      img1 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      ul = claim_element(div1_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        href: true
      });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Home");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t5 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "#todaladata");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t7 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", {
        href: true
      });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "Artículo");
      a2_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t9 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", {
        href: true
      });
      var a3_nodes = children(a3);
      t10 = claim_text(a3_nodes, "foro docente");
      a3_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      t11 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      a4 = claim_element(li4_nodes, "A", {
        href: true
      });
      var a4_nodes = children(a4);
      t12 = claim_text(a4_nodes, "kit de herramientas");
      a4_nodes.forEach(detach_dev);
      li4_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t13 = claim_space(div2_nodes);
      p = claim_element(div2_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t14 = claim_text(p_nodes, "Corazones y Mentes 2021. Todos los derechos reservados");
      p_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", "logo svelte-gw7pqo");
      if (img0.src !== (img0_src_value = "logo-circular.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "corazones y mentes logo");
      add_location(img0, file, 11, 6, 196);
      attr_dev(small, "class", "text-xs");
      add_location(small, file, 13, 8, 328);
      attr_dev(img1, "class", "developers svelte-gw7pqo");
      if (img1.src !== (img1_src_value = "developers2.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "democracya en red, plataforma democratica fundacion fhc centro edelstein");
      add_location(img1, file, 14, 8, 385);
      attr_dev(div0, "class", "flex flex-col justify-center");
      add_location(div0, file, 12, 6, 277);
      attr_dev(a0, "href", "#home");
      add_location(a0, file, 17, 12, 577);
      add_location(li0, file, 17, 8, 573);
      attr_dev(a1, "href", "#todaladata");
      add_location(a1, file, 18, 12, 619);
      add_location(li1, file, 18, 8, 615);
      attr_dev(a2, "href", "#articulo");
      add_location(a2, file, 19, 12, 674);
      add_location(li2, file, 19, 8, 670);
      attr_dev(a3, "href", "#foro-docente");
      add_location(a3, file, 20, 12, 724);
      add_location(li3, file, 20, 8, 720);
      attr_dev(a4, "href", "#kit-de-herramientas");
      add_location(a4, file, 21, 12, 782);
      add_location(li4, file, 21, 8, 778);
      attr_dev(ul, "class", "uppercase text-bold");
      add_location(ul, file, 16, 6, 532);
      attr_dev(div1, "class", "flex justify-between align-center");
      add_location(div1, file, 10, 4, 142);
      attr_dev(p, "class", "text-center text-xs text-bold");
      add_location(p, file, 24, 4, 869);
      attr_dev(div2, "class", "container mx-auto");
      add_location(div2, file, 9, 2, 106);
      attr_dev(div3, "class", "bg-gray-200 p-10");
      add_location(div3, file, 8, 0, 73);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, div2);
      append_dev(div2, div1);
      append_dev(div1, img0);
      append_dev(div1, t0);
      append_dev(div1, div0);
      append_dev(div0, small);
      append_dev(small, t1);
      append_dev(div0, t2);
      append_dev(div0, img1);
      append_dev(div1, t3);
      append_dev(div1, ul);
      append_dev(ul, li0);
      append_dev(li0, a0);
      append_dev(a0, t4);
      append_dev(ul, t5);
      append_dev(ul, li1);
      append_dev(li1, a1);
      append_dev(a1, t6);
      append_dev(ul, t7);
      append_dev(ul, li2);
      append_dev(li2, a2);
      append_dev(a2, t8);
      append_dev(ul, t9);
      append_dev(ul, li3);
      append_dev(li3, a3);
      append_dev(a3, t10);
      append_dev(ul, t11);
      append_dev(ul, li4);
      append_dev(li4, a4);
      append_dev(a4, t12);
      append_dev(div2, t13);
      append_dev(div2, p);
      append_dev(p, t14);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div3);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Footer", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  var _super = _createSuper$1(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Footer",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Footer;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var t0;
  var home;
  var t1;
  var todaladata;
  var t2;
  var articulo;
  var t3;
  var forodocente;
  var t4;
  var kitherramientas;
  var t5;
  var footer;
  var current;
  home = new Home({
    $$inline: true
  });
  todaladata = new Todaladata({
    $$inline: true
  });
  articulo = new Articulo({
    $$inline: true
  });
  forodocente = new ForoDocente({
    $$inline: true
  });
  kitherramientas = new KitHerramientas({
    $$inline: true
  });
  footer = new Footer({
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      create_component(home.$$.fragment);
      t1 = space();
      create_component(todaladata.$$.fragment);
      t2 = space();
      create_component(articulo.$$.fragment);
      t3 = space();
      create_component(forodocente.$$.fragment);
      t4 = space();
      create_component(kitherramientas.$$.fragment);
      t5 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-xrdowf\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      claim_component(home.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(todaladata.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(articulo.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(forodocente.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(kitherramientas.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Corazones Y Mentes";
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(home, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(todaladata, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(articulo, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(forodocente, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(kitherramientas, target, anchor);
      insert_dev(target, t5, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(home.$$.fragment, local);
      transition_in(todaladata.$$.fragment, local);
      transition_in(articulo.$$.fragment, local);
      transition_in(forodocente.$$.fragment, local);
      transition_in(kitherramientas.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(home.$$.fragment, local);
      transition_out(todaladata.$$.fragment, local);
      transition_out(articulo.$$.fragment, local);
      transition_out(forodocente.$$.fragment, local);
      transition_out(kitherramientas.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(home, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(todaladata, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(articulo, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(forodocente, detaching);
      if (detaching) detach_dev(t4);
      destroy_component(kitherramientas, detaching);
      if (detaching) detach_dev(t5);
      destroy_component(footer, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Home: Home,
      TodaLaData: Todaladata,
      Articulo: Articulo,
      ForoDocente: ForoDocente,
      KitHerramientas: KitHerramientas,
      Footer: Footer
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
