import GhostContentAPI from "@tryghost/content-api";

// Create an API instance with my site credentials
const api = new GhostContentAPI({
  url: 'https://www.cms.galen-lewis.tech',
  key: 'e549fe0f4a85401eadeeee89db',
  version: "v3"
});