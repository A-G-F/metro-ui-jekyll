/*!
 * Metro UI 4 Jekyll v2.0.31 (http://a-g-f.github.com/metro-ui-jekyll/)
 * A port of Metro UI CSS made for Jekyll maintained by Alfred G. Fischer
 * Metro UI CSS Copyright 2012-2014 Sergey Pimenov
 * Metro UI 4 Jekyll Copyright 2014 Alfred G. Fischer
 * Both licensed under http://opensource.org/licenses/MIT
 */

if (typeof jQuery === "undefined") { throw new Error("Metro UI 4 Jekyll requires jQuery") }

var METRO_AUTO_REINIT;
var METRO_LOCALE;
var METRO_WEEK_START;
var METRO_DIALOG = false;


(function($){
    $.Metro = function(params){
        params = $.extend({
        }, params);
    };

    $.Metro.getDeviceSize = function(){
        var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        var device_height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
        return {
            width: device_width,
            height: device_height
        }
    }

})(jQuery);

$(function(){
    $('html').on('click', function(e){
        $('.dropdown-menu').each(function(i, el){
            if (!$(el).hasClass('keep-open') && $(el).css('display')=='block') {
                $(el).hide();
            }
        });
    });
});

$(function(){
    $(window).on('resize', function(){
        if (METRO_DIALOG) {
            var top = ($(window).height() - METRO_DIALOG.outerHeight()) / 2;
            var left = ($(window).width() - METRO_DIALOG.outerWidth()) / 2;
            METRO_DIALOG.css({
                top: top, left: left
            });
        }
    });
});

