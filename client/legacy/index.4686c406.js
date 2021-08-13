import { i as identity, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as init, s as safe_not_equal, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, v as validate_slots, g as element, t as text, h as claim_element, j as children, k as claim_text, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, p as append_dev, q as listen_dev, r as noop, u as space, w as claim_space, x as _slicedToArray, y as add_render_callback, z as create_bidirectional_transition, A as _createClass, B as set_data_dev, C as validate_each_argument, D as create_component, E as claim_component, F as mount_component, G as transition_in, H as transition_out, I as destroy_component, J as set_style, K as group_outros, L as check_outros, M as destroy_each, N as onMount, O as _typeof, P as assign, Q as get_spread_update, R as get_spread_object, T as run_all, U as createCommonjsModule, V as commonjsGlobal, W as getDefaultExportFromCjs, X as create_slot, Y as createEventDispatcher, Z as update_slot, $ as null_to_empty, a0 as binding_callbacks, a1 as svg_element, a2 as query_selector_all } from './client.03724290.js';

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

function _createSuper$g(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$g(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$g() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$g = "src\\components\\Todaladata.svelte"; // (51:2) {#if !showAll}

function create_if_block$2(ctx) {
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
      attr_dev(button, "class", "border border-gray-800 border-solid svelte-7zbrrr");
      add_location(button, file$g, 52, 3, 1616);
      attr_dev(div, "class", "text-center");
      add_location(div, file$g, 51, 2, 1586);
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
    id: create_if_block$2.name,
    type: "if",
    source: "(51:2) {#if !showAll}",
    ctx: ctx
  });
  return block;
}

