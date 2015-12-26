define(["jquery","text!navigation/navigation.html","css!navigation/navigation.css"],function(a,b){"use strict";function c(b){var c=a("#nav-menu"),d=a("#mobile-nav"),e=a("#nav-toggle"),f="nav-normal-menu",g="nav-mobile-menu";b.matches?d.is(":visible")||e.removeClass("nav-toggle-active"):(c.hasClass(g)&&c.removeClass(g).addClass(f),c.parents("#mobile-nav").length&&c.unwrap(),c.find("li > ul").each(function(){a(this).removeAttr("style")}))}function d(){var b=a("#nav-menu"),c="nav-normal-menu",d="nav-mobile-menu";b.hasClass(c)?(b.removeClass(c).addClass(d),b.wrap("<div id='mobile-nav'></div>"),a("#mobile-nav").animate({left:"+=280"},320)):b.hasClass(d)&&a("#mobile-nav").animate({left:"-=280"},320,function(){b.removeClass(d).addClass(c),b.unwrap()})}function e(){a("#nav-menu li > ul li").each(function(){var b=a(this);b.hasClass("update-list-item-handlers")||(b.addClass("update-list-item-handlers"),b.on("click",function(){var b="nav-normal-menu",c="nav-mobile-menu",e=a(this),f=e.parents("#nav-menu"),g=e.find("ul").length>0;f.hasClass(b)?g||e.parent("ul").not("#nav-menu").toggleClass("nav-closed"):f.hasClass(c)&&(g||a("#mobile-nav").animate({left:"-=280"},320,function(){a("#nav-toggle").removeClass("nav-toggle-active"),d()}))}))}),a("#nav-menu.nav-normal-menu li").each(function(){a(this).on("mouseover",function(){a(this).find("ul.nav-closed").each(function(){a(this).removeClass("nav-closed")})})})}function f(){a("#nav-menu a.nav-dropdown-toggle").each(function(){var b=a(this);b.hasClass("update-dropdown-toggle-handlers")||(b.addClass("update-dropdown-toggle-handlers"),b.on("click",function(c){var d=b.parent(),e=d.parent(),f="nav-menu"===e.attr("id"),g="nav-mobile-menu",h="submenu-expanded",i=b.parents("#nav-menu").hasClass(g);if(i){var j=b.next("ul");j.length>0&&(f&&a("#nav-menu.nav-mobile-menu li").each(function(){a(this).removeClass("active")}),a("#nav-menu li > ul").each(f?function(){a(this).slideUp()}:function(){var b=a(this);b.hasClass(h)||b.slideUp(),e.find("li > ul").each(function(){a(this).is(j)||a(this).slideUp()})}),f&&d.toggleClass("nav-toggle-active"),j.is(":visible")?(j.slideUp(),j.removeClass(h)):(j.slideDown(),j.addClass(h)))}c.preventDefault()}))}),e()}function g(b){var c=b.find(".authentication button"),d=b.find(".authentication span.loginid").hide();require(["websockets/binary_websockets"],function(b){b.events.on("logout",function(){a(".webtrader-dialog[data-authorized=true]").dialog("close").dialog("destroy").remove(),c.removeClass("logout").addClass("login").removeAttr("disabled").text("Login"),d.fadeOut()}),b.events.on("login",function(a){c.removeClass("login").addClass("logout").removeAttr("disabled").text("Logout"),d.text(a.authorize.loginid).fadeIn()}),c.on("click",function(){c.attr("disabled","disabled");var a=c.hasClass("logout");a?b.invalidate():b.cached.authorize()["catch"](function(a){c.removeAttr("disabled")})})})}return a(window).resize(function(){if(matchMedia){var a=window.matchMedia("(max-width: 699px)");a.addListener(c),c(a)}else{window.innerWidth>0?window.innerWidth:screen.width}}),{init:function(c){var e=a(b);a("body").prepend(e),g(e),a("#nav-toggle").on("click",function(b){a("#nav-toggle").toggleClass("nav-toggle-active"),d(),b.preventDefault()}),f(),c&&c(a("#nav-menu"))},updateDropdownToggles:f}});