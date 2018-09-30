require 'awesome_print'

Jekyll::Hooks.register :site, :post_read do |site|
  site.data["assets"] = {}
  site.config["assets"] = {}

  manifest_path = File.join(site.source, 'assets', 'manifest.json')
  if File.exists?(manifest_path)
    manifest_data = File.read(manifest_path)
    manifest = JSON.parse(manifest_data)
    site.config["assets"] = manifest
    site.data["assets"] = manifest 
  end
end