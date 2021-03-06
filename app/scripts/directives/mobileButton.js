 /**
 * This directive is a mobile button directive, it allows to create a tag with the attribute
 * of "mobile-button" and then it replace it with the tags in the "Views/DirectiveTemplates" folder
 */
/**
 * a mobile button directive, it allows to create a tag with the attribute - "mobile-button"
 * and add further attributes to it,  the attributes available are:
 * 
 * text       - set the text of the button
 * no-corners - determain that the button will have no round corners
 * float      - determain the float of the button (relevant mostly for headers and footers)
 * icon       - sets the button icon - use the list available at: http://api.jquerymobile.com/icons/
 * icon-side  - left or right
 * no-text    - sets a "no text" button, icon only
 * 
 * @param  {[type]} $timeout [description]
 * @return {[type]}          [description]
 */
 app.directive('mobileButton', function ($timeout) {
    return {
        restrict: 'A',
        templateUrl:"views/directivesTemplates/mobileButton.html",
        replace:true,
        
      
        link: function (scope, elem, attrs) {
           

            // we add the button the class given from the view (a-f)
            elem.addClass("ui-btn-up-" + attrs.buttonClass);


           if(attrs.text){
                elem.find(".ui-btn-text").append(attrs.text);
            }

        
            //no-corners tells to remove the class that makes round corners
            if(attrs.noCorners){
                elem.removeClass("ui-btn-corner-all");
            }

            //float attribute in order to tell the button which place to float (for example - settings button)
            if(attrs.float){           
                    elem.addClass("ui-btn-" + attrs.float);
            }


            //if there is an icon we present it
            if(attrs.icon){

                elem.find('span.ui-icon').addClass("ui-icon-" + attrs.icon);
                elem.find("span.ui-icon").removeClass("hidden");
                elem.find("span.ui-icon").css("display","inline-block");
            }

            //puts the icon on the right
            if(attrs.iconSide){

                elem.addClass("ui-btn-icon-" + attrs.iconSide);
            }

            //telling the button to be a no text button - like the settings button
            if(attrs.noText){
                    elem.addClass("ui-btn-icon-notext");
            }

            /*
            Binds events to the button just in order too make it feel like
            a native button clicked
             */
            elem.bind("mousedown",function(){
                elem.addClass("ui-btn-down-" + attrs.buttonClass)
            })
            elem.bind("mouseup",function(){
                elem.removeClass("ui-btn-down-" + attrs.buttonClass)
            });
            elem.bind("mouseleave",function(){
                elem.removeClass("ui-btn-down-" + attrs.buttonClass)
            });
        }
    }
});