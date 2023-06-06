// Copyright (c) 2023, mymuna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Reservation', {
	//refresh(frm) {
		after_save(frm){
			frappe.msgprint("Thankyou for your Reservation");
		}
	//}
})
frappe.ui.form.on('Reservation', {
    refresh: function(frm) {
        // Add custom button for Billing Info
        var billingButton = frm.add_custom_button(__('+ Billing Invoice'), function() {
            openBillingInfo();
        });

        // Add custom class to the button
        billingButton.addClass('btn-primary custom-button-style');
    }
});

function openBillingInfo() {
    // Replace 'your_doctype' with the actual DocType name of the Billing Information form
    frappe.new_doc('Billing Information', {
        // Pass any default values or parameters to the Billing Information form
    });
}
