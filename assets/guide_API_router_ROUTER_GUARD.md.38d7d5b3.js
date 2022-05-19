import{_ as n,c as s,o as a,a as t}from"./app.ee7fdc4e.js";const m='{"title":"ROUTER_GUARD","description":"","frontmatter":{},"headers":[],"relativePath":"guide/API/router/ROUTER_GUARD.md"}',o={},p=t(`<h1 id="router-guard" tabindex="-1">ROUTER_GUARD <a class="header-anchor" href="#router-guard" aria-hidden="true">#</a></h1><p>\u6CE8\u5165\u8DEF\u7531\u5B88\u536B\u7684<a href="https://redi.wendell.fun/docs/identifier" target="_blank" rel="noopener noreferrer">\u8BC6\u522B\u7B26</a></p><ul><li><p>type</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token constant">ROUTER_GUARD</span> <span class="token operator">=</span>
    <span class="token generic-function"><span class="token function">createIdentifier</span><span class="token generic class-name"><span class="token operator">&lt;</span>RouterGuardImplements<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;ROUTER_GUARD&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">RouterGuardImplements</span> <span class="token punctuation">{</span>
    beforeResolve<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
        to<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        from<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        next<span class="token operator">:</span> NavigationGuardNext
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">any</span>
    beforeEach<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
        to<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        from<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        next<span class="token operator">:</span> NavigationGuardNext
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">any</span>
    afterEach<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>
        to<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        from<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        failure<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> NavigationFailure <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>Details</p><ul><li>ROUTER_GUARD \u53EF\u4EE5\u6CE8\u5165\u591A\u4E2A\u8DEF\u7531\u5B88\u536B\uFF0C\u53EA\u8981\u5728\u5728<a href="/Vdi/guide/API/router/VdiRouterModule.html">VdiRouterModule</a>\u6CE8\u5165\u7684<a href="/Vdi/guide/API/vueModule.html">vueModule</a>,\u591A\u6B21\u6CE8\u5165 ROUTER_GUARD \u5373\u53EF</li></ul></li><li><p>Example</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TestGuard</span> <span class="token keyword">implements</span> <span class="token class-name">RouterGuardImplements</span> <span class="token punctuation">{</span>
    <span class="token function">beforeResolve</span><span class="token punctuation">(</span>
        to<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        from<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        next<span class="token operator">:</span> NavigationGuardNext
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeResolve&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token function">beforeEach</span><span class="token punctuation">(</span>
        to<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        from<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        next<span class="token operator">:</span> NavigationGuardNext
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeEach&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    <span class="token function">afterEach</span><span class="token punctuation">(</span>
        to<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        from<span class="token operator">:</span> RouteLocationNormalized<span class="token punctuation">,</span>
        failure<span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">|</span> NavigationFailure <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;afterEach&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">ROUTER_GUARD</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vdi&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TestGuard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Test.Guard.ts&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AppRoutingModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./AppRouting.Module.ts&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> AppModule <span class="token operator">=</span> <span class="token function">vueModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    declarations<span class="token operator">:</span> App<span class="token punctuation">,</span>

    providers<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//\u53EF\u4EE5\u58F0\u660E\u591A\u4E2A\u8DEF\u7531\u5B88\u536B\uFF0C\u683C\u5F0F\u5982\u4E0B</span>
        <span class="token punctuation">[</span><span class="token constant">ROUTER_GUARD</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> useClass<span class="token operator">:</span> TestGuard <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//\u5982\u679C\u591A\u4E2A\u7684\u8BDD</span>
        <span class="token punctuation">[</span><span class="token constant">ROUTER_GUARD</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> useClass<span class="token operator">:</span> TestGuard2 <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    imports<span class="token operator">:</span> <span class="token punctuation">[</span>AppRoutingModule<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ul>`,3),e=[p];function c(l,r,u,i,k,d){return a(),s("div",null,e)}var f=n(o,[["render",c]]);export{m as __pageData,f as default};
