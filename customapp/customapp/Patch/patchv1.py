import frappe

def execute():
    employees = frappe.get_all("Hotel_Employees", fields=[ "first_name","last_name", "employee_full_name"])

    for employee in employees:
        frappe.db.set_value("Hotel_Employees", employee.name, {"employee_full_name": f"{employee.first_name} {employee.last_name}"})