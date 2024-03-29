/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MultiTagPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");

// src/TagModal.ts
var import_obsidian = require("obsidian");

// node_modules/svelte/src/runtime/internal/utils.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

// node_modules/svelte/src/runtime/internal/globals.js
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);

// node_modules/svelte/src/runtime/internal/ResizeObserverSingleton.js
var ResizeObserverSingleton = class {
  /** @param {ResizeObserverOptions} options */
  constructor(options) {
    /**
     * @private
     * @readonly
     * @type {WeakMap<Element, import('./private.js').Listener>}
     */
    __publicField(this, "_listeners", "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0);
    /**
     * @private
     * @type {ResizeObserver}
     */
    __publicField(this, "_observer");
    /** @type {ResizeObserverOptions} */
    __publicField(this, "options");
    this.options = options;
  }
  /**
   * @param {Element} element
   * @param {import('./private.js').Listener} listener
   * @returns {() => void}
   */
  observe(element2, listener) {
    this._listeners.set(element2, listener);
    this._getObserver().observe(element2, this.options);
    return () => {
      this._listeners.delete(element2);
      this._observer.unobserve(element2);
    };
  }
  /**
   * @private
   */
  _getObserver() {
    var _a;
    return (_a = this._observer) != null ? _a : this._observer = new ResizeObserver((entries) => {
      var _a2;
      for (const entry of entries) {
        ResizeObserverSingleton.entries.set(entry.target, entry);
        (_a2 = this._listeners.get(entry.target)) == null ? void 0 : _a2(entry);
      }
    });
  }
};
ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;

// node_modules/svelte/src/runtime/internal/dom.js
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function select_option(select, value, mounting) {
  for (let i = 0; i < select.options.length; i += 1) {
    const option = select.options[i];
    if (option.__value === value) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
function select_value(select) {
  const selected_option = select.querySelector(":checked");
  return selected_option && selected_option.__value;
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach(
    /** @param {Element} node */
    (node) => {
      result[node.slot || "default"] = true;
    }
  );
  return result;
}

// node_modules/svelte/src/runtime/internal/lifecycle.js
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

// node_modules/svelte/src/runtime/internal/scheduler.js
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}

// node_modules/svelte/src/runtime/internal/transitions.js
var outroing = /* @__PURE__ */ new Set();
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

// node_modules/svelte/src/shared/boolean_attributes.js
var _boolean_attributes = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
);
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);