function create_fragment$g(ctx) {
  var div5;
  var article;
  var div2;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var t1;
  var span;
  var t2;
  var t3;
  var t4;
  var div1;
  var h2;
  var t5;
  var t6;
  var p;
  var t7;
  var t8;
  var div3;
  var blockquote0;
  var section0;
  var t9;
  var blockquote1;
  var section1;
  var t10;
  var blockquote2;
  var section2;
  var t11;
  var t12;
  var div4;
  var blockquote3;
  var section3;
  var t13;
  var blockquote4;
  var section4;
  var t14;
  var blockquote5;
  var section5;
  var t15;
  var blockquote6;
  var section6;
  var t16;
  var blockquote7;
  var section7;
  var t17;
  var blockquote8;
  var section8;
  var t18;
  var blockquote9;
  var section9;
  var div4_class_value;
  var div4_transition;
  var t19;
  var script;
  var script_src_value;
  var current;
  var if_block = !
  /*showAll*/
  ctx[0] && create_if_block$2(ctx);
  var block = {
    c: function create() {
      div5 = element("div");
      article = element("article");
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      t1 = text("Toda \r\n\t\t\t\t\t\t");
      span = element("span");
      t2 = text("la");
      t3 = text("\r\n\t\t\t\t\t\tdata");
      t4 = space();
      div1 = element("div");
      h2 = element("h2");
      t5 = text("ESTAMOS EN TIK TOK para activar una convivencia digital positiva!");
      t6 = space();
      p = element("p");
      t7 = text("Subí un video y mencionanos en @corazonesymentes");
      t8 = space();
      div3 = element("div");
      blockquote0 = element("blockquote");
      section0 = element("section");
      t9 = space();
      blockquote1 = element("blockquote");
      section1 = element("section");
      t10 = space();
      blockquote2 = element("blockquote");
      section2 = element("section");
      t11 = space();
      if (if_block) if_block.c();
      t12 = space();
      div4 = element("div");
      blockquote3 = element("blockquote");
      section3 = element("section");
      t13 = space();
      blockquote4 = element("blockquote");
      section4 = element("section");
      t14 = space();
      blockquote5 = element("blockquote");
      section5 = element("section");
      t15 = space();
      blockquote6 = element("blockquote");
      section6 = element("section");
      t16 = space();
      blockquote7 = element("blockquote");
      section7 = element("section");
      t17 = space();
      blockquote8 = element("blockquote");
      section8 = element("section");
      t18 = space();
      blockquote9 = element("blockquote");
      section9 = element("section");
      t19 = space();
      script = element("script");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div5_nodes = children(div5);
      article = claim_element(div5_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Toda \r\n\t\t\t\t\t\t");
      span = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "la");
      span_nodes.forEach(detach_dev);
      t3 = claim_text(h1_nodes, "\r\n\t\t\t\t\t\tdata");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h2 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t5 = claim_text(h2_nodes, "ESTAMOS EN TIK TOK para activar una convivencia digital positiva!");
      h2_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      p = claim_element(div1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t7 = claim_text(p_nodes, "Subí un video y mencionanos en @corazonesymentes");
      p_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      blockquote0 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote0_nodes = children(blockquote0);
      section0 = claim_element(blockquote0_nodes, "SECTION", {});
      children(section0).forEach(detach_dev);
      blockquote0_nodes.forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      blockquote1 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote1_nodes = children(blockquote1);
      section1 = claim_element(blockquote1_nodes, "SECTION", {});
      children(section1).forEach(detach_dev);
      blockquote1_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      blockquote2 = claim_element(div3_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote2_nodes = children(blockquote2);
      section2 = claim_element(blockquote2_nodes, "SECTION", {});
      children(section2).forEach(detach_dev);
      blockquote2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t11 = claim_space(article_nodes);
      if (if_block) if_block.l(article_nodes);
      t12 = claim_space(article_nodes);
      div4 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      blockquote3 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote3_nodes = children(blockquote3);
      section3 = claim_element(blockquote3_nodes, "SECTION", {});
      children(section3).forEach(detach_dev);
      blockquote3_nodes.forEach(detach_dev);
      t13 = claim_space(div4_nodes);
      blockquote4 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote4_nodes = children(blockquote4);
      section4 = claim_element(blockquote4_nodes, "SECTION", {});
      children(section4).forEach(detach_dev);
      blockquote4_nodes.forEach(detach_dev);
      t14 = claim_space(div4_nodes);
      blockquote5 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote5_nodes = children(blockquote5);
      section5 = claim_element(blockquote5_nodes, "SECTION", {});
      children(section5).forEach(detach_dev);
      blockquote5_nodes.forEach(detach_dev);
      t15 = claim_space(div4_nodes);
      blockquote6 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote6_nodes = children(blockquote6);
      section6 = claim_element(blockquote6_nodes, "SECTION", {});
      children(section6).forEach(detach_dev);
      blockquote6_nodes.forEach(detach_dev);
      t16 = claim_space(div4_nodes);
      blockquote7 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote7_nodes = children(blockquote7);
      section7 = claim_element(blockquote7_nodes, "SECTION", {});
      children(section7).forEach(detach_dev);
      blockquote7_nodes.forEach(detach_dev);
      t17 = claim_space(div4_nodes);
      blockquote8 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote8_nodes = children(blockquote8);
      section8 = claim_element(blockquote8_nodes, "SECTION", {});
      var section8_nodes = children(section8);
      section8_nodes.forEach(detach_dev);
      blockquote8_nodes.forEach(detach_dev);
      t18 = claim_space(div4_nodes);
      blockquote9 = claim_element(div4_nodes, "BLOCKQUOTE", {
        class: true,
        cite: true,
        "data-video-id": true
      });
      var blockquote9_nodes = children(blockquote9);
      section9 = claim_element(blockquote9_nodes, "SECTION", {});
      children(section9).forEach(detach_dev);
      blockquote9_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t19 = claim_space(article_nodes);
      script = claim_element(article_nodes, "SCRIPT", {
        async: true,
        src: true
      });
      var script_nodes = children(script);
      script_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "excl_globo.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Signo de exclamación");
      attr_dev(img, "class", "w-12 sm:w-24");
      add_location(img, file$g, 14, 5, 383);
      attr_dev(span, "class", "text-black");
      add_location(span, file$g, 17, 6, 521);
      attr_dev(h1, "class", "fushia-text uppercase ");
      add_location(h1, file$g, 15, 5, 465);
      attr_dev(div0, "class", "flex items-center flex-wrap");
      add_location(div0, file$g, 13, 4, 335);
      attr_dev(h2, "class", "text-black uppercase  ");
      add_location(h2, file$g, 23, 5, 628);
      attr_dev(p, "class", "fushia-text font-sans ");
      add_location(p, file$g, 24, 5, 741);
      attr_dev(div1, "class", "ml-3");
      add_location(div1, file$g, 22, 4, 603);
      attr_dev(div2, "class", "grid sm:grid-cols-2 xs:grid-cols-1 gap-8 mt-10 mb-10");
      add_location(div2, file$g, 12, 3, 263);
      add_location(section0, file$g, 34, 5, 1093);
      attr_dev(blockquote0, "class", "tiktok-embed");
      attr_dev(blockquote0, "cite", "https://www.tiktok.com/@corazonesymentes/video/6958468814375881989");
      attr_dev(blockquote0, "data-video-id", "6958468814375881989");
      add_location(blockquote0, file$g, 30, 3, 926);
      add_location(section1, file$g, 40, 5, 1302);
      attr_dev(blockquote1, "class", "tiktok-embed");
      attr_dev(blockquote1, "cite", "https://www.tiktok.com/@corazonesymentes/video/6954373530138053893");
      attr_dev(blockquote1, "data-video-id", "6954373530138053893");
      add_location(blockquote1, file$g, 36, 3, 1135);
      add_location(section2, file$g, 47, 5, 1517);
      attr_dev(blockquote2, "class", "tiktok-embed");
      attr_dev(blockquote2, "cite", "https://www.tiktok.com/@corazonesymentes/video/6953286503363579142");
      attr_dev(blockquote2, "data-video-id", "6953286503363579142");
      add_location(blockquote2, file$g, 43, 3, 1349);
      attr_dev(div3, "class", "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10");
      add_location(div3, file$g, 29, 2, 864);
      add_location(section3, file$g, 62, 5, 2076);
      attr_dev(blockquote3, "class", "tiktok-embed");
      attr_dev(blockquote3, "cite", "https://www.tiktok.com/@corazonesymentes/video/6951784224907152645");
      attr_dev(blockquote3, "data-video-id", "6951784224907152645");
      add_location(blockquote3, file$g, 58, 3, 1908);
      add_location(section4, file$g, 68, 5, 2286);
      attr_dev(blockquote4, "class", "tiktok-embed");
      attr_dev(blockquote4, "cite", "https://www.tiktok.com/@corazonesymentes/video/6950673518027705606");
      attr_dev(blockquote4, "data-video-id", "6950673518027705606");
      add_location(blockquote4, file$g, 64, 3, 2118);
      add_location(section5, file$g, 74, 5, 2496);
      attr_dev(blockquote5, "class", "tiktok-embed");
      attr_dev(blockquote5, "cite", "https://www.tiktok.com/@corazonesymentes/video/6948105586672274694");
      attr_dev(blockquote5, "data-video-id", "6948105586672274694");
      add_location(blockquote5, file$g, 70, 3, 2328);
      add_location(section6, file$g, 80, 4, 2705);
      attr_dev(blockquote6, "class", "tiktok-embed");
      attr_dev(blockquote6, "cite", "https://www.tiktok.com/@corazonesymentes/video/6945179190819933446");
      attr_dev(blockquote6, "data-video-id", "6945179190819933446");
      add_location(blockquote6, file$g, 76, 3, 2538);
      add_location(section7, file$g, 86, 5, 2914);
      attr_dev(blockquote7, "class", "tiktok-embed");
      attr_dev(blockquote7, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943423751316983045");
      attr_dev(blockquote7, "data-video-id", "6943423751316983045");
      add_location(blockquote7, file$g, 82, 3, 2747);
      add_location(section8, file$g, 92, 4, 3124);
      attr_dev(blockquote8, "class", "tiktok-embed");
      attr_dev(blockquote8, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943419461844094213");
      attr_dev(blockquote8, "data-video-id", "6943419461844094213");
      add_location(blockquote8, file$g, 88, 3, 2956);
      add_location(section9, file$g, 99, 5, 3341);
      attr_dev(blockquote9, "class", "tiktok-embed");
      attr_dev(blockquote9, "cite", "https://www.tiktok.com/@corazonesymentes/video/6943253691826801925");
      attr_dev(blockquote9, "data-video-id", "6943253691826801925");
      add_location(blockquote9, file$g, 95, 3, 3173);
      attr_dev(div4, "class", div4_class_value = "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10 " + (!
      /*showAll*/
      ctx[0] ? "hidden" : ""));
      add_location(div4, file$g, 57, 2, 1771);
      script.async = true;
      if (script.src !== (script_src_value = "https://www.tiktok.com/embed.js")) attr_dev(script, "src", script_src_value);
      add_location(script, file$g, 102, 2, 3392);
      attr_dev(article, "class", "container mx-auto ");
      add_location(article, file$g, 10, 1, 218);
      attr_dev(div5, "class", "bg-white p-10");
      attr_dev(div5, "id", "toda-la-data");
      add_location(div5, file$g, 9, 0, 170);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, article);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(h1, span);
      append_dev(span, t2);
      append_dev(h1, t3);
      append_dev(div2, t4);
      append_dev(div2, div1);
      append_dev(div1, h2);
      append_dev(h2, t5);
      append_dev(div1, t6);
      append_dev(div1, p);
      append_dev(p, t7);
      append_dev(article, t8);
      append_dev(article, div3);
      append_dev(div3, blockquote0);
      append_dev(blockquote0, section0);
      append_dev(div3, t9);
      append_dev(div3, blockquote1);
      append_dev(blockquote1, section1);
      append_dev(div3, t10);
      append_dev(div3, blockquote2);
      append_dev(blockquote2, section2);
      append_dev(article, t11);
      if (if_block) if_block.m(article, null);
      append_dev(article, t12);
      append_dev(article, div4);
      append_dev(div4, blockquote3);
      append_dev(blockquote3, section3);
      append_dev(div4, t13);
      append_dev(div4, blockquote4);
      append_dev(blockquote4, section4);
      append_dev(div4, t14);
      append_dev(div4, blockquote5);
      append_dev(blockquote5, section5);
      append_dev(div4, t15);
      append_dev(div4, blockquote6);
      append_dev(blockquote6, section6);
      append_dev(div4, t16);
      append_dev(div4, blockquote7);
      append_dev(blockquote7, section7);
      append_dev(div4, t17);
      append_dev(div4, blockquote8);
      append_dev(blockquote8, section8);
      append_dev(div4, t18);
      append_dev(div4, blockquote9);
      append_dev(blockquote9, section9);
      append_dev(article, t19);
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
          if_block = create_if_block$2(ctx);
          if_block.c();
          if_block.m(article, t12);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (!current || dirty &
      /*showAll*/
      1 && div4_class_value !== (div4_class_value = "grid grid-cols-1 md:grid-cols-3 gap-1 mt-10 " + (!
      /*showAll*/
      ctx[0] ? "hidden" : ""))) {
        attr_dev(div4, "class", div4_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      add_render_callback(function () {
        if (!div4_transition) div4_transition = create_bidirectional_transition(div4, fade, {
          delay: 50,
          duration: 300
        }, true);
        div4_transition.run(1);
      });
      current = true;
    },
    o: function outro(local) {
      if (!div4_transition) div4_transition = create_bidirectional_transition(div4, fade, {
        delay: 50,
        duration: 300
      }, false);
      div4_transition.run(0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
      if (if_block) if_block.d();
      if (detaching && div4_transition) div4_transition.end();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$g.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$g($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$g(Todaladata);

  function Todaladata(options) {
    var _this;

    _classCallCheck(this, Todaladata);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$g, create_fragment$g, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Todaladata",
      options: options,
      id: create_fragment$g.name
    });
    return _this;
  }

  return Todaladata;
}(SvelteComponentDev);

function _createSuper$f(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$f(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$f() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$f = "src\\components\\DocumentDownload.svelte";

function create_fragment$f(ctx) {
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
      attr_dev(img, "alt", "Ícono de documento");
      add_location(img, file$f, 15, 2, 306);
      attr_dev(h5, "class", "text-xs uppercase font-sans font-bold");
      add_location(h5, file$f, 17, 4, 455);
      attr_dev(h3, "class", "uppercase text-2xl font-bold text-md");
      add_location(h3, file$f, 18, 4, 534);
      attr_dev(div0, "class", "flex flex-col border-b border-black pb-3");
      add_location(div0, file$f, 16, 2, 395);
      attr_dev(div1, "class", "flex mt-5 mb-5 cursor-pointer hover:underline");
      add_location(div1, file$f, 14, 0, 219);
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
    id: create_fragment$f.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$f($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$f(DocumentDownload);

  function DocumentDownload(options) {
    var _this;

    _classCallCheck(this, DocumentDownload);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$f, create_fragment$f, safe_not_equal, {
      chapter: 0,
      title: 1,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "DocumentDownload",
      options: options,
      id: create_fragment$f.name
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

function _createSuper$e(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$e(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$e() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$e = "src\\components\\Articulo.svelte";

function get_each_context$2(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  child_ctx[2] = i;
  return child_ctx;
} // (43:3) {#each documents as item, index}


function create_each_block$2(ctx) {
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
    id: create_each_block$2.name,
    type: "each",
    source: "(43:3) {#each documents as item, index}",
    ctx: ctx
  });
  return block;
}

function create_fragment$e(ctx) {
  var div6;
  var article;
  var div4;
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var span2;
  var span0;
  var t1;
  var t2;
  var span1;
  var t3;
  var t4;
  var t5;
  var h30;
  var t6;
  var t7;
  var div3;
  var h4;
  var t8;
  var br;
  var t9;
  var t10;
  var div2;
  var h31;
  var t11;
  var t12;
  var a;
  var span3;
  var t13;
  var t14;
  var div5;
  var current;
  var each_value = documents;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      div6 = element("div");
      article = element("article");
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      span2 = element("span");
      span0 = element("span");
      t1 = text("#");
      t2 = text(" internet ");
      span1 = element("span");
      t3 = text("es");
      t4 = text(" nuestro");
      t5 = space();
      h30 = element("h3");
      t6 = text("¡No usamos internet, estamos en él!");
      t7 = space();
      div3 = element("div");
      h4 = element("h4");
      t8 = text("Escribimos un libro para que podamos ");
      br = element("br");
      t9 = text("\r\n\t\t\t\tcontribuir a una nueva convivencia digital positiva y empática.");
      t10 = space();
      div2 = element("div");
      h31 = element("h3");
      t11 = text("¿Querés el libro completo?");
      t12 = space();
      a = element("a");
      span3 = element("span");
      t13 = text("Descargá el libro");
      t14 = space();
      div5 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div6 = claim_element(nodes, "DIV", {
        class: true,
        style: true,
        id: true
      });
      var div6_nodes = children(div6);
      article = claim_element(div6_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div4 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        width: true,
        src: true,
        class: true,
        alt: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span2 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      span0 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "#");
      span0_nodes.forEach(detach_dev);
      t2 = claim_text(span2_nodes, " internet ");
      span1 = claim_element(span2_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t3 = claim_text(span1_nodes, "es");
      span1_nodes.forEach(detach_dev);
      t4 = claim_text(span2_nodes, " nuestro");
      span2_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      h30 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h30_nodes = children(h30);
      t6 = claim_text(h30_nodes, "¡No usamos internet, estamos en él!");
      h30_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h4 = claim_element(div3_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t8 = claim_text(h4_nodes, "Escribimos un libro para que podamos ");
      br = claim_element(h4_nodes, "BR", {});
      t9 = claim_text(h4_nodes, "\r\n\t\t\t\tcontribuir a una nueva convivencia digital positiva y empática.");
      h4_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h31 = claim_element(div2_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t11 = claim_text(h31_nodes, "¿Querés el libro completo?");
      h31_nodes.forEach(detach_dev);
      t12 = claim_space(div2_nodes);
      a = claim_element(div2_nodes, "A", {
        href: true,
        download: true,
        class: true
      });
      var a_nodes = children(a);
      span3 = claim_element(a_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t13 = claim_text(span3_nodes, "Descargá el libro");
      span3_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t14 = claim_space(article_nodes);
      div5 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div5_nodes);
      }

      div5_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "width", "40px");
      if (img.src !== (img_src_value = "internet.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "my-auto mr-4");
      attr_dev(img, "alt", "Ícono de internet");
      add_location(img, file$e, 10, 5, 502);
      attr_dev(span0, "class", "text-black");
      add_location(span0, file$e, 13, 7, 657);
      attr_dev(span1, "class", "text-black");
      add_location(span1, file$e, 13, 50, 700);
      attr_dev(span2, "class", "text-white");
      add_location(span2, file$e, 12, 6, 623);
      attr_dev(h1, "class", "uppercase");
      add_location(h1, file$e, 11, 5, 593);
      attr_dev(div0, "class", "flex");
      add_location(div0, file$e, 9, 16, 477);
      attr_dev(h30, "class", "uppercase tracking-widest text-black ");
      add_location(h30, file$e, 16, 4, 785);
      attr_dev(div1, "class", "fushia-bg p-3 flex items-center justify-center flex-col");
      add_location(div1, file$e, 8, 12, 374);
      add_location(br, file$e, 21, 41, 1022);
      attr_dev(h4, "class", "mt-5 font-sans");
      add_location(h4, file$e, 20, 4, 952);
      attr_dev(h31, "class", " uppercase");
      add_location(h31, file$e, 25, 5, 1183);
      attr_dev(span3, "class", "fushia-bg py-2 px-5 border hover:border-gray-800 border-solid");
      add_location(span3, file$e, 29, 19, 1334);
      attr_dev(a, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a, "download", "");
      attr_dev(a, "class", "py-3");
      add_location(a, file$e, 28, 5, 1261);
      attr_dev(div2, "class", "flex justify-between items-center flex-wrap mt-5");
      add_location(div2, file$e, 24, 4, 1114);
      attr_dev(div3, "class", "my-auto");
      add_location(div3, file$e, 19, 12, 925);
      attr_dev(div4, "class", "grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 gap-8 mb-10");
      add_location(div4, file$e, 7, 2, 285);
      attr_dev(div5, "class", "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10");
      add_location(div5, file$e, 41, 2, 1516);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$e, 5, 1, 244);
      attr_dev(div6, "class", "p-10 tech-back px-2 sm:px-10 celeste-bg");
      set_style(div6, "background-color", "rgba(150, 120, 255, 0.3)");
      attr_dev(div6, "id", "libro");
      add_location(div6, file$e, 4, 0, 126);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div6, anchor);
      append_dev(div6, article);
      append_dev(article, div4);
      append_dev(div4, div1);
      append_dev(div1, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, span2);
      append_dev(span2, span0);
      append_dev(span0, t1);
      append_dev(span2, t2);
      append_dev(span2, span1);
      append_dev(span1, t3);
      append_dev(span2, t4);
      append_dev(div1, t5);
      append_dev(div1, h30);
      append_dev(h30, t6);
      append_dev(div4, t7);
      append_dev(div4, div3);
      append_dev(div3, h4);
      append_dev(h4, t8);
      append_dev(h4, br);
      append_dev(h4, t9);
      append_dev(div3, t10);
      append_dev(div3, div2);
      append_dev(div2, h31);
      append_dev(h31, t11);
      append_dev(div2, t12);
      append_dev(div2, a);
      append_dev(a, span3);
      append_dev(span3, t13);
      append_dev(article, t14);
      append_dev(article, div5);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div5, null);
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
          var child_ctx = get_each_context$2(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block$2(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div5, null);
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
      if (detaching) detach_dev(div6);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$e.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$e($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$e(Articulo);

  function Articulo(options) {
    var _this;

    _classCallCheck(this, Articulo);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$e, create_fragment$e, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Articulo",
      options: options,
      id: create_fragment$e.name
    });
    return _this;
  }

  return Articulo;
}(SvelteComponentDev);

function _createSuper$d(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$d(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$d() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$d = "src\\components\\ForoDocente.svelte";

function create_fragment$d(ctx) {
  var div5;
  var article;
  var div2;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var span1;
  var span0;
  var t1;
  var t2;
  var t3;
  var div1;
  var h20;
  var t4;
  var t5;
  var div3;
  var h21;
  var t6;
  var t7;
  var a0;
  var span2;
  var t8;
  var t9;
  var p0;
  var t10;
  var br0;
  var t11;
  var br1;
  var t12;
  var t13;
  var p1;
  var span3;
  var t14;
  var t15;
  var p2;
  var t16;
  var t17;
  var p3;
  var t18;
  var t19;
  var p4;
  var t20;
  var t21;
  var div4;
  var span4;
  var a1;
  var t22;
  var block = {
    c: function create() {
      div5 = element("div");
      article = element("article");
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      span1 = element("span");
      span0 = element("span");
      t1 = text("Foro");
      t2 = text(" docente");
      t3 = space();
      div1 = element("div");
      h20 = element("h2");
      t4 = text("Un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre les jovenes y en las aulas");
      t5 = space();
      div3 = element("div");
      h21 = element("h2");
      t6 = text("¿QUERÉS FORMAR PARTE DEL FORO?");
      t7 = space();
      a0 = element("a");
      span2 = element("span");
      t8 = text("Descargá el libro");
      t9 = space();
      p0 = element("p");
      t10 = text("Dos encuentros para trabajar estrategias y herramientas pedagógicas");
      br0 = element("br");
      t11 = text("\r\n      sobre fake news y convivencia digital positiva");
      br1 = element("br");
      t12 = text("\r\n      para trabajar en el aula y debatir con lxs estudiantes.");
      t13 = space();
      p1 = element("p");
      span3 = element("span");
      t14 = text("¡Sumate a los próximos encuentros!");
      t15 = space();
      p2 = element("p");
      t16 = text("Primer encuentro - 18/08 - 17:00 a 18:30");
      t17 = space();
      p3 = element("p");
      t18 = text("Segundo encuentro - 20/08 - 17:00 a 18:30");
      t19 = space();
      p4 = element("p");
      t20 = text("La actividad es gratuita y online vía Google Meet, con cupo limitado.");
      t21 = space();
      div4 = element("div");
      span4 = element("span");
      a1 = element("a");
      t22 = text("QUIERO INSCRIBIRME");
      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div5_nodes = children(div5);
      article = claim_element(div5_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        width: true,
        src: true,
        id: true,
        alt: true,
        class: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span1 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      span0 = claim_element(span1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t1 = claim_text(span0_nodes, "Foro");
      span0_nodes.forEach(detach_dev);
      t2 = claim_text(span1_nodes, " docente");
      span1_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t4 = claim_text(h20_nodes, "Un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre les jovenes y en las aulas");
      h20_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t5 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h21 = claim_element(div3_nodes, "H2", {});
      var h21_nodes = children(h21);
      t6 = claim_text(h21_nodes, "¿QUERÉS FORMAR PARTE DEL FORO?");
      h21_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      a0 = claim_element(div3_nodes, "A", {
        href: true,
        download: true,
        class: true
      });
      var a0_nodes = children(a0);
      span2 = claim_element(a0_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t8 = claim_text(span2_nodes, "Descargá el libro");
      span2_nodes.forEach(detach_dev);
      a0_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(article_nodes);
      p0 = claim_element(article_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t10 = claim_text(p0_nodes, "Dos encuentros para trabajar estrategias y herramientas pedagógicas");
      br0 = claim_element(p0_nodes, "BR", {});
      t11 = claim_text(p0_nodes, "\r\n      sobre fake news y convivencia digital positiva");
      br1 = claim_element(p0_nodes, "BR", {});
      t12 = claim_text(p0_nodes, "\r\n      para trabajar en el aula y debatir con lxs estudiantes.");
      p0_nodes.forEach(detach_dev);
      t13 = claim_space(article_nodes);
      p1 = claim_element(article_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      span3 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t14 = claim_text(span3_nodes, "¡Sumate a los próximos encuentros!");
      span3_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      t15 = claim_space(article_nodes);
      p2 = claim_element(article_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t16 = claim_text(p2_nodes, "Primer encuentro - 18/08 - 17:00 a 18:30");
      p2_nodes.forEach(detach_dev);
      t17 = claim_space(article_nodes);
      p3 = claim_element(article_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t18 = claim_text(p3_nodes, "Segundo encuentro - 20/08 - 17:00 a 18:30");
      p3_nodes.forEach(detach_dev);
      t19 = claim_space(article_nodes);
      p4 = claim_element(article_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t20 = claim_text(p4_nodes, "La actividad es gratuita y online vía Google Meet, con cupo limitado.");
      p4_nodes.forEach(detach_dev);
      t21 = claim_space(article_nodes);
      div4 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      span4 = claim_element(div4_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      a1 = claim_element(span4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a1_nodes = children(a1);
      t22 = claim_text(a1_nodes, "QUIERO INSCRIBIRME");
      a1_nodes.forEach(detach_dev);
      span4_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "width", "100px");
      if (img.src !== (img_src_value = "dialog.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "id", "dialog");
      attr_dev(img, "alt", "Ícono de dialogo");
      attr_dev(img, "class", "svelte-ikfrpc");
      add_location(img, file$d, 37, 8, 1171);
      attr_dev(span0, "class", "text-blue-300");
      add_location(span0, file$d, 39, 33, 1345);
      attr_dev(span1, "class", "bg-white");
      add_location(span1, file$d, 39, 10, 1322);
      attr_dev(h1, "class", "uppercase  text-black text-5xl p-2 text-bold");
      add_location(h1, file$d, 38, 8, 1253);
      attr_dev(div0, "class", "mr-5 flex");
      add_location(div0, file$d, 36, 6, 1138);
      attr_dev(h20, "class", "text-white font-sans text-xl");
      add_location(h20, file$d, 43, 4, 1460);
      attr_dev(div1, "class", "ml-3");
      add_location(div1, file$d, 42, 6, 1436);
      attr_dev(div2, "class", "flex items-center justify-start");
      add_location(div2, file$d, 35, 4, 1085);
      add_location(h21, file$d, 49, 6, 1818);
      attr_dev(span2, "class", "bg-white");
      add_location(span2, file$d, 51, 37, 1956);
      attr_dev(a0, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a0, "download", "");
      attr_dev(a0, "class", "text-lg p-1 text-black");
      add_location(a0, file$d, 50, 6, 1865);
      attr_dev(div3, "class", "fushia-bg text-2xl uppercase p-10 my-5 mx-auto text-white\ttext-center");
      add_location(div3, file$d, 48, 4, 1727);
      add_location(br0, file$d, 55, 73, 2159);
      add_location(br1, file$d, 56, 52, 2217);
      attr_dev(p0, "class", "text-white mt-10 text-xl font-sans");
      add_location(p0, file$d, 54, 4, 2038);
      attr_dev(span3, "class", "bg-ligth-blue");
      add_location(span3, file$d, 59, 58, 2354);
      attr_dev(p1, "class", "text-white mt-10 tmt-5 text-2xl font-sans ");
      add_location(p1, file$d, 59, 4, 2300);
      attr_dev(p2, "class", "text-white mt-5 text-2xl font-sans");
      add_location(p2, file$d, 60, 4, 2433);
      attr_dev(p3, "class", "text-white mt-5 text-2xl font-sans");
      add_location(p3, file$d, 61, 4, 2529);
      attr_dev(p4, "class", "text-white mt-10 text-xl font-sans");
      add_location(p4, file$d, 63, 4, 2628);
      attr_dev(a1, "href", "https://form.jotform.com/211795972886072");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "class", "uppercase mt-5 p-3 leading-6 ");
      add_location(a1, file$d, 66, 8, 2851);
      attr_dev(span4, "class", "inscripcion-talleres text-2xl svelte-ikfrpc");
      add_location(span4, file$d, 65, 6, 2797);
      attr_dev(div4, "class", "text-left mt-10 mb-10");
      add_location(div4, file$d, 64, 4, 2754);
      attr_dev(article, "class", "container mx-auto");
      add_location(article, file$d, 34, 2, 1044);
      attr_dev(div5, "class", "bg-black p-10");
      attr_dev(div5, "id", "talleres-para-docentes");
      add_location(div5, file$d, 33, 0, 985);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, article);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, span1);
      append_dev(span1, span0);
      append_dev(span0, t1);
      append_dev(span1, t2);
      append_dev(div2, t3);
      append_dev(div2, div1);
      append_dev(div1, h20);
      append_dev(h20, t4);
      append_dev(article, t5);
      append_dev(article, div3);
      append_dev(div3, h21);
      append_dev(h21, t6);
      append_dev(div3, t7);
      append_dev(div3, a0);
      append_dev(a0, span2);
      append_dev(span2, t8);
      append_dev(article, t9);
      append_dev(article, p0);
      append_dev(p0, t10);
      append_dev(p0, br0);
      append_dev(p0, t11);
      append_dev(p0, br1);
      append_dev(p0, t12);
      append_dev(article, t13);
      append_dev(article, p1);
      append_dev(p1, span3);
      append_dev(span3, t14);
      append_dev(article, t15);
      append_dev(article, p2);
      append_dev(p2, t16);
      append_dev(article, t17);
      append_dev(article, p3);
      append_dev(p3, t18);
      append_dev(article, t19);
      append_dev(article, p4);
      append_dev(p4, t20);
      append_dev(article, t21);
      append_dev(article, div4);
      append_dev(div4, span4);
      append_dev(span4, a1);
      append_dev(a1, t22);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div5);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$d.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$d($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$d(ForoDocente);

  function ForoDocente(options) {
    var _this;

    _classCallCheck(this, ForoDocente);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$d, create_fragment$d, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ForoDocente",
      options: options,
      id: create_fragment$d.name
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

function _createSuper$c(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$c(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$c() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$c = "src\\components\\Kit.svelte"; // (59:4) {#if opened}

function create_if_block$1(ctx) {
  var p;
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(
      /*description*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes,
      /*description*/
      ctx[0]);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "my-3 text-center font-sans");
      add_location(p, file$c, 59, 6, 1386);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*description*/
      1) set_data_dev(t,
      /*description*/
      ctx[0]);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(59:4) {#if opened}",
    ctx: ctx
  });
  return block;
}

function create_fragment$c(ctx) {
  var div2;
  var div0;
  var p;
  var t0;
  var t1;
  var a;
  var img0;
  var img0_src_value;
  var t2;
  var div1;
  var img1;
  var img1_src_value;
  var t3;
  var h3;
  var t4;
  var t5;
  var t6;
  var img2;
  var img2_src_value;
  var mounted;
  var dispose;
  var if_block =
  /*opened*/
  ctx[4] && create_if_block$1(ctx);
  var block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      p = element("p");
      t0 = text(
      /*type*/
      ctx[1]);
      t1 = space();
      a = element("a");
      img0 = element("img");
      t2 = space();
      div1 = element("div");
      img1 = element("img");
      t3 = space();
      h3 = element("h3");
      t4 = text(
      /*title*/
      ctx[2]);
      t5 = space();
      if (if_block) if_block.c();
      t6 = space();
      img2 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes,
      /*type*/
      ctx[1]);
      p_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      a = claim_element(div0_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      img0 = claim_element(a_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      img1 = claim_element(div1_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t3 = claim_space(div1_nodes);
      h3 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t4 = claim_text(h3_nodes,
      /*title*/
      ctx[2]);
      h3_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      if (if_block) if_block.l(div2_nodes);
      t6 = claim_space(div2_nodes);
      img2 = claim_element(div2_nodes, "IMG", {
        width: true,
        class: true,
        src: true,
        alt: true
      });
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "uppercase font-bold font-sans text-sm\t text-gray-400");
      add_location(p, file$c, 47, 4, 938);
      attr_dev(img0, "class", " float-right");
      if (img0.src !== (img0_src_value = "open.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "abrir link");
      add_location(img0, file$c, 49, 6, 1053);
      attr_dev(a, "class", " p-2");
      attr_dev(a, "href",
      /*url*/
      ctx[3]);
      add_location(a, file$c, 48, 4, 1018);
      attr_dev(div0, "class", "flex justify-end items-center mb-3");
      add_location(div0, file$c, 46, 2, 884);
      if (img1.src !== (img1_src_value =
      /*icon*/
      ctx[5])) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "class", "document-icon  md:block svelte-v8qucv");
      attr_dev(img1, "alt",
      /*type*/
      ctx[1]);
      add_location(img1, file$c, 53, 4, 1198);
      attr_dev(h3, "class", "uppercase font-bold text-md pb-1 text-center");
      add_location(h3, file$c, 55, 4, 1273);
      attr_dev(div1, "class", "flex flex-col justify-between items-center");
      add_location(div1, file$c, 52, 2, 1136);
      attr_dev(img2, "width", "20px");
      attr_dev(img2, "class", "text-right mx-auto font-sans cursor-pointer p-1");
      if (img2.src !== (img2_src_value =
      /*opened*/
      ctx[4] ? "less.png" : "more.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Ver más");
      add_location(img2, file$c, 64, 4, 1479);
      attr_dev(div2, "class", "w-3/4 md:w-11/12 mx-auto flex flex-col border justify-start border-gray-400 m-5 p-3 ");
      add_location(div2, file$c, 44, 0, 778);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, p);
      append_dev(p, t0);
      append_dev(div0, t1);
      append_dev(div0, a);
      append_dev(a, img0);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, img1);
      append_dev(div1, t3);
      append_dev(div1, h3);
      append_dev(h3, t4);
      append_dev(div2, t5);
      if (if_block) if_block.m(div2, null);
      append_dev(div2, t6);
      append_dev(div2, img2);

      if (!mounted) {
        dispose = listen_dev(img2, "click",
        /*toggle*/
        ctx[6], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*type*/
      2) set_data_dev(t0,
      /*type*/
      ctx[1]);

      if (dirty &
      /*url*/
      8) {
        attr_dev(a, "href",
        /*url*/
        ctx[3]);
      }

      if (dirty &
      /*icon*/
      32 && img1.src !== (img1_src_value =
      /*icon*/
      ctx[5])) {
        attr_dev(img1, "src", img1_src_value);
      }

      if (dirty &
      /*type*/
      2) {
        attr_dev(img1, "alt",
        /*type*/
        ctx[1]);
      }

      if (dirty &
      /*title*/
      4) set_data_dev(t4,
      /*title*/
      ctx[2]);

      if (
      /*opened*/
      ctx[4]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          if_block.m(div2, t6);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*opened*/
      16 && img2.src !== (img2_src_value =
      /*opened*/
      ctx[4] ? "less.png" : "more.png")) {
        attr_dev(img2, "src", img2_src_value);
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
    id: create_fragment$c.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$c($$self, $$props, $$invalidate) {
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

  var _super = _createSuper$c(Kit);

  function Kit(options) {
    var _this;

    _classCallCheck(this, Kit);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$c, create_fragment$c, safe_not_equal, {
      description: 0,
      type: 1,
      title: 2,
      url: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Kit",
      options: options,
      id: create_fragment$c.name
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

function _createSuper$b(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$b(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$b() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$b = "src\\components\\KitHerramientas.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
} // (75:8) {#each newKits as item}


function create_each_block$1(ctx) {
  var kit;
  var current;
  var kit_spread_levels = [
  /*item*/
  ctx[9]];
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
      /*newKits*/
      1 ? get_spread_update(kit_spread_levels, [get_spread_object(
      /*item*/
      ctx[9])]) : {};
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
    id: create_each_block$1.name,
    type: "each",
    source: "(75:8) {#each newKits as item}",
    ctx: ctx
  });
  return block;
}

function create_fragment$b(ctx) {
  var div5;
  var article;
  var div2;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var t1;
  var t2;
  var div1;
  var p;
  var t3;
  var t4;
  var h40;
  var t5;
  var t6;
  var div3;
  var button0;
  var h41;
  var t7;
  var t8;
  var button1;
  var h42;
  var t9;
  var t10;
  var button2;
  var h43;
  var t11;
  var t12;
  var button3;
  var h44;
  var t13;
  var t14;
  var button4;
  var h45;
  var t15;
  var t16;
  var div4;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*newKits*/
  ctx[0];
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
      div5 = element("div");
      article = element("article");
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      t1 = text("Kit de herramientas");
      t2 = space();
      div1 = element("div");
      p = element("p");
      t3 = text("Te compartimos este recursero con un poco de todo para habitar internet de forma segura, responsable y empática.");
      t4 = space();
      h40 = element("h4");
      t5 = text("ENCONTRÁ ArtÍculos, podcast, reflexiones, videos y más.");
      t6 = space();
      div3 = element("div");
      button0 = element("button");
      h41 = element("h4");
      t7 = text("Artículo");
      t8 = space();
      button1 = element("button");
      h42 = element("h4");
      t9 = text("Plataforma");
      t10 = space();
      button2 = element("button");
      h43 = element("h4");
      t11 = text("Video");
      t12 = space();
      button3 = element("button");
      h44 = element("h4");
      t13 = text("Guía");
      t14 = space();
      button4 = element("button");
      h45 = element("h4");
      t15 = text("Juego");
      t16 = space();
      div4 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div5 = claim_element(nodes, "DIV", {
        class: true,
        id: true
      });
      var div5_nodes = children(div5);
      article = claim_element(div5_nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div2 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Kit de herramientas");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Te compartimos este recursero con un poco de todo para habitar internet de forma segura, responsable y empática.");
      p_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      h40 = claim_element(div1_nodes, "H4", {
        class: true
      });
      var h40_nodes = children(h40);
      t5 = claim_text(h40_nodes, "ENCONTRÁ ArtÍculos, podcast, reflexiones, videos y más.");
      h40_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t6 = claim_space(article_nodes);
      div3 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      button0 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button0_nodes = children(button0);
      h41 = claim_element(button0_nodes, "H4", {});
      var h41_nodes = children(h41);
      t7 = claim_text(h41_nodes, "Artículo");
      h41_nodes.forEach(detach_dev);
      button0_nodes.forEach(detach_dev);
      t8 = claim_space(div3_nodes);
      button1 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button1_nodes = children(button1);
      h42 = claim_element(button1_nodes, "H4", {});
      var h42_nodes = children(h42);
      t9 = claim_text(h42_nodes, "Plataforma");
      h42_nodes.forEach(detach_dev);
      button1_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      button2 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button2_nodes = children(button2);
      h43 = claim_element(button2_nodes, "H4", {});
      var h43_nodes = children(h43);
      t11 = claim_text(h43_nodes, "Video");
      h43_nodes.forEach(detach_dev);
      button2_nodes.forEach(detach_dev);
      t12 = claim_space(div3_nodes);
      button3 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button3_nodes = children(button3);
      h44 = claim_element(button3_nodes, "H4", {});
      var h44_nodes = children(h44);
      t13 = claim_text(h44_nodes, "Guía");
      h44_nodes.forEach(detach_dev);
      button3_nodes.forEach(detach_dev);
      t14 = claim_space(div3_nodes);
      button4 = claim_element(div3_nodes, "BUTTON", {
        class: true
      });
      var button4_nodes = children(button4);
      h45 = claim_element(button4_nodes, "H4", {});
      var h45_nodes = children(h45);
      t15 = claim_text(h45_nodes, "Juego");
      h45_nodes.forEach(detach_dev);
      button4_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t16 = claim_space(article_nodes);
      div4 = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div4_nodes);
      }

      div4_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "mr-4 my-auto w-12 sm:w-14");
      if (img.src !== (img_src_value = "herramientas.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Logo de herramientas");
      add_location(img, file$b, 43, 10, 1202);
      attr_dev(h1, "class", "upercase fushia-text text-left\t");
      add_location(h1, file$b, 44, 10, 1303);
      attr_dev(div0, "class", "pt-10 sm:px-3 py-6 lg:p-8 flex ");
      add_location(div0, file$b, 42, 6, 1145);
      attr_dev(p, "class", "font-sans pb-3");
      add_location(p, file$b, 47, 8, 1475);
      attr_dev(h40, "class", "uppercase pb-3");
      add_location(h40, file$b, 48, 8, 1628);
      attr_dev(div1, "class", "text-white flex flex-col justify-center text-left");
      add_location(div1, file$b, 46, 6, 1402);
      attr_dev(div2, "class", "grid md:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 p-3 gap-8 mb-10 bg-black pb-10 sm:pb-0");
      add_location(div2, file$b, 40, 4, 1033);
      add_location(h41, file$b, 56, 8, 1963);
      attr_dev(button0, "class", "w-32 m-3 fushia-text border focus:text-black border-purple-400 border-solid");
      add_location(button0, file$b, 55, 6, 1821);
      add_location(h42, file$b, 59, 8, 2150);
      attr_dev(button1, "class", "w-32 m-3 fushia-text border focus:text-black border-purple-400 border-solid");
      add_location(button1, file$b, 58, 6, 2006);
      add_location(h43, file$b, 62, 8, 2334);
      attr_dev(button2, "class", "w-32\tm-3 fushia-text border focus:text-black border-purple-400 border-solid");
      add_location(button2, file$b, 61, 6, 2195);
      add_location(h44, file$b, 65, 8, 2512);
      attr_dev(button3, "class", "w-32\tm-3 fushia-text border border-purple-400 border-solid focus:text-black");
      add_location(button3, file$b, 64, 6, 2374);
      add_location(h45, file$b, 68, 8, 2690);
      attr_dev(button4, "class", "w-32\tm-3 fushia-text border focus:text-black border-purple-400 border-solid");
      add_location(button4, file$b, 67, 6, 2551);
      attr_dev(div3, "class", "flex justify-evenly flex-wrap");
      add_location(div3, file$b, 53, 4, 1768);
      attr_dev(div4, "class", "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10");
      add_location(div4, file$b, 72, 4, 2745);
      attr_dev(article, "class", "container mx-auto ");
      add_location(article, file$b, 38, 2, 989);
      attr_dev(div5, "class", "md:p-10 pt-0 sm:pt-20 bg-white  svelte-fzyaxp");
      attr_dev(div5, "id", "kit-de-herramientas");
      add_location(div5, file$b, 36, 0, 911);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div5, anchor);
      append_dev(div5, article);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, p);
      append_dev(p, t3);
      append_dev(div1, t4);
      append_dev(div1, h40);
      append_dev(h40, t5);
      append_dev(article, t6);
      append_dev(article, div3);
      append_dev(div3, button0);
      append_dev(button0, h41);
      append_dev(h41, t7);
      append_dev(div3, t8);
      append_dev(div3, button1);
      append_dev(button1, h42);
      append_dev(h42, t9);
      append_dev(div3, t10);
      append_dev(div3, button2);
      append_dev(button2, h43);
      append_dev(h43, t11);
      append_dev(div3, t12);
      append_dev(div3, button3);
      append_dev(button3, h44);
      append_dev(h44, t13);
      append_dev(div3, t14);
      append_dev(div3, button4);
      append_dev(button4, h45);
      append_dev(h45, t15);
      append_dev(article, t16);
      append_dev(article, div4);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div4, null);
      }

      current = true;

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*click_handler*/
        ctx[2], false, false, false), listen_dev(button1, "click",
        /*click_handler_1*/
        ctx[3], false, false, false), listen_dev(button2, "click",
        /*click_handler_2*/
        ctx[4], false, false, false), listen_dev(button3, "click",
        /*click_handler_3*/
        ctx[5], false, false, false), listen_dev(button4, "click",
        /*click_handler_4*/
        ctx[6], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*newKits*/
      1) {
        each_value =
        /*newKits*/
        ctx[0];
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

            each_blocks[_i4].m(div4, null);
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
      if (detaching) detach_dev(div5);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$b.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var url = "https://spreadsheets.google.com/feeds/list/16PA0-OgQxl7a47LhSAnDfSXE6s2jqTGR6LDWBxlWhSM/1/public/values?alt=json";

function instance$b($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("KitHerramientas", slots, []);
  var kits = [];
  var newKits = [];
  axios.get(url).then(function (res) {
    kits = formatSpreadsheet(res.data.feed.entry);
    $$invalidate(0, newKits = kits);
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

  function changeFilter(newFilter) {
    $$invalidate(0, newKits = kits.filter(function (kit) {
      return kit.type == newFilter;
    }));
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<KitHerramientas> was created with unknown prop '".concat(key, "'"));
  });

  var click_handler = function click_handler() {
    return changeFilter("ARTÍCULO");
  };

  var click_handler_1 = function click_handler_1() {
    return changeFilter("PLATAFORMA");
  };

  var click_handler_2 = function click_handler_2() {
    return changeFilter("VIDEO");
  };

  var click_handler_3 = function click_handler_3() {
    return changeFilter("GUÍA");
  };

  var click_handler_4 = function click_handler_4() {
    return changeFilter("JUEGO");
  };

  $$self.$capture_state = function () {
    return {
      axios: axios,
      Kit: Kit,
      kits: kits,
      url: url,
      newKits: newKits,
      formatSpreadsheet: formatSpreadsheet,
      changeFilter: changeFilter
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("kits" in $$props) kits = $$props.kits;
    if ("newKits" in $$props) $$invalidate(0, newKits = $$props.newKits);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [newKits, changeFilter, click_handler, click_handler_1, click_handler_2, click_handler_3, click_handler_4];
}

var KitHerramientas = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(KitHerramientas, _SvelteComponentDev);

  var _super = _createSuper$b(KitHerramientas);

  function KitHerramientas(options) {
    var _this;

    _classCallCheck(this, KitHerramientas);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$b, create_fragment$b, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "KitHerramientas",
      options: options,
      id: create_fragment$b.name
    });
    return _this;
  }

  return KitHerramientas;
}(SvelteComponentDev);

function _createSuper$a(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$a(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$a() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$a = "src\\components\\QuienesSomos.svelte";

function create_fragment$a(ctx) {
  var section;
  var div12;
  var div2;
  var div0;
  var img0;
  var img0_src_value;
  var t0;
  var h1;
  var t1;
  var span0;
  var t2;
  var t3;
  var div1;
  var a0;
  var t4;
  var t5;
  var a1;
  var t6;
  var t7;
  var a2;
  var t8;
  var t9;
  var div11;
  var div5;
  var h20;
  var span1;
  var t10;
  var t11;
  var div3;
  var p0;
  var b0;
  var t12;
  var t13;
  var p1;
  var t14;
  var t15;
  var div4;
  var a3;
  var img1;
  var img1_src_value;
  var t16;
  var a4;
  var img2;
  var img2_src_value;
  var t17;
  var a5;
  var img3;
  var img3_src_value;
  var t18;
  var a6;
  var img4;
  var img4_src_value;
  var t19;
  var a7;
  var img5;
  var img5_src_value;
  var t20;
  var div7;
  var h21;
  var t21;
  var t22;
  var div6;
  var p2;
  var t23;
  var b1;
  var t24;
  var t25;
  var p3;
  var t26;
  var t27;
  var p4;
  var t28;
  var t29;
  var a8;
  var t30;
  var t31;
  var div10;
  var h22;
  var t32;
  var t33;
  var div8;
  var p5;
  var b2;
  var t34;
  var t35;
  var t36;
  var p6;
  var t37;
  var t38;
  var div9;
  var a9;
  var img6;
  var img6_src_value;
  var t39;
  var a10;
  var img7;
  var img7_src_value;
  var t40;
  var a11;
  var img8;
  var img8_src_value;
  var block = {
    c: function create() {
      section = element("section");
      div12 = element("div");
      div2 = element("div");
      div0 = element("div");
      img0 = element("img");
      t0 = space();
      h1 = element("h1");
      t1 = text("¿Quienes ");
      span0 = element("span");
      t2 = text("somos?");
      t3 = space();
      div1 = element("div");
      a0 = element("a");
      t4 = text("Democracia en red");
      t5 = space();
      a1 = element("a");
      t6 = text("Plataforma democrática");
      t7 = space();
      a2 = element("a");
      t8 = text("Asociación Minu");
      t9 = space();
      div11 = element("div");
      div5 = element("div");
      h20 = element("h2");
      span1 = element("span");
      t10 = text("DEMOCRACIA EN RED");
      t11 = space();
      div3 = element("div");
      p0 = element("p");
      b0 = element("b");
      t12 = text("Trabajamos en el cruce entre la política y la tecnología digital. Elaboramos estrategias para instituciones públicas y/o movimientos activistas.");
      t13 = space();
      p1 = element("p");
      t14 = text("Desde hace 7 años, diseñamos e implementamos herramientas digitales para que la ciudadanía tenga incidencia en la toma de decisiones. Creamos soluciones de participación ciudadana para fortalecer la democracia.");
      t15 = space();
      div4 = element("div");
      a3 = element("a");
      img1 = element("img");
      t16 = space();
      a4 = element("a");
      img2 = element("img");
      t17 = space();
      a5 = element("a");
      img3 = element("img");
      t18 = space();
      a6 = element("a");
      img4 = element("img");
      t19 = space();
      a7 = element("a");
      img5 = element("img");
      t20 = space();
      div7 = element("div");
      h21 = element("h2");
      t21 = text("PLATAFORMA DEMOCRÁTICA");
      t22 = space();
      div6 = element("div");
      p2 = element("p");
      t23 = text("Creada en 2007 por la Fundación Fernando Henrique Cardoso y el Centro Edelstein de Investigaciones Sociales, con ");
      b1 = element("b");
      t24 = text("el objetivo de fortalecer la cultura y las instituciones democráticas en Brasil y América Latina.");
      t25 = space();
      p3 = element("p");
      t26 = text("Desarrollamos nuestro trabajo a través de investigaciones, publicaciones y seminarios sobre las transformaciones de la sociedad y la política en la región y en el sistema internacional, con un enfoque en los desafíos para la convivencia y la gobernabilidad democrática.");
      t27 = space();
      p4 = element("p");
      t28 = text("También desarrollamos proyectos aplicados que promueven el aprendizaje democrático de la ciudadanía, particularmente en el espacio público virtual, fomentando una cultura cívica que valora la argumentación y el pluralismo de puntos de vista.");
      t29 = space();
      a8 = element("a");
      t30 = text("web plataforma democrática");
      t31 = space();
      div10 = element("div");
      h22 = element("h2");
      t32 = text("asociación minu");
      t33 = space();
      div8 = element("div");
      p5 = element("p");
      b2 = element("b");
      t34 = text("Somos una Asociación Civil, sin fines de lucro, dedicada al desarrollo de programas que promueven la inclusión y la participación de los y las jóvenes en la sociedad.");
      t35 = text(" Nuestra misión es implementar proyectos educativos y programas tomando como punto de partida el respeto, la democracia y el pluralismo, promoviendo visiones críticas de la realidad.");
      t36 = space();
      p6 = element("p");
      t37 = text("Nuestro trabajo pretende complementar los espacios curriculares de educación formal para comprender, desde una perspectiva más didáctica y participativa, las realidades en la que estamos inmersos como sociedad. Para ello apostamos a programas como las simulaciones cívicas, talleres sobre desinformación y fake news, consumos problemáticos, bullying y grooming, entre otros. También, trabajamos con educadores para acercarles nuevas tendencias educativas y herramientas tecnológicas para que utilicen con sus estudiantes.");
      t38 = space();
      div9 = element("div");
      a9 = element("a");
      img6 = element("img");
      t39 = space();
      a10 = element("a");
      img7 = element("img");
      t40 = space();
      a11 = element("a");
      img8 = element("img");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true,
        id: true
      });
      var section_nodes = children(section);
      div12 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      div2 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img0 = claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(div0_nodes);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "¿Quienes ");
      span0 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t2 = claim_text(span0_nodes, "somos?");
      span0_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      a0 = claim_element(div1_nodes, "A", {
        href: true,
        class: true
      });
      var a0_nodes = children(a0);
      t4 = claim_text(a0_nodes, "Democracia en red");
      a0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      a1 = claim_element(div1_nodes, "A", {
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t6 = claim_text(a1_nodes, "Plataforma democrática");
      a1_nodes.forEach(detach_dev);
      t7 = claim_space(div1_nodes);
      a2 = claim_element(div1_nodes, "A", {
        href: true,
        class: true
      });
      var a2_nodes = children(a2);
      t8 = claim_text(a2_nodes, "Asociación Minu");
      a2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t9 = claim_space(div12_nodes);
      div11 = claim_element(div12_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div5 = claim_element(div11_nodes, "DIV", {
        id: true,
        class: true
      });
      var div5_nodes = children(div5);
      h20 = claim_element(div5_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      span1 = claim_element(h20_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t10 = claim_text(span1_nodes, "DEMOCRACIA EN RED");
      span1_nodes.forEach(detach_dev);
      h20_nodes.forEach(detach_dev);
      t11 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t12 = claim_text(b0_nodes, "Trabajamos en el cruce entre la política y la tecnología digital. Elaboramos estrategias para instituciones públicas y/o movimientos activistas.");
      b0_nodes.forEach(detach_dev);
      p0_nodes.forEach(detach_dev);
      t13 = claim_space(div3_nodes);
      p1 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t14 = claim_text(p1_nodes, "Desde hace 7 años, diseñamos e implementamos herramientas digitales para que la ciudadanía tenga incidencia en la toma de decisiones. Creamos soluciones de participación ciudadana para fortalecer la democracia.");
      p1_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t15 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      a3 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a3_nodes = children(a3);
      img1 = claim_element(a3_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a3_nodes.forEach(detach_dev);
      t16 = claim_space(div4_nodes);
      a4 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a4_nodes = children(a4);
      img2 = claim_element(a4_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a4_nodes.forEach(detach_dev);
      t17 = claim_space(div4_nodes);
      a5 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a5_nodes = children(a5);
      img3 = claim_element(a5_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a5_nodes.forEach(detach_dev);
      t18 = claim_space(div4_nodes);
      a6 = claim_element(div4_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a6_nodes = children(a6);
      img4 = claim_element(a6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a6_nodes.forEach(detach_dev);
      t19 = claim_space(div4_nodes);
      a7 = claim_element(div4_nodes, "A", {
        href: true,
        class: true,
        target: true
      });
      var a7_nodes = children(a7);
      img5 = claim_element(a7_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      a7_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t20 = claim_space(div11_nodes);
      div7 = claim_element(div11_nodes, "DIV", {
        id: true,
        class: true
      });
      var div7_nodes = children(div7);
      h21 = claim_element(div7_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t21 = claim_text(h21_nodes, "PLATAFORMA DEMOCRÁTICA");
      h21_nodes.forEach(detach_dev);
      t22 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      p2 = claim_element(div6_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t23 = claim_text(p2_nodes, "Creada en 2007 por la Fundación Fernando Henrique Cardoso y el Centro Edelstein de Investigaciones Sociales, con ");
      b1 = claim_element(p2_nodes, "B", {});
      var b1_nodes = children(b1);
      t24 = claim_text(b1_nodes, "el objetivo de fortalecer la cultura y las instituciones democráticas en Brasil y América Latina.");
      b1_nodes.forEach(detach_dev);
      p2_nodes.forEach(detach_dev);
      t25 = claim_space(div6_nodes);
      p3 = claim_element(div6_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t26 = claim_text(p3_nodes, "Desarrollamos nuestro trabajo a través de investigaciones, publicaciones y seminarios sobre las transformaciones de la sociedad y la política en la región y en el sistema internacional, con un enfoque en los desafíos para la convivencia y la gobernabilidad democrática.");
      p3_nodes.forEach(detach_dev);
      t27 = claim_space(div6_nodes);
      p4 = claim_element(div6_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t28 = claim_text(p4_nodes, "También desarrollamos proyectos aplicados que promueven el aprendizaje democrático de la ciudadanía, particularmente en el espacio público virtual, fomentando una cultura cívica que valora la argumentación y el pluralismo de puntos de vista.");
      p4_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t29 = claim_space(div7_nodes);
      a8 = claim_element(div7_nodes, "A", {
        class: true,
        href: true,
        target: true
      });
      var a8_nodes = children(a8);
      t30 = claim_text(a8_nodes, "web plataforma democrática");
      a8_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t31 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        id: true,
        class: true
      });
      var div10_nodes = children(div10);
      h22 = claim_element(div10_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t32 = claim_text(h22_nodes, "asociación minu");
      h22_nodes.forEach(detach_dev);
      t33 = claim_space(div10_nodes);
      div8 = claim_element(div10_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      p5 = claim_element(div8_nodes, "P", {
        class: true
      });
      var p5_nodes = children(p5);
      b2 = claim_element(p5_nodes, "B", {});
      var b2_nodes = children(b2);
      t34 = claim_text(b2_nodes, "Somos una Asociación Civil, sin fines de lucro, dedicada al desarrollo de programas que promueven la inclusión y la participación de los y las jóvenes en la sociedad.");
      b2_nodes.forEach(detach_dev);
      t35 = claim_text(p5_nodes, " Nuestra misión es implementar proyectos educativos y programas tomando como punto de partida el respeto, la democracia y el pluralismo, promoviendo visiones críticas de la realidad.");
      p5_nodes.forEach(detach_dev);
      t36 = claim_space(div8_nodes);
      p6 = claim_element(div8_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t37 = claim_text(p6_nodes, "Nuestro trabajo pretende complementar los espacios curriculares de educación formal para comprender, desde una perspectiva más didáctica y participativa, las realidades en la que estamos inmersos como sociedad. Para ello apostamos a programas como las simulaciones cívicas, talleres sobre desinformación y fake news, consumos problemáticos, bullying y grooming, entre otros. También, trabajamos con educadores para acercarles nuevas tendencias educativas y herramientas tecnológicas para que utilicen con sus estudiantes.");
      p6_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      t38 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      a9 = claim_element(div9_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a9_nodes = children(a9);
      img6 = claim_element(a9_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a9_nodes.forEach(detach_dev);
      t39 = claim_space(div9_nodes);
      a10 = claim_element(div9_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a10_nodes = children(a10);
      img7 = claim_element(a10_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a10_nodes.forEach(detach_dev);
      t40 = claim_space(div9_nodes);
      a11 = claim_element(div9_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a11_nodes = children(a11);
      img8 = claim_element(a11_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      a11_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      div12_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img0, "class", "mr-6 my-auto w-12 sm:w-16");
      if (img0.src !== (img0_src_value = "favicon.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Ícono de una persona");
      add_location(img0, file$a, 6, 16, 393);
      attr_dev(span0, "class", "fushia-text");
      add_location(span0, file$a, 7, 57, 537);
      attr_dev(h1, "class", "upercase white-text");
      add_location(h1, file$a, 7, 16, 496);
      attr_dev(div0, "class", "celeste-bg px-10 pb-3 pt-10 sm:p-10 flex justify-start sm:justify-center items-center ");
      add_location(div0, file$a, 5, 12, 275);
      attr_dev(a0, "href", "#quienes-somos-der");
      attr_dev(a0, "class", "py-2 px-10 border w-5/6 border-gray-800 border-solid uppercase text-xl mb-3");
      add_location(a0, file$a, 10, 15, 705);
      attr_dev(a1, "href", "#quienes-somos-plataforma");
      attr_dev(a1, "class", "py-2 px-10 border w-5/6 border-gray-800 border-solid uppercase text-xl mb-3");
      add_location(a1, file$a, 13, 16, 871);
      attr_dev(a2, "href", "#quienes-somos-minu");
      attr_dev(a2, "class", "py-2 px-10 border w-5/6 border-gray-800 border-solid uppercase text-xl mb-3");
      add_location(a2, file$a, 16, 16, 1072);
      attr_dev(div1, "class", "text-center my-auto flex flex-col items-center");
      add_location(div1, file$a, 9, 12, 628);
      attr_dev(div2, "class", "grid md:grid-cols-2 pb-10 sm:pb-0 celeste-bg sm:bg-white sm:grid-cols-1 gap-8 mb-10");
      add_location(div2, file$a, 3, 8, 162);
      attr_dev(span1, "class", " bg-white");
      add_location(span1, file$a, 26, 56, 1443);
      attr_dev(h20, "class", "fushia-text pb-3 uppercase");
      add_location(h20, file$a, 26, 16, 1403);
      add_location(b0, file$a, 29, 36, 1577);
      attr_dev(p0, "class", "pb-3");
      add_location(p0, file$a, 29, 20, 1561);
      attr_dev(p1, "class", "pb-3");
      add_location(p1, file$a, 30, 20, 1754);
      attr_dev(div3, "class", "font-sans");
      add_location(div3, file$a, 28, 16, 1516);
      attr_dev(img1, "class", "w-6 sm:w-8");
      if (img1.src !== (img1_src_value = "social-media-icons/facebook.svg")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Logo de facebook");
      add_location(img1, file$a, 35, 101, 2203);
      attr_dev(a3, "href", "https://www.facebook.com/democraciaenred/");
      attr_dev(a3, "target", "_blank");
      attr_dev(a3, "class", "mr-3");
      add_location(a3, file$a, 35, 20, 2122);
      attr_dev(img2, "class", "w-6 sm:w-8");
      if (img2.src !== (img2_src_value = "social-media-icons/twitter.svg")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Logo de twitter");
      add_location(img2, file$a, 36, 93, 2405);
      attr_dev(a4, "href", "https://twitter.com/fundacionDER");
      attr_dev(a4, "target", "_blank");
      attr_dev(a4, "class", "mr-3");
      add_location(a4, file$a, 36, 20, 2332);
      attr_dev(img3, "class", "w-6 sm:w-8");
      if (img3.src !== (img3_src_value = "social-media-icons/instagram.svg")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "Logo de instagram");
      add_location(img3, file$a, 37, 103, 2614);
      attr_dev(a5, "href", "https://www.instagram.com/democraciaenred/");
      attr_dev(a5, "target", "_blank");
      attr_dev(a5, "class", "mr-3");
      add_location(a5, file$a, 37, 20, 2531);
      attr_dev(img4, "class", "w-6 sm:w-8");
      if (img4.src !== (img4_src_value = "social-media-icons/linkedin.svg")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "Logo de linkedin");
      add_location(img4, file$a, 38, 105, 2829);
      attr_dev(a6, "href", "https://www.linkedin.com/in/democraciaenred/");
      attr_dev(a6, "target", "_blank");
      attr_dev(a6, "class", "mr-3");
      add_location(a6, file$a, 38, 20, 2744);
      if (img5.src !== (img5_src_value = "social-media-icons/youtube.svg")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "class", "w-6 sm:w-8");
      attr_dev(img5, "alt", "Logo de youtube");
      add_location(img5, file$a, 40, 125, 3068);
      attr_dev(a7, "href", "https://www.youtube.com/channel/UCm5n0zxmfWN0pMuMPxk7psw");
      attr_dev(a7, "class", "mr-3 my-auto");
      attr_dev(a7, "target", "_blank");
      add_location(a7, file$a, 40, 20, 2963);
      attr_dev(div4, "class", "text-2xl flex justify-end mt-3 mb-6 h-8 ");
      add_location(div4, file$a, 34, 16, 2046);
      attr_dev(div5, "id", "quienes-somos-der");
      attr_dev(div5, "class", "mb-10 ");
      add_location(div5, file$a, 24, 4, 1340);
      attr_dev(h21, "class", "fushia-text pb-3");
      add_location(h21, file$a, 47, 16, 3314);
      add_location(b1, file$a, 49, 150, 3564);
      attr_dev(p2, "class", "pb-3 ");
      add_location(p2, file$a, 49, 20, 3434);
      attr_dev(p3, "class", "pb-3 ");
      add_location(p3, file$a, 50, 20, 3694);
      attr_dev(p4, "class", "pb-3");
      add_location(p4, file$a, 51, 20, 4006);
      attr_dev(div6, "class", "font-sans");
      add_location(div6, file$a, 48, 16, 3389);
      attr_dev(a8, "class", "text-2xl  mb-6");
      attr_dev(a8, "href", "http://www.plataformademocratica.org/espanol/ ");
      attr_dev(a8, "target", "_blank ");
      add_location(a8, file$a, 55, 16, 4337);
      attr_dev(div7, "id", "quienes-somos-plataforma");
      attr_dev(div7, "class", " mb-10");
      add_location(div7, file$a, 45, 12, 3236);
      attr_dev(h22, "class", "pb-3 fushia-text uppercase");
      add_location(h22, file$a, 61, 16, 4598);
      add_location(b2, file$a, 63, 37, 4737);
      attr_dev(p5, "class", "pb-3 ");
      add_location(p5, file$a, 63, 20, 4720);
      attr_dev(p6, "class", "pb-3 ");
      add_location(p6, file$a, 64, 20, 5119);
      attr_dev(div8, "class", "font-sans");
      add_location(div8, file$a, 62, 16, 4675);
      attr_dev(img6, "class", "w-6 sm:w-8 ");
      if (img6.src !== (img6_src_value = "social-media-icons/twitter.svg")) attr_dev(img6, "src", img6_src_value);
      attr_dev(img6, "alt", "Logo de twitter");
      add_location(img6, file$a, 69, 95, 5877);
      attr_dev(a9, "href", "https://twitter.com/asociacionminu");
      attr_dev(a9, "target", "_blank");
      attr_dev(a9, "class", "mr-3");
      add_location(a9, file$a, 69, 20, 5802);
      attr_dev(img7, "class", "w-6 sm:w-8 mr-3");
      if (img7.src !== (img7_src_value = "social-media-icons/instagram.svg")) attr_dev(img7, "src", img7_src_value);
      attr_dev(img7, "alt", "Logo de instagram");
      add_location(img7, file$a, 70, 102, 6073);
      attr_dev(a10, "href", "https://www.instagram.com/asociacionminu/");
      attr_dev(a10, "target", "_blank");
      attr_dev(a10, "class", "mr-3");
      add_location(a10, file$a, 70, 20, 5991);
      attr_dev(img8, "class", "w-6 sm:w-8");
      if (img8.src !== (img8_src_value = "social-media-icons/facebook.svg")) attr_dev(img8, "src", img8_src_value);
      attr_dev(img8, "alt", "Logo de facebook");
      add_location(img8, file$a, 71, 99, 6276);
      attr_dev(a11, "href", "https://www.facebook.com/asociacionminu");
      attr_dev(a11, "target", "_blank");
      attr_dev(a11, "class", "mr-3");
      add_location(a11, file$a, 71, 20, 6197);
      attr_dev(div9, "class", "flex justify-end text-2xl mt-3 mb-6");
      add_location(div9, file$a, 68, 16, 5731);
      attr_dev(div10, "id", "quienes-somos-minu");
      attr_dev(div10, "class", "mb-10");
      add_location(div10, file$a, 59, 12, 4519);
      attr_dev(div11, "class", "p-2 sm:p-0");
      add_location(div11, file$a, 23, 8, 1310);
      attr_dev(div12, "class", "quienes-somos-container my-10 container mx-auto");
      add_location(div12, file$a, 1, 4, 81);
      attr_dev(section, "class", "quienes-somos-section sm:p-10 white-bg");
      attr_dev(section, "id", "quienes-somos");
      add_location(section, file$a, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div12);
      append_dev(div12, div2);
      append_dev(div2, div0);
      append_dev(div0, img0);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(h1, span0);
      append_dev(span0, t2);
      append_dev(div2, t3);
      append_dev(div2, div1);
      append_dev(div1, a0);
      append_dev(a0, t4);
      append_dev(div1, t5);
      append_dev(div1, a1);
      append_dev(a1, t6);
      append_dev(div1, t7);
      append_dev(div1, a2);
      append_dev(a2, t8);
      append_dev(div12, t9);
      append_dev(div12, div11);
      append_dev(div11, div5);
      append_dev(div5, h20);
      append_dev(h20, span1);
      append_dev(span1, t10);
      append_dev(div5, t11);
      append_dev(div5, div3);
      append_dev(div3, p0);
      append_dev(p0, b0);
      append_dev(b0, t12);
      append_dev(div3, t13);
      append_dev(div3, p1);
      append_dev(p1, t14);
      append_dev(div5, t15);
      append_dev(div5, div4);
      append_dev(div4, a3);
      append_dev(a3, img1);
      append_dev(div4, t16);
      append_dev(div4, a4);
      append_dev(a4, img2);
      append_dev(div4, t17);
      append_dev(div4, a5);
      append_dev(a5, img3);
      append_dev(div4, t18);
      append_dev(div4, a6);
      append_dev(a6, img4);
      append_dev(div4, t19);
      append_dev(div4, a7);
      append_dev(a7, img5);
      append_dev(div11, t20);
      append_dev(div11, div7);
      append_dev(div7, h21);
      append_dev(h21, t21);
      append_dev(div7, t22);
      append_dev(div7, div6);
      append_dev(div6, p2);
      append_dev(p2, t23);
      append_dev(p2, b1);
      append_dev(b1, t24);
      append_dev(div6, t25);
      append_dev(div6, p3);
      append_dev(p3, t26);
      append_dev(div6, t27);
      append_dev(div6, p4);
      append_dev(p4, t28);
      append_dev(div7, t29);
      append_dev(div7, a8);
      append_dev(a8, t30);
      append_dev(div11, t31);
      append_dev(div11, div10);
      append_dev(div10, h22);
      append_dev(h22, t32);
      append_dev(div10, t33);
      append_dev(div10, div8);
      append_dev(div8, p5);
      append_dev(p5, b2);
      append_dev(b2, t34);
      append_dev(p5, t35);
      append_dev(div8, t36);
      append_dev(div8, p6);
      append_dev(p6, t37);
      append_dev(div10, t38);
      append_dev(div10, div9);
      append_dev(div9, a9);
      append_dev(a9, img6);
      append_dev(div9, t39);
      append_dev(div9, a10);
      append_dev(a10, img7);
      append_dev(div9, t40);
      append_dev(div9, a11);
      append_dev(a11, img8);
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
  validate_slots("QuienesSomos", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<QuienesSomos> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var QuienesSomos = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(QuienesSomos, _SvelteComponentDev);

  var _super = _createSuper$a(QuienesSomos);

  function QuienesSomos(options) {
    var _this;

    _classCallCheck(this, QuienesSomos);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$a, create_fragment$a, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "QuienesSomos",
      options: options,
      id: create_fragment$a.name
    });
    return _this;
  }

  return QuienesSomos;
}(SvelteComponentDev);

function _createSuper$9(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$9 = "src\\components\\PedagogiaDigital.svelte";

function create_fragment$9(ctx) {
  var section;
  var article0;
  var div5;
  var div0;
  var h1;
  var span0;
  var t0;
  var t1;
  var br0;
  var t2;
  var t3;
  var p0;
  var t4;
  var br1;
  var t5;
  var span1;
  var t6;
  var t7;
  var t8;
  var div4;
  var div2;
  var img0;
  var img0_src_value;
  var t9;
  var div1;
  var h20;
  var t10;
  var t11;
  var p1;
  var t12;
  var t13;
  var div3;
  var img1;
  var img1_src_value;
  var t14;
  var h21;
  var t15;
  var t16;
  var article1;
  var div6;
  var img2;
  var img2_src_value;
  var t17;
  var img3;
  var img3_src_value;
  var t18;
  var img4;
  var img4_src_value;
  var t19;
  var img5;
  var img5_src_value;
  var t20;
  var img6;
  var img6_src_value;
  var t21;
  var img7;
  var img7_src_value;
  var t22;
  var article2;
  var p2;
  var t23;
  var span2;
  var t24;
  var t25;
  var block = {
    c: function create() {
      section = element("section");
      article0 = element("article");
      div5 = element("div");
      div0 = element("div");
      h1 = element("h1");
      span0 = element("span");
      t0 = text("¿por qué nos interesa");
      t1 = space();
      br0 = element("br");
      t2 = text("\r\n                la pedagogía digital?");
      t3 = space();
      p0 = element("p");
      t4 = text("El debate en las redes sociales se convirtió en una guerra de trincheras:");
      br1 = element("br");
      t5 = space();
      span1 = element("span");
      t6 = text("ya no somos libres de compartir lo que pensamos sin miedo a las agresiones");
      t7 = text(" o a que nos reduzcan a estereotipos.");
      t8 = space();
      div4 = element("div");
      div2 = element("div");
      img0 = element("img");
      t9 = space();
      div1 = element("div");
      h20 = element("h2");
      t10 = text("Desde Corazones y Mentes queremos generar un cambio.");
      t11 = space();
      p1 = element("p");
      t12 = text("¿En qué medida nuestras propias emociones, creencias y/o valores nos hacen colaborar, sin darnos cuenta, con todo el ruido que amenaza nuestra convivencia digital?");
      t13 = space();
      div3 = element("div");
      img1 = element("img");
      t14 = space();
      h21 = element("h2");
      t15 = text("Prestar atención a nuestros propios prejuicios es el primer paso para cambiar la dinámica.");
      t16 = space();
      article1 = element("article");
      div6 = element("div");
      img2 = element("img");
      t17 = space();
      img3 = element("img");
      t18 = space();
      img4 = element("img");
      t19 = space();
      img5 = element("img");
      t20 = space();
      img6 = element("img");
      t21 = space();
      img7 = element("img");
      t22 = space();
      article2 = element("article");
      p2 = element("p");
      t23 = text("Por eso, ");
      span2 = element("span");
      t24 = text("creamos herramientas");
      t25 = text(", en distintos formatos interactivos y pensadas para trabajar en conjunto con toda la comunidad educativa, que estimulen ese ejercicio. Para que observemos nuestras propias reacciones y nuestras propias tendencias antes de juzgar, decidir y hacer click.");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      article0 = claim_element(section_nodes, "ARTICLE", {
        class: true
      });
      var article0_nodes = children(article0);
      div5 = claim_element(article0_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      span0 = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t0 = claim_text(span0_nodes, "¿por qué nos interesa");
      span0_nodes.forEach(detach_dev);
      t1 = claim_space(h1_nodes);
      br0 = claim_element(h1_nodes, "BR", {});
      t2 = claim_text(h1_nodes, "\r\n                la pedagogía digital?");
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "El debate en las redes sociales se convirtió en una guerra de trincheras:");
      br1 = claim_element(p0_nodes, "BR", {});
      t5 = claim_space(p0_nodes);
      span1 = claim_element(p0_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t6 = claim_text(span1_nodes, "ya no somos libres de compartir lo que pensamos sin miedo a las agresiones");
      span1_nodes.forEach(detach_dev);
      t7 = claim_text(p0_nodes, " o a que nos reduzcan a estereotipos.");
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t8 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      img0 = claim_element(div2_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      t9 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {});
      var div1_nodes = children(div1);
      h20 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t10 = claim_text(h20_nodes, "Desde Corazones y Mentes queremos generar un cambio.");
      h20_nodes.forEach(detach_dev);
      t11 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t12 = claim_text(p1_nodes, "¿En qué medida nuestras propias emociones, creencias y/o valores nos hacen colaborar, sin darnos cuenta, con todo el ruido que amenaza nuestra convivencia digital?");
      p1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t13 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      img1 = claim_element(div3_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t14 = claim_space(div3_nodes);
      h21 = claim_element(div3_nodes, "H2", {});
      var h21_nodes = children(h21);
      t15 = claim_text(h21_nodes, "Prestar atención a nuestros propios prejuicios es el primer paso para cambiar la dinámica.");
      h21_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      article0_nodes.forEach(detach_dev);
      t16 = claim_space(section_nodes);
      article1 = claim_element(section_nodes, "ARTICLE", {
        class: true
      });
      var article1_nodes = children(article1);
      div6 = claim_element(article1_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      img2 = claim_element(div6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t17 = claim_space(div6_nodes);
      img3 = claim_element(div6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t18 = claim_space(div6_nodes);
      img4 = claim_element(div6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t19 = claim_space(div6_nodes);
      img5 = claim_element(div6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t20 = claim_space(div6_nodes);
      img6 = claim_element(div6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t21 = claim_space(div6_nodes);
      img7 = claim_element(div6_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      div6_nodes.forEach(detach_dev);
      article1_nodes.forEach(detach_dev);
      t22 = claim_space(section_nodes);
      article2 = claim_element(section_nodes, "ARTICLE", {
        class: true
      });
      var article2_nodes = children(article2);
      p2 = claim_element(article2_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t23 = claim_text(p2_nodes, "Por eso, ");
      span2 = claim_element(p2_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t24 = claim_text(span2_nodes, "creamos herramientas");
      span2_nodes.forEach(detach_dev);
      t25 = claim_text(p2_nodes, ", en distintos formatos interactivos y pensadas para trabajar en conjunto con toda la comunidad educativa, que estimulen ese ejercicio. Para que observemos nuestras propias reacciones y nuestras propias tendencias antes de juzgar, decidir y hacer click.");
      p2_nodes.forEach(detach_dev);
      article2_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "class", "fushia-text");
      add_location(span0, file$9, 5, 46, 281);
      add_location(br0, file$9, 5, 102, 337);
      attr_dev(h1, "class", "celeste-text mb-5");
      add_location(h1, file$9, 5, 16, 251);
      add_location(br1, file$9, 8, 93, 535);
      attr_dev(span1, "class", "fushia-text");
      add_location(span1, file$9, 9, 20, 561);
      attr_dev(p0, "class", "font-sans text-white mb-5");
      add_location(p0, file$9, 7, 16, 403);
      attr_dev(div0, "class", "my-auto");
      add_location(div0, file$9, 4, 12, 212);
      if (img0.src !== (img0_src_value = "cambio.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Ícono de cambio");
      attr_dev(img0, "class", "mr-3 mt-4");
      add_location(img0, file$9, 15, 20, 877);
      attr_dev(h20, "class", "mb-3");
      add_location(h20, file$9, 17, 24, 992);
      attr_dev(p1, "class", "font-sans");
      add_location(p1, file$9, 18, 24, 1093);
      add_location(div1, file$9, 16, 20, 961);
      attr_dev(div2, "class", "flex items-start mb-5");
      add_location(div2, file$9, 14, 16, 820);
      if (img1.src !== (img1_src_value = "ojo.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "class", "mr-3 mt-4");
      attr_dev(img1, "alt", "Ícono de un ojo");
      add_location(img1, file$9, 22, 20, 1404);
      add_location(h21, file$9, 23, 20, 1484);
      attr_dev(div3, "class", "flex items-start");
      add_location(div3, file$9, 21, 16, 1352);
      attr_dev(div4, "class", "text-white flex flex-col");
      add_location(div4, file$9, 13, 12, 764);
      attr_dev(div5, "class", "grid md:grid-cols-2 grid-cols-1 gap-8 mb-10");
      add_location(div5, file$9, 2, 8, 127);
      attr_dev(article0, "class", "container mx-auto py-10 px-2 sm:p-10 ");
      add_location(article0, file$9, 1, 4, 62);
      attr_dev(img2, "class", "mx-2 my-3 sm:m-3 sm:my-auto w-8 sm:w-16");
      if (img2.src !== (img2_src_value = "video.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Ícono de cámara de videeo");
      add_location(img2, file$9, 32, 12, 1824);
      attr_dev(img3, "class", "m-2 my-auto w-10 sm:w-16");
      if (img3.src !== (img3_src_value = "play.png")) attr_dev(img3, "src", img3_src_value);
      attr_dev(img3, "alt", "Ícono de play");
      add_location(img3, file$9, 33, 12, 1940);
      attr_dev(img4, "class", "mx-2 my-3 sm:m-3 sm:my-auto w-8 sm:w-16");
      if (img4.src !== (img4_src_value = "computadora.png")) attr_dev(img4, "src", img4_src_value);
      attr_dev(img4, "alt", "Ícono de monnitor");
      add_location(img4, file$9, 34, 12, 2028);
      attr_dev(img5, "class", "mx-2 my-auto sm:m-3 sm:my-auto w-6 sm:w-12");
      if (img5.src !== (img5_src_value = "celular.png")) attr_dev(img5, "src", img5_src_value);
      attr_dev(img5, "alt", "Ícono de celular");
      add_location(img5, file$9, 35, 12, 2142);
      attr_dev(img6, "class", "mx-2 my-3 sm:m-3 sm:my-auto w-8 sm:w-16");
      if (img6.src !== (img6_src_value = "formulario.png")) attr_dev(img6, "src", img6_src_value);
      attr_dev(img6, "alt", "Ícono de formulario");
      add_location(img6, file$9, 36, 12, 2254);
      attr_dev(img7, "class", "mx-2 my-3 sm:m-3 sm:my-auto w-8 sm:w-16");
      if (img7.src !== (img7_src_value = "puzzle.png")) attr_dev(img7, "src", img7_src_value);
      attr_dev(img7, "alt", "Ícono de rompecabezas");
      add_location(img7, file$9, 37, 12, 2369);
      attr_dev(div6, "class", "container mx-auto flex flex-wrap justify-evenly");
      add_location(div6, file$9, 31, 8, 1749);
      attr_dev(article1, "class", "py-6 px-3 sm:p-10 bg-white ");
      add_location(article1, file$9, 30, 4, 1694);
      attr_dev(span2, "class", "uppercase text-2xl staatiliches-font");
      add_location(span2, file$9, 44, 21, 2622);
      attr_dev(p2, "class", "text-white font-sans");
      add_location(p2, file$9, 43, 8, 2567);
      attr_dev(article2, "class", "p-10 container mx-auto");
      add_location(article2, file$9, 42, 4, 2517);
      attr_dev(section, "class", "pedagogias-digitales-section bg-black ");
      add_location(section, file$9, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, article0);
      append_dev(article0, div5);
      append_dev(div5, div0);
      append_dev(div0, h1);
      append_dev(h1, span0);
      append_dev(span0, t0);
      append_dev(h1, t1);
      append_dev(h1, br0);
      append_dev(h1, t2);
      append_dev(div0, t3);
      append_dev(div0, p0);
      append_dev(p0, t4);
      append_dev(p0, br1);
      append_dev(p0, t5);
      append_dev(p0, span1);
      append_dev(span1, t6);
      append_dev(p0, t7);
      append_dev(div5, t8);
      append_dev(div5, div4);
      append_dev(div4, div2);
      append_dev(div2, img0);
      append_dev(div2, t9);
      append_dev(div2, div1);
      append_dev(div1, h20);
      append_dev(h20, t10);
      append_dev(div1, t11);
      append_dev(div1, p1);
      append_dev(p1, t12);
      append_dev(div4, t13);
      append_dev(div4, div3);
      append_dev(div3, img1);
      append_dev(div3, t14);
      append_dev(div3, h21);
      append_dev(h21, t15);
      append_dev(section, t16);
      append_dev(section, article1);
      append_dev(article1, div6);
      append_dev(div6, img2);
      append_dev(div6, t17);
      append_dev(div6, img3);
      append_dev(div6, t18);
      append_dev(div6, img4);
      append_dev(div6, t19);
      append_dev(div6, img5);
      append_dev(div6, t20);
      append_dev(div6, img6);
      append_dev(div6, t21);
      append_dev(div6, img7);
      append_dev(section, t22);
      append_dev(section, article2);
      append_dev(article2, p2);
      append_dev(p2, t23);
      append_dev(p2, span2);
      append_dev(span2, t24);
      append_dev(p2, t25);
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
    id: create_fragment$9.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$9($$self, $$props) {
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

  var _super = _createSuper$9(PedagogiaDigital);

  function PedagogiaDigital(options) {
    var _this;

    _classCallCheck(this, PedagogiaDigital);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$9, create_fragment$9, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PedagogiaDigital",
      options: options,
      id: create_fragment$9.name
    });
    return _this;
  }

  return PedagogiaDigital;
}(SvelteComponentDev);

function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$8 = "src\\components\\Footer.svelte";

function create_fragment$8(ctx) {
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
      t7 = text("#Todaadata");
      t8 = space();
      li2 = element("li");
      a2 = element("a");
      t9 = text("Libro");
      t10 = space();
      li3 = element("li");
      a3 = element("a");
      t11 = text("kit de herramientas");
      t12 = space();
      li4 = element("li");
      a4 = element("a");
      t13 = text("Soy docente");
      t14 = space();
      li5 = element("li");
      a5 = element("a");
      t15 = text("Quiénes Somos");
      t16 = space();
      p = element("p");
      t17 = text("Todos los materiales originales están bajo una licencia de \r\n    ");
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
      t7 = claim_text(a1_nodes, "#Todaadata");
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
      t11 = claim_text(a3_nodes, "kit de herramientas");
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
      t13 = claim_text(a4_nodes, "Soy docente");
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
      t17 = claim_text(p_nodes, "Todos los materiales originales están bajo una licencia de \r\n    ");
      a6 = claim_element(p_nodes, "A", {
        class: true,
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
      attr_dev(img0, "class", "mt-5 w-40");
      if (img0.src !== (img0_src_value = "logo-circular.png")) attr_dev(img0, "src", img0_src_value);
      attr_dev(img0, "alt", "Logo de Corazones y mentes");
      add_location(img0, file$8, 27, 6, 378);
      attr_dev(small, "class", "text-xs mb-3");
      add_location(small, file$8, 30, 10, 573);
      attr_dev(img1, "class", "developers svelte-19ymy2v");
      if (img1.src !== (img1_src_value = "developers2.png")) attr_dev(img1, "src", img1_src_value);
      attr_dev(img1, "alt", "Logos de Democracia en Red, Plataforma democrática, Fundacion fhc centro edelstein");
      add_location(img1, file$8, 32, 12, 654);
      attr_dev(img2, "class", "minu svelte-19ymy2v");
      if (img2.src !== (img2_src_value = "minu-logo.png")) attr_dev(img2, "src", img2_src_value);
      attr_dev(img2, "alt", "Logo de Minu asociación civil");
      add_location(img2, file$8, 33, 12, 805);
      add_location(div0, file$8, 31, 10, 635);
      attr_dev(div1, "class", "flex flex-col justify-center align-center");
      add_location(div1, file$8, 29, 8, 506);
      attr_dev(div2, "class", "mt-10 sm:mx-10");
      add_location(div2, file$8, 28, 6, 468);
      attr_dev(a0, "class", "hover:underline");
      attr_dev(a0, "href", "#home");
      add_location(a0, file$8, 38, 12, 1014);
      add_location(li0, file$8, 38, 8, 1010);
      attr_dev(a1, "class", "hover:underline");
      attr_dev(a1, "href", "#toda-la-data");
      add_location(a1, file$8, 39, 12, 1081);
      add_location(li1, file$8, 39, 8, 1077);
      attr_dev(a2, "class", "hover:underline");
      attr_dev(a2, "href", "#libro");
      add_location(a2, file$8, 40, 12, 1162);
      add_location(li2, file$8, 40, 8, 1158);
      attr_dev(a3, "class", "hover:underline");
      attr_dev(a3, "href", "#kit-de-herramientas");
      add_location(a3, file$8, 41, 12, 1231);
      add_location(li3, file$8, 41, 8, 1227);
      attr_dev(a4, "class", "hover:underline");
      attr_dev(a4, "href", "#sos-docente");
      add_location(a4, file$8, 42, 12, 1328);
      add_location(li4, file$8, 42, 8, 1324);
      attr_dev(a5, "class", "hover:underline");
      attr_dev(a5, "href", "#quienes-somos");
      add_location(a5, file$8, 43, 12, 1409);
      add_location(li5, file$8, 43, 8, 1405);
      attr_dev(ul, "class", "uppercase text-bold mt-5   text-center sm:text-left");
      add_location(ul, file$8, 37, 6, 936);
      attr_dev(div3, "class", "container mx-auto flex justify-between align-center ");
      add_location(div3, file$8, 26, 2, 304);
      attr_dev(a6, "class", "text-xs");
      attr_dev(a6, "href", "https://creativecommons.org/licenses/by/4.0/deed.es");
      attr_dev(a6, "target", "_blank");
      add_location(a6, file$8, 47, 4, 1619);
      attr_dev(p, "class", "text-center text-xs text-bold mt-10");
      add_location(p, file$8, 46, 2, 1507);
      attr_dev(footer, "class", "bg-gray-200 py-20 px-3 ");
      add_location(footer, file$8, 25, 0, 260);
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
  validate_slots("Footer", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Footer, _SvelteComponentDev);

  var _super = _createSuper$8(Footer);

  function Footer(options) {
    var _this;

    _classCallCheck(this, Footer);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$8, create_fragment$8, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Footer",
      options: options,
      id: create_fragment$8.name
    });
    return _this;
  }

  return Footer;
}(SvelteComponentDev);

function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$7 = "src\\components\\Home.svelte";

function create_fragment$7(ctx) {
  var div3;
  var article;
  var img;
  var img_src_value;
  var t0;
  var div2;
  var div0;
  var h20;
  var t1;
  var t2;
  var div1;
  var h21;
  var t3;
  var t4;
  var p;
  var span0;
  var t5;
  var t6;
  var t7;
  var a;
  var span1;
  var t8;
  var block = {
    c: function create() {
      div3 = element("div");
      article = element("article");
      img = element("img");
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      h20 = element("h2");
      t1 = text("¿Cómo nos vinculamos digitalmente de manera constructiva y empática?");
      t2 = space();
      div1 = element("div");
      h21 = element("h2");
      t3 = text("¿Qué hay más allá del ruido y nuestras diferencias?");
      t4 = space();
      p = element("p");
      span0 = element("span");
      t5 = text("#internetesnuestro");
      t6 = text(" y se nos esta yendo de las manos... Por eso creamos UN ESPACIO CON HERRAMIENTAS Y MUCHA DATA PARA ACTIVAR UNA BUENA CONVIVENCIA EN INTERNET SUMATE! Leé nuestro libro para informarte más!");
      t7 = space();
      a = element("a");
      span1 = element("span");
      t8 = text("Descargá el libro");
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
      img = claim_element(article_nodes, "IMG", {
        src: true,
        class: true,
        alt: true
      });
      t0 = claim_space(article_nodes);
      div2 = claim_element(article_nodes, "DIV", {});
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h20 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t1 = claim_text(h20_nodes, "¿Cómo nos vinculamos digitalmente de manera constructiva y empática?");
      h20_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h21 = claim_element(div1_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t3 = claim_text(h21_nodes, "¿Qué hay más allá del ruido y nuestras diferencias?");
      h21_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t4 = claim_space(div2_nodes);
      p = claim_element(div2_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      span0 = claim_element(p_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t5 = claim_text(span0_nodes, "#internetesnuestro");
      span0_nodes.forEach(detach_dev);
      t6 = claim_text(p_nodes, " y se nos esta yendo de las manos... Por eso creamos UN ESPACIO CON HERRAMIENTAS Y MUCHA DATA PARA ACTIVAR UNA BUENA CONVIVENCIA EN INTERNET SUMATE! Leé nuestro libro para informarte más!");
      p_nodes.forEach(detach_dev);
      t7 = claim_space(div2_nodes);
      a = claim_element(div2_nodes, "A", {
        href: true,
        download: true,
        class: true
      });
      var a_nodes = children(a);
      span1 = claim_element(a_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t8 = claim_text(span1_nodes, "Descargá el libro");
      span1_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "logo-circular.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "w-52 sm:w-72 mx-auto mb-6");
      attr_dev(img, "alt", "Logo de Corazones y Mentes");
      add_location(img, file$7, 2, 2, 125);
      attr_dev(h20, "class", "rounded-sm  p-1 uppercase");
      add_location(h20, file$7, 5, 4, 279);
      attr_dev(div0, "class", "flex celeste-bg p-2 mb-5");
      add_location(div0, file$7, 4, 3, 235);
      attr_dev(h21, "class", "rounded-sm p-1 uppercase");
      add_location(h21, file$7, 10, 4, 475);
      attr_dev(div1, "class", "flex celeste-bg p-2 items-center");
      add_location(div1, file$7, 9, 3, 423);
      attr_dev(span0, "class", "uppercase font-normal staatiliches-font");
      add_location(span0, file$7, 15, 4, 643);
      attr_dev(p, "class", "font-sans mt-6 mb-3 lowercase");
      add_location(p, file$7, 14, 3, 596);
      attr_dev(span1, "class", "fushia-bg py-2 px-5 border hover:border-gray-800 border-solid w-44 text-center inline-block");
      add_location(span1, file$7, 18, 30, 1007);
      attr_dev(a, "href", "/documents/Corazones-y-mentes.pdf");
      attr_dev(a, "download", "");
      attr_dev(a, "class", "py-3 float-right");
      add_location(a, file$7, 17, 3, 923);
      add_location(div2, file$7, 3, 2, 225);
      attr_dev(article, "class", "grid grid-cols-1 md:grid-cols-2 items-center ");
      add_location(article, file$7, 1, 1, 58);
      attr_dev(div3, "class", "container mx-auto py-6 sm:py-24");
      attr_dev(div3, "id", "home");
      add_location(div3, file$7, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, article);
      append_dev(article, img);
      append_dev(article, t0);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, h20);
      append_dev(h20, t1);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, h21);
      append_dev(h21, t3);
      append_dev(div2, t4);
      append_dev(div2, p);
      append_dev(p, span0);
      append_dev(span0, t5);
      append_dev(p, t6);
      append_dev(div2, t7);
      append_dev(div2, a);
      append_dev(a, span1);
      append_dev(span1, t8);
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
  validate_slots("Home", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Home> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Home = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Home, _SvelteComponentDev);

  var _super = _createSuper$7(Home);

  function Home(options) {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$7, create_fragment$7, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Home",
      options: options,
      id: create_fragment$7.name
    });
    return _this;
  }

  return Home;
}(SvelteComponentDev);

var siema_min = createCommonjsModule(function (module, exports) {
  !function (e, t) {
    module.exports = t() ;
  }("undefined" != typeof self ? self : commonjsGlobal, function () {
    return function (e) {
      function t(r) {
        if (i[r]) return i[r].exports;
        var n = i[r] = {
          i: r,
          l: !1,
          exports: {}
        };
        return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports;
      }

      var i = {};
      return t.m = e, t.c = i, t.d = function (e, i, r) {
        t.o(e, i) || Object.defineProperty(e, i, {
          configurable: !1,
          enumerable: !0,
          get: r
        });
      }, t.n = function (e) {
        var i = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };
        return t.d(i, "a", i), i;
      }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, t.p = "", t(t.s = 0);
    }([function (e, t, i) {

      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          s = function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, i, r) {
          return i && e(t.prototype, i), r && e(t, r), t;
        };
      }(),
          l = function () {
        function e(t) {
          var i = this;
          if (r(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, null === this.selector) throw new Error("Something wrong with your selector 😭");
          this.resolveSlidesNumber(), this.selectorWidth = this.selector.offsetWidth, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)), this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function (e) {
            i[e] = i[e].bind(i);
          }), this.init();
        }

        return s(e, [{
          key: "attachEvents",
          value: function value() {
            window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
              startX: 0,
              endX: 0,
              startY: 0,
              letItGo: null,
              preventClick: !1
            }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler), this.selector.addEventListener("click", this.clickHandler));
          }
        }, {
          key: "detachEvents",
          value: function value() {
            window.removeEventListener("resize", this.resizeHandler), this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), this.selector.removeEventListener("click", this.clickHandler);
          }
        }, {
          key: "init",
          value: function value() {
            this.attachEvents(), this.selector.style.overflow = "hidden", this.selector.style.direction = this.config.rtl ? "rtl" : "ltr", this.buildSliderFrame(), this.config.onInit.call(this);
          }
        }, {
          key: "buildSliderFrame",
          value: function value() {
            var e = this.selectorWidth / this.perPage,
                t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
            this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = e * t + "px", this.enableTransition(), this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
            var i = document.createDocumentFragment();
            if (this.config.loop) for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
              var n = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
              i.appendChild(n);
            }

            for (var s = 0; s < this.innerElements.length; s++) {
              var l = this.buildSliderFrameItem(this.innerElements[s]);
              i.appendChild(l);
            }

            if (this.config.loop) for (var o = 0; o < this.perPage; o++) {
              var a = this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));
              i.appendChild(a);
            }
            this.sliderFrame.appendChild(i), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent();
          }
        }, {
          key: "buildSliderFrameItem",
          value: function value(e) {
            var t = document.createElement("div");
            return t.style.cssFloat = this.config.rtl ? "right" : "left", t.style.float = this.config.rtl ? "right" : "left", t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%", t.appendChild(e), t;
          }
        }, {
          key: "resolveSlidesNumber",
          value: function value() {
            if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;else if ("object" === n(this.config.perPage)) {
              this.perPage = 1;

              for (var e in this.config.perPage) {
                window.innerWidth >= e && (this.perPage = this.config.perPage[e]);
              }
            }
          }
        }, {
          key: "prev",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];

            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;

              if (this.config.loop) {
                if (this.currentSlide - e < 0) {
                  this.disableTransition();
                  var r = this.currentSlide + this.innerElements.length,
                      n = this.perPage,
                      s = r + n,
                      l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                      o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                  this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r - e;
                } else this.currentSlide = this.currentSlide - e;
              } else this.currentSlide = Math.max(this.currentSlide - e, 0);

              i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "next",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                t = arguments[1];

            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;

              if (this.config.loop) {
                if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                  this.disableTransition();
                  var r = this.currentSlide - this.innerElements.length,
                      n = this.perPage,
                      s = r + n,
                      l = (this.config.rtl ? 1 : -1) * s * (this.selectorWidth / this.perPage),
                      o = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                  this.sliderFrame.style[this.transformProperty] = "translate3d(" + (l + o) + "px, 0, 0)", this.currentSlide = r + e;
                } else this.currentSlide = this.currentSlide + e;
              } else this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);

              i !== this.currentSlide && (this.slideToCurrent(this.config.loop), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "disableTransition",
          value: function value() {
            this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
          }
        }, {
          key: "enableTransition",
          value: function value() {
            this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing;
          }
        }, {
          key: "goTo",
          value: function value(e, t) {
            if (!(this.innerElements.length <= this.perPage)) {
              var i = this.currentSlide;
              this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this));
            }
          }
        }, {
          key: "slideToCurrent",
          value: function value(e) {
            var t = this,
                i = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                r = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage);
            e ? requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                t.enableTransition(), t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)";
              });
            }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)";
          }
        }, {
          key: "updateAfterDrag",
          value: function value() {
            var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX),
                t = Math.abs(e),
                i = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1,
                r = e > 0 && this.currentSlide - i < 0,
                n = e < 0 && this.currentSlide + i > this.innerElements.length - this.perPage;
            e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent(r || n);
          }
        }, {
          key: "resizeHandler",
          value: function value() {
            this.resolveSlidesNumber(), this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage), this.selectorWidth = this.selector.offsetWidth, this.buildSliderFrame();
          }
        }, {
          key: "clearDrag",
          value: function value() {
            this.drag = {
              startX: 0,
              endX: 0,
              startY: 0,
              letItGo: null,
              preventClick: this.drag.preventClick
            };
          }
        }, {
          key: "touchstartHandler",
          value: function value(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY);
          }
        }, {
          key: "touchendHandler",
          value: function value(e) {
            e.stopPropagation(), this.pointerDown = !1, this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
          }
        }, {
          key: "touchmoveHandler",
          value: function value(e) {
            if (e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo) {
              e.preventDefault(), this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
              var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                  i = t * (this.selectorWidth / this.perPage),
                  r = this.drag.endX - this.drag.startX,
                  n = this.config.rtl ? i + r : i - r;
              this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
            }
          }
        }, {
          key: "mousedownHandler",
          value: function value(e) {
            -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX);
          }
        }, {
          key: "mouseupHandler",
          value: function value(e) {
            e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.enableTransition(), this.drag.endX && this.updateAfterDrag(), this.clearDrag();
          }
        }, {
          key: "mousemoveHandler",
          value: function value(e) {
            if (e.preventDefault(), this.pointerDown) {
              "A" === e.target.nodeName && (this.drag.preventClick = !0), this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
              var t = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide,
                  i = t * (this.selectorWidth / this.perPage),
                  r = this.drag.endX - this.drag.startX,
                  n = this.config.rtl ? i + r : i - r;
              this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * n + "px, 0, 0)";
            }
          }
        }, {
          key: "mouseleaveHandler",
          value: function value(e) {
            this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.drag.preventClick = !1, this.enableTransition(), this.updateAfterDrag(), this.clearDrag());
          }
        }, {
          key: "clickHandler",
          value: function value(e) {
            this.drag.preventClick && e.preventDefault(), this.drag.preventClick = !1;
          }
        }, {
          key: "remove",
          value: function value(e, t) {
            if (e < 0 || e >= this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
            var i = e < this.currentSlide,
                r = this.currentSlide + this.perPage - 1 === e;
            (i || r) && this.currentSlide--, this.innerElements.splice(e, 1), this.buildSliderFrame(), t && t.call(this);
          }
        }, {
          key: "insert",
          value: function value(e, t, i) {
            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
            if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
            var r = t <= this.currentSlide > 0 && this.innerElements.length;
            this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide, this.innerElements.splice(t, 0, e), this.buildSliderFrame(), i && i.call(this);
          }
        }, {
          key: "prepend",
          value: function value(e, t) {
            this.insert(e, 0), t && t.call(this);
          }
        }, {
          key: "append",
          value: function value(e, t) {
            this.insert(e, this.innerElements.length + 1), t && t.call(this);
          }
        }, {
          key: "destroy",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments[1];

            if (this.detachEvents(), this.selector.style.cursor = "auto", e) {
              for (var i = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++) {
                i.appendChild(this.innerElements[r]);
              }

              this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style");
            }

            t && t.call(this);
          }
        }], [{
          key: "mergeSettings",
          value: function value(e) {
            var t = {
              selector: ".siema",
              duration: 200,
              easing: "ease-out",
              perPage: 1,
              startIndex: 0,
              draggable: !0,
              multipleDrag: !0,
              threshold: 20,
              loop: !1,
              rtl: !1,
              onInit: function onInit() {},
              onChange: function onChange() {}
            },
                i = e;

            for (var r in i) {
              t[r] = i[r];
            }

            return t;
          }
        }, {
          key: "webkitOrNot",
          value: function value() {
            return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform";
          }
        }]), e;
      }();

      t.default = l, e.exports = t.default;
    }]);
  });
});
var Siema = /*@__PURE__*/getDefaultExportFromCjs(siema_min);

function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$6 = "node_modules\\@beyonk\\svelte-carousel\\src\\Carousel.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[31] = list[i];
  child_ctx[33] = i;
  return child_ctx;
}

var get_right_control_slot_changes = function get_right_control_slot_changes(dirty) {
  return {};
};

var get_right_control_slot_context = function get_right_control_slot_context(ctx) {
  return {};
};

var get_left_control_slot_changes = function get_left_control_slot_changes(dirty) {
  return {};
};

var get_left_control_slot_context = function get_left_control_slot_context(ctx) {
  return {};
}; // (6:1) {#if controls}


function create_if_block_1(ctx) {
  var button0;
  var t;
  var button1;
  var current;
  var mounted;
  var dispose;
  var left_control_slot_template =
  /*#slots*/
  ctx[24]["left-control"];
  var left_control_slot = create_slot(left_control_slot_template, ctx,
  /*$$scope*/
  ctx[23], get_left_control_slot_context);
  var right_control_slot_template =
  /*#slots*/
  ctx[24]["right-control"];
  var right_control_slot = create_slot(right_control_slot_template, ctx,
  /*$$scope*/
  ctx[23], get_right_control_slot_context);
  var block = {
    c: function create() {
      button0 = element("button");
      if (left_control_slot) left_control_slot.c();
      t = space();
      button1 = element("button");
      if (right_control_slot) right_control_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      button0 = claim_element(nodes, "BUTTON", {
        class: true,
        "aria-label": true
      });
      var button0_nodes = children(button0);
      if (left_control_slot) left_control_slot.l(button0_nodes);
      button0_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      button1 = claim_element(nodes, "BUTTON", {
        class: true,
        "aria-label": true
      });
      var button1_nodes = children(button1);
      if (right_control_slot) right_control_slot.l(button1_nodes);
      button1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button0, "class", "left svelte-1s3wo8l");
      attr_dev(button0, "aria-label", "left");
      add_location(button0, file$6, 6, 1, 105);
      attr_dev(button1, "class", "right svelte-1s3wo8l");
      attr_dev(button1, "aria-label", "right");
      add_location(button1, file$6, 9, 1, 209);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button0, anchor);

      if (left_control_slot) {
        left_control_slot.m(button0, null);
      }

      insert_dev(target, t, anchor);
      insert_dev(target, button1, anchor);

      if (right_control_slot) {
        right_control_slot.m(button1, null);
      }

      current = true;

      if (!mounted) {
        dispose = [listen_dev(button0, "click",
        /*left*/
        ctx[3], false, false, false), listen_dev(button1, "click",
        /*right*/
        ctx[4], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, dirty) {
      if (left_control_slot) {
        if (left_control_slot.p && dirty[0] &
        /*$$scope*/
        8388608) {
          update_slot(left_control_slot, left_control_slot_template, ctx,
          /*$$scope*/
          ctx[23], dirty, get_left_control_slot_changes, get_left_control_slot_context);
        }
      }

      if (right_control_slot) {
        if (right_control_slot.p && dirty[0] &
        /*$$scope*/
        8388608) {
          update_slot(right_control_slot, right_control_slot_template, ctx,
          /*$$scope*/
          ctx[23], dirty, get_right_control_slot_changes, get_right_control_slot_context);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(left_control_slot, local);
      transition_in(right_control_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(left_control_slot, local);
      transition_out(right_control_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(button0);
      if (left_control_slot) left_control_slot.d(detaching);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(button1);
      if (right_control_slot) right_control_slot.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(6:1) {#if controls}",
    ctx: ctx
  });
  return block;
} // (14:4) {#if dots}


function create_if_block(ctx) {
  var ul;
  var each_value = {
    length:
    /*totalDots*/
    ctx[9]
  };
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(ul, "class", "svelte-1s3wo8l");
      add_location(ul, file$6, 14, 1, 339);
    },
    m: function mount(target, anchor) {
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }
    },
    p: function update(ctx, dirty) {
      if (dirty[0] &
      /*isDotActive, currentIndex, go, currentPerPage, totalDots*/
      740) {
        each_value = {
          length:
          /*totalDots*/
          ctx[9]
        };
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(14:4) {#if dots}",
    ctx: ctx
  });
  return block;
} // (16:2) {#each {length: totalDots} as _, i}


function create_each_block(ctx) {
  var li;
  var li_class_value;
  var mounted;
  var dispose;

  function click_handler() {
    return (
      /*click_handler*/
      ctx[26](
      /*i*/
      ctx[33])
    );
  }

  var block = {
    c: function create() {
      li = element("li");
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      children(li).forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(li, "class", li_class_value = "" + (null_to_empty(
      /*isDotActive*/
      ctx[2](
      /*currentIndex*/
      ctx[7],
      /*i*/
      ctx[33]) ? "active" : "") + " svelte-1s3wo8l"));
      add_location(li, file$6, 16, 2, 384);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);

      if (!mounted) {
        dispose = listen_dev(li, "click", click_handler, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty[0] &
      /*currentIndex*/
      128 && li_class_value !== (li_class_value = "" + (null_to_empty(
      /*isDotActive*/
      ctx[2](
      /*currentIndex*/
      ctx[7],
      /*i*/
      ctx[33]) ? "active" : "") + " svelte-1s3wo8l"))) {
        attr_dev(li, "class", li_class_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(16:2) {#each {length: totalDots} as _, i}",
    ctx: ctx
  });
  return block;
}

function create_fragment$6(ctx) {
  var div1;
  var div0;
  var t0;
  var t1;
  var current;
  var default_slot_template =
  /*#slots*/
  ctx[24].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[23], null);
  var if_block0 =
  /*controls*/
  ctx[1] && create_if_block_1(ctx);
  var if_block1 =
  /*dots*/
  ctx[0] && create_if_block(ctx);
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      if (default_slot) default_slot.c();
      t0 = space();
      if (if_block0) if_block0.c();
      t1 = space();
      if (if_block1) if_block1.c();
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      if (default_slot) default_slot.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div1_nodes);
      if (if_block0) if_block0.l(div1_nodes);
      t1 = claim_space(div1_nodes);
      if (if_block1) if_block1.l(div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "slides");
      add_location(div0, file$6, 2, 1, 25);
      attr_dev(div1, "class", "carousel svelte-1s3wo8l");
      add_location(div1, file$6, 1, 0, 1);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      if (default_slot) {
        default_slot.m(div0, null);
      }
      /*div0_binding*/


      ctx[25](div0);
      append_dev(div1, t0);
      if (if_block0) if_block0.m(div1, null);
      append_dev(div1, t1);
      if (if_block1) if_block1.m(div1, null);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (default_slot) {
        if (default_slot.p && dirty[0] &
        /*$$scope*/
        8388608) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[23], dirty, null, null);
        }
      }

      if (
      /*controls*/
      ctx[1]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty[0] &
          /*controls*/
          2) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div1, t1);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, function () {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*dots*/
      ctx[0]) {
        if (if_block1) {
          if_block1.p(ctx, dirty);
        } else {
          if_block1 = create_if_block(ctx);
          if_block1.c();
          if_block1.m(div1, null);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      transition_in(if_block0);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      transition_out(if_block0);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      if (default_slot) default_slot.d(detaching);
      /*div0_binding*/

      ctx[25](null);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
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
  var pips;
  var currentPerPage;
  var totalDots;
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Carousel", slots, ['default', 'left-control', 'right-control']);
  var _$$props$perPage = $$props.perPage,
      perPage = _$$props$perPage === void 0 ? 3 : _$$props$perPage;
  var _$$props$loop = $$props.loop,
      loop = _$$props$loop === void 0 ? true : _$$props$loop;
  var _$$props$autoplay = $$props.autoplay,
      autoplay = _$$props$autoplay === void 0 ? 0 : _$$props$autoplay;
  var _$$props$duration = $$props.duration,
      duration = _$$props$duration === void 0 ? 200 : _$$props$duration;
  var _$$props$easing = $$props.easing,
      easing = _$$props$easing === void 0 ? "ease-out" : _$$props$easing;
  var _$$props$startIndex = $$props.startIndex,
      startIndex = _$$props$startIndex === void 0 ? 0 : _$$props$startIndex;
  var _$$props$draggable = $$props.draggable,
      draggable = _$$props$draggable === void 0 ? true : _$$props$draggable;
  var _$$props$multipleDrag = $$props.multipleDrag,
      multipleDrag = _$$props$multipleDrag === void 0 ? true : _$$props$multipleDrag;
  var _$$props$dots = $$props.dots,
      dots = _$$props$dots === void 0 ? true : _$$props$dots;
  var _$$props$controls = $$props.controls,
      controls = _$$props$controls === void 0 ? true : _$$props$controls;
  var _$$props$threshold = $$props.threshold,
      threshold = _$$props$threshold === void 0 ? 20 : _$$props$threshold;
  var _$$props$rtl = $$props.rtl,
      rtl = _$$props$rtl === void 0 ? false : _$$props$rtl;
  var currentIndex = startIndex;
  var siema;
  var controller;
  var timer;
  var dispatch = createEventDispatcher();
  onMount(function () {
    $$invalidate(22, controller = new Siema({
      selector: siema,
      perPage: _typeof(perPage) === "object" ? perPage : Number(perPage),
      loop: loop,
      duration: duration,
      easing: easing,
      startIndex: startIndex,
      draggable: draggable,
      multipleDrag: multipleDrag,
      threshold: threshold,
      rtl: rtl,
      onChange: handleChange
    }));

    if (autoplay) {
      timer = setInterval(right, autoplay);
    }

    return function () {
      autoplay && clearInterval(timer);
      controller.destroy();
    };
  });

  function isDotActive(currentIndex, dotIndex) {
    if (currentIndex < 0) currentIndex = pips.length + currentIndex;
    return currentIndex >= dotIndex * currentPerPage && currentIndex < dotIndex * currentPerPage + currentPerPage;
  }

  function left() {
    controller.prev();
  }

  function right() {
    controller.next();
  }

  function go(index) {
    controller.goTo(index);
  }

  function pause() {
    clearInterval(timer);
  }

  function resume() {
    if (autoplay) {
      timer = setInterval(right, autoplay);
    }
  }

  function handleChange(event) {
    $$invalidate(7, currentIndex = controller.currentSlide);
    dispatch("change", {
      currentSlide: controller.currentSlide,
      slideCount: controller.innerElements.length
    });
  }

  var writable_props = ["perPage", "loop", "autoplay", "duration", "easing", "startIndex", "draggable", "multipleDrag", "dots", "controls", "threshold", "rtl"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Carousel> was created with unknown prop '".concat(key, "'"));
  });

  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      siema = $$value;
      $$invalidate(8, siema);
    });
  }

  var click_handler = function click_handler(i) {
    return go(i * currentPerPage);
  };

  $$self.$$set = function ($$props) {
    if ("perPage" in $$props) $$invalidate(10, perPage = $$props.perPage);
    if ("loop" in $$props) $$invalidate(11, loop = $$props.loop);
    if ("autoplay" in $$props) $$invalidate(12, autoplay = $$props.autoplay);
    if ("duration" in $$props) $$invalidate(13, duration = $$props.duration);
    if ("easing" in $$props) $$invalidate(14, easing = $$props.easing);
    if ("startIndex" in $$props) $$invalidate(15, startIndex = $$props.startIndex);
    if ("draggable" in $$props) $$invalidate(16, draggable = $$props.draggable);
    if ("multipleDrag" in $$props) $$invalidate(17, multipleDrag = $$props.multipleDrag);
    if ("dots" in $$props) $$invalidate(0, dots = $$props.dots);
    if ("controls" in $$props) $$invalidate(1, controls = $$props.controls);
    if ("threshold" in $$props) $$invalidate(18, threshold = $$props.threshold);
    if ("rtl" in $$props) $$invalidate(19, rtl = $$props.rtl);
    if ("$$scope" in $$props) $$invalidate(23, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      Siema: Siema,
      onMount: onMount,
      createEventDispatcher: createEventDispatcher,
      perPage: perPage,
      loop: loop,
      autoplay: autoplay,
      duration: duration,
      easing: easing,
      startIndex: startIndex,
      draggable: draggable,
      multipleDrag: multipleDrag,
      dots: dots,
      controls: controls,
      threshold: threshold,
      rtl: rtl,
      currentIndex: currentIndex,
      siema: siema,
      controller: controller,
      timer: timer,
      dispatch: dispatch,
      isDotActive: isDotActive,
      left: left,
      right: right,
      go: go,
      pause: pause,
      resume: resume,
      handleChange: handleChange,
      pips: pips,
      currentPerPage: currentPerPage,
      totalDots: totalDots
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("perPage" in $$props) $$invalidate(10, perPage = $$props.perPage);
    if ("loop" in $$props) $$invalidate(11, loop = $$props.loop);
    if ("autoplay" in $$props) $$invalidate(12, autoplay = $$props.autoplay);
    if ("duration" in $$props) $$invalidate(13, duration = $$props.duration);
    if ("easing" in $$props) $$invalidate(14, easing = $$props.easing);
    if ("startIndex" in $$props) $$invalidate(15, startIndex = $$props.startIndex);
    if ("draggable" in $$props) $$invalidate(16, draggable = $$props.draggable);
    if ("multipleDrag" in $$props) $$invalidate(17, multipleDrag = $$props.multipleDrag);
    if ("dots" in $$props) $$invalidate(0, dots = $$props.dots);
    if ("controls" in $$props) $$invalidate(1, controls = $$props.controls);
    if ("threshold" in $$props) $$invalidate(18, threshold = $$props.threshold);
    if ("rtl" in $$props) $$invalidate(19, rtl = $$props.rtl);
    if ("currentIndex" in $$props) $$invalidate(7, currentIndex = $$props.currentIndex);
    if ("siema" in $$props) $$invalidate(8, siema = $$props.siema);
    if ("controller" in $$props) $$invalidate(22, controller = $$props.controller);
    if ("timer" in $$props) timer = $$props.timer;
    if ("pips" in $$props) pips = $$props.pips;
    if ("currentPerPage" in $$props) $$invalidate(6, currentPerPage = $$props.currentPerPage);
    if ("totalDots" in $$props) $$invalidate(9, totalDots = $$props.totalDots);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty[0] &
    /*controller*/
    4194304) {
      pips = controller ? controller.innerElements : [];
    }

    if ($$self.$$.dirty[0] &
    /*controller, perPage*/
    4195328) {
      $$invalidate(6, currentPerPage = controller ? controller.perPage : perPage);
    }

    if ($$self.$$.dirty[0] &
    /*controller, currentPerPage*/
    4194368) {
      $$invalidate(9, totalDots = controller ? Math.ceil(controller.innerElements.length / currentPerPage) : []);
    }
  };

  return [dots, controls, isDotActive, left, right, go, currentPerPage, currentIndex, siema, totalDots, perPage, loop, autoplay, duration, easing, startIndex, draggable, multipleDrag, threshold, rtl, pause, resume, controller, $$scope, slots, div0_binding, click_handler];
}

var Carousel = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Carousel, _SvelteComponentDev);

  var _super = _createSuper$6(Carousel);

  function Carousel(options) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
      perPage: 10,
      loop: 11,
      autoplay: 12,
      duration: 13,
      easing: 14,
      startIndex: 15,
      draggable: 16,
      multipleDrag: 17,
      dots: 0,
      controls: 1,
      threshold: 18,
      rtl: 19,
      isDotActive: 2,
      left: 3,
      right: 4,
      go: 5,
      pause: 20,
      resume: 21
    }, [-1, -1]);
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Carousel",
      options: options,
      id: create_fragment$6.name
    });
    return _this;
  }

  _createClass(Carousel, [{
    key: "perPage",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "loop",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "autoplay",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "duration",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "easing",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "startIndex",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "draggable",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "multipleDrag",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "dots",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "controls",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "threshold",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "rtl",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "isDotActive",
    get: function get() {
      return this.$$.ctx[2];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "left",
    get: function get() {
      return this.$$.ctx[3];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "right",
    get: function get() {
      return this.$$.ctx[4];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "go",
    get: function get() {
      return this.$$.ctx[5];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "pause",
    get: function get() {
      return this.$$.ctx[20];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "resume",
    get: function get() {
      return this.$$.ctx[21];
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Carousel;
}(SvelteComponentDev);

function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$5 = "src\\components\\SosDocenteHero.svelte";

function create_fragment$5(ctx) {
  var div3;
  var article;
  var img;
  var img_src_value;
  var t0;
  var div2;
  var div0;
  var h2;
  var t1;
  var t2;
  var div1;
  var p;
  var t3;
  var t4;
  var h30;
  var t5;
  var t6;
  var h31;
  var t7;
  var t8;
  var a;
  var span;
  var t9;
  var block = {
    c: function create() {
      div3 = element("div");
      article = element("article");
      img = element("img");
      t0 = space();
      div2 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t1 = text("¿Sos Docente?");
      t2 = space();
      div1 = element("div");
      p = element("p");
      t3 = text("Creemos en la educación como principal motor para generar un real impacto.\r\n                Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      t4 = space();
      h30 = element("h3");
      t5 = text("#TALLERES PEDAGÓGICOS");
      t6 = space();
      h31 = element("h3");
      t7 = text("#ACTIVIDADES");
      t8 = space();
      a = element("a");
      span = element("span");
      t9 = text("Soy Docente");
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
      img = claim_element(article_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(article_nodes);
      div2 = claim_element(article_nodes, "DIV", {});
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "¿Sos Docente?");
      h2_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      p = claim_element(div1_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "Creemos en la educación como principal motor para generar un real impacto.\r\n                Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      p_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      h30 = claim_element(div1_nodes, "H3", {});
      var h30_nodes = children(h30);
      t5 = claim_text(h30_nodes, "#TALLERES PEDAGÓGICOS");
      h30_nodes.forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      h31 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t7 = claim_text(h31_nodes, "#ACTIVIDADES");
      h31_nodes.forEach(detach_dev);
      t8 = claim_space(div1_nodes);
      a = claim_element(div1_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      span = claim_element(a_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t9 = claim_text(span_nodes, "Soy Docente");
      span_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "w-52 sm:w-72 mx-auto mb-6");
      if (img.src !== (img_src_value = "sosdocente-hero.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Ícono de una persona");
      add_location(img, file$5, 2, 2, 141);
      attr_dev(h2, "class", "rounded-sm  p-1 uppercase");
      add_location(h2, file$5, 5, 4, 286);
      attr_dev(div0, "class", " fushia-bg p-2 mb-5");
      add_location(div0, file$5, 4, 3, 247);
      attr_dev(p, "class", "mb-3 font-sans");
      add_location(p, file$5, 10, 4, 394);
      add_location(h30, file$5, 12, 4, 617);
      attr_dev(h31, "class", "mb-3");
      add_location(h31, file$5, 13, 4, 654);
      attr_dev(span, "class", "fushia-bg py-2 px-5 border hover:border-gray-800 border-solid inline-block w-44 text-center ");
      add_location(span, file$5, 15, 35, 754);
      attr_dev(a, "href", "#sos-docente");
      attr_dev(a, "class", "py-3 float-right mt-3");
      add_location(a, file$5, 14, 4, 694);
      attr_dev(div1, "class", "p-3");
      add_location(div1, file$5, 9, 3, 371);
      add_location(div2, file$5, 3, 2, 237);
      attr_dev(article, "class", "grid grid-cols-1 lg:grid-cols-2 md:mx-6 lg:mx-0 items-center");
      add_location(article, file$5, 1, 1, 59);
      attr_dev(div3, "class", "container mx-auto py-12 sm:py-24");
      attr_dev(div3, "id", "home");
      add_location(div3, file$5, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div3, anchor);
      append_dev(div3, article);
      append_dev(article, img);
      append_dev(article, t0);
      append_dev(article, div2);
      append_dev(div2, div0);
      append_dev(div0, h2);
      append_dev(h2, t1);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, p);
      append_dev(p, t3);
      append_dev(div1, t4);
      append_dev(div1, h30);
      append_dev(h30, t5);
      append_dev(div1, t6);
      append_dev(div1, h31);
      append_dev(h31, t7);
      append_dev(div1, t8);
      append_dev(div1, a);
      append_dev(a, span);
      append_dev(span, t9);
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
    id: create_fragment$5.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$5($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("SosDocenteHero", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SosDocenteHero> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var SosDocenteHero = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SosDocenteHero, _SvelteComponentDev);

  var _super = _createSuper$5(SosDocenteHero);

  function SosDocenteHero(options) {
    var _this;

    _classCallCheck(this, SosDocenteHero);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SosDocenteHero",
      options: options,
      id: create_fragment$5.name
    });
    return _this;
  }

  return SosDocenteHero;
}(SvelteComponentDev);

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$4 = "node_modules\\svelte-feather-icons\\src\\icons\\ChevronLeftIcon.svelte";

function create_fragment$4(ctx) {
  var svg;
  var polyline;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      polyline = svg_element("polyline");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, 1);
      var svg_nodes = children(svg);
      polyline = claim_element(svg_nodes, "polyline", {
        points: true
      }, 1);
      children(polyline).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(polyline, "points", "15 18 9 12 15 6");
      add_location(polyline, file$4, 13, 249, 535);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "width",
      /*size*/
      ctx[0]);
      attr_dev(svg, "height",
      /*size*/
      ctx[0]);
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "stroke", "currentColor");
      attr_dev(svg, "stroke-width",
      /*strokeWidth*/
      ctx[1]);
      attr_dev(svg, "stroke-linecap", "round");
      attr_dev(svg, "stroke-linejoin", "round");
      attr_dev(svg, "class", svg_class_value = "feather feather-chevron-left " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file$4, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, polyline);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "width",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "height",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*strokeWidth*/
      2) {
        attr_dev(svg, "stroke-width",
        /*strokeWidth*/
        ctx[1]);
      }

      if (dirty &
      /*customClass*/
      4 && svg_class_value !== (svg_class_value = "feather feather-chevron-left " +
      /*customClass*/
      ctx[2])) {
        attr_dev(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
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

function instance$4($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("ChevronLeftIcon", slots, []);
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "100%" : _$$props$size;
  var _$$props$strokeWidth = $$props.strokeWidth,
      strokeWidth = _$$props$strokeWidth === void 0 ? 2 : _$$props$strokeWidth;
  var _$$props$class = $$props.class,
      customClass = _$$props$class === void 0 ? "" : _$$props$class;

  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }

  var writable_props = ["size", "strokeWidth", "class"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ChevronLeftIcon> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("class" in $$props) $$invalidate(2, customClass = $$props.class);
  };

  $$self.$capture_state = function () {
    return {
      size: size,
      strokeWidth: strokeWidth,
      customClass: customClass
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("customClass" in $$props) $$invalidate(2, customClass = $$props.customClass);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [size, strokeWidth, customClass];
}

var ChevronLeftIcon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ChevronLeftIcon, _SvelteComponentDev);

  var _super = _createSuper$4(ChevronLeftIcon);

  function ChevronLeftIcon(options) {
    var _this;

    _classCallCheck(this, ChevronLeftIcon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ChevronLeftIcon",
      options: options,
      id: create_fragment$4.name
    });
    return _this;
  }

  _createClass(ChevronLeftIcon, [{
    key: "size",
    get: function get() {
      throw new Error("<ChevronLeftIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronLeftIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<ChevronLeftIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronLeftIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ChevronLeftIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronLeftIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ChevronLeftIcon;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "node_modules\\svelte-feather-icons\\src\\icons\\ChevronRightIcon.svelte";

function create_fragment$3(ctx) {
  var svg;
  var polyline;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      polyline = svg_element("polyline");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        xmlns: true,
        width: true,
        height: true,
        fill: true,
        viewBox: true,
        stroke: true,
        "stroke-width": true,
        "stroke-linecap": true,
        "stroke-linejoin": true,
        class: true
      }, 1);
      var svg_nodes = children(svg);
      polyline = claim_element(svg_nodes, "polyline", {
        points: true
      }, 1);
      children(polyline).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(polyline, "points", "9 18 15 12 9 6");
      add_location(polyline, file$3, 13, 250, 536);
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "width",
      /*size*/
      ctx[0]);
      attr_dev(svg, "height",
      /*size*/
      ctx[0]);
      attr_dev(svg, "fill", "none");
      attr_dev(svg, "viewBox", "0 0 24 24");
      attr_dev(svg, "stroke", "currentColor");
      attr_dev(svg, "stroke-width",
      /*strokeWidth*/
      ctx[1]);
      attr_dev(svg, "stroke-linecap", "round");
      attr_dev(svg, "stroke-linejoin", "round");
      attr_dev(svg, "class", svg_class_value = "feather feather-chevron-right " +
      /*customClass*/
      ctx[2]);
      add_location(svg, file$3, 13, 0, 286);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, polyline);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "width",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*size*/
      1) {
        attr_dev(svg, "height",
        /*size*/
        ctx[0]);
      }

      if (dirty &
      /*strokeWidth*/
      2) {
        attr_dev(svg, "stroke-width",
        /*strokeWidth*/
        ctx[1]);
      }

      if (dirty &
      /*customClass*/
      4 && svg_class_value !== (svg_class_value = "feather feather-chevron-right " +
      /*customClass*/
      ctx[2])) {
        attr_dev(svg, "class", svg_class_value);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
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
  validate_slots("ChevronRightIcon", slots, []);
  var _$$props$size = $$props.size,
      size = _$$props$size === void 0 ? "100%" : _$$props$size;
  var _$$props$strokeWidth = $$props.strokeWidth,
      strokeWidth = _$$props$strokeWidth === void 0 ? 2 : _$$props$strokeWidth;
  var _$$props$class = $$props.class,
      customClass = _$$props$class === void 0 ? "" : _$$props$class;

  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }

  var writable_props = ["size", "strokeWidth", "class"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<ChevronRightIcon> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("class" in $$props) $$invalidate(2, customClass = $$props.class);
  };

  $$self.$capture_state = function () {
    return {
      size: size,
      strokeWidth: strokeWidth,
      customClass: customClass
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("size" in $$props) $$invalidate(0, size = $$props.size);
    if ("strokeWidth" in $$props) $$invalidate(1, strokeWidth = $$props.strokeWidth);
    if ("customClass" in $$props) $$invalidate(2, customClass = $$props.customClass);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [size, strokeWidth, customClass];
}

var ChevronRightIcon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(ChevronRightIcon, _SvelteComponentDev);

  var _super = _createSuper$3(ChevronRightIcon);

  function ChevronRightIcon(options) {
    var _this;

    _classCallCheck(this, ChevronRightIcon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      size: 0,
      strokeWidth: 1,
      class: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "ChevronRightIcon",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(ChevronRightIcon, [{
    key: "size",
    get: function get() {
      throw new Error("<ChevronRightIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronRightIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      throw new Error("<ChevronRightIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronRightIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "class",
    get: function get() {
      throw new Error("<ChevronRightIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<ChevronRightIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return ChevronRightIcon;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src\\components\\HeroSlider.svelte"; // (8:0) <Carousel  perPage={{ 800: 1, 500: 1 }} duration={500} >

function create_default_slot(ctx) {
  var div0;
  var home;
  var t;
  var div1;
  var sosdocentehero;
  var current;
  home = new Home({
    $$inline: true
  });
  sosdocentehero = new SosDocenteHero({
    $$inline: true
  });
  var block = {
    c: function create() {
      div0 = element("div");
      create_component(home.$$.fragment);
      t = space();
      div1 = element("div");
      create_component(sosdocentehero.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(home.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(sosdocentehero.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div0, "class", "slide-content px-16 svelte-16we937");
      add_location(div0, file$2, 11, 1, 381);
      attr_dev(div1, "class", "slide-content px-16 svelte-16we937");
      add_location(div1, file$2, 14, 1, 437);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div0, anchor);
      mount_component(home, div0, null);
      insert_dev(target, t, anchor);
      insert_dev(target, div1, anchor);
      mount_component(sosdocentehero, div1, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(home.$$.fragment, local);
      transition_in(sosdocentehero.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(home.$$.fragment, local);
      transition_out(sosdocentehero.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div0);
      destroy_component(home);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div1);
      destroy_component(sosdocentehero);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(8:0) <Carousel  perPage={{ 800: 1, 500: 1 }} duration={500} >",
    ctx: ctx
  });
  return block;
} // (9:1) 


function create_left_control_slot(ctx) {
  var span;
  var chevronlefticon;
  var current;
  chevronlefticon = new ChevronLeftIcon({
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(chevronlefticon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true,
        slot: true
      });
      var span_nodes = children(span);
      claim_component(chevronlefticon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "control");
      attr_dev(span, "slot", "left-control");
      add_location(span, file$2, 8, 1, 301);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(chevronlefticon, span, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chevronlefticon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chevronlefticon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(chevronlefticon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_left_control_slot.name,
    type: "slot",
    source: "(9:1) ",
    ctx: ctx
  });
  return block;
} // (18:1) 


function create_right_control_slot(ctx) {
  var span;
  var chevronrighticon;
  var current;
  chevronrighticon = new ChevronRightIcon({
    $$inline: true
  });
  var block = {
    c: function create() {
      span = element("span");
      create_component(chevronrighticon.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      span = claim_element(nodes, "SPAN", {
        class: true,
        slot: true
      });
      var span_nodes = children(span);
      claim_component(chevronrighticon.$$.fragment, span_nodes);
      span_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "control");
      attr_dev(span, "slot", "right-control");
      add_location(span, file$2, 17, 1, 504);
    },
    m: function mount(target, anchor) {
      insert_dev(target, span, anchor);
      mount_component(chevronrighticon, span, null);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(chevronrighticon.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(chevronrighticon.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(span);
      destroy_component(chevronrighticon);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_right_control_slot.name,
    type: "slot",
    source: "(18:1) ",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var carousel;
  var current;
  carousel = new Carousel({
    props: {
      perPage: {
        800: 1,
        500: 1
      },
      duration: 500,
      $$slots: {
        "right-control": [create_right_control_slot],
        "left-control": [create_left_control_slot],
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(carousel.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(carousel.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(carousel, target, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var carousel_changes = {};

      if (dirty &
      /*$$scope*/
      1) {
        carousel_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      carousel.$set(carousel_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(carousel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(carousel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(carousel, detaching);
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

function instance$2($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("HeroSlider", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<HeroSlider> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Home: Home,
      Carousel: Carousel,
      SosDocenteHero: SosDocenteHero,
      ChevronLeftIcon: ChevronLeftIcon,
      ChevronRightIcon: ChevronRightIcon
    };
  };

  return [];
}

var HeroSlider = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(HeroSlider, _SvelteComponentDev);

  var _super = _createSuper$2(HeroSlider);

  function HeroSlider(options) {
    var _this;

    _classCallCheck(this, HeroSlider);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "HeroSlider",
      options: options,
      id: create_fragment$2.name
    });
    return _this;
  }

  return HeroSlider;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\SosDocente.svelte";

function create_fragment$1(ctx) {
  var section;
  var div9;
  var div1;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var h1;
  var t1;
  var t2;
  var h4;
  var t3;
  var br;
  var t4;
  var t5;
  var div8;
  var div3;
  var div2;
  var h20;
  var t6;
  var t7;
  var p0;
  var t8;
  var t9;
  var h30;
  var t10;
  var t11;
  var a0;
  var span0;
  var t12;
  var t13;
  var div5;
  var div4;
  var h21;
  var t14;
  var t15;
  var p1;
  var t16;
  var t17;
  var h31;
  var t18;
  var t19;
  var span1;
  var t20;
  var t21;
  var div7;
  var div6;
  var h22;
  var t22;
  var t23;
  var p2;
  var t24;
  var t25;
  var h32;
  var t26;
  var t27;
  var a1;
  var span2;
  var t28;
  var block = {
    c: function create() {
      section = element("section");
      div9 = element("div");
      div1 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      h1 = element("h1");
      t1 = text("¿Sos docente?");
      t2 = space();
      h4 = element("h4");
      t3 = text("Creemos en la educación como principal motor para generar un real impacto.\r\n                    ");
      br = element("br");
      t4 = text("\r\n                    Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      t5 = space();
      div8 = element("div");
      div3 = element("div");
      div2 = element("div");
      h20 = element("h2");
      t6 = text("Talleres pedagógicos");
      t7 = space();
      p0 = element("p");
      t8 = text("Organizamos encuentros para trabajar estrategias y herramientas pedagógicas sobre fake news y convivencia digital positiva para trabajar en el aula y debatir con lxs estudiantes.");
      t9 = space();
      h30 = element("h3");
      t10 = text("¿QUERÉS SUMARTE?");
      t11 = space();
      a0 = element("a");
      span0 = element("span");
      t12 = text("Descargar actividades");
      t13 = space();
      div5 = element("div");
      div4 = element("div");
      h21 = element("h2");
      t14 = text("Actividades");
      t15 = space();
      p1 = element("p");
      t16 = text("Pensamos y creamos actividades para trabajar en el aula con lxs estudiantxs basadas en los capítulos del libro Corazones y Mentes, fuera y dentro de internet.");
      t17 = space();
      h31 = element("h3");
      t18 = text("¿QUERÉS PROBAR LAS ACTIVIDADES?");
      t19 = space();
      span1 = element("span");
      t20 = text("cupos agotados");
      t21 = space();
      div7 = element("div");
      div6 = element("div");
      h22 = element("h2");
      t22 = text("Foro docente");
      t23 = space();
      p2 = element("p");
      t24 = text("Estamos creando un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre lxs jóvenes y en las aulas.");
      t25 = space();
      h32 = element("h3");
      t26 = text("¿QUERÉS SER PARTE?");
      t27 = space();
      a1 = element("a");
      span2 = element("span");
      t28 = text("Registrarme");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        id: true,
        class: true
      });
      var section_nodes = children(section);
      div9 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      div1 = claim_element(div9_nodes, "DIV", {
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
      t1 = claim_text(h1_nodes, "¿Sos docente?");
      h1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      h4 = claim_element(div1_nodes, "H4", {
        class: true
      });
      var h4_nodes = children(h4);
      t3 = claim_text(h4_nodes, "Creemos en la educación como principal motor para generar un real impacto.\r\n                    ");
      br = claim_element(h4_nodes, "BR", {});
      t4 = claim_text(h4_nodes, "\r\n                    Por eso brindamos distintas dinámicas para que puedas informarte, debatir e intercambiar ideas.");
      h4_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t5 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div3 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h20 = claim_element(div2_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t6 = claim_text(h20_nodes, "Talleres pedagógicos");
      h20_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t8 = claim_text(p0_nodes, "Organizamos encuentros para trabajar estrategias y herramientas pedagógicas sobre fake news y convivencia digital positiva para trabajar en el aula y debatir con lxs estudiantes.");
      p0_nodes.forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      h30 = claim_element(div3_nodes, "H3", {
        class: true
      });
      var h30_nodes = children(h30);
      t10 = claim_text(h30_nodes, "¿QUERÉS SUMARTE?");
      h30_nodes.forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      a0 = claim_element(div3_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a0_nodes = children(a0);
      span0 = claim_element(a0_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t12 = claim_text(span0_nodes, "Descargar actividades");
      span0_nodes.forEach(detach_dev);
      a0_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t13 = claim_space(div8_nodes);
      div5 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      h21 = claim_element(div4_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t14 = claim_text(h21_nodes, "Actividades");
      h21_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t15 = claim_space(div5_nodes);
      p1 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t16 = claim_text(p1_nodes, "Pensamos y creamos actividades para trabajar en el aula con lxs estudiantxs basadas en los capítulos del libro Corazones y Mentes, fuera y dentro de internet.");
      p1_nodes.forEach(detach_dev);
      t17 = claim_space(div5_nodes);
      h31 = claim_element(div5_nodes, "H3", {
        class: true
      });
      var h31_nodes = children(h31);
      t18 = claim_text(h31_nodes, "¿QUERÉS PROBAR LAS ACTIVIDADES?");
      h31_nodes.forEach(detach_dev);
      t19 = claim_space(div5_nodes);
      span1 = claim_element(div5_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t20 = claim_text(span1_nodes, "cupos agotados");
      span1_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t21 = claim_space(div8_nodes);
      div7 = claim_element(div8_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      div6 = claim_element(div7_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      h22 = claim_element(div6_nodes, "H2", {
        class: true
      });
      var h22_nodes = children(h22);
      t22 = claim_text(h22_nodes, "Foro docente");
      h22_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t23 = claim_space(div7_nodes);
      p2 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t24 = claim_text(p2_nodes, "Estamos creando un espacio para intercambiar ideas, sugerir bibliografía,dialogar y debatir sobre el uso de internet, las redes sociales y la convivencia digital entre lxs jóvenes y en las aulas.");
      p2_nodes.forEach(detach_dev);
      t25 = claim_space(div7_nodes);
      h32 = claim_element(div7_nodes, "H3", {
        class: true
      });
      var h32_nodes = children(h32);
      t26 = claim_text(h32_nodes, "¿QUERÉS SER PARTE?");
      h32_nodes.forEach(detach_dev);
      t27 = claim_space(div7_nodes);
      a1 = claim_element(div7_nodes, "A", {
        href: true,
        target: true,
        class: true
      });
      var a1_nodes = children(a1);
      span2 = claim_element(a1_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t28 = claim_text(span2_nodes, "Registrarme");
      span2_nodes.forEach(detach_dev);
      a1_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "mr-6 my-auto w-12 sm:w-16");
      if (img.src !== (img_src_value = "sos-docente.png")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Logo de una persona");
      add_location(img, file$1, 4, 16, 272);
      add_location(h1, file$1, 5, 16, 378);
      attr_dev(div0, "class", "fushia-bg sm:p-10 flex ");
      add_location(div0, file$1, 3, 12, 217);
      add_location(br, file$1, 9, 20, 594);
      attr_dev(h4, "class", "font-sans my-auto");
      add_location(h4, file$1, 7, 16, 446);
      attr_dev(div1, "class", "grid grid-cols-1 sm:grid-cols-2 fushia-bg sm:bg-white gap-8 mb-10 px-3 py-10 sm:p-0");
      add_location(div1, file$1, 2, 8, 106);
      attr_dev(h20, "class", "uppercase leading-9 text-black ");
      add_location(h20, file$1, 20, 20, 1083);
      attr_dev(div2, "class", "celeste-bg p-5 h-28 flex items-center w-full");
      add_location(div2, file$1, 19, 16, 1003);
      attr_dev(p0, "class", "font-sans p-5 ");
      add_location(p0, file$1, 23, 16, 1212);
      attr_dev(h30, "class", "uppercase text-center black-text px-5 pb-5");
      add_location(h30, file$1, 26, 16, 1458);
      attr_dev(span0, "class", " py-2 px-5 border border-gray-800 border-solid");
      add_location(span0, file$1, 28, 19, 1670);
      attr_dev(a0, "href", "https://drive.google.com/file/d/1ZpCo3Kx5Og0I7tnBVIEElxa1bIkp5MEe/view");
      attr_dev(a0, "target", "_blank");
      attr_dev(a0, "class", "py-3");
      add_location(a0, file$1, 27, 16, 1553);
      attr_dev(div3, "class", "my-3 border border-solid border-gray-300 pb-5 flex flex-col justify-between items-center");
      add_location(div3, file$1, 17, 12, 881);
      attr_dev(h21, "class", "uppercase leading-9 text-black ");
      add_location(h21, file$1, 36, 20, 2025);
      attr_dev(div4, "class", "fushia-bg p-5 h-28 flex items-center w-full");
      add_location(div4, file$1, 35, 16, 1946);
      attr_dev(p1, "class", "font-sans p-5");
      add_location(p1, file$1, 39, 16, 2161);
      attr_dev(h31, "class", "uppercase text-center black-text px-5 pb-5");
      add_location(h31, file$1, 41, 16, 2368);
      attr_dev(span1, "class", "py-2 px-5 border border-gray-800 border-solid");
      add_location(span1, file$1, 43, 15, 2494);
      attr_dev(div5, "class", "my-3 border border-solid border-gray-300  pb-5 flex flex-col justify-between items-center");
      add_location(div5, file$1, 33, 12, 1823);
      attr_dev(h22, "class", "uppercase leading-9 text-white");
      add_location(h22, file$1, 51, 20, 2837);
      attr_dev(div6, "class", "bg-black p-5 h-28 flex items-center w-full");
      add_location(div6, file$1, 50, 16, 2759);
      attr_dev(p2, "class", "font-sans p-5");
      add_location(p2, file$1, 55, 16, 2995);
      attr_dev(h32, "class", "uppercase text-center px-5 pb-5");
      add_location(h32, file$1, 58, 16, 3257);
      attr_dev(span2, "class", " py-2 px-5 border border-gray-800 border-solid");
      add_location(span2, file$1, 61, 19, 3444);
      attr_dev(a1, "href", "https://preguntarparaacordar.typeform.com/to/abLtziWm");
      attr_dev(a1, "target", "_blank");
      attr_dev(a1, "class", "py-3");
      add_location(a1, file$1, 60, 16, 3344);
      attr_dev(div7, "class", "my-3 border border-solid  border-gray-300 pb-5 flex flex-col justify-between items-center");
      add_location(div7, file$1, 48, 12, 2636);
      attr_dev(div8, "class", "px-10 sm:px-0 grid grid-cols-1 sm:grid-cols-3 gap-4");
      add_location(div8, file$1, 15, 8, 788);
      attr_dev(div9, "class", "container mx-auto my-10");
      add_location(div9, file$1, 1, 4, 59);
      attr_dev(section, "id", "sos-docente");
      attr_dev(section, "class", "px-0 py-10 sm:p-10");
      add_location(section, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div9);
      append_dev(div9, div1);
      append_dev(div1, div0);
      append_dev(div0, img);
      append_dev(div0, t0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(div1, t2);
      append_dev(div1, h4);
      append_dev(h4, t3);
      append_dev(h4, br);
      append_dev(h4, t4);
      append_dev(div9, t5);
      append_dev(div9, div8);
      append_dev(div8, div3);
      append_dev(div3, div2);
      append_dev(div2, h20);
      append_dev(h20, t6);
      append_dev(div3, t7);
      append_dev(div3, p0);
      append_dev(p0, t8);
      append_dev(div3, t9);
      append_dev(div3, h30);
      append_dev(h30, t10);
      append_dev(div3, t11);
      append_dev(div3, a0);
      append_dev(a0, span0);
      append_dev(span0, t12);
      append_dev(div8, t13);
      append_dev(div8, div5);
      append_dev(div5, div4);
      append_dev(div4, h21);
      append_dev(h21, t14);
      append_dev(div5, t15);
      append_dev(div5, p1);
      append_dev(p1, t16);
      append_dev(div5, t17);
      append_dev(div5, h31);
      append_dev(h31, t18);
      append_dev(div5, t19);
      append_dev(div5, span1);
      append_dev(span1, t20);
      append_dev(div8, t21);
      append_dev(div8, div7);
      append_dev(div7, div6);
      append_dev(div6, h22);
      append_dev(h22, t22);
      append_dev(div7, t23);
      append_dev(div7, p2);
      append_dev(p2, t24);
      append_dev(div7, t25);
      append_dev(div7, h32);
      append_dev(h32, t26);
      append_dev(div7, t27);
      append_dev(div7, a1);
      append_dev(a1, span2);
      append_dev(span2, t28);
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
  validate_slots("SosDocente", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SosDocente> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var SosDocente = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(SosDocente, _SvelteComponentDev);

  var _super = _createSuper$1(SosDocente);

  function SosDocente(options) {
    var _this;

    _classCallCheck(this, SosDocente);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "SosDocente",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return SosDocente;
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
  var heroslider;
  var t1;
  var pedagogiadigital;
  var t2;
  var todaladata;
  var t3;
  var articulo;
  var t4;
  var kitherramientas;
  var t5;
  var sosdocente;
  var t6;
  var quienessomos;
  var t7;
  var footer;
  var current;
  heroslider = new HeroSlider({
    $$inline: true
  });
  pedagogiadigital = new PedagogiaDigital({
    $$inline: true
  });
  todaladata = new Todaladata({
    $$inline: true
  });
  articulo = new Articulo({
    $$inline: true
  });
  kitherramientas = new KitHerramientas({
    $$inline: true
  });
  sosdocente = new SosDocente({
    $$inline: true
  });
  quienessomos = new QuienesSomos({
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
      create_component(heroslider.$$.fragment);
      t1 = space();
      create_component(pedagogiadigital.$$.fragment);
      t2 = space();
      create_component(todaladata.$$.fragment);
      t3 = space();
      create_component(articulo.$$.fragment);
      t4 = space();
      create_component(kitherramientas.$$.fragment);
      t5 = space();
      create_component(sosdocente.$$.fragment);
      t6 = space();
      create_component(quienessomos.$$.fragment);
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
      claim_component(heroslider.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(pedagogiadigital.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(todaladata.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(articulo.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(kitherramientas.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(sosdocente.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(quienessomos.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      document.title = "Corazones Y Mentes";
      attr_dev(link0, "rel", "preconnect");
      attr_dev(link0, "href", "https://fonts.gstatic.com");
      add_location(link0, file, 22, 1, 904);
      attr_dev(link1, "href", "https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
      attr_dev(link1, "rel", "stylesheet");
      add_location(link1, file, 23, 1, 963);
      script.async = true;
      if (script.src !== (script_src_value = "https://www.googletagmanager.com/gtag/js?id=G-LJWHDC5L57")) attr_dev(script, "src", script_src_value);
      add_location(script, file, 24, 1, 1062);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, link0);
      append_dev(document.head, link1);
      append_dev(document.head, script);
      insert_dev(target, t0, anchor);
      mount_component(heroslider, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(pedagogiadigital, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(todaladata, target, anchor);
      insert_dev(target, t3, anchor);
      mount_component(articulo, target, anchor);
      insert_dev(target, t4, anchor);
      mount_component(kitherramientas, target, anchor);
      insert_dev(target, t5, anchor);
      mount_component(sosdocente, target, anchor);
      insert_dev(target, t6, anchor);
      mount_component(quienessomos, target, anchor);
      insert_dev(target, t7, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(heroslider.$$.fragment, local);
      transition_in(pedagogiadigital.$$.fragment, local);
      transition_in(todaladata.$$.fragment, local);
      transition_in(articulo.$$.fragment, local);
      transition_in(kitherramientas.$$.fragment, local);
      transition_in(sosdocente.$$.fragment, local);
      transition_in(quienessomos.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(heroslider.$$.fragment, local);
      transition_out(pedagogiadigital.$$.fragment, local);
      transition_out(todaladata.$$.fragment, local);
      transition_out(articulo.$$.fragment, local);
      transition_out(kitherramientas.$$.fragment, local);
      transition_out(sosdocente.$$.fragment, local);
      transition_out(quienessomos.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(link0);
      detach_dev(link1);
      detach_dev(script);
      if (detaching) detach_dev(t0);
      destroy_component(heroslider, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(pedagogiadigital, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(todaladata, detaching);
      if (detaching) detach_dev(t3);
      destroy_component(articulo, detaching);
      if (detaching) detach_dev(t4);
      destroy_component(kitherramientas, detaching);
      if (detaching) detach_dev(t5);
      destroy_component(sosdocente, detaching);
      if (detaching) detach_dev(t6);
      destroy_component(quienessomos, detaching);
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
      TodaLaData: Todaladata,
      Articulo: Articulo,
      ForoDocente: ForoDocente,
      KitHerramientas: KitHerramientas,
      QuienesSomos: QuienesSomos,
      PedagogiaDigital: PedagogiaDigital,
      Footer: Footer,
      HeroSlider: HeroSlider,
      onMount: onMount,
      SosDocente: SosDocente
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
