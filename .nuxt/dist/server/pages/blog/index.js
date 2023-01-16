exports.ids = [8,3];
exports.modules = {

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogItem.vue?vue&type=template&id=639bee7e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<article class=\"relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]\">","</article>",[_vm._ssrNode("<h3 class=\"mb-4 text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200\">","</h3>",[_c('NuxtLink',{attrs:{"to":{ name: 'blog-slug', params: { slug: _vm.postSlug } }}},[_vm._v("\n        "+_vm._s(_vm.postTitle))])],1),_vm._ssrNode(" <div class=\"mb-6 prose prose-slate dark:prose-dark\"><p>"+_vm._ssrEscape("\n        "+_vm._s(_vm.postDescription)+"\n      ")+"</p></div> <div class=\"mt-auto flex flex-row-reverse items-center justify-end\"><dl><dt class=\"sr-only\">Date</dt> <dd class=\"text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold\"><time datetime=\"2022-02-24T12:00:00.000Z\" class=\"bg-indigo-500 text-white py-1 px-2 rounded-md\">"+_vm._ssrEscape(_vm._s(_vm.formatDate(_vm.postDate)))+"</time></dd></dl></div> <br>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blogItem.vue?vue&type=template&id=639bee7e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blogItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var blogItemvue_type_script_lang_js_ = ({
  props: ["title", "description", "date", "slug"],

  data() {
    return {
      postTitle: this.title,
      postDescription: this.description,
      postSlug: this.slug,
      postDate: this.date
    };
  },

  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      return new Date(date).toLocaleDateString("en", options);
    }

  }
});
// CONCATENATED MODULE: ./components/blogItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_blogItemvue_type_script_lang_js_ = (blogItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/blogItem.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_blogItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "421e513b"
  
)

/* harmony default export */ var blogItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=template&id=7cc3516c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header class=\"pt-16 pb-9 sm:pb-16 sm:text-center\"><h1 class=\"mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200\">\n       Posts\n    </h1> <p class=\"text-lg text-slate-700 dark:text-slate-400\">\n      Descriptions to the projects that I've done.\n    </p></header> "),_vm._ssrNode("<div class=\"space-y-16 mx-auto max-w-7xl\">","</div>",_vm._l((_vm.articles),function(article){return _c('blog-item',{key:article.title,attrs:{"title":article.title,"description":article.description,"date":article.date,"slug":article.slug}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=template&id=7cc3516c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var blogvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const articles = await $content("articles").only(["title", "description", "img", "slug", "tag", "author", "date", "draft"]).sortBy("date", "desc").fetch();
    return {
      articles
    };
  },

  head: {
    title: "Aruzhan | Blogs",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      hid: "description",
      name: "description",
      content: "Its Aruzhan's Pen and Paper to write "
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  }
});
// CONCATENATED MODULE: ./pages/blog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_blogvue_type_script_lang_js_ = (blogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_blogvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "fca0fdda"
  
)

/* harmony default export */ var blog = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BlogItem: __webpack_require__(84).default})


/***/ })

};;
//# sourceMappingURL=index.js.map