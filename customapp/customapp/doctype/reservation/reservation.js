// Copyright (c) 2023, mymuna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Reservation', {
	//refresh(frm) {
		after_save(frm){
			frappe.msgprint("Thankyou for your Reservation");
		}
	//}
})