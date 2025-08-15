<template>
  <footer id="footer" class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <!-- Support / Policy Links Bar -->
      <div class="footer-top-bar" aria-label="Support and policy links">
        <ul class="policy-links">
          <li><a href="#" rel="nofollow">Terms</a></li>
            <li><a href="#" rel="nofollow">Privacy</a></li>
            <li><a href="#" rel="nofollow">Accessibility</a></li>
            <li><a href="https://github.com/francprado/Website-Portfolio" target="_blank" rel="noopener noreferrer">Source Code</a></li>
            <li><a href="#contact" @click.prevent="$emit('scroll-request','about')">Contact</a></li>
        </ul>
      </div>

      <!-- Grid Navigation + Contact -->
      <div class="footer-grid" aria-label="Footer navigation groups">
        <nav class="footer-group" aria-labelledby="footer-about">
          <h2 id="footer-about">Overview</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </nav>

        <nav class="footer-group" aria-labelledby="footer-focus">
          <h2 id="footer-focus">Focus Areas</h2>
          <ul>
            <li><a href="#projects">Full‑stack Web</a></li>
            <li><a href="#projects">Data Visualization</a></li>
            <li><a href="#projects">APIs & Integrations</a></li>
            <li><a href="#experience">Cloud & Deployment</a></li>
          </ul>
        </nav>

        <nav class="footer-group" aria-labelledby="footer-resources">
          <h2 id="footer-resources">Resources</h2>
          <ul>
            <li><a href="#projects">Featured Work</a></li>
            <li><a href="#experience">Career Timeline</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#leadership">Leadership</a></li>
          </ul>
        </nav>

        <!-- Contact / Social Column -->
        <section class="footer-group contact-group" aria-labelledby="footer-contact" id="contact">
          <h2 id="footer-contact">Get in Touch</h2>
          <p class="contact-blurb">Open to collaboration, freelance work, and full‑time opportunities.</p>
          <ul class="contact-list">
            <li>
              <strong>Email:</strong>
              <a href="mailto:francisallen148@gmail.com">francisallen148@gmail.com</a>
            </li>
            <li><strong>Location:</strong> Philippines (Remote‑friendly)</li>
            <li><strong>Focus:</strong> Vue / Node / Data</li>
          </ul>
          <div class="footer-social">
            <SocialIcons inline />
          </div>
        </section>
      </div>

      <div class="footer-bottom">
        <p class="copyright">© {{ year }} Francis Allen Prado. Built with Vue 3 & modern tooling. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialIcons from '@/components/ui/SocialIcons.vue';
const year = new Date().getFullYear();
defineEmits(['scroll-request']);
</script>

<style scoped>
.site-footer { padding:0 0 var(--space-xl); }
.footer-inner { width:100%; max-width:100%; margin:0; }
.footer-top-bar { border-radius:0; margin:0 0 var(--space-2xl); padding:.75rem 1.25rem; border-left:none; border-right:none; width:100%; }
.footer-grid { padding:0 1.25rem; }
.footer-bottom { padding:.9rem 1.25rem 0; }
@media (max-width:480px){ .footer-top-bar { padding:.75rem 1rem; } .footer-grid { padding:0 1rem; } .footer-bottom { padding:.9rem 1rem 0; } }

.policy-links { list-style:none; display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; padding:0; margin:0; font-size: var(--fs-xs); }
.policy-links li { position:relative; }
.policy-links li+li::before { content:""; position:absolute; left:-.45rem; top:50%; transform:translateY(-50%); width:2px; height:14px; background:linear-gradient(180deg,#6366f1,#8b5cf6); opacity:.35; border-radius:2px; }
.policy-links a { color: var(--color-text-muted); text-decoration:none; padding:.15rem .4rem; border-radius: var(--radius-sm); transition: background .3s var(--ease-standard), color .3s var(--ease-standard); }
.policy-links a:hover, .policy-links a:focus-visible { color:#fff; background:rgba(139,92,246,.18); outline:none; }

.footer-grid { display:grid; gap: clamp(1.5rem, 3vw, 3rem) clamp(1.5rem, 3vw, 3.5rem); grid-template-columns: repeat(auto-fit,minmax(180px,1fr)); margin-bottom: var(--space-xl); }
.footer-group { position:relative; }
.footer-group h2 { font-size: var(--fs-sm); margin:0 0 .8rem; font-weight:600; letter-spacing:.04em; text-transform:uppercase; background:linear-gradient(90deg,#fff,#a1a1aa); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
.footer-group ul { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:.5rem; }
.footer-group a { color: var(--color-text-secondary); font-size: var(--fs-xs); text-decoration:none; line-height:1.3; position:relative; padding:.2rem 0; transition: color .25s var(--ease-standard); }
.footer-group a::after { content:""; position:absolute; left:0; bottom:0; width:0; height:1px; background:linear-gradient(90deg,#6366f1,#8b5cf6); transition: width .35s var(--ease-standard); border-radius:1px; }
.footer-group a:hover, .footer-group a:focus-visible { color:#fff; outline:none; }
.footer-group a:hover::after, .footer-group a:focus-visible::after { width:65%; }

.contact-group { background: var(--color-bg-glass); border:1px solid var(--color-surface-border); padding:1rem 1.1rem 1.25rem; border-radius: var(--radius-lg); backdrop-filter: blur(14px); box-shadow:0 6px 28px -6px rgba(0,0,0,.5); }
.contact-blurb { font-size: var(--fs-xs); line-height:1.4; color: var(--color-text-muted); margin:0 0 .75rem; }
.contact-list { list-style:none; padding:0; margin:0 0 1rem; display:flex; flex-direction:column; gap:.35rem; font-size: var(--fs-xs); }
.contact-list li { color: var(--color-text-secondary); } /* fixed variable spacing */
.contact-list a { color: var(--color-text-accent); text-decoration:none; }
.contact-list a:hover { text-decoration:underline; }
.footer-social { margin-top:.25rem; }

.footer-bottom { border-top:1px solid rgba(255,255,255,0.08); padding-top: .9rem; }
.footer-bottom p { margin:0; font-size: calc(var(--fs-xs) * 0.9); color: var(--color-text-muted); line-height:1.5; letter-spacing:.02em; }

/* Light mode overrides leveraging extracted stylesheet tokens */
body.light-mode .footer-top-bar { background: rgba(255,255,255,.7); border-color: rgba(139,92,246,.18); }
body.light-mode .policy-links a { color:#6b7280; }
body.light-mode .policy-links a:hover { color:#1f2937; }
body.light-mode .footer-group h2 { background:linear-gradient(90deg,#1f2937,#6366f1); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
body.light-mode .footer-group a { color:#4b5563; }
body.light-mode .footer-group a:hover { color:#1f2937; }
body.light-mode .contact-group { background: rgba(255,255,255,.8); border-color: rgba(139,92,246,.25); }
body.light-mode .contact-blurb { color:#6b7280; }
body.light-mode .contact-list li { color:#374151; }
body.light-mode .footer-bottom p { color:#6b7280; }

@media (max-width: 760px) {
  .contact-group { grid-column: 1 / -1; }
  .footer-grid { gap:1.75rem 1.25rem; }
  .footer-group h2 { font-size: .8rem; }
}

@media (max-width: 480px) {
  .site-footer { padding-bottom: var(--space-lg); }
  .footer-top-bar { margin-bottom: var(--space-xl); }
  .policy-links { gap:.5rem .75rem; }
}
</style>