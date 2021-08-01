


! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function($) {
    function t(t, i) {
        var s, n, o, a = t.nodeName.toLowerCase();
        return "area" === a ? (s = t.parentNode, n = s.name, !(!t.href || !n || "map" !== s.nodeName.toLowerCase()) && (!!(o = $("img[usemap='#" + n + "']")[0]) && e(o))) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : "a" === a ? t.href || i : i) && e(t)
    }

    function e(t) {
        return $.expr.filters.visible(t) && !$(t).parents().addBack().filter(function() {
            return "hidden" === $.css(this, "visibility")
        }).length
    }

    function i(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function s() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.regional.en = $.extend(!0, {}, this.regional[""]), this.regional["en-US"] = $.extend(!0, {}, this.regional.en), this.dpDiv = n($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function n(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(e, "mouseout", function() {
            $(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover")
        }).delegate(e, "mouseover", o)
    }

    function o() {
        $.datepicker._isDisabledDatepicker(k.inline ? k.dpDiv.parent()[0] : k.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover"))
    }

    function a(t, e) {
        $.extend(t, e);
        for (var i in e) null == e[i] && (t[i] = e[i]);
        return t
    }

    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    $.ui = $.ui || {}, $.extend($.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), $.fn.extend({
        scrollParent: function(t) {
            var e = this.css("position"),
                i = "absolute" === e,
                s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                n = this.parents().filter(function() {
                    var t = $(this);
                    return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== e && n.length ? n : $(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id")
            })
        }
    }), $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function(t) {
            return function(e) {
                return !!$.data(e, t)
            }
        }) : function(t, e, i) {
            return !!$.data(t, i[3])
        },
        focusable: function(e) {
            return t(e, !isNaN($.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var i = $.attr(e, "tabindex"),
                s = isNaN(i);
            return (s || i >= 0) && t(e, !s)
        }
    }), $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(t, e) {
        function i(t, e, i, n) {
            return $.each(s, function() {
                e -= parseFloat($.css(t, "padding" + this)) || 0, i && (e -= parseFloat($.css(t, "border" + this + "Width")) || 0), n && (e -= parseFloat($.css(t, "margin" + this)) || 0)
            }), e
        }
        var s = "Width" === e ? ["Left", "Right"] : ["Top", "Bottom"],
            n = e.toLowerCase(),
            o = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };
        $.fn["inner" + e] = function(t) {
            return void 0 === t ? o["inner" + e].call(this) : this.each(function() {
                $(this).css(n, i(this, t) + "px")
            })
        }, $.fn["outer" + e] = function(t, s) {
            return "number" != typeof t ? o["outer" + e].call(this, t) : this.each(function() {
                $(this).css(n, i(this, t, !0, s) + "px")
            })
        }
    }), $.fn.addBack || ($.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = function(t) {
        return function(e) {
            return arguments.length ? t.call(this, $.camelCase(e)) : t.call(this)
        }
    }($.fn.removeData)), $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), $.fn.extend({
        focus: function(t) {
            return function(e, i) {
                return "number" == typeof e ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        $(t).focus(), i && i.call(t)
                    }, e)
                }) : t.apply(this, arguments)
            }
        }($.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var e = $(this[0]), i, s; e.length && e[0] !== document;) {
                    if (("absolute" === (i = e.css("position")) || "relative" === i || "fixed" === i) && (s = parseInt(e.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    e = e.parent()
                }
            return 0
        }
    }), $.ui.plugin = {
        add: function(t, e, i) {
            var s, n = $.ui[t].prototype;
            for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([e, i[s]])
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    };
    var h = 0,
        l = Array.prototype.slice;
    $.cleanData = function(t) {
        return function(e) {
            var i, s, n;
            for (n = 0; null != (s = e[n]); n++) try {
                i = $._data(s, "events"), i && i.remove && $(s).triggerHandler("remove")
            } catch (t) {}
            t(e)
        }
    }($.cleanData), $.widget = function(t, e, i) {
        var s, n, o, a, r = {},
            h = t.split(".")[0];
        return t = t.split(".")[1], s = h + "-" + t, i || (i = e, e = $.Widget), $.expr[":"][s.toLowerCase()] = function(t) {
            return !!$.data(t, s)
        }, $[h] = $[h] || {}, n = $[h][t], o = $[h][t] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, $.extend(o, n, {
            version: i.version,
            _proto: $.extend({}, i),
            _childConstructors: []
        }), a = new e, a.options = $.widget.extend({}, a.options), $.each(i, function(t, i) {
            if (!$.isFunction(i)) return void(r[t] = i);
            r[t] = function() {
                var s = function() {
                        return e.prototype[t].apply(this, arguments)
                    },
                    n = function(i) {
                        return e.prototype[t].apply(this, i)
                    };
                return function() {
                    var t = this._super,
                        e = this._superApply,
                        o;
                    return this._super = s, this._superApply = n, o = i.apply(this, arguments), this._super = t, this._superApply = e, o
                }
            }()
        }), o.prototype = $.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || t : t
        }, r, {
            constructor: o,
            namespace: h,
            widgetName: t,
            widgetFullName: s
        }), n ? ($.each(n._childConstructors, function(t, e) {
            var i = e.prototype;
            $.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }), delete n._childConstructors) : e._childConstructors.push(o), $.widget.bridge(t, o), o
    }, $.widget.extend = function(t) {
        for (var e = l.call(arguments, 1), i = 0, s = e.length, n, o; i < s; i++)
            for (n in e[i]) o = e[i][n], e[i].hasOwnProperty(n) && void 0 !== o && ($.isPlainObject(o) ? t[n] = $.isPlainObject(t[n]) ? $.widget.extend({}, t[n], o) : $.widget.extend({}, o) : t[n] = o);
        return t
    }, $.widget.bridge = function(t, e) {
        var i = e.prototype.widgetFullName || t;
        $.fn[t] = function(s) {
            var n = "string" == typeof s,
                o = l.call(arguments, 1),
                a = this;
            return n ? this.each(function() {
                var e, n = $.data(this, i);
                return "instance" === s ? (a = n, !1) : n ? $.isFunction(n[s]) && "_" !== s.charAt(0) ? (e = n[s].apply(n, o), e !== n && void 0 !== e ? (a = e && e.jquery ? a.pushStack(e.get()) : e, !1) : void 0) : $.error("no such method '" + s + "' for " + t + " widget instance") : $.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
            }) : (o.length && (s = $.widget.extend.apply(null, [s].concat(o))), this.each(function() {
                var t = $.data(this, i);
                t ? (t.option(s || {}), t._init && t._init()) : $.data(this, i, new e(s, this))
            })), a
        }
    }, $.Widget = function() {}, $.Widget._childConstructors = [], $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = $(e || this.defaultElement || this)[0], this.element = $(e), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = $(), this.hoverable = $(), this.focusable = $(), e !== this && ($.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }), this.document = $(e.style ? e.ownerDocument : e.document || e), this.window = $(this.document[0].defaultView || this.document[0].parentWindow)), this.options = $.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: $.noop,
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: $.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i = t,
                s, n, o;
            if (0 === arguments.length) return $.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (i = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = i[t] = $.widget.extend({}, this.options[t]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = e
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    i[t] = e
                }
            return this._setOptions(i), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, e, i) {
            var s, n = this;
            "boolean" != typeof t && (i = e, e = t, t = !1), i ? (e = s = $(e), this.bindings = this.bindings.add(e)) : (i = e, e = this.element, s = this.widget()), $.each(i, function(i, o) {
                function a() {
                    if (t || !0 !== n.options.disabled && !$(this).hasClass("ui-state-disabled")) return ("string" == typeof o ? n[o] : o).apply(n, arguments)
                }
                "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || $.guid++);
                var r = i.match(/^([\w:-]*)\s*(.*)$/),
                    h = r[1] + n.eventNamespace,
                    l = r[2];
                l ? s.delegate(l, h, a) : e.bind(h, a)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e), this.bindings = $(this.bindings.not(t).get()), this.focusable = $(this.focusable.not(t).get()), this.hoverable = $(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    $(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    $(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    $(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    $(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var s, n, o = this.options[t];
            if (i = i || {}, e = $.Event(e), e.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent)
                for (s in n) s in e || (e[s] = n[s]);
            return this.element.trigger(e, i), !($.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, e) {
        $.Widget.prototype["_" + t] = function(i, s, n) {
            "string" == typeof s && (s = {
                effect: s
            });
            var o, a = s ? !0 === s || "number" == typeof s ? e : s.effect || e : t;
            s = s || {}, "number" == typeof s && (s = {
                duration: s
            }), o = !$.isEmptyObject(s), s.complete = n, s.delay && i.delay(s.delay), o && $.effects && $.effects.effect[a] ? i[t](s) : a !== t && i[a] ? i[a](s.duration, s.easing, n) : i.queue(function(e) {
                $(this)[t](), n && n.call(i[0]), e()
            })
        }
    });
    var c = $.widget,
        u = !1;
    $(document).mouseup(function() {
        u = !1
    });
    var d = $.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(e) {
                if (!0 === $.data(e.target, t.widgetName + ".preventClickEvent")) return $.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!u) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var e = this,
                    i = 1 === t.which,
                    s = !("string" != typeof this.options.cancel || !t.target.nodeName) && $(t.target).closest(this.options.cancel).length;
                return !(i && !s && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === $.data(t.target, this.widgetName + ".preventClickEvent") && $.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return e._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return e._mouseUp(t)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), u = !0, !0))
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && $.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), u = !1, !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    ! function() {
        function t(t, e, i) {
            return [parseFloat(t[0]) * (d.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (d.test(t[1]) ? i / 100 : 1)]
        }

        function e(t, e) {
            return parseInt($.css(t, e), 10) || 0
        }

        function i(t) {
            var e = t[0];
            return 9 === e.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : $.isWindow(e) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : e.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: e.pageY,
                    left: e.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        $.ui = $.ui || {};
        var s, n, o = Math.max,
            a = Math.abs,
            r = Math.round,
            h = /left|center|right/,
            l = /top|center|bottom/,
            c = /[\+\-]\d+(\.[\d]+)?%?/,
            u = /^\w+/,
            d = /%$/,
            p = $.fn.position;
        $.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var t, e, i = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        n = i.children()[0];
                    return $("body").append(i), t = n.offsetWidth, i.css("overflow", "scroll"), e = n.offsetWidth, t === e && (e = i[0].clientWidth), i.remove(), s = t - e
                },
                getScrollInfo: function(t) {
                    var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        s = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? $.position.scrollbarWidth() : 0,
                        height: s ? $.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var e = $(t || window),
                        i = $.isWindow(e[0]),
                        s = !!e[0] && 9 === e[0].nodeType;
                    return {
                        element: e,
                        isWindow: i,
                        isDocument: s,
                        offset: e.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: e.scrollLeft(),
                        scrollTop: e.scrollTop(),
                        width: i || s ? e.width() : e.outerWidth(),
                        height: i || s ? e.height() : e.outerHeight()
                    }
                }
            }, $.fn.position = function(s) {
                if (!s || !s.of) return p.apply(this, arguments);
                s = $.extend({}, s);
                var d, f, m, g, v, _, b = $(s.of),
                    y = $.position.getWithinInfo(s.within),
                    w = $.position.getScrollInfo(y),
                    x = (s.collision || "flip").split(" "),
                    k = {};
                return _ = i(b), b[0].preventDefault && (s.at = "left top"), f = _.width, m = _.height, g = _.offset, v = $.extend({}, g), $.each(["my", "at"], function() {
                    var t = (s[this] || "").split(" "),
                        e, i;
                    1 === t.length && (t = h.test(t[0]) ? t.concat(["center"]) : l.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), t[0] = h.test(t[0]) ? t[0] : "center", t[1] = l.test(t[1]) ? t[1] : "center", e = c.exec(t[0]), i = c.exec(t[1]), k[this] = [e ? e[0] : 0, i ? i[0] : 0], s[this] = [u.exec(t[0])[0], u.exec(t[1])[0]]
                }), 1 === x.length && (x[1] = x[0]), "right" === s.at[0] ? v.left += f : "center" === s.at[0] && (v.left += f / 2), "bottom" === s.at[1] ? v.top += m : "center" === s.at[1] && (v.top += m / 2), d = t(k.at, f, m), v.left += d[0], v.top += d[1], this.each(function() {
                    var i, h, l = $(this),
                        c = l.outerWidth(),
                        u = l.outerHeight(),
                        p = e(this, "marginLeft"),
                        _ = e(this, "marginTop"),
                        C = c + p + e(this, "marginRight") + w.width,
                        D = u + _ + e(this, "marginBottom") + w.height,
                        I = $.extend({}, v),
                        T = t(k.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? I.left -= c : "center" === s.my[0] && (I.left -= c / 2), "bottom" === s.my[1] ? I.top -= u : "center" === s.my[1] && (I.top -= u / 2), I.left += T[0], I.top += T[1], n || (I.left = r(I.left), I.top = r(I.top)), i = {
                        marginLeft: p,
                        marginTop: _
                    }, $.each(["left", "top"], function(t, e) {
                        $.ui.position[x[t]] && $.ui.position[x[t]][e](I, {
                            targetWidth: f,
                            targetHeight: m,
                            elemWidth: c,
                            elemHeight: u,
                            collisionPosition: i,
                            collisionWidth: C,
                            collisionHeight: D,
                            offset: [d[0] + T[0], d[1] + T[1]],
                            my: s.my,
                            at: s.at,
                            within: y,
                            elem: l
                        })
                    }), s.using && (h = function(t) {
                        var e = g.left - I.left,
                            i = e + f - c,
                            n = g.top - I.top,
                            r = n + m - u,
                            h = {
                                target: {
                                    element: b,
                                    left: g.left,
                                    top: g.top,
                                    width: f,
                                    height: m
                                },
                                element: {
                                    element: l,
                                    left: I.left,
                                    top: I.top,
                                    width: c,
                                    height: u
                                },
                                horizontal: i < 0 ? "left" : e > 0 ? "right" : "center",
                                vertical: r < 0 ? "top" : n > 0 ? "bottom" : "middle"
                            };
                        f < c && a(e + i) < f && (h.horizontal = "center"), m < u && a(n + r) < m && (h.vertical = "middle"), o(a(e), a(i)) > o(a(n), a(r)) ? h.important = "horizontal" : h.important = "vertical", s.using.call(this, t, h)
                    }), l.offset($.extend(I, {
                        using: h
                    }))
                })
            }, $.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i = e.within,
                            s = i.isWindow ? i.scrollLeft : i.offset.left,
                            n = i.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            r = s - a,
                            h = a + e.collisionWidth - n - s,
                            l;
                        e.collisionWidth > n ? r > 0 && h <= 0 ? (l = t.left + r + e.collisionWidth - n - s, t.left += r - l) : t.left = h > 0 && r <= 0 ? s : r > h ? s + n - e.collisionWidth : s : r > 0 ? t.left += r : h > 0 ? t.left -= h : t.left = o(t.left - a, t.left)
                    },
                    top: function(t, e) {
                        var i = e.within,
                            s = i.isWindow ? i.scrollTop : i.offset.top,
                            n = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            r = s - a,
                            h = a + e.collisionHeight - n - s,
                            l;
                        e.collisionHeight > n ? r > 0 && h <= 0 ? (l = t.top + r + e.collisionHeight - n - s, t.top += r - l) : t.top = h > 0 && r <= 0 ? s : r > h ? s + n - e.collisionHeight : s : r > 0 ? t.top += r : h > 0 ? t.top -= h : t.top = o(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i = e.within,
                            s = i.offset.left + i.scrollLeft,
                            n = i.width,
                            o = i.isWindow ? i.scrollLeft : i.offset.left,
                            r = t.left - e.collisionPosition.marginLeft,
                            h = r - o,
                            l = r + e.collisionWidth - n - o,
                            c = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            u = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            d = -2 * e.offset[0],
                            p, f;
                        h < 0 ? ((p = t.left + c + u + d + e.collisionWidth - n - s) < 0 || p < a(h)) && (t.left += c + u + d) : l > 0 && ((f = t.left - e.collisionPosition.marginLeft + c + u + d - o) > 0 || a(f) < l) && (t.left += c + u + d)
                    },
                    top: function(t, e) {
                        var i = e.within,
                            s = i.offset.top + i.scrollTop,
                            n = i.height,
                            o = i.isWindow ? i.scrollTop : i.offset.top,
                            r = t.top - e.collisionPosition.marginTop,
                            h = r - o,
                            l = r + e.collisionHeight - n - o,
                            c = "top" === e.my[1],
                            u = c ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            p = -2 * e.offset[1],
                            f, m;
                        h < 0 ? ((m = t.top + u + d + p + e.collisionHeight - n - s) < 0 || m < a(h)) && (t.top += u + d + p) : l > 0 && ((f = t.top - e.collisionPosition.marginTop + u + d + p - o) > 0 || a(f) < l) && (t.top += u + d + p)
                    }
                },
                flipfit: {
                    left: function() {
                        $.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        $.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, e, i, s, o, a = document.getElementsByTagName("body")[0],
                    r = document.createElement("div");
                t = document.createElement(a ? "div" : "body"), i = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, a && $.extend(i, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (o in i) t.style[o] = i[o];
                t.appendChild(r), e = a || document.documentElement, e.insertBefore(t, e.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", s = $(r).offset().left, n = s > 10 && s < 11, t.innerHTML = "", e.removeChild(t)
            }()
    }();
    var p = $.ui.position,
        f = $.widget("ui.accordion", {
            version: "1.11.4",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var t = this.options;
                this.prevShow = this.prevHide = $(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : $()
                }
            },
            _createIcons: function() {
                var t = this.options.icons;
                t && ($("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                if ("active" === t) return void this._activate(e);
                "event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))
            },
            _keydown: function(t) {
                if (!t.altKey && !t.ctrlKey) {
                    var e = $.ui.keyCode,
                        i = this.headers.length,
                        s = this.headers.index(t.target),
                        n = !1;
                    switch (t.keyCode) {
                        case e.RIGHT:
                        case e.DOWN:
                            n = this.headers[(s + 1) % i];
                            break;
                        case e.LEFT:
                        case e.UP:
                            n = this.headers[(s - 1 + i) % i];
                            break;
                        case e.SPACE:
                        case e.ENTER:
                            this._eventHandler(t);
                            break;
                        case e.HOME:
                            n = this.headers[0];
                            break;
                        case e.END:
                            n = this.headers[i - 1];
                            break
                    }
                    n && ($(t.target).attr("tabIndex", -1), $(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
                }
            },
            _panelKeyDown: function(t) {
                t.keyCode === $.ui.keyCode.UP && t.ctrlKey && $(t.currentTarget).prev().focus()
            },
            refresh: function() {
                var t = this.options;
                this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = $()) : !1 === t.active ? this._activate(0) : this.active.length && !$.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = $()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var t, e = this.options,
                    i = e.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                    var t = $(this),
                        e = t.uniqueId().attr("id"),
                        i = t.next(),
                        s = i.uniqueId().attr("id");
                    t.attr("aria-controls", s), i.attr("aria-labelledby", e)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(e.event), "fill" === i ? (t = s.height(), this.element.siblings(":visible").each(function() {
                    var e = $(this),
                        i = e.css("position");
                    "absolute" !== i && "fixed" !== i && (t -= e.outerHeight(!0))
                }), this.headers.each(function() {
                    t -= $(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    $(this).height(Math.max(0, t - $(this).innerHeight() + $(this).height()))
                }).css("overflow", "auto")) : "auto" === i && (t = 0, this.headers.next().each(function() {
                    t = Math.max(t, $(this).css("height", "").height())
                }).height(t))
            },
            _activate: function(t) {
                var e = this._findActive(t)[0];
                e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
                    target: e,
                    currentTarget: e,
                    preventDefault: $.noop
                }))
            },
            _findActive: function(t) {
                return "number" == typeof t ? this.headers.eq(t) : $()
            },
            _setupEvents: function(t) {
                var e = {
                    keydown: "_keydown"
                };
                t && $.each(t.split(" "), function(t, i) {
                    e[i] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, e), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(t) {
                var e = this.options,
                    i = this.active,
                    s = $(t.currentTarget),
                    n = s[0] === i[0],
                    o = n && e.collapsible,
                    a = o ? $() : s.next(),
                    r = i.next(),
                    h = {
                        oldHeader: i,
                        oldPanel: r,
                        newHeader: o ? $() : s,
                        newPanel: a
                    };
                t.preventDefault(), n && !e.collapsible || !1 === this._trigger("beforeActivate", t, h) || (e.active = !o && this.headers.index(s), this.active = n ? $() : s, this._toggle(h), i.removeClass("ui-accordion-header-active ui-state-active"), e.icons && i.children(".ui-accordion-header-icon").removeClass(e.icons.activeHeader).addClass(e.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), e.icons && s.children(".ui-accordion-header-icon").removeClass(e.icons.header).addClass(e.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(t) {
                var e = t.newPanel,
                    i = this.prevShow.length ? this.prevShow : t.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({
                    "aria-hidden": "true"
                }), i.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), e.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : e.length && this.headers.filter(function() {
                    return 0 === parseInt($(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function(t, e, i) {
                var s, n, o, a = this,
                    r = 0,
                    h = t.css("box-sizing"),
                    l = t.length && (!e.length || t.index() < e.index()),
                    c = this.options.animate || {},
                    u = l && c.down || c,
                    d = function() {
                        a._toggleComplete(i)
                    };
                return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: n,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: n,
                    complete: d,
                    step: function(t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                    }
                })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel;
                e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }),
        m = $.widget("ui.menu", {
            version: "1.11.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left-1 top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var e = $(t.target);
                        !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && $(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var e = $(t.currentTarget);
                            e.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, e)
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            $.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = $(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                var e, i, s, n, o = !0;
                switch (t.keyCode) {
                    case $.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case $.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case $.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case $.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case $.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case $.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case $.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case $.ui.keyCode.ENTER:
                    case $.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case $.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        o = !1, i = this.previousFilter || "", s = String.fromCharCode(t.keyCode), n = !1, clearTimeout(this.filterTimer), s === i ? n = !0 : s = i + s, e = this._filterMenuItems(s), e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e, e.length || (s = String.fromCharCode(t.keyCode), e = this._filterMenuItems(s)), e.length ? (this.focus(t, e), this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                o && t.preventDefault()
            },
            _activate: function(t) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var t, e, i = this,
                    s = this.options.icons.submenu,
                    n = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = $(this),
                        e = t.parent(),
                        i = $("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
                    e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
                }), t = n.add(this.element), e = t.find(this.options.items), e.not(".ui-menu-item").each(function() {
                    var t = $(this);
                    i._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                }), e.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !$.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(t, e) {
                "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
            },
            focus: function(t, e) {
                var i, s;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(t) {
                var e, i, s, n, o, a;
                this._hasScroll() && (e = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - e - i, n = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = t.outerHeight(), s < 0 ? this.activeMenu.scrollTop(n + s) : s + a > o && this.activeMenu.scrollTop(n + s - o + a))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                    item: this.active
                }))
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(t) {
                var e = $.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
            },
            collapseAll: function(t, e) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var i = e ? this.element : $(t && t.target).closest(this.element.find(".ui-menu"));
                    i.length || (i = this.element), this._close(i), this.blur(t), this.activeMenu = i
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function(t) {
                return !$(t.target).closest(".ui-menu").length
            },
            _isDivider: function(t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var s;
                this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
            },
            nextPage: function(t) {
                var e, i, s;
                if (!this.active) return void this.next(t);
                this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return e = $(this), e.offset().top - i - s < 0
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
            },
            previousPage: function(t) {
                var e, i, s;
                if (!this.active) return void this.next(t);
                this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return e = $(this), e.offset().top - i + s > 0
                }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || $(t.target).closest(".ui-menu-item");
                var e = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
            },
            _filterMenuItems: function(t) {
                var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    i = new RegExp("^" + e, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return i.test($.trim($(this).text()))
                })
            }
        });
    $.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, e, i, s = this.element[0].nodeName.toLowerCase(),
                n = "textarea" === s,
                o = "input" === s;
            this.isMultiLine = !!n || !o && this.element.prop("isContentEditable"), this.valueMethod = this.element[n || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return t = !0, i = !0, void(e = !0);
                    t = !1, i = !1, e = !1;
                    var n = $.ui.keyCode;
                    switch (s.keyCode) {
                        case n.PAGE_UP:
                            t = !0, this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            t = !0, this._move("nextPage", s);
                            break;
                        case n.UP:
                            t = !0, this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            t = !0, this._keyEvent("next", s);
                            break;
                        case n.ENTER:
                            this.menu.active && (t = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case n.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case n.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            e = !0, this._searchTimeout(s);
                            break
                    }
                },
                keypress: function(i) {
                    if (t) return t = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || i.preventDefault());
                    if (!e) {
                        var s = $.ui.keyCode;
                        switch (i.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", i);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", i);
                                break;
                            case s.UP:
                                this._keyEvent("previous", i);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", i);
                                break
                        }
                    }
                },
                input: function(t) {
                    if (i) return i = !1, void t.preventDefault();
                    this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(t) {
                    if (this.cancelBlur) return void delete this.cancelBlur;
                    clearTimeout(this.searching), this.close(t), this._change(t)
                }
            }), this._initSource(), this.menu = $("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var e = this.menu.element[0];
                    $(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(i) {
                            i.target === t.element[0] || i.target === e || $.contains(e, i.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, e) {
                    var i, s;
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                        $(t.target).trigger(t.originalEvent)
                    });
                    s = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                        item: s
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), (i = e.item.attr("aria-label") || s.value) && $.trim(i).length && (this.liveRegion.children().hide(), $("<div>").text(i).appendTo(this.liveRegion))
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = $("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? $(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, e, i = this;
            $.isArray(this.options.source) ? (t = this.options.source, this.source = function(e, i) {
                i($.ui.autocomplete.filter(t, e.term))
            }) : "string" == typeof this.options.source ? (e = this.options.source, this.source = function(t, s) {
                i.xhr && i.xhr.abort(), i.xhr = $.ajax({
                    url: e,
                    data: t,
                    dataType: "json",
                    success: function(t) {
                        s(t)
                    },
                    error: function() {
                        s([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                e && (!e || i || s) || (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return $.proxy(function(e) {
                t === this.requestIndex && this.__response(e), --this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : $.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : $.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var e = this.menu.element.empty();
            this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position($.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, e) {
            var i = this;
            $.each(e, function(e, s) {
                i._renderItemData(t, s)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(t, e) {
            return $("<li>").text(e.label).appendTo(t)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
        }
    }), $.extend($.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, e) {
            var i = new RegExp($.ui.autocomplete.escapeRegex(e), "i");
            return $.grep(t, function(t) {
                return i.test(t.label || t.value || t)
            })
        }
    }), $.widget("ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), $("<div>").text(e).appendTo(this.liveRegion))
        }
    });
    var g = $.ui.autocomplete,
        v, _ = "ui-button ui-widget ui-state-default ui-corner-all",
        b = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        y = function() {
            var t = $(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        w = function(t) {
            var e = t.name,
                i = t.form,
                s = $([]);
            return e && (e = e.replace(/'/g, "\\'"), s = i ? $(i).find("[name='" + e + "'][type=radio]") : $("[name='" + e + "'][type=radio]", t.ownerDocument).filter(function() {
                return !this.form
            })), s
        };
    $.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, y), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t = this,
                e = this.options,
                i = "checkbox" === this.type || "radio" === this.type,
                s = i ? "" : "ui-state-active";
            null === e.label && (e.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(_).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                e.disabled || this === v && $(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                e.disabled || $(this).removeClass(s)
            }).bind("click" + this.eventNamespace, function(t) {
                e.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), i && this.element.bind("change" + this.eventNamespace, function() {
                t.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (e.disabled) return !1
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (e.disabled) return !1;
                $(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var i = t.element[0];
                w(i).not(i).map(function() {
                    return $(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (e.disabled) return !1;
                $(this).addClass("ui-state-active"), v = this, t.document.one("mouseup", function() {
                    v = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (e.disabled) return !1;
                $(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(t) {
                if (e.disabled) return !1;
                t.keyCode !== $.ui.keyCode.SPACE && t.keyCode !== $.ui.keyCode.ENTER || $(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                $(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === $.ui.keyCode.SPACE && $(this).click()
            })), this._setOption("disabled", e.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var t, e, i;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(_ + " ui-state-active " + b).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(t, e) {
            if (this._super(t, e), "disabled" === t) return this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")));
            this._resetButton()
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? w(this.element[0]).each(function() {
                $(this).is(":checked") ? $(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : $(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var t = this.buttonElement.removeClass(b),
                e = $("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                i = this.options.icons,
                s = i.primary && i.secondary,
                n = [];
            i.primary || i.secondary ? (this.options.text && n.push("ui-button-text-icon" + (s ? "s" : i.primary ? "-primary" : "-secondary")), i.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + i.primary + "'></span>"), i.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + i.secondary + "'></span>"), this.options.text || (n.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", $.trim(e)))) : n.push("ui-button-text-only"), t.addClass(n.join(" "))
        }
    }), $.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction"),
                e = this.element.find(this.options.items),
                i = e.filter(":ui-button");
            e.not(":ui-button").button(), i.button("refresh"), this.buttons = e.map(function() {
                return $(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return $(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    var x = $.ui.button;
    $.extend($.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var k;
    $.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(t) {
            return a(this._defaults, t || {}), this
        },
        _attachDatepicker: function(t, e) {
            var i, s, n;
            i = t.nodeName.toLowerCase(), s = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst($(t), s), n.settings = $.extend({}, e || {}), "input" === i ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
        },
        _newInst: function(t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? n($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, e) {
            var i = $(t);
            e.append = $([]), e.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(e), $.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, e) {
            var i, s, n, o = this._get(e, "appendText"),
                a = this._get(e, "isRTL");
            e.append && e.append.remove(), o && (e.append = $("<span class='" + this._appendClass + "'>" + o + "</span>"), t[a ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove(), i = this._get(e, "showOn"), "focus" !== i && "both" !== i || t.focus(this._showDatepicker), "button" !== i && "both" !== i || (s = this._get(e, "buttonText"), n = this._get(e, "buttonImage"), e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: s,
                title: s
            }) : $("<button type='button'></button>").addClass(this._triggerClass).html(n ? $("<img/>").attr({
                src: n,
                alt: s,
                title: s
            }) : s)), t[a ? "before" : "after"](e.trigger), e.trigger.click(function() {
                return $.datepicker._datepickerShowing && $.datepicker._lastInput === t[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput !== t[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])) : $.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(t, e) {
            var i = $(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), $.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, e, i, s, n) {
            var o, r, h, l, c, u = this._dialogInst;
            return u || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = $("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), u = this._dialogInst = this._newInst(this._dialogInput, !1), u.settings = {}, $.data(this._dialogInput[0], "datepicker", u)), a(u.settings, s || {}), e = e && e.constructor === Date ? this._formatDate(u, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (r = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [r / 2 - 100 + l, h / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], "datepicker", u), this
        },
        _destroyDatepicker: function(t) {
            var e, i = $(t),
                s = $.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), $.removeData(t, "datepicker"), "input" === e ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(), k === s && (k = null))
        },
        _enableDatepicker: function(t) {
            var e, i, s = $(t),
                n = $.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), "input" === e ? (t.disabled = !1, n.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== e && "span" !== e || (i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = $.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var e, i, s = $(t),
                n = $.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), "input" === e ? (t.disabled = !0, n.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== e && "span" !== e || (i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = $.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return $.data(t, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, e, i) {
            var s, n, o, r, h = this._getInst(t);
            if (2 === arguments.length && "string" == typeof e) return "defaults" === e ? $.extend({}, $.datepicker._defaults) : h ? "all" === e ? $.extend({}, h.settings) : this._get(h, e) : null;
            s = e || {}, "string" == typeof e && (s = {}, s[e] = i), h && (this._curInst === h && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(h, "min"), r = this._getMinMaxDate(h, "max"), a(h.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, o)), null !== r && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, r)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments($(t), h), this._autoSize(h), this._setDate(h, n), this._updateAlternate(h), this._updateDatepicker(h))
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var e, i, s, n = $.datepicker._getInst(t.target),
                o = !0,
                a = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    $.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", n.dpDiv), s[0] && $.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), e = $.datepicker._get(n, "onSelect"), e ? (i = $.datepicker._formatDate(n), e.apply(n.input ? n.input[0] : null, [i, n])) : $.datepicker._hideDatepicker(), !1;
                case 27:
                    $.datepicker._hideDatepicker();
                    break;
                case 33:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(n, "stepBigMonths") : -$.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(n, "stepBigMonths") : +$.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, a ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(n, "stepBigMonths") : -$.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, a ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(n, "stepBigMonths") : +$.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var e, i, s = $.datepicker._getInst(t.target);
            if ($.datepicker._get(s, "constrainInput")) return e = $.datepicker._possibleChars($.datepicker._get(s, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !e || e.indexOf(i) > -1
        },
        _doKeyUp: function(t) {
            var e, i = $.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try {
                e = $.datepicker.parseDate($.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, $.datepicker._getFormatConfig(i)), e && ($.datepicker._setDateFromField(i), $.datepicker._updateAlternate(i), $.datepicker._updateDatepicker(i))
            } catch (t) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput !== t) {
                var e, s, n, o, r, h, l;
                e = $.datepicker._getInst(t), $.datepicker._curInst && $.datepicker._curInst !== e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])), s = $.datepicker._get(e, "beforeShow"), n = s ? s.apply(t, [t, e]) : {}, !1 !== n && (a(e.settings, n), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight), o = !1, $(t).parents().each(function() {
                    return !(o |= "fixed" === $(this).css("position"))
                }), r = {
                    left: $.datepicker._pos[0],
                    top: $.datepicker._pos[1]
                }, $.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), $.datepicker._updateDatepicker(e), r = $.datepicker._checkOffset(e, r, o), e.dpDiv.css({
                    position: $.datepicker._inDialog && $.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: r.left + "px",
                    top: r.top + "px"
                }), e.inline || (h = $.datepicker._get(e, "showAnim"), l = $.datepicker._get(e, "duration"), e.dpDiv.css("z-index", i($(t)) + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects.effect[h] ? e.dpDiv.show(h, $.datepicker._get(e, "showOptions"), l) : e.dpDiv[h || "show"](h ? l : null), $.datepicker._shouldFocusInput(e) && e.input.focus(), $.datepicker._curInst = e))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, k = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var e, i = this._getNumberOfMonths(t),
                s = i[1],
                n = 17,
                a = t.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && o.apply(a.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (e = t.yearshtml, setTimeout(function() {
                e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function(t, e, i) {
            var s = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                o = t.input ? t.input.outerWidth() : 0,
                a = t.input ? t.input.outerHeight() : 0,
                r = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                h = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left === t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + a ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && r > s ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > h && h > n ? Math.abs(n + a) : 0), e
        },
        _findPos: function(t) {
            for (var e, i = this._getInst(t), s = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || $.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
            return e = $(t).offset(), [e.left, e.top]
        },
        _hideDatepicker: function(t) {
            var e, i, s, n, o = this._curInst;
            !o || t && o !== $.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"), i = this._get(o, "duration"), s = function() {
                $.datepicker._tidyDialog(o)
            }, $.effects && ($.effects.effect[e] || $.effects[e]) ? o.dpDiv.hide(e, $.datepicker._get(o, "showOptions"), i, s) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, s), e || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if ($.datepicker._curInst) {
                var e = $(t.target),
                    i = $.datepicker._getInst(e[0]);
                (e[0].id === $.datepicker._mainDivId || 0 !== e.parents("#" + $.datepicker._mainDivId).length || e.hasClass($.datepicker.markerClassName) || e.closest("." + $.datepicker._triggerClass).length || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI) && (!e.hasClass($.datepicker.markerClassName) || $.datepicker._curInst === i) || $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, e, i) {
            var s = $(t),
                n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" === i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
        },
        _gotoToday: function(t) {
            var e, i = $(t),
                s = this._getInst(i[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (e = new Date, s.selectedDay = e.getDate(), s.drawMonth = s.selectedMonth = e.getMonth(), s.drawYear = s.selectedYear = e.getFullYear()), this._notifyChange(s), this._adjustDate(i)
        },
        _selectMonthYear: function(t, e, i) {
            var s = $(t),
                n = this._getInst(s[0]);
            n["selected" + ("M" === i ? "Month" : "Year")] = n["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },
        _selectDay: function(t, e, i, s) {
            var n, o = $(t);
            $(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (n = this._getInst(o[0]), n.selectedDay = n.currentDay = $("a", s).html(), n.selectedMonth = n.currentMonth = e, n.selectedYear = n.currentYear = i, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function(t) {
            var e = $(t);
            this._selectDate(e, "")
        },
        _selectDate: function(t, e) {
            var i, s = $(t),
                n = this._getInst(s[0]);
            e = null != e ? e : this._formatDate(n), n.input && n.input.val(e), this._updateAlternate(n), i = this._get(n, "onSelect"), i ? i.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var e, i, s, n = this._get(t, "altField");
            n && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), s = this.formatDate(e, i, this._getFormatConfig(t)), $(n).each(function() {
                $(this).val(s)
            }))
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [e > 0 && e < 6, ""]
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function(t, e, i) {
            if (null == t || null == e) throw "Invalid arguments";
            if ("" === (e = "object" == typeof e ? e.toString() : e + "")) return null;
            var s, n, o, a = 0,
                r = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                h = "string" != typeof r ? r : (new Date).getFullYear() % 100 + parseInt(r, 10),
                l = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (i ? i.dayNames : null) || this._defaults.dayNames,
                u = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                d = (i ? i.monthNames : null) || this._defaults.monthNames,
                p = -1,
                f = -1,
                m = -1,
                g = -1,
                v = !1,
                _, b = function(e) {
                    var i = s + 1 < t.length && t.charAt(s + 1) === e;
                    return i && s++, i
                },
                y = function(t) {
                    var i = b(t),
                        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && i ? 4 : "o" === t ? 3 : 2,
                        n = "y" === t ? s : 1,
                        o = new RegExp("^\\d{" + n + "," + s + "}"),
                        r = e.substring(a).match(o);
                    if (!r) throw "Missing number at position " + a;
                    return a += r[0].length, parseInt(r[0], 10)
                },
                w = function(t, i, s) {
                    var n = -1,
                        o = $.map(b(t) ? s : i, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if ($.each(o, function(t, i) {
                            var s = i[1];
                            if (e.substr(a, s.length).toLowerCase() === s.toLowerCase()) return n = i[0], a += s.length, !1
                        }), -1 !== n) return n + 1;
                    throw "Unknown name at position " + a
                },
                x = function() {
                    if (e.charAt(a) !== t.charAt(s)) throw "Unexpected literal at position " + a;
                    a++
                };
            for (s = 0; s < t.length; s++)
                if (v) "'" !== t.charAt(s) || b("'") ? x() : v = !1;
                else switch (t.charAt(s)) {
                    case "d":
                        m = y("d");
                        break;
                    case "D":
                        w("D", l, c);
                        break;
                    case "o":
                        g = y("o");
                        break;
                    case "m":
                        f = y("m");
                        break;
                    case "M":
                        f = w("M", u, d);
                        break;
                    case "y":
                        p = y("y");
                        break;
                    case "@":
                        _ = new Date(y("@")), p = _.getFullYear(), f = _.getMonth() + 1, m = _.getDate();
                        break;
                    case "!":
                        _ = new Date((y("!") - this._ticksTo1970) / 1e4), p = _.getFullYear(), f = _.getMonth() + 1, m = _.getDate();
                        break;
                    case "'":
                        b("'") ? x() : v = !0;
                        break;
                    default:
                        x()
                }
                if (a < e.length && (o = e.substr(a), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === p ? p = (new Date).getFullYear() : p < 100 && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p <= h ? 0 : -100)), g > -1)
                for (f = 1, m = g;;) {
                    if (n = this._getDaysInMonth(p, f - 1), m <= n) break;
                    f++, m -= n
                }
            if (_ = this._daylightSavingAdjust(new Date(p, f - 1, m)), _.getFullYear() !== p || _.getMonth() + 1 !== f || _.getDate() !== m) throw "Invalid date";
            return _
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                h = function(e) {
                    var i = s + 1 < t.length && t.charAt(s + 1) === e;
                    return i && s++, i
                },
                l = function(t, e, i) {
                    var s = "" + e;
                    if (h(t))
                        for (; s.length < i;) s = "0" + s;
                    return s
                },
                c = function(t, e, i, s) {
                    return h(t) ? s[e] : i[e]
                },
                u = "",
                d = !1;
            if (e)
                for (s = 0; s < t.length; s++)
                    if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            u += l("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += l("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += h("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            h("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                    }
                    return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                s = !1,
                n = function(i) {
                    var s = e + 1 < t.length && t.charAt(e + 1) === i;
                    return s && e++, s
                };
            for (e = 0; e < t.length; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
                return i
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n
                } catch (t) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function(t, e, i) {
            var s = function(t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                n = function(e) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                    } catch (t) {}
                    for (var i = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, s = i.getFullYear(), n = i.getMonth(), o = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, r = a.exec(e); r;) {
                        switch (r[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(r[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(r[1], 10);
                                break;
                            case "m":
                            case "M":
                                n += parseInt(r[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(s, n));
                                break;
                            case "y":
                            case "Y":
                                s += parseInt(r[1], 10), o = Math.min(o, $.datepicker._getDaysInMonth(s, n));
                                break
                        }
                        r = a.exec(e)
                    }
                    return new Date(s, n, o)
                },
                o = null == e || "" === e ? i : "string" == typeof e ? n(e) : "number" == typeof e ? isNaN(e) ? i : s(e) : new Date(e.getTime());
            return o = o && "Invalid Date" === o.toString() ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function(t) {
            var e = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        $.datepicker._adjustDate(i, -e, "M")
                    },
                    next: function() {
                        $.datepicker._adjustDate(i, +e, "M")
                    },
                    hide: function() {
                        $.datepicker._hideDatepicker()
                    },
                    today: function() {
                        $.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return $.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return $.datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function() {
                        return $.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, m, g, v, _, b, y, w, x, k, C, D, I, T, P, M, S, z, H, A, N, E, W, O, F, R, L = new Date,
                Y = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                B = this._get(t, "isRTL"),
                j = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                K = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                G = 1 !== U[0] || 1 !== U[1],
                Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                J = this._getMinMaxDate(t, "min"),
                Z = this._getMinMaxDate(t, "max"),
                tt = t.drawMonth - V,
                et = t.drawYear;
            if (tt < 0 && (tt += 12, et--), Z)
                for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = J && e < J ? J : e; this._daylightSavingAdjust(new Date(et, tt, 1)) > e;) --tt < 0 && (tt = 11, et--);
            for (t.drawMonth = tt, t.drawYear = et, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, tt - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, et, tt) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, tt + X, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, et, tt) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? Q : Y, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; x < U[0]; x++) {
                for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                    if (D = this._daylightSavingAdjust(new Date(et, tt, t.selectedDay)), I = " ui-corner-all", T = "", G) {
                        if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first", I = " ui-corner-" + (B ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last", I = " ui-corner-" + (B ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", I = "";
                                break
                        }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === x ? B ? o : s : "") + (/all|right/.test(I) && 0 === x ? B ? s : o : "") + this._generateMonthYearHeader(t, tt, et, J, Z, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(et, tt), et === t.selectedYear && tt === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), z = (this._getFirstDayOfMonth(et, tt) - c + 7) % 7, H = Math.ceil((z + S) / 7), A = G && this.maxRows > H ? this.maxRows : H, this.maxRows = A, N = this._daylightSavingAdjust(new Date(et, tt, 1 - z)), E = 0; E < A; E++) {
                        for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; w < 7; w++) O = g ? g.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], F = N.getMonth() !== tt, R = F && !_ || !O[0] || J && N < J || Z && N > Z, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (N.getTime() === D.getTime() && tt === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + O[1] + (N.getTime() === Q.getTime() ? " " + this._currentClass : "") + (N.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (N.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                        T += W + "</tr>"
                    }
                    tt++, tt > 11 && (tt = 0, et++), T += "</tbody></table>" + (G ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += T
                }
                y += k
            }
            return y += l, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!h || c >= s.getMonth()) && (!l || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                            var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), _ && (b += (!o && g && v ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.drawYear + ("Y" === i ? e : 0),
                n = t.drawMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && e < i ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), $.fn.datepicker = function(t) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick), $.datepicker.initialized = !0), 0 === $("#" + $.datepicker._mainDivId).length && $("body").append($.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() {
            "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
        }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
    }, $.datepicker = new s, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.11.4";
    var C = $.datepicker;
    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) return void(this.destroyOnClear = !0);
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var e = this.options;
            return this._blurActiveElement(t), !(this.helper || e.disabled || $(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t), !!this.handle && (this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = $(this);
                return $("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var e = this.document[0];
            if (this.handleElement.is(t.target)) try {
                e.activeElement && "body" !== e.activeElement.nodeName.toLowerCase() && $(e.activeElement).blur()
            } catch (t) {}
        },
        _mouseStart: function(t) {
            var e = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), $.ui.ddmanager && ($.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === $(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), $.ui.ddmanager && !e.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), $.ui.ddmanager && $.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, e) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                var i = this._uiHash();
                if (!1 === this._trigger("drag", t, i)) return this._mouseUp({}), !1;
                this.position = i.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", $.ui.ddmanager && $.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function(t) {
            var e = this,
                i = !1;
            return $.ui.ddmanager && !this.options.dropBehaviour && (i = $.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || $.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== e._trigger("stop", t) && e._clear()
            }) : !1 !== this._trigger("stop", t) && this._clear(), !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(), $.ui.ddmanager && $.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), $.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(t) {
            return !this.options.handle || !!$(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(t) {
            var e = this.options,
                i = $.isFunction(e.helper),
                s = i ? $(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), $.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset(),
                e = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== e && $.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, e, i, s = this.options,
                n = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, $(n).width() - this.helperProportions.width - this.margins.left, ($(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), e = $(s.containment),
                void((i = e[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                h = t.pageX,
                l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(t, e, i) {
            return i = i || this._uiHash(), $.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), $.Widget.prototype._trigger.call(this, t, e, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), $.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, e, i) {
            var s = $.extend({}, e, {
                item: i.element
            });
            i.sortables = [], $(i.options.connectToSortable).each(function() {
                var e = $(this).sortable("instance");
                e && !e.options.disabled && (i.sortables.push(e), e.refreshPositions(), e._trigger("activate", t, s))
            })
        },
        stop: function(t, e, i) {
            var s = $.extend({}, e, {
                item: i.element
            });
            i.cancelHelperRemoval = !1, $.each(i.sortables, function() {
                var e = this;
                e.isOver ? (e.isOver = 0, i.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, s))
            })
        },
        drag: function(t, e, i) {
            $.each(i.sortables, function() {
                var s = !1,
                    n = this;
                n.positionAbs = i.positionAbs, n.helperProportions = i.helperProportions, n.offset.click = i.offset.click, n._intersectsWith(n.containerCache) && (s = !0, $.each(i.sortables, function() {
                    return this.positionAbs = i.positionAbs, this.helperProportions = i.helperProportions, this.offset.click = i.offset.click, this !== n && this._intersectsWith(this.containerCache) && $.contains(n.element[0], this.element[0]) && (s = !1), s
                })), s ? (n.isOver || (n.isOver = 1, i._parent = e.helper.parent(), n.currentItem = e.helper.appendTo(n.element).data("ui-sortable-item", !0), n.options._helper = n.options.helper, n.options.helper = function() {
                    return e.helper[0]
                }, t.target = n.currentItem[0], n._mouseCapture(t, !0), n._mouseStart(t, !0, !0), n.offset.click.top = i.offset.click.top, n.offset.click.left = i.offset.click.left, n.offset.parent.left -= i.offset.parent.left - n.offset.parent.left, n.offset.parent.top -= i.offset.parent.top - n.offset.parent.top, i._trigger("toSortable", t), i.dropped = n.element, $.each(i.sortables, function() {
                    this.refreshPositions()
                }), i.currentItem = i.element, n.fromOutside = i), n.currentItem && (n._mouseDrag(t), e.position = n.position)) : n.isOver && (n.isOver = 0, n.cancelHelperRemoval = !0, n.options._revert = n.options.revert, n.options.revert = !1, n._trigger("out", t, n._uiHash(n)), n._mouseStop(t, !0), n.options.revert = n.options._revert, n.options.helper = n.options._helper, n.placeholder && n.placeholder.remove(), e.helper.appendTo(i._parent), i._refreshOffsets(t), e.position = i._generatePosition(t, !0), i._trigger("fromSortable", t), i.dropped = !1, $.each(i.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), $.ui.plugin.add("draggable", "cursor", {
        start: function(t, e, i) {
            var s = $("body"),
                n = i.options;
            s.css("cursor") && (n._cursor = s.css("cursor")), s.css("cursor", n.cursor)
        },
        stop: function(t, e, i) {
            var s = i.options;
            s._cursor && $("body").css("cursor", s._cursor)
        }
    }), $.ui.plugin.add("draggable", "opacity", {
        start: function(t, e, i) {
            var s = $(e.helper),
                n = i.options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(t, e, i) {
            var s = i.options;
            s._opacity && $(e.helper).css("opacity", s._opacity)
        }
    }), $.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, e, i) {
            var s = i.options,
                n = !1,
                o = i.scrollParentNotHidden[0],
                a = i.document[0];
            o !== a && "HTML" !== o.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity ? o.scrollTop = n = o.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = n = o.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity ? o.scrollLeft = n = o.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - $(a).scrollTop() < s.scrollSensitivity ? n = $(a).scrollTop($(a).scrollTop() - s.scrollSpeed) : $(window).height() - (t.pageY - $(a).scrollTop()) < s.scrollSensitivity && (n = $(a).scrollTop($(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - $(a).scrollLeft() < s.scrollSensitivity ? n = $(a).scrollLeft($(a).scrollLeft() - s.scrollSpeed) : $(window).width() - (t.pageX - $(a).scrollLeft()) < s.scrollSensitivity && (n = $(a).scrollLeft($(a).scrollLeft() + s.scrollSpeed)))), !1 !== n && $.ui.ddmanager && !s.dropBehaviour && $.ui.ddmanager.prepareOffsets(i, t)
        }
    }), $.ui.plugin.add("draggable", "snap", {
        start: function(t, e, i) {
            var s = i.options;
            i.snapElements = [], $(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var t = $(this),
                    e = t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function(t, e, i) {
            var s, n, o, a, r, h, l, c, u, d, p = i.options,
                f = p.snapTolerance,
                m = e.offset.left,
                g = m + i.helperProportions.width,
                v = e.offset.top,
                _ = v + i.helperProportions.height;
            for (u = i.snapElements.length - 1; u >= 0; u--) r = i.snapElements[u].left - i.margins.left, h = r + i.snapElements[u].width, l = i.snapElements[u].top - i.margins.top, c = l + i.snapElements[u].height, g < r - f || m > h + f || _ < l - f || v > c + f || !$.contains(i.snapElements[u].item.ownerDocument, i.snapElements[u].item) ? (i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, $.extend(i._uiHash(), {
                snapItem: i.snapElements[u].item
            })), i.snapElements[u].snapping = !1) : ("inner" !== p.snapMode && (s = Math.abs(l - _) <= f, n = Math.abs(c - v) <= f, o = Math.abs(r - g) <= f, a = Math.abs(h - m) <= f, s && (e.position.top = i._convertPositionTo("relative", {
                top: l - i.helperProportions.height,
                left: 0
            }).top), n && (e.position.top = i._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: r - i.helperProportions.width
            }).left), a && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left)), d = s || n || o || a, "outer" !== p.snapMode && (s = Math.abs(l - v) <= f, n = Math.abs(c - _) <= f, o = Math.abs(r - m) <= f, a = Math.abs(h - g) <= f, s && (e.position.top = i._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top), n && (e.position.top = i._convertPositionTo("relative", {
                top: c - i.helperProportions.height,
                left: 0
            }).top), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left), a && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: h - i.helperProportions.width
            }).left)), !i.snapElements[u].snapping && (s || n || o || a || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, $.extend(i._uiHash(), {
                snapItem: i.snapElements[u].item
            })), i.snapElements[u].snapping = s || n || o || a || d)
        }
    }), $.ui.plugin.add("draggable", "stack", {
        start: function(t, e, i) {
            var s, n = i.options,
                o = $.makeArray($(n.stack)).sort(function(t, e) {
                    return (parseInt($(t).css("zIndex"), 10) || 0) - (parseInt($(e).css("zIndex"), 10) || 0)
                });
            o.length && (s = parseInt($(o[0]).css("zIndex"), 10) || 0, $(o).each(function(t) {
                $(this).css("zIndex", s + t)
            }), this.css("zIndex", s + o.length))
        }
    }), $.ui.plugin.add("draggable", "zIndex", {
        start: function(t, e, i) {
            var s = $(e.helper),
                n = i.options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(t, e, i) {
            var s = i.options;
            s._zIndex && $(e.helper).css("zIndex", s._zIndex)
        }
    });
    var D = $.ui.draggable;
    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseInt(t, 10) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseInt(t, 10))
        },
        _hasScroll: function(t, e) {
            if ("hidden" === $(t).css("overflow")) return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[i] > 0 || (t[i] = 1, s = t[i] > 0, t[i] = 0, s)
        },
        _create: function() {
            var t, e, i, s, n, o = this,
                a = this.options;
            if (this.element.addClass("ui-resizable"), $.extend(this, {
                    _aspectRatio: !!a.aspectRatio,
                    aspectRatio: a.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = a.handles || ($(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = $(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, e = 0; e < t.length; e++) i = $.trim(t[e]), n = "ui-resizable-" + i, s = $("<div class='ui-resizable-handle " + n + "'></div>"), s.css({
                    zIndex: a.zIndex
                }), "se" === i && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(s);
            this._renderAxis = function(t) {
                var e, i, s, n;
                t = t || this.element;
                for (e in this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = $(this.handles[e]), this._on(this.handles[e], {
                    mousedown: o._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = $(this.handles[e], this.element), n = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), s = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(s, n), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = s && s[1] ? s[1] : "se")
            }), a.autoHide && (this._handles.hide(), $(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                a.disabled || ($(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                a.disabled || o.resizing || ($(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, e = function(t) {
                $(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (e(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _mouseCapture: function(t) {
            var e, i, s = !1;
            for (e in this.handles)((i = $(this.handles[e])[0]) === t.target || $.contains(i, t.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(t) {
            var e, i, s, n = this.options,
                o = this.element;
            return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), n.containment && (e += $(n.containment).scrollLeft() || 0, i += $(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: e,
                top: i
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalPosition = {
                left: e,
                top: i
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = $(".ui-resizable-" + this.axis).css("cursor"), $("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function(t) {
            var e, i, s = this.originalMousePosition,
                n = this.axis,
                o = t.pageX - s.left || 0,
                a = t.pageY - s.top || 0,
                r = this._change[n];
            return this._updatePrevProperties(), !!r && (e = r.apply(this, [t, o, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), $.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var e, i, s, n, o, a, r, h = this.options,
                l = this;
            return this._helper && (e = this._proportionallyResizeElements, i = e.length && /textarea/i.test(e[0].nodeName), s = i && this._hasScroll(e[0], "left") ? 0 : l.sizeDiff.height, n = i ? 0 : l.sizeDiff.width, o = {
                width: l.helper.width() - n,
                height: l.helper.height() - s
            }, a = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, r = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, h.animate || this.element.css($.extend(o, {
                top: r,
                left: a
            })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !h.animate && this._proportionallyResize()), $("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                l = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseInt(s[e], 10) || 0, i[e] += parseInt(n[e], 10) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var t = this.element,
                e = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || $("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, e, i) {
                return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            sw: function(t, e, i) {
                return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            },
            ne: function(t, e, i) {
                return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            nw: function(t, e, i) {
                return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function(t, e) {
            $.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), $.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var e = $(this).resizable("instance"),
                i = e.options,
                s = e._proportionallyResizeElements,
                n = s.length && /textarea/i.test(s[0].nodeName),
                o = n && e._hasScroll(s[0], "left") ? 0 : e.sizeDiff.height,
                a = n ? 0 : e.sizeDiff.width,
                r = {
                    width: e.size.width - a,
                    height: e.size.height - o
                },
                h = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null,
                l = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null;
            e.element.animate($.extend(r, l && h ? {
                top: l,
                left: h
            } : {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(e.element.css("width"), 10),
                        height: parseInt(e.element.css("height"), 10),
                        top: parseInt(e.element.css("top"), 10),
                        left: parseInt(e.element.css("left"), 10)
                    };
                    s && s.length && $(s[0]).css({
                        width: i.width,
                        height: i.height
                    }), e._updateCache(i), e._propagate("resize", t)
                }
            })
        }
    }), $.ui.plugin.add("resizable", "containment", {
        start: function() {
            var t, e, i, s, n, o, a, r = $(this).resizable("instance"),
                h = r.options,
                l = r.element,
                c = h.containment,
                u = c instanceof $ ? c.get(0) : /parent/.test(c) ? l.parent().get(0) : c;
            u && (r.containerElement = $(u), /document/.test(c) || c === document ? (r.containerOffset = {
                left: 0,
                top: 0
            }, r.containerPosition = {
                left: 0,
                top: 0
            }, r.parentData = {
                element: $(document),
                left: 0,
                top: 0,
                width: $(document).width(),
                height: $(document).height() || document.body.parentNode.scrollHeight
            }) : (t = $(u), e = [], $(["Top", "Right", "Left", "Bottom"]).each(function(i, s) {
                e[i] = r._num(t.css("padding" + s))
            }), r.containerOffset = t.offset(), r.containerPosition = t.position(), r.containerSize = {
                height: t.innerHeight() - e[3],
                width: t.innerWidth() - e[1]
            }, i = r.containerOffset, s = r.containerSize.height, n = r.containerSize.width, o = r._hasScroll(u, "left") ? u.scrollWidth : n, a = r._hasScroll(u) ? u.scrollHeight : s, r.parentData = {
                element: u,
                left: i.left,
                top: i.top,
                width: o,
                height: a
            }))
        },
        resize: function(t) {
            var e, i, s, n, o = $(this).resizable("instance"),
                a = o.options,
                r = o.containerOffset,
                h = o.position,
                l = o._aspectRatio || t.shiftKey,
                c = {
                    top: 0,
                    left: 0
                },
                u = o.containerElement,
                d = !0;
            u[0] !== document && /static/.test(u.css("position")) && (c = r), h.left < (o._helper ? r.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - r.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio, d = !1), o.position.left = a.helper ? r.left : 0), h.top < (o._helper ? r.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - r.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio, d = !1), o.position.top = o._helper ? r.top : 0), s = o.containerElement.get(0) === o.element.parent().get(0), n = /relative|absolute/.test(o.containerElement.css("position")), s && n ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - r.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - r.top)), e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, l && (o.size.height = o.size.width / o.aspectRatio, d = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, l && (o.size.width = o.size.height * o.aspectRatio, d = !1)), d || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        },
        stop: function() {
            var t = $(this).resizable("instance"),
                e = t.options,
                i = t.containerOffset,
                s = t.containerPosition,
                n = t.containerElement,
                o = $(t.helper),
                a = o.offset(),
                r = o.outerWidth() - t.sizeDiff.width,
                h = o.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(n.css("position")) && $(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: h
            }), t._helper && !e.animate && /static/.test(n.css("position")) && $(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: h
            })
        }
    }), $.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = $(this).resizable("instance"),
                e = t.options;
            $(e.alsoResize).each(function() {
                var t = $(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseInt(t.width(), 10),
                    height: parseInt(t.height(), 10),
                    left: parseInt(t.css("left"), 10),
                    top: parseInt(t.css("top"), 10)
                })
            })
        },
        resize: function(t, e) {
            var i = $(this).resizable("instance"),
                s = i.options,
                n = i.originalSize,
                o = i.originalPosition,
                a = {
                    height: i.size.height - n.height || 0,
                    width: i.size.width - n.width || 0,
                    top: i.position.top - o.top || 0,
                    left: i.position.left - o.left || 0
                };
            $(s.alsoResize).each(function() {
                var t = $(this),
                    i = $(this).data("ui-resizable-alsoresize"),
                    s = {},
                    n = t.parents(e.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                $.each(n, function(t, e) {
                    var n = (i[e] || 0) + (a[e] || 0);
                    n && n >= 0 && (s[e] = n || null)
                }), t.css(s)
            })
        },
        stop: function() {
            $(this).removeData("resizable-alsoresize")
        }
    }), $.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = $(this).resizable("instance"),
                e = t.options,
                i = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = $(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = $(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), $.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, e = $(this).resizable("instance"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                o = e.originalPosition,
                a = e.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                h = r[0] || 1,
                l = r[1] || 1,
                c = Math.round((s.width - n.width) / h) * h,
                u = Math.round((s.height - n.height) / l) * l,
                d = n.width + c,
                p = n.height + u,
                f = i.maxWidth && i.maxWidth < d,
                m = i.maxHeight && i.maxHeight < p,
                g = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : ((p - l <= 0 || d - h <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), p - l > 0 ? (e.size.height = p, e.position.top = o.top - u) : (p = l - t.height, e.size.height = p, e.position.top = o.top + n.height - p), d - h > 0 ? (e.size.width = d, e.position.left = o.left - c) : (d = h - t.width, e.size.width = d, e.position.left = o.left + n.width - d))
        }
    });
    var I = $.ui.resizable,
        T = $.widget("ui.dialog", {
            version: "1.11.4",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "Close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(t) {
                        var e = $(this).css(t).offset().top;
                        e < 0 && $(this).css("top", t.top - e)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && $.fn.draggable && this._makeDraggable(), this.options.resizable && $.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? $(t) : this.document.find(t || "body").eq(0)
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: $.noop,
            enable: $.noop,
            close: function(t) {
                var e, i = this;
                if (this._isOpen && !1 !== this._trigger("beforeClose", t)) {
                    if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                        e = this.document[0].activeElement, e && "body" !== e.nodeName.toLowerCase() && $(e).blur()
                    } catch (t) {}
                    this._hide(this.uiDialog, this.options.hide, function() {
                        i._trigger("close", t)
                    })
                }
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(t, e) {
                var i = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +$(this).css("z-index")
                    }).get(),
                    n = Math.max.apply(null, s);
                return n >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", n + 1), i = !0), i && !e && this._trigger("focus", t), i
            },
            open: function() {
                var t = this;
                if (this._isOpen) return void(this._moveToTop() && this._focusTabbable());
                this._isOpen = !0, this.opener = $(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                        t._focusTabbable(), t._trigger("focus")
                    }),
                    this._makeFocusTarget(), this._trigger("open")
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
            },
            _keepFocus: function(t) {
                function e() {
                    var t = this.document[0].activeElement;
                    this.uiDialog[0] === t || $.contains(this.uiDialog[0], t) || this._focusTabbable()
                }
                t.preventDefault(), e.call(this), this._delay(e)
            },
            _createWrapper: function() {
                this.uiDialog = $("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === $.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                        if (t.keyCode === $.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                            var e = this.uiDialog.find(":tabbable"),
                                i = e.filter(":first"),
                                s = e.filter(":last");
                            t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                                s.focus()
                            }), t.preventDefault()) : (this._delay(function() {
                                i.focus()
                            }), t.preventDefault())
                        }
                    },
                    mousedown: function(t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var t;
                this.uiDialogTitlebar = $("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function(t) {
                        $(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = $("<button type='button'></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t)
                    }
                }), t = $("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                    "aria-labelledby": t.attr("id")
                })
            },
            _title: function(t) {
                this.options.title || t.html("&#160;"), t.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = $("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = $("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var t = this,
                    e = this.options.buttons;
                if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), $.isEmptyObject(e) || $.isArray(e) && !e.length) return void this.uiDialog.removeClass("ui-dialog-buttons");
                $.each(e, function(e, i) {
                    var s, n;
                    i = $.isFunction(i) ? {
                        click: i,
                        text: e
                    } : i, i = $.extend({
                        type: "button"
                    }, i), s = i.click, i.click = function() {
                        s.apply(t.element[0], arguments)
                    }, n = {
                        icons: i.icons,
                        text: i.showText
                    }, delete i.icons, delete i.showText, $("<button></button>", i).button(n).appendTo(t.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)
            },
            _makeDraggable: function() {
                function t(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var e = this,
                    i = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(i, s) {
                        $(this).addClass("ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", i, t(s))
                    },
                    drag: function(i, s) {
                        e._trigger("drag", i, t(s))
                    },
                    stop: function(s, n) {
                        var o = n.offset.left - e.document.scrollLeft(),
                            a = n.offset.top - e.document.scrollTop();
                        i.position = {
                            my: "left top",
                            at: "left" + (o >= 0 ? "+" : "") + o + " top" + (a >= 0 ? "+" : "") + a,
                            of: e.window
                        }, $(this).removeClass("ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", s, t(n))
                    }
                })
            },
            _makeResizable: function() {
                function t(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var e = this,
                    i = this.options,
                    s = i.resizable,
                    n = this.uiDialog.css("position"),
                    o = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: i.maxWidth,
                    maxHeight: i.maxHeight,
                    minWidth: i.minWidth,
                    minHeight: this._minHeight(),
                    handles: o,
                    start: function(i, s) {
                        $(this).addClass("ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, t(s))
                    },
                    resize: function(i, s) {
                        e._trigger("resize", i, t(s))
                    },
                    stop: function(s, n) {
                        var o = e.uiDialog.offset(),
                            a = o.left - e.document.scrollLeft(),
                            r = o.top - e.document.scrollTop();
                        i.height = e.uiDialog.height(), i.width = e.uiDialog.width(), i.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                            of: e.window
                        }, $(this).removeClass("ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", s, t(n))
                    }
                }).css("position", n)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(t) {
                        this._makeFocusTarget(), this._focusedElement = $(t.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var t = this._trackingInstances(),
                    e = $.inArray(this, t); - 1 !== e && t.splice(e, 1)
            },
            _trackingInstances: function() {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function() {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function(t) {
                var e = this,
                    i = !1,
                    s = {};
                $.each(t, function(t, n) {
                    e._setOption(t, n), t in e.sizeRelatedOptions && (i = !0), t in e.resizableRelatedOptions && (s[t] = n)
                }), i && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function(t, e) {
                var i, s, n = this.uiDialog;
                "dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                    label: "" + e
                }), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, s = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: s.width
                }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var t = $(this);
                    return $("<div>").css({
                        position: "absolute",
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }).appendTo(t.parent()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(t) {
                return !!$(t.target).closest(".ui-dialog").length || !!$(t.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var t = !0;
                    this._delay(function() {
                        t = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(e) {
                            t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = $("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                }
            }
        });
    $.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, e = this.options,
                i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = $.isFunction(i) ? i : function(t) {
                return t.is(i)
            }, this.proportions = function() {
                if (!arguments.length) return t || (t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                });
                t = arguments[0]
            }, this._addToManager(e.scope), e.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function(t) {
            $.ui.ddmanager.droppables[t] = $.ui.ddmanager.droppables[t] || [], $.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(t) {
            for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function() {
            var t = $.ui.ddmanager.droppables[this.options.scope];
            this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(t, e) {
            if ("accept" === t) this.accept = $.isFunction(e) ? e : function(t) {
                return t.is(e)
            };
            else if ("scope" === t) {
                var i = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(i), this._addToManager(e)
            }
            this._super(t, e)
        },
        _activate: function(t) {
            var e = $.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), e && this._trigger("activate", t, this.ui(e))
        },
        _deactivate: function(t) {
            var e = $.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), e && this._trigger("deactivate", t, this.ui(e))
        },
        _over: function(t) {
            var e = $.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(e)))
        },
        _out: function(t) {
            var e = $.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(e)))
        },
        _drop: function(t, e) {
            var i = e || $.ui.ddmanager.current,
                s = !1;
            return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var e = $(this).droppable("instance");
                if (e.options.greedy && !e.options.disabled && e.options.scope === i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && $.ui.intersect(i, $.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance, t)) return s = !0, !1
            }), !s && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(i)), this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), $.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && t < e + i
        }
        return function(e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                h = a + e.helperProportions.height,
                l = i.offset.left,
                c = i.offset.top,
                u = l + i.proportions().width,
                d = c + i.proportions().height;
            switch (s) {
                case "fit":
                    return l <= o && r <= u && c <= a && h <= d;
                case "intersect":
                    return l < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && h - e.helperProportions.height / 2 < d;
                case "pointer":
                    return t(n.pageY, c, i.proportions().height) && t(n.pageX, l, i.proportions().width);
                case "touch":
                    return (a >= c && a <= d || h >= c && h <= d || a < c && h > d) && (o >= l && o <= u || r >= l && r <= u || o < l && r > u);
                default:
                    return !1
            }
        }
    }(), $.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(t, e) {
            var i, s, n = $.ui.ddmanager.droppables[t.options.scope] || [],
                o = e ? e.type : null,
                a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            t: for (i = 0; i < n.length; i++)
                if (!(n[i].options.disabled || t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element))) {
                    for (s = 0; s < a.length; s++)
                        if (a[s] === n[i].element[0]) {
                            n[i].proportions().height = 0;
                            continue t
                        }
                    n[i].visible = "none" !== n[i].element.css("display"), n[i].visible && ("mousedown" === o && n[i]._activate.call(n[i], e), n[i].offset = n[i].element.offset(), n[i].proportions({
                        width: n[i].element[0].offsetWidth,
                        height: n[i].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, e) {
            var i = !1;
            return $.each(($.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && $.ui.intersect(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
            }), i
        },
        dragStart: function(t, e) {
            t.element.parentsUntil("body").bind("scroll.droppable", function() {
                t.options.refreshPositions || $.ui.ddmanager.prepareOffsets(t, e)
            })
        },
        drag: function(t, e) {
            t.options.refreshPositions && $.ui.ddmanager.prepareOffsets(t, e), $.each($.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var i, s, n, o = $.ui.intersect(t, this, this.options.tolerance, e),
                        a = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (s = this.options.scope, n = this.element.parents(":data(ui-droppable)").filter(function() {
                        return $(this).droppable("instance").options.scope === s
                    }), n.length && (i = $(n[0]).droppable("instance"), i.greedyChild = "isover" === a)), i && "isover" === a && (i.isover = !1, i.isout = !0, i._out.call(i, e)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, e), i && "isout" === a && (i.isout = !1, i.isover = !0, i._over.call(i, e)))
                }
            })
        },
        dragStop: function(t, e) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || $.ui.ddmanager.prepareOffsets(t, e)
        }
    };
    var P = $.ui.droppable,
        M = "ui-effects-",
        S = $;
    $.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var s = c[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
            }

            function s(e) {
                var i = h(),
                    s = i._rgba = [];
                return e = e.toLowerCase(), f(r, function(t, n) {
                    var o, a = n.re.exec(e),
                        r = a && n.parse(a),
                        h = n.space || "rgba";
                    if (r) return o = i[h](r), i[l[h].cache] = o[l[h].cache], s = i._rgba = o._rgba, !1
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, p.transparent), i) : p[e]
            }

            function n(t, e, i) {
                return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            var o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/,
                r = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                h = t.Color = function(e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n)
                },
                l = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                c = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                u = h.support = {},
                d = t("<p>")[0],
                p, f = t.each;
            d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, f(l, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = t.extend(h.prototype, {
                parse: function(e, n, o, a) {
                    if (void 0 === e) return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = t(e).css(n), n = void 0);
                    var r = this,
                        c = t.type(e),
                        u = this._rgba = [];
                    return void 0 !== n && (e = [e, n, o, a], c = "array"), "string" === c ? this.parse(s(e) || p._default) : "array" === c ? (f(l.rgba.props, function(t, s) {
                        u[s.idx] = i(e[s.idx], s)
                    }), this) : "object" === c ? (e instanceof h ? f(l, function(t, i) {
                        e[i.cache] && (r[i.cache] = e[i.cache].slice())
                    }) : f(l, function(s, n) {
                        var o = n.cache;
                        f(n.props, function(t, s) {
                            if (!r[o] && n.to) {
                                if ("alpha" === t || null == e[t]) return;
                                r[o] = n.to(r._rgba)
                            }
                            r[o][s.idx] = i(e[t], s, !0)
                        }), r[o] && t.inArray(null, r[o].slice(0, 3)) < 0 && (r[o][3] = 1, n.from && (r._rgba = n.from(r[o])))
                    }), this) : void 0
                },
                is: function(t) {
                    var e = h(t),
                        i = !0,
                        s = this;
                    return f(l, function(t, n) {
                        var o, a = e[n.cache];
                        return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [], f(n.props, function(t, e) {
                            if (null != a[e.idx]) return i = a[e.idx] === o[e.idx]
                        })), i
                    }), i
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(l, function(i, s) {
                        e[s.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var s = h(t),
                        n = s._space(),
                        o = l[n],
                        a = 0 === this.alpha() ? h("transparent") : this,
                        r = a[o.cache] || o.to(a._rgba),
                        u = r.slice();
                    return s = s[o.cache], f(o.props, function(t, n) {
                        var o = n.idx,
                            a = r[o],
                            h = s[o],
                            l = c[n.type] || {};
                        null !== h && (null === a ? u[o] = h : (l.mod && (h - a > l.mod / 2 ? a += l.mod : a - h > l.mod / 2 && (a -= l.mod)), u[o] = i((h - a) * e + a, n)))
                    }), this[n](u)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = h(e)._rgba;
                    return h(t.map(i, function(t, e) {
                        return (1 - s) * n[e] + s * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, l.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 255,
                    i = t[1] / 255,
                    s = t[2] / 255,
                    n = t[3],
                    o = Math.max(e, i, s),
                    a = Math.min(e, i, s),
                    r = o - a,
                    h = o + a,
                    l = .5 * h,
                    c, u;
                return c = a === o ? 0 : e === o ? 60 * (i - s) / r + 360 : i === o ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240, u = 0 === r ? 0 : l <= .5 ? r / h : r / (2 - h), [Math.round(c) % 360, u, l, null == n ? 1 : n]
            }, l.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    o = t[3],
                    a = s <= .5 ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - a;
                return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
            }, f(l, function(e, s) {
                var n = s.props,
                    o = s.cache,
                    r = s.to,
                    l = s.from;
                h.fn[e] = function(e) {
                    if (r && !this[o] && (this[o] = r(this._rgba)), void 0 === e) return this[o].slice();
                    var s, a = t.type(e),
                        c = "array" === a || "object" === a ? e : arguments,
                        u = this[o].slice();
                    return f(n, function(t, e) {
                        var s = c["object" === a ? t : e.idx];
                        null == s && (s = u[e.idx]), u[e.idx] = i(s, e)
                    }), l ? (s = h(l(u)), s[o] = u, s) : h(u)
                }, f(n, function(i, s) {
                    h.fn[i] || (h.fn[i] = function(n) {
                        var o = t.type(n),
                            r = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e,
                            h = this[r](),
                            l = h[s.idx],
                            c;
                        return "undefined" === o ? l : ("function" === o && (n = n.call(this, l), o = t.type(n)), null == n && s.empty ? this : ("string" === o && (c = a.exec(n)) && (n = l + parseFloat(c[2]) * ("+" === c[1] ? 1 : -1)), h[s.idx] = n, this[r](h)))
                    })
                })
            }), h.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var o, a, r = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                                if (n = h(o || n), !u.rgba && 1 !== n._rgba[3]) {
                                    for (a = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && a && a.style;) try {
                                        r = t.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (t) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (t) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook(o), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        e["border" + s + "Color"] = t
                    }), e
                }
            }, p = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(S),
        function() {
            function t(t) {
                var e, i, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    n = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (i = s.length; i--;) e = s[i], "string" == typeof s[e] && (n[$.camelCase(e)] = s[e]);
                else
                    for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
                return n
            }

            function e(t, e) {
                var i = {},
                    n, o;
                for (n in e) o = e[n], t[n] !== o && (s[n] || !$.fx.step[n] && isNaN(parseFloat(o)) || (i[n] = o));
                return i
            }
            var i = ["add", "remove", "toggle"],
                s = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
                $.fx.step[e] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (S.style(t.elem, e, t.end), t.setAttr = !0)
                }
            }), $.fn.addBack || ($.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), $.effects.animateClass = function(s, n, o, a) {
                var r = $.speed(n, o, a);
                return this.queue(function() {
                    var n = $(this),
                        o = n.attr("class") || "",
                        a, h = r.children ? n.find("*").addBack() : n;
                    h = h.map(function() {
                        return {
                            el: $(this),
                            start: t(this)
                        }
                    }), a = function() {
                        $.each(i, function(t, e) {
                            s[e] && n[e + "Class"](s[e])
                        })
                    }, a(), h = h.map(function() {
                        return this.end = t(this.el[0]), this.diff = e(this.start, this.end), this
                    }), n.attr("class", o), h = h.map(function() {
                        var t = this,
                            e = $.Deferred(),
                            i = $.extend({}, r, {
                                queue: !1,
                                complete: function() {
                                    e.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, i), e.promise()
                    }), $.when.apply($, h.get()).done(function() {
                        a(), $.each(arguments, function() {
                            var t = this.el;
                            $.each(this.diff, function(e) {
                                t.css(e, "")
                            })
                        }), r.complete.call(n[0])
                    })
                })
            }, $.fn.extend({
                addClass: function(t) {
                    return function(e, i, s, n) {
                        return i ? $.effects.animateClass.call(this, {
                            add: e
                        }, i, s, n) : t.apply(this, arguments)
                    }
                }($.fn.addClass),
                removeClass: function(t) {
                    return function(e, i, s, n) {
                        return arguments.length > 1 ? $.effects.animateClass.call(this, {
                            remove: e
                        }, i, s, n) : t.apply(this, arguments)
                    }
                }($.fn.removeClass),
                toggleClass: function(t) {
                    return function(e, i, s, n, o) {
                        return "boolean" == typeof i || void 0 === i ? s ? $.effects.animateClass.call(this, i ? {
                            add: e
                        } : {
                            remove: e
                        }, s, n, o) : t.apply(this, arguments) : $.effects.animateClass.call(this, {
                            toggle: e
                        }, i, s, n)
                    }
                }($.fn.toggleClass),
                switchClass: function(t, e, i, s, n) {
                    return $.effects.animateClass.call(this, {
                        add: e,
                        remove: t
                    }, i, s, n)
                }
            })
        }(),
        function() {
            function t(t, e, i, s) {
                return $.isPlainObject(t) && (e = t, t = t.effect), t = {
                    effect: t
                }, null == e && (e = {}), $.isFunction(e) && (s = e, i = null, e = {}), ("number" == typeof e || $.fx.speeds[e]) && (s = i, i = e, e = {}), $.isFunction(i) && (s = i, i = null), e && $.extend(t, e), i = i || e.duration, t.duration = $.fx.off ? 0 : "number" == typeof i ? i : i in $.fx.speeds ? $.fx.speeds[i] : $.fx.speeds._default, t.complete = s || e.complete, t
            }

            function e(t) {
                return !(t && "number" != typeof t && !$.fx.speeds[t]) || ("string" == typeof t && !$.effects.effect[t] || (!!$.isFunction(t) || "object" == typeof t && !t.effect))
            }
            $.extend($.effects, {
                version: "1.11.4",
                save: function(t, e) {
                    for (var i = 0; i < e.length; i++) null !== e[i] && t.data(M + e[i], t[0].style[e[i]])
                },
                restore: function(t, e) {
                    var i, s;
                    for (s = 0; s < e.length; s++) null !== e[s] && (i = t.data(M + e[s]), void 0 === i && (i = ""), t.css(e[s], i))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var e = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            float: t.css("float")
                        },
                        i = $("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        s = {
                            width: t.width(),
                            height: t.height()
                        },
                        n = document.activeElement;
                    try {
                        n.id
                    } catch (t) {
                        n = document.body
                    }
                    return t.wrap(i), (t[0] === n || $.contains(t[0], n)) && $(n).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : ($.extend(e, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), $.each(["top", "left", "bottom", "right"], function(i, s) {
                        e[s] = t.css(s), isNaN(parseInt(e[s], 10)) && (e[s] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(s), i.css(e).show()
                },
                removeWrapper: function(t) {
                    var e = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === e || $.contains(t[0], e)) && $(e).focus()), t
                },
                setTransition: function(t, e, i, s) {
                    return s = s || {}, $.each(e, function(e, n) {
                        var o = t.cssUnit(n);
                        o[0] > 0 && (s[n] = o[0] * i + o[1])
                    }), s
                }
            }), $.fn.extend({
                effect: function() {
                    function e(t) {
                        function e() {
                            $.isFunction(n) && n.call(s[0]), $.isFunction(t) && t()
                        }
                        var s = $(this),
                            n = i.complete,
                            a = i.mode;
                        (s.is(":hidden") ? "hide" === a : "show" === a) ? (s[a](), e()) : o.call(s[0], i, e)
                    }
                    var i = t.apply(this, arguments),
                        s = i.mode,
                        n = i.queue,
                        o = $.effects.effect[i.effect];
                    return $.fx.off || !o ? s ? this[s](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : !1 === n ? this.each(e) : this.queue(n || "fx", e)
                },
                show: function(i) {
                    return function(s) {
                        if (e(s)) return i.apply(this, arguments);
                        var n = t.apply(this, arguments);
                        return n.mode = "show", this.effect.call(this, n)
                    }
                }($.fn.show),
                hide: function(i) {
                    return function(s) {
                        if (e(s)) return i.apply(this, arguments);
                        var n = t.apply(this, arguments);
                        return n.mode = "hide", this.effect.call(this, n)
                    }
                }($.fn.hide),
                toggle: function(i) {
                    return function(s) {
                        if (e(s) || "boolean" == typeof s) return i.apply(this, arguments);
                        var n = t.apply(this, arguments);
                        return n.mode = "toggle", this.effect.call(this, n)
                    }
                }($.fn.toggle),
                cssUnit: function(t) {
                    var e = this.css(t),
                        i = [];
                    return $.each(["em", "px", "%", "pt"], function(t, s) {
                        e.indexOf(s) > 0 && (i = [parseFloat(e), s])
                    }), i
                }
            })
        }(),
        function() {
            var t = {};
            $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, i) {
                t[i] = function(t) {
                    return Math.pow(t, e + 2)
                }
            }), $.extend(t, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), $.each(t, function(t, e) {
                $.easing["easeIn" + t] = e, $.easing["easeOut" + t] = function(t) {
                    return 1 - e(1 - t)
                }, $.easing["easeInOut" + t] = function(t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
                }
            })
        }();
    var z = $.effects,
        H = $.effects.effect.blind = function(t, e) {
            var i = $(this),
                s = /up|down|vertical/,
                n = /up|left|vertical|horizontal/,
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = $.effects.setMode(i, t.mode || "hide"),
                r = t.direction || "up",
                h = s.test(r),
                l = h ? "height" : "width",
                c = h ? "top" : "left",
                u = n.test(r),
                d = {},
                p = "show" === a,
                f, m, g;
            i.parent().is(".ui-effects-wrapper") ? $.effects.save(i.parent(), o) : $.effects.save(i, o), i.show(), f = $.effects.createWrapper(i).css({
                overflow: "hidden"
            }), m = f[l](), g = parseFloat(f.css(c)) || 0, d[l] = p ? m : 0, u || (i.css(h ? "bottom" : "right", 0).css(h ? "top" : "left", "auto").css({
                position: "absolute"
            }), d[c] = p ? g : m + g), p && (f.css(l, 0), u || f.css(c, g + m)), f.animate(d, {
                duration: t.duration,
                easing: t.easing,
                queue: !1,
                complete: function() {
                    "hide" === a && i.hide(), $.effects.restore(i, o), $.effects.removeWrapper(i), e()
                }
            })
        },
        A = $.effects.effect.bounce = function(t, e) {
            var i = $(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                n = $.effects.setMode(i, t.mode || "effect"),
                o = "hide" === n,
                a = "show" === n,
                r = t.direction || "up",
                h = t.distance,
                l = t.times || 5,
                c = 2 * l + (a || o ? 1 : 0),
                u = t.duration / c,
                d = t.easing,
                p = "up" === r || "down" === r ? "top" : "left",
                f = "up" === r || "left" === r,
                m, g, v, _ = i.queue(),
                b = _.length;
            for ((a || o) && s.push("opacity"), $.effects.save(i, s), i.show(), $.effects.createWrapper(i), h || (h = i["top" === p ? "outerHeight" : "outerWidth"]() / 3), a && (v = {
                    opacity: 1
                }, v[p] = 0, i.css("opacity", 0).css(p, f ? 2 * -h : 2 * h).animate(v, u, d)), o && (h /= Math.pow(2, l - 1)), v = {}, v[p] = 0, m = 0; m < l; m++) g = {}, g[p] = (f ? "-=" : "+=") + h, i.animate(g, u, d).animate(v, u, d), h = o ? 2 * h : h / 2;
            o && (g = {
                opacity: 0
            }, g[p] = (f ? "-=" : "+=") + h, i.animate(g, u, d)), i.queue(function() {
                o && i.hide(), $.effects.restore(i, s), $.effects.removeWrapper(i), e()
            }), b > 1 && _.splice.apply(_, [1, 0].concat(_.splice(b, c + 1))), i.dequeue()
        },
        N = $.effects.effect.clip = function(t, e) {
            var i = $(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                n = $.effects.setMode(i, t.mode || "hide"),
                o = "show" === n,
                a = t.direction || "vertical",
                r = "vertical" === a,
                h = r ? "height" : "width",
                l = r ? "top" : "left",
                c = {},
                u, d, p;
            $.effects.save(i, s), i.show(), u = $.effects.createWrapper(i).css({
                overflow: "hidden"
            }), d = "IMG" === i[0].tagName ? u : i, p = d[h](), o && (d.css(h, 0), d.css(l, p / 2)), c[h] = o ? p : 0, c[l] = o ? 0 : p / 2, d.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    o || i.hide(), $.effects.restore(i, s), $.effects.removeWrapper(i), e()
                }
            })
        },
        E = $.effects.effect.drop = function(t, e) {
            var i = $(this),
                s = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                n = $.effects.setMode(i, t.mode || "hide"),
                o = "show" === n,
                a = t.direction || "left",
                r = "up" === a || "down" === a ? "top" : "left",
                h = "up" === a || "left" === a ? "pos" : "neg",
                l = {
                    opacity: o ? 1 : 0
                },
                c;
            $.effects.save(i, s), i.show(), $.effects.createWrapper(i), c = t.distance || i["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, o && i.css("opacity", 0).css(r, "pos" === h ? -c : c), l[r] = (o ? "pos" === h ? "+=" : "-=" : "pos" === h ? "-=" : "+=") + c, i.animate(l, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === n && i.hide(), $.effects.restore(i, s), $.effects.removeWrapper(i), e()
                }
            })
        },
        W = $.effects.effect.explode = function(t, e) {
            function i() {
                d.push(this), d.length === n * o && s()
            }

            function s() {
                a.css({
                    visibility: "visible"
                }), $(d).remove(), h || a.hide(), e()
            }
            var n = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                o = n,
                a = $(this),
                r = $.effects.setMode(a, t.mode || "hide"),
                h = "show" === r,
                l = a.show().css("visibility", "hidden").offset(),
                c = Math.ceil(a.outerWidth() / o),
                u = Math.ceil(a.outerHeight() / n),
                d = [],
                p, f, m, g, v, _;
            for (p = 0; p < n; p++)
                for (g = l.top + p * u, _ = p - (n - 1) / 2, f = 0; f < o; f++) m = l.left + f * c, v = f - (o - 1) / 2, a.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -f * c,
                    top: -p * u
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: c,
                    height: u,
                    left: m + (h ? v * c : 0),
                    top: g + (h ? _ * u : 0),
                    opacity: h ? 0 : 1
                }).animate({
                    left: m + (h ? 0 : v * c),
                    top: g + (h ? 0 : _ * u),
                    opacity: h ? 1 : 0
                }, t.duration || 500, t.easing, i)
        },
        O = $.effects.effect.fade = function(t, e) {
            var i = $(this),
                s = $.effects.setMode(i, t.mode || "toggle");
            i.animate({
                opacity: s
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: e
            })
        },
        F = $.effects.effect.fold = function(t, e) {
            var i = $(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                n = $.effects.setMode(i, t.mode || "hide"),
                o = "show" === n,
                a = "hide" === n,
                r = t.size || 15,
                h = /([0-9]+)%/.exec(r),
                l = !!t.horizFirst,
                c = o !== l,
                u = c ? ["width", "height"] : ["height", "width"],
                d = t.duration / 2,
                p, f, m = {},
                g = {};
            $.effects.save(i, s), i.show(), p = $.effects.createWrapper(i).css({
                overflow: "hidden"
            }), f = c ? [p.width(), p.height()] : [p.height(), p.width()], h && (r = parseInt(h[1], 10) / 100 * f[a ? 0 : 1]), o && p.css(l ? {
                height: 0,
                width: r
            } : {
                height: r,
                width: 0
            }), m[u[0]] = o ? f[0] : r, g[u[1]] = o ? f[1] : 0, p.animate(m, d, t.easing).animate(g, d, t.easing, function() {
                a && i.hide(), $.effects.restore(i, s), $.effects.removeWrapper(i), e()
            })
        },
        R = $.effects.effect.highlight = function(t, e) {
            var i = $(this),
                s = ["backgroundImage", "backgroundColor", "opacity"],
                n = $.effects.setMode(i, t.mode || "show"),
                o = {
                    backgroundColor: i.css("backgroundColor")
                };
            "hide" === n && (o.opacity = 0), $.effects.save(i, s), i.show().css({
                backgroundImage: "none",
                backgroundColor: t.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === n && i.hide(), $.effects.restore(i, s), e()
                }
            })
        },
        L = $.effects.effect.size = function(t, e) {
            var i, s, n, o = $(this),
                a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                r = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                h = ["width", "height", "overflow"],
                l = ["fontSize"],
                c = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                u = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                d = $.effects.setMode(o, t.mode || "effect"),
                p = t.restore || "effect" !== d,
                f = t.scale || "both",
                m = t.origin || ["middle", "center"],
                g = o.css("position"),
                v = p ? a : r,
                _ = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === d && o.show(), i = {
                height: o.height(),
                width: o.width(),
                outerHeight: o.outerHeight(),
                outerWidth: o.outerWidth()
            }, "toggle" === t.mode && "show" === d ? (o.from = t.to || _, o.to = t.from || i) : (o.from = t.from || ("show" === d ? _ : i), o.to = t.to || ("hide" === d ? _ : i)), n = {
                from: {
                    y: o.from.height / i.height,
                    x: o.from.width / i.width
                },
                to: {
                    y: o.to.height / i.height,
                    x: o.to.width / i.width
                }
            }, "box" !== f && "both" !== f || (n.from.y !== n.to.y && (v = v.concat(c), o.from = $.effects.setTransition(o, c, n.from.y, o.from), o.to = $.effects.setTransition(o, c, n.to.y, o.to)), n.from.x !== n.to.x && (v = v.concat(u), o.from = $.effects.setTransition(o, u, n.from.x, o.from), o.to = $.effects.setTransition(o, u, n.to.x, o.to))), "content" !== f && "both" !== f || n.from.y !== n.to.y && (v = v.concat(l).concat(h), o.from = $.effects.setTransition(o, l, n.from.y, o.from), o.to = $.effects.setTransition(o, l, n.to.y, o.to)), $.effects.save(o, v), o.show(), $.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (s = $.effects.getBaseline(m, i), o.from.top = (i.outerHeight - o.outerHeight()) * s.y, o.from.left = (i.outerWidth - o.outerWidth()) * s.x, o.to.top = (i.outerHeight - o.to.outerHeight) * s.y, o.to.left = (i.outerWidth - o.to.outerWidth) * s.x), o.css(o.from), "content" !== f && "both" !== f || (c = c.concat(["marginTop", "marginBottom"]).concat(l), u = u.concat(["marginLeft", "marginRight"]), h = a.concat(c).concat(u), o.find("*[width]").each(function() {
                var e = $(this),
                    i = {
                        height: e.height(),
                        width: e.width(),
                        outerHeight: e.outerHeight(),
                        outerWidth: e.outerWidth()
                    };
                p && $.effects.save(e, h), e.from = {
                    height: i.height * n.from.y,
                    width: i.width * n.from.x,
                    outerHeight: i.outerHeight * n.from.y,
                    outerWidth: i.outerWidth * n.from.x
                }, e.to = {
                    height: i.height * n.to.y,
                    width: i.width * n.to.x,
                    outerHeight: i.height * n.to.y,
                    outerWidth: i.width * n.to.x
                }, n.from.y !== n.to.y && (e.from = $.effects.setTransition(e, c, n.from.y, e.from), e.to = $.effects.setTransition(e, c, n.to.y, e.to)), n.from.x !== n.to.x && (e.from = $.effects.setTransition(e, u, n.from.x, e.from), e.to = $.effects.setTransition(e, u, n.to.x, e.to)), e.css(e.from), e.animate(e.to, t.duration, t.easing, function() {
                    p && $.effects.restore(e, h)
                })
            })), o.animate(o.to, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === d && o.hide(), $.effects.restore(o, v), p || ("static" === g ? o.css({
                        position: "relative",
                        top: o.to.top,
                        left: o.to.left
                    }) : $.each(["top", "left"], function(t, e) {
                        o.css(e, function(e, i) {
                            var s = parseInt(i, 10),
                                n = t ? o.to.left : o.to.top;
                            return "auto" === i ? n + "px" : s + n + "px"
                        })
                    })), $.effects.removeWrapper(o), e()
                }
            })
        },
        Y = $.effects.effect.scale = function(t, e) {
            var i = $(this),
                s = $.extend(!0, {}, t),
                n = $.effects.setMode(i, t.mode || "effect"),
                o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === n ? 0 : 100),
                a = t.direction || "both",
                r = t.origin,
                h = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                },
                l = {
                    y: "horizontal" !== a ? o / 100 : 1,
                    x: "vertical" !== a ? o / 100 : 1
                };
            s.effect = "size", s.queue = !1, s.complete = e, "effect" !== n && (s.origin = r || ["middle", "center"], s.restore = !0), s.from = t.from || ("show" === n ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : h), s.to = {
                height: h.height * l.y,
                width: h.width * l.x,
                outerHeight: h.outerHeight * l.y,
                outerWidth: h.outerWidth * l.x
            }, s.fade && ("show" === n && (s.from.opacity = 0, s.to.opacity = 1), "hide" === n && (s.from.opacity = 1, s.to.opacity = 0)), i.effect(s)
        },
        B = $.effects.effect.puff = function(t, e) {
            var i = $(this),
                s = $.effects.setMode(i, t.mode || "hide"),
                n = "hide" === s,
                o = parseInt(t.percent, 10) || 150,
                a = o / 100,
                r = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            $.extend(t, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: s,
                complete: e,
                percent: n ? o : 100,
                from: n ? r : {
                    height: r.height * a,
                    width: r.width * a,
                    outerHeight: r.outerHeight * a,
                    outerWidth: r.outerWidth * a
                }
            }), i.effect(t)
        },
        j = $.effects.effect.pulsate = function(t, e) {
            var i = $(this),
                s = $.effects.setMode(i, t.mode || "show"),
                n = "show" === s,
                o = "hide" === s,
                a = n || "hide" === s,
                r = 2 * (t.times || 5) + (a ? 1 : 0),
                h = t.duration / r,
                l = 0,
                c = i.queue(),
                u = c.length,
                d;
            for (!n && i.is(":visible") || (i.css("opacity", 0).show(), l = 1), d = 1; d < r; d++) i.animate({
                opacity: l
            }, h, t.easing), l = 1 - l;
            i.animate({
                opacity: l
            }, h, t.easing), i.queue(function() {
                o && i.hide(), e()
            }), u > 1 && c.splice.apply(c, [1, 0].concat(c.splice(u, r + 1))), i.dequeue()
        },
        q = $.effects.effect.shake = function(t, e) {
            var i = $(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                n = $.effects.setMode(i, t.mode || "effect"),
                o = t.direction || "left",
                a = t.distance || 20,
                r = t.times || 3,
                h = 2 * r + 1,
                l = Math.round(t.duration / h),
                c = "up" === o || "down" === o ? "top" : "left",
                u = "up" === o || "left" === o,
                d = {},
                p = {},
                f = {},
                m, g = i.queue(),
                v = g.length;
            for ($.effects.save(i, s), i.show(), $.effects.createWrapper(i), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, i.animate(d, l, t.easing), m = 1; m < r; m++) i.animate(p, l, t.easing).animate(f, l, t.easing);
            i.animate(p, l, t.easing).animate(d, l / 2, t.easing).queue(function() {
                "hide" === n && i.hide(), $.effects.restore(i, s), $.effects.removeWrapper(i), e()
            }), v > 1 && g.splice.apply(g, [1, 0].concat(g.splice(v, h + 1))), i.dequeue()
        },
        K = $.effects.effect.slide = function(t, e) {
            var i = $(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                n = $.effects.setMode(i, t.mode || "show"),
                o = "show" === n,
                a = t.direction || "left",
                r = "up" === a || "down" === a ? "top" : "left",
                h = "up" === a || "left" === a,
                l, c = {};
            $.effects.save(i, s), i.show(), l = t.distance || i["top" === r ? "outerHeight" : "outerWidth"](!0), $.effects.createWrapper(i).css({
                overflow: "hidden"
            }), o && i.css(r, h ? isNaN(l) ? "-" + l : -l : l), c[r] = (o ? h ? "+=" : "-=" : h ? "-=" : "+=") + l, i.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.easing,
                complete: function() {
                    "hide" === n && i.hide(), $.effects.restore(i, s), $.effects.removeWrapper(i), e()
                }
            })
        },
        U = $.effects.effect.transfer = function(t, e) {
            var i = $(this),
                s = $(t.to),
                n = "fixed" === s.css("position"),
                o = $("body"),
                a = n ? o.scrollTop() : 0,
                r = n ? o.scrollLeft() : 0,
                h = s.offset(),
                l = {
                    top: h.top - a,
                    left: h.left - r,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                },
                c = i.offset(),
                u = $("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                    top: c.top - a,
                    left: c.left - r,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: n ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    u.remove(), e()
                })
        },
        V = $.widget("ui.progressbar", {
            version: "1.11.4",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = $("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function(t) {
                if (void 0 === t) return this.options.value;
                this.options.value = this._constrainedValue(t), this._refreshValue()
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var t = this.options.value,
                    e = this._percentage();
                this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = $("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": t
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
            }
        }),
        X = $.widget("ui.selectable", $.ui.mouse, {
            version: "1.11.4",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var t, e = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    t = $(e.options.filter, e.element[0]), t.addClass("ui-selectee"), t.each(function() {
                        var t = $(this),
                            e = t.offset();
                        $.data(this, "selectable-item", {
                            element: this,
                            $element: t,
                            left: e.left,
                            top: e.top,
                            right: e.left + t.outerWidth(),
                            bottom: e.top + t.outerHeight(),
                            startselected: !1,
                            selected: t.hasClass("ui-selected"),
                            selecting: t.hasClass("ui-selecting"),
                            unselecting: t.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = $("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(t) {
                var e = this,
                    i = this.options;
                this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = $(i.filter, this.element[0]), this._trigger("start", t), $(i.appendTo).append(this.helper), this.helper.css({
                    left: t.pageX,
                    top: t.pageY,
                    width: 0,
                    height: 0
                }), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var i = $.data(this, "selectable-item");
                    i.startselected = !0, t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, e._trigger("unselecting", t, {
                        unselecting: i.element
                    }))
                }), $(t.target).parents().addBack().each(function() {
                    var i, s = $.data(this, "selectable-item");
                    if (s) return i = !t.metaKey && !t.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), s.unselecting = !i, s.selecting = i, s.selected = i, i ? e._trigger("selecting", t, {
                        selecting: s.element
                    }) : e._trigger("unselecting", t, {
                        unselecting: s.element
                    }), !1
                }))
            },
            _mouseDrag: function(t) {
                if (this.dragged = !0, !this.options.disabled) {
                    var e, i = this,
                        s = this.options,
                        n = this.opos[0],
                        o = this.opos[1],
                        a = t.pageX,
                        r = t.pageY;
                    return n > a && (e = a, a = n, n = e), o > r && (e = r, r = o, o = e), this.helper.css({
                        left: n,
                        top: o,
                        width: a - n,
                        height: r - o
                    }), this.selectees.each(function() {
                        var e = $.data(this, "selectable-item"),
                            h = !1;
                        e && e.element !== i.element[0] && ("touch" === s.tolerance ? h = !(e.left > a || e.right < n || e.top > r || e.bottom < o) : "fit" === s.tolerance && (h = e.left > n && e.right < a && e.top > o && e.bottom < r), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, i._trigger("selecting", t, {
                            selecting: e.element
                        }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), i._trigger("unselecting", t, {
                            unselecting: e.element
                        }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, i._trigger("unselecting", t, {
                            unselecting: e.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(t) {
                var e = this;
                return this.dragged = !1, $(".ui-unselecting", this.element[0]).each(function() {
                    var i = $.data(this, "selectable-item");
                    i.$element.removeClass("ui-unselecting"), i.unselecting = !1, i.startselected = !1, e._trigger("unselected", t, {
                        unselected: i.element
                    })
                }), $(".ui-selecting", this.element[0]).each(function() {
                    var i = $.data(this, "selectable-item");
                    i.$element.removeClass("ui-selecting").addClass("ui-selected"), i.selecting = !1, i.selected = !0, i.startselected = !0, e._trigger("selected", t, {
                        selected: i.element
                    })
                }), this._trigger("stop", t), this.helper.remove(), !1
            }
        }),
        G = $.widget("ui.selectmenu", {
            version: "1.11.4",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var t = this.element.uniqueId().attr("id");
                this.ids = {
                    element: t,
                    button: t + "-button",
                    menu: t + "-menu"
                }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
            },
            _drawButton: function() {
                var t = this;
                this.label = $("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                    click: function(t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = $("<span>", {
                    class: "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true"
                }).insertAfter(this.element), $("<span>", {
                    class: "ui-icon " + this.options.icons.button
                }).prependTo(this.button), this.buttonText = $("<span>", {
                    class: "ui-selectmenu-text"
                }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                    t.menuItems || t._refreshMenu()
                }), this._hoverable(this.button), this._focusable(this.button)
            },
            _drawMenu: function() {
                var t = this;
                this.menu = $("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = $("<div>", {
                    class: "ui-selectmenu-menu ui-front"
                }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    role: "listbox",
                    select: function(e, i) {
                        e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e)
                    },
                    focus: function(e, i) {
                        var s = i.item.data("ui-selectmenu-item");
                        null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, {
                            item: s
                        }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"))
                    }
                }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                }, this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
            },
            _refreshMenu: function() {
                this.menu.empty();
                var t, e = this.element.find("option");
                e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(t) {
                this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
            },
            _position: function() {
                this.menuWrap.position($.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function(t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function() {
                return this.button
            },
            menuWidget: function() {
                return this.menu
            },
            _renderMenu: function(t, e) {
                var i = this,
                    s = "";
                $.each(e, function(e, n) {
                    n.optgroup !== s && ($("<li>", {
                        class: "ui-selectmenu-optgroup ui-menu-divider" + (n.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                        text: n.optgroup
                    }).appendTo(t), s = n.optgroup), i._renderItemData(t, n)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function(t, e) {
                var i = $("<li>");
                return e.disabled && i.addClass("ui-state-disabled"), this._setText(i, e.label), i.appendTo(t)
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function(t, e) {
                var i, s, n = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex)
            },
            _toggle: function(t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function() {
                var t;
                this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function(t) {
                    this.isOpen && ($(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var t;
                    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function(t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function(t) {
                    var e = !0;
                    switch (t.keyCode) {
                        case $.ui.keyCode.TAB:
                        case $.ui.keyCode.ESCAPE:
                            this.close(t), e = !1;
                            break;
                        case $.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(t);
                            break;
                        case $.ui.keyCode.UP:
                            t.altKey ? this._toggle(t) : this._move("prev", t);
                            break;
                        case $.ui.keyCode.DOWN:
                            t.altKey ? this._toggle(t) : this._move("next", t);
                            break;
                        case $.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                            break;
                        case $.ui.keyCode.LEFT:
                            this._move("prev", t);
                            break;
                        case $.ui.keyCode.RIGHT:
                            this._move("next", t);
                            break;
                        case $.ui.keyCode.HOME:
                        case $.ui.keyCode.PAGE_UP:
                            this._move("first", t);
                            break;
                        case $.ui.keyCode.END:
                        case $.ui.keyCode.PAGE_DOWN:
                            this._move("last", t);
                            break;
                        default:
                            this.menu.trigger(t), e = !1
                    }
                    e && t.preventDefault()
                }
            },
            _selectFocusedItem: function(t) {
                var e = this.menuItems.eq(this.focusIndex);
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function(t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function(t, e) {
                "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? $(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _toggleAttr: function() {
                this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var t = this.options.width;
                t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                return {
                    disabled: this.element.prop("disabled")
                }
            },
            _parseOptions: function(t) {
                var e = [];
                t.each(function(t, i) {
                    var s = $(i),
                        n = s.parent("optgroup");
                    e.push({
                        element: s,
                        index: t,
                        value: s.val(),
                        label: s.text(),
                        optgroup: n.attr("label") || "",
                        disabled: n.prop("disabled") || s.prop("disabled")
                    })
                }), this.items = e
            },
            _destroy: function() {
                this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
            }
        }),
        Q = $.widget("ui.slider", $.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var t, e, i = this.options,
                    s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    n = [];
                for (e = i.values && i.values.length || 1, s.length > e && (s.slice(e).remove(), s = s.slice(0, e)), t = s.length; t < e; t++) n.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
                this.handles = s.add($(n.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                    $(this).data("ui-slider-handle-index", t)
                })
            },
            _createRange: function() {
                var t = this.options,
                    e = "";
                t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : $.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = $("<div></div>").appendTo(this.element), e = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(e + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var e, i, s, n, o, a, r, h, l = this,
                    c = this.options;
                return !c.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), e = {
                    x: t.pageX,
                    y: t.pageY
                }, i = this._normValueFromMouse(e), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var e = Math.abs(i - l.values(t));
                    (s > e || s === e && (t === l._lastChangedValue || l.values(t) === c.min)) && (s = e, n = $(this), o = t)
                }), !1 !== (a = this._start(t, o)) && (this._mouseSliding = !0, this._handleIndex = o, n.addClass("ui-state-active").focus(), r = n.offset(), h = !$(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - r.left - n.width() / 2,
                    top: t.pageY - r.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
            },
            _start: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var s, n, o;
                this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && i < s) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: n
                }), s = this.values(e ? 0 : 1), !1 !== o && this.values(e, i))) : i !== this.value() && !1 !== (o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                })) && this.value(i)
            },
            _stop: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
                }
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(t, e) {
                var i, s, n;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!$.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                for (i = this.options.values, s = arguments[0], n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(s[n]), this._change(null, n);
                this._refreshValue()
            },
            _setOption: function(t, e) {
                var i, s = 0;
                switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), $.isArray(this.options.values) && (s = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e), this._super(t, e), t) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), i = 0; i < s; i += 1) this._change(null, i);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1;
                        break
                }
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    s = t - i;
                return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = this.options.max,
                    e = this._valueMin(),
                    i = this.options.step;
                t = Math.floor(+(t - e).toFixed(this._precision()) / i) * i + e, this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshValue: function() {
                var t, e, i, s, n, o = this.options.range,
                    a = this.options,
                    r = this,
                    h = !this._animateOff && a.animate,
                    l = {};
                this.options.values && this.options.values.length ? this.handles.each(function(i) {
                    e = (r.values(i) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, l["horizontal" === r.orientation ? "left" : "bottom"] = e + "%", $(this).stop(1, 1)[h ? "animate" : "css"](l, a.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === i && r.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: e + "%"
                    }, a.animate), 1 === i && r.range[h ? "animate" : "css"]({
                        width: e - t + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === i && r.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: e + "%"
                    }, a.animate), 1 === i && r.range[h ? "animate" : "css"]({
                        height: e - t + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), t = e
                }) : (i = this.value(), s = this._valueMin(), n = this._valueMax(), e = n !== s ? (i - s) / (n - s) * 100 : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = e + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](l, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: e + "%"
                }, a.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                    width: 100 - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: e + "%"
                }, a.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                    height: 100 - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))
            },
            _handleEvents: {
                keydown: function(t) {
                    var e, i, s, n, o = $(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case $.ui.keyCode.HOME:
                        case $.ui.keyCode.END:
                        case $.ui.keyCode.PAGE_UP:
                        case $.ui.keyCode.PAGE_DOWN:
                        case $.ui.keyCode.UP:
                        case $.ui.keyCode.RIGHT:
                        case $.ui.keyCode.DOWN:
                        case $.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, $(t.target).addClass("ui-state-active"), !1 === (e = this._start(t, o)))) return;
                            break
                    }
                    switch (n = this.options.step, i = s = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                        case $.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case $.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case $.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case $.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case $.ui.keyCode.UP:
                        case $.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            s = this._trimAlignValue(i + n);
                            break;
                        case $.ui.keyCode.DOWN:
                        case $.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            s = this._trimAlignValue(i - n);
                            break
                    }
                    this._slide(t, o, s)
                },
                keyup: function(t) {
                    var e = $(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), $(t.target).removeClass("ui-state-active"))
                }
            }
        }),
        J = $.widget("ui.sortable", $.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return t >= e && t < e + i
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function() {
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), $.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(t, e) {
                var i = null,
                    s = !1,
                    n = this;
                return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), $(t.target).parents().each(function() {
                    if ($.data(this, n.widgetName + "-item") === n) return i = $(this), !1
                }), $.data(t.target, n.widgetName + "-item") === n && (i = $(t.target)), !!i && (!(this.options.handle && !e && ($(this.options.handle, i).find("*").addBack().each(function() {
                    this === t.target && (s = !0)
                }), !s)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
            },
            _mouseStart: function(t, e, i) {
                var s, n, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, $.extend(this.offset, {
                        click: {
                            left: t.pageX - this.offset.left,
                            top: t.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", o.cursor), this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
                return $.ui.ddmanager && ($.ui.ddmanager.current = this), $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
            },
            _mouseDrag: function(t) {
                var e, i, s, n, o = this.options,
                    a = !1;
                for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== a && $.ui.ddmanager && !o.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                    if (i = this.items[e], s = i.item[0], (n = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === n ? "next" : "prev"]()[0] === s || $.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && $.contains(this.element[0], s))) {
                        if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                        this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                        break
                    }
                return this._contactContainers(t), $.ui.ddmanager && $.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(t, e) {
                if (t) {
                    if ($.ui.ddmanager && !this.options.dropBehaviour && $.ui.ddmanager.drop(this, t), this.options.revert) {
                        var i = this,
                            s = this.placeholder.offset(),
                            n = this.options.axis,
                            o = {};
                        n && "x" !== n || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, $(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
                            i._clear(t)
                        })
                    } else this._clear(t, e);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), $.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? $(this.domPosition.prev).after(this.currentItem) : $(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(t) {
                var e = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, $(e).each(function() {
                    var e = ($(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                    e && i.push((t.key || e[1] + "[]") + "=" + (t.key && t.expression ? e[1] : e[2]))
                }), !i.length && t.key && i.push(t.key + "="), i.join("&")
            },
            toArray: function(t) {
                var e = this._getItemsAsjQuery(t && t.connected),
                    i = [];
                return t = t || {}, e.each(function() {
                    i.push($(t.item || this).attr(t.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    s = this.positionAbs.top,
                    n = s + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    h = r + t.height,
                    l = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || s + l > r && s + l < h,
                    d = "y" === this.options.axis || e + c > o && e + c < a,
                    p = u && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h
            },
            _intersectsWithPointer: function(t) {
                var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    s = e && i,
                    n = this._getDragVerticalDirection(),
                    o = this._getDragHorizontalDirection();
                return !!s && (this.floating ? o && "right" === o || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1))
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    s = this._getDragVerticalDirection(),
                    n = this._getDragHorizontalDirection();
                return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(t) {
                function e() {
                    a.push(this)
                }
                var i, s, n, o, a = [],
                    r = [],
                    h = this._connectWith();
                if (h && t)
                    for (i = h.length - 1; i >= 0; i--)
                        for (n = $(h[i], this.document[0]), s = n.length - 1; s >= 0; s--)(o = $.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([$.isFunction(o.options.items) ? o.options.items.call(o.element) : $(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (r.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(e);
                return $(a)
            },
            _removeCurrentsFromItems: function() {
                var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = $.grep(this.items, function(e) {
                    for (var i = 0; i < t.length; i++)
                        if (t[i] === e.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(t) {
                this.items = [], this.containers = [this];
                var e, i, s, n, o, a, r, h, l = this.items,
                    c = [
                        [$.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                            item: this.currentItem
                        }) : $(this.options.items, this.element), this]
                    ],
                    u = this._connectWith();
                if (u && this.ready)
                    for (e = u.length - 1; e >= 0; e--)
                        for (s = $(u[e], this.document[0]), i = s.length - 1; i >= 0; i--)(n = $.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && (c.push([$.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, {
                            item: this.currentItem
                        }) : $(n.options.items, n.element), n]), this.containers.push(n));
                for (e = c.length - 1; e >= 0; e--)
                    for (o = c[e][1], a = c[e][0], i = 0, h = a.length; i < h; i++) r = $(a[i]), r.data(this.widgetName + "-item", o), l.push({
                        item: r,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(t) {
                this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var e, i, s, n;
                for (e = this.items.length - 1; e >= 0; e--) i = this.items[e], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? $(this.options.toleranceElement, i.item) : i.item, t || (i.width = s.outerWidth(), i.height = s.outerHeight()), n = s.offset(), i.left = n.left, i.top = n.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (e = this.containers.length - 1; e >= 0; e--) n = this.containers[e].element.offset(), this.containers[e].containerCache.left = n.left, this.containers[e].containerCache.top = n.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
                return this
            },
            _createPlaceholder: function(t) {
                t = t || this;
                var e, i = t.options;
                i.placeholder && i.placeholder.constructor !== String || (e = i.placeholder, i.placeholder = {
                    element: function() {
                        var i = t.currentItem[0].nodeName.toLowerCase(),
                            s = $("<" + i + ">", t.document[0]).addClass(e || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), $("<tr>", t.document[0]).appendTo(s)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, s) : "img" === i && s.attr("src", t.currentItem.attr("src")), e || s.css("visibility", "hidden"), s
                    },
                    update: function(s, n) {
                        e && !i.forcePlaceholderSize || (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), t.placeholder = $(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), i.placeholder.update(t, t.placeholder)
            },
            _createTrPlaceholder: function(t, e) {
                var i = this;
                t.children().each(function() {
                    $("<td>&#160;</td>", i.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(e)
                })
            },
            _contactContainers: function(t) {
                var e, i, s, n, o, a, r, h, l, c, u = null,
                    d = null;
                for (e = this.containers.length - 1; e >= 0; e--)
                    if (!$.contains(this.currentItem[0], this.containers[e].element[0]))
                        if (this._intersectsWith(this.containers[e].containerCache)) {
                            if (u && $.contains(this.containers[e].element[0], u.element[0])) continue;
                            u = this.containers[e], d = e
                        } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                if (u)
                    if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1);
                    else {
                        for (s = 1e4, n = null, l = u.floating || this._isFloating(this.currentItem), o = l ? "left" : "top", a = l ? "width" : "height", c = l ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) $.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (r = this.items[i].item.offset()[o], h = !1, t[c] - r > this.items[i][a] / 2 && (h = !0), Math.abs(t[c] - r) < s && (s = Math.abs(t[c] - r), n = this.items[i], this.direction = h ? "up" : "down"));
                        if (!n && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[d]) return void(this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        n ? this._rearrange(t, n, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
                    }
            },
            _createHelper: function(t) {
                var e = this.options,
                    i = $.isFunction(e.helper) ? $(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || $("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), i[0].style.width && !e.forceHelperSize || i.width(this.currentItem.width()), i[0].style.height && !e.forceHelperSize || i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), $.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var t = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && $.ui.ie) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, e, i, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (t = $(s.containment)[0], e = $(s.containment).offset(), i = "hidden" !== $(t).css("overflow"), this.containment = [e.left + (parseInt($(t).css("borderLeftWidth"), 10) || 0) + (parseInt($(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt($(t).css("borderTopWidth"), 10) || 0) + (parseInt($(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt($(t).css("borderLeftWidth"), 10) || 0) - (parseInt($(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt($(t).css("borderTopWidth"), 10) || 0) - (parseInt($(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    n = /(html|body)/i.test(s[0].tagName);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * i
                }
            },
            _generatePosition: function(t) {
                var e, i, s = this.options,
                    n = t.pageX,
                    o = t.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    r = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), s.grid && (e = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1], o = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - s.grid[1] : e + s.grid[1] : e, i = this.originalPageX + Math.round((n - this.originalPageX) / s.grid[0]) * s.grid[0], n = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - s.grid[0] : i + s.grid[0] : i)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : a.scrollTop()),
                    left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, s) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var n = this.counter;
                this._delay(function() {
                    n === this.counter && this.refreshPositions(!s)
                })
            },
            _clear: function(t, e) {
                function i(t, e, i) {
                    return function(s) {
                        i._trigger(t, s, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var s, n = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (s in this._storedCSS) "auto" !== this._storedCSS[s] && "static" !== this._storedCSS[s] || (this._storedCSS[s] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && n.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (n.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), n.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), n.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (s = 0; s < n.length; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                !1 === $.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
            },
            _uiHash: function(t) {
                var e = t || this;
                return {
                    helper: e.helper,
                    placeholder: e.placeholder || $([]),
                    position: e.position,
                    originalPosition: e.originalPosition,
                    offset: e.positionAbs,
                    item: e.currentItem,
                    sender: t ? t.element : null
                }
            }
        }),
        Z = $.widget("ui.spinner", {
            version: "1.11.4",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var t = {},
                    e = this.element;
                return $.each(["min", "max", "step"], function(i, s) {
                    var n = e.attr(s);
                    void 0 !== n && n.length && (t[s] = n)
                }), t
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    if (this.cancelBlur) return void delete this.cancelBlur;
                    this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t)
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(t) {
                    function e() {
                        this.element[0] === this.document[0].activeElement || (this.element.focus(), this.previous = i, this._delay(function() {
                            this.previous = i
                        }))
                    }
                    var i;
                    i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, e.call(this)
                    }), !1 !== this._start(t) && this._repeat(null, $(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(t) {
                    if ($(t.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(t) && void this._repeat(null, $(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
            },
            _keydown: function(t) {
                var e = this.options,
                    i = $.ui.keyCode;
                switch (t.keyCode) {
                    case i.UP:
                        return this._repeat(null, 1, t), !0;
                    case i.DOWN:
                        return this._repeat(null, -1, t), !0;
                    case i.PAGE_UP:
                        return this._repeat(null, e.page, t), !0;
                    case i.PAGE_DOWN:
                        return this._repeat(null, -e.page, t), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(t) {
                return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
            },
            _repeat: function(t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
                    value: i
                }) || (this._value(i), this.counter++)
            },
            _increment: function(t) {
                var e = this.options.incremental;
                return e ? $.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, s = this.options;
                return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                if ("culture" === t || "numberFormat" === t) {
                    var i = this._parse(this.element.val());
                    return this.options[t] = e, void this.element.val(this._format(i))
                }
                "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
            },
            _setOptions: r(function(t) {
                this._super(t)
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function() {
                var t = this.value();
                return null !== t && t === this._adjustValue(t)
            },
            _value: function(t, e) {
                var i;
                "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: r(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: r(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: r(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: r(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                if (!arguments.length) return this._parse(this.element.val());
                r(this._value).call(this, t)
            },
            widget: function() {
                return this.uiSpinner
            }
        }),
        tt = $.widget("ui.tabs", {
            version: "1.11.4",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function() {
                var t = /#.*$/;
                return function(e) {
                    var i, s;
                    e = e.cloneNode(!1), i = e.href.replace(t, ""), s = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (t) {}
                    try {
                        s = decodeURIComponent(s)
                    } catch (t) {}
                    return e.hash.length > 1 && i === s
                }
            }(),
            _create: function() {
                var t = this,
                    e = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", e.collapsible), this._processTabs(), e.active = this._initialActive(), $.isArray(e.disabled) && (e.disabled = $.unique(e.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                    return t.tabs.index(e)
                }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(e.active) : this.active = $(), this._refresh(), this.active.length && this.load(e.active)
            },
            _initialActive: function() {
                var t = this.options.active,
                    e = this.options.collapsible,
                    i = location.hash.substring(1);
                return null === t && (i && this.tabs.each(function(e, s) {
                    if ($(s).attr("aria-controls") === i) return t = e, !1
                }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== t && -1 !== t || (t = !!this.tabs.length && 0)), !1 !== t && -1 === (t = this.tabs.index(this.tabs.eq(t))) && (t = !e && 0), !e && !1 === t && this.anchors.length && (t = 0), t
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : $()
                }
            },
            _tabKeydown: function(t) {
                var e = $(this.document[0].activeElement).closest("li"),
                    i = this.tabs.index(e),
                    s = !0;
                if (!this._handlePageNav(t)) {
                    switch (t.keyCode) {
                        case $.ui.keyCode.RIGHT:
                        case $.ui.keyCode.DOWN:
                            i++;
                            break;
                        case $.ui.keyCode.UP:
                        case $.ui.keyCode.LEFT:
                            s = !1, i--;
                            break;
                        case $.ui.keyCode.END:
                            i = this.anchors.length - 1;
                            break;
                        case $.ui.keyCode.HOME:
                            i = 0;
                            break;
                        case $.ui.keyCode.SPACE:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                        case $.ui.keyCode.ENTER:
                            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                        default:
                            return
                    }
                    t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, s), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", i)
                    }, this.delay))
                }
            },
            _panelKeydown: function(t) {
                this._handlePageNav(t) || t.ctrlKey && t.keyCode === $.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(t) {
                return t.altKey && t.keyCode === $.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === $.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(t, e) {
                function i() {
                    return t > s && (t = 0), t < 0 && (t = s), t
                }
                for (var s = this.tabs.length - 1; - 1 !== $.inArray(i(), this.options.disabled);) t = e ? t + 1 : t - 1;
                return t
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var t = this.options,
                    e = this.tablist.children(":has(a[href])");
                t.disabled = $.map(e.filter(".ui-state-disabled"), function(t) {
                    return e.index(t)
                }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !$.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = $()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = $()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var t = this,
                    e = this.tabs,
                    i = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                    $(this).is(".ui-state-disabled") && t.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    $(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return $("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = $(), this.anchors.each(function(e, i) {
                    var s, n, o, a = $(i).uniqueId().attr("id"),
                        r = $(i).closest("li"),
                        h = r.attr("aria-controls");
                    t._isLocal(i) ? (s = i.hash, o = s.substring(1), n = t.element.find(t._sanitizeSelector(s))) : (o = r.attr("aria-controls") || $({}).uniqueId()[0].id, s = "#" + o, n = t.element.find(s), n.length || (n = t._createPanel(o), n.insertAfter(t.panels[e - 1] || t.tablist)), n.attr("aria-live", "polite")), n.length && (t.panels = t.panels.add(n)), h && r.data("ui-tabs-aria-controls", h), r.attr({
                        "aria-controls": o,
                        "aria-labelledby": a
                    }), n.attr("aria-labelledby", a)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), e && (this._off(e.not(this.tabs)), this._off(i.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(t) {
                return $("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(t) {
                $.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                for (var e = 0, i; i = this.tabs[e]; e++) !0 === t || -1 !== $.inArray(e, t) ? $(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : $(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = t
            },
            _setupEvents: function(t) {
                var e = {};
                t && $.each(t.split(" "), function(t, i) {
                    e[i] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, e), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(t) {
                var e, i = this.element.parent();
                "fill" === t ? (e = i.height(), e -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var t = $(this),
                        i = t.css("position");
                    "absolute" !== i && "fixed" !== i && (e -= t.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    e -= $(this).outerHeight(!0)
                }), this.panels.each(function() {
                    $(this).height(Math.max(0, e - $(this).innerHeight() + $(this).height()))
                }).css("overflow", "auto")) : "auto" === t && (e = 0, this.panels.each(function() {
                    e = Math.max(e, $(this).height("").height())
                }).height(e))
            },
            _eventHandler: function(t) {
                var e = this.options,
                    i = this.active,
                    s = $(t.currentTarget),
                    n = s.closest("li"),
                    o = n[0] === i[0],
                    a = o && e.collapsible,
                    r = a ? $() : this._getPanelForTab(n),
                    h = i.length ? this._getPanelForTab(i) : $(),
                    l = {
                        oldTab: i,
                        oldPanel: h,
                        newTab: a ? $() : n,
                        newPanel: r
                    };
                t.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !e.collapsible || !1 === this._trigger("beforeActivate", t, l) || (e.active = !a && this.tabs.index(n), this.active = o ? $() : n, this.xhr && this.xhr.abort(), h.length || r.length || $.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), t), this._toggle(t, l))
            },
            _toggle: function(t, e) {
                function i() {
                    n.running = !1, n._trigger("activate", t, e)
                }

                function s() {
                    e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && n.options.show ? n._show(o, n.options.show, i) : (o.show(), i())
                }
                var n = this,
                    o = e.newPanel,
                    a = e.oldPanel;
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() {
                    e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), e.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), o.length && a.length ? e.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
                    return 0 === $(this).attr("tabIndex")
                }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), e.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(t) {
                var e, i = this._findActive(t);
                i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: e,
                    currentTarget: e,
                    preventDefault: $.noop
                }))
            },
            _findActive: function(t) {
                return !1 === t ? $() : this.tabs.eq(t)
            },
            _getIndex: function(t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                    $.data(this, "ui-tabs-destroy") ? $(this).remove() : $(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var t = $(this),
                        e = t.data("ui-tabs-aria-controls");
                    e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(t) {
                var e = this.options.disabled;
                !1 !== e && (void 0 === t ? e = !1 : (t = this._getIndex(t), e = $.isArray(e) ? $.map(e, function(e) {
                    return e !== t ? e : null
                }) : $.map(this.tabs, function(e, i) {
                    return i !== t ? i : null
                })), this._setupDisabled(e))
            },
            disable: function(t) {
                var e = this.options.disabled;
                if (!0 !== e) {
                    if (void 0 === t) e = !0;
                    else {
                        if (t = this._getIndex(t), -1 !== $.inArray(t, e)) return;
                        e = $.isArray(e) ? $.merge([t], e).sort() : [t]
                    }
                    this._setupDisabled(e)
                }
            },
            load: function(t, e) {
                t = this._getIndex(t);
                var i = this,
                    s = this.tabs.eq(t),
                    n = s.find(".ui-tabs-anchor"),
                    o = this._getPanelForTab(s),
                    a = {
                        tab: s,
                        panel: o
                    },
                    r = function(t, e) {
                        "abort" === e && i.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), t === i.xhr && delete i.xhr
                    };
                this._isLocal(n[0]) || (this.xhr = $.ajax(this._ajaxSettings(n, e, a)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function(t, s, n) {
                    setTimeout(function() {
                        o.html(t), i._trigger("load", e, a), r(n, s)
                    }, 1)
                }).fail(function(t, e) {
                    setTimeout(function() {
                        r(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function(t, e, i) {
                var s = this;
                return {
                    url: t.attr("href"),
                    beforeSend: function(t, n) {
                        return s._trigger("beforeLoad", e, $.extend({
                            jqXHR: t,
                            ajaxSettings: n
                        }, i))
                    }
                }
            },
            _getPanelForTab: function(t) {
                var e = $(t).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + e))
            }
        }),
        et = $.widget("ui.tooltip", {
            version: "1.11.4",
            options: {
                content: function() {
                    var t = $(this).attr("title") || "";
                    return $("<a>").text(t).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(t, e) {
                var i = (t.attr("aria-describedby") || "").split(/\s+/);
                i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", $.trim(i.join(" ")))
            },
            _removeDescribedBy: function(t) {
                var e = t.data("ui-tooltip-id"),
                    i = (t.attr("aria-describedby") || "").split(/\s+/),
                    s = $.inArray(e, i); - 1 !== s && i.splice(s, 1), t.removeData("ui-tooltip-id"), i = $.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = $("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
            },
            _setOption: function(t, e) {
                var i = this;
                if ("disabled" === t) return this[e ? "_disable" : "_enable"](), void(this.options[t] = e);
                this._super(t, e), "content" === t && $.each(this.tooltips, function(t, e) {
                    i._updateContent(e.element)
                })
            },
            _disable: function() {
                var t = this;
                $.each(this.tooltips, function(e, i) {
                    var s = $.Event("blur");
                    s.target = s.currentTarget = i.element[0], t.close(s, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var t = $(this);
                    t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var t = $(this);
                    t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                })
            },
            open: function(t) {
                var e = this,
                    i = $(t ? t.target : this.element).closest(this.options.items);
                i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function() {
                    var t = $(this),
                        i;
                    t.data("ui-tooltip-open") && (i = $.Event("blur"), i.target = i.currentTarget = this, e.close(i, !0)), t.attr("title") && (t.uniqueId(), e.parents[this.id] = {
                        element: this,
                        title: t.attr("title")
                    }, t.attr("title", ""))
                }), this._registerCloseHandlers(t, i), this._updateContent(i, t))
            },
            _updateContent: function(t, e) {
                var i, s = this.options.content,
                    n = this,
                    o = e ? e.type : null;
                if ("string" == typeof s) return this._open(e, t, s);
                (i = s.call(t[0], function(i) {
                    n._delay(function() {
                        t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                    })
                })) && this._open(e, t, i)
            },
            _open: function(t, e, i) {
                function s(t) {
                    h.of = t, o.is(":hidden") || o.position(h)
                }
                var n, o, a, r, h = $.extend({}, this.options.position);
                if (i) {
                    if (n = this._find(e)) return void n.tooltip.find(".ui-tooltip-content").html(i);
                    e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), n = this._tooltip(e), o = n.tooltip, this._addDescribedBy(e, o.attr("id")), o.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), i.clone ? (r = i.clone(), r.removeAttr("id").find("[id]").removeAttr("id")) : r = i, $("<div>").html(r).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                        mousemove: s
                    }), s(t)) : o.position($.extend({
                        of: e
                    }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() {
                        o.is(":visible") && (s(h.of), clearInterval(a))
                    }, $.fx.interval)), this._trigger("open", t, {
                        tooltip: o
                    })
                }
            },
            _registerCloseHandlers: function(t, e) {
                var i = {
                    keyup: function(t) {
                        if (t.keyCode === $.ui.keyCode.ESCAPE) {
                            var i = $.Event(t);
                            i.currentTarget = e[0], this.close(i, !0)
                        }
                    }
                };
                e[0] !== this.element[0] && (i.remove = function() {
                    this._removeTooltip(this._find(e).tooltip)
                }), t && "mouseover" !== t.type || (i.mouseleave = "close"), t && "focusin" !== t.type || (i.focusout = "close"), this._on(!0, e, i)
            },
            close: function(t) {
                var e, i = this,
                    s = $(t ? t.currentTarget : this.element),
                    n = this._find(s);
                if (!n) return void s.removeData("ui-tooltip-open");
                e = n.tooltip, n.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), n.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function() {
                    i._removeTooltip($(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && $.each(this.parents, function(t, e) {
                    $(e.element).attr("title", e.title), delete i.parents[t]
                }), n.closing = !0, this._trigger("close", t, {
                    tooltip: e
                }), n.hiding || (n.closing = !1))
            },
            _tooltip: function(t) {
                var e = $("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    i = e.uniqueId().attr("id");
                return $("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[i] = {
                    element: t,
                    tooltip: e
                }
            },
            _find: function(t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function(t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _destroy: function() {
                var t = this;
                $.each(this.tooltips, function(e, i) {
                    var s = $.Event("blur"),
                        n = i.element;
                    s.target = s.currentTarget = n[0], t.close(s, !0), $("#" + e).remove(), n.data("ui-tooltip-title") && (n.attr("title") || n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        })
});