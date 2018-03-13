/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mt-web-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mt-point-transactions-read': '&#xe90e;',
		'mt-points-read': '&#xe90f;',
		'mt-request-refresh': '&#xe910;',
		'mt-notifications-read': '&#xe911;',
		'mt-life-insurance-read': '&#xe912;',
		'mt-investment-transactions-read': '&#xe913;',
		'mt-investment-accounts-read': '&#xe914;',
		'mt-expense-claims-write': '&#xe915;',
		'mt-expense-claims-read': '&#xe916;',
		'mt-categories-write': '&#xe917;',
		'mt-categories-read': '&#xe918;',
		'mt-transactions-write': '&#xe919;',
		'mt-transactions-read': '&#xe91a;',
		'mt-accounts-read': '&#xe91b;',
		'mt-guest-read': '&#xe91c;',
		'mt-check': '&#xe91d;',
		'mt-application': '&#xe91e;',
		'mt-organization': '&#xe91f;',
		'mt-cross': '&#xe90d;',
		'mt-logotype': '&#xe900;',
		'mt-logo': '&#xe901;',
		'mt-nub-left': '&#xe902;',
		'mt-nub-right': '&#xe903;',
		'mt-nub-up': '&#xe904;',
		'mt-nub-down': '&#xe905;',
		'mt-question': '&#xe906;',
		'mt-chevron-left': '&#xe907;',
		'mt-chevron-right': '&#xe908;',
		'mt-chevron-up': '&#xe909;',
		'mt-chevron-down': '&#xe90a;',
		'mt-back': '&#xe90b;',
		'mt-forward': '&#xe90c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mt-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
