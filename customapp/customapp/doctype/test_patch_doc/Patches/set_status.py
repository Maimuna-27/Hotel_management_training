import frappe

def execute():
    # Change data type of audit_completed column to VARCHAR
    frappe.db.sql("ALTER TABLE `tabTest Patch Doc` MODIFY COLUMN audit_completed VARCHAR(255)")

    # set all status to completed if audit completed is ticked
    hotels = frappe.get_all("Test Patch Doc", fields=["name","audit_completed"])
    for hotel in hotels:
        if hotel.audit_completed:
            frappe.db.set_value("Test Patch Doc", hotel.name, "audit_completed", "Completed", update_modified=False)
        else:
            frappe.db.set_value("Test Patch Doc", hotel.name, "audit_completed", "Not started", update_modified=False)
