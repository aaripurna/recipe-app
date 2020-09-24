# To be used in config/routes.rb

class ApiConstraints
  @@lowest_version = nil
  @@highest_version = 0

  def self.lowest_version
    @@lowest_version
  end

  def self.highest_version
    @@highest_version
  end

  def initialize(options)
    @version = options[:version]
    @default = options[:default]

    @@lowest_version = [@version].flatten.min if @default
    @@highest_version = [@@highest_version, @version].flatten.max
  end

  def matches?(req)
    @default || req.headers["Accept"] =~ regex
  end

  private

  def format_version
    if @version.instance_of?(Array)
      @version.join(",")
    else
      @version
    end
  end

  def regex
    /application\/vnd.v[#{format_version}]\+json/
    # e.g. application/vnd.transit_protocol.v1+json
    #      application/vnd.transit_protocol.v2+json
    #      application/vnd.transit_protocol.v3+json
  end
end
