import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, v as validate_slots, f as element, g as space, t as text, h as claim_element, j as children, k as claim_space, l as claim_text, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, q as append_dev, r as noop, u as identity, w as listen_dev, x as set_style, y as _slicedToArray, z as add_render_callback, A as create_bidirectional_transition, B as _createClass, C as set_data_dev, D as validate_each_argument, E as create_component, F as claim_component, G as mount_component, H as transition_in, I as transition_out, J as destroy_component, K as group_outros, L as check_outros, M as destroy_each, N as onMount, O as _typeof, P as assign, Q as get_spread_update, R as get_spread_object, T as query_selector_all } from './client.a43895f2.js';

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$a = "src\\components\\Home.svelte";

function create_fragment$a(ctx) {
  var div1;
  var article;
  var img0;
  var img0_src_value;
  var t0;
  var div0;
  var img1;
  var img1_src_value;
  var t1;
  var h20;
  var t2;
  var t3;
  var h21;
  var t4;
  var t5;
  var p;
  var span;
  var t6;
  var t7;
  var t8;
  var img2;
  var img2_src_value;
  var t9;
  var br;
  var t10;
  var a;
  var t11;
  var block = {
    c: function create() {
      div1 = element("div");
      article = element("article");
      img0 = element("img");
      t0 = space();
      div0 = element("div");
      img1 = element("img");
      t1 = space();
      h20 = element("h2");
      t2 = text("¿Cómo nos vinculamos digitalmente de manera constructiva y empática?");
      t3 = space();
      h21 = element("h2");
      t4 = text("¿Qué hay más allá del ruido y nuestras diferencias?");
      t5 = space();
      p = element("p");
      span = element("span");
      t6 = text("#");
      t7 = text("internetesnuestro y se nos esta yendo de las manos... \n\t\t\t\tUN ESPACIO CON HERRAMIENTAS Y MUCHA DATA PARA ACTIVAR UNA BUENA CONVIVENCIA EN INTERNET\n\t\t\t\tSUMATE!");
      t8 = space();
      img2 = element("img");
      t9 = space();
      br = element("br");
      t10 = space();
      a = element("a");
      t11 = text("DESCARGÁ EL LIBRO");
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
      img0 = claim_element(article_nodes, "IMG", {
        width: true,
        src: true,
        alt: true
      });
      t0 = claim_space(article_nodes);
      div0 = claim_element(article_nodes, "DIV", {});
      var div0_nodes = children(div0);
      img1 = claim_element(div0_nodes, "IMG", {
        class: true,
        id: true,
        src: true,
        alt: true
      });
      t1 = claim_space(div0_nodes);
      h20 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t2 = claim_text(h20_nodes, "¿Cómo nos vinculamos digitalmente de manera constructiva y empática?");
      h20_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      h21 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t4 = claim_text(h21_nodes, "¿Qué hay más allá del ruido y nuestras diferencias?");
      h21_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      span = claim_element(p_nodes, "SPAN", {});
      var span_nodes = children(span);
      t6 = claim_text(span_nodes, "#");
      span_nodes.forEach(detach_dev);
      t7 = claim_text(p_nodes, "internetesnuestro y se nos esta yendo de las manos... \n\t\t\t\tUN ESPACIO CON HERRAMIENTAS Y MUCHA DATA PARA ACTIVAR UNA BUENA CONVIVENCIA EN INTERNET\n\t\t\t\tSUMATE!");
      p_nodes.forEach(detach_dev);
      t8 = claim_space(div0_nodes);
      img2 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t9 = claim_space(div0_nodes);
      br = claim_element(div0_nodes, "BR", {});
      t10 = claim_space(div0_nodes);
      a = claim_element(div0_nodes, "A", {
        class: true,
        href: true,
        download: true
      });
      var a_nodes = children(a);
      t11 = claim_text(a_nodes, "DESCARGÁ EL LIBRO");
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "width", "300");
      if (img0.src !== (img0_src_value = "logo-circular.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Conoce a tu mente para que tu mente no te domine");
      add_location(img0, file$a, 14, 2, 285);
      attr_dev(img1, "class", "float-right svelte-1qzk0ge");
      attr_dev(img1, "id", "cere");
      if (img1.src !== (img1_src_value = "cerebro_celeste.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Ok!");
      add_location(img1, file$a, 16, 3, 393);
      attr_dev(h20, "class", " text-3xl celeste-bg rounded-sm  p-1 uppercase");
      add_location(h20, file$a, 17, 3, 468);
      attr_dev(h21, "class", " text-3xl celeste-bg rounded-sm mt-5  p-1 uppercase");
      add_location(h21, file$a, 20, 3, 613);
      add_location(span, file$a, 24, 4, 799);
      attr_dev(p, "class", "font-semibold mt-6 uppercase text-xl");
      add_location(p, file$a, 23, 3, 746);
      attr_dev(img2, "class", "float-right");
      if (img2.src !== (img2_src_value = "check.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Ok!");
      add_location(img2, file$a, 28, 3, 983);
      add_location(br, file$a, 29, 3, 1038);
      attr_dev(a, "class", "fushia-bg border-2 border-black mt-10 font-semibold p-1");
      attr_dev(a, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a, "download", "");
      add_location(a, file$a, 30, 3, 1046);
      add_location(div0, file$a, 15, 2, 384);
      attr_dev(article, "class", "grid grid-cols-1 md:grid-cols-2 items-center justify-items-center flex");
      add_location(article, file$a, 13, 1, 194);
      attr_dev(div1, "class", "container mx-auto p-24 svelte-1qzk0ge");
      attr_dev(div1, "id", "home");
      add_location(div1, file$a, 12, 0, 146);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, article);
      append_dev(article, img0);
      append_dev(article, t0);
      append_dev(article, div0);
      append_dev(div0, img1);
      append_dev(div0, t1);
      append_dev(div0, h20);
      append_dev(h20, t2);
      append_dev(div0, t3);
      append_dev(div0, h21);
      append_dev(h21, t4);
      append_dev(div0, t5);
      append_dev(div0, p);
      append_dev(p, span);
      append_dev(span, t6);
      append_dev(p, t7);
      append_dev(div0, t8);
      append_dev(div0, img2);
      append_dev(div0, t9);
      append_dev(div0, br);
      append_dev(div0, t10);
      append_dev(div0, a);
      append_dev(a, t11);
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
    id: create_fragment$a.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$a($$self, $$props) {
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

  var _super = _createSuper$a(Home);

  function Home(options) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$a, create_fragment$a, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Home",
      options: options,
      id: create_fragment$a.name
    });
    return _this;
  }

  return Home;
}(SvelteComponentDev);

function fade(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
      _ref2$easing = _ref2.easing,
      easing = _ref2$easing === void 0 ? identity : _ref2$easing;

  var o = +getComputedStyle(node).opacity;
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return "opacity: ".concat(t * o);
    }
  };
}

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$9 = "src\\components\\Todaladata.svelte"; // (52:2) {#if !showAll}

function create_if_block$1(ctx) {
  var div;
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      div = element("div");
      button = element("button");
      t = text("Ver mas >>");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", {
        id: true,
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "Ver mas >>");
      button_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "id", "show-all-tik");
      attr_dev(button, "class", "svelte-1ujxkbk");
      add_location(button, file$9, 53, 3, 1637);
      attr_dev(div, "class", "text-center");
      add_location(div, file$9, 52, 2, 1608);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, button);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*click_handler*/
        ctx[1], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(52:2) {#if !showAll}",
    ctx: ctx
  });
  return block;
}