// node_modules/svelte/src/runtime/internal/Component.js
function mount_component(component, target, anchor) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  add_render_callback(() => {
    const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
    if (component.$$.on_destroy) {
      component.$$.on_destroy.push(...new_on_destroy);
    } else {
      run_all(new_on_destroy);
    }
    component.$$.on_mount = [];
  });
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance2, create_fragment2, not_equal, props, append_styles = null, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles && append_styles($$.root);
  let ready = false;
  $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor($$componentCtor, $$slots, use_shadow_dom) {
      super();
      /** The Svelte component constructor */
      __publicField(this, "$$ctor");
      /** Slots */
      __publicField(this, "$$s");
      /** The Svelte component instance */
      __publicField(this, "$$c");
      /** Whether or not the custom element is connected */
      __publicField(this, "$$cn", false);
      /** Component props data */
      __publicField(this, "$$d", {});
      /** `true` if currently in the process of reflecting component props back to attributes */
      __publicField(this, "$$r", false);
      /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
      __publicField(this, "$$p_d", {});
      /** @type {Record<string, Function[]>} Event listeners */
      __publicField(this, "$$l", {});
      /** @type {Map<Function, Function>} Event listener unsubscribe functions */
      __publicField(this, "$$l_u", /* @__PURE__ */ new Map());
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (use_shadow_dom) {
        this.attachShadow({ mode: "open" });
      }
    }
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return () => {
            let node;
            const obj = {
              c: function create() {
                node = element("slot");
                if (name !== "default") {
                  attr(node, "name", name);
                }
              },
              /**
               * @param {HTMLElement} target
               * @param {HTMLElement} [anchor]
               */
              m: function mount(target, anchor) {
                insert(target, node, anchor);
              },
              d: function destroy(detaching) {
                if (detaching) {
                  detach(node);
                }
              }
            };
            return obj;
          };
        };
        await Promise.resolve();
        if (!this.$$cn) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            $$slots[name] = [create_slot(name)];
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        this.$$c = new this.$$ctor({
          target: this.shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$scope: {
              ctx: []
            }
          }
        });
        const reflect_attributes = () => {
          this.$$r = true;
          for (const key in this.$$p_d) {
            this.$$d[key] = this.$$c.$$.ctx[this.$$c.$$.props[key]];
            if (this.$$p_d[key].reflect) {
              const attribute_value = get_custom_element_value(
                key,
                this.$$d[key],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key].attribute || key);
              } else {
                this.setAttribute(this.$$p_d[key].attribute || key, attribute_value);
              }
            }
          }
          this.$$r = false;
        };
        this.$$c.$$.after_update.push(reflect_attributes);
        reflect_attributes();
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    attributeChangedCallback(attr2, _oldValue, newValue) {
      var _a;
      if (this.$$r)
        return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      (_a = this.$$c) == null ? void 0 : _a.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn) {
          this.$$c.$destroy();
          this.$$c = void 0;
        }
      });
    }
    $$g_p(attribute_name) {
      return Object.keys(this.$$p_d).find(
        (key) => this.$$p_d[key].attribute === attribute_name || !this.$$p_d[key].attribute && key.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop, value, props_definition, transform) {
  var _a;
  const type = (_a = props_definition[prop]) == null ? void 0 : _a.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
var SvelteComponent = class {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    __publicField(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(type, callback) {
    if (!is_function(callback)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(props) {
    if (this.$$set && !is_empty(props)) {
      this.$$.skip_bound = true;
      this.$$set(props);
      this.$$.skip_bound = false;
    }
  }
};

// node_modules/svelte/src/shared/version.js
var PUBLIC_VERSION = "4";

// node_modules/svelte/src/runtime/internal/disclose-version/index.js
if (typeof window !== "undefined")
  (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(PUBLIC_VERSION);

// src/TagForm.svelte
function create_fragment(ctx) {
  let span;
  let t1;
  let form;
  let select;
  let option0;
  let t2;
  let option0_selected_value;
  let option1;
  let t3;
  let option1_selected_value;
  let t4;
  let input;
  let t5;
  let div;
  let button0;
  let t7;
  let button1;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      span.textContent = "If you add multiple tags, separate them with commas. Do not add '#'.";
      t1 = space();
      form = element("form");
      select = element("select");
      option0 = element("option");
      t2 = text("Inline");
      option1 = element("option");
      t3 = text("YAML");
      t4 = space();
      input = element("input");
      t5 = space();
      div = element("div");
      button0 = element("button");
      button0.textContent = "Submit";
      t7 = space();
      button1 = element("button");
      button1.textContent = "Cancel";
      option0.__value = "inline";
      set_input_value(option0, option0.__value);
      option0.selected = option0_selected_value = /*option*/
      ctx[1] === "inline";
      option1.__value = "yaml";
      set_input_value(option1, option1.__value);
      option1.selected = option1_selected_value = /*option*/
      ctx[1] === "yaml";
      if (
        /*option*/
        ctx[1] === void 0
      )
        add_render_callback(() => (
          /*select_change_handler*/
          ctx[5].call(select)
        ));
      attr(input, "id", "tagInput");
      attr(input, "type", "text");
      attr(button0, "type", "submit");
      attr(button0, "class", "mod-cta");
      attr(div, "class", "modal-button-container");
      attr(form, "class", "modal-form");
    },
    m(target, anchor) {
      insert(target, span, anchor);
      insert(target, t1, anchor);
      insert(target, form, anchor);
      append(form, select);
      append(select, option0);
      append(option0, t2);
      append(select, option1);
      append(option1, t3);
      select_option(
        select,
        /*option*/
        ctx[1],
        true
      );
      append(form, t4);
      append(form, input);
      set_input_value(
        input,
        /*value*/
        ctx[0]
      );
      append(form, t5);
      append(form, div);
      append(div, button0);
      append(div, t7);
      append(div, button1);
      if (!mounted) {
        dispose = [
          listen(
            select,
            "change",
            /*select_change_handler*/
            ctx[5]
          ),
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[6]
          ),
          listen(button1, "click", function() {
            if (is_function(
              /*closeModal*/
              ctx[2]
            ))
              ctx[2].apply(this, arguments);
          }),
          listen(
            form,
            "submit",
            /*onSubmit*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty & /*option*/
      2 && option0_selected_value !== (option0_selected_value = /*option*/
      ctx[1] === "inline")) {
        option0.selected = option0_selected_value;
      }
      if (dirty & /*option*/
      2 && option1_selected_value !== (option1_selected_value = /*option*/
      ctx[1] === "yaml")) {
        option1.selected = option1_selected_value;
      }
      if (dirty & /*option*/
      2) {
        select_option(
          select,
          /*option*/
          ctx[1]
        );
      }
      if (dirty & /*value*/
      1 && input.value !== /*value*/
      ctx[0]) {
        set_input_value(
          input,
          /*value*/
          ctx[0]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(span);
        detach(t1);
        detach(form);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { value } = $$props;
  let { option } = $$props;
  let { closeModal } = $$props;
  let { submission } = $$props;
  function onSubmit(e) {
    e.preventDefault();
    submission(value, option);
  }
  onMount(() => {
    const tagInput = document.getElementById("tagInput");
    setTimeout(
      () => {
        tagInput.focus();
      },
      0
    );
  });
  function select_change_handler() {
    option = select_value(this);
    $$invalidate(1, option);
  }
  function input_input_handler() {
    value = this.value;
    $$invalidate(0, value);
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(0, value = $$props2.value);
    if ("option" in $$props2)
      $$invalidate(1, option = $$props2.option);
    if ("closeModal" in $$props2)
      $$invalidate(2, closeModal = $$props2.closeModal);
    if ("submission" in $$props2)
      $$invalidate(4, submission = $$props2.submission);
  };
  return [
    value,
    option,
    closeModal,
    onSubmit,
    submission,
    select_change_handler,
    input_input_handler
  ];
}
var TagForm = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      value: 0,
      option: 1,
      closeModal: 2,
      submission: 4
    });
  }
};
var TagForm_default = TagForm;

// src/TagModal.ts
var TagModal = class extends import_obsidian.Modal {
  constructor(app, base, option = "inline", submission) {
    super(app);
    this.default = "";
    this.option = "inline";
    if (base instanceof import_obsidian.TFolder) {
      this.default = `${base.name.replace(" ", "-")}`;
    }
    this.base = base;
    this.submission = submission;
    this.option = option;
  }
  async onOpen() {
    this.titleEl.createEl("h2", { text: "Please type in a tag." });
    console.log(this.option);
    this.component = new TagForm_default({
      target: this.contentEl,
      props: {
        value: this.default,
        option: this.option,
        closeModal: () => this.close(),
        submission: this.onSubmit.bind(this)
      }
    });
  }
  onSubmit(input, option) {
    const trimmed = input.replace(/ /g, "");
    this.submission(this.base, trimmed, option);
    this.close();
  }
};

// src/SettingTab.ts
var import_obsidian2 = require("obsidian");
var SettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    let { containerEl } = this;
    containerEl.empty();
    new import_obsidian2.Setting(containerEl).setName("YAML or Inline").setDesc("Choose whether to use YAML or inline tags.").addDropdown((dropdown) => {
      dropdown.addOption("inline", "Inline");
      dropdown.addOption("yaml", "YAML");
      dropdown.setValue(this.plugin.settings.yamlOrInline);
      dropdown.onChange(async (value) => {
        this.plugin.settings.yamlOrInline = value;
        await this.plugin.saveSettings();
      });
    });
  }
};

// src/main.ts
var defaultSettings = {
  yamlOrInline: "inline"
};
var MultiTagPlugin = class extends import_obsidian3.Plugin {
  //Set as Events to unload when needed.
  async onload() {
    await this.loadSettings();
    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file, source) => {
        if (file instanceof import_obsidian3.TFolder) {
          menu.addItem((item) => {
            item.setIcon("tag").setTitle("Tag folder's files").onClick(
              () => new TagModal(
                this.app,
                file,
                this.settings.yamlOrInline,
                async (obj, string, setting) => {
                  this.settings.yamlOrInline = setting;
                  await this.saveSettings();
                  this.searchThroughFolders(obj, string);
                }
              ).open()
            );
          });
        }
      })
    );
    this.registerEvent(
      this.app.workspace.on("files-menu", (menu, files, source) => {
        menu.addItem((item) => {
          item.setIcon("tag").setTitle("Tag selected files").onClick(
            () => new TagModal(
              this.app,
              files,
              this.settings.yamlOrInline,
              async (obj, string, setting) => {
                this.settings.yamlOrInline = setting;
                await this.saveSettings();
                this.searchThroughFiles(obj, string);
              }
            ).open()
          );
        });
      })
    );
    this.registerEvent(
      this.app.workspace.on("search:results-menu", (menu, leaf) => {
        menu.addItem((item) => {
          item.setIcon("tag").setTitle("Add tags to search results").onClick(() => {
            let files = [];
            leaf.dom.vChildren.children.forEach((e) => {
              files.push(e.file);
            });
            new TagModal(
              this.app,
              files,
              this.settings.yamlOrInline,
              async (obj, string, setting) => {
                this.settings.yamlOrInline = setting;
                await this.saveSettings();
                this.searchThroughFiles(obj, string);
              }
            ).open();
          });
        });
      })
    );
    this.addSettingTab(new SettingTab(this.app, this));
  }
  /** Get all files belonging to a folder. */
  searchThroughFolders(obj, string) {
    for (let child of obj.children) {
      if (child instanceof import_obsidian3.TFolder) {
        this.searchThroughFolders(child, string);
      }
      if (child instanceof import_obsidian3.TFile && child.extension === "md") {
        if (this.settings.yamlOrInline === "inline") {
          this.appendToFile(child, string);
        } else {
          this.addToFrontMatter(child, string);
        }
      }
    }
  }
  /** Iterate through a selection of files. */
  searchThroughFiles(arr, string) {
    for (let el of arr) {
      if (el instanceof import_obsidian3.TFile && el.extension === "md") {
        if (this.settings.yamlOrInline === "inline") {
          this.appendToFile(el, string);
        } else {
          this.addToFrontMatter(el, string);
        }
      }
    }
  }
  /** Add a tag to the bottom of a note. */
  appendToFile(file, string) {
    const tags = string.split(",");
    for (let tag of tags) {
      this.app.vault.append(file, `
#${tag}`);
    }
  }
  /** Add tags to the top of a note. */
  addToFrontMatter(file, string) {
    const tags = string.split(",");
    this.app.fileManager.processFrontMatter(file, (fm) => {
      if (!fm.tags) {
        fm.tags = new Set(tags);
      } else {
        let curTags = [...fm.tags];
        if (fm.TAGS) {
          curTags.push(...fm.TAGS);
          delete fm.TAGS;
        }
        if (fm.Tags) {
          curTags.push(...fm.Tags);
          delete fm.Tags;
        }
        fm.tags = /* @__PURE__ */ new Set([...curTags, ...tags]);
      }
    });
  }
  async loadSettings() {
    this.settings = Object.assign({}, defaultSettings, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
