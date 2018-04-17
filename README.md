# PWA_ALC
This is the PWA repo for the Andela Take A Climb challenge

The PWA is built in vanilla Javascript with no libraries / frameworks. 

The frontend is handled by the MaterializeCSS framework to ease work.

Functionality includes the following:

- Users should be able to view top headlines based on country (filters)
- Users should be able to search through a list of sources.
- Users should be able to select sources and view headlines based on sources (filters).
- Users should be able to click links to the original articles and be redirected to them on a new tab.

TODO
- There should be push notifications when there are new headlines
- Users should be able to create lists (e.g. favourites) and group articles in these lists.
- Remove cache dependency and use IndexedDB

NOTE:
- Source code must be run from a server unless service worker registration fails.
You could use the apache test server setup or which ever setup is preferable.
*php -S localhost:8080 -t .*

- Run with sudo if you work on linux

