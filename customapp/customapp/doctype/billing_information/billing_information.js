// Copyright (c) 2023, mymuna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Billing Information', {
	// refresh: function(frm) {
		before_save(frm){
			frappe.msgprint("⚠️ Please Fill All the Details ⚠️");
			
		}
	// }
});
frappe.ui.form.on('Billing Information', {
	on_submit: function(frm) {
	  frappe.msgprint("Have a Great Stay ✨!!");
	}
  });
  
