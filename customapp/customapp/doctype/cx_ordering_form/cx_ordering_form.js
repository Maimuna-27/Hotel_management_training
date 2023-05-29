// Copyright (c) 2023, mymuna and contributors
// For license information, please see license.txt

frappe.ui.form.on('cx Ordering form', {
	// refresh: function(frm) {
		refresh: function(frm) {
			updateSubtotals(frm, 'breakfasts');
			updateSubtotals(frm, 'brunch');
			updateSubtotals(frm, 'lunch');
			updateSubtotals(frm, 'dinner');
			calculateSubtotalWithTax(frm);
		},

		after_save(frm){
			frappe.msgprint("Thankyou for Ordering 🧡 ");
			
		},
		breakfasts_add: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'breakfasts');
		},
		breakfasts_remove: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'breakfasts');
		},
		brunch_add: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'brunch');
		},
		brunch_remove: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'brunch');
		},
		 lunch_add: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'lunch');
		},
		lunch_remove: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'lunch');
		},
		 dinner_add: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'dinner');
		},
		dinner_remove: function(frm, cdt, cdn) {
			updateSubtotals(frm, 'dinner');
		},
		//Add tax function for addition of tax 
		
		tax: function(frm) {
			calculateSubtotalWithTax(frm);
		}
	// }
});

frappe.ui.form.on('Breakfast Child Table', {
    prices: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'breakfasts');
    },
    breakfasts_remove: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'breakfasts');
    }
});

frappe.ui.form.on('Brunch Child Table', {
    prices: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'brunch');
    },
    brunches_remove: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'brunch');
    }
});

frappe.ui.form.on('Lunch Child Table', {
    prices: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'lunch');
    },
    lunch_remove: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'lunch');
    }
});

frappe.ui.form.on('Dinner Child Table', {
    prices: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'dinner');
    },
    dinner_remove: function(frm, cdt, cdn) {
        updateSubtotals(frm, 'dinner');
    }
});

function updateSubtotals(frm, childTableField) {
    var total = 0;
    frm.doc[childTableField].forEach(function(row) {
        if (!row.__deleted) {
            total += row.prices;
        }
    });
    frm.set_value(childTableField + '_total', total);
    calculateSubtotalWithTax(frm);
}

function calculateSubtotalWithTax(frm) {
    var subtotal = 0;

    // Calculate the subtotal by summing up the total fields of each child table
    subtotal += frm.doc.breakfasts_total || 0;
    subtotal += frm.doc.brunch_total || 0;
    subtotal += frm.doc.lunch_total || 0;
    subtotal += frm.doc.dinner_total || 0;

    var taxAmount = frm.doc.tax || 0; // Get the tax amount from the form field
    var subtotalWithTax = subtotal + taxAmount; // Add tax amount to the subtotal

    frm.set_value('subtotals', subtotalWithTax);
}

   
