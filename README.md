# jobmaps
## find a GIS job in Europe

<img src="https://github.com/globalavocado/jobmaps/blob/master/images/screenshot.png" alt="screenshot" width="75%" height="75%">

I made this little web page to make it easier for myself to visualise job locations while searching different European countries at the same time. The vacancy maps are:

- Austria
- Belgium
- Germany
- Italy
- Spain
- Switzerland
- UK

Thanks to [Geolicious](http://www.geolicious.de/) for creating the jobmaps app on [CartoDB](https://carto.com/), using the [Indeed API](https://www.indeed.co.uk/publisher).

### technologies used:
- HTML / CSS ([flat-ui](http://designmodo.github.io/Flat-UI/), still my favourite bootstrap!)
- javascript, for the back-to-top button

### project status:
fully functional as it is :ghost:

It should be straightforward to adapt the page to show the countries and job keywords you want to search for, all you need to do is hack the URL a bit, or you can go [here](https://job-mapper.com/) for more instructions.

You can only search for vacancies in one country, if you wanted to display several country results on one single European map, you'd have to build another CartoDB app.