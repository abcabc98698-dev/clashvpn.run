// Static asset worker entry point for Cloudflare Workers static assets deployment.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
