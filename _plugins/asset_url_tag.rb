module Demaree
  class WebpackAssetTag < Liquid::Tag
    def initialize(tag_name, path, tokens)
      super
      @path = path.strip.gsub(/["']/, '')
    end

    def render(ctx)
      site = ctx.registers[:site]
      assets = site.config["assets"]

      # If asset manifest isn't available, just return the path itself
      # It'll probably work in dev mode!
      assets[@path] || "/assets/#{@path}"
    end
  end
end

Liquid::Template.register_tag('webpack_asset_url', Demaree::WebpackAssetTag)