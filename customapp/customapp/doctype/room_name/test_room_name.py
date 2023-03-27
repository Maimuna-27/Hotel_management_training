# Copyright (c) 2023, mymuna and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase


class TestRoomName(FrappeTestCase):
	pass

	def test_our_roomname_document(self):
		doc = frappe.get_doc({
               "doctype" : "Room Name",
			   "room_name" : "Deluxe Bedroom",
			   "price" : "5000",
			   
			   
		})