function create_fragment$9(ctx) {
  var div4;
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
  var blockquote1;
  var section1;
  var t12;
  var blockquote2;
  var section2;
  var t13;
  var t14;
  var div3;
  var blockquote3;
  var section3;
  var t15;
  var blockquote4;
  var section4;
  var t16;
  var blockquote5;
  var section5;
  var t17;
  var blockquote6;
  var section6;
  var t18;
  var blockquote7;
  var section7;
  var t19;
  var blockquote8;
  var section8;
  var t20;
  var blockquote9;
  var section9;
  var div3_class_value;
  var div3_transition;
  var t21;
  var script;
  var script_src_value;
  var current;
  var if_block = !
  /*showAll*/
  ctx[0] && create_if_block$1(ctx);
  var block = {
    c: function create() {
      div4 = element("div");
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
      t7 = text("\n\t\t\t\t\tpara activar una convivencia digital positiva");
      t8 = space();
      p = element("p");
      t9 = text("Subí un video y mencionanos en @corazonesymentes");
      t10 = space();
      div2 = element("div");
      blockquote0 = element("blockquote");
      section0 = element("section");
      t11 = space();
      blockquote1 = element("blockquote");
      section1 = element("section");
      t12 = space();
      blockquote2 = element("blockquote");
      section2 = element("section");
      t13 = space();
      if (if_block) if_block.c();
      t14 = space();
      div3 = element("div");
      blockquote3 = element("blockquote");
      section3 = element("section");
      t15 = space();
      blockquote4 = element("blockquote");
      section4 = element("section");
      t16 = space();
      blockquote5 = element("blockquote");
      section5 = element("section");
      t17 = space();
      blockquote6 = element("blockquote");
      section6 = element("section");
      t18 = space();
      blockquote7 = element("blockquote");
      section7 = element("section");
      t19 = space();
      blockquote8 = element("blockquote");
      section8 = element("section");
      t20 = space();
      blockquote9 = element("blockquote");
      section9 = element("section");
      t21 = space();
      script = element("script");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div4_nodes = children(div4);
      article = claim_element(div4_nodes, "ARTICLE", {
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
        alt: true,
        style: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span0 = claim_element(h1_nodes, "SPAN", {
        id: true,
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
      t7 = claim_text(h2_nodes, "\n\t\t\t\t\tpara activar una convivencia digital positiva");
      h2_nodes.forEach(detach_dev);
      t8 = claim_space(div0_nodes);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t9 = claim_text(p_nodes, "Subí un video y mencionanos en @corazonesymentes");
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
      blockquote1 = claim_element(div2_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote1_nodes = children(blockquote1);
      section1 = claim_element(blockquote1_nodes, "SECTION", {});
      children(section1).forEach(detach_dev);
      blockquote1_nodes.forEach(detach_dev);
      t12 = claim_space(div2_nodes);
      blockquote2 = claim_element(div2_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote2_nodes = children(blockquote2);
      section2 = claim_element(blockquote2_nodes, "SECTION", {});
      children(section2).forEach(detach_dev);
      blockquote2_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t13 = claim_space(article_nodes);
      if (if_block) if_block.l(article_nodes);
      t14 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      blockquote3 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote3_nodes = children(blockquote3);
      section3 = claim_element(blockquote3_nodes, "SECTION", {});
      children(section3).forEach(detach_dev);
      blockquote3_nodes.forEach(detach_dev);
      t15 = claim_space(div3_nodes);
      blockquote4 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote4_nodes = children(blockquote4);
      section4 = claim_element(blockquote4_nodes, "SECTION", {});
      children(section4).forEach(detach_dev);
      blockquote4_nodes.forEach(detach_dev);
      t16 = claim_space(div3_nodes);
      blockquote5 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote5_nodes = children(blockquote5);
      section5 = claim_element(blockquote5_nodes, "SECTION", {});
      children(section5).forEach(detach_dev);
      blockquote5_nodes.forEach(detach_dev);
      t17 = claim_space(div3_nodes);
      blockquote6 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote6_nodes = children(blockquote6);
      section6 = claim_element(blockquote6_nodes, "SECTION", {});
      children(section6).forEach(detach_dev);
      blockquote6_nodes.forEach(detach_dev);
      t18 = claim_space(div3_nodes);
      blockquote7 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote7_nodes = children(blockquote7);
      section7 = claim_element(blockquote7_nodes, "SECTION", {});
      children(section7).forEach(detach_dev);
      blockquote7_nodes.forEach(detach_dev);
      t19 = claim_space(div3_nodes);
      blockquote8 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote8_nodes = children(blockquote8);
      section8 = claim_element(blockquote8_nodes, "SECTION", {});
      var section8_nodes = children(section8);
      section8_nodes.forEach(detach_dev);
      blockquote8_nodes.forEach(detach_dev);
      t20 = claim_space(div3_nodes);
      blockquote9 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote9_nodes = children(blockquote9);
      section9 = claim_element(blockquote9_nodes, "SECTION", {});
      children(section9).forEach(detach_dev);
      blockquote9_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t21 = claim_space(article_nodes);
      script = claim_element(article_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script_nodes = children(script);
      script_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "width", "100");
      if (img.src !== (img_src_value = "excl_globo.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "importante");
      set_style(img, "min-width", "145px");
      add_location(img, file$9, 17, 3, 360);
      attr_dev(span0, "id", "hashtag");
      attr_dev(span0, "class", "text-7xl  celeste-text svelte-1ujxkbk");
      add_location(span0, file$9, 20, 5, 516);
      attr_dev(span1, "class", "celeste-text");
      add_location(span1, file$9, 22, 5, 592);
      attr_dev(h1, "class", "fushia-text text-6xl uppercase font-bold");
      add_location(h1, file$9, 19, 4, 457);
      attr_dev(span2, "class", "celeste-text");
      add_location(span2, file$9, 25, 47, 697);
      attr_dev(h2, "class", "fushia-text uppercase text-xl");
      add_location(h2, file$9, 25, 4, 654);
      attr_dev(p, "class", "celeste-text font-sans");
      add_location(p, file$9, 27, 4, 799);
      add_location(div0, file$9, 18, 3, 446);
      attr_dev(div1, "class", "flex items-start justify-items-center mt-10");
      add_location(div1, file$9, 16, 2, 299);
      add_location(section0, file$9, 35, 5, 1132);
      attr_dev(blockquote0, "class", "tiktok-embed");
      attr_dev(blockquote0, "cite", "https://www.tiktok.com/@corazonesymentes/video/6958468814375881989");
      attr_dev(blockquote0, "data-video-id", "6958468814375881989");
      add_location(blockquote0, file$9, 31, 3, 969);
      add_location(section1, file$9, 41, 5, 1335);
      attr_dev(blockquote1, "class", "tiktok-embed");
      attr_dev(blockquote1, "cite", "https://www.tiktok.com/@corazonesymentes/video/6954373530138053893");
      attr_dev(blockquote1, "data-video-id", "6954373530138053893");
      add_location(blockquote1, file$9, 37, 3, 1172);
      add_location(section2, file$9, 48, 5, 1543);
      attr_dev(blockquote2, "class", "tiktok-embed");
      attr_dev(blockquote2, "cite", "https://www.tiktok.com/@corazonesymentes/video/6953286503363579142");
      attr_dev(blockquote2, "data-video-id", "6953286503363579142");
      add_location(blockquote2, file$9, 44, 3, 1379);
      attr_dev(div2, "class", "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10");
      add_location(div2, file$9, 30, 2, 908);
      add_location(section3, file$9, 63, 5, 2043);
      attr_dev(blockquote3, "class", "tiktok-embed");
      attr_dev(blockquote3, "cite", "https://www.tiktok.com/@corazonesymentes/video/6951784224907152645");
      attr_dev(blockquote3, "data-video-id", "6951784224907152645");
      add_location(blockquote3, file$9, 59, 3, 1879);
      add_location(section4, file$9, 69, 5, 2247);
      attr_dev(blockquote4, "class", "tiktok-embed");
      attr_dev(blockquote4, "cite", "https://www.tiktok.com/@corazonesymentes/video/6950673518027705606");
      attr_dev(blockquote4, "data-video-id", "6950673518027705606");
      add_location(blockquote4, file$9, 65, 3, 2083);
      add_location(section5, file$9, 75, 5, 2451);
      attr_dev(blockquote5, "class", "tiktok-embed");
      attr_dev(blockquote5, "cite", "https://www.tiktok.com/@corazonesymentes/video/6948105586672274694");
      attr_dev(blockquote5, "data-video-id", "6948105586672274694");
      add_location(blockquote5, file$9, 71, 3, 2287);
      add_location(section6, file$9, 81, 4, 2654);
      attr_dev(blockquote6, "class", "tiktok-embed");
      attr_dev(blockquote6, "cite", "https://www.tiktok.com/@corazonesymentes/video/6945179190819933446");
      attr_dev(blockquote6, "data-video-id", "6945179190819933446");
      add_location(blockquote6, file$9, 77, 3, 2491);
      add_location(section7, file$9, 87, 5, 2857);
      attr_dev(blockquote7, "class", "tiktok-embed");
      attr_dev(blockquote7, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943423751316983045");
      attr_dev(blockquote7, "data-video-id", "6943423751316983045");
      add_location(blockquote7, file$9, 83, 3, 2694);
      add_location(section8, file$9, 93, 4, 3061);
      attr_dev(blockquote8, "class", "tiktok-embed");
      attr_dev(blockquote8, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943419461844094213");
      attr_dev(blockquote8, "data-video-id", "6943419461844094213");
      add_location(blockquote8, file$9, 89, 3, 2897);
      add_location(section9, file$9, 100, 5, 3271);
      attr_dev(blockquote9, "class", "tiktok-embed");
      attr_dev(blockquote9, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943253691826801925");
      attr_dev(blockquote9, "data-video-id", "6943253691826801925");
      add_location(blockquote9, file$9, 96, 3, 3107);
      attr_dev(div3, "class", div3_class_value = "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10 " + (!
      /*showAll*/
      ctx[0] ? "hidden" : ""));
      add_location(div3, file$9, 58, 2, 1743);
      script.async = true;
      if (script.src !== (script_src_value = "https://www.tiktok.com/embed.js")) attr_dev(script, "src", script_src_value);
      add_location(script, file$9, 103, 2, 3319);
      attr_dev(article, "class", "container mx-auto ");
      add_location(article, file$9, 15, 1, 260);
      attr_dev(div4, "class", "bg-black p-10");
      attr_dev(div4, "id", "toda-la-data");
      add_location(div4, file$9, 14, 0, 213);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, article);
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
      append_dev(div2, blockquote1);
      append_dev(blockquote1, section1);
      append_dev(div2, t12);
      append_dev(div2, blockquote2);
      append_dev(blockquote2, section2);
      append_dev(article, t13);
      if (if_block) if_block.m(article, null);
      append_dev(article, t14);
      append_dev(article, div3);
      append_dev(div3, blockquote3);
      append_dev(blockquote3, section3);
      append_dev(div3, t15);
      append_dev(div3, blockquote4);
      append_dev(blockquote4, section4);
      append_dev(div3, t16);
      append_dev(div3, blockquote5);
      append_dev(blockquote5, section5);
      append_dev(div3, t17);
      append_dev(div3, blockquote6);
      append_dev(blockquote6, section6);
      append_dev(div3, t18);
      append_dev(div3, blockquote7);
      append_dev(blockquote7, section7);
      append_dev(div3, t19);
      append_dev(div3, blockquote8);
      append_dev(blockquote8, section8);
      append_dev(div3, t20);
      append_dev(div3, blockquote9);
      append_dev(blockquote9, section9);
      append_dev(article, t21);
      append_dev(article, script);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!
      /*showAll*/
      ctx[0]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(article, t14);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || dirty &
      /*showAll*/
      1 && div3_class_value !== (div3_class_value = "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10 " + (!
      /*showAll*/
      ctx[0] ? "hidden" : ""))) {
        attr_dev(div3, "class", div3_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (!div3_transition) div3_transition = create_bidirectional_transition(div3, fade, {
          delay: 50,
          duration: 300
        }, true);
        div3_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!div3_transition) div3_transition = create_bidirectional_transition(div3, fade, {
        delay: 50,
        duration: 300
      }, false);
      div3_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
      if (if_block) if_block.d();
      if (detaching && div3_transition) div3_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$9($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Todaladata", slots, []);
  var showAll = false;
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Todaladata> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return $$invalidate(0, showAll = true);
  };

  $$self.$capture_state = function () {
    return {
      fade: fade,
      showAll: showAll
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("showAll" in $$props) $$invalidate(0, showAll = $$props.showAll);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [showAll, click_handler];
}

var Todaladata = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Todaladata, _SvelteComponentDev);

  var _super = _createSuper$9(Todaladata);

  function Todaladata(options) {
    var _this;

    _classCallCheck(this, Todaladata);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$9, create_fragment$9, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Todaladata",
      options: options,
      id: create_fragment$9.name
    });
    return _this;
  }

  return Todaladata;
}(SvelteComponentDev);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$8 = "src\\components\\DocumentDownload.svelte";

function create_fragment$8(ctx) {
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
      attr_dev(img, "class", "document-icon svelte-14lxvia");
      attr_dev(img, "alt", "documento");
      add_location(img, file$8, 15, 2, 295);
      attr_dev(h5, "class", "text-xs uppercase font-sans font-bold");
      add_location(h5, file$8, 17, 4, 433);
      attr_dev(h3, "class", "uppercase text-2xl font-bold text-md");
      add_location(h3, file$8, 18, 4, 511);
      attr_dev(div0, "class", "flex flex-col border-b border-black pb-3");
      add_location(div0, file$8, 16, 2, 374);
      attr_dev(div1, "class", "flex mt-5 mb-5 cursor-pointer hover:underline");
      add_location(div1, file$8, 14, 0, 209);
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
    id: create_fragment$8.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$8($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$8(DocumentDownload);

  function DocumentDownload(options) {
    var _this;

    _classCallCheck(this, DocumentDownload);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {
      chapter: 0,
      title: 1,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "DocumentDownload",
      options: options,
      id: create_fragment$8.name
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
  url: "/documents/CAPÍTULO_1_C&M.pdf"
}, {
  title: "Sesgo de confirmación: cuestionemos nuestras opiniones.",
  url: "/documents/CAPÍTULO_2_C&M.pdf"
}, {
  title: "Disonancia cognitiva: nuestro grupo no siempre tiene razón.",
  url: "/documents/CAPÍTULO_3_C&M.pdf"
}, {
  title: "Sesgo de atribución: seamos conscientes de nuestros prejuicios.",
  url: "/documents/CAPÍTULO_4_C&M.pdf"
}, {
  title: "La nueva normalidad es la diversidad",
  url: "/documents/CAPÍTULO_5_C&M.pdf"
}, {
  title: "La privacidad como valor",
  url: "/documents/CAPÍTULO_6_C&M.pdf"
}, {
  title: "Polarización: No todo es una lucha entre el bien y el mal.",
  url: "/documents/CAPÍTULO_7_C&M.pdf"
}, {
  title: "Información y desinformación en redes: No todo lo que se viraliza es verdadero.",
  url: "/documents/CAPÍTULO_8_C&M.pdf"
}];

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$7 = "src\\components\\Articulo.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
} // (32:3) {#each documents as item, index}


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
    source: "(32:3) {#each documents as item, index}",
    ctx: ctx
  });
  return block;
}

function create_fragment$7(ctx) {
  var div4;
  var article;
  var div1;
  var img0;
  var img0_src_value;
  var t0;
  var div0;
  var t1;
  var div2;
  var h3;
  var span2;
  var span0;
  var t2;
  var t3;
  var span1;
  var t4;
  var t5;
  var t6;
  var p;
  var span3;
  var t7;
  var br0;
  var t8;
  var br1;
  var t9;
  var t10;
  var a;
  var img1;
  var img1_src_value;
  var t11;
  var strong;
  var t12;
  var br2;
  var t13;
  var t14;
  var div3;
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
      div4 = element("div");
      article = element("article");
      div1 = element("div");
      img0 = element("img");
      t0 = space();
      div0 = element("div");
      t1 = space();
      div2 = element("div");
      h3 = element("h3");
      span2 = element("span");
      span0 = element("span");
      t2 = text("#");
      t3 = text("internet");
      span1 = element("span");
      t4 = text("es");
      t5 = text("nuestro");
      t6 = space();
      p = element("p");
      span3 = element("span");
      t7 = text("Escribimos un libro para que podamos ");
      br0 = element("br");
      t8 = text("\n\t\t\t\t\tcontribuir a una nueva convivencia digital positiva y empática. ");
      br1 = element("br");
      t9 = text("\n\t\t\t\t\t¡No usamos internet, estamos en él!");
      t10 = space();
      a = element("a");
      img1 = element("img");
      t11 = space();
      strong = element("strong");
      t12 = text("Descargá el libro ");
      br2 = element("br");
      t13 = text(" completo acá");
      t14 = space();
      div3 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        style: true,
        id: true
      });
      var div4_nodes = children(div4);
      article = claim_element(div4_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div1 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img0 = claim_element(div1_nodes, "IMG", {
        src: true,
        alt: true
      });
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      children(div0).forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t1 = claim_space(article_nodes);
      div2 = claim_element(article_nodes, "DIV", {});
      var div2_nodes = children(div2);
      h3 = claim_element(div2_nodes, "H3", {
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
      t2 = claim_text(span0_nodes, "#");
      span0_nodes.forEach(detach_dev);
      t3 = claim_text(span2_nodes, "internet");
      span1 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t4 = claim_text(span1_nodes, "es");
      span1_nodes.forEach(detach_dev);
      t5 = claim_text(span2_nodes, "nuestro");
      span2_nodes.forEach(detach_dev);
      h3_nodes.forEach(detach_dev);
      t6 = claim_space(div2_nodes);
      p = claim_element(div2_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      span3 = claim_element(p_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t7 = claim_text(span3_nodes, "Escribimos un libro para que podamos ");
      br0 = claim_element(span3_nodes, "BR", {});
      t8 = claim_text(span3_nodes, "\n\t\t\t\t\tcontribuir a una nueva convivencia digital positiva y empática. ");
      br1 = claim_element(span3_nodes, "BR", {});
      t9 = claim_text(span3_nodes, "\n\t\t\t\t\t¡No usamos internet, estamos en él!");
      span3_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(article_nodes);
      a = claim_element(article_nodes, "A", {
        href: true,
        download: true,
        class: true
      });
      var a_nodes = children(a);
      img1 = claim_element(a_nodes, "IMG", {
        width: true,
        src: true,
        alt: true
      });
      t11 = claim_space(a_nodes);
      strong = claim_element(a_nodes, "STRONG", {
        class: true
      });
      var strong_nodes = children(strong);
      t12 = claim_text(strong_nodes, "Descargá el libro ");
      br2 = claim_element(strong_nodes, "BR", {});
      t13 = claim_text(strong_nodes, " completo acá");
      strong_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      t14 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div3_nodes);
      }

      div3_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img0.src !== (img0_src_value = "logo-horizontal.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Corazones y mentes");
      add_location(img0, file$7, 7, 3, 301);
      add_location(div0, file$7, 8, 3, 363);
      attr_dev(div1, "class", "grid grid-col-2");
      add_location(div1, file$7, 6, 2, 268);
      attr_dev(span0, "class", "text-black");
      add_location(span0, file$7, 13, 5, 505);
      attr_dev(span1, "class", "text-black");
      add_location(span1, file$7, 13, 46, 546);
      attr_dev(span2, "class", "text-white fushia-bg tracking-tighter");
      add_location(span2, file$7, 12, 4, 447);
      attr_dev(h3, "class", "text-3xl mt-10 uppercase font-thin");
      add_location(h3, file$7, 11, 3, 395);
      add_location(br0, file$7, 17, 42, 713);
      add_location(br1, file$7, 18, 69, 787);
      attr_dev(span3, "class", "bg-white");
      add_location(span3, file$7, 16, 4, 647);
      attr_dev(p, "class", "mt-5 text-2xl font-sans");
      add_location(p, file$7, 15, 3, 607);
      add_location(div2, file$7, 10, 2, 386);
      attr_dev(img1, "width", "65");
      if (img1.src !== (img1_src_value = "cerebri.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "icono de cerebro");
      add_location(img1, file$7, 25, 3, 970);
      add_location(br2, file$7, 27, 22, 1077);
      attr_dev(strong, "class", "ml-5");
      add_location(strong, file$7, 26, 3, 1033);
      attr_dev(a, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a, "download", "");
      attr_dev(a, "class", "flex mt-10 hover:underline text-2xl");
      add_location(a, file$7, 23, 2, 864);
      attr_dev(div3, "class", "grid grid-cols-1 md:grid-cols-3 mt-10");
      add_location(div3, file$7, 30, 2, 1117);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$7, 5, 1, 230);
      attr_dev(div4, "class", "p-10 tech-back px-10 celeste-bg");
      set_style(div4, "background-image", "url(background-tech.png)");
      attr_dev(div4, "id", "libro");
      add_location(div4, file$7, 4, 0, 122);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, article);
      append_dev(article, div1);
      append_dev(div1, img0);
      append_dev(div1, t0);
      append_dev(div1, div0);
      append_dev(article, t1);
      append_dev(article, div2);
      append_dev(div2, h3);
      append_dev(h3, span2);
      append_dev(span2, span0);
      append_dev(span0, t2);
      append_dev(span2, t3);
      append_dev(span2, span1);
      append_dev(span1, t4);
      append_dev(span2, t5);
      append_dev(div2, t6);
      append_dev(div2, p);
      append_dev(p, span3);
      append_dev(span3, t7);
      append_dev(span3, br0);
      append_dev(span3, t8);
      append_dev(span3, br1);
      append_dev(span3, t9);
      append_dev(article, t10);
      append_dev(article, a);
      append_dev(a, img1);
      append_dev(a, t11);
      append_dev(a, strong);
      append_dev(strong, t12);
      append_dev(strong, br2);
      append_dev(strong, t13);
      append_dev(article, t14);
      append_dev(article, div3);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div3, null);
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

            each_blocks[_i4].m(div3, null);
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
      if (detaching) detach_dev(div4);
      destroy_each(each_blocks, detaching);
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

function instance$7($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$7(Articulo);

  function Articulo(options) {
    var _this;

    _classCallCheck(this, Articulo);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Articulo",
      options: options,
      id: create_fragment$7.name
    });
    return _this;
  }

  return Articulo;
}(SvelteComponentDev);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$6 = "src\\components\\ForoDocente.svelte";

function create_fragment$6(ctx) {
  var div4;
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
  var p;
  var t4;
  var br0;
  var t5;
  var br1;
  var t6;
  var t7;
  var div2;
  var a;
  var t8;
  var t9;
  var div3;
  var block = {
    c: function create() {
      div4 = element("div");
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
      p = element("p");
      t4 = text("Un espacio para intercambiar ideas, sugerir bibliografía,");
      br0 = element("br");
      t5 = text("\n      dialogar y debatir sobre el uso de internet, las redes sociales");
      br1 = element("br");
      t6 = text("\n       y la convivencia digital entre les jovenes y en las aulas");
      t7 = space();
      div2 = element("div");
      a = element("a");
      t8 = text("Descargá actividades para trabajar en clase");
      t9 = space();
      div3 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div4_nodes = children(div4);
      article = claim_element(div4_nodes, "ARTICLE", {
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
        id: true,
        alt: true,
        class: true
      });
      div1_nodes.forEach(detach_dev);
      t3 = claim_space(article_nodes);
      p = claim_element(article_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t4 = claim_text(p_nodes, "Un espacio para intercambiar ideas, sugerir bibliografía,");
      br0 = claim_element(p_nodes, "BR", {});
      t5 = claim_text(p_nodes, "\n      dialogar y debatir sobre el uso de internet, las redes sociales");
      br1 = claim_element(p_nodes, "BR", {});
      t6 = claim_text(p_nodes, "\n       y la convivencia digital entre les jovenes y en las aulas");
      p_nodes.forEach(detach_dev);
      t7 = claim_space(article_nodes);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      a = claim_element(div2_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a_nodes = children(a);
      t8 = claim_text(a_nodes, "Descargá actividades para trabajar en clase");
      a_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t9 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true,
        "data-url": true,
        style: true
      });
      children(div3).forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "text-blue-300");
      add_location(span, file$6, 19, 10, 716);
      attr_dev(h1, "class", "uppercase bg-white text-black text-5xl p-2 text-bold");
      add_location(h1, file$6, 18, 8, 640);
      attr_dev(div0, "class", "mr-5");
      add_location(div0, file$6, 17, 6, 613);
      if (img.src !== (img_src_value = "dialog.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "id", "dialog");
      attr_dev(img, "alt", "icono de dialogo");
      attr_dev(img, "class", "svelte-1j75uuy");
      add_location(img, file$6, 22, 6, 797);
      attr_dev(div1, "class", "flex items-center justify-start");
      add_location(div1, file$6, 16, 4, 561);
      add_location(br0, file$6, 25, 63, 981);
      add_location(br1, file$6, 26, 69, 1055);
      attr_dev(p, "class", "text-white mt-10 text-xl font-sans");
      add_location(p, file$6, 24, 4, 871);
      attr_dev(a, "href", "https://drive.google.com/file/d/1ZpCo3Kx5Og0I7tnBVIEElxa1bIkp5MEe/view?usp=sharing");
      attr_dev(a, "target", "_blank");
      attr_dev(a, "class", "bg-white uppercase mt-5 p-3 leading-6");
      add_location(a, file$6, 30, 6, 1174);
      attr_dev(div2, "class", "text-left mt-10");
      add_location(div2, file$6, 29, 4, 1138);
      attr_dev(div3, "class", "typeform-widget mt-10");
      attr_dev(div3, "data-url", "https://form.typeform.com/to/abLtziWm?typeform-medium=embed-snippet");
      set_style(div3, "width", "100%");
      set_style(div3, "height", "500px");
      add_location(div3, file$6, 37, 4, 1437);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$6, 15, 2, 521);
      attr_dev(div4, "class", "bg-black p-10");
      attr_dev(div4, "id", "foro-docente");
      add_location(div4, file$6, 14, 0, 473);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, article);
      append_dev(article, div1);
      append_dev(div1, div0);
      append_dev(div0, h1);
      append_dev(h1, span);
      append_dev(span, t0);
      append_dev(h1, t1);
      append_dev(div1, t2);
      append_dev(div1, img);
      append_dev(article, t3);
      append_dev(article, p);
      append_dev(p, t4);
      append_dev(p, br0);
      append_dev(p, t5);
      append_dev(p, br1);
      append_dev(p, t6);
      append_dev(article, t7);
      append_dev(article, div2);
      append_dev(div2, a);
      append_dev(a, t8);
      append_dev(article, t9);
      append_dev(article, div3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
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
  validate_slots("ForoDocente", slots, []);
  onMount(function () {
    (function () {
      var js,
          q,
          d = document,
          gi = d.getElementById,
          ce = d.createElement,
          gt = d.getElementsByTagName,
          id = "typef_orm",
          b = "https://embed.typeform.com/";

      if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
      }
    })();
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ForoDocente> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      onMount: onMount
    };
  };

  return [];
}

var ForoDocente = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ForoDocente, _SvelteComponentDev);

  var _super = _createSuper$6(ForoDocente);

  function ForoDocente(options) {
    var _this;

    _classCallCheck(this, ForoDocente);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ForoDocente",
      options: options,
      id: create_fragment$6.name
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

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$5 = "src\\components\\Kit.svelte"; // (58:2) {#if opened}

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
      attr_dev(p, "class", "ml-10 text-left font-sans");
      add_location(p, file$5, 58, 4, 1265);
      attr_dev(img, "class", "float-right svelte-1f4zug6");
      if (img.src !== (img_src_value = "icons/open-link.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "abrir link");
      add_location(img, file$5, 62, 6, 1378);
      attr_dev(a, "class", "download p-2 svelte-1f4zug6");
      attr_dev(a, "href",
      /*url*/
      ctx[3]);
      add_location(a, file$5, 61, 4, 1336);
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
    source: "(58:2) {#if opened}",
    ctx: ctx
  });
  return block;
}

function create_fragment$5(ctx) {
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
      attr_dev(img, "class", "document-icon hidden md:block svelte-1f4zug6");
      attr_dev(img, "alt",
      /*type*/
      ctx[1]);
      add_location(img, file$5, 50, 4, 852);
      attr_dev(h5, "class", "text-xs uppercase font-bold font-sans");
      add_location(h5, file$5, 52, 6, 983);
      attr_dev(h3, "class", "uppercase font-bold text-md text-2xl");
      add_location(h3, file$5, 53, 6, 1051);
      attr_dev(div0, "class", "flex-grow text-left flex flex-col pb-1");
      add_location(div0, file$5, 51, 4, 924);
      attr_dev(span, "class", "text-right text-2xl font-sans cursor-pointer p-1");
      add_location(span, file$5, 55, 4, 1128);
      attr_dev(div1, "class", "flex");
      add_location(div1, file$5, 49, 2, 829);
      attr_dev(div2, "class", "flex flex-col border-b border-black m-5");
      add_location(div2, file$5, 48, 0, 773);
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

  var _super = _createSuper$5(Kit);

  function Kit(options) {
    var _this;

    _classCallCheck(this, Kit);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
      description: 0,
      type: 1,
      title: 2,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Kit",
      options: options,
      id: create_fragment$5.name
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

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$4 = "src\\components\\KitHerramientas.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (42:6) {#each kits as item}


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
    source: "(42:6) {#each kits as item}",
    ctx: ctx
  });
  return block;
}

function create_fragment$4(ctx) {
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
  var br;
  var t8;
  var t9;
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
      t7 = text("Te compartimos este recursero con un poco de todo para habitar ");
      br = element("br");
      t8 = text("\n      internet de forma segura, responsable y empática.");
      t9 = space();
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
      t7 = claim_text(p_nodes, "Te compartimos este recursero con un poco de todo para habitar ");
      br = claim_element(p_nodes, "BR", {});
      t8 = claim_text(p_nodes, "\n      internet de forma segura, responsable y empática.");
      p_nodes.forEach(detach_dev);
      t9 = claim_space(article_nodes);
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
      add_location(span0, file$4, 29, 6, 899);
      attr_dev(span1, "class", "celeste-text");
      add_location(span1, file$4, 30, 6, 941);
      attr_dev(h1, "class", "uppercase text-6xl fushia-text mb-3");
      add_location(h1, file$4, 28, 4, 844);
      attr_dev(span2, "class", "fushia-bg text-2xl tracking-wide text-white p-2 uppercase text-bold");
      add_location(span2, file$4, 34, 6, 1023);
      add_location(h2, file$4, 33, 4, 1012);
      add_location(br, file$4, 37, 69, 1293);
      attr_dev(p, "class", "text-bold text-lg mt-5 mb-10 uppercase");
      add_location(p, file$4, 36, 4, 1173);
      attr_dev(div0, "class", "grid grid-cols-1 md:grid-cols-2 mt-10");
      add_location(div0, file$4, 40, 4, 1367);
      attr_dev(article, "class", "container mx-auto text-center");
      add_location(article, file$4, 27, 2, 792);
      attr_dev(div1, "class", "p-10 pt-20 svelte-fzyaxp");
      attr_dev(div1, "id", "kit-de-herramientas");
      add_location(div1, file$4, 26, 0, 740);
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
      append_dev(p, br);
      append_dev(p, t8);
      append_dev(article, t9);
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
    id: create_fragment$4.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var url = "https://spreadsheets.google.com/feeds/list/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/1/public/values?alt=json";

function instance$4($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$4(KitHerramientas);

  function KitHerramientas(options) {
    var _this;

    _classCallCheck(this, KitHerramientas);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "KitHerramientas",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  return KitHerramientas;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src\\components\\QuienesSomos.svelte";

function create_fragment$3(ctx) {
  var section;
  var div5;
  var img0;
  var img0_src_value;
  var t0;
  var h1;
  var span1;
  var t1;
  var span0;
  var t2;
  var t3;
  var div1;
  var h20;
  var span2;
  var t4;
  var t5;
  var p0;
  var t6;
  var t7;
  var p1;
  var t8;
  var t9;
  var div0;
  var a0;
  var img1;
  var img1_src_value;
  var t10;
  var a1;
  var img2;
  var img2_src_value;
  var t11;
  var a2;
  var img3;
  var img3_src_value;
  var t12;
  var a3;
  var img4;
  var img4_src_value;
  var t13;
  var a4;
  var img5;
  var img5_src_value;
  var t14;
  var div2;
  var h21;
  var span3;
  var t15;
  var t16;
  var p2;
  var t17;
  var t18;
  var p3;
  var t19;
  var t20;
  var p4;
  var t21;
  var t22;
  var a5;
  var t23;
  var t24;
  var div4;
  var h22;
  var span4;
  var t25;
  var t26;
  var p5;
  var t27;
  var t28;
  var p6;
  var t29;
  var t30;
  var div3;
  var a6;
  var img6;
  var img6_src_value;
  var t31;
  var a7;
  var img7;
  var img7_src_value;
  var t32;
  var a8;
  var img8;
  var img8_src_value;
  var t33;
  var style;
  var t34;
  var block = {
    c: function create() {
      section = element("section");
      div5 = element("div");
      img0 = element("img");
      t0 = space();
      h1 = element("h1");
      span1 = element("span");
      t1 = text("Quiénes");
      span0 = element("span");
      t2 = text("somos");
      t3 = space();
      div1 = element("div");
      h20 = element("h2");
      span2 = element("span");
      t4 = text("DEMOCRACIA EN RED");
      t5 = space();
      p0 = element("p");
      t6 = text("Trabajamos en el cruce entre la política y la tecnología digital. Elaboramos estrategias para instituciones públicas y/o movimientos activistas.");
      t7 = space();
      p1 = element("p");
      t8 = text("Desde hace 7 años, diseñamos e implementamos herramientas digitales para que la ciudadanía tenga incidencia en la toma de decisiones. Creamos soluciones de participación ciudadana para fortalecer la democracia.");
      t9 = space();
      div0 = element("div");
      a0 = element("a");
      img1 = element("img");
      t10 = space();
      a1 = element("a");
      img2 = element("img");
      t11 = space();
      a2 = element("a");
      img3 = element("img");
      t12 = space();
      a3 = element("a");
      img4 = element("img");
      t13 = space();
      a4 = element("a");
      img5 = element("img");
      t14 = space();
      div2 = element("div");
      h21 = element("h2");
      span3 = element("span");
      t15 = text("PLATAFORMA DEMOCRÁTICA");
      t16 = space();
      p2 = element("p");
      t17 = text("Creada en 2007 por la Fundación Fernando Henrique Cardoso y el Centro Edelstein de Investigaciones Sociales, con el objetivo de fortalecer la cultura y las instituciones democráticas en Brasil y América Latina.");
      t18 = space();
      p3 = element("p");
      t19 = text("Desarrollamos nuestro trabajo a través de investigaciones, publicaciones y seminarios sobre las transformaciones de la sociedad y la política en la región y en el sistema internacional, con un enfoque en los desafíos para la convivencia y la gobernabilidad democrática.");
      t20 = space();
      p4 = element("p");
      t21 = text("También desarrollamos proyectos aplicados que promueven el aprendizaje democrático de la ciudadanía, particularmente en el espacio público virtual, fomentando una cultura cívica que valora la argumentación y el pluralismo de puntos de vista.");
      t22 = space();
      a5 = element("a");
      t23 = text("web plataforma democrática");
      t24 = space();
      div4 = element("div");
      h22 = element("h2");
      span4 = element("span");
      t25 = text("asociación minu");
      t26 = space();
      p5 = element("p");
      t27 = text("Somos una Asociación Civil, sin fines de lucro, dedicada al desarrollo de programas que promueven la inclusión y la participación de los y las jóvenes en la sociedad. Nuestra misión es implementar proyectos educativos y programas tomando como punto de partida el respeto, la democracia y el pluralismo, promoviendo visiones críticas de la realidad.");
      t28 = space();
      p6 = element("p");
      t29 = text("Nuestro trabajo pretende complementar los espacios curriculares de educación formal para comprender, desde una perspectiva más didáctica y participativa, las realidades en la que estamos inmersos como sociedad. Para ello apostamos a programas como las simulaciones cívicas, talleres sobre desinformación y fake news, consumos problemáticos, bullying y grooming, entre otros. También, trabajamos con educadores para acercarles nuevas tendencias educativas y herramientas tecnológicas para que utilicen con sus estudiantes.");
      t30 = space();
      div3 = element("div");
      a6 = element("a");
      img6 = element("img");
      t31 = space();
      a7 = element("a");
      img7 = element("img");
      t32 = space();
      a8 = element("a");
      img8 = element("img");
      t33 = space();
      style = element("style");
      t34 = text("section.quienes-somos-section{\n  background-color: #AEDCEA;\n  padding:100px 0;\n  padding-left:2.5em;\n  padding-right:2.5em;\n}\n\n.quienes-somos-container{\n  max-width:980px;\n  margin:auto\n}\n\n.quienes-somos-container .logo-corazones-mentes{\n  width:500px\n}\n\n.plataforma-democratica-container a{\n  font-size:20px\n}\n\n.logos-container{\n  display:flex\n}\n\n.logos-container a img{\n  height:30px;\n}\n\n.logos-container a{\n  margin:10px\n}\n\n.quienes-somos-container h1 {\n  font-family: Staatliches;\n  line-height: 48px;\n  font-size:48px;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  padding-top:60px;\n}\n\n.quienes-somos-container h2{\n  font-family: Staatliches;\n  font-size: 25px;\n  line-height: 32px;\n  color: #000000;\n  padding:80px 0 15px 0\n}\n\n.quienes-somos-container p{\n  font-family: Circular, Helvetica, Arial, sans-serif;\n  font-size: 20px;\n  line-height: 32px;\n  color: #000000;\n  padding-bottom:20px\n}\n\n.democracia-en-red-container{\n  font-family: Staatliches;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: 0em;\n  text-align: left;\n}");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true,
        id: true
      });
      var section_nodes = children(section);
      div5 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      img0 = claim_element(div5_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div5_nodes);
      h1 = claim_element(div5_nodes, "H1", {});
      var h1_nodes = children(h1);
      span1 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t1 = claim_text(span1_nodes, "Quiénes");
      span0 = claim_element(span1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "somos");
      span0_nodes.forEach(detach_dev);
      span1_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", {});
      var h20_nodes = children(h20);
      span2 = claim_element(h20_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t4 = claim_text(span2_nodes, "DEMOCRACIA EN RED");
      span2_nodes.forEach(detach_dev);
      h20_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t6 = claim_text(p0_nodes, "Trabajamos en el cruce entre la política y la tecnología digital. Elaboramos estrategias para instituciones públicas y/o movimientos activistas.");
      p0_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "Desde hace 7 años, diseñamos e implementamos herramientas digitales para que la ciudadanía tenga incidencia en la toma de decisiones. Creamos soluciones de participación ciudadana para fortalecer la democracia.");
      p1_nodes.forEach(detach_dev);
      t9 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", {
        href: true,
        target: true
      });
      var a0_nodes = children(a0);
      img1 = claim_element(a0_nodes, "IMG", {
        src: true,
        alt: true
      });
      a0_nodes.forEach(detach_dev);
      t10 = claim_space(div0_nodes);
      a1 = claim_element(div0_nodes, "A", {
        href: true,
        target: true
      });
      var a1_nodes = children(a1);
      img2 = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true
      });
      a1_nodes.forEach(detach_dev);
      t11 = claim_space(div0_nodes);
      a2 = claim_element(div0_nodes, "A", {
        href: true,
        target: true
      });
      var a2_nodes = children(a2);
      img3 = claim_element(a2_nodes, "IMG", {
        src: true,
        alt: true
      });
      a2_nodes.forEach(detach_dev);
      t12 = claim_space(div0_nodes);
      a3 = claim_element(div0_nodes, "A", {
        href: true,
        target: true
      });
      var a3_nodes = children(a3);
      img4 = claim_element(a3_nodes, "IMG", {
        src: true,
        alt: true
      });
      a3_nodes.forEach(detach_dev);
      t13 = claim_space(div0_nodes);
      a4 = claim_element(div0_nodes, "A", {
        href: true,
        target: true
      });
      var a4_nodes = children(a4);
      img5 = claim_element(a4_nodes, "IMG", {
        src: true,
        alt: true
      });
      a4_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t14 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h21 = claim_element(div2_nodes, "H2", {});
      var h21_nodes = children(h21);
      span3 = claim_element(h21_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t15 = claim_text(span3_nodes, "PLATAFORMA DEMOCRÁTICA");
      span3_nodes.forEach(detach_dev);
      h21_nodes.forEach(detach_dev);
      t16 = claim_space(div2_nodes);
      p2 = claim_element(div2_nodes, "P", {});
      var p2_nodes = children(p2);
      t17 = claim_text(p2_nodes, "Creada en 2007 por la Fundación Fernando Henrique Cardoso y el Centro Edelstein de Investigaciones Sociales, con el objetivo de fortalecer la cultura y las instituciones democráticas en Brasil y América Latina.");
      p2_nodes.forEach(detach_dev);
      t18 = claim_space(div2_nodes);
      p3 = claim_element(div2_nodes, "P", {});
      var p3_nodes = children(p3);
      t19 = claim_text(p3_nodes, "Desarrollamos nuestro trabajo a través de investigaciones, publicaciones y seminarios sobre las transformaciones de la sociedad y la política en la región y en el sistema internacional, con un enfoque en los desafíos para la convivencia y la gobernabilidad democrática.");
      p3_nodes.forEach(detach_dev);
      t20 = claim_space(div2_nodes);
      p4 = claim_element(div2_nodes, "P", {});
      var p4_nodes = children(p4);
      t21 = claim_text(p4_nodes, "También desarrollamos proyectos aplicados que promueven el aprendizaje democrático de la ciudadanía, particularmente en el espacio público virtual, fomentando una cultura cívica que valora la argumentación y el pluralismo de puntos de vista.");
      p4_nodes.forEach(detach_dev);
      t22 = claim_space(div2_nodes);
      a5 = claim_element(div2_nodes, "A", {
        href: true,
        target: true
      });
      var a5_nodes = children(a5);
      t23 = claim_text(a5_nodes, "web plataforma democrática");
      a5_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t24 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h22 = claim_element(div4_nodes, "H2", {});
      var h22_nodes = children(h22);
      span4 = claim_element(h22_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t25 = claim_text(span4_nodes, "asociación minu");
      span4_nodes.forEach(detach_dev);
      h22_nodes.forEach(detach_dev);
      t26 = claim_space(div4_nodes);
      p5 = claim_element(div4_nodes, "P", {});
      var p5_nodes = children(p5);
      t27 = claim_text(p5_nodes, "Somos una Asociación Civil, sin fines de lucro, dedicada al desarrollo de programas que promueven la inclusión y la participación de los y las jóvenes en la sociedad. Nuestra misión es implementar proyectos educativos y programas tomando como punto de partida el respeto, la democracia y el pluralismo, promoviendo visiones críticas de la realidad.");
      p5_nodes.forEach(detach_dev);
      t28 = claim_space(div4_nodes);
      p6 = claim_element(div4_nodes, "P", {});
      var p6_nodes = children(p6);
      t29 = claim_text(p6_nodes, "Nuestro trabajo pretende complementar los espacios curriculares de educación formal para comprender, desde una perspectiva más didáctica y participativa, las realidades en la que estamos inmersos como sociedad. Para ello apostamos a programas como las simulaciones cívicas, talleres sobre desinformación y fake news, consumos problemáticos, bullying y grooming, entre otros. También, trabajamos con educadores para acercarles nuevas tendencias educativas y herramientas tecnológicas para que utilicen con sus estudiantes.");
      p6_nodes.forEach(detach_dev);
      t30 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      a6 = claim_element(div3_nodes, "A", {
        href: true,
        target: true
      });
      var a6_nodes = children(a6);
      img6 = claim_element(a6_nodes, "IMG", {
        src: true,
        alt: true
      });
      a6_nodes.forEach(detach_dev);
      t31 = claim_space(div3_nodes);
      a7 = claim_element(div3_nodes, "A", {
        href: true,
        target: true
      });
      var a7_nodes = children(a7);
      img7 = claim_element(a7_nodes, "IMG", {
        src: true,
        alt: true
      });
      a7_nodes.forEach(detach_dev);
      t32 = claim_space(div3_nodes);
      a8 = claim_element(div3_nodes, "A", {
        href: true,
        target: true
      });
      var a8_nodes = children(a8);
      img8 = claim_element(a8_nodes, "IMG", {
        src: true,
        alt: true
      });
      a8_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t33 = claim_space(section_nodes);
      style = claim_element(section_nodes, "STYLE", {});
      var style_nodes = children(style);
      t34 = claim_text(style_nodes, "section.quienes-somos-section{\n  background-color: #AEDCEA;\n  padding:100px 0;\n  padding-left:2.5em;\n  padding-right:2.5em;\n}\n\n.quienes-somos-container{\n  max-width:980px;\n  margin:auto\n}\n\n.quienes-somos-container .logo-corazones-mentes{\n  width:500px\n}\n\n.plataforma-democratica-container a{\n  font-size:20px\n}\n\n.logos-container{\n  display:flex\n}\n\n.logos-container a img{\n  height:30px;\n}\n\n.logos-container a{\n  margin:10px\n}\n\n.quienes-somos-container h1 {\n  font-family: Staatliches;\n  line-height: 48px;\n  font-size:48px;\n  text-transform: uppercase;\n  color: #FFFFFF;\n  padding-top:60px;\n}\n\n.quienes-somos-container h2{\n  font-family: Staatliches;\n  font-size: 25px;\n  line-height: 32px;\n  color: #000000;\n  padding:80px 0 15px 0\n}\n\n.quienes-somos-container p{\n  font-family: Circular, Helvetica, Arial, sans-serif;\n  font-size: 20px;\n  line-height: 32px;\n  color: #000000;\n  padding-bottom:20px\n}\n\n.democracia-en-red-container{\n  font-family: Staatliches;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: 0em;\n  text-align: left;\n}");
      style_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", "logo-corazones-mentes");
      if (img0.src !== (img0_src_value = "logo-horizontal.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Logo de Mentes y Corazones");
      add_location(img0, file$3, 3, 8, 121);
      attr_dev(span0, "class", "text-black");
      add_location(span0, file$3, 5, 44, 271);
      attr_dev(span1, "class", "fushia-bg");
      add_location(span1, file$3, 5, 13, 240);
      add_location(h1, file$3, 5, 8, 235);
      attr_dev(span2, "class", " bg-white");
      add_location(span2, file$3, 8, 17, 393);
      add_location(h20, file$3, 8, 12, 388);
      add_location(p0, file$3, 9, 12, 460);
      add_location(p1, file$3, 10, 12, 625);
      if (img1.src !== (img1_src_value = "social-media-icons/facebook.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Logo de facebook");
      add_location(img1, file$3, 13, 84, 973);
      attr_dev(a0, "href", "https://www.facebook.com/democraciaenred/");
      attr_dev(a0, "target", "_blank");
      add_location(a0, file$3, 13, 16, 905);
      if (img2.src !== (img2_src_value = "social-media-icons/twitter.svg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Logo de twitter");
      add_location(img2, file$3, 14, 76, 1139);
      attr_dev(a1, "href", "https://twitter.com/fundacionDER");
      attr_dev(a1, "target", "_blank");
      add_location(a1, file$3, 14, 16, 1079);
      if (img3.src !== (img3_src_value = "social-media-icons/instagram.svg")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "Logo de instagram");
      add_location(img3, file$3, 15, 86, 1312);
      attr_dev(a2, "href", "https://www.instagram.com/democraciaenred/");
      attr_dev(a2, "target", "_blank");
      add_location(a2, file$3, 15, 16, 1242);
      if (img4.src !== (img4_src_value = "social-media-icons/linkedin.svg")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "Logo de linkedin");
      add_location(img4, file$3, 16, 88, 1491);
      attr_dev(a3, "href", "https://www.linkedin.com/in/democraciaenred/");
      attr_dev(a3, "target", "_blank");
      add_location(a3, file$3, 16, 16, 1419);
      if (img5.src !== (img5_src_value = "social-media-icons/youtube.svg")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "alt", "Logo de youtube");
      add_location(img5, file$3, 18, 100, 1682);
      attr_dev(a4, "href", "https://www.youtube.com/channel/UCm5n0zxmfWN0pMuMPxk7psw");
      attr_dev(a4, "target", "_blank");
      add_location(a4, file$3, 18, 16, 1598);
      attr_dev(div0, "class", "logos-container");
      add_location(div0, file$3, 12, 12, 858);
      attr_dev(div1, "class", "democracia-en-red-container");
      add_location(div1, file$3, 7, 8, 333);
      attr_dev(span3, "class", " bg-white");
      add_location(span3, file$3, 26, 17, 1883);
      add_location(h21, file$3, 26, 12, 1878);
      add_location(p2, file$3, 28, 12, 1963);
      add_location(p3, file$3, 29, 12, 2194);
      add_location(p4, file$3, 30, 12, 2484);
      attr_dev(a5, "href", "http://www.plataformademocratica.org/espanol/ ");
      attr_dev(a5, "target", "_blank ");
      add_location(a5, file$3, 32, 12, 2752);
      attr_dev(div2, "class", "plataforma-democratica-container");
      add_location(div2, file$3, 24, 8, 1812);
      attr_dev(span4, "class", " bg-white");
      add_location(span4, file$3, 37, 17, 2975);
      add_location(h22, file$3, 37, 12, 2970);
      add_location(p5, file$3, 39, 12, 3046);
      add_location(p6, file$3, 40, 12, 3416);
      if (img6.src !== (img6_src_value = "social-media-icons/twitter.svg")) attr_dev(img6, "src", img6_src_value);
      attr_dev(img6, "alt", "Logo de twitter");
      add_location(img6, file$3, 43, 78, 4073);
      attr_dev(a6, "href", "https://twitter.com/asociacionminu");
      attr_dev(a6, "target", "_blank");
      add_location(a6, file$3, 43, 16, 4011);
      if (img7.src !== (img7_src_value = "social-media-icons/instagram.svg")) attr_dev(img7, "src", img7_src_value);
      attr_dev(img7, "alt", "Logo de instagram");
      add_location(img7, file$3, 44, 85, 4231);
      attr_dev(a7, "href", "https://www.instagram.com/asociacionminu/");
      attr_dev(a7, "target", "_blank");
      add_location(a7, file$3, 44, 16, 4162);
      if (img8.src !== (img8_src_value = "social-media-icons/facebook.svg")) attr_dev(img8, "src", img8_src_value);
      attr_dev(img8, "alt", "Logo de facebook");
      add_location(img8, file$3, 45, 82, 4392);
      attr_dev(a8, "href", "https://www.facebook.com/asociacionminu");
      attr_dev(a8, "target", "_blank");
      add_location(a8, file$3, 45, 16, 4326);
      attr_dev(div3, "class", "logos-container");
      add_location(div3, file$3, 42, 12, 3964);
      attr_dev(div4, "class", "plataforma-democratica-container");
      add_location(div4, file$3, 35, 8, 2896);
      attr_dev(div5, "class", "quienes-somos-container");
      add_location(div5, file$3, 1, 4, 64);
      add_location(style, file$3, 53, 4, 4556);
      attr_dev(section, "class", "quienes-somos-section");
      attr_dev(section, "id", "quienes-somos");
      add_location(section, file$3, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div5);
      append_dev(div5, img0);
      append_dev(div5, t0);
      append_dev(div5, h1);
      append_dev(h1, span1);
      append_dev(span1, t1);
      append_dev(span1, span0);
      append_dev(span0, t2);
      append_dev(div5, t3);
      append_dev(div5, div1);
      append_dev(div1, h20);
      append_dev(h20, span2);
      append_dev(span2, t4);
      append_dev(div1, t5);
      append_dev(div1, p0);
      append_dev(p0, t6);
      append_dev(div1, t7);
      append_dev(div1, p1);
      append_dev(p1, t8);
      append_dev(div1, t9);
      append_dev(div1, div0);
      append_dev(div0, a0);
      append_dev(a0, img1);
      append_dev(div0, t10);
      append_dev(div0, a1);
      append_dev(a1, img2);
      append_dev(div0, t11);
      append_dev(div0, a2);
      append_dev(a2, img3);
      append_dev(div0, t12);
      append_dev(div0, a3);
      append_dev(a3, img4);
      append_dev(div0, t13);
      append_dev(div0, a4);
      append_dev(a4, img5);
      append_dev(div5, t14);
      append_dev(div5, div2);
      append_dev(div2, h21);
      append_dev(h21, span3);
      append_dev(span3, t15);
      append_dev(div2, t16);
      append_dev(div2, p2);
      append_dev(p2, t17);
      append_dev(div2, t18);
      append_dev(div2, p3);
      append_dev(p3, t19);
      append_dev(div2, t20);
      append_dev(div2, p4);
      append_dev(p4, t21);
      append_dev(div2, t22);
      append_dev(div2, a5);
      append_dev(a5, t23);
      append_dev(div5, t24);
      append_dev(div5, div4);
      append_dev(div4, h22);
      append_dev(h22, span4);
      append_dev(span4, t25);
      append_dev(div4, t26);
      append_dev(div4, p5);
      append_dev(p5, t27);
      append_dev(div4, t28);
      append_dev(div4, p6);
      append_dev(p6, t29);
      append_dev(div4, t30);
      append_dev(div4, div3);
      append_dev(div3, a6);
      append_dev(a6, img6);
      append_dev(div3, t31);
      append_dev(div3, a7);
      append_dev(a7, img7);
      append_dev(div3, t32);
      append_dev(div3, a8);
      append_dev(a8, img8);
      append_dev(section, t33);
      append_dev(section, style);
      append_dev(style, t34);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
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

function instance$3($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("QuienesSomos", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<QuienesSomos> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var QuienesSomos = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(QuienesSomos, _SvelteComponentDev);

  var _super = _createSuper$3(QuienesSomos);

  function QuienesSomos(options) {
    var _this;

    _classCallCheck(this, QuienesSomos);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "QuienesSomos",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  return QuienesSomos;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src\\components\\PedagogiaDigital.svelte";

function create_fragment$2(ctx) {
  var section;
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var span0;
  var t1;
  var t2;
  var br;
  var t3;
  var span1;
  var t4;
  var t5;
  var p0;
  var t6;
  var t7;
  var p1;
  var span4;
  var t8;
  var span2;
  var t9;
  var t10;
  var span3;
  var t11;
  var t12;
  var t13;
  var p2;
  var t14;
  var span5;
  var t15;
  var t16;
  var t17;
  var style;
  var t18;
  var block = {
    c: function create() {
      section = element("section");
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      span0 = element("span");
      t1 = text("¿por qué nos interesa");
      t2 = space();
      br = element("br");
      t3 = space();
      span1 = element("span");
      t4 = text("la pedagogía digital?");
      t5 = space();
      p0 = element("p");
      t6 = text("El debate en las redes sociales se convirtió en una guerra de trincheras: ya no somos libres de compartir lo que pensamos sin miedo a las agresiones o a que nos reduzcan a estereotipos.");
      t7 = space();
      p1 = element("p");
      span4 = element("span");
      t8 = text("Corazones ");
      span2 = element("span");
      t9 = text("y");
      t10 = space();
      span3 = element("span");
      t11 = text("Mentes");
      t12 = text(" apunta a cambiar eso: ¿en qué medida nuestras propias emociones, creencias y/o valores nos hacen colaborar, sin darnos cuenta, con todo el ruido que amenaza nuestra convivencia digital? Prestar atención a nuestros propios prejuicios es el primer paso para cambiar la dinámica.");
      t13 = space();
      p2 = element("p");
      t14 = text("Por eso, creamos herramientas, en distintos formatos interactivos y pensadas para trabajar en conjunto con toda la comunidad educativa, que estimulen ese ejercicio. ");
      span5 = element("span");
      t15 = text("Para que observemos nuestras propias reacciones");
      t16 = text(" y nuestras propias tendencias antes de juzgar, decidir y hacer click.");
      t17 = space();
      style = element("style");
      t18 = text(".pedagogias-digitales-section{\n  background-color:#000;\n  padding:100px 0;\n  padding-left:2.5em;\n  padding-right:2.5em;\n}\n\nimg.thumbs-up{\n  filter: invert(58%) sepia(45%) saturate(4209%) hue-rotate(219deg) brightness(96%) contrast(110%);\n  width:100px;\n  margin-right:10px;\n}\n\n.title-container{\n  display:flex;\n  align-items:flex-start;\n}\n\n.pedagogias-digitales-container h1{\n  font-family: Staatliches;\n  font-size: 48px;\n  line-height: 48px;\n  text-transform: uppercase;\n  padding-bottom:80px\n}\n\n.pedagogias-digitales-container .text-blue-300.bg-white{\n  text-transform: uppercase;\n  font-family: Staatliches;\n}\n\n.bg-ligth-blue{\n  color:#000;\n  background-color:#AEDCEA\n}\n\n.pedagogias-digitales-container{\n  max-width:980px;\n  margin:auto\n}\n\n.pedagogias-digitales-container p{\n  color:#fff;\n  font-family: Circular, Helvetica, Arial, sans-serif;\n  font-size: 20px;\n  line-height: 32px;\n  padding-bottom:20px\n}\n\n@media (max-width:480px){\n  .title-container{\n    flex-direction:column\n  }\n\n  img.thumbs-up{\n    margin-bottom:10px\n  }\n}");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      div1 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {});
      var h1_nodes = children(h1);
      span0 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "¿por qué nos interesa");
      span0_nodes.forEach(detach_dev);
      t2 = claim_space(h1_nodes);
      br = claim_element(h1_nodes, "BR", {});
      t3 = claim_space(h1_nodes);
      span1 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t4 = claim_text(span1_nodes, "la pedagogía digital?");
      span1_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", {});
      var p0_nodes = children(p0);
      t6 = claim_text(p0_nodes, "El debate en las redes sociales se convirtió en una guerra de trincheras: ya no somos libres de compartir lo que pensamos sin miedo a las agresiones o a que nos reduzcan a estereotipos.");
      p0_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {});
      var p1_nodes = children(p1);
      span4 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t8 = claim_text(span4_nodes, "Corazones ");
      span2 = claim_element(span4_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t9 = claim_text(span2_nodes, "y");
      span2_nodes.forEach(detach_dev);
      t10 = claim_space(span4_nodes);
      span3 = claim_element(span4_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t11 = claim_text(span3_nodes, "Mentes");
      span3_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      t12 = claim_text(p1_nodes, " apunta a cambiar eso: ¿en qué medida nuestras propias emociones, creencias y/o valores nos hacen colaborar, sin darnos cuenta, con todo el ruido que amenaza nuestra convivencia digital? Prestar atención a nuestros propios prejuicios es el primer paso para cambiar la dinámica.");
      p1_nodes.forEach(detach_dev);
      t13 = claim_space(div1_nodes);
      p2 = claim_element(div1_nodes, "P", {});
      var p2_nodes = children(p2);
      t14 = claim_text(p2_nodes, "Por eso, creamos herramientas, en distintos formatos interactivos y pensadas para trabajar en conjunto con toda la comunidad educativa, que estimulen ese ejercicio. ");
      span5 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t15 = claim_text(span5_nodes, "Para que observemos nuestras propias reacciones");
      span5_nodes.forEach(detach_dev);
      t16 = claim_text(p2_nodes, " y nuestras propias tendencias antes de juzgar, decidir y hacer click.");
      p2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t17 = claim_space(section_nodes);
      style = claim_element(section_nodes, "STYLE", {});
      var style_nodes = children(style);
      t18 = claim_text(style_nodes, ".pedagogias-digitales-section{\n  background-color:#000;\n  padding:100px 0;\n  padding-left:2.5em;\n  padding-right:2.5em;\n}\n\nimg.thumbs-up{\n  filter: invert(58%) sepia(45%) saturate(4209%) hue-rotate(219deg) brightness(96%) contrast(110%);\n  width:100px;\n  margin-right:10px;\n}\n\n.title-container{\n  display:flex;\n  align-items:flex-start;\n}\n\n.pedagogias-digitales-container h1{\n  font-family: Staatliches;\n  font-size: 48px;\n  line-height: 48px;\n  text-transform: uppercase;\n  padding-bottom:80px\n}\n\n.pedagogias-digitales-container .text-blue-300.bg-white{\n  text-transform: uppercase;\n  font-family: Staatliches;\n}\n\n.bg-ligth-blue{\n  color:#000;\n  background-color:#AEDCEA\n}\n\n.pedagogias-digitales-container{\n  max-width:980px;\n  margin:auto\n}\n\n.pedagogias-digitales-container p{\n  color:#fff;\n  font-family: Circular, Helvetica, Arial, sans-serif;\n  font-size: 20px;\n  line-height: 32px;\n  padding-bottom:20px\n}\n\n@media (max-width:480px){\n  .title-container{\n    flex-direction:column\n  }\n\n  img.thumbs-up{\n    margin-bottom:10px\n  }\n}");
      style_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "thumbs-up");
      if (img.src !== (img_src_value = "thumbs-up.svg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "pulgar en alto");
      add_location(img, file$2, 3, 12, 149);
      attr_dev(span0, "class", "text-blue-300");
      add_location(span0, file$2, 5, 16, 249);
      add_location(br, file$2, 6, 12, 319);
      attr_dev(span1, "class", "fushia-text");
      add_location(span1, file$2, 7, 16, 341);
      add_location(h1, file$2, 4, 12, 227);
      attr_dev(div0, "class", "title-container");
      add_location(div0, file$2, 2, 8, 106);
      add_location(p0, file$2, 10, 8, 440);
      attr_dev(span2, "class", "text-black");
      add_location(span2, file$2, 13, 59, 721);
      attr_dev(span3, "class", "fushia-text");
      add_location(span3, file$2, 13, 93, 755);
      attr_dev(span4, "class", "text-blue-300 bg-white");
      add_location(span4, file$2, 13, 12, 674);
      add_location(p1, file$2, 12, 8, 657);
      attr_dev(span5, "class", "bg-ligth-blue");
      add_location(span5, file$2, 16, 177, 1287);
      add_location(p2, file$2, 15, 8, 1105);
      attr_dev(div1, "class", "pedagogias-digitales-container");
      add_location(div1, file$2, 1, 4, 52);
      add_location(style, file$2, 21, 4, 1480);
      attr_dev(section, "class", "pedagogias-digitales-section");
      add_location(section, file$2, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div1);
      append_dev(div1, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, span0);
      append_dev(span0, t1);
      append_dev(h1, t2);
      append_dev(h1, br);
      append_dev(h1, t3);
      append_dev(h1, span1);
      append_dev(span1, t4);
      append_dev(div1, t5);
      append_dev(div1, p0);
      append_dev(p0, t6);
      append_dev(div1, t7);
      append_dev(div1, p1);
      append_dev(p1, span4);
      append_dev(span4, t8);
      append_dev(span4, span2);
      append_dev(span2, t9);
      append_dev(span4, t10);
      append_dev(span4, span3);
      append_dev(span3, t11);
      append_dev(p1, t12);
      append_dev(div1, t13);
      append_dev(div1, p2);
      append_dev(p2, t14);
      append_dev(p2, span5);
      append_dev(span5, t15);
      append_dev(p2, t16);
      append_dev(section, t17);
      append_dev(section, style);
      append_dev(style, t18);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
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

function instance$2($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("PedagogiaDigital", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PedagogiaDigital> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var PedagogiaDigital = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PedagogiaDigital, _SvelteComponentDev);

  var _super = _createSuper$2(PedagogiaDigital);

  function PedagogiaDigital(options) {
    var _this;

    _classCallCheck(this, PedagogiaDigital);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PedagogiaDigital",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return PedagogiaDigital;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\Footer.svelte";

function create_fragment$1(ctx) {
  var footer;
  var div3;
  var img0;
  var img0_src_value;
  var t0;
  var div2;
  var div1;
  var small;
  var t1;
  var t2;
  var div0;
  var img1;
  var img1_src_value;
  var t3;
  var img2;
  var img2_src_value;
  var t4;
  var ul;
  var li0;
  var a0;
  var t5;
  var t6;
  var li1;
  var a1;
  var t7;
  var t8;
  var li2;
  var a2;
  var t9;
  var t10;
  var li3;
  var a3;
  var t11;
  var t12;
  var li4;
  var a4;
  var t13;
  var t14;
  var li5;
  var a5;
  var t15;
  var t16;
  var p;
  var t17;
  var a6;
  var t18;
  var block = {
    c: function create() {
      footer = element("footer");
      div3 = element("div");
      img0 = element("img");
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      small = element("small");
      t1 = text("Impulsado por:");
      t2 = space();
      div0 = element("div");
      img1 = element("img");
      t3 = space();
      img2 = element("img");
      t4 = space();
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t5 = text("Home");
      t6 = space();
      li1 = element("li");
      a1 = element("a");
      t7 = text("#todaladata");
      t8 = space();
      li2 = element("li");
      a2 = element("a");
      t9 = text("Libro");
      t10 = space();
      li3 = element("li");
      a3 = element("a");
      t11 = text("foro docente");
      t12 = space();
      li4 = element("li");
      a4 = element("a");
      t13 = text("kit de herramientas");
      t14 = space();
      li5 = element("li");
      a5 = element("a");
      t15 = text("Quiénes Somos");
      t16 = space();
      p = element("p");
      t17 = text("Todos los materiales originales están bajo una licencia de \n    ");
      a6 = element("a");
      t18 = text("Creative Commons Reconocimiento 4.0 Internacional.");
      this.h();
    },
    l: function claim(nodes) {
      footer = claim_element(nodes, "FOOTER", {
        class: true
      });
      var footer_nodes = children(footer);
      div3 = claim_element(footer_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      img0 = claim_element(div3_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      small = claim_element(div1_nodes, "SMALL", {
        class: true
      });
      var small_nodes = children(small);
      t1 = claim_text(small_nodes, "Impulsado por:");
      small_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      img1 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t3 = claim_space(div0_nodes);
      img2 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t4 = claim_space(div3_nodes);
      ul = claim_element(div3_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        class: true,
        href: true
      });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "Home");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t6 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        class: true,
        href: true
      });
      var a1_nodes = children(a1);
      t7 = claim_text(a1_nodes, "#todaladata");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t8 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", {
        class: true,
        href: true
      });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "Libro");
      a2_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t10 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", {
        class: true,
        href: true
      });
      var a3_nodes = children(a3);
      t11 = claim_text(a3_nodes, "foro docente");
      a3_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      t12 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      a4 = claim_element(li4_nodes, "A", {
        class: true,
        href: true
      });
      var a4_nodes = children(a4);
      t13 = claim_text(a4_nodes, "kit de herramientas");
      a4_nodes.forEach(detach_dev);
      li4_nodes.forEach(detach_dev);
      t14 = claim_space(ul_nodes);
      li5 = claim_element(ul_nodes, "LI", {});
      var li5_nodes = children(li5);
      a5 = claim_element(li5_nodes, "A", {
        class: true,
        href: true
      });
      var a5_nodes = children(a5);
      t15 = claim_text(a5_nodes, "Quiénes Somos");
      a5_nodes.forEach(detach_dev);
      li5_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t16 = claim_space(footer_nodes);
      p = claim_element(footer_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t17 = claim_text(p_nodes, "Todos los materiales originales están bajo una licencia de \n    ");
      a6 = claim_element(p_nodes, "A", {
        href: true,
        target: true
      });
      var a6_nodes = children(a6);
      t18 = claim_text(a6_nodes, "Creative Commons Reconocimiento 4.0 Internacional.");
      a6_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      footer_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", "logo mt-5 svelte-19ymy2v");
      if (img0.src !== (img0_src_value = "logo-circular.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "corazones y mentes logo");
      add_location(img0, file$1, 27, 6, 364);
      attr_dev(small, "class", "text-xs");
      add_location(small, file$1, 30, 10, 544);
      attr_dev(img1, "class", "developers svelte-19ymy2v");
      if (img1.src !== (img1_src_value = "developers2.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "democracya en red, plataforma democratica fundacion fhc centro edelstein");
      add_location(img1, file$1, 32, 12, 618);
      attr_dev(img2, "class", "minu svelte-19ymy2v");
      if (img2.src !== (img2_src_value = "minu-logo.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Minu asociacion civil");
      add_location(img2, file$1, 33, 12, 758);
      add_location(div0, file$1, 31, 10, 600);
      attr_dev(div1, "class", "flex flex-col justify-center align-center");
      add_location(div1, file$1, 29, 8, 478);
      attr_dev(div2, "class", "mt-10");
      add_location(div2, file$1, 28, 6, 450);
      attr_dev(a0, "class", "hover:underline");
      attr_dev(a0, "href", "#home");
      add_location(a0, file$1, 38, 12, 937);
      add_location(li0, file$1, 38, 8, 933);
      attr_dev(a1, "class", "hover:underline");
      attr_dev(a1, "href", "#toda-la-data");
      add_location(a1, file$1, 39, 12, 1003);
      add_location(li1, file$1, 39, 8, 999);
      attr_dev(a2, "class", "hover:underline");
      attr_dev(a2, "href", "#libro");
      add_location(a2, file$1, 40, 12, 1084);
      add_location(li2, file$1, 40, 8, 1080);
      attr_dev(a3, "class", "hover:underline");
      attr_dev(a3, "href", "#foro-docente");
      add_location(a3, file$1, 41, 12, 1152);
      add_location(li3, file$1, 41, 8, 1148);
      attr_dev(a4, "class", "hover:underline");
      attr_dev(a4, "href", "#kit-de-herramientas");
      add_location(a4, file$1, 42, 12, 1234);
      add_location(li4, file$1, 42, 8, 1230);
      attr_dev(a5, "class", "hover:underline");
      attr_dev(a5, "href", "#quienes-somos");
      add_location(a5, file$1, 43, 12, 1330);
      add_location(li5, file$1, 43, 8, 1326);
      attr_dev(ul, "class", "uppercase text-bold mt-5 text-left");
      add_location(ul, file$1, 37, 6, 877);
      attr_dev(div3, "class", "container fot flex justify-between align-center  svelte-19ymy2v");
      add_location(div3, file$1, 26, 2, 295);
      attr_dev(a6, "href", "https://creativecommons.org/licenses/by/4.0/deed.es");
      attr_dev(a6, "target", "_blank");
      add_location(a6, file$1, 47, 4, 1536);
      attr_dev(p, "class", "text-center text-xs text-bold mt-10");
      add_location(p, file$1, 46, 2, 1425);
      attr_dev(footer, "class", "bg-gray-200 p-20");
      add_location(footer, file$1, 25, 0, 259);
    },
    m: function mount(target, anchor) {
      insert_dev(target, footer, anchor);
      append_dev(footer, div3);
      append_dev(div3, img0);
      append_dev(div3, t0);
      append_dev(div3, div2);
      append_dev(div2, div1);
      append_dev(div1, small);
      append_dev(small, t1);
      append_dev(div1, t2);
      append_dev(div1, div0);
      append_dev(div0, img1);
      append_dev(div0, t3);
      append_dev(div0, img2);
      append_dev(div3, t4);
      append_dev(div3, ul);
      append_dev(ul, li0);
      append_dev(li0, a0);
      append_dev(a0, t5);
      append_dev(ul, t6);
      append_dev(ul, li1);
      append_dev(li1, a1);
      append_dev(a1, t7);
      append_dev(ul, t8);
      append_dev(ul, li2);
      append_dev(li2, a2);
      append_dev(a2, t9);
      append_dev(ul, t10);
      append_dev(ul, li3);
      append_dev(li3, a3);
      append_dev(a3, t11);
      append_dev(ul, t12);
      append_dev(ul, li4);
      append_dev(li4, a4);
      append_dev(a4, t13);
      append_dev(ul, t14);
      append_dev(ul, li5);
      append_dev(li5, a5);
      append_dev(a5, t15);
      append_dev(footer, t16);
      append_dev(footer, p);
      append_dev(p, t17);
      append_dev(p, a6);
      append_dev(a6, t18);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(footer);
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
var file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
  var link0;
  var link1;
  var script;
  var script_src_value;
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
  var quienessomos;
  var t6;
  var pedagogiadigital;
  var t7;
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
  quienessomos = new QuienesSomos({
    $$inline: true
  });
  pedagogiadigital = new PedagogiaDigital({
    $$inline: true
  });
  footer = new Footer({
    $$inline: true
  });
  var block = {
    c: function create() {
      link0 = element("link");
      link1 = element("link");
      script = element("script");
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
      create_component(quienessomos.$$.fragment);
      t6 = space();
      create_component(pedagogiadigital.$$.fragment);
      t7 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1oxs1s6\"]", document.head);
      link0 = claim_element(head_nodes, "LINK", {
        rel: true,
        href: true
      });
      link1 = claim_element(head_nodes, "LINK", {
        href: true,
        rel: true
      });
      script = claim_element(head_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script_nodes = children(script);
      script_nodes.forEach(detach_dev);
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
      claim_component(quienessomos.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(pedagogiadigital.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Corazones Y Mentes";
      attr_dev(link0, "rel", "preconnect");
      attr_dev(link0, "href", "https://fonts.gstatic.com");
      add_location(link0, file, 21, 1, 811);
      attr_dev(link1, "href", "https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
      attr_dev(link1, "rel", "stylesheet");
      add_location(link1, file, 22, 1, 869);
      script.async = true;
      if (script.src !== (script_src_value = "https://www.googletagmanager.com/gtag/js?id=G-LJWHDC5L57")) attr_dev(script, "src", script_src_value);
      add_location(script, file, 23, 1, 967);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, link0);
      append_dev(document.head, link1);
      append_dev(document.head, script);
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
      mount_component(quienessomos, target, anchor);
      insert_dev(target, t6, anchor);
      mount_component(pedagogiadigital, target, anchor);
      insert_dev(target, t7, anchor);
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
      transition_in(quienessomos.$$.fragment, local);
      transition_in(pedagogiadigital.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(home.$$.fragment, local);
      transition_out(todaladata.$$.fragment, local);
      transition_out(articulo.$$.fragment, local);
      transition_out(forodocente.$$.fragment, local);
      transition_out(kitherramientas.$$.fragment, local);
      transition_out(quienessomos.$$.fragment, local);
      transition_out(pedagogiadigital.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(link0);
      detach_dev(link1);
      detach_dev(script);
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
      destroy_component(quienessomos, detaching);
      if (detaching) detach_dev(t6);
      destroy_component(pedagogiadigital, detaching);
      if (detaching) detach_dev(t7);
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
  onMount(function () {
    //Global site tag (gtag.js) - Google Analytics 
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-LJWHDC5L57");
  });
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
      QuienesSomos: QuienesSomos,
      PedagogiaDigital: PedagogiaDigital,
      Footer: Footer,
      onMount: onMount
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
