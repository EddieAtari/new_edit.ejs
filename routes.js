// 'New' Route

app.get('/farms/new',  (req, res) => {
	const farm = null; 
	res.render('farms/new_edit', { farm });
});

// 'Edit' Route

app.get('/farms/:id/edit', wrapAsync(async (req, res, next) => {
	const { id } = req.params;
	const farm = await Farm.findById(id);
	console.log(farm);
	if (farm) {
		res.render('farms/new_edit', { farm });
	} else {
		throw new AppError('farm Not Found!!!', 404);
	}
}));
