` frappe.templates["room_details"] = 'path/to/cs_room_details.html';`
frappe.pages['room-details'].on_page_load = function (wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Room Details',
		single_column: true
	});

	page.set_title("Room Details : ")
	let $container = $('<div>').appendTo(page.body);

	let room_name = page.add_field({
		label: "Room Name",
		fieldname: "room_name",
		fieldtype: "Link",
		options: "Room Name",
		change() {
			let value = room_name.get_value();
			console.log(value);
			if (value) {

				get_roomnames(value).then((room_name) => {
					console.log(room_name);
					let html = frappe.render_template("cs_room_details", {
						roomnames: room_name,
					});
					$container.html(html);
				});
			}

		}
	})


}
function get_roomnames(room_name) {
	return frappe.db.get_list('Room Name',
		{
			fields: ['room_name', 'price', 'available', 'description'],

			filters: {

				room_name: room_name
			}



		});

}

