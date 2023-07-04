frappe.pages['guest-tablet'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Guest Tablet',
		single_column: true
	});

	$(frappe.render_template ("guest_tablet",{})).appendTo(page.body);
}