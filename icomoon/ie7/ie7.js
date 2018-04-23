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
		'mt-scope-investment-accounts-read': '&#xe913;',
		'mt-scope-investment-transactions-read': '&#xe914;',
		'mt-scope-point-transactions-read': '&#xe90e;',
		'mt-scope-points-read': '&#xe90f;',
		'mt-scope-request-refresh': '&#xe910;',
		'mt-scope-notifications-read': '&#xe911;',
		'mt-scope-life-insurance-read': '&#xe912;',
		'mt-scope-expense-claims-write': '&#xe915;',
		'mt-scope-expense-claims-read': '&#xe916;',
		'mt-scope-categories-write': '&#xe917;',
		'mt-scope-categories-read': '&#xe918;',
		'mt-scope-transactions-write': '&#xe919;',
		'mt-scope-transactions-read': '&#xe91a;',
		'mt-scope-accounts-read': '&#xe91b;',
		'mt-scope-guest-read': '&#xe91c;',
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
