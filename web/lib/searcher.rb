module Searcher

  def self.search(options={})

    # Stub results to test search
    # TODO: Use actual database
    results =
      [
       {
         :title => 'Mountain Bike',
         :body => 'Really cool BMX',
         :picture => 'http://images.craigslist.org/3La3Fa3Id5I25G75F4d1g37f9023b1e6b1dc7.jpg',
         :url => 'http://philadelphia.craigslist.org/bik/3550003235.html'
       },
       {
         :title => 'Blue Bike',
         :body => 'This bike is SO Blue!',
         :picture => 'http://images.craigslist.org/3G33k93J85L65I55E4d1574304fdedbef1cb3.jpg',
         :url => 'http://philadelphia.craigslist.org/bik/3523670992.html'
       }
      ]

    results

  end

end
