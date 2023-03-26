# Copyright (c) 2023, mymuna and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase


class TestReservation(FrappeTestCase):
	pass
	def test_our_reservation_document(self):
		doc = frappe.get_doc({
               "doctype" : "Reservation",
			   "room_number" : "101",
			   "room_name" : "Classic Bedroom,
			   
			   
		})
