angularjs-mobile
================

A nice boilerplate for starting a [PhoneGap](phonegap.com) application that meant to be compiled via [PhoneGap Build](https://build.phonegap.com/docs/app-building) using [AngularJS](http://angularjs.org/) with routing and anice animation between different views.
In this project there is a use of [jQuery Mobile CSS 1.3.2](http://jquerymobile.com/download/) only.

I used [angular-phonegap-seed](https://github.com/thewildpendulum/angular-phonegap-seed) for the resources library that holds the different images required for icons and splash screens.

#Devices:
This project targeting all PhoneGap Build supported devices.

The project includes a service and a directive:

#Device service
A service that had some device related logic, like glottalization and geolocation

#Button directive
Since this project use only jQuery Mobile CSS file and not the logic of it, we gain the look of jQuery Mobile by placing the exact markup (after jQuery Mobile would render the markup). 
there is a directive meant render each tag with the "mobile-button" attribute to a jQuery Mobile button markup. it has further attributes required (documented in the directive file)


This project also includes a service for wrapping calls to Cordova APIs as presented by Brian Ford in [this awesome blog post](http://briantford.com/blog/angular-phonegap.html).

## Install

I used yeoman generator-angular for boilerplate this project, and grunt to run it, but the important files are at the "app" folder. 

The use of PhoneGap Build will allow you to develop the application using the browser only - technically, no android nor IOS SDK requires in order to run it.  You should test in on a real device dough.  


## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.