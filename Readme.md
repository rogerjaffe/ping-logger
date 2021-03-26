### Ping Logger

Is your wi-fi dropping out momentarily but you can't convince IT that it's happening?

### Motivation

This is the problem I've been having for years.  The wi-fi in my classroom drops every 30-45 minutes.  It's only down for a 
few seconds, but it's enough to lose connectivity to Google Docs and Zoom.

But our IT department says the wi-fi is "just fine."

Now that we are going back to school as COVID eases up, *all* of our teachers will be teaching online. This will greatly increase the stress on the wi-fi infrastructure.

Use the Ping Logger to ping the Google DNS server at 8.8.8.8 every 5 seconds and log the times that internet connectivity is down.

### Configuration

You can change the ping IP destination and the interval by modifying the MONITOR_IP and DELAY constants at the top of `index.js`.

Logs are generated only when connectivity is down.  Log files are placed in the `logs` folder named with the date.

#### Acknowledgment 

A shout out to Daniel Zelisko and his `ping` (`https://www.npmjs.com/package/ping`) Node package!

##### The fine print

* Obviously there is NO warranty on this package. Use at your own risk. It worked for me -- your mileage may vary.

* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

