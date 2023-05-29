// Copyright (c) 2023, mymuna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Billing Information', {
	// refresh: function(frm) {
	//This onload is for pop up message to appear when we click on the form
		onload(frm){
			frappe.msgprint("⚠️ Please Fill All the Details ⚠️");
		
			},
			tax: function(frm) {
				calculateSubtotal(frm);
			},
			ac_prices: function(frm) {
				calculateAcprice(frm);
			}
	// }
});

function calculateAcprice(frm) {
    var price = parseFloat(frm.doc.price) || 0;
    var acPrices = parseFloat(frm.doc.ac_prices) || 0;

    var subtotalWithoutTax = price + acPrices;
    frm.set_value('subtotal_without_tax', subtotalWithoutTax);
}

function calculateSubtotal(frm) {
    var price = parseFloat(frm.doc.price) || 0;
    var tax = parseFloat(frm.doc.tax) || 0;
    var acPrices = parseFloat(frm.doc.ac_prices) || 0;

    var subtotal = price + tax + acPrices;
    frm.set_value('subtotal', subtotal.toFixed(2));
}

/*This is separate on submit function for final subit message*/

frappe.ui.form.on('Billing Information', {
	on_submit: function(frm) {
	  frappe.msgprint("Have a Great Stay ✨!!");
	}
  });
  
