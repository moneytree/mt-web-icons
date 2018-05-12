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
		'mt-settings': '&#xe900;',
		'mt-refresh': '&#xe901;',
		'mt-institution-stored-value': '&#xea23;',
		'mt-institution-stock': '&#xea24;',
		'mt-institution-point': '&#xea25;',
		'mt-institution-manual': '&#xea26;',
		'mt-institution-credit-card': '&#xea27;',
		'mt-institution-corporate': '&#xea28;',
		'mt-institution-bank': '&#xea29;',
		'mt-scope-investment-accounts-read': '&#xea22;',
		'mt-scope-investment-transactions-read': '&#xea21;',
		'mt-scope-point-transactions-read': '&#xea04;',
		'mt-scope-points-read': '&#xea1f;',
		'mt-scope-request-refresh': '&#xea05;',
		'mt-scope-notifications-read': '&#xea06;',
		'mt-scope-life-insurance-read': '&#xea07;',
		'mt-scope-expense-claims-write': '&#xea08;',
		'mt-scope-expense-claims-read': '&#xea09;',
		'mt-scope-categories-write': '&#xea0a;',
		'mt-scope-categories-read': '&#xea0b;',
		'mt-scope-transactions-write': '&#xea0c;',
		'mt-scope-transactions-read': '&#xea20;',
		'mt-scope-accounts-read': '&#xea0d;',
		'mt-scope-guest-read': '&#xea0e;',
		'mt-application': '&#xea10;',
		'mt-organization': '&#xea11;',
		'mt-logotype': '&#xea13;',
		'mt-logo': '&#xea14;',
		'mt-nub-left': '&#xea15;',
		'mt-nub-right': '&#xea16;',
		'mt-nub-up': '&#xea17;',
		'mt-nub-down': '&#xea1e;',
		'mt-question': '&#xea1d;',
		'mt-check2': '&#xea0f;',
		'mt-chevron-left': '&#xea1c;',
		'mt-plus': '&#xe902;',
		'mt-chevron-right': '&#xea1b;',
		'mt-cross2': '&#xea12;',
		'mt-chevron-up': '&#xea1a;',
		'mt-chevron-down': '&#xea19;',
		'mt-back': '&#xea18;',
		'mt-forward': '&#xea03;',
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
