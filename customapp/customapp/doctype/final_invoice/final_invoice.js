// Copyright (c) 2023, mymuna and contributors
// For license information, please see license.txt

frappe.ui.form.on('Final Invoice', {
    service_charge: function(frm) {
        calculateSubtotalWithTax(frm);
    },
     car_services: function(frm) {
        calculateSubtotalWithTax(frm);
    },
    total: function(frm) {
        calculateAmountDue(frm);
    },
     refresh: function(frm) {
        // Recalculate the amount due when the form is refreshed
        calculateAmountDue(frm);
    }
});

function calculateSubtotalWithTax(frm) {
    var subtotal = 0;

    // Calculate the subtotal by summing up the total fields of each child table
    subtotal += parseFloat(frm.doc.room_charge) || 0;
    subtotal += parseFloat(frm.doc.ac_charges) || 0;
    subtotal += parseFloat(frm.doc.vat_taxes) || 0;
    

    var serviceAmount = parseFloat(frm.doc.service_charge) || 0; // Get the tax amount from the form field
    var carserviceAmount = parseFloat(frm.doc.car_services) || 0;
    var subtotalWithTax = subtotal + serviceAmount + carserviceAmount; // Add tax amount to the subtotal

    frm.set_value('total', subtotalWithTax);
}


function calculateAmountDue(frm) {
    var total = parseFloat(frm.doc.total) || 0;
    var advancePayment = parseFloat(frm.doc.advance_payment) || 0;

   var amountDue = total - advancePayment;
    //amountDue = Math.max(amountDue, 0); uncomment this when there seems to b negative value in amount due


    frm.set_value('amount_due', amountDue);
}