(function($){
    $.Metro.currentLocale = 'en';

    if (METRO_LOCALE != undefined)  $.Metro.currentLocale = METRO_LOCALE; else $.Metro.currentLocale = 'en';
    //console.log(METRO_LOCALE, $.Metro.currentLocale);

    $.Metro.Locale = {
        'en': {
            months: [
                "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            days: [
                "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
                "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"
            ],
            buttons: [
                "Today", "Clear", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        },
        'fr': {
            months: [
                "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
                "Jan", "Fév", "Mars", "Avr", "Mai", "Juin", "Juil", "Août", "Sept", "Oct", "Nov", "Déc"
            ],
            days: [
                "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi",
                "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"
            ],
            buttons: [
                "Aujourd'hui", "Effacer", "Annuler", "Aide", "Précedent", "Suivant", "Fin"
            ]
        },/*
        'nl': {
            months: [
                "Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December",
                "Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"
            ],
            days: [
                "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag",
                "Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"
            ],
            buttons: [
                "Vandaag", "Verwijderen", "Annuleren", "Hulp", "Vorige", "Volgende", "Einde"
            ]
        },
        'ua': {
            months: [
                "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",
                "Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"
            ],
            days: [
                "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота",
                "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
            ],
            buttons: [
                "Сьогодні", "Очистити", "Скасувати", "Допомога", "Назад", "Вперед", "Готово"
            ]
        },
        'ru': {
            months: [
                "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
                "Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
            ],
            days: [
                "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота",
                "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
            ],
            buttons: [
                "Сегодня", "Очистить", "Отменить", "Помощь", "Назад", "Вперед", "Готово"
            ]
        },*/
        /** By NoGrief (nogrief@gmail.com) *
        'zhCN': {
            months: [
                "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月",
                "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
            ],
            days: [
                "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六",
                "日", "一", "二", "三", "四", "五", "六"
            ],
            buttons: [
                "今日", "清除", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        },*/
        'it': {
            months: [
                'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre',
                'Gen',' Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
            ],
            days: [
                'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica',
                'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'
            ],
            buttons: [
                "Oggi", "Cancella", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        },
        'de': {
            months: [
                "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember",
                "Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"
            ],
            days: [
                "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag",
                "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
            ],
            buttons: [
                "Heute", "Zurücksetzen", "Abbrechen", "Hilfe", "Früher", "Später", "Fertig"
            ]
        },
        /** By Javier Rodríguez (javier.rodriguez at fjrodriguez.com) */
        'es': {
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
                "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
            ],
            days: [
                "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
                "Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"
            ],
            buttons: [
               "Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        }
    };

    $.Metro.setLocale = function(locale, data){
        $.Metro.Locale[locale] = data;
    };
})(jQuery);

var hasTouch = 'ontouchend' in window, eventTimer;
var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false

function addTouchEvents(element){
    if (hasTouch) {
        element.addEventListener("touchstart", touch2Mouse, true);
        element.addEventListener("touchmove", touch2Mouse, true);
        element.addEventListener("touchend", touch2Mouse, true);
    }
}

function touch2Mouse(e)
{
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch(e.type)
    {
        case "touchstart": mouseEv="mousedown"; break;
        case "touchend":   mouseEv="mouseup"; break;
        case "touchmove":  mouseEv="mousemove"; break;
        default: return;
    }


    if (mouseEv == "mousedown") {
        eventTimer = (new Date()).getTime();
        startX = theTouch.clientX;
        startY = theTouch.clientY;
        mouseDown = true;
    }

    if (mouseEv == "mouseup") {
        if ((new Date()).getTime() - eventTimer <= 500) {
            mouseEv = "click";
        } else if ((new Date()).getTime() - eventTimer > 1000) {
            mouseEv = "longclick";
        }
        eventTimer = 0;
        mouseDown = false;
    }

    if (mouseEv == "mousemove") {
        if (mouseDown) {
            deltaX = theTouch.clientX - startX;
            deltaY = theTouch.clientY - startY;
            moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
        }
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
}


/* To add touch support for element need create listeners for component dom element
if (hasTouch) {
    element.addEventListener("touchstart", touch2Mouse, true);
    element.addEventListener("touchmove", touch2Mouse, true);
    element.addEventListener("touchend", touch2Mouse, true);
}
*/
(function( $ ) {
    $.widget("metro.accordion", {

        version: "1.0.0",

        options: {
            closeAny: true,
            open: function(frame){},
            action: function(frame){}
        },

        _frames: {},

        _create: function(){
            var element = this.element;

            if (element.data('closeany') != undefined) this.options.closeAny = element.data('closeany');

            this._frames = element.children(".accordion-frame");

            this.init();
        },

        init: function(){
            var that = this;

            this._frames.each(function(){
                var frame = this,
                    a = $(this).children(".heading"),
                    content = $(this).children(".content");

                if ($(a).hasClass("active") && !$(a).attr('disabled') && $(a).data('action') != 'none') {
                    $(content).show();
                    $(a).removeClass("collapsed");
                } else {
                    $(a).addClass("collapsed");
                }

                a.on('click', function(e){
                    e.preventDefault();
                    if ($(this).attr('disabled') || $(this).data('action') == 'none') return;

                    if (that.options.closeAny) that._closeFrames();

                    if ($(content).is(":hidden")) {
                        $(content).slideDown();
                        $(this).removeClass("collapsed");
                        that._trigger("frame", e, {frame: frame});
                        that.options.open(frame);
                    } else {
                        $(content).slideUp();
                        $(this).addClass("collapsed");
                    }
                    that.options.action(frame);
                });
            });
        },

        _closeFrames: function(){
            this._frames.children(".content").slideUp().parent().children('.heading').addClass("collapsed");
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.buttonset", {

        version: "1.0.0",

        options: {
            click: function(btn, on){}
        },

        _buttons: {},

        _create: function(){
            var element = this.element;

            this._buttons = element.find("button, .button");

            this.init();
        },

        init: function(){
            var that = this;

            this._buttons.each(function(){
                var btn = $(this);

                btn.on('click', function(e){
                    e.preventDefault();
                    btn.toggleClass("active");

                    that.options.click(btn, btn.hasClass("active"));
                    that._trigger("click", null, {button: btn, on: (btn.hasClass("active"))});
                });
            });
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );

(function( $ ) {
    $.widget("metro.buttongroup", {

        version: "1.0.0",

        options: {
            click: function(btn, on){}
        },

        _buttons: {},

        _create: function(){
            var element = this.element;

            this._buttons = element.find("button, .button");

            this.init();
        },

        init: function(){
            var that = this;

            this._buttons.each(function(){
                var btn = $(this);

                btn.on('click', function(e){
                    e.preventDefault();
                    that._buttons.removeClass("active");
                    btn.addClass("active");

                    that.options.click(btn, btn.hasClass("active"));
                    that._trigger("click", null, {button: btn, on: (btn.hasClass("active"))});
                });
            });
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
// this is a temporary solution

var dateFormat = function () {
    var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        //console.log(arguments);

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        //if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        //console.log(locale);

        locale = $.Metro.currentLocale;

        var	_ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  $.Metro.Locale[locale].days[D],
                dddd: $.Metro.Locale[locale].days[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm: $.Metro.Locale[locale].months[m],
                mmmm: $.Metro.Locale[locale].months[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

/*
 * End date format
 */


// Calendar

(function( $ ) {
    $.widget("metro.calendar", {

        version: "1.0.0",

        options: {
            format: "yyyy-mm-dd",
            multiSelect: false,
            startMode: 'day', //year, month, day
            weekStart: (METRO_WEEK_START != undefined ? METRO_WEEK_START : 0), // 0 - Sunday, 1 - Monday
            otherDays: false,
            date: new Date(),
            buttons: true,
            locale: $.Metro.currentLocale,
            getDates: function(d){},
            click: function(d, d0){},
            _storage: []
        },

        _year: 0,
        _month: 0,
        _day: 0,
        _today: new Date(),
        _event: '',

        _mode: 'day', // day, month, year
        _distance: 0,

        _events: [],

        _create: function(){
            var element = this.element;

            if (element.data('multiSelect') != undefined) this.options.multiSelect = element.data("multiSelect");
            if (element.data('format') != undefined) this.options.format = element.data("format");
            if (element.data('date') != undefined) this.options.date = new Date(element.data("date"));
            if (element.data('locale') != undefined) this.options.locale = element.data("locale");
            if (element.data('startMode') != undefined) this.options.startMode = element.data('startMode');
            if (element.data('weekStart') != undefined) this.options.weekStart = element.data('weekStart');
            if (element.data('otherDays') != undefined) this.options.otherDays = element.data('otherDays');

            this._year = this.options.date.getFullYear();
            this._distance = parseInt(this.options.date.getFullYear())-4;
            this._month = this.options.date.getMonth();
            this._day = this.options.date.getDate();
            this._mode = this.options.startMode;

            element.data("_storage", []);

            this._renderCalendar();
        },

        _renderMonth: function(){
            var year = this._year,
                month = this._month,
                day = this._day,
                event = this._event,
                feb = 28;

            if (month == 1) {
                if ((year%100!=0) && (year%4==0) || (year%400==0)) {
                    feb = 29;
                }
            }

            var totalDays = ["31", ""+feb+"","31","30","31","30","31","31","30","31","30","31"];
            var daysInMonth = totalDays[month];
            var first_week_day = new Date(year, month, 1).getDay();

            var table, tr, td, i;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-previous'></i></a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-previous-month' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(tr);

            $("<td/>").attr("colspan", 3).addClass("text-center").html("<a class='btn-select-month' href='#'>"+ $.Metro.Locale[this.options.locale].months[month]+' '+year+"</a>").appendTo(tr);

            $("<td/>").addClass("text-center").html("<a class='btn-next-month' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-next'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            // Add day names
            var j;
            tr = $("<tr/>");
            for(i = 0; i < 7; i++) {
                if (!this.options.weekStart)
                    td = $("<td/>").addClass("text-center day-of-week").html($.Metro.Locale[this.options.locale].days[i+7]).appendTo(tr);
                else {
                    j = i + 1;
                    if (j == 7) j = 0;
                    td = $("<td/>").addClass("text-center day-of-week").html($.Metro.Locale[this.options.locale].days[j+7]).appendTo(tr);

                }
            }
            tr.addClass("calendar-subheader").appendTo(table);

            // Add empty days for previos month
            var prevMonth = this._month - 1; if (prevMonth < 0) prevMonth = 11; var daysInPrevMonth = totalDays[prevMonth];
            var _first_week_day = ((this.options.weekStart) ? first_week_day + 6 : first_week_day)%7;
            var htmlPrevDay = "";
            tr = $("<tr/>");
            for(i = 0; i < _first_week_day; i++) {
                if (this.options.otherDays) htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1);
                td = $("<td/>").addClass("empty").html("<small class='other-day'>"+htmlPrevDay+"</small>").appendTo(tr);
            }

            var week_day = ((this.options.weekStart) ? first_week_day + 6 : first_week_day)%7;
            //console.log(week_day, week_day%7);

            for (i = 1; i <= daysInMonth; i++) {
                //console.log(week_day, week_day%7);

                week_day %= 7;

                if (week_day == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }

                td = $("<td/>").addClass("text-center day").html("<a href='#'>"+i+"</a>");
                if (year == this._today.getFullYear() && month == this._today.getMonth() && this._today.getDate() == i) {
                    td.addClass("today");
                }

                var d = (new Date(this._year, this._month, i)).format('yyyy-mm-dd');
                if (this.element.data('_storage').indexOf(d)>=0) {
                    td.find("a").addClass("selected");
                }

                td.appendTo(tr);
                week_day++;
            }

            // next month other days
            var htmlOtherDays = "";
            for (i = week_day+1; i<=7; i++){
                if (this.options.otherDays) htmlOtherDays = i - week_day;
                td = $("<td/>").addClass("empty").html("<small class='other-day'>"+htmlOtherDays+"</small>").appendTo(tr);
            }

            tr.appendTo(table);

            if (this.options.buttons) {
                tr = $("<tr/>").addClass("calendar-actions");
                td = $("<td/>").attr('colspan', 7).addClass("text-left").html("" +
                    "<button class='button calendar-btn-today small success'>"+$.Metro.Locale[this.options.locale].buttons[0]+
                    "</button>&nbsp;<button class='button calendar-btn-clear small warning'>"+$.Metro.Locale[this.options.locale].buttons[1]+"</button>");
                td.appendTo(tr);
                tr.appendTo(table);
            }

            table.appendTo(this.element);

            this.options.getDates(this.element.data('_storage'));
        },

        _renderMonths: function(){
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(tr);
            $("<td/>").attr("colspan", 2).addClass("text-center").html("<a class='btn-select-year' href='#'>"+this._year+"</a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<tr/>");
            j = 0;
            for (i=0;i<12;i++) {

                //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
                td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+$.Metro.Locale[this.options.locale].months[i+12]+"</a>");

                if (this._month == i && (new Date()).getFullYear() == this._year) {
                    td.addClass("today");
                }

                td.appendTo(tr);
                if ((j+1) % 4 == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }
                j+=1;
            }

            table.appendTo(this.element);
        },

        _renderYears: function(){
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left-4'></i></a>").appendTo(tr);
            $("<td/>").attr("colspan", 2).addClass("text-center").html( (this._distance)+"-"+(this._distance+11) ).appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right-4'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<tr/>");

            j = 0;
            for (i=this._distance;i<this._distance+12;i++) {
                td = $("<td/>").addClass("text-center year").html("<a href='#' data-year='"+i+"'>"+i+"</a>");
                if ((new Date()).getFullYear() == i) {
                    td.addClass("today");
                }
                td.appendTo(tr);
                if ((j+1) % 4 == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }
                j+=1;
            }

            table.appendTo(this.element);
        },

        _renderCalendar: function(){
            switch (this._mode) {
                case 'year': this._renderYears(); break;
                case 'month': this._renderMonths(); break;
                default: this._renderMonth();
            }
            this._initButtons();
        },

        _initButtons: function(){
            // Add actions
            var that = this, table = this.element.find('table');

            if (this._mode == 'day') {
                table.find('.btn-select-month').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-month').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month -= 1;
                    if (that._month < 0) {
                        that._year -= 1;
                        that._month = 11;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-next-month').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month += 1;
                    if (that._month == 12) {
                        that._year += 1;
                        that._month = 0;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.calendar-btn-today').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that.options.date = new Date();
                    that._year = that.options.date.getFullYear();
                    that._month = that.options.date.getMonth();
                    that._day = that.options.date.getDate();
                    that._renderCalendar();
                });
                table.find('.calendar-btn-clear').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    that.options.date = new Date();
                    that._year = that.options.date.getFullYear();
                    that._month = that.options.date.getMonth();
                    that._day = that.options.date.getDate();
                    that.element.data('_storage', []);
                    that._renderCalendar();
                });
                table.find('.day a').on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    var d = (new Date(that._year, that._month, parseInt($(this).html()))).format(that.options.format,null);
                    var d0 = (new Date(that._year, that._month, parseInt($(this).html())));

                    if (that.options.multiSelect) {
                        $(this).toggleClass("selected");

                        if ($(this).hasClass("selected")) {
                            that._addDate(d);
                        } else {
                            that._removeDate(d);
                        }
                    } else {
                        table.find('.day a').removeClass('selected');
                        $(this).addClass("selected");
                        that.element.data('_storage', []);
                        that._addDate(d);
                    }
                    that.options.getDates(that.element.data('_storage'));
                    that.options.click(d, d0);
                });
            } else if (this._mode == 'month') {
                table.find('.month a').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month = parseInt($(this).data('month'));
                    that._mode = 'day';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.btn-select-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'year';
                    that._renderCalendar();
                });
            } else {
                table.find('.year a').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year = parseInt($(this).data('year'));
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function(e){
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance -= 10;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function(e){
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance += 10;
                    that._renderCalendar();
                });
            }
        },

        _addDate: function(d){
            var index = this.element.data('_storage').indexOf(d);
            if (index < 0) this.element.data('_storage').push(d);
        },

        _removeDate: function(d){
            var index = this.element.data('_storage').indexOf(d);
            this.element.data('_storage').splice(index, 1);
        },

        setDate: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"/"+ (d.getMonth()+1)+"/"+ d.getDate())).format('yyyy-mm-dd');
            this._addDate(r);
            this._renderCalendar();
        },

        getDate: function(index){
            return new Date(index != undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
        },

        getDates: function(){
            return this.element.data('_storage');
        },

        unsetDate: function(d){
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+ d.getDate())).format('yyyy-mm-dd');
            this._removeDate(r);
            this._renderCalendar();
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );




// DatePicker

(function( $ ) {
    $.widget("metro.datepicker", {

        version: "1.0.0",

        options: {
            format: "dd.mm.yyyy",
            date: undefined,
            effect: 'none',
            position: 'bottom',
            locale: $.Metro.currentLocale,
            weekStart: (METRO_WEEK_START != undefined ? METRO_WEEK_START : 0), // 0 - Sunday, 1 - Monday
            otherDays: false,
            selected: function(d, d0){},
            _calendar: undefined
        },


        _create: function(){
            var that = this,
                element = this.element,
                input = element.children("input"),
                button = element.children("button.btn-date");

            if (element.data('date') != undefined) this.options.date = element.data('date');
            if (element.data('format') != undefined) this.options.format = element.data('format');
            if (element.data('effect') != undefined) this.options.effect = element.data('effect');
            if (element.data('position') != undefined) this.options.position = element.data('position');
            if (element.data('locale') != undefined) this.options.locale = element.data('locale');
            if (element.data('weekStart') != undefined) this.options.weekStart = element.data('weekStart');
            if (element.data('otherDays') != undefined) this.options.otherDays = element.data('otherDays');

            this._createCalendar(element, this.options.date);

            input.attr('readonly', true);

            button.on('click', function(e){
                e.stopPropagation();
                if (that.options._calendar.css('display') == 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            element.on('click', function(e){
                e.stopPropagation();
                if (that.options._calendar.css('display') == 'none') {
                    that._show();
                } else {
                    that._hide();
                }
            });

            $('html').on('click', function(e){
                $(".calendar-dropdown").hide();
            })
        },

        _createCalendar: function(to, curDate){
            var _calendar, that = this;

            _calendar = $("<div/>").css({
                position: 'absolute'
                , display: 'none'
                , 'max-width': 260
                , 'z-index': 1000

            }).addClass('calendar calendar-dropdown').appendTo(to);

            if (that.options.date != undefined) {
                _calendar.data('date', that.options.date);
            }

            _calendar.calendar({
                multiSelect: false,
                format: that.options.format,
                buttons: false,
                locale: that.options.locale,
                otherDays: that.options.otherDays,
                weekStart: that.options.weekStart,
                click: function(d, d0){
                    //console.log(d, d0);
                    _calendar.calendar('setDate', d0);
                    to.children("input[type=text]").val(d);
                    that.options.selected(d, d0);
                    that._hide();
                }
            });

            if (curDate != undefined) {
                _calendar.calendar('setDate', curDate);
                to.children("input[type=text]").val(_calendar.calendar('getDate'));
            }

            // Set position
            switch (this.options.position) {
                case 'top': _calendar.css({top: (0-_calendar.height()), left: 0}); break;
                default: _calendar.css({top: '100%', left: 0});
            }

            this.options._calendar = _calendar;
        },

        _show: function(){
            if (this.options.effect == 'slide') {
                $(".calendar-dropdown").slideUp('fast');
                this.options._calendar.slideDown('fast');
            } else if (this.options.effect == 'fade') {
                $(".calendar-dropdown").fadeOut('fast');
                this.options._calendar.fadeIn('fast');
            } else {
                $(".calendar-dropdown").hide();
                this.options._calendar.show();
            }
        },
        _hide: function(){
            if (this.options.effect == 'slide') {
                this.options._calendar.slideUp('fast');
            } else if (this.options.effect == 'fade') {
                this.options._calendar.fadeOut('fast');
            } else {
                this.options._calendar.hide();
            }
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



(function( $ ) {
    $.widget("metro.carousel", {

        version: "1.0.0",

        options: {
            auto: true,
            period: 2000,
            duration: 500,
            effect: 'slowdown', // slide, fade, switch, slowdown
            direction: 'left',
            markers: {
                show: true,
                type: 'default',
                position: 'left' //bottom-left, bottom-right, bottom-center, top-left, top-right, top-center
            },
            controls: true,
            stop: true,
            width: '100%',
            height: 300
        },

        _slides: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,

        _create: function(){
            var that = this, o = this.options,
                element = carousel = this.element,
                controls = carousel.find('.controls');

            if (element.data('auto') != undefined) o.auto = element.data('auto');
            if (element.data('period') != undefined) o.period = element.data('period');
            if (element.data('duration') != undefined) o.duration = element.data('duration');
            if (element.data('effect') != undefined) o.effect = element.data('effect');
            if (element.data('direction') != undefined) o.direction = element.data('direction');
            if (element.data('width') != undefined) o.width = element.data('width');
            if (element.data('height') != undefined) o.height = element.data('height');
            if (element.data('stop') != undefined) o.stop = element.data('stop');
            if (element.data('controls') != undefined) o.controls = element.data('controls');
            if (element.data('markersShow') != undefined) o.markers.show = element.data('markersShow');
            if (element.data('markersType') != undefined) o.markers.type = element.data('markersType');
            if (element.data('markersPosition') != undefined) o.markers.position = element.data('markersPosition');

            carousel.css({
                'width': this.options.width,
                'height': this.options.height
            });

            this._slides = carousel.find('.slide');

            if (this._slides.length <= 1) return;

            if (this.options.markers !== false && this.options.markers.show && this._slides.length > 1) {
                this._markers(that);
            }

            if (this.options.controls && this._slides.length > 1) {
                carousel.find('.controls.left').on('click', function(){
                    that._slideTo('prior');
                });
                carousel.find('.controls.right').on('click', function(){
                    that._slideTo('next');
                });
            } else {
                controls.hide();
            }

            if (this.options.stop) {
                carousel
                    .on('mouseenter', function(){
                        clearInterval(that._interval);
                    })
                    .on('mouseleave', function(){
                        if (that.options.auto) that._autoStart(), that.options.period;
                    })
            }

            if (this.options.auto) {
                this._autoStart();
            }
        },

        _autoStart: function(){
            var that = this;
            this._interval = setInterval(function(){
                if (that.options.direction == 'left') {
                    that._slideTo('next')
                } else {
                    that._slideTo('prior')
                }
            }, this.options.period);
        },

        _slideTo: function(direction){
            var
                currentSlide = this._slides[this._currentIndex],
                nextSlide;

            if (direction == undefined) direction = 'next';

            if (direction === 'prior') {
                this._currentIndex -= 1;
                if (this._currentIndex < 0) this._currentIndex = this._slides.length - 1;

                this._outPosition = this.element.width();

            } else if (direction === 'next') {
                this._currentIndex += 1;
                if (this._currentIndex >= this._slides.length) this._currentIndex = 0;

                this._outPosition = -this.element.width();

            }

            nextSlide = this._slides[this._currentIndex];

            switch (this.options.effect) {
                case 'switch': this._effectSwitch(currentSlide, nextSlide); break;
                case 'slowdown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
                case 'fade': this._effectFade(currentSlide, nextSlide, this.options.duration); break;
                default: this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            var carousel = this.element, that = this;
            carousel.find('.markers ul li a').each(function(){
                var index = $(this).data('num');
                if (index === that._currentIndex) {
                    $(this).parent().addClass('active');
                } else {
                    $(this).parent().removeClass('active');
                }
            });
        },

        _slideToSlide: function(slideIndex){
            var
                currentSlide = this._slides[this._currentIndex],
                nextSlide = this._slides[slideIndex];

            if (slideIndex > this._currentIndex) {
                this._outPosition = -this.element.width();
            } else {
                this._outPosition = this.element.width();
            }

            switch (this.options.effect) {
                case 'switch' : this._effectSwitch(currentSlide, nextSlide); break;
                case 'slowdown': this._effectSlowdown(currentSlide, nextSlide, this.options.duration); break;
                case 'fade': this._effectFade(currentSlide, nextSlide, this.options.duration); break;
                default : this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            this._currentIndex = slideIndex;
        },

        _markers: function (that) {
            var div, ul, li, i, markers;

            div = $('<div class="markers '+this.options.markers.type+'" />');
            ul = $('<ul></ul>').appendTo(div);

            for (i = 0; i < this._slides.length; i++) {
                li = $('<li><a href="javascript:void(0)" data-num="' + i + '"></a></li>');
                if (i === 0) {
                    li.addClass('active');
                }
                li.appendTo(ul);
            }


            ul.find('li a').removeClass('active').on('click', function () {
                var $this = $(this),
                    index = $this.data('num');

                ul.find('li').removeClass('active');
                $this.parent().addClass('active');

                if (index == that._currentIndex) {
                    return true;
                }

                that._slideToSlide(index);
                return true;
            });

            div.appendTo(this.element);

            switch (this.options.markers.position) {
                case 'top-left' : {
                    div.css({
                        left: '10px',
                        right: 'auto',
                        bottom: 'auto',
                        top: '10px'
                    });
                    break;
                }
                case 'top-right' : {
                    div.css({
                        left: 'auto',
                        right: '10px',
                        bottom: 'auto',
                        top: '0px'
                    });
                    break;
                }
                case 'top-center' : {
                    div.css({
                        left: this.element.width()/2 - div.width()/2,
                        right: 'auto',
                        bottom: 'auto',
                        top: '0px'
                    });
                    break;
                }
                case 'bottom-left' : {
                    div.css({
                        left: '10px',
                        right: 'auto'
                    });
                    break;
                }
                case 'bottom-right' : {
                    div.css({
                        right: '10px',
                        left: 'auto'
                    });
                    break;
                }
                case 'bottom-center' : {
                    div.css({
                        left: this.element.width()/2 - div.width()/2,
                        right: 'auto'
                    });
                    break;
                }
            }
        },


        _effectSwitch: function(currentSlide, nextSlide){
            $(currentSlide)
                .hide();
            $(nextSlide)
                .css({left: 0})
                .show();
        },

        _effectSlide: function(currentSlide, nextSlide, duration){
            $(currentSlide)
                .animate({left: this._outPosition}, duration);
            $(nextSlide)
                .css('left', this._outPosition * -1)
                .show()
                .animate({left: 0}, duration);
        },

        _effectSlowdown: function(currentSlide, nextSlide, duration){
            var options = {
                'duration': duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function(t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
                .animate({left: this._outPosition}, options);


            //$(nextSlide).find('.subslide').hide();
            $(nextSlide)
                .css('left', this._outPosition * -1)
                .show()
                .animate({left: 0}, options);

            //setTimeout(function(){
            //    $(nextSlide).find('.subslide').fadeIn();
            //}, 500);

        },

        _effectFade: function(currentSlide, nextSlide, duration){
            $(currentSlide)
                .fadeOut(duration);
            $(nextSlide)
                .css({left: 0})
                .fadeIn(duration);
        },


        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );



(function( $ ) {
    $.widget("metro.countdown", {

        version: "1.0.0",

        options: {
            style: {
                background: "bg-dark",
                foreground: "fg-white",
                divider: "fg-dark"
            },
            blink: true,
            days: 1,
            stoptimer: 0,
            ontick: function(d, h, m, s){},
            onstop: function(){}
        },

        wrappers: {},

        _interval: 0,

        _create: function(){
            var that = this, countdown = this.element;

            $.each(['Days','Hours','Minutes','Seconds'],function(){
                $('<span class="count'+this+'">').html(
                    '<span class="digit-wrapper">\
                        <span class="digit">0</span>\
                    </span>\
                    <span class="digit-wrapper">\
                        <span class="digit">0</span>\
                    </span>'
                ).appendTo(countdown);

                if(this!="Seconds"){
                    countdown.append('<span class="divider"></span>');
                }
            });

            this.wrappers = this.element.find('.digit-wrapper');

            if (countdown.data('blink') != undefined) {
                this.options.blink = countdown.data('blick');
            }

            if (countdown.data('styleBackground') != undefined) {
                this.options.style.background = countdown.data('styleBackground');
            }

            if (countdown.data('styleForeground') != undefined) {
                this.options.style.foreground = countdown.data('styleForeground');
            }

            if (countdown.data('styleDivider') != undefined) {
                this.options.style.divider = countdown.data('styleDivider');
            }

            if (this.options.style.background != "default") {
                this.element.find(".digit").addClass(this.options.style.background);
            }

            if (this.options.style.foreground != "default") {
                this.element.find(".digit").addClass(this.options.style.foreground);
            }

            if (this.options.style.divider != "default") {
                this.element.find(".divider").addClass(this.options.style.divider);
            }

            if (countdown.data('stoptimer') != undefined) {
                this.options.stoptimer = new Date(countdown.data('stoptimer'));
            }

            if (this.options.stoptimer == 0) {
                this.options.stoptimer = (new Date()).getTime() + this.options.days*24*60*60*1000;
            }

            setTimeout( function(){
                that.tick()
            }, 1000);
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        },

        tick: function(){
            var that = this;

            this._interval = setInterval(function(){
                var days = 24*60*60,
                    hours = 60*60,
                    minutes = 60;

                var left, d, h, m, s;

                left = Math.floor((that.options.stoptimer - (new Date())) / 1000);

                if(left < 0){
                    left = 0;
                }

                // Number of days left
                d = Math.floor(left / days);
                that.updateDuo(0, 1, d);
                left -= d*days;

                // Number of hours left
                h = Math.floor(left / hours);
                that.updateDuo(2, 3, h);
                left -= h*hours;

                // Number of minutes left
                m = Math.floor(left / minutes);
                that.updateDuo(4, 5, m);
                left -= m*minutes;

                // Number of seconds left
                s = left;
                that.updateDuo(6, 7, s);

                // Calling an optional user supplied ontick
                that.options.ontick(d, h, m, s);

                that.blinkDivider();

                // Scheduling another call of this function in 1s
                if (d === 0 && h === 0 && m === 0 && s === 0) {
                    that.options.onstop();
                    that.stopDigit();
                    that._trigger('alarm');
                    clearInterval(that._interval);
                }
            }, 1000);
        },

        blinkDivider: function(){
            if (this.options.blink)
                this.element.find(".divider").toggleClass("no-visible");
        },

        stopDigit: function(){
            this.wrappers.each(function(){
                $(this).children(".digit").addClass("stop");
            })
        },

        updateDuo: function(minor, major, value){
            this.switchDigit(this.wrappers.eq(minor),Math.floor(value/10)%10);
            this.switchDigit(this.wrappers.eq(major),value%10);
        },

        switchDigit: function(wrapper, number){
            var digit = wrapper.find('.digit');

            if(digit.is(':animated')){
                return false;
            }

            if(wrapper.data('digit') == number){
                // We are already showing this number
                return false;
            }

            wrapper.data('digit', number);

            var replacement = $('<span>',{
                'class':'digit',
                css:{
                    top:'-2.1em',
                    opacity:0
                },
                html:number
            });

            replacement.addClass(this.options.style.background);
            replacement.addClass(this.options.style.foreground);

            digit
                .before(replacement)
                .removeClass('static')
                .animate({top:'2.5em'},'fast',function(){
                    digit.remove();
                });

            replacement
                .delay(100)
                .animate({top:0,opacity:1},'fast');

            return true;
        }
    });
})( jQuery );



(function( $ ) {
    $.widget("metro.dropdown", {

        version: "1.0.1",

        options: {
            effect: 'slide',
			toggleElement: false
        },

        _create: function(){
            var  that = this,
                 menu = this.element,
                 name = this.name,
                 parent = this.element.parent(),
                 toggle = this.options.toggleElement || parent.children('.dropdown-toggle');

            if (menu.data('effect') != undefined) {
                this.options.effect = menu.data('effect');
            }

            toggle.on('click.'+name, function(e){
                e.preventDefault();
                e.stopPropagation();

                if (menu.css('display') == 'block' && !menu.hasClass('keep-open')) {
                    that._close(menu);
                } else {
                    $('.dropdown-menu').each(function(i, el){
                        if (!menu.parents('.dropdown-menu').is(el) && !$(el).hasClass('keep-open') && $(el).css('display')=='block') {
                            that._close(el);
                        }
                    });
                    that._open(menu);
                }
            });

            $(menu).find('li.disabled a').on('click', function(e){
                e.preventDefault();
            });

        },

        _open: function(el){
            switch (this.options.effect) {
                case 'fade': $(el).fadeIn('fast'); break;
                case 'slide': $(el).slideDown('fast'); break;
                default: $(el).hide();
            }
            this._trigger("onOpen", null, el);
        },

        _close: function(el){
            switch (this.options.effect) {
                case 'fade': $(el).fadeOut('fast'); break;
                case 'slide': $(el).slideUp('fast'); break;
                default: $(el).hide();
            }
            this._trigger("onClose", null, el);
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );

/*
(function($){
    $.fn.PullDown = function( options ){
        var defaults = {
        };

        var $this = $(this)
            ;

        var initSelectors = function(selectors){

            addTouchEvents(selectors[0]);

            selectors.on('click', function(e){
                var $m = $this.parent().children(".element-menu");
                console.log($m);
                if ($m.css('display') == "block") {
                    $m.slideUp('fast');
                } else {
                    $m.slideDown('fast');
                }
                e.preventDefault();
                e.stopPropagation();
            });
        };

        return this.each(function(){
            if ( options ) {
                $.extend(defaults, options);
            }

            initSelectors($this);
        });
    };

    $(function () {
        $('.pull-menu, .menu-pull').each(function () {
            $(this).PullDown();
        });
    });
})(window.jQuery);
*/

(function( $ ) {
    $.widget("metro.inputControl", {

        version: "1.0.0",

        options: {
        },

        _create: function(){
            var that = this,
                control = this.element;

            if (control.hasClass('text')) {
                this.initTextInput(control, that);
            } else if (control.hasClass('password')) {
                this.initPasswordInput(control, that);
            } else if (control.hasClass('checkbox') || control.hasClass('radio') || control.hasClass('switch')) {
                this.initCheckboxInput(control, that);
            } else if (control.hasClass('file')) {
                this.initFileInput(control, that);
            }
        },

        initCheckboxInput: function(el, that) {
        },

        initFileInput: function(el, that){
            var button, input, wrapper;
            wrapper = $("<input type='text' id='__input_file_wrapper__' readonly style='z-index: 1; cursor: default;'>");
            button = el.children('.btn-file');
            input = el.children('input[type="file"]');
            input.css('z-index', 0);
            wrapper.insertAfter(input);
            input.attr('tabindex', '-1');
            //button.attr('tabindex', '-1');
            button.attr('type', 'button');

            input.on('change', function(){
                var val = $(this).val();
                if (val != '') {
                    wrapper.val(val);
                }
            });

            button.on('click', function(){
                input.trigger('click');
            });
        },

        initTextInput: function(el, that){
            var button = el.children('.btn-clear'),
                input = el.children('input[type=text]');

            //console.log(button.length);
            //button = el.children('.btn-clear');

            if (button.length == 0) return;

            button.attr('tabindex', '-1');
            button.attr('type', 'button');

            button.on('click', function(){
                input = el.children('input');
                if (input.prop('readonly')) return;
                input.val('');
                input.focus();
                that._trigger("onClear", null, el);
            });

            if (!input.attr("disabled")) input.on('click', function(){$(this).focus();});
        },

        initPasswordInput: function(el, that){
            var button = el.children('.btn-reveal'),
                input = el.children('input[type=password]');
            var wrapper;

            if (button.length == 0) return;

            button.attr('tabindex', '-1');
            button.attr('type', 'button');

            button.on('mousedown', function(e){
                input.attr('type', 'text');
                //e.preventDefault();

//                wrapper = el.find(".__wrapper__").length == 0 ? $('<input type="text" class="__wrapper__" />') : el.find(".__wrapper__");
//
//                input.hide();
//                wrapper.appendTo(that.element);
//                wrapper.val(input.val());
//
//                that._trigger("onPasswordShow", null, that.element);
            });

            button.on('mouseup, mouseleave, blur', function(e){
                input.attr('type', 'password').focus();
                //e.preventDefault();


//                input.show().focus();
//                wrapper.remove();
//
//                that._trigger("onPasswordHide", null, that.element);
            });

            if (!input.attr("disabled")) input.on('click', function(){$(this).focus();});
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    });
})( jQuery );


(function( $ ) {
    $.widget("metro.inputTransform", {

        version: "1.0.0",

        options: {
            transformType: "text"
        },

        _create: function(){
            var that = this,
                element = this.element,
                inputType;


            var checkTransform = element.parent().hasClass("input-control");
            if (checkTransform) return;

            inputType = element.get(0).tagName.toLowerCase();

            if (inputType == "textarea") {
                this.options.transformType = "textarea";
            } else if (inputType == "select") {
                this.options.transformType = "select";
            } else {
                if (element.data('transformType') != undefined) {
                    this.options.transformType = element.data('transformType');
                } else {
                    this.options.transformType = element.attr("type");
                }
            }

            var control = undefined;

            switch (this.options.transformType) {
                case "password": control = this._createInputPassword(); break;
                case "file": control = this._createInputFile(); break;
                case "checkbox": control = this._createInputCheckbox(); break;
                case "radio": control = this._createInputRadio(); break;
                case "switch": control = this._createInputSwitch(); break;
                case "select": control = this._createInputSelect(); break;
                case "textarea": control = this._createInputTextarea(); break;
                case "search": control = this._createInputSearch(); break;
                case "email": control = this._createInputEmail(); break;
                case "tel": control = this._createInputTel(); break;
				case "number": control = this._createInputNum(); break;
                default: control = this._createInputText();
            }

            control.inputControl();
        },

        _createInputTextarea: function(){
            var element = this.element;

            var wrapper = $("<div/>").addClass("input-control").addClass("textarea");
            var clone = element.clone(true);
            var parent = element.parent();

            clone.appendTo(wrapper);
            wrapper.insertBefore(element);

            element.remove();

            return wrapper;
        },

        _createInputSelect: function(){
            var element = this.element;

            var wrapper = $("<div/>").addClass("input-control").addClass("select");
            var clone = element.clone(true);
            var parent = element.parent();

            clone.val(element.val()).appendTo(wrapper);
            wrapper.insertBefore(element);

            element.remove();

            return wrapper;
        },

        _createInputSwitch: function(){
            var element = this.element;

            var wrapper = $("<div/>").addClass("input-control").addClass("switch");
            var label  = $("<label/>");
            var button = $("<span/>").addClass("check");
            var clone = element.clone(true);
            var parent = element.parent();
            var caption = $("<span/>").addClass("caption").html( element.data('caption') != undefined ? element.data('caption') : "" );

            label.appendTo(wrapper);
            clone.appendTo(label);
            button.appendTo(label);
            caption.appendTo(label);

            wrapper.insertBefore(element);
            element.remove();

            return wrapper;
        },

        _createInputCheckbox: function(){
            var element = this.element;

            var wrapper = $("<div/>").addClass("input-control").addClass("checkbox");
            var label  = $("<label/>");
            var button = $("<span/>").addClass("check");
            var clone = element.clone(true);
            var parent = element.parent();
            var caption = $("<span/>").addClass("caption").html( element.data('caption') != undefined ? element.data('caption') : "" );

            label.appendTo(wrapper);
            clone.appendTo(label);
            button.appendTo(label);
            caption.appendTo(label);

            wrapper.insertBefore(element);
            element.remove();

            return wrapper;
        },

        _createInputRadio: function(){
            var element = this.element;

            var wrapper = $("<div/>").addClass("input-control").addClass("radio");
            var label  = $("<label/>");
            var button = $("<span/>").addClass("check");
            var clone = element.clone(true);
            var parent = element.parent();
            var caption = $("<span/>").addClass("caption").html( element.data('caption') != undefined ? element.data('caption') : "" );

            label.appendTo(wrapper);
            clone.appendTo(label);
            button.appendTo(label);
            caption.appendTo(label);

            wrapper.insertBefore(element);
            element.remove();

            return wrapper;
        },

        _createInputSearch: function(){
			return this._createInputVal("text", "btn-search");
        },
		
		_createInputNum: function(){
			return this._createInputVal("number", "btn-clear");
        },

        _createInputTel: function(){
			return this._createInputVal("tel", "btn-clear");
        },

        _createInputEmail: function(){
			return this._createInputVal("email", "btn-clear");
        },

        _createInputText: function(){
			return this._createInputVal("text", "btn-clear");
        },

        _createInputPassword: function(){
			return this._createInputVal("password", "btn-reveal");
        },

        _createInputFile: function(){
			return this._createInputVal("file", "btn-file");
        },
		
		_createInputVal: function(name, buttonName) {
			var element = this.element;

            var wrapper = $("<div/>").addClass("input-control").addClass(name);
            var button = $("<button/>").addClass(buttonName);
            var clone = element.clone(true);
            var parent = element.parent();

            clone.appendTo(wrapper);
            button.appendTo(wrapper);

            wrapper.insertBefore(element);
            element.remove();

            return wrapper;
		},

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.livetile", {

        version: "1.0.0",

        options: {
            effect: 'slideLeft',
            period: 4000,
            duration: 700,
            easing: 'doubleSqrt'
        },

        _frames: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _size: {},

        _create: function(){
            var that = this,
                element = this.element;

            if (element.data('effect') != undefined) {this.options.effect = element.data('effect');}
            if (element.data('direction') != undefined) {this.options.direction = element.data('direction');}
            if (element.data('period') != undefined) {this.options.period = element.data('period');}
            if (element.data('duration') != undefined) {this.options.duration = element.data('duration');}
            if (element.data('easing') != undefined) {this.options.easing = element.data('easing');}

            //this._frames = element.children(".tile-content, .event-content");
            this._frames = element.children("[class*='-content']");
            //console.log(this._frames);

            if (this._frames.length <= 1) return;

            $.easing.doubleSqrt = function(t) {return Math.sqrt(Math.sqrt(t));};

            this._size = {
                'width': element.width(),
                'height': element.height()
            };

            element.on('mouseenter', function(){
                that.stop();
            });

            element.on('mouseleave', function(){
                that.start();
            });

            this.start();
        },

        start: function(){
            var that = this;
            this._interval = setInterval(function(){
                that._animate();
            }, this.options.period);
        },

        stop: function(){
            clearInterval(this._interval);
        },

        _animate: function(){
            var currentFrame = this._frames[this._currentIndex], nextFrame;
            this._currentIndex += 1;
            if (this._currentIndex >= this._frames.length) this._currentIndex = 0;
            nextFrame = this._frames[this._currentIndex];

            switch (this.options.effect) {
                case 'slideLeft': this._effectSlideLeft(currentFrame, nextFrame); break;
                case 'slideRight': this._effectSlideRight(currentFrame, nextFrame); break;
                case 'slideDown': this._effectSlideDown(currentFrame, nextFrame); break;
                case 'slideUpDown': this._effectSlideUpDown(currentFrame, nextFrame); break;
                case 'slideLeftRight': this._effectSlideLeftRight(currentFrame, nextFrame); break;
                default: this._effectSlideUp(currentFrame, nextFrame);
            }
        },

        _effectSlideLeftRight: function(currentFrame, nextFrame){
            if (this._currentIndex % 2 == 0)
                this._effectSlideLeft(currentFrame, nextFrame);
            else
                this._effectSlideRight(currentFrame, nextFrame);
        },

        _effectSlideUpDown: function(currentFrame, nextFrame){
            if (this._currentIndex % 2 == 0)
                this._effectSlideUp(currentFrame, nextFrame);
            else
                this._effectSlideDown(currentFrame, nextFrame);
        },

        _effectSlideUp: function(currentFrame, nextFrame){
            var _out = this._size.height;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({top: -_out}, options);
            $(nextFrame)
                .css({top: _out})
                .show()
                .animate({top: 0}, options);
        },

        _effectSlideDown: function(currentFrame, nextFrame){
            var _out = this._size.height;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({top: _out}, options);
            $(nextFrame)
                .css({top: -_out})
                .show()
                .animate({top: 0}, options);
        },

        _effectSlideLeft: function(currentFrame, nextFrame){
            var _out = this._size.width;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({left: _out * -1}, options);
            $(nextFrame)
                .css({left: _out})
                .show()
                .animate({left: 0}, options);
        },

        _effectSlideRight: function(currentFrame, nextFrame){
            var _out = this._size.width;
            var options = {
                'duration': this.options.duration,
                'easing': this.options.easing
            };

            $(currentFrame)
                .animate({left: _out}, options);
            $(nextFrame)
                .css({left: -_out})
                .show()
                .animate({left: 0}, options);
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



(function( $ ) {
    $.widget("metro.dragtile", {

        version: "1.0.0",

        options: {
        },

        _create: function(){
            var that = this, element = tile = this.element,
                area = element.parents('.tile-area'),
                tiles = area.find(".tile"),
                groups = area.find(".tile-group");

            tile.attr("draggable", "true");

            addTouchEvents(tile[0]);

            tile[0].addEventListener('dragstart', this._dragStart, false);
            tile[0].addEventListener('dragend', this._dragEnd, false);

            tile.on('mousedown', function(e){
            });

            tile.on('mouseup', function(e){
            });
        },

        _dragStart: function(e){
            $(this).css('opacity',.4);
        },

        _dragEnd: function(e){
            $(this).css('opacity',1);
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.progressbar", {

        version: "1.0.1",

        options: {
            value: 0,
            color: "bg-cyan",
            animate: false,
			max: 100,
            onchange: function(val){}
        },

        _create: function(){
            var that = this,
                element = this.element,
				o = this.options;

            if (element.data('value') != undefined) {
                this.value(element.data('value')+'%');
            }

            if (element.data('color') != undefined) {
                o.color = element.data('color');
            }

            if (element.data('animate') != undefined) {
                o.animate = element.data('animate');
            }
			
			if (element.data('max') != undefined) {
                o.max = element.data('max');
            }
			o.max = o.max < 0 ? 0 : o.max;
			o.max = o.max > 100 ? 100 : o.max;

            this._showBar();
        },

        _showBar: function(newVal){
			//Default parameters
			newVal = newVal || this.options.value;
            
			var element = this.element;

            element.html('');

            var bar = $("<div />");
            bar.addClass("bar");
            if (this.options.color.indexOf("bg-")+1)
                bar.addClass(this.options.color);
            else {
                bar.css('background', this.options.color);
            }
            bar.appendTo(element);
            if (this.options.animate) {
				bar.css('width', this.value() + '%').animate({ width: newVal + '%' });
            } else {
                bar.css('width', newVal + '%');
            }

            this.options.onchange(this.value());
        },

        value: function(val){
            if (val != undefined) {
				var parsedVal = parseInt(val);
				parsedVal = parsedVal > this.max ? this.max : parsedVal;
				parsedVal = parsedVal < 0 ? 0 : parsedVal;
				this._showBar(parsedVal);
                this.options.value = parsedVal;
            } else {
                return parseInt(this.options.value);
            }
        },

        color: function(color){
            this.options.color = color;

            if (this.options.color.indexOf("bg-")+1)
                this.element.find(".bar").addClass(this.options.color);
            else {
                this.element.find(".bar").css('background', this.options.color);
            }
            this._showBar();
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.rating", {

        version: "1.0.0",

        options: {
            score: 0,
            half: false,
            stars: 5,
            static: true,
            hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
            showHint: false,
            showScore: false,
            scoreHint: "Current score: ",
            click: function(value, rating){}
        },

        _create: function(){
            var that = this,
                element = this.element;

            if (element.data('score') != undefined) {
                this.options.score = element.data('score');
            }
            if (element.data('half') != undefined) {
                this.options.half = element.data('half');
            }
            if (element.data('stars') != undefined) {
                this.options.stars = element.data('stars');
            }
            if (element.data('showHint') != undefined) {
                this.options.showHint = element.data('showHint');
            }
            if (element.data('static') != undefined) {
                this.options.static = element.data('static');
            }
            if (element.data('showScore') != undefined) {
                this.options.showScore = element.data('showScore');
            }
            if (element.data('scoreHint') != undefined) {
                this.options.scoreHint = element.data('scoreHint');
            }

            this._showRating();
        },

        rate: function(value){
            this.options.score = value;
            this._showRating();
        },

        _showRating: function(){
            var that = this,
                element = this.element,
                options = this.options,
                ul, li;

            element.addClass("rating");
            element.html('');
            ul = $("<ul/>");

            if (!options.static){
                element.addClass("active");
            }

            for(var i=0; i<options.stars;i++){
                li = $("<li/>"); li.data('value', i+1);

                if (options.showHint) li.attr('title', options.hints[i]);

                if (i <= options.score - 1) {
                    li.addClass("rated");
                }
                li.on("click", function(){
                    options.click($(this).data('value'), that);
                });
                li.appendTo(ul);
            }

            ul.appendTo(element);

            if (options.showScore) {
                $("<span/>").addClass('score-hint').html(options.scoreHint+options.score).appendTo(element);
                element.css('height', 'auto');
            } else {
                element.find('ul').css('margin-bottom', 0);
            }
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.slider", {

        version: "1.0.2",

        options: {
            position: 0,
            accuracy: 0,
            color: 'default',
            completeColor: 'default',
            markerColor: 'default',
            colors: [],
            showHint: false,
            change: function(value, slider){},
            changed: function(value, slider){},
			min: 0,
			max: 100,
			animate: true,

            _slider: {
                vertical: false,
                offset: 0,
                length: 0,
                marker: 0,
                ppp: 0,
                start: 0,
                stop: 0
            }
        },


        _create: function(){
            var that = this,
                element = this.element,

                o = this.options,
                s = this.options._slider;

            if (element.data('accuracy') != undefined) {
                o.accuracy = element.data('accuracy') > 0 ? element.data('accuracy') : 0;
            }
			if (element.data('animate') != undefined) {
                o.animate = element.data('animate');
            }
			if (element.data('min') != undefined) {
                o.min = element.data('min');
            }
			o.min = o.min < 0 ? 0 : o.min;
			o.min = o.min > o.max ? o.max : o.min;
			if (element.data('max') != undefined) {
                o.max = element.data('max');
            }
			o.max = o.max > 100 ? 100 : o.max;
			o.max = o.max < o.min ? o.min : o.max;
            if (element.data('position') != undefined) {
                o.position = this._correctValue(element.data('position') > this.options.min ? (element.data('position') > this.options.max ? this.options.max : element.data('position')) : this.options.min);
            }
            if (element.data('color') != undefined) {
                o.color = element.data('color');
            }
            if (element.data('completeColor') != undefined) {
                o.completeColor = element.data('completeColor');
            }
            if (element.data('markerColor') != undefined) {
                o.markerColor = element.data('markerColor');
            }
            if (element.data('colors') != undefined) {
                o.colors = element.data('colors').split(",");
            }
            if (element.data('showHint') != undefined) {
                o.showHint = element.data('showHint');
            }

            s.vertical = element.hasClass("vertical");

            this._createSlider();
            this._initPoints();
            this._placeMarker(o.position);

            addTouchEvents(element[0]);

            element.children('.marker').on('mousedown', function (e) {
                e.preventDefault();
                that._startMoveMarker(e);
            });

            element.on('mousedown', function (e) {
                e.preventDefault();
                that._startMoveMarker(e);
            });
        },

        _startMoveMarker: function(e){
            var element = this.element, o = this.options, that = this, hint = element.children('.hint');

            $(document).mousemove(function (event) {
                that._movingMarker(event);
                if (!element.hasClass('permanent-hint')) {
                    hint.css('display', 'block');
                }
            });
            $(document).mouseup(function () {
                $(document).off('mousemove');
                $(document).off('mouseup');
                element.data('value', that.options.position);
                element.trigger('changed', that.options.position);
                o.changed(that.options.position, element);
                if (!element.hasClass('permanent-hint')) {
                    hint.css('display', 'none');
                }
            });

            this._initPoints();

            this._movingMarker(e)
        },

        _movingMarker: function (event) {
            var cursorPos,
                percents,
                valuePix,

                vertical = this.options._slider.vertical,
                sliderOffset = this.options._slider.offset,
                sliderStart = this.options._slider.start,
                sliderEnd = this.options._slider.stop,
                sliderLength = this.options._slider.length,
                markerSize = this.options._slider.marker;

            if (vertical) {
                cursorPos = event.pageY - sliderOffset;
            } else {
                cursorPos = event.pageX - sliderOffset;
            }

            if (cursorPos < sliderStart) {
                cursorPos = sliderStart;
            } else if (cursorPos > sliderEnd) {
                cursorPos = sliderEnd;
            }

            if (vertical) {
                valuePix = sliderLength - cursorPos - markerSize / 2;
            } else {
                valuePix = cursorPos - markerSize / 2;
            }

            percents = this._pixToPerc(valuePix);

            this._placeMarker(percents);

            this.options.position = percents;

            this.options.change(Math.round(percents), this.element);
        },

        _placeMarker: function (value) {
            var size, size2, o = this.options, colorParts = 0, colorIndex = 0, colorDelta = 0,
                marker = this.element.children('.marker'),
                complete = this.element.children('.complete'),
                hint = this.element.children('.hint'),
				oldPos = this._percToPix(this.options.position);

            colorParts = o.colors.length;
            colorDelta = o._slider.length / colorParts;

            if (this.options._slider.vertical) {
				var oldSize = this._percToPix(this.options.position) + this.options._slider.marker,
					oldSize2 = this.options._slider.length - oldSize;
                size = this._percToPix(value) + this.options._slider.marker;
                size2 = this.options._slider.length - size;
                this._animate(marker.css('top', oldSize2),{top: size2});
                this._animate(complete.css('height', oldSize),{height: size});
                if (colorParts) {
                    colorIndex = Math.round(size / colorDelta)-1;
                    complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
                }
                if (o.showHint) {
                    hint.html(Math.round(value)).css('top', size2 - hint.height()/2);
                }
            } else {
                size = this._percToPix(value);
                this._animate(marker.css('left', oldPos),{left: size});
                this._animate(complete.css('width', oldPos),{width: size});
                if (colorParts) {
                    colorIndex = Math.round(size / colorDelta)-1;
                    complete.css('background-color', o.colors[colorIndex<0?0:colorIndex]);
                }
                if (o.showHint) {
                    this._animate(hint.html(Math.round(value)).css('left', oldPos - hint.width() / 2), {left: size - hint.width() / 2});
                }
            }

        },
		
		_animate: function (obj, val) {
			if(this.options.animate) {
				obj.stop(true).animate(val);
			} else {
				obj.css(val);
			}
		},

        _pixToPerc: function (valuePix) {
            var valuePerc;
            valuePerc = valuePix * this.options._slider.ppp;
            return this._correctValue(valuePerc);
        },

        _percToPix: function (value) {
            if (this.options._slider.ppp === 0) {
                return 0;
            }
            return value / this.options._slider.ppp;
        },

        _correctValue: function (value) {
            var accuracy = this.options.accuracy;
			var max = this.options.max;
			var min = this.options.min;
            if (accuracy === 0) {
                return value;
            }
            if (value === max) {
                return max;
            }
			if (value === min) {
                return min;
            }
            value = Math.floor(value / accuracy) * accuracy + Math.round(value % accuracy / accuracy) * accuracy;
            if (value > max) {
                return max;
            }
			if (value < min) {
                return min;
            }
            return value;
        },

        _initPoints: function(){
            var s = this.options._slider, element = this.element;

            if (s.vertical) {
                s.offset = element.offset().top;
                s.length = element.height();
                s.marker = element.children('.marker').height();
            } else {
                s.offset = element.offset().left;
                s.length = element.width();
                s.marker = element.children('.marker').width();
            }

            s.ppp = this.options.max / (s.length - s.marker);
            s.start = s.marker / 2;
            s.stop = s.length - s.marker / 2;
        },

        _createSlider: function(){
            var element = this.element,
                options = this.options,
                complete, marker, hint;

            element.html('');

            complete = $("<div/>").addClass("complete").appendTo(element);
            marker = $("<a/>").addClass("marker").appendTo(element);

            if (options.showHint) {
                hint = $("<span/>").addClass("hint").appendTo(element);
            }

            if (options.color != 'default') {
                element.css('background-color', options.color);
            }
            if (options.completeColor != 'default') {
                complete.css('background-color', options.completeColor);
            }
            if (options.markerColor != 'default') {
                marker.css('background-color', options.markerColor);
            }
        },

        value: function (value) {
			value = value > this.options.max ? this.options.max : value;
			value = value < this.options.min ? this.options.min : value;
            if (typeof value !== 'undefined') {
                this._placeMarker(parseInt(value));
                this.options.position = parseInt(value);
                this.options.change(Math.round(parseInt(value)), this.element);
                return this;
            } else {
                return Math.round(this.options.position);
            }
        },

        _destroy: function(){},

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



(function( $ ) {
    $.widget("metro.tabcontrol", {

        version: "1.0.0",

        options: {
            effect: 'none',
            activateStoredTab: false,
            tabclick: function(tab){},
            tabchange: function(tab){}
        },

        _create: function(){
            var that = this,
                element = this.element,
                tabs = $(element.children(".tabs")).children("li"),
                frames = $(element.children(".frames")).children(".frame"),
                element_id = element.attr("id");

            if (element.data('effect') != undefined) {
                this.options.effect = element.data('effect');
            }

            this.init(tabs, frames);

            tabs.each(function(){

                var tab = $(this).children("a");

                tab.on('click', function(e){
                    e.preventDefault();

                    that.options.tabclick(this);

                    if ($(this).parent().hasClass('disabled')) {
                        return false;
                    }

                    tabs.removeClass("active");
                    tab.parent("li").addClass("active");

                    frames.hide();
                    var current_frame = $(tab.attr("href"));
                    switch (that.options.effect) {
                        case 'slide': current_frame.slideDown(); break;
                        case 'fade': current_frame.fadeIn(); break;
                        default: current_frame.show();
                    }

                    that._trigger('change', null, current_frame);
                    that.options.tabchange(this);

                    if (element_id != undefined) window.localStorage.setItem(element_id+"-current-tab", $(this).attr("href"));
                });
            });

            if (this.options.activateStoredTab) this._activateStoredTab(tabs);
        },

        init: function(tabs, frames){
            var that = this;
            tabs.each(function(){
                if ($(this).hasClass("active")) {
                    var current_frame = $($($(this).children("a")).attr("href"));
                    frames.hide();
                    current_frame.show();
                    that._trigger('change', null, current_frame);
                }
            });
        },

        _activateStoredTab: function(tabs){
            var current_stored_tab = window.localStorage.getItem(this.element.attr('id')+'-current-tab');

            if (current_stored_tab != undefined) {
                tabs.each(function(){
                    var a = $(this).children("a");
                    if (a.attr("href") == current_stored_tab) {
                        a.click();
                    }
                });
            }
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );




(function( $ ) {
    $.widget("metro.tablecontrol", {

        version: "1.0.0",

        options: {
            width: '100%',
            height: 'auto',
            cls: 'table',
            checkRow: false,
            colModel: [],
            data: []
        },

        _create: function(){
            var element = this.element,
                table;

            element.css({
                width: this.options.width,
                height: this.options.height
            });

            table = this.createTable(element);

            this.addHeader(table, this.options.colModel);
            this.addTableData(table, this.options.data);

            table.addClass(this.options.cls);
        },

        addHeader: function(container, data){
            var thead = $("<thead/>").appendTo(container);
            var th, tr = $("<tr/>").appendTo(thead);
            $.each(data, function(index, column){
                th = $("<th/>").addClass(column.hcls).html(column.caption).appendTo(tr);
            });
        },

        createTable: function(container){
            return $("<table/>").appendTo(container);
        },

        addTableData: function(container, data){
            var that = this,
                tbody = $("<tbody/>").appendTo(container);

            $.each(data, function(i, row){
                that.addRowData(tbody, row);
            });
        },

        addRowData: function(container, row){
            var td, tr = $("<tr/>").appendTo(container);
            if (row.__row_class != undefined) {
                tr.addClass(row.__row_class);
            }
            $.each(this.options.colModel, function(index, val){
                td = $("<td/>").css("width", val.width).addClass(val.cls).html(row[val.field]).appendTo(tr);
            });
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );

$(function(){
    $('[data-role=table]').tablecontrol();
});
(function( $ ) {
    $.widget("metro.times", {

        version: "1.0.0",

        options: {
            style: {
                background: "bg-dark",
                foreground: "fg-white",
                divider: "fg-dark"
            },
            blink: true,
            alarm: {
                h: 0,
                m: 0,
                s: 0
            },
            ontick: function(h, m, s){},
            onalarm: function(){}
        },

        wrappers: {},

        _interval: 0,

        _create: function(){
            var that = this, element = this.element;

            $.each(['Hours','Minutes','Seconds'],function(){
                $('<span class="count'+this+'">').html(
                    '<span class="digit-wrapper">\
                        <span class="digit">0</span>\
                    </span>\
                    <span class="digit-wrapper">\
                        <span class="digit">0</span>\
                    </span>'
                ).appendTo(element);

                if(this!="Seconds"){
                    element.append('<span class="divider"></span>');
                }
            });

            this.wrappers = this.element.find('.digit-wrapper');

            if (element.data('blink') != undefined) {
                this.options.blink = element.data('blick');
            }

            if (element.data('styleBackground') != undefined) {
                this.options.style.background = element.data('styleBackground');
            }

            if (element.data('styleForeground') != undefined) {
                this.options.style.foreground = element.data('styleForeground');
            }

            if (element.data('styleDivider') != undefined) {
                this.options.style.divider = element.data('styleDivider');
            }

            if (this.options.style.background != "default") {
                this.element.find(".digit").addClass(this.options.style.background);
            }

            if (this.options.style.foreground != "default") {
                this.element.find(".digit").addClass(this.options.style.foreground);
            }

            if (this.options.style.divider != "default") {
                this.element.find(".divider").addClass(this.options.style.divider);
            }

            if (element.data('alarm') != undefined) {
                var _alarm = element.data('alarm').split(":");
                this.options.alarm.h = _alarm[0] != undefined ? _alarm[0] : 0;
                this.options.alarm.m = _alarm[1] != undefined ? _alarm[1] : 0;
                this.options.alarm.s = _alarm[2] != undefined ? _alarm[2] : 0;
            }

            if (element.data('onalarm') != undefined) {
            }

            setTimeout( function(){
                that.tick()
            }, 1000);
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        },


        tick: function(){
            var that = this;

            this._interval = setInterval(function(){
                var _date = new Date();

                var h, m, s;

                h = _date.getHours();
                that.updateDuo(0, 1, h);

                m = _date.getMinutes();
                that.updateDuo(2, 3, m);

                s = _date.getSeconds();
                that.updateDuo(4, 5, s);

                // Calling an optional user supplied callback
                that.options.ontick(h, m, s);

                that.blinkDivider();

                var alarm = that.options.alarm;

                if (alarm) {
                    if (
                        (alarm.h != undefined && alarm.h == h)
                            && (alarm.m != undefined && alarm.m == m)
                            && (alarm.s != undefined && alarm.s == s)
                        ) {

                        that.options.onalarm();
                        that._trigger('alarm');
                    }
                }

                // Scheduling another call of this function in 1s
            }, 1000);
        },

        blinkDivider: function(){
            if (this.options.blink)
                this.element.find(".divider").toggleClass("no-visible");
        },

        updateDuo: function(minor, major, value){
            this.switchDigit(this.wrappers.eq(minor),Math.floor(value/10)%10);
            this.switchDigit(this.wrappers.eq(major),value%10);
        },

        switchDigit: function(wrapper, number){
            var digit = wrapper.find('.digit');

            if(digit.is(':animated')){
                return false;
            }

            if(wrapper.data('digit') == number){
                // We are already showing this number
                return false;
            }

            wrapper.data('digit', number);

            var replacement = $('<span>',{
                'class':'digit',
                css:{
                    top:'-2.1em',
                    opacity:0
                },
                html:number
            });

            replacement.addClass(this.options.style.background);
            replacement.addClass(this.options.style.foreground);

            digit
                .before(replacement)
                .removeClass('static')
                .animate({top:'2.5em',opacity:0},'fast',function(){
                    digit.remove();
                });

            replacement
                .delay(100)
                .animate({top:0,opacity:1},'fast');

            return true;
        }
    });
})( jQuery );



(function($) {
    if (METRO_DIALOG == undefined) {
        //var METRO_DIALOG = false;
    }

    $.Dialog = function(params) {
        if(!$.Dialog.opened) {
            $.Dialog.opened = true;
        } else {
            return METRO_DIALOG;
        }

        $.Dialog.settings = params;

        params = $.extend({
            icon: false,
            title: '',
            content: '',
            flat: false,
            shadow: false,
            overlay: false,
            width: 'auto',
            height: 'auto',
            position: 'default',
            padding: false,
            overlayClickClose: true,
            sysButtons: {
                btnClose: true
            },
            onShow: function(_dialog){},
            sysBtnCloseClick: function(event){},
            sysBtnMinClick: function(event){},
            sysBtnMaxClick: function(event){}
        }, params);

        var _overlay, _window, _caption, _content;

        _overlay = $("<div/>").addClass("metro window-overlay");

        if (params.overlay) {
            _overlay.css({
                backgroundColor: 'rgba(0,0,0,.7)'
            });
        }

        _window = $("<div/>").addClass("window");
        if (params.flat) _window.addClass("flat");
        if (params.shadow) _window.addClass("shadow").css('overflow', 'hidden');
        _caption = $("<div/>").addClass("caption");
        _content = $("<div/>").addClass("content");
        _content.css({
            paddingTop: 32 + params.padding,
            paddingLeft: params.padding,
            paddingRight: params.padding,
            paddingBottom: params.padding
        });

        if (params.sysButtons) {
            if (params.sysButtons.btnClose) {
                $("<button/>").addClass("btn-close").on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    $.Dialog.close();
                    params.sysBtnCloseClick(e);
                }).appendTo(_caption);
            }
            if (params.sysButtons.btnMax) {
                $("<button/>").addClass("btn-max").on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    params.sysBtnMaxClick(e);
                }).appendTo(_caption);
            }
            if (params.sysButtons.btnMin) {
                $("<button/>").addClass("btn-min").on('click', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    params.sysBtnMinClick(e);
                }).appendTo(_caption);
            }
        }

        if (params.icon) $(params.icon).addClass("icon").appendTo(_caption);
        $("<div/>").addClass("title").html(params.title).appendTo(_caption);

        _content.html(params.content);

        _caption.appendTo(_window);
        _content.appendTo(_window);
        _window.appendTo(_overlay);

        if (params.width != 'auto') _window.css('min-width', params.width);
        if (params.height != 'auto') _window.css('min-height', params.height);

        _overlay.hide().appendTo('body').fadeIn('fast');

        METRO_DIALOG = _window;

        _window
            .css("position", "fixed")
            .css("z-index", parseInt(_overlay.css('z-index'))+1)
            .css("top", ($(window).height() - METRO_DIALOG.outerHeight()) / 2 )
            .css("left", ($(window).width() - _window.outerWidth()) / 2)
        ;

        addTouchEvents(_window[0]);

        if(params.draggable) {
            _caption.on("mousedown", function(e) {
                $.Dialog.drag = true;
                _caption.css('cursor', 'move');

                var z_idx = _window.css('z-index'),
                    drg_h = _window.outerHeight(),
                    drg_w = _window.outerWidth(),
                    pos_y = _window.offset().top + drg_h - e.pageY,
                    pos_x = _window.offset().left + drg_w - e.pageX;

                _window.css('z-index', 99999).parents().on("mousemove", function(e) {
                    var t = (e.pageY > 0)?(e.pageY + pos_y - drg_h):(0);
                    var l = (e.pageX > 0)?(e.pageX + pos_x - drg_w):(0);

                    if ($.Dialog.drag) {
                        if(t >= 0 && t <= window.innerHeight - _window.outerHeight()) {
                            _window.offset({top: t});
                        }
                        if(l >= 0 && l <= window.innerWidth - _window.outerWidth()) {
                            _window.offset({left: l});
                        }
                    }
                });
                e.preventDefault();
            }).on("mouseup", function() {
                _window.removeClass('draggable');
                $.Dialog.drag = false;
                _caption.css('cursor', 'default');
            });
        }

        _window.on('click', function(e){
            e.stopPropagation();
        });

        if (params.overlayClickClose) {
            _overlay.on('click', function(e){
                e.preventDefault();
                $.Dialog.close();
            });
        }

        params.onShow(METRO_DIALOG);

        $.Dialog.autoResize();

        return METRO_DIALOG;
    }

    $.Dialog.content = function(newContent) {
        if(!$.Dialog.opened || METRO_DIALOG == undefined) {
            return false;
        }

        if(newContent) {
            METRO_DIALOG.children(".content").html(newContent);
            $.Dialog.autoResize();
            return true;
        } else {
            return METRO_DIALOG.children(".content").html();
        }
    }

    $.Dialog.title = function(newTitle) {
        if(!$.Dialog.opened || METRO_DIALOG == undefined) {
            return false;
        }

        var _title = METRO_DIALOG.children('.caption').children('.title');

        if(newTitle) {
            _title.html(newTitle);
        } else {
            _title.html();
        }

        return true;
    }

    $.Dialog.autoResize = function(){
        if(!$.Dialog.opened || METRO_DIALOG == undefined) {
            return false;
        }

        var _content = METRO_DIALOG.children(".content");

        var top = ($(window).height() - METRO_DIALOG.outerHeight()) / 2;
        var left = ($(window).width() - METRO_DIALOG.outerWidth()) / 2;

        METRO_DIALOG.css({
            width: _content.outerWidth(),
            height: _content.outerHeight(),
            top: top,
            left: left
        });

        return true;
    }

    $.Dialog.close = function() {
        if(!$.Dialog.opened || METRO_DIALOG == undefined) {
            return false;
        }

        $.Dialog.opened = false;
        var _overlay = METRO_DIALOG.parent(".window-overlay");
        _overlay.fadeOut(function(){
            $(this).remove();
        });

        return false;
    }
})(jQuery);

(function($) {
	var _notify_container = false;
	var _notifies = [];
	
	var Notify = {
		
		_container: null,
		_notify: null,
		_timer: null,
		options: {
			icon: '', // to be implemented
			caption: '',
			content: '',
			shadow: true,
			width: 'auto',
			height: 'auto',
			style: false, // {background: '', color: ''}
			position: 'right', //right, left
			timeout: 3000
		},
		
		init: function(options) {
			this.options = $.extend({}, this.options, options);
			this._build();
			return this;
		},
		
		_build: function() {
			this._container = _notify_container || $("<div/>").addClass("metro notify-container").appendTo('body');
			_notify_container = this._container;
			var o = this.options;
			
			if (o.content == '' || o.content == undefined) return false;
			
			this._notify = $("<div/>").addClass("notify");
			
			if (o.shadow) this._notify.addClass("shadow");
       		if (o.style && o.style.background != undefined) this._notify.css("background-color", o.style.background);
        	if (o.style && o.style.color != undefined) this._notify.css("color", o.style.color);
			
			// add title
   	    	if (o.caption != '' && o.caption != undefined) {
   	    	    $("<div/>").addClass("caption").html(o.caption).appendTo(this._notify);
   	    	}
   	    	// add content
   	    	if (o.content != '' && o.content != undefined) {
   	    	    $("<div/>").addClass("content").html(o.content).appendTo(this._notify);
   	    	}
			
			if (o.width != 'auto') this._notify.css('min-width', o.width);
	        if (o.height != 'auto') this._notify.css('min-height', o.height);
			
			this._notify.hide().appendTo(this._container).fadeIn('slow');
        	_notifies.push(this._notify);
			
			this.close(o.timeout);
			
		},
		
		close: function(timeout) {
			this.clear();
			if(timeout == parseInt(timeout)) {
				var self = this
				this._timer = setTimeout(function() {
					self._timer = null;
					self._hide();
				}, timeout);
				return this;
			} else if(timeout == undefined) {
				return this._hide();
			}
			return this;
		},
		
		clear: function() {
			if(this._timer != null) {
				clearTimeout(this._timer);
				this._timer = null;
				return this;
			} else {
				return false;
			}
		},
		
		_hide: function() {
			this.clear();
		
			if(this._notify != undefined) {
        	   	this._notify.hide('slow', function() {
					this.remove();
					_notifies.splice(_notifies.indexOf(this._notify), 1);
				});
				return this;
			} else {
				return false;
			}
		},
		
		closeAll: function() {
			_notifies.forEach(function(notEntry) {
				notEntry.hide('slow', function() {
					notEntry.remove();
					_notifies.splice(_notifies.indexOf(notEntry), 1);
				});
			});
			return this;
		}
	};
	
	$.Notify = function(options) {
		return Object.create(Notify).init(options);
	}
	$.Notify.show = function(message, title) {
		return $.Notify({
       	    content: message,
       	    caption: title
       	});
    };
	
})(jQuery);

(function( $ ) {
    $.widget("metro.listview", {

        version: "1.0.0",

        options: {
            onGroupExpand: function(g){},
            onGroupCollapse: function(g){},
            onListClick: function(l){}
        },

        _create: function(){
            var that = this, element = this.element;

            element.children('.collapsed').children('.group-content').hide();

            element.find('.group-title').on('click', function(e){
                var $this = $(this),
                    group = $this.parent('.list-group'),
                    group_content = group.children('.group-content');

                group.toggleClass('collapsed');

                if (group.hasClass('collapsed')) {
                    group_content.slideUp();
                    that.options.onGroupCollapse(group);
                } else {
                    group_content.slideDown();
                    that.options.onGroupExpand(group);
                }

                e.preventDefault();
            });

            element.find('.list').on('click', function(e){
                element.find('.list').removeClass('active');
                $(this).toggleClass('active');
                that.options.onListClick($(this));
                e.preventDefault();
            });
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



(function( $ ) {
    $.widget("metro.treeview", {

        version: "1.0.0",

        options: {
            onNodeClick: function(node){},
            onNodeCollapsed: function(node){},
            onNodeExpanded: function(node){}
        },

        _create: function(){
            var that = this, element = this.element;

            element.find('.node.collapsed').find('ul').hide();

            element.find('.node-toggle').on('click', function(e){
                var $this = $(this), node = $this.parent().parent("li");

                if (node.hasClass("keep-open")) return;

                node.toggleClass('collapsed');

                if (node.hasClass('collapsed')) {
                    node.children('ul').fadeOut('fast');
                    that.options.onNodeCollapsed(node);
                } else {
                    node.children('ul').fadeIn('fast');
                    that.options.onNodeExpanded(node);
                }

                that.options.onNodeClick(node);
                e.preventDefault();
                e.stopPropagation();
            });

            element.find("a").each(function(){
                var $this = $(this);
                $this.css({
                    paddingLeft: ($this.parents("ul").length-1) * 10
                });
            });

            element.find('a').on('click', function(e){
                var $this = $(this), node = $this.parent('li');
                element.find('a').removeClass('active');
                $this.toggleClass('active');
                that.options.onNodeClick(node);
                e.preventDefault();
            });
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );




(function( $ ) {
    $.widget("metro.fluentmenu", {

        version: "1.0.0",

        options: {
            onSpecialClick: function(e, el){},
            onTabClick: function(e, el){}
        },

        _create: function(){
            var that = this, element = this.element, o = this.options,
                tabs = element.find('.tabs-holder > li > a');

            this._hidePanels();
            this._showPanel();

            tabs.on('click', function(e){
                if ($(this).parent('li').hasClass('special')) {
                    o.onSpecialClick(e, $(this));
                } else {
                    var panel = $($(this).attr('href'));

                    that._hidePanels();
                    that._showPanel(panel);
                    element.find('.tabs-holder > li').removeClass('active');
                    $(this).parent('li').addClass('active');

                    o.onTabClick(e, $(this));
                }
                e.preventDefault();
            });
        },

        _hidePanels: function(){
            this.element.find('.tab-panel').hide();
        },

        _showPanel: function(panel){
            if (panel == undefined) {
                panel = this.element.find('.tabs-holder li.active a').attr('href');
            }
            $(panel).show();
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );




(function( $ ) {
    $.widget("metro.hint", {

        version: "1.0.0",

        options: {
            position: "bottom",
            background: '#FFFCC0',
            shadow: false,
            border: false,
            _hint: undefined
        },

        _create: function(){
            var that = this;
            var o = this.options;


            this.element.on('mouseenter', function(e){
                that.createHint();
                o._hint.stop().fadeIn();
                e.preventDefault();
            });

            this.element.on('mouseleave', function(e){
                o._hint.stop().fadeOut(function(){
                    o._hint.remove();
                });
                e.preventDefault();
            });
        },

        createHint: function(){
            var that = this, element = this.element,
                hint = element.data('hint').split("|"),
                o = this.options;

            var _hint;

            if (element.data('hintPosition') != undefined) o.position = element.data('hintPosition');
            if (element.data('hintBackground') != undefined) o.background = element.data('hintBackground');
            if (element.data('hintShadow') != undefined) o.shadow = element.data('hintShadow');
            if (element.data('hintBorder') != undefined) o.border = element.data('hintBorder');

            if (element[0].tagName == 'TD' || element[0].tagName == 'TH') {
                var wrp = $("<div/>").css("display", "inline-block").html(element.html());
                element.html(wrp);
                element = wrp;
            }

            var hint_title = hint.length > 1 ? hint[0] : false;
            var hint_text = hint.length > 1 ? hint[1] : hint[0];

            //_hint = $("<div/>").addClass("hint").appendTo(element.parent());
            _hint = $("<div/>").addClass("hint").appendTo('body');
            if (hint_title) {
                $("<div/>").addClass("hint-title").html(hint_title).appendTo(_hint);
            }
            $("<div/>").addClass("hint-text").html(hint_text).appendTo(_hint);

            _hint.addClass(o.position);

            if (o.shadow) _hint.addClass("shadow");
            if (o.background) {_hint.css("background-color", o.background);}
            if (o.border) _hint.css("border-color", o.border);

            //console.log(_hint);

            if (o.position == 'top') {
                _hint.css({
                    top: element.offset().top - $(window).scrollTop() - _hint.outerHeight() - 20,
                    left: element.offset().left - $(window).scrollLeft()
                });
            } else if (o.position == 'bottom') {
                _hint.css({
                    top: element.offset().top - $(window).scrollTop() + element.outerHeight(),
                    left: element.offset().left - $(window).scrollLeft()
                });
            } else if (o.position == 'right') {
                _hint.css({
                    top: element.offset().top - 10 - $(window).scrollTop(),
                    left: element.offset().left + element.outerWidth() + 10 - $(window).scrollLeft()
                });
            } else if (o.position == 'left') {
                _hint.css({
                    top: element.offset().top - 10 - $(window).scrollTop(),
                    left: element.offset().left - _hint.outerWidth() - 10 - $(window).scrollLeft()
                });
            }

            o._hint = _hint;
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );




(function( $ ) {
    $.widget("metro.streamer", {

        version: "1.0.0",

        options: {
            scrollBar: false,
            meter: {
                start: 9,
                stop: 19,
                interval: 20
            },
            slideToGroup: 1,
            slideToTime: "10:20",
            slideSleep: 1000,
            slideSpeed: 1000,
            onClick: function(event){},
            onLongClick: function(event){}
        },

        _create: function(){
            var that = this, element = this.element, o = this.options,
                streams = element.find(".stream"),
                events = element.find(".event"),
                events_container = element.find(".events"),
                events_area = element.find(".events-area"),
                groups = element.find(".event-group"),
                event_streams = element.find(".event-stream");


            if (element.data('scrollBar') != undefined) o.scrollBar = element.data('scrollBar');
            if (element.data('meterStart') != undefined) o.meter.start = parseInt(element.data('meterStart'));
            if (element.data('meterStop') != undefined) o.meter.stop = parseInt(element.data('meterStop'));
            if (element.data('meterInterval') != undefined) o.meter.interval = element.data('meterInterval');
            if (element.data('slideToGroup') != undefined) o.slideToGroup = parseInt(element.data('slideToGroup'));
            if (element.data('slideSleep') != undefined) o.slideSleep = parseInt(element.data('slideSleep'));
            if (element.data('slideSpeed') != undefined) o.slideSpeed = parseInt(element.data('slideSpeed'));

            element.data('streamSelect', -1);

            var meter = $("<ul/>").addClass("meter");
            var i, j, m, start = o.meter.start, stop = o.meter.stop, interval = o.meter.interval;

            var _intervals = [];
            for (i = start; i<stop; i++) {
                for (j = 0; j < 60; j+=interval) {
                    m = (i<10?"0"+i:i)+":"+(j<10?"0"+j:j);
                    $("<li/>").addClass("js-interval-"+ m.replace(":", "-")).html("<em>"+m+"</em>").appendTo(meter);
                    _intervals.push(m);
                }
            }
            element.data("intervals", _intervals);
            meter.insertBefore(element.find(".events-grid"));

            //console.log(element.data("intervals"));

            // Re-Calc all event-stream width and set background for time
            element.find(".event-stream").each(function(i, s){
                var event_stream_width = 0;
                var events = $(s).find(".event");

                events.each(function(i, el){
                    event_stream_width += $(el).outerWidth();
                });

                $(s).css({
                    width: (event_stream_width + ( (events.length-1) * 2 ) + 1)
                });

                $(s).find(".time").css("background-color", $(streams[i]).css('background-color'));
            });

            // Set scrollbar
            events_container.css({
                'overflow-x': (o.scrollBar ? 'scroll' : 'hidden')
            });

            // Set streamer height
            element.css({
                height: element.find(".streams").outerHeight() + (o.scrollBar ? 20 : 0)
            });

            // Re-Calc events-area width
            var events_area_width = 0;
            groups.each(function(i, el){
                events_area_width += $(el).outerWidth();
            });
            events_area_width += ( (groups.length-1) * 2 ) + 10;
            events_area.css('width', events_area_width);

            events.each(function(i, el){
                addTouchEvents(el);
            });

            events.mousedown(function(e){
                if (e.altKey) {
                    $(this).toggleClass("selected");
                }
            });

            element.mousewheel(function(event, delta){
                var scroll_value = delta * 50;
                events_container.scrollLeft(events_container.scrollLeft() - scroll_value);
                return false;
            });

            streams.each(function(i, s){
                $(s).mousedown(function(e){
                    if (element.data('streamSelect') == i) {
                        events.removeClass('event-disable');
                        element.data('streamSelect', -1);
                    } else {
                        element.data('streamSelect', i);
                        events.addClass('event-disable');
                        $(event_streams[i]).find(".event").removeClass("event-disable");
                    }
                });
            });

            events.on('click', function(e){
                e.preventDefault();
                o.onClick($(this));
            });

            events.on('longclick', function(e){
                $(this).toggleClass("selected");
                e.preventDefault();
                o.onLongClick($(this));
            });

            element.find(".js-go-previous-time").on('click', function(e){
                var next_index = element.data("intervals").indexOf(element.data("current-time"));
                if (next_index == 0) {
                    return;
                }
                next_index--;
                var new_time = element.data("intervals")[next_index];
                that.slideToTime(new_time, 0, o.slideSpeed);
            });

            element.find(".js-go-next-time").on('click', function(e){
                var next_index = element.data("intervals").indexOf(element.data("current-time"));
                if (next_index == element.data("intervals").length - 1) {
                    return;
                }
                next_index++;
                var new_time = element.data("intervals")[next_index];
                that.slideToTime(new_time, 0, o.slideSpeed);
            });

            element.find(".js-show-all-streams").on("click", function(e){
                element.find(".event").removeClass("event-disable");
                element.data('streamSelect', -1);
                e.preventDefault();
            });


            element.find(".js-schedule-mode").on("click", function(e){
                $(this).toggleClass("inverse");
                element.data("schedule-mode", $(this).hasClass("inverse"));
                e.preventDefault();
            });

            if (o.slideToTime) {
                this.slideToTime(o.slideToTime, o.slideSleep, o.slideSpeed);
            } else {
                this.slideToGroup(o.slideToGroup, o.slideSleep, o.slideSpeed);
            }

        },

        slideToTime: function(time, sleep, speed){
            var that = this, element = this.element,
                interval = element.find(".meter li.js-interval-"+time.replace(":", "-"))[0],
                streams_width = element.find(".streams").outerWidth() + 2;

            setTimeout(function(){
                element.find(".events").animate({
                    scrollLeft: "+="+ (interval.offsetLeft - streams_width)
                }, speed, function(){
                    that._afterSlide();
                });
            }, sleep);

            element.data("current-time", time);
        },

        slideToGroup: function(group, sleep, speed){
            var that = this, element = this.element, groups = element.find(".event-group"), streams_width = element.find(".streams").outerWidth() + 2;

            setTimeout(function(){
                element.find(".events").animate({
                    scrollLeft: "+="+ (groups[group-1].offsetLeft - streams_width)
                }, speed, function(){
                    that._afterSlide();
                });
            }, sleep);
        },

        _afterSlide: function(){

        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



(function( $ ) {
    $.widget("metro.scrollbar", {

        version: "1.0.0",

        options: {
            height: '100%', /* '100%'|int */
            width: '100%',  /* '100%'|int */
            axis: ['x','y'],      /* x|y|[x,y] */
            wheel: 55      /* step in px */
            //size: 'auto'    /* 'auto'|int */
        },
        startSize: {
            width: null,
            height: null
        },
        elemPadding: false,
        bothScroll: false,
        scrollbar: null,
        contentHeight: 0,
        contentWidth: 0,
        contentMinHeight: 0,
        contentMinWidth: 0,
        dragElem: null,
        dragStart: false,
        startCoords: {
            x:0,
            y:0
        },
        currCoords: {
            x:0,
            y:0
        },
        handlers: false,

        _create: function() {
            var elem = this.element;
            var that = this;
            if(elem.data('scroll') != undefined) {
                var dataScroll = elem.data('scroll');
                if(dataScroll == 'vertical') {
                    this.options.axis = 'y';
                }
                if(dataScroll == 'horizontal') {
                    this.options.axis = 'x';
                }
                if(dataScroll == 'both') {
                    this.options.axis = ['x','y'];
                }
            }
            if(elem.data('height') != undefined) {
                this.options.height = elem.data('height');
            }
            if(elem.data('width') != undefined) {
                this.options.width = elem.data('width');
            }
            if(elem.data('wheel') != undefined) {
                this.options.wheel = elem.data('wheel');
            }

            elem.css({
                position: 'relative'
            });

            var width = elem.outerWidth();
            var height = elem.outerHeight();

            this.contentMinWidth = width;
            this.contentMinHeight = height;

            this.startSize.width = this.options.width;
            this.startSize.height = this.options.height;
            
            var sw = (this.startSize.width == parseInt(this.startSize.width)) ? this.startSize.width+'px' : this.startSize.width;
            var sh = (this.startSize.height == parseInt(this.startSize.height)) ? this.startSize.height+'px' : this.startSize.height;

            elem.wrap('<div class="scrollbar" style="width: '+sw+'; height: '+sh+';"></div>');
            this.scrollbar = elem.parents('.scrollbar').first();

            this.scrollbar.parents().first().css({
                overflow: 'hidden'
            });

            this._build(width,height);
            
            $(window).resize(function () {
                that._resize();
            });
        },

        _resize: function () {
            var elem = this.element;

            if( (!isNaN(parseInt(this.element.css('left'))) && parseInt(this.element.css('left')) != 0) || (!isNaN(parseInt(this.element.css('top'))) && parseInt(this.element.css('top')))  ) {
                var l = Math.abs(parseInt(this.element.css('left')));
                var t = Math.abs(parseInt(this.element.css('top')));

                var w = this.scrollbar.width();
                var h = this.scrollbar.height();

                if(this.contentWidth - l < w) {
                    l = l - (w-(this.contentWidth - l));
                    if(l<0) {
                        l = 0;
                    }
                    this.element.css('left',l*(-1));
                }
                this.element.css('left',l*(-1));
                if(this.contentHeight - t < h) {
                    t = t - (h-(this.contentHeight - t));
                    if(t<0) {
                        t = 0;
                    }
                    this.element.css('top',t*(-1));
                }
            }

            this.options.width = this.startSize.width;
            this.options.height = this.startSize.height;

            this.scrollbar.css({
                padding: 0
            });
            if(this.elemPadding) {
                this.element.css({
                    paddingRight: '-=5',
                    paddingBottom: '-=5'
                });
                this.elemPadding = false;
            }

            if(this.scrollbar.find('.scrollbar-v').length>0) {
                this.scrollbar.find('.scrollbar-v').remove();
            }
            if(this.scrollbar.find('.scrollbar-h').length>0) {
                this.scrollbar.find('.scrollbar-h').remove();
            }
            if(this.scrollbar.find('.scrollbar-both').length>0) {
                this.scrollbar.find('.scrollbar-both').remove();
            }

            var width = elem.outerWidth();
            var height = elem.outerHeight();

            this.contentWidth = width;
            this.contentHeight = height;
            this._removeHandlers();
            this._build(width,height);
        },
        _build: function (width,height) {
            var elem = this.element;

            this.options.width = (this.options.width == '100%') ? this.scrollbar.outerWidth() : this.options.width;
            this.options.height = (this.options.height == '100%') ? this.scrollbar.outerHeight() : this.options.height;
            
            this.scrollbar.css({
                width: this.startSize.width,
                height: this.startSize.height
            });

            this.contentWidth = width;
            this.contentHeight = height;

            if(this.options.axis == 'y') {
                /* vertical */
                if(this.contentHeight>this.options.height) {
                    this.scrollbar.css({
                        paddingRight: 20,
                        paddingBottom: 0
                    });
                    var width = elem.outerWidth();
                    var height = elem.outerHeight();
                    this.contentWidth = width;
                    this.contentHeight = height;

                    this._verticalScrollbar();
                    this._startHandlers();
                }
                else {
                    if(this.scrollbar.find('.scrollbar-v').length>0) {
                        this.scrollbar.find('.scrollbar-v').hide();
                    }
                    this.scrollbar.css({
                        paddingRight: 0,
                        paddingBottom: 0
                    });
                }

            }
            else if(this.options.axis == 'x') {
                /* horizontal */
                if(this.contentWidth>this.options.width) {
                    if(this.startSize.height == '100%') {
                        this.scrollbar.css({
                            paddingBottom: 20,
                            paddingRight: 0
                        });
                        var width = elem.outerWidth();
                        var height = elem.outerHeight();
                        this.contentWidth = width;
                        this.contentHeight = height;
                    }

                    this._horizontalScrollbar();
                    this._startHandlers();
                }
                else {
                    if(this.scrollbar.find('.scrollbar-h').length>0) {
                        this.scrollbar.find('.scrollbar-h').hide();
                    }
                    this.scrollbar.css({
                        paddingBottom: 0,
                        paddingRight: 0
                    });
                }
            }
            else {
                /* both */
                if(this.contentHeight>this.options.height && this.contentWidth>this.options.width) {

                    this.bothScroll = true;
                    if(this.scrollbar.find('.scrollbar-both').length>0) {
                        this.scrollbar.find('.scrollbar-both').show();
                    }
                    else {
                        this.scrollbar.append('<div class="scrollbar-both"></div>');
                    }

                    if(!this.elemPadding) {
                        this.element.css({
                            paddingRight: '+=5',
                            paddingBottom: '+=5'
                        });
                        this.elemPadding = true;
                    }


                    var width = elem.outerWidth();
                    var height = elem.outerHeight();
                    this.contentWidth = width;
                    this.contentHeight = height;

                    this._verticalScrollbar();
                    this._horizontalScrollbar();
                    this._startHandlers();
                }
                else {
                    this.bothScroll = false;
                    if(this.scrollbar.find('.scrollbar-both').length>0) {
                        this.scrollbar.find('.scrollbar-both').hide();
                    }
                    if(this.elemPadding) {
                        this.element.css({
                            paddingRight: '-=5',
                            paddingBottom: '-=5'
                        });
                        this.elemPadding = false;
                    }
                    if(this.contentWidth>this.options.width) {
                        if(this.startSize.height == '100%') {
                            this.scrollbar.css({
                                paddingBottom: 20,
                                paddingRight: 0
                            });
                            var width = elem.outerWidth();
                            var height = elem.outerHeight();
                            this.contentWidth = width;
                            this.contentHeight = height;
                        }

                        this._horizontalScrollbar();
                        this._startHandlers();
                    }
                    else {
                        if(this.scrollbar.find('.scrollbar-h').length>0) {
                            this.scrollbar.find('.scrollbar-h').hide();
                        }
                        this.scrollbar.css({
                            paddingBottom: 0,
                            paddingRight: 0
                        });
                    }
                    if(this.contentHeight>this.options.height) {
                        this.scrollbar.css({
                            paddingRight: 20,
                            paddingBottom: 0
                        });
                        var width = elem.outerWidth();
                        var height = elem.outerHeight();
                        this.contentWidth = width;
                        this.contentHeight = height;

                        this._verticalScrollbar();
                        this._startHandlers();
                    }
                    else {
                        if(this.scrollbar.find('.scrollbar-v').length>0) {
                            this.scrollbar.find('.scrollbar-v').hide();
                        }
                        this.scrollbar.css({
                            paddingRight: 0,
                            paddingBottom: 0
                        });
                    }
                }
            }
        },
        _verticalScrollbar: function () {
            if(this.scrollbar.find('.scrollbar-v').length<1) {
                var str = [];
                str[str.length] = '<div class="scrollbar-v">';
                str[str.length] = '<div class="scrollbar-v-up"></div>';
                str[str.length] = '<div class="scrollbar-v-down"></div>';
                str[str.length] = '<div class="scrollbar-line-v">';
                str[str.length] = '<div class="scrollbar-line-v-btn"></div>';
                str[str.length] = '</div>';
                str[str.length] = '</div>';
                str = str.join('');

                this.scrollbar.append(str);
            }
            else {
                this.scrollbar.find('.scrollbar-v').show();
            }

            var line = this.scrollbar.find('.scrollbar-line-v');
            var btn =  this.scrollbar.find('.scrollbar-line-v-btn');
            var scrollBar = this.scrollbar.find('.scrollbar-v');
            
            if(this.bothScroll) {
                scrollBar.height(this.options.height);
                var h = scrollBar.height()-15;
                this.options.height = h;
                scrollBar.height(h);
            }
            else {
                scrollBar.height(this.options.height);
            }

            var height = this.options.height-32;
            var ratio = height/this.contentHeight;

            line.height(height);

            if(ratio>=(this.contentHeight-32)/this.contentHeight) {
                btn.hide();
            }
            else {
                var btnHeight = ratio*this.options.height;
                btn.show().height(btnHeight);
            }
        },
        _horizontalScrollbar: function () {
            if(this.scrollbar.find('.scrollbar-h').length<1) {
                var str = [];
                str[str.length] = '<div class="scrollbar-h">';
                str[str.length] = '<div class="scrollbar-h-up"></div>';
                str[str.length] = '<div class="scrollbar-h-down"></div>';
                str[str.length] = '<div class="scrollbar-line-h">';
                str[str.length] = '<div class="scrollbar-line-h-btn"></div>';
                str[str.length] = '</div>';
                str[str.length] = '</div>';
                str = str.join('');

                this.scrollbar.append(str);
            }
            else {
                this.scrollbar.find('.scrollbar-h').show();
            }

            var line = this.scrollbar.find('.scrollbar-line-h');
            var btn =  this.scrollbar.find('.scrollbar-line-h-btn');
            var scrollBar = this.scrollbar.find('.scrollbar-h');

            if(this.bothScroll) {
                scrollBar.width(this.options.width);
                var w = scrollBar.width()-15;
                this.options.width = w;
                scrollBar.width(w);
            }
            else {
                scrollBar.width(this.options.width);
            }

            var width = this.options.width-32;
            var ratio = width/this.contentWidth;
            var btnWidth = ratio*this.options.width;
            var l = (!isNaN(parseInt(this.element.css('left')))) ? parseInt(this.element.css('left')) : 0;
            var left = Math.abs(l)*ratio;
            
            line.width(width);
            if(ratio>=(this.contentWidth-32)/this.contentWidth) {
                btn.hide();
            }
            else {
                btn.show().width(btnWidth).css({
                    left:left
                });
            }
        },

        _startHandlers: function () {
            if(this.handlers) {
                return false;
            }
            this.handlers = true;
            var that = this;
            $(document).mousemove(function(e){
                that._drag(e);
            });
            $(document).mouseup(function(e){
                that._dragEnd(e);
            });
            this.scrollbar.find('.scrollbar-line-v-btn,.scrollbar-line-h-btn').on('mousedown', function(e){
                that._dragStart(e, $(this));
            });
            this.scrollbar.find('.scrollbar-line-v,.scrollbar-line-h').on('click', function(e){
                that._clickPos(e, $(this));
            });
            this.scrollbar.find('.scrollbar-v-up,.scrollbar-h-up').on('click', function(e){
                that._fixScroll(1,$(this));
            });
            this.scrollbar.find('.scrollbar-v-down,.scrollbar-h-down').on('click', function(e){
                that._fixScroll(-1,$(this));
            });
            this.scrollbar.mousewheel(function(e, delta) {
                that._fixScroll(delta);
                return false;
            });
        },
        _removeHandlers: function () {
            if(!this.handlers) {
                return false;
            }
            this.handlers = false;
            var that = this;
            $(document).mousemove(function(e){
                return false;
            });
            $(document).mouseup(function(e){
                return false;
            });
            this.scrollbar.find('.scrollbar-line-v-btn,.scrollbar-line-h-btn').off('mousedown');
            this.scrollbar.find('.scrollbar-line-v,.scrollbar-line-h').off('click');
            this.scrollbar.find('.scrollbar-v-up,.scrollbar-h-up').off('click');
            this.scrollbar.find('.scrollbar-v-down,.scrollbar-h-down').off('click');
        },

        _clickPos: function (e,elem) {
            if($(e.target).attr('class') == 'scrollbar-line-v' || $(e.target).attr('class') == 'scrollbar-line-h') {
                var offset = elem.offset();
                if($(e.target).attr('class') == 'scrollbar-line-v') {
                    var top = e.pageY - offset.top;

                    var btn = elem.find('.scrollbar-line-v-btn');

                    this.dragElem = {
                        elem: btn,
                        width: btn.width(),
                        height: btn.height(),
                        parent: elem,
                        parentWidth:  elem.width(),
                        parentHeight:  elem.height(),
                        parentOffset:  offset
                    };

                    this._scrollTo(0,top,'y');

                    this.dragElem = null;
                }
                else {
                    var left = e.pageX - offset.left;

                    var btn = elem.find('.scrollbar-line-h-btn');

                    this.dragElem = {
                        elem: btn,
                        width: btn.width(),
                        height: btn.height(),
                        parent: elem,
                        parentWidth:  elem.width(),
                        parentHeight:  elem.height(),
                        parentOffset:  offset
                    };

                    this._scrollTo(left,0,'x');

                    this.dragElem = null;
                }
            }
        },
        _fixScroll: function (delta,elem) {
            var step = this.options.wheel;
            if( (elem !== undefined && (elem.hasClass('scrollbar-h-up') || elem.hasClass('scrollbar-h-down'))) || this.options.axis == 'x' || (this.options.axis != 'x' && this.options.axis != 'y' && this.scrollbar.find('.scrollbar-v').length<1)) {
                var percent = step/this.contentWidth*100;
                var barStep = (this.options.width-32)/100*percent;
                var leftCss = parseInt(this.element.css('left'));
                var pos = (!isNaN(leftCss)) ? Math.abs(leftCss) : 0;

                var btn = this.scrollbar.find('.scrollbar-line-h-btn');
                var parent = this.scrollbar.find('.scrollbar-line-h');

                var barLeftCss = parseFloat(btn.css('left'));
                var barPos = (!isNaN(barLeftCss)) ? barLeftCss : 0;

                if(delta>0) {
                    var left = pos-step;
                    var barLeft = barPos-barStep;
                }
                else {
                    var left = pos+step;
                    var barLeft = barPos+barStep;
                }

                if(left<0) {
                    left = 0;
                }
                if(left>this.contentWidth-this.options.width) {
                    left = this.contentWidth-this.options.width;
                }

                var parentsSize = {
                    width: parent.width(),
                    height: parent.height()
                };
                var dragElemSize = {
                    width: btn.width(),
                    height: btn.height()
                };
                if(barLeft<0) {
                    barLeft = 0;
                }
                if(barLeft+dragElemSize.width>parentsSize.width) {
                    barLeft = parentsSize.width-dragElemSize.width;
                }

                this.element.css({
                    left: left*(-1)
                });
                btn.css({
                    left: barLeft
                });
            }
            else {
                var percent = step/this.contentHeight*100;
                var barStep = (this.options.height-32)/100*percent;
                var topCss = parseInt(this.element.css('top'));
                var pos = (!isNaN(topCss)) ? Math.abs(topCss) : 0;

                var btn = this.scrollbar.find('.scrollbar-line-v-btn');
                var parent = this.scrollbar.find('.scrollbar-line-v');

                var barTopCss = parseFloat(btn.css('top'));
                var barPos = (!isNaN(barTopCss)) ? barTopCss : 0;

                if(delta>0) {
                    var top = pos-step;
                    var barTop = barPos-barStep;
                }
                else {
                    var top = pos+step;
                    var barTop = barPos+barStep;
                }

                if(top<0) {
                    top = 0;
                }
                if(top>this.contentHeight-this.options.height) {
                    top = this.contentHeight-this.options.height;
                }

                var parentsSize = {
                    width: parent.width(),
                    height: parent.height()
                };
                var dragElemSize = {
                    width: btn.width(),
                    height: btn.height()
                };
                if(barTop<0) {
                    barTop = 0;
                }
                if(barTop+dragElemSize.height>parentsSize.height) {
                    barTop = parentsSize.height-dragElemSize.height;
                }

                this.element.css({
                    top: top*(-1)
                });
                btn.css({
                    top: barTop
                });
            }
        },
        _scrollTo: function (left,top,xy) {
            if(xy == 'x') {
                var width = this.options.width-32;
                var ratio = width/this.contentWidth;

                var currLeft = left/ratio;

                if(currLeft<0) {
                    currLeft = 0;
                }
                if(currLeft>this.contentWidth-this.options.width) {
                    currLeft = this.contentWidth-this.options.width;
                }
                if(left<0) {
                    left = 0;
                }
                if(left>this.dragElem.parentWidth-this.dragElem.width) {
                    left = this.dragElem.parentWidth-this.dragElem.width;
                }

                this.dragElem.elem.css({
                    left:left
                });
                this.element.css({
                    left: currLeft*(-1)
                });
            }
            else {
                var height = this.options.height-32;
                var ratio = height/this.contentHeight;

                var currTop = top/ratio;
                if(currTop<0) {
                    currTop = 0;
                }
                if(currTop>this.contentHeight-this.options.height) {
                    currTop = this.contentHeight-this.options.height;
                }
                if(top<0) {
                    top = 0;
                }
                if(top>this.dragElem.parentHeight-this.dragElem.height) {
                    top = this.dragElem.parentHeight-this.dragElem.height;
                }

                this.dragElem.elem.css({
                    top:top
                });

                this.element.css({
                    top: currTop*(-1)
                });
            }
        },
        _scroll: function () {
            if(this.dragElem.elem.hasClass('scrollbar-line-h-btn')) {
                var width = this.options.width-32;
                var ratio = width/this.contentWidth;

                var leftCss = parseInt(this.dragElem.elem.css('left'));
                var leftCurr = (!isNaN(leftCss)) ? Math.abs(leftCss) : 0;
                var left = leftCurr/ratio;

                if(left<0) {
                    left = 0;
                }
                if(left>this.contentWidth-this.options.width) {
                    left = this.contentWidth-this.options.width;
                }

                this.element.css({
                    left: left*(-1)
                });
            }
            else {
                var height = this.options.height-32;
                var ratio = height/this.contentHeight;

                var topCss = parseInt(this.dragElem.elem.css('top'));
                var topCurr = (!isNaN(topCss)) ? Math.abs(topCss) : 0;
                var top = topCurr/ratio;
                if(top<0) {
                    top = 0;
                }
                if(top>this.contentHeight-this.options.height) {
                    top = this.contentHeight-this.options.height;
                }

                this.element.css({
                    top: top*(-1)
                });
            }
        },

        _startCoordsDiff: function (e) {
            var offset = this.dragElem.elem.offset();
            this.startCoords.x = e.pageX - offset.left;
            this.startCoords.y = e.pageY - offset.top;
        },
        _dragStart: function (e,elem) {
            var parent = elem.parents().first();
            this.dragElem = {
                elem: elem,
                width: elem.width(),
                height: elem.height(),
                parent: parent,
                parentWidth:  parent.width(),
                parentHeight:  parent.height(),
                parentOffset:  parent.offset()
            };
            this.dragStart = true;
            this.currCoords.x = e.pageX;
            this.currCoords.y = e.pageY;

            this._startCoordsDiff(e);
        },
        _drag: function (e) {
            if( this.dragStart ) {
                this.currCoords.x = e.pageX;
                this.currCoords.y = e.pageY;
                var left = this.currCoords.x - this.startCoords.x - this.dragElem.parentOffset.left;
                var top = this.currCoords.y - this.startCoords.y - this.dragElem.parentOffset.top;
                if(left<0) {
                    left = 0;
                }
                if(left+this.dragElem.width>=this.dragElem.parentWidth) {
                    left = this.dragElem.parentWidth-this.dragElem.width;
                }
                
                if(top<0) {
                    top = 0;
                }
                if(top+this.dragElem.height>this.dragElem.parentHeight) {
                    top = this.dragElem.parentHeight-this.dragElem.height;
                }
                this.dragElem.elem.css({
                    left: left,
                    top: top
                });
                this._scroll();
            }
        },
        _dragEnd: function (e) {
            if(this.dragStart) {
                this.dragElem = null;
                this.dragStart = false;
                this.startCoords.x = 0;
                this.startCoords.y = 0;
                this.currCoords.x = null;
                this.currCoords.y = null;
            }
        },

        _destroy: function() {

        },
        _setOption: function(key, value) {
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.stepper", {

        version: "1.0.0",

        options: {
            steps: 3,
            start: 1,
            onStep: function(index, step){}
        },

        _create: function(){
            var element = this.element, o = this.options;

            if (element.data('steps') != undefined) o.steps = element.data('steps');
            if (element.data('start') != undefined) o.start = element.data('start');

            this._createStepper();
            this._positioningSteps();
            this._stepTo(o.start);
        },

        _createStepper: function(){
            var element = this.element, o= this.options;
            var i, ul, li;

            ul = $("<ul/>");
            for(i=0;i< o.steps;i++) {
                li = $("<li/>").appendTo(ul);
            }
            ul.appendTo(element);
        },

        _positioningSteps: function(){
            var that = this, element = this.element, o = this.options,
                steps = element.find("li"),
                element_width = element.width(),
                steps_length = steps.length-1,
                step_width = $(steps[0]).width();

            $.each(steps, function(i, step){
                var left = i == 0 ? 0 : (element_width - step_width)/steps_length * i;
                $(step).animate({
                    left: left
                });
            });
        },

        _stepTo: function(step){
            var element = this.element, o = this.options;
            var steps = element.find("li");

            steps.removeClass('current').removeClass('complete');

            $.each(steps, function(i, s){
                if (i < step - 1) $(s).addClass('complete');
                if (i == step - 1) {
                    $(s).addClass('current') ;
                    o.onStep(i+1, s);
                }
            });
        },

        first: function(){
            var o = this.options;
            o.start = 1;
            this._stepTo(o.start);
        },

        last: function(){
            var element = this.element, o = this.options;
            var steps = element.find("li");

            o.start = steps.length;
            this._stepTo(o.start);
        },

        next: function(){
            var element = this.element, o = this.options;
            var steps = element.find("li");

            if (o.start + 1 > steps.length) return;

            o.start++;
            this._stepTo(o.start);
        },

        prior: function(){
            var o = this.options;

            if (o.start - 1 == 0) return;

            o.start--;
            this._stepTo(o.start);
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.pullmenu", {

        version: "1.0.0",

        options: {
        },

        _create: function(){
            var that = this,
                element = this.element;

            var menu = (element.data("relation") != undefined) ? element.data("relation") : element.parent().children(".element-menu, .horizontal-menu");

            addTouchEvents(element[0]);

            element.on("click", function(e){
                menu.slideToggle();
                e.preventDefault();
                e.stopPropagation();
            });

        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );

$(window).resize(function(){
    var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (device_width > 800) {$(".element-menu").show();} else {$(".element-menu").hide();}
});

(function( $ ) {
    $.widget("metro.wizard", {

        version: "1.0.0",

        options: {
            stepper: true,
            stepperType: 'default',
            locale: $.Metro.currentLocale,
            finishStep: 'default',
            buttons: {
                cancel: true,
                help: false,
                prior: true,
                next: true,
                finish: true
            },
            onCancel: function(page, wiz){},
            onHelp: function(page, wiz){},
            onPrior: function(page, wiz){return true;},
            onNext: function(page, wiz){return true;},
            onFinish: function(page, wiz){},
            onPage: function(page, wiz){}
        },

        _stepper: undefined,
        _currentStep: 0,
        _steps: undefined,

        _create: function(){
            var that = this,
                element = this.element,
                o = this.options,
                steps = element.find(".step");

            this._steps = steps;

            if (o.stepper) {
                this._stepper = this._createStepper(steps.length).insertBefore(element.find('.steps'));
            }

            if (element.data('locale') != undefined) o.locale = element.data('locale');

            this._createEvents();
            this.options.onPage(this._currentStep + 1, element);
        },

        _createStepper: function(steps){
            var stepper, o = this.options;

            stepper = $("<div/>").addClass("stepper")
                .attr("data-role", "stepper")
                .attr("data-steps", steps);

            if (o.stepperType != 'default') {
                stepper.addClass(o.stepperType);
            }

            return stepper;
        },

        _createEvents: function(){
            var that = this, element = this.element, o = this.options;

            if (o.buttons) {
                var actions = $("<div/>").addClass("actions").appendTo(element);
                var group_left = $("<div/>").addClass("group-left").appendTo(actions);
                var group_right = $("<div/>").addClass("group-right").appendTo(actions);

                if (o.buttons.cancel) {
                    $("<button type='button'/>").addClass("btn-cancel").html($.Metro.Locale[o.locale].buttons[2]).appendTo(group_left).on('click', function(){
                        o.onCancel(that._currentStep+1, element);
                    });
                }
                if (o.buttons.help) {
                    $("<button type='button'/>").addClass("btn-help").html($.Metro.Locale[o.locale].buttons[3]).appendTo(group_right).on('click', function(){
                        o.onHelp(that._currentStep+1, element);
                    });
                }
                if (o.buttons.prior) {
                    $("<button type='button'/>").addClass("btn-prior").html($.Metro.Locale[o.locale].buttons[4]).appendTo(group_right).on('click', function(){
                        if (o.onPrior(that._currentStep+1, element)) that.prior();
                    });
                }
                if (o.buttons.next) {
                    $("<button type='button'/>").addClass("btn-next").html($.Metro.Locale[o.locale].buttons[5]).appendTo(group_right).on('click', function(){
                        if (o.onNext(that._currentStep+1, element)) that.next();
                    });
                }
                if (o.buttons.finish) {
                    $("<button type='button' disabled/>").addClass("btn-finish").html($.Metro.Locale[o.locale].buttons[6]).appendTo(group_right).on('click', function(){
                        o.onFinish(that._currentStep+1, element);
                    });
                }
            }
        },

        next: function(){
            var new_step = this._currentStep + 1;

            if (new_step == this._steps.length) return false;
            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();

            this.options.onPage(this._currentStep + 1, this.element);
            this._stepper.stepper('next');

            var finish = parseInt(this.options.finishStep == 'default' ? this._steps.length - 1 : this.options.finishStep);
            if (new_step == finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            return true;
        },

        prior: function(){
            var new_step = this._currentStep - 1;

            if (new_step < 0) return false;
            this._currentStep = new_step;
            this._steps.hide();
            $(this._steps[new_step]).show();

            this.options.onPage(this._currentStep + 1, this.element);
            this._stepper.stepper('prior');

            var finish = parseInt(this.options.finishStep == 'default' ? this._steps.length - 1 : this.options.finishStep);
            if (new_step == finish) {
                this.element.find('.btn-finish').attr('disabled', false);
            } else {
                this.element.find('.btn-finish').attr('disabled', true);
            }

            return true;
        },

        _destroy: function(){
        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );


(function( $ ) {
    $.widget("metro.panel", {

        version: "1.0.0",

        options: {
            onCollapse: function(){},
            onExpand: function(){}
        },

        _create: function(){
            var element = this.element, o = this.options,
                header = element.children('.panel-header'),
                content = element.children('.panel-content');

            header.on('click', function(){
                content.slideToggle(
                    'fast',
                    function(){
                        element.toggleClass('collapsed');
                        if (element.hasClass('collapsed')) {
                            o.onCollapse();
                        } else {
                            o.onExpand();
                        }
                    }
                );
            });
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );



(function( $ ) {
    $.widget("metro.tileTransform", {

        version: "1.0.0",

        options: {
        },

        _create: function(){
            var element = this.element;
            var dim = {w: element.width(), h: element.height()};

            element.on('click', function(e){
//                e.preventDefault();
//                if (element[0].tagName == 'A' && element.attr('href')) {
//                    document.location.href = element.attr('href');
//                }
            });

            element.on('mousedown', function(e){
                var X = e.pageX - $(this).offset().left, Y = e.pageY - $(this).offset().top;
                var transform = 'top';

                if (X < dim.w * 1/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                    transform = 'left';
                } else if (X > dim.w * 2/3 && (Y < dim.h * 1/2 || Y > dim.h * 1/2 )) {
                    transform = 'right'
                } else if (X > dim.w*1/3 && X<dim.w*2/3 && Y > dim.h/2) {
                    transform = 'bottom';
                }

                $(this).addClass("tile-transform-"+transform);

                if (element[0].tagName == 'A' && element.attr('href')) {
                    setTimeout(function(){
                        document.location.href = element.attr('href');
                    }, 500);
                }
            });

            element.on('mouseup', function(){
                $(this)
                    .removeClass("tile-transform-left")
                    .removeClass("tile-transform-right")
                    .removeClass("tile-transform-top")
                    .removeClass("tile-transform-bottom");
            });
            element.on('mouseleave', function(){
                $(this)
                    .removeClass("tile-transform-left")
                    .removeClass("tile-transform-right")
                    .removeClass("tile-transform-top")
                    .removeClass("tile-transform-bottom");
            });
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );

(function($){
    /*
     * Init or ReInit components
     * */

    $.Metro.initAccordions = function(area){
        if (area != undefined) {
            $(area).find('[data-role=accordion]').accordion();
        } else {
            $('[data-role=accordion]').accordion();
        }
    };

    $.Metro.initButtonSets = function(area){
        if (area != undefined) {
            $(area).find('[data-role=button-set]').buttonset();
            $(area).find('[data-role=button-group]').buttongroup();
        } else {
            $('[data-role=button-set]').buttonset();
            $('[data-role=button-group]').buttongroup();
        }
    };

    $.Metro.initCalendars = function(area){
        if (area != undefined) {
            $(area).find('[data-role=calendar]').calendar();
        } else {
            $('[data-role=calendar]').calendar();
        }
    };

    $.Metro.initCarousels = function(area){
        if (area != undefined) {
            $(area).find('[data-role=carousel]').carousel();
        } else {
            $('[data-role=carousel]').carousel();
        }
    };

    $.Metro.initCountdowns = function(area){
        if (area != undefined) {
            $(area).find('[data-role=countdown]').countdown();
        } else {
            $('[data-role=countdown]').countdown();
        }
    };

    $.Metro.initDatepickers = function(area){
        if (area != undefined) {
            $(area).find('[data-role=datepicker]').datepicker();
        } else {
            $('[data-role=datepicker]').datepicker();
        }
    };

    $.Metro.initDropdowns = function(area){
        if (area != undefined) {
            $(area).find('[data-role=dropdown]').dropdown();
        } else {
            $('[data-role=dropdown]').dropdown();
        }
    };

    $.Metro.initFluentMenus = function(area){
        if (area != undefined) {
            $(area).find('[data-role=fluentmenu]').fluentmenu();
        } else {
            $('[data-role=fluentmenu]').fluentmenu();
        }
    };

    $.Metro.initHints = function(area){
        if (area != undefined) {
            $(area).find('[data-hint]').hint();
        } else {
            $('[data-hint]').hint();
        }
    };

    $.Metro.initInputs = function(area){
        if (area != undefined) {
            $(area).find('[data-role=input-control], .input-control').inputControl();
        } else {
            $('[data-role=input-control], .input-control').inputControl();
        }
    };

    $.Metro.transformInputs = function(area){
        if (area != undefined) {
            $(area).find('[data-transform=input-control]').inputTransform();
        } else {
            $('[data-transform=input-control]').inputTransform();
        }
    };

    $.Metro.initListViews = function(area){
        if (area != undefined) {
            $(area).find('[data-role=listview]').listview();
        } else {
            $('[data-role=listview]').listview();
        }
    };

    $.Metro.initLives = function(area){
        if (area != undefined) {
            $(area).find('[data-role=live-tile], [data-role=live]').livetile();
        } else {
            $('[data-role=live-tile], [data-role=live]').livetile();
        }
    };

    $.Metro.initProgreeBars = function(area){
        if (area != undefined) {
            $(area).find('[data-role=progress-bar]').progressbar();
        } else {
            $('[data-role=progress-bar]').progressbar();
        }
    };

    $.Metro.initRatings = function(area){
        if (area != undefined) {
            $(area).find('[data-role=rating]').rating();
        } else {
            $('[data-role=rating]').rating();
        }
    };

    $.Metro.initScrolls = function(area){
        if (area != undefined) {
            $(area).find('[data-role=scrollbox]').scrollbar();
        } else {
            $('[data-role=scrollbox]').scrollbar();
        }
    };

    $.Metro.initSliders = function(area){
        if (area != undefined) {
            $(area).find('[data-role=slider]').slider();
        } else {
            $('[data-role=slider]').slider();
        }
    };

    $.Metro.initTabs = function(area){
        if (area != undefined) {
            $(area).find('[data-role=tab-control]').tabcontrol();
        } else {
            $('[data-role=tab-control]').tabcontrol();
        }
    };

    $.Metro.initTimes = function(area){
        if (area != undefined) {
            $(area).find('[data-role=times]').times();
        } else {
            $('[data-role=times]').times();
        }
    };

    $.Metro.initTrees = function(area){
        if (area != undefined) {
            $(area).find('[data-role=treeview]').treeview();
        } else {
            $('[data-role=treeview]').treeview();
        }
    };

    /*
     * Components in develop
     * */

    $.Metro.initSteppers = function(area){
        if (area != undefined) {
            $(area).find('[data-role=stepper]').stepper();
        } else {
            $('[data-role=stepper]').stepper();
        }
    };

    $.Metro.initStreamers = function(area){
        if (area != undefined) {
            $(area).find('[data-role=streamer]').streamer();
        } else {
            $('[data-role=streamer]').streamer();
        }
    };

    $.Metro.initDragTiles = function(area){
        if (area != undefined) {
            $(area).find('[data-role=drag-drop]').dragtile();
        } else {
            $('[data-role=drag-drop]').dragtile();
        }
    };

    $.Metro.initPulls = function(area){
        if (area != undefined) {
            $(area).find('[data-role=pull-menu], .pull-menu').pullmenu();
        } {
            $('[data-role=pull-menu], .pull-menu').pullmenu();
        }
    };

    $.Metro.initPanels = function(area){
        if (area != undefined) {
            $(area).find('[data-role=panel]').panel();
        } {
            $('[data-role=panel]').panel();
        }
    };

    $.Metro.initTileTransform = function(area){
        if (area != undefined) {
            $(area).find('[data-click=transform]').tileTransform();
        } {
            $('[data-click=transform]').tileTransform();
        }
    };

    $.Metro.initAll = function(area) {
        $.Metro.initAccordions(area);
        $.Metro.initButtonSets(area);
        $.Metro.initCalendars(area);
        $.Metro.initCarousels(area);
        $.Metro.initCountdowns(area);
        $.Metro.initDatepickers(area);
        $.Metro.initDropdowns(area);
        $.Metro.initFluentMenus(area);
        $.Metro.initHints(area);
        $.Metro.initInputs(area);
        $.Metro.transformInputs(area);
        $.Metro.initListViews(area);
        $.Metro.initLives(area);
        $.Metro.initProgreeBars(area);
        $.Metro.initRatings(area);
        $.Metro.initScrolls(area);
        $.Metro.initSliders(area);
        $.Metro.initTabs(area);
        $.Metro.initTimes(area);
        $.Metro.initTrees(area);
        $.Metro.initSteppers(area);
        $.Metro.initStreamers(area);
        $.Metro.initDragTiles(area);
        $.Metro.initPulls(area);
        $.Metro.initPanels(area);
        $.Metro.initTileTransform(area);
    }
})(jQuery);

$(function(){
    $.Metro.initAll();
});


$(function(){
    if (METRO_AUTO_REINIT) {
        //$(".metro").bind('DOMSubtreeModified', function(){            $.Metro.initAll();        });
        var originalDOM = $('.metro').html(),
            actualDOM;

        setInterval(function () {
            actualDOM = $('.metro').html();

            if (originalDOM !== actualDOM) {
                originalDOM = actualDOM;

                $.Metro.initAll();
            }
        }, 500);
    }
});
