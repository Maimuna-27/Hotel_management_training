# Copyright (c) 2023, mymuna and contributors
# For license information, please see license.txt



import frappe

def execute(filters=None):
    columns = [
        {
            "fieldname": 'billing_id',
            "label": 'Billing ID',
            "fieldtype": 'Link',
            "options": 'Reservation',
            "width": '230',
            
             
        },
        {
            "fieldname": 'invoice_date',
            "label": 'Invoice Date',
            "fieldtype": 'Date',
            "width": '230'
        },
        {
            "fieldname": 'guest_name',
            "label": 'Guest Name',
            "fieldtype": 'Link',
            "options": 'Billing Information',
            "width": '230'
        },
        {
            "fieldname": 'room_number',
            "label": 'Room Number',
            "fieldtype": 'Data',
            "width": '150'
        },
        {
            "fieldname": 'payment_type',
            "label": 'Payment Type',
            "fieldtype": 'Select',
            "width": '170'
        },
        {
            "fieldname": 'total',
            "label": 'Grand Total',
            "fieldtype": 'Currency',
            "width": '170'
        }
    ]

    data = []

    invoice_list = frappe.get_all("Final Invoice", fields=["invoice_date", "billing_id",
                                                           "guest_name", "room_number", "payment_type", "total"])

    for invoice in invoice_list:
        data.append({
            "billing_id": invoice.billing_id,
            "invoice_date": invoice.invoice_date,
            "guest_name": invoice.guest_name,
            "room_number": invoice.room_number,
            "payment_type": invoice.payment_type,
            "total": invoice.total
        })

    chart = {
        "type": "bar",
        "data": {
            "labels": [d.get("invoice_date") for d in data],
            "datasets": [
                {
                    "name": "Invoice Total",
                    "values": [d.get("total") for d in data]
                }
            ]
        },
        "colors": ["#00008b"]
    }

    return columns, data, None, chart 
