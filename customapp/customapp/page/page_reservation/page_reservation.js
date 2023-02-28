frappe.pages['page-reservation'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Reservations',
		single_column: true
	});
	page.set_indicator('Pending', 'orange')
let $btn = page.set_primary_action('New Reservation', () => create_new(), 'octicon octicon-plus')
//let $btnOne = page.set_secondary_action('Refresh', () => frappe.msgprint("Clicked Refresh"), 'octicon octicon-sync')

let resrvation_id = page.add_field(
	{
		label: "Reservation ID",
		fieldname: "resrvation_id",
		fieldtype: "Data",
		options: " ",
		
})

}