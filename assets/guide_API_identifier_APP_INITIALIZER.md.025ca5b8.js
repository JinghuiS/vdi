import{_ as n,c as s,o as a,a as t}from"./app.ee7fdc4e.js";const _='{"title":"APP_INITIALIZER","description":"","frontmatter":{},"headers":[],"relativePath":"guide/API/identifier/APP_INITIALIZER.md"}',p={},o=t(`<h1 id="app-initializer" tabindex="-1">APP_INITIALIZER <a class="header-anchor" href="#app-initializer" aria-hidden="true">#</a></h1><p>\u5728 vue \u5B9E\u4F8B\u6302\u8F7D\u4E4B\u524D\u6267\u884C promise \u7684<a href="https://redi.wendell.fun/docs/identifier" target="_blank" rel="noopener noreferrer">\u8BC6\u522B\u7B26</a></p><ul><li><p>type</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token constant">APP_INITIALIZER</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createIdentifier</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">APP_INITIALIZER_TYPE</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token string">&#39;Application Initializer&#39;</span>
<span class="token punctuation">)</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">APP_INITIALIZER_TYPE</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">startup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Details<br> \u5F53 APP_INITIALIZER \u88AB\u4F20\u5165\u6839\u6A21\u5757\u65F6\uFF0C\u5B83\u4F1A\u5728 vue \u5B9E\u4F8B\u6302\u8F7D\u4E4B\u524D\u6267\u884C\uFF0C\u5E76\u4E14\u7B49\u5F85 APP_INITIALIZER \u8FD0\u884C\u5B8C\u6210\u624D\u4F1A\u7EE7\u7EED\u6267\u884C</p></li><li><p>Example</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@wendellhu/redi&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
    <span class="token constant">APP_INITIALIZER</span><span class="token punctuation">,</span>
    <span class="token constant">APP_INITIALIZER_TYPE</span><span class="token punctuation">,</span>
    createModule<span class="token punctuation">,</span>
    vueModule<span class="token punctuation">,</span>
    CommonModule
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vdi&#39;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">TestReactiveService</span> <span class="token punctuation">{</span>
    test <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u53EF\u4EE5\u5728vue\u6302\u8F7D\u4E4B\u524D\u53D1\u9001\u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD4\u56DE\u54CD\u5E94\u6570\u636E\u6CE8\u5165vue\u5B9E\u4F8B\u4E2D</span>
<span class="token keyword">class</span> <span class="token class-name">TestAppInitializer</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">APP_INITIALIZER_TYPE</span></span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>
        <span class="token decorator"><span class="token at operator">@</span><span class="token function">Inject</span></span><span class="token punctuation">(</span>TestReactiveService<span class="token punctuation">)</span>
        <span class="token keyword">public</span> TestReactiveService<span class="token operator">:</span> TestReactiveService
    <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token function">startup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>TestReactiveService<span class="token punctuation">.</span>test<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> AppModule <span class="token operator">=</span> <span class="token function">vueModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    declarations<span class="token operator">:</span> App<span class="token punctuation">,</span>
    imports<span class="token operator">:</span> <span class="token punctuation">[</span>CommonModule<span class="token punctuation">,</span> AppRouteingModule<span class="token punctuation">]</span><span class="token punctuation">,</span>
    providers<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>TestReactiveService<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//\u4F1A\u5728mount\u4E4B\u524D\u6267\u884C,\u5E76\u4E14\u7B49\u5F85startup\u6267\u884C\u5B8C\u6BD5</span>
        <span class="token punctuation">[</span><span class="token constant">APP_INITIALIZER</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> useClass<span class="token operator">:</span> TestAppInitializer <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">createModule</span><span class="token punctuation">(</span>AppModule<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ul>`,3),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{_ as __pageData,m as default